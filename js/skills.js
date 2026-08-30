/* ==========================================================================
   PORTFOLIO SKILLS ECOSYSTEM MODULE (MATCHED TO CV)
   ========================================================================== */

const skillsData = [
  // Languages
  { name: 'Python', category: 'languages', icon: 'fa-brands fa-python', level: 90, color: '#3776AB' },
  { name: 'JavaScript', category: 'languages', icon: 'fa-brands fa-js', level: 85, color: '#F7DF1E' },
  { name: 'C Language', category: 'languages', icon: 'fa-solid fa-code', level: 85, color: '#A8B9CC' },

  // Web Development
  { name: 'HTML5', category: 'web', icon: 'fa-brands fa-html5', level: 95, color: '#E34F26' },
  { name: 'CSS3', category: 'web', icon: 'fa-brands fa-css3-alt', level: 90, color: '#1572B6' },

  // Databases
  { name: 'PostgreSQL', category: 'database', icon: 'fa-solid fa-database', level: 82, color: '#4169E1' },

  // Developer Tools
  { name: 'Git', category: 'tools', icon: 'fa-brands fa-git-alt', level: 88, color: '#F05032' },
  { name: 'GitHub', category: 'tools', icon: 'fa-brands fa-github', level: 90, color: '#ffffff' },
  { name: 'VS Code', category: 'tools', icon: 'fa-solid fa-laptop-code', level: 95, color: '#007ACC' },

  // Core CS Subjects
  { name: 'OOPS (Basics)', category: 'core', icon: 'fa-solid fa-cubes', level: 85, color: '#a855f7' },
  { name: 'Problem Solving', category: 'core', icon: 'fa-solid fa-brain', level: 90, color: '#38bdf8' },

  // Soft Skills
  { name: 'Communication', category: 'soft', icon: 'fa-solid fa-comments', level: 90, color: '#10b981' },
  { name: 'Teamwork', category: 'soft', icon: 'fa-solid fa-users', level: 92, color: '#f59e0b' },
  { name: 'Analytical Thinking', category: 'soft', icon: 'fa-solid fa-chart-pie', level: 88, color: '#ec4899' },
  { name: 'Time Management', category: 'soft', icon: 'fa-solid fa-clock', level: 86, color: '#38bdf8' },
  { name: 'Quick Learning', category: 'soft', icon: 'fa-solid fa-bolt', level: 95, color: '#eab308' }
];

document.addEventListener('DOMContentLoaded', () => {
  initSkillsSection();
});

function initSkillsSection() {
  const container = document.getElementById('skills-grid');
  const tabBtns = document.querySelectorAll('.skill-tab-btn');
  if (!container) return;

  function renderSkills(category = 'all') {
    container.innerHTML = '';
    const filtered = category === 'all' 
      ? skillsData 
      : skillsData.filter(s => s.category === category);

    filtered.forEach((skill, idx) => {
      const card = document.createElement('div');
      card.className = 'skill-card fade-up visible';
      card.style.animationDelay = `${idx * 0.05}s`;

      card.innerHTML = `
        <div class="skill-icon-badge" style="color: ${skill.color}">
          <i class="${skill.icon}"></i>
        </div>
        <div class="skill-name">${skill.name}</div>
        <div class="skill-level-bar">
          <div class="skill-level-fill" style="width: ${skill.level}%"></div>
        </div>
      `;

      container.appendChild(card);
    });
  }

  // Event Listeners for Tab Buttons
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-tab');
      renderSkills(cat);
    });
  });

  renderSkills('all');
}
