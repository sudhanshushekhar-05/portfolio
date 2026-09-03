/* ==========================================================================
   PORTFOLIO PROJECTS MODULE — MEES VERBERNE ASYMMETRICAL GRID FORMAT
   Contains ALL user authentic projects: ESP32 Phone Monitor, Study Website,
   AI Resume Analyzer, Snake Game, Cyber Security Program, & Portfolio Engine.
   ========================================================================== */

const projectsData = [
  {
    id: 'esp32-phone-monitor',
    num: '01',
    title: 'ESP32 Smart Phone <em>Monitor</em>',
    rawTitle: 'ESP32 Smart Phone Monitoring & Detection System',
    category: 'iot',
    isHighlight: true,
    tags: ['IoT Hardware', 'Embedded C++', 'HX711 Load Cell', 'ECE 279'],
    designer: 'Sudhanshu Shekhar',
    client: 'LPU ECE 279 Capstone',
    shortDesc: 'IoT classroom compliance system using ESP32, IR student counters, HX711 load cell weight sensors, PIR motion security, and automated audio-visual alarms.',
    fullDesc: 'Designed and engineered an intelligent embedded classroom compliance system powered by the ESP32 microcontroller. Integrates IR sensors for counting attending students, a load cell platform with HX711 amplifier for measuring deposited phone weights, PIR & Ultrasonic sensors for perimeter motion verification, a 16x2 I2C LCD display, and real-time audio-visual alarm triggers on count mismatch or unauthorized phone removal.',
    image: 'assets/project_esp32_phone_monitor.jpg',
    tech: ['ESP32', 'C++ / Arduino', 'HX711 Load Cell', 'IR & PIR Sensors', 'LCD 16x2 I2C', 'MQTT / Blynk'],
    features: [
      'Real-time automated comparison between student count (IR sensors) and phone count (HX711 weight sensor)',
      'Dual PIR motion and ultrasonic sensors continuously monitoring phone collection station perimeter',
      'Instant audio-visual alert triggers (buzzer & red LED alarm) on count mismatch or phone tampering',
      'Real-time status, live counts, and system diagnostics displayed on 16x2 I2C LCD screen'
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/sudhanshushekhar-05/esp32-phone-monitoring-system'
  },
  {
    id: 'study-website',
    num: '02',
    title: 'Study <em>Website Hub</em>',
    rawTitle: 'Study Website (Class 9 & 10 Platform)',
    category: 'web',
    isHalf: true,
    tags: ['EdTech Portal', 'WebSockets', 'Class 9 & 10', 'Live App'],
    designer: 'Sudhanshu Shekhar',
    client: 'Class 9 & 10 Students',
    shortDesc: 'Centralized EdTech study portal providing syllabus notes, embedded video tutorials, practice quiz modules, and live revision scheduling.',
    fullDesc: 'Built a full-fledged educational portal deployed live on Render targeted at Class 9 & 10 students. Features centralized study material, embedded video lectures, interactive practice quiz modules with real-time score tracking, and a custom revision scheduler to keep students organized.',
    image: 'assets/project_study_buddy.jpg',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'WebSockets', 'Node.js / Express'],
    features: [
      'Centralized repository for Class 9 & 10 syllabus notes and video tutorials',
      'Interactive quiz engine enabling students to test and track topic mastery',
      'Custom study planning tool to schedule revision alongside video content',
      'Deployed live on Render with fast mobile responsiveness'
    ],
    liveUrl: 'https://study-buddy-eq2m.onrender.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAadfqsCn6nOIUqVQPbnnjC6OzenKF8uuoCnCw1oXdsgSKMpxSCJmvDGwDV7hMw_aem_36AAuWVFn4zoOzld1gFy4w',
    githubUrl: 'https://github.com/sudhanshushekhar-05/study-website'
  },
  {
    id: 'ai-resume',
    num: '03',
    title: 'AI Resume <em>Analyzer</em>',
    rawTitle: 'AI Resume ATS Evaluator & Career Assistant',
    category: 'ai',
    isHalf: true,
    tags: ['AI / NLP', 'Python', 'ATS Score', 'Career Tool'],
    designer: 'Sudhanshu Shekhar',
    client: 'Job Seekers & Recruiters',
    shortDesc: 'AI resume analyzer that parses candidate resumes, evaluates keyword density, computes ATS compatibility scores, and highlights skill gaps.',
    fullDesc: 'An intelligent AI career assistant platform designed to optimize resumes for ATS compatibility. Parses uploaded resumes to calculate role-fit percentages against job descriptions, identifies missing skill gaps, and suggests recommended job titles, companies, and expected salary ranges.',
    image: 'assets/project_ai_resume.jpg',
    tech: ['Python', 'NLP', 'Flask', 'React', 'Chart.js'],
    features: [
      'Resume parser extracting candidate skills and calculating ATS compatibility score',
      'Job-matching engine comparing skills against job descriptions for role-fit %',
      'Career recommendations engine suggesting suitable roles, companies & salary ranges',
      'Interactive dashboard visualizer built with React and Flask backend'
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/sudhanshushekhar-05/ai-resume-analyzer'
  },
  {
    id: 'snake-game',
    num: '04',
    title: 'Snake Game <em>GUI Engine</em>',
    rawTitle: 'Snake Game – GUI Python Application',
    category: 'python',
    isHalf: true,
    tags: ['Python', 'GUI Graphics', 'Collision Engine', 'Retro'],
    designer: 'Sudhanshu Shekhar',
    client: 'Arcade Gaming',
    shortDesc: 'Classic GUI-based Snake arcade application developed in Python using event loops, real-time collision detection, and score persistence.',
    fullDesc: 'Engineered a desktop GUI Snake game in Python. Implemented a smooth continuous game loop governing directional velocity, food spawn generation, body segment growth, wall/self collision logic, and live high-score persistence.',
    image: 'assets/project_snake_game.jpg',
    tech: ['Python', 'GUI Graphics', 'Event Handling', 'File I/O'],
    features: [
      'Real-time continuous game loop handling keyboard input and frame rendering',
      'Accurate pixel/grid collision detection for boundary walls and self-intersection',
      'Live scoring engine tracking score progression and high-score records',
      'Custom retro-arcade graphic styling and sound effect triggers'
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/sudhanshushekhar-05/snake-arcade-engine'
  },
  {
    id: 'cyber-security',
    num: '05',
    title: 'Cyber Security <em>Initiative</em>',
    rawTitle: 'Cyber Security Awareness Program',
    category: 'social',
    isHalf: true,
    tags: ['LPU Outreach', 'WNS Cares', 'Phishing Defense', 'Security'],
    designer: 'Sudhanshu Shekhar',
    client: 'Community Outreach',
    shortDesc: 'Community security training initiative under LPU x WNS Cares Foundation, educating 30 participants on digital safety and phishing defense.',
    fullDesc: 'Led a community development initiative under LPU in association with the WNS Cares Foundation. Taught 30 participants (Class 2 students to adults) essential digital safety, password hygiene, and mock phishing exercise recognition.',
    image: 'assets/project_dsa_visualizer.jpg',
    tech: ['Cyber Security', 'Digital Literacy', 'Community Outreach', 'WNS Cares'],
    features: [
      'Delivered WNS Cyber Smart e-learning modules in Hindi and English',
      'Conducted hands-on mock phishing exercises and password security sessions',
      'Successfully certified all 30 participants with digital credentials',
      'Maintained verified Excel participant database and certificate reference records'
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/sudhanshushekhar-05/cyber-security-awareness-program'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initProjectsSection();
  initProjectModal();
});

function initProjectsSection() {
  const container = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!container) return;

  function renderProjects(filter = 'all') {
    container.innerHTML = '';
    const filtered = filter === 'all'
      ? projectsData
      : projectsData.filter(p => p.category === filter);

    filtered.forEach((project, idx) => {
      const card = document.createElement('div');
      card.className = `item ${project.isHighlight ? 'highlight' : 'half'}`;
      
      const tagPills = project.tags.map(t => `<span class="innerTag">${t}</span>`).join('');

      const liveBtnHtml = project.liveUrl
        ? `<a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn-live-demo" style="display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.45rem 1rem; border-radius: var(--radius-pill); background: var(--accent-orange); color: var(--text-navy); font-weight: 700; font-size: 0.85rem; text-decoration: none; margin-right: 0.5rem; transition: transform var(--transition-fast);">
            <i class="fas fa-external-link-alt"></i> Visit Live Site
           </a>`
        : '';

      card.innerHTML = `
        <div class="itemIntro">
          ${tagPills}
        </div>
        <div class="canvasWrappers">
          <div class="canvasContainer">
            <div class="innerCanvas" style="background-image: url('${project.image}');"></div>
          </div>
        </div>
        <div class="titleWrapper">
          <span class="num">${project.num}</span>
          <span class="textTitle">${project.title}</span>
          <span class="toolTipIcon" title="Developer: ${project.designer}">
            <i class="fas fa-quote-right"></i>
          </span>
        </div>
        <div style="margin-top: 0.75rem;">
          <p style="font-size: 0.95rem; color: var(--text-navy-light); line-height: 1.6;">${project.shortDesc}</p>
        </div>
        <div style="margin-top: 1rem; display: flex; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
          ${liveBtnHtml}
          <button class="btn-details" data-id="${project.id}">
            View Details <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      `;

      container.appendChild(card);

      // Interspersed Quote Text Card (after project 02 in 'all' view)
      if (filter === 'all' && idx === 1) {
        const quoteBox = document.createElement('div');
        quoteBox.className = 'contentContainer quoteBox';
        quoteBox.innerHTML = `
          <div class="normalTitle">Extensive experience in software &amp; AI systems</div>
          <div class="text justify">
            <p>Combining algorithmic rigor with modern web aesthetics, I build <em>impactful digital solutions</em> that connect user needs with real-world technology.</p>
          </div>
        `;
        container.appendChild(quoteBox);
      }
    });

    // Attach modal trigger click listener
    container.querySelectorAll('.btn-details').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-id');
        openModal(id);
      });
    });
  }

  // Filter button handlers
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProjects(cat);
    });
  });

  renderProjects('all');
}

