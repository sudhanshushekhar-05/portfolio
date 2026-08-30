/* ==========================================================================
   PORTFOLIO NAVIGATION MODULE — FLOATING PILL NAVBAR
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
});

function initNavbar() {
  const scrollProgress = document.getElementById('scroll-progress');
  const navLinks = document.querySelectorAll('#nav-links .nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Update scroll progress bar width
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0 && scrollProgress) {
      const progressPercent = (scrollY / totalHeight) * 100;
      scrollProgress.style.width = `${progressPercent}%`;
    }

    // Active link highlighting for floating pill menu
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}
