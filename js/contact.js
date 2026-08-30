/* ==========================================================================
   PORTFOLIO CONTACT & RESUME MODULE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initResumeDownloader();
});

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name')?.value.trim();
    const email = document.getElementById('contact-email')?.value.trim();
    const subject = document.getElementById('contact-subject')?.value.trim();
    const message = document.getElementById('contact-message')?.value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }

    // Basic email regex test
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }

    // Simulate successful form send
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      showToast(`Thank you, ${name}! Your message has been sent successfully.`, 'success');
      form.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 1200);
  });
}

function initResumeDownloader() {
  const downloadBtns = document.querySelectorAll('.btn-download-resume');

  downloadBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Small feedback toast
      showToast('Starting Sudhanshu Shekhar\'s Resume Download...', 'success');
    });
  });
}

/* Toast Alert System */
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  const icon = type === 'error' 
    ? '<i class="fas fa-exclamation-circle" style="color: #ef4444; font-size: 1.2rem;"></i>' 
    : '<i class="fas fa-check-circle" style="color: var(--accent-emerald); font-size: 1.2rem;"></i>';

  toast.innerHTML = `${icon} <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}
