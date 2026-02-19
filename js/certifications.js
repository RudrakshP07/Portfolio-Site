/* ===========================
   CERTIFICATIONS JS
   Admin password: change ADMIN_PASS below
=========================== */

const ADMIN_PASS = 'rudra2025'; // ← Change this!
const STORE_KEY  = 'rp_certs_v2';

// Pre-loaded from resume
const DEFAULT_CERTS = [
  // Security Certifications - 2026
  {
    id: 'cert_1',
    name: 'Jr. Penetration Tester Path',
    issuer: 'TryHackMe',
    year: '2026',
    category: 'Security',
    link: 'https://tryhackme.com',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/TryHackMe JPT Path.png',
    fileData: '', fileType: '',
    desc: 'Comprehensive penetration testing path covering network, web app, and system exploitation fundamentals.'
  },
  {
    id: 'cert_2',
    name: 'Cyber Threat Intelligence 101',
    issuer: 'arcX',
    year: '2026',
    category: 'Security',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/arcX Cyber Threat Intelligence 101.jpg',
    fileData: '', fileType: '',
    desc: 'Foundation course in cyber threat intelligence, threat hunting, and intelligence analysis methodologies.'
  },

  // 2025 Certifications
  {
    id: 'cert_3',
    name: 'Cyber Security Industral Training',
    issuer: 'C9Labs - Pinak Infosec',
    year: '2025',
    category: 'Security',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/C9labs Industral Training Cyber Security.png',
    fileData: '', fileType: '',
    desc: 'Industrial training covering VAPT, dark web monitoring, manual testing, and security automation.'
  },
  {
    id: 'cert_4',
    name: 'Cybersecurity Foundation',
    issuer: 'Palo Alto Networks',
    year: '2025',
    category: 'Security',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/PaloAlto Cybersecurity Foundation.png',
    fileData: '', fileType: '',
    desc: 'Core cybersecurity concepts including threat landscape, network security, and endpoint protection.'
  },
  {
    id: 'cert_7',
    name: 'Introduction to Cyber Security',
    issuer: 'TryHackMe',
    year: '2025',
    category: 'Security',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/THM Introduction to Cyber Security Learning Path.png',
    fileData: '', fileType: '',
    desc: 'Entry-level offensive and defensive security fundamentals on TryHackMe platform.'
  },
  {
    id: 'cert_8',
    name: 'PreSecurity Learning Path',
    issuer: 'TryHackMe',
    year: '2025',
    category: 'Security',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/THM - PreSecurity Learning Path.png',
    fileData: '', fileType: '',
    desc: 'Foundational cybersecurity knowledge covering networking, Linux, and Windows basics.'
  },
  {
    id: 'cert_10',
    name: 'OSForensics Triage Certification',
    issuer: 'PassMark Software',
    year: '2025',
    category: 'Security',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/PassMark Software - OSForensics Triage Certification.png',
    fileData: '', fileType: '',
    desc: 'Digital forensics certification covering evidence collection, analysis, and triage procedures.'
  },
  {
    id: 'cert_11',
    name: 'Cybersecurity Fundamentals Associate (OCFA)',
    issuer: 'OPSWAT',
    year: '2025',
    category: 'Security',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/OPSWAT - OCFA (Cybersecurity Fundamentals Associate).png',
    fileData: '', fileType: '',
    desc: 'Foundational cybersecurity knowledge covering threats, vulnerabilities, and security controls.'
  },
  {
    id: 'cert_12',
    name: 'Introduction to Critical Infrastructure Protection (ICIP)',
    issuer: 'OPSWAT',
    year: '2025',
    category: 'Security',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/OPSWAT - ICIP {Introduction to Critical Infrastructure Protection}.png',
    fileData: '', fileType: '',
    desc: 'Critical infrastructure security covering OT/ICS environments and protection strategies.'
  },
  {
    id: 'cert_13',
    name: 'File Security Associate (OFSA)',
    issuer: 'OPSWAT',
    year: '2025',
    category: 'Security',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/OPSWAT - OFSA (File Security Assosiate).png',
    fileData: '', fileType: '',
    desc: 'File security fundamentals covering malware detection, sanitization, and deep content inspection.'
  },
  {
    id: 'cert_14',
    name: 'Email Security Associate (OESA)',
    issuer: 'OPSWAT',
    year: '2025',
    category: 'Security',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/OPSWAT - OESA (Email Security Assosiate).png',
    fileData: '', fileType: '',
    desc: 'Email security best practices covering phishing, malware, and social engineering threats.'
  },
  {
    id: 'cert_15',
    name: 'Network Security Associate (ONSA)',
    issuer: 'OPSWAT',
    year: '2025',
    category: 'Security',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/OPSWAT - ONSA (Network Security Assosiate).png',
    fileData: '', fileType: '',
    desc: 'Network security fundamentals covering firewalls, IDS/IPS, and network threat detection.'
  },
  {
    id: 'cert_16',
    name: 'Storage Security Associate (OSSA)',
    issuer: 'OPSWAT',
    year: '2025',
    category: 'Security',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/OSSA.png',
    fileData: '', fileType: '',
    desc: 'Storage security covering data protection, secure file transfers, and storage threat mitigation.'
  },
  {
    id: 'cert_17',
    name: 'Cybersecurity Job Simulation',
    issuer: 'Deloitte',
    year: '2025',
    category: 'Security',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/Delloite_CyberSecurity_JobSimulation.png',
    fileData: '', fileType: '',
    desc: 'Practical cybersecurity simulation covering threat analysis, incident response, and security advisory.'
  },
  {
    id: 'cert_18',
    name: 'Phishing Simulation & Analysis',
    issuer: 'Mastercard',
    year: '2025',
    category: 'Security',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/MasterCard_Phishing_Simulation.png',
    fileData: '', fileType: '',
    desc: 'Phishing detection, analysis, and mitigation simulation for real-world security scenarios.'
  },
  {
    id: 'cert_19',
    name: 'CYBERHACK-2025 (2nd Place)',
    issuer: 'MP Police',
    year: '2025',
    category: 'Security',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/CYBERHACK-2025.jpg',
    fileData: '', fileType: '',
    desc: 'Secured 2nd place at MP Police CTF competition covering web exploitation, forensics, and OSINT challenges.'
  },
  {
    id: 'cert_20',
    name: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA',
    year: '2025',
    category: 'Machine Learning',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/NVDIA Fundamentels of Deep Learning.png',
    fileData: '', fileType: '',
    desc: 'Foundation course on neural networks, CNNs, transfer learning and deployment via NVIDIA frameworks.'
  },
  {
    id: 'cert_23',
    name: 'MATLAB Onramp',
    issuer: 'MathWorks',
    year: '2025',
    category: 'Development',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/Matlab Onramp Rudra Potghan.png',
    fileData: '', fileType: '',
    desc: 'Introduction to MATLAB covering data analysis, visualization, and programming fundamentals.'
  },
  {
    id: 'cert_25',
    name: 'Introduction to IoT',
    issuer: 'NPTEL',
    year: '2025',
    category: 'Networking',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/NPTEL IOT.png',
    fileData: '', fileType: '',
    desc: 'Overview of Internet of Things architecture, protocols, and security considerations.'
  },
  {
    id: 'cert_27',
    name: 'Copyright: FIDDE (Flux Infused Direct Deposition)',
    issuer: 'Government of India',
    year: '2025',
    category: 'Other',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/COPYRIGHT - FLUX INFUSED DIRECT DEPOSITION ENHANCEMENT LASER BASED METAL 3D PRINTING.png',
    fileData: '', fileType: '',
    desc: 'Copyright for innovative laser-based metal 3D printing enhancement methodology.'
  },

  // 2024 Certifications
  {
    id: 'cert_5',
    name: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    year: '2024',
    category: 'Security',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/Cisco - Cybersecurity Essentials Certificate.png',
    fileData: '', fileType: '',
    desc: 'Foundational knowledge in cybersecurity operations, threat detection, and security best practices.'
  },
  {
    id: 'cert_6',
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    year: '2024',
    category: 'Security',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/Cisco - Introduction to Cybersecurity Certificate.png',
    fileData: '', fileType: '',
    desc: 'Entry-level course covering cybersecurity fundamentals, threats, and defensive strategies.'
  },
  {
    id: 'cert_9',
    name: 'Ethical Hacking',
    issuer: 'NPTEL',
    year: '2024',
    category: 'Security',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/Rudraksh NPTEL Exthical Hacking.png',
    fileData: '', fileType: '',
    desc: 'NPTEL course covering ethical hacking methodologies, tools, and legal frameworks.'
  },
  {
    id: 'cert_21',
    name: 'SQL (Basic)',
    issuer: 'HackerRank',
    year: '2024',
    category: 'Development',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/HackerRank - SQL {Basic}.png',
    fileData: '', fileType: '',
    desc: 'SQL fundamentals covering queries, joins, aggregations, and basic database operations.'
  },
  {
    id: 'cert_22',
    name: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    year: '2024',
    category: 'Development',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/HackerRank - SQL {Intermediate}.png',
    fileData: '', fileType: '',
    desc: 'Advanced SQL covering subqueries, window functions, CTEs, and complex data manipulation.'
  },
  {
    id: 'cert_24',
    name: 'Introduction to Packet Tracer',
    issuer: 'Cisco Networking Academy',
    year: '2024',
    category: 'Networking',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/Cisco - Introduction to Packet Tracer Certificate.png',
    fileData: '', fileType: '',
    desc: 'Network simulation and configuration using Cisco Packet Tracer for hands-on learning.'
  },
  {
    id: 'cert_26',
    name: 'Copyright: URJAA ROOPANTARAN',
    issuer: 'Government of India',
    year: '2024',
    category: 'Other',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/COPYRIGHT - URJAA ROOPANTARAN.png',
    fileData: '', fileType: '',
    desc: 'Copyright registration for original work: URJAA ROOPANTARAN energy transformation project.'
  },
  {
    id: 'cert_28',
    name: 'Techathon 1.0',
    issuer: 'Technical Competition',
    year: '2024',
    category: 'Other',
    link: '',
    image: 'https://rudrakshp07.github.io/Portfolio-Site/css/Images/Techathon 1.0.jpeg',
    fileData: '', fileType: '',
    desc: 'Participation certificate for Techathon 1.0 technical innovation competition.'
  }
];

