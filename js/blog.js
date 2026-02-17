/* ===========================
   BLOG JS
   Admin password: change ADMIN_PASS below
=========================== */

const ADMIN_PASS = 'rudra2025'; // ← Change this!
const STORE_KEY = 'rp_posts';

// ---- SAMPLE POSTS ----
const DEFAULT_POSTS = [
  {
    id: 'post_sample1',
    title: 'CYBERHACK-2025: MP Police CTF Writeup',
    tag: 'CTF',
    excerpt: 'How we secured 2nd place at the MP Police CYBERHACK-2025 CTF competition — detailed solution walkthrough for the web and forensics challenges.',
    cover: '',
    body: `<h2>Overview</h2>
<p>The MP Police CYBERHACK-2025 CTF was a 12-hour competition held in Indore. Our team tackled challenges across web exploitation, forensics, OSINT, and cryptography.</p>
<h2>Web Exploitation — Blind SQLi</h2>
<p>One of the key challenges involved a blind SQL injection on a login form with WAF protection. After fuzzing the endpoint we found the filter was bypassing <code>OR</code> — but not boolean payloads using <code>AND</code>.</p>
<pre>admin' AND 1=1--
admin' AND SLEEP(5)--</pre>
<h2>Forensics — Steganography</h2>
<p>The image challenge involved a PNG with hidden data embedded using LSB steganography. We used <strong>steghide</strong> and <strong>zsteg</strong> to extract the flag.</p>
<blockquote>FLAG{ctf_2025_steg0_m4ster}</blockquote>
<h2>Key Takeaways</h2>
<p>Always enumerate more than you think you need to. Layer your fuzzing — start broad, then targeted. And document everything in real-time.</p>`,
    status: 'published',
    date: '2025-11-20',
    created: Date.now() - 86400000
  }
];

// ---- STATE ----
let posts = [];
let isAdmin = false;
let currentView = 'list';
let currentPostId = null;
let currentEditId = null;
let savedRange = null;

// ---- INIT ----
function init() {
  const stored = storageGet(STORE_KEY);
  posts = (stored && stored.length > 0) ? stored : DEFAULT_POSTS;
  if (!stored || stored.length === 0) storageSet(STORE_KEY, posts);

  isAdmin = sessionStorage.getItem('rp_blog_admin') === '1';
  applyAdminMode();
  renderPosts();
  bindEvents();
}