/* --------------------------------------------------------------------------
   PROJECT MODAL HANDLERS
   -------------------------------------------------------------------------- */
function initProjectModal() {
  const modalOverlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');

  if (!modalOverlay || !closeBtn) return;

  closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

function openModal(projectId) {
  const modalOverlay = document.getElementById('modal-overlay');
  const project = projectsData.find(p => p.id === projectId);
  if (!modalOverlay || !project) return;

  document.getElementById('modal-img').src = project.image;
  document.getElementById('modal-title').innerHTML = project.title;
  document.getElementById('modal-desc').textContent = project.fullDesc;

  const featuresList = document.getElementById('modal-features');
  featuresList.innerHTML = project.features.map(f => `<li><i class="fas fa-check" style="color: var(--accent-orange); margin-right: 0.5rem;"></i> ${f}</li>`).join('');

  const techContainer = document.getElementById('modal-tech');
  techContainer.innerHTML = project.tech.map(t => `<span class="techPill">${t}</span>`).join('');

  const modalActions = document.querySelector('.modal-actions');
  if (modalActions) {
    const liveBtnHtml = project.liveUrl
      ? `<a id="modal-live" href="${project.liveUrl}" target="_blank" rel="noopener" class="submitBtn" style="background: var(--accent-orange); color: var(--text-navy); margin-right: 0.75rem;">
          <i class="fas fa-external-link-alt"></i> Visit Live Application
         </a>`
      : '';

    modalActions.innerHTML = `
      ${liveBtnHtml}
      <a id="modal-github" href="${project.githubUrl}" target="_blank" rel="noopener" class="submitBtn">
        <i class="fab fa-github"></i> View GitHub Repository
      </a>
    `;
  }

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modalOverlay = document.getElementById('modal-overlay');
  if (!modalOverlay) return;
  modalOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}