// ---- STATE ----
let certs       = [];
let isAdmin     = false;
let currentEditId = null;
let uploadedFileData = ''; // base64
let uploadedFileType = ''; // mime type
let uploadedFileName = '';

// ---- INIT ----
function init() {
  const stored = storageGet(STORE_KEY);
  certs = (stored && stored.length > 0) ? stored : DEFAULT_CERTS;
  if (!stored || stored.length === 0) storageSet(STORE_KEY, certs);

  isAdmin = sessionStorage.getItem('rp_cert_admin') === '1';
  applyAdminMode();
  renderCerts();
  bindEvents();
}

// ---- RENDER GRID ----
function renderCerts() {
  const grid  = document.getElementById('certsGrid');
  const empty = document.getElementById('certEmpty');
  const count = document.getElementById('certCount');
  grid.innerHTML = '';
  count.textContent = `${certs.length} Certification${certs.length !== 1 ? 's' : ''}`;

  if (certs.length === 0) { empty.style.display = 'block'; return; }
  empty.style.display = 'none';

  certs.forEach(cert => {
    const hasMedia = cert.fileData || cert.image;
    const thumbHtml = hasMedia
      ? buildThumb(cert)
      : `<div class="cert-card-thumb-placeholder"><span>${escHtml(cert.issuer.substring(0,3).toUpperCase())}</span></div>`;

    const card = document.createElement('div');
    card.className = 'cert-card';
    card.dataset.id = cert.id;
    card.innerHTML = `
      ${thumbHtml}
      <div class="cert-card-cat">${escHtml(cert.category)}</div>
      <div class="cert-card-body">
        <div class="cert-card-name">${escHtml(cert.name)}</div>
        <div class="cert-card-issuer">${escHtml(cert.issuer)}</div>
        ${cert.desc ? `<div class="cert-card-desc">${escHtml(cert.desc)}</div>` : ''}
      </div>
      <div class="cert-card-footer">
        <span class="cert-card-year">${escHtml(cert.year)}</span>
        <span class="cert-card-view">View Details →</span>
      </div>
      <button class="cert-card-edit" data-id="${cert.id}" title="Edit this certification">✏ Edit</button>
    `;

    card.addEventListener('click', e => {
      if (e.target.closest('.cert-card-edit')) return;
      openCertDetail(cert.id);
    });
    card.querySelector('.cert-card-edit').addEventListener('click', e => {
      e.stopPropagation();
      openEditModal(cert.id);
    });
    grid.appendChild(card);
  });
}