// ---- RENDER POST LIST ----
function renderPosts(filterTag = 'all') {
  const grid = document.getElementById('postsGrid');
  const empty = document.getElementById('blogEmpty');
  grid.innerHTML = '';

  let visible = posts;
  if (filterTag !== 'all') visible = posts.filter(p => p.tag === filterTag);
  // Non-admin: hide drafts
  if (!isAdmin) visible = visible.filter(p => p.status === 'published');
  // Sort newest first
  visible = [...visible].sort((a, b) => b.created - a.created);

  if (visible.length === 0) {
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  visible.forEach(post => {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.dataset.id = post.id;

    const coverHtml = post.cover
      ? `<img class="post-card-cover" src="${escHtml(post.cover)}" alt="${escHtml(post.title)}" />`
      : `<div class="post-card-cover-placeholder">BLOG</div>`;

    const draftTag = post.status === 'draft' ? `<span class="post-card-draft">DRAFT</span>` : '';

    card.innerHTML = `
      ${coverHtml}
      <div class="post-card-body">
        <span class="post-card-tag">${escHtml(post.tag || 'General')}</span>
        <div class="post-card-title">${escHtml(post.title)}</div>
        <div class="post-card-excerpt">${escHtml(post.excerpt || '')}</div>
        <div class="post-card-footer">
          <span class="post-card-date">${post.date || ''}</span>
          ${draftTag}
        </div>
      </div>
      <button class="post-card-edit" data-id="${post.id}">Edit</button>
    `;
    card.addEventListener('click', e => {
      if (e.target.classList.contains('post-card-edit')) return;
      openReader(post.id);
    });
    card.querySelector('.post-card-edit').addEventListener('click', e => {
      e.stopPropagation();
      openEditor(post.id);
    });
    grid.appendChild(card);
  });
}

// ---- READER ----
function openReader(id) {
  const post = posts.find(p => p.id === id);
  if (!post) return;
  currentPostId = id;

  const coverHtml = post.cover
    ? `<img class="reader-cover" src="${escHtml(post.cover)}" alt="${escHtml(post.title)}" />`
    : '';

  document.getElementById('readerContent').innerHTML = `
    ${coverHtml}
    <span class="reader-tag">${escHtml(post.tag || 'General')}</span>
    <h1 class="reader-title">${escHtml(post.title)}</h1>
    <div class="reader-date">Published ${escHtml(post.date || '')} · by Rudra Potghan</div>
    <div class="reader-body">${post.body || ''}</div>
  `;

  showView('reader');
  window.scrollTo(0, 0);
}

// ---- EDITOR ----
function openEditor(id) {
  if (id) {
    const post = posts.find(p => p.id === id);
    if (!post) return;
    currentEditId = id;
    document.getElementById('editPostId').value = id;
    document.getElementById('postTitle').value = post.title;
    document.getElementById('postTag').value = post.tag || '';
    document.getElementById('postCoverUrl').value = post.cover || '';
    document.getElementById('postExcerpt').value = post.excerpt || '';
    document.getElementById('editorBody').innerHTML = post.body || '';
    const statusEl = document.getElementById('editorStatus');
    statusEl.textContent = post.status === 'published' ? 'Published' : 'Draft';
    statusEl.className = 'editor-status' + (post.status === 'published' ? ' published' : '');
    document.getElementById('deletePostBtn').style.display = '';
  } else {
    currentEditId = null;
    document.getElementById('editPostId').value = '';
    document.getElementById('postTitle').value = '';
    document.getElementById('postTag').value = '';
    document.getElementById('postCoverUrl').value = '';
    document.getElementById('postExcerpt').value = '';
    document.getElementById('editorBody').innerHTML = '<p>Start writing your post here...</p>';
    document.getElementById('editorStatus').textContent = 'Draft';
    document.getElementById('editorStatus').className = 'editor-status';
    document.getElementById('deletePostBtn').style.display = 'none';
  }
  showView('editor');
  window.scrollTo(0, 0);
}

// ---- SAVE / PUBLISH / DELETE ----
function savePost(status) {
  const title = document.getElementById('postTitle').value.trim();
  if (!title) { showToast('Title is required', true); return; }

  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];

  const data = {
    title,
    tag: document.getElementById('postTag').value.trim() || 'General',
    cover: document.getElementById('postCoverUrl').value.trim(),
    excerpt: document.getElementById('postExcerpt').value.trim(),
    body: document.getElementById('editorBody').innerHTML,
    status,
    date: dateStr,
  };

  if (currentEditId) {
    const idx = posts.findIndex(p => p.id === currentEditId);
    posts[idx] = { ...posts[idx], ...data };
    showToast(status === 'published' ? 'Post published!' : 'Draft saved');
  } else {
    const newPost = { id: 'post_' + Date.now(), created: Date.now(), ...data };
    posts.push(newPost);
    currentEditId = newPost.id;
    document.getElementById('editPostId').value = newPost.id;
    document.getElementById('deletePostBtn').style.display = '';
    showToast(status === 'published' ? 'Post published!' : 'Draft saved');
  }

  const statusEl = document.getElementById('editorStatus');
  statusEl.textContent = status === 'published' ? 'Published' : 'Draft';
  statusEl.className = 'editor-status' + (status === 'published' ? ' published' : '');

  storageSet(STORE_KEY, posts);
}

function deletePost() {
  if (!currentEditId) return;
  if (!confirm('Delete this post permanently?')) return;
  posts = posts.filter(p => p.id !== currentEditId);
  storageSet(STORE_KEY, posts);
  renderPosts();
  showView('list');
  showToast('Post deleted');
}

// ---- VIEW SWITCHER ----
function showView(name) {
  currentView = name;
  document.getElementById('view-list').style.display = name === 'list' ? '' : 'none';
  document.getElementById('view-reader').style.display = name === 'reader' ? '' : 'none';
  document.getElementById('view-editor').style.display = name === 'editor' ? '' : 'none';
}

// ---- ADMIN ----
function applyAdminMode() {
  document.getElementById('blogLoginBtn').style.display = isAdmin ? 'none' : '';
  document.getElementById('newPostBtn').style.display = isAdmin ? '' : 'none';
  document.getElementById('blogLogoutBtn').style.display = isAdmin ? '' : 'none';
  if (isAdmin) document.body.classList.add('admin-mode');
  else document.body.classList.remove('admin-mode');
}

