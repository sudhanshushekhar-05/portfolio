/* ==========================================================================
   PORTFOLIO MAIN JAVASCRIPT MODULE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initCustomCursor();
  initTypingEffect();
  initScrollAnimations();
  initStatsCounter();
  initTiltEffect();
  initBackToTop();
});

/* --------------------------------------------------------------------------
   1. CUSTOM NEON CURSOR TRACKER
   -------------------------------------------------------------------------- */
function initCustomCursor() {
  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(dot);
  document.body.appendChild(glow);

  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function animateGlow() {
    glowX += (mouseX - glowX) * 0.15;
    glowY += (mouseY - glowY) * 0.15;
    glow.style.transform = `translate(${glowX}px, ${glowY}px)`;
    requestAnimationFrame(animateGlow);
  }
  animateGlow();

  const interactables = document.querySelectorAll('a, button, .item, .skillCard, .statCard, .serviceCard');
  interactables.forEach(el => {
    el.addEventListener('mouseenter', () => glow.classList.add('active'));
    el.addEventListener('mouseleave', () => glow.classList.remove('active'));
  });
}

/* --------------------------------------------------------------------------
   2. 3D CARD TILT EFFECT ON MOUSEMOVE
   -------------------------------------------------------------------------- */
function initTiltEffect() {
  const cards = document.querySelectorAll('.item, .statCard, .heroPhotoCard, .serviceCard, .locationCard');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 25;
      const rotateY = (centerX - x) / 25;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      card.style.transition = 'transform 0.5s ease';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
    });
  });
}

/* --------------------------------------------------------------------------
   3. AMBIENT PARTICLE BACKDROP CANVAS
   -------------------------------------------------------------------------- */
function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const numParticles = Math.floor(Math.min(width, height) / 16);
  const particles = [];

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2.5 + 1,
      color: Math.random() > 0.4 ? '#38bdf8' : (Math.random() > 0.5 ? '#6366f1' : '#10b981')
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = p.color;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.18 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/* --------------------------------------------------------------------------
   4. HERO TYPING TEXT ANIMATION
   -------------------------------------------------------------------------- */
function initTypingEffect() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const phrases = [
    "CSE (AI & ML) Student @ LPU",
    "Python & AI Developer",
    "Full-Stack Web Developer",
    "Cyber Security Awareness Lead",
    "Competitive Problem Solver"
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type() {
    const currentPhrase = phrases[phraseIdx];

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 45;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIdx === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 1800;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typingSpeed = 450;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* --------------------------------------------------------------------------
   5. SCROLL REVEAL ANIMATIONS
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-up');

  // Immediately reveal hero elements
  document.querySelectorAll('#home .fade-up').forEach(el => el.classList.add('visible'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.05
  });

  fadeElements.forEach(el => observer.observe(el));

  // Fallback timer
  setTimeout(() => {
    fadeElements.forEach(el => el.classList.add('visible'));
  }, 500);
}

/* --------------------------------------------------------------------------
   6. STATISTICAL COUNTER ANIMATION
   -------------------------------------------------------------------------- */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.statNumber[data-target]');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        let count = 0;
        const step = target / 40;

        const timer = setInterval(() => {
          count += step;
          if (count >= target) {
            el.textContent = target + suffix;
            clearInterval(timer);
          } else {
            el.textContent = (Number.isInteger(target) ? Math.floor(count) : count.toFixed(1)) + suffix;
          }
        }, 30);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  statNumbers.forEach(num => observer.observe(num));
}

/* --------------------------------------------------------------------------
   7. BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