function buildThumb(cert) {
  if (cert.fileType === 'application/pdf') {
    return `<div class="cert-card-thumb-placeholder cert-card-thumb-pdf"><span>PDF</span></div>`;
  }
  const src = cert.fileData || cert.image;
  return `<img class="cert-card-thumb" src="${src}" alt="${escHtml(cert.name)}" loading="lazy" />`;
}

// ---- DETAIL MODAL ----
function openCertDetail(id) {
  const cert = certs.find(c => c.id === id);
  if (!cert) return;

  let mediaHtml = '';
  if (cert.fileData && cert.fileType !== 'application/pdf') {
    mediaHtml = `<img src="${cert.fileData}" alt="${escHtml(cert.name)}" class="cert-detail-img" />`;
  } else if (cert.image) {
    mediaHtml = `<img src="${escHtml(cert.image)}" alt="${escHtml(cert.name)}" class="cert-detail-img" />`;
  } else if (cert.fileData && cert.fileType === 'application/pdf') {
    mediaHtml = `<div class="cert-pdf-embed"><iframe src="${cert.fileData}" width="100%" height="360" style="border:1px solid var(--border);border-radius:4px;"></iframe></div>`;
  }

  const adminEdit = isAdmin
    ? `<button class="btn" id="detailEditBtn" data-id="${cert.id}" style="margin-top:20px;">✏ Edit Certification</button>`
    : '';

  document.getElementById('certDetailBody').innerHTML = `
    ${mediaHtml}
    <span class="cert-detail-cat">${escHtml(cert.category)}</span>
    <div class="cert-detail-name">${escHtml(cert.name)}</div>
    <div class="cert-detail-meta">Issued by <strong>${escHtml(cert.issuer)}</strong> · ${escHtml(cert.year)}</div>
    ${cert.desc ? `<div class="cert-detail-desc">${escHtml(cert.desc)}</div>` : ''}
    <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;">
      ${cert.link ? `<a href="${escHtml(cert.link)}" target="_blank" class="cert-detail-link">View Credential ↗</a>` : ''}
      ${cert.fileData ? `<a href="${cert.fileData}" download="${escHtml(cert.name)}" class="cert-detail-link">⬇ Download File</a>` : ''}
      ${adminEdit}
    </div>
  `;

  const editBtn = document.getElementById('detailEditBtn');
  if (editBtn) {
    editBtn.addEventListener('click', () => {
      closeModal('certDetailModal');
      openEditModal(cert.id);
    });
  }
  openModal('certDetailModal');
}

