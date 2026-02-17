/* ===========================
   MAIN JS — Nav, utils, shared
=========================== */

// ---- NAV ----
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Scroll shadow
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (!nav) return;
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 4px 30px rgba(0,0,0,.5)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// ---- MODAL UTILS ----
function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('open');
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
}
// Close on backdrop click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
});
// Close buttons
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal-overlay').classList.remove('open');
  });
});

// ---- TOAST ----
function showToast(msg, isError = false) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.className = 'toast show' + (isError ? ' error' : '');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ---- STORAGE HELPERS ----
function storageGet(key) {
  try { return JSON.parse(localStorage.getItem(key)); } catch { return null; }
}
function storageSet(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch(e) { console.error(e); }
}

// ---- SMOOTH SCROLL for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---- INTERSECTION OBSERVER for timeline/cards ----
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-item, .project-card, .ach-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(el);
});