// ---- RICH TEXT EDITOR TOOLBAR ----
function bindToolbar() {
  document.getElementById('editorToolbar').addEventListener('click', e => {
    const btn = e.target.closest('.tb-btn');
    if (!btn) return;

    const cmd = btn.dataset.cmd;
    const val = btn.dataset.val;
    const action = btn.dataset.action;

    if (action === 'insertCode') {
      document.execCommand('insertHTML', false, '<pre><code>code here</code></pre>');
    } else if (action === 'insertImage') {
      // Save selection, open modal
      savedRange = saveSelection();
      openModal('imgModal');
    } else if (action === 'insertLink') {
      savedRange = saveSelection();
      openModal('linkModal');
    } else if (cmd) {
      document.execCommand(cmd, false, val || null);
    }
    document.getElementById('editorBody').focus();
  });

  document.getElementById('confirmImg').addEventListener('click', () => {
    const url = document.getElementById('imgUrl').value.trim();
    const alt = document.getElementById('imgAlt').value.trim();
    if (!url) { showToast('URL required', true); return; }
    if (savedRange) restoreSelection(savedRange);
    document.execCommand('insertHTML', false, `<img src="${escHtml(url)}" alt="${escHtml(alt)}" style="max-width:100%;" />`);
    closeModal('imgModal');
    document.getElementById('imgUrl').value = '';
    document.getElementById('imgAlt').value = '';
  });

  document.getElementById('confirmLink').addEventListener('click', () => {
    const url = document.getElementById('linkUrl').value.trim();
    const text = document.getElementById('linkText').value.trim();
    if (!url) { showToast('URL required', true); return; }
    if (savedRange) restoreSelection(savedRange);
    document.execCommand('insertHTML', false, `<a href="${escHtml(url)}" target="_blank">${escHtml(text || url)}</a>`);
    closeModal('linkModal');
    document.getElementById('linkUrl').value = '';
    document.getElementById('linkText').value = '';
  });

  document.getElementById('closeImgModal').addEventListener('click', () => closeModal('imgModal'));
  document.getElementById('closeLinkModal').addEventListener('click', () => closeModal('linkModal'));
}

// ---- SELECTION HELPERS ----
function saveSelection() {
  const sel = window.getSelection();
  if (sel.rangeCount > 0) return sel.getRangeAt(0).cloneRange();
  return null;
}
function restoreSelection(range) {
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

// ---- BIND ALL EVENTS ----
function bindEvents() {
  // Login
  document.getElementById('blogLoginBtn').addEventListener('click', () => openModal('blogLoginModal'));
  document.getElementById('closeBlogLogin').addEventListener('click', () => closeModal('blogLoginModal'));
  document.getElementById('submitBlogLogin').addEventListener('click', () => {
    const pw = document.getElementById('blogPasswordInput').value;
    if (pw === ADMIN_PASS) {
      isAdmin = true;
      sessionStorage.setItem('rp_blog_admin', '1');
      applyAdminMode();
      renderPosts();
      closeModal('blogLoginModal');
      document.getElementById('blogPasswordInput').value = '';
      showToast('Admin mode enabled');
    } else {
      showToast('Incorrect password', true);
    }
  });
  document.getElementById('blogPasswordInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('submitBlogLogin').click();
  });

  // Logout
  document.getElementById('blogLogoutBtn').addEventListener('click', () => {
    isAdmin = false;
    sessionStorage.removeItem('rp_blog_admin');
    applyAdminMode();
    renderPosts();
    showToast('Logged out');
  });

  // New post
  document.getElementById('newPostBtn').addEventListener('click', () => openEditor(null));

  // Editor controls
  document.getElementById('editorBack').addEventListener('click', () => {
    renderPosts();
    showView('list');
  });
  document.getElementById('savePostBtn').addEventListener('click', () => savePost('draft'));
  document.getElementById('publishPostBtn').addEventListener('click', () => savePost('published'));
  document.getElementById('deletePostBtn').addEventListener('click', deletePost);

  // Reader back
  document.getElementById('readerBack').addEventListener('click', () => {
    renderPosts();
    showView('list');
    window.scrollTo(0, 0);
  });

  // Filter buttons
  document.getElementById('blogFilter').addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderPosts(btn.dataset.tag);
  });

  bindToolbar();
}

// ---- UTILS ----
function escHtml(s) {
  return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ---- KICK OFF ----
init();