// ---- FILE UPLOAD HANDLING ----
function setupFileUpload() {
  const zone   = document.getElementById('certFileZone');
  const input  = document.getElementById('certFile');
  const preview= document.getElementById('certFilePreview');
  const icon   = document.getElementById('certFilePreviewIcon');
  const name   = document.getElementById('certFileName');
  const size   = document.getElementById('certFileSize');
  const remove = document.getElementById('certFileRemove');

  // Drag and drop
  zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
  zone.addEventListener('drop', e => {
    e.preventDefault();
    zone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  });

  input.addEventListener('change', () => {
    if (input.files[0]) handleFile(input.files[0]);
  });

  remove.addEventListener('click', () => {
    clearFileUpload();
  });

  function handleFile(file) {
    if (file.size > 5 * 1024 * 1024) {
      showToast('File too large (max 5MB)', true);
      return;
    }
    const allowed = ['image/jpeg','image/jpg','image/png','image/webp','image/gif','application/pdf'];
    if (!allowed.includes(file.type)) {
      showToast('Unsupported file type', true);
      return;
    }

    const reader = new FileReader();
    reader.onload = e => {
      uploadedFileData = e.target.result;
      uploadedFileType = file.type;
      uploadedFileName = file.name;

      // Show preview
      zone.style.display = 'none';
      preview.style.display = 'flex';
      name.textContent = file.name;
      size.textContent = formatBytes(file.size);

      if (file.type.startsWith('image/')) {
        icon.innerHTML = `<img src="${uploadedFileData}" style="width:40px;height:40px;object-fit:cover;border-radius:2px;" />`;
      } else {
        icon.textContent = '📄';
      }
    };
    reader.readAsDataURL(file);
  }
}

