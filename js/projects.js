/* ==========================================================================
   PORTFOLIO PROJECTS MODULE — MEES VERBERNE ASYMMETRICAL GRID FORMAT
   ========================================================================== */

const projectsData = [
  {
    id: 'study-buddy',
    num: '01',
    title: 'Study <em>Buddy</em>',
    rawTitle: 'Study Buddy - Student Hub',
    category: 'web',
    isHighlight: true,
    tags: ['Collaboration', 'WebSockets', 'Productivity', 'React.js'],
    designer: 'Sudhanshu Shekhar',
    client: 'Student Community',
    shortDesc: 'A collaborative study workspace designed to help students organize learning, join virtual study rooms, and manage task kanban boards.',
    fullDesc: 'Study Buddy is a live web-based student productivity hub deployed on Render. Features real-time study timers, active course study rooms, group activity feeds, and a drag-and-drop Kanban board for managing assignments.',
    image: 'assets/project_study_buddy.jpg',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'WebSockets', 'LocalStorage', 'Node.js / Express'],
    features: [
      'Virtual live study rooms with participant audio/chat status',
      'Integrated Pomodoro Study Timer with custom session analytics',
      'Drag-and-drop Kanban board for organizing course assignments',
      'Deployed live on Render with active user collaboration feeds'
    ],
    liveUrl: 'https://study-buddy-eq2m.onrender.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAadfqsCn6nOIUqVQPbnnjC6OzenKF8uuoCnCw1oXdsgSKMpxSCJmvDGwDV7hMw_aem_36AAuWVFn4zoOzld1gFy4w',
    githubUrl: 'https://github.com/sudhanshushekhar/study-buddy'
  },
  {
    id: 'ai-resume',
    num: '02',
    title: 'AI Resume <em>Analyzer</em>',
    rawTitle: 'AI Resume ATS Evaluator',
    category: 'ai',
    isHalf: true,
    tags: ['AI/ML', 'NLP Analytics', 'ATS Score'],
    designer: 'Sudhanshu Shekhar',
    client: 'Job Seekers & Recruiter Tech',
    shortDesc: 'Automated ATS score evaluator and NLP resume analyzer that detects skill gaps, draws radar charts, and recommends job roles.',
    fullDesc: 'An intelligent web solution designed to optimize tech resumes for Applicant Tracking Systems (ATS). The application parses resume text, evaluates keyword density, generates a 0-100% ATS score, maps candidate strengths on a skill radar, and highlights missing skills.',
    image: 'assets/project_ai_resume.jpg',
    tech: ['Python', 'NLP', 'JavaScript', 'Chart.js', 'HTML5/CSS3'],
    features: [
      'Instant ATS score calculation with visual percentage dial indicator',
      'Interactive Skill Match Radar chart comparing resume vs target job posting',
      'Automated missing skill recommendations and formatting audit',
      'Exportable PDF evaluation report'
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/sudhanshushekhar/ai-resume-analyzer'
  },
  {
    id: 'iot-monitor',
    num: '03',
    title: 'ESP32 Smart <em>Environment</em>',
    rawTitle: 'ESP32 Environmental Station',
    category: 'iot',
    isHalf: true,
    tags: ['Microcontrollers', 'Embedded C++', 'Telemetry'],
    designer: 'Sudhanshu Shekhar',
    client: 'IoT Research Station',
    shortDesc: 'IoT telemetry hardware project featuring ESP32 microcontrollers, climate sensors, MQTT data stream, and real-time web telemetry chart.',
    fullDesc: 'A hardware-software IoT station built on the ESP32 platform. Measures temperature, relative humidity, and air quality index (AQI) in real-time. Transmits telemetry via MQTT over Wi-Fi to a web dashboard featuring live canvas line charts.',
    image: 'assets/project_iot_smart.jpg',
    tech: ['ESP32', 'Arduino / C++', 'Sensors (SHT31/MQ)', 'MQTT', 'Chart.js'],
    features: [
      'Sub-second telemetry sampling of temperature, humidity, and AQI',
      'Live streaming web dashboard with auto-updating time-series charts',
      'Hardware status diagnostic indicators and battery monitoring',
      'Low power sleep modes and emergency threshold alert notifications'
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/sudhanshushekhar/esp32-environmental-monitor'
  },
  {
    id: 'dsa-visualizer',
    num: '04',
    title: 'AlgoVision <em>Visualizer</em>',
    rawTitle: 'DSA Algorithm & Graph Visualizer',
    category: 'web',
    isHalf: true,
    tags: ['Algorithms', 'C++ / JS', 'Canvas API', 'Interactive'],
    designer: 'Sudhanshu Shekhar',
    client: 'CS Learning Portal',
    shortDesc: 'An interactive algorithm visualizer demonstrating array sorting, tree traversals, and graph search paths with step-by-step memory trace.',
    fullDesc: 'AlgoVision provides step-by-step animated visual representations of fundamental computer science data structures and sorting algorithms including Bubble Sort, Quick Sort, AVL Tree balancing, and Dijkstra Graph search.',
    image: 'assets/project_dsa_visualizer.jpg',
    tech: ['JavaScript (ES6)', 'HTML5 Canvas API', 'C++', 'Data Structures'],
    features: [
      'Real-time speed control and array size adjustments',
      'Interactive node highlight showing active comparisons',
      'Code snippet execution tracer highlighting active lines',
      'Built-in tutorials explaining algorithm time and space complexities'
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/sudhanshushekhar/dsa-visualizer'
  },
  {
    id: 'face-attendance',
    num: '05',
    title: 'AFRAL <em>AI Vision</em>',
    rawTitle: 'AI Face Recognition Attendance System',
    category: 'ai',
    isHalf: true,
    tags: ['Computer Vision', 'OpenCV', 'Python', 'AI'],
    designer: 'Sudhanshu Shekhar',
    client: 'Campus Entrance System',
    shortDesc: 'Automated facial recognition attendance logging system with live camera feed keypoint matching and student database integration.',
    fullDesc: 'AFRAL (Automated Facial Recognition Attendance Logging) uses OpenCV and deep facial embedding models to detect and register student attendance seamlessly as candidates enter the campus.',
    image: 'assets/project_face_attendance.jpg',
    tech: ['Python', 'OpenCV', 'Face Recognition API', 'SQLite', 'HTML5/CSS3'],
    features: [
      'Sub-second facial landmark detection and embedding comparison',
      'Live camera feed bounding box overlay with match confidence %',
      'Automated attendance record logging into SQL database',
      'Real-time student status dashboard and absent alerts'
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/sudhanshushekhar/afral-face-attendance'
  },
  {
    id: 'snake-game',
    num: '06',
    title: 'Snake <em>Arcade Engine</em>',
    rawTitle: '2D Canvas Snake Arcade Engine',
    category: 'web',
    isHighlight: true,
    tags: ['Game Engine', 'Canvas API', 'JavaScript', 'Retro'],
    designer: 'Sudhanshu Shekhar',
    client: 'Arcade Gaming',
    shortDesc: 'Retro 2D arcade Snake game engine featuring custom collision physics, high score tracking, sound effects, and smooth 60fps canvas rendering.',
    fullDesc: 'A high-performance 2D HTML5 Canvas game engine built purely with vanilla JavaScript ES6. Includes precise grid collision detection, responsive keyboard and touch controls, score persistence in LocalStorage, and retro sound effects.',
    image: 'assets/project_snake_game.jpg',
    tech: ['JavaScript (ES6)', 'HTML5 Canvas', 'CSS3', 'Web Audio API'],
    features: [
      'Smooth 60 FPS canvas loop rendering',
      'Multiple difficulty levels and growing speed multipliers',
      'LocalStorage high score leaderboard',
      'Touch controls optimized for mobile and desktop screens'
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/sudhanshushekhar/snake-arcade-engine'
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