function clearFileUpload() {
  uploadedFileData = '';
  uploadedFileType = '';
  uploadedFileName = '';
  const zone   = document.getElementById('certFileZone');
  const preview= document.getElementById('certFilePreview');
  const input  = document.getElementById('certFile');
  zone.style.display = 'block';
  preview.style.display = 'none';
  if (input) input.value = '';
  document.getElementById('certFilePreviewIcon').textContent = '📄';
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024*1024) return (bytes/1024).toFixed(1) + ' KB';
  return (bytes/(1024*1024)).toFixed(1) + ' MB';
}

// ---- LOGIN ----
function bindEvents() {
  document.getElementById('loginBtn').addEventListener('click', () => openModal('loginModal'));
  document.getElementById('closeLogin').addEventListener('click', () => closeModal('loginModal'));
  document.getElementById('submitLogin').addEventListener('click', doLogin);
  document.getElementById('passwordInput').addEventListener('keydown', e => { if (e.key==='Enter') doLogin(); });

  document.getElementById('logoutBtn').addEventListener('click', () => {
    isAdmin = false;
    sessionStorage.removeItem('rp_cert_admin');
    applyAdminMode();
    renderCerts();
    showToast('Logged out');
  });

  document.getElementById('addCertBtn').addEventListener('click', openAddModal);
  document.getElementById('closeAddCert').addEventListener('click', () => closeModal('addCertModal'));
  document.getElementById('saveCertBtn').addEventListener('click', saveCert);
  document.getElementById('deleteCertBtn').addEventListener('click', deleteCert);
  document.getElementById('closeCertDetail').addEventListener('click', () => closeModal('certDetailModal'));

  setupFileUpload();
}

function doLogin() {
  const pw = document.getElementById('passwordInput').value;
  if (pw === ADMIN_PASS) {
    isAdmin = true;
    sessionStorage.setItem('rp_cert_admin', '1');
    applyAdminMode();
    renderCerts();
    closeModal('loginModal');
    document.getElementById('passwordInput').value = '';
    showToast('Admin mode enabled 🔥');
  } else {
    showToast('Incorrect password', true);
  }
}

function applyAdminMode() {
  document.getElementById('loginBtn').style.display   = isAdmin ? 'none' : '';
  document.getElementById('addCertBtn').style.display = isAdmin ? '' : 'none';
  document.getElementById('logoutBtn').style.display  = isAdmin ? '' : 'none';
  document.body.classList.toggle('admin-mode', isAdmin);
}

// ---- ADD/EDIT ----
function openAddModal() {
  currentEditId = null;
  clearFileUpload();
  document.getElementById('certFormTitle').textContent = 'Add Certification';
  document.getElementById('editCertId').value = '';
  ['certName','certIssuer','certYear','certLink','certImage','certDesc'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('certCategory').value = 'Security';
  document.getElementById('deleteCertBtn').style.display = 'none';
  openModal('addCertModal');
}

function openEditModal(id) {
  const cert = certs.find(c => c.id === id);
  if (!cert) return;
  currentEditId = id;
  clearFileUpload();

  document.getElementById('certFormTitle').textContent = 'Edit Certification';
  document.getElementById('editCertId').value  = id;
  document.getElementById('certName').value    = cert.name;
  document.getElementById('certIssuer').value  = cert.issuer;
  document.getElementById('certYear').value    = cert.year;
  document.getElementById('certCategory').value= cert.category;
  document.getElementById('certLink').value    = cert.link || '';
  document.getElementById('certImage').value   = cert.image || '';
  document.getElementById('certDesc').value    = cert.desc || '';
  document.getElementById('deleteCertBtn').style.display = '';

  // Show existing file if any
  if (cert.fileData) {
    uploadedFileData = cert.fileData;
    uploadedFileType = cert.fileType || '';
    uploadedFileName = cert.fileName || 'Existing file';

    const zone   = document.getElementById('certFileZone');
    const preview= document.getElementById('certFilePreview');
    const icon   = document.getElementById('certFilePreviewIcon');
    zone.style.display = 'none';
    preview.style.display = 'flex';
    document.getElementById('certFileName').textContent = cert.fileName || 'Existing file';
    document.getElementById('certFileSize').textContent = 'Saved';
    if (cert.fileType && cert.fileType.startsWith('image/')) {
      icon.innerHTML = `<img src="${cert.fileData}" style="width:40px;height:40px;object-fit:cover;border-radius:2px;" />`;
    } else {
      icon.textContent = '📄';
    }
  }

  openModal('addCertModal');
}

function saveCert() {
  const name   = document.getElementById('certName').value.trim();
  const issuer = document.getElementById('certIssuer').value.trim();
  const year   = document.getElementById('certYear').value.trim();
  if (!name || !issuer || !year) { showToast('Name, issuer & year are required', true); return; }

  const data = {
    name, issuer, year,
    category : document.getElementById('certCategory').value,
    link     : document.getElementById('certLink').value.trim(),
    image    : document.getElementById('certImage').value.trim(),
    desc     : document.getElementById('certDesc').value.trim(),
    fileData : uploadedFileData || (currentEditId ? (certs.find(c=>c.id===currentEditId)||{}).fileData||'' : ''),
    fileType : uploadedFileType || (currentEditId ? (certs.find(c=>c.id===currentEditId)||{}).fileType||'' : ''),
    fileName : uploadedFileName || (currentEditId ? (certs.find(c=>c.id===currentEditId)||{}).fileName||'' : ''),
  };

  if (currentEditId) {
    const idx = certs.findIndex(c => c.id === currentEditId);
    certs[idx] = { ...certs[idx], ...data };
    showToast('Certification updated 🔥');
  } else {
    certs.push({ id: 'cert_' + Date.now(), ...data });
    showToast('Certification added 🔥');
  }

  storageSet(STORE_KEY, certs);
  renderCerts();
  closeModal('addCertModal');
}

function deleteCert() {
  if (!currentEditId) return;
  if (!confirm('Delete this certification?')) return;
  certs = certs.filter(c => c.id !== currentEditId);
  storageSet(STORE_KEY, certs);
  renderCerts();
  closeModal('addCertModal');
  showToast('Certification deleted');
}

// ---- UTILS ----
function escHtml(s) {
  return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

init();
