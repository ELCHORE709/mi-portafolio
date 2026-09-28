/**
 * MAURICIO NAVARRO — PORTAFOLIO INTERACTIVO (V5 PRO)
 * Funcionalidades: Filtros dinámicos, Visor de Código, Modales de Ficha Técnica,
 * Galería con miniaturas, Navegación responsiva y Scroll Reveal.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. BASE DE DATOS DE PROYECTOS (CASE STUDIES)
  // ==========================================
  const projectsData = {
    'bioruta': {
      title: 'BioRuta',
      tagline: 'Juego Serio Educativo en Unreal Engine 5.8',
      badge: 'Investigación Académica · En Desarrollo',
      engine: 'Unreal Engine 5.8 · Blueprints & C++',
      images: [
        'img/bioruta-placeholder.svg'
      ],
      context: 'Videojuego serio orientado a la divulgación científica y educación interactiva sobre generación de energía sustentable a partir de biomasa.',
      role: 'Lead Game Developer a cargo de la arquitectura en UE5.8, diseño de niveles interactivos, programación de sistemas mecánicos y desarrollo del framework de telemetría para captura de métricas del usuario orientadas a una publicación en revista científica indexada.',
      challenges: [
        '<strong>Arquitectura Desacoplada:</strong> Implementación de Blueprints modulares utilizando Event Dispatchers e Interfaces para evitar dependencias circulares y facilitar el mantenimiento.',
        '<strong>Sistema de Telemetría Académica:</strong> Registro asíncrono en tiempo real de tiempos de respuesta, rutas elegidas por los usuarios y tasas de retención pedagógica para análisis estadístico.',
        '<strong>Optimización Gráfica en UE5:</strong> Uso controlado de Lumen y Nanite para garantizar fluidez (60 FPS estables) en equipos de cómputo universitarios estándar.'
      ],
      optimization: 'Perfilado de assets mediante Unreal Insights, optimización de colisiones complejas y uso de Level Streaming para reducir el consumo de RAM en tiempo de ejecución.',
      links: [
        { label: '📅 Entrega estimada: Septiembre 2026', url: '#', class: 'btn-disabled' }
      ]
    },

    'beers': {
      title: 'Beers & Crystals',
      tagline: 'Roguelike Dungeon Crawler de Acción',
      badge: 'Publicado en itch.io · Jugable',
      engine: 'Unity 6 · C#',
      images: [
        'img/Captura_Beers_2.png',
        'img/Captura_Beers.png',
        'img/Captura_Beers_3.png'
      ],
      context: 'Roguelike de acción rápida en mazmorras con generación procedural, enfocado en combate dinámico, toma de decisiones bajo presión y mecánicas de riesgo-recompensa.',
      role: 'Desarrollador en solitario. Diseño y programación de la arquitectura de gameplay completa, inteligencia artificial de enemigos, generación algorítmica de mazmorras y programación de shaders visuales.',
      challenges: [
        '<strong>IA Enemiga con FSM (Finite State Machine):</strong> Máquina de estados jerárquica desacoplada (Patrol, Chase, AttackTelegraph, Stun) sin asignaciones de memoria en Update (Zero Garbage Collection).',
        '<strong>Generación Procedural por BSP:</strong> Algoritmo de partición del espacio binario (Binary Space Partitioning) con conexión de salas mediante grafos de Delaunay y árboles de expansión mínima (MST) para garantizar jugabilidad.',
        '<strong>Mecánica Frenesí / Chaos:</strong> Sistema de progresión en tiempo real que escala atributos y altera dinámicamente las frecuencias del audio según la tensión del combate.'
      ],
      optimization: 'Uso de Object Pooling para proyectiles, partículas y enemigos, logrando 120+ FPS y eliminando caídas por Garbage Collection.',
      links: [
        { label: '🎮 Jugar en itch.io', url: 'https://beers-co.itch.io/beers-crystals', class: 'btn-primary' },
        { label: 'Código en GitHub', url: 'https://github.com/ELCHORE709', class: 'btn-outline' }
      ]
    },

    'c111': {
      title: 'C111 Studios — Fortnite & UEFN',
      tagline: 'Experiencias Multijugador en el Ecosistema de Epic Games',
      badge: 'Experiencia Profesional en Estudio',
      engine: 'Unreal Editor for Fortnite · Verse',
      images: [
        'img/nda-placeholder.svg'
      ],
      context: 'Desarrollo de mapas e islas competitivas de alto impacto dentro de Fortnite para un estudio nacional de desarrollo de videojuegos.',
      role: 'Verse Programmer (Becario Remoto). Programación de mecánicas custom, gestión de eventos del juego en Verse, sincronización multijugador y balanceo del flujo competitivo de nivel.',
      challenges: [
        '<strong>Lógica Asíncrona en Verse:</strong> Manejo de expresiones concurrentes (`sync`, `race`, `branch`) para controlar el flujo de rondas, spawn de armamento y áreas de captura sin bloquear el hilo principal.',
        '<strong>Optimización de Memoria en UEFN:</strong> Cumplimiento estricto del presupuesto de memoria por celda de Epic Games (Memory Calculation Grid) para publicación en consolas y móviles.',
        '<strong>Metodología de Estudio Profesional:</strong> Trabajo colaborativo con diseñadores de niveles, artistas 3D y control de versiones bajo estándares de calidad comercial.'
      ],
      optimization: 'Reducción de dependencias entre dispositivos en UEFN mediante centralización de la lógica en controladores Verse modulares.',
      links: [
        { label: '🔒 Proyecto Protegido bajo Acuerdo NDA', url: '#', class: 'btn-disabled' }
      ]
    },

    'beers-vr': {
      title: 'Beers & Crystals VR',
      tagline: 'Adaptación a Realidad Virtual Inmersiva & Shaders HLSL',
      badge: 'XR / VR Experience',
      engine: 'Unity · XR Interaction Toolkit · HLSL',
      images: [
        'img/vr-placeholder.svg'
      ],
      context: 'Evolución del universo de Beers & Crystals a realidad virtual, explorando interacciones físicas naturales y fidelidad de sombreado en tiempo real.',
      role: 'Programador de Gameplay VR y Technical Artist. Implementación de controladores hápticos, cinemática de manos y desarrollo del shader de líquido dinámico.',
      challenges: [
        '<strong>HLSL Liquid Wobble Shader:</strong> Cálculo matemático de la superficie de líquido en espacio de coordenadas locales con oscilación armónica amortiguada (Spring-Damper) simulando inercia al mover la jarra.',
        '<strong>Interacciones Físicas con XR Toolkit:</strong> Agarre de dos manos, socketing de ítems en cinturón y lanzamiento con conservación de momento angular y lineal.',
        '<strong>Confort y Rendimiento VR:</strong> Tasa constante de 90 FPS para Oculus/Meta Quest mediante Single Pass Instanced Rendering y minimización de sobregiro (overdraw).'
      ],
      optimization: 'Uso de shaders optimizados para móviles VR sin cálculos trigonométricos costosos en el Fragment Shader.',
      links: [
        { label: 'Repositorio en GitHub', url: 'https://github.com/ELCHORE709', class: 'btn-outline' }
      ]
    },

    'ultimo-viaje': {
      title: 'El Último Viaje',
      tagline: 'Aventura Atmosférica Narrativa en el Mictlán',
      badge: 'LAGS Game Jam 2024 · Finalista',
      engine: 'Unity · Shader Graph · C#',
      images: [
        'img/Captura_Ultimo_Viaje_2.png',
        'img/Captura_Ultimo_Viaje.png',
        'img/Captura_Ultimo_Viaje_3.png'
      ],
      context: 'Juego desarrollado en tiempo récord durante la LAGS Game Jam 2024, explorando la mitología prehispánica del inframundo mexica con una dirección de arte estilizada.',
      role: 'Gameplay Programmer y Shaders. Programación de mecánicas de exploración, compañero IA (Xoloitzcuintle) y sistema de narrativa interactiva con ramificación moral.',
      challenges: [
        '<strong>IA de Acompañante con Evasión Dinámica:</strong> Navegación predictiva que acompaña al jugador, busca puntos de interés y responde a señales sin obstruir el paso.',
        '<strong>Shaders de Atmósfera en Shader Graph:</strong> Niebla volumétrica estilizada y efecto de disolución con ruido simplex para la manifestación de espíritus.',
        '<strong>Gestor de Decisiones y Múltiples Finales:</strong> Estructura de datos basada en ScriptableObjects para registrar decisiones y desencadenar dos finales contrastantes.'
      ],
      optimization: 'Mapeo de iluminación horneada (Lightmapping) combinado con luces puntuales dinámicas clave para mantener 60 FPS estables.',
      links: [
        { label: 'Ver en GitHub', url: 'https://github.com/ELCHORE709', class: 'btn-outline' }
      ]
    },

    'simulador-orbital': {
      title: 'Simulador de Física Orbital',
      tagline: 'Simulación de Gravedad N-Cuerpos para Investigación',
      badge: 'Publicación Académica · Libro Blanco',
      engine: 'Unity · Física Computacional C#',
      images: [
        'img/Captura_Sistema_Solar_2.png',
        'img/Captura_Sistema_Solar.png',
        'img/Captura_Sistema_Solar_3.png'
      ],
      context: 'Herramienta de simulación científica y lúdica creada para evaluar cómo los niños y jóvenes comprenden la mecánica orbital newtoniana a través del juego.',
      role: 'Programador de Simulación y Coautor del capítulo del Libro Blanco de los Videojuegos.',
      challenges: [
        '<strong>Integración Numérica de Verlet:</strong> Cálculo preciso de la Ley de Gravitación Universal sin acumulación de error en simulaciones aceleradas en el tiempo.',
        '<strong>Predicción de Trayectorias Cónicas:</strong> Algoritmo de renderizado de elipses orbitales en tiempo real para visualizar órbitas estables, periapsis y apoapsis.',
        '<strong>Métricas Pedagógicas:</strong> Registro cuantitativo de interacciones para el estudio formal publicado sobre aprendizaje asistido por videojuegos.'
      ],
      optimization: 'Vectorización de cálculos físicos para soportar decenas de cuerpos celestes interactuando simultáneamente.',
      links: [
        { label: 'Ver Publicación / GitHub', url: 'https://github.com/ELCHORE709', class: 'btn-outline' }
      ]
    },

    'car-champions': {
      title: 'Car-Champions',
      tagline: 'Simulación de Dinámicas Vehiculares Rocket League',
      badge: 'Físicas & Gameplay',
      engine: 'Unity · Wheel Colliders & Rigidbody',
      images: [
        'img/Captura_Car_Champions_2.png',
        'img/Captura_Car_Champions.png',
        'img/Captura_Car_Champions_3.png'
      ],
      context: 'Prototipo enfocado en dominar las complejas dinámicas de física vehicular arcade y maniobras aéreas competitivas.',
      role: 'Programador de Físicas y Control Vehicular.',
      challenges: [
        '<strong>Calibración de Wheel Colliders:</strong> Modelado preciso de curvas de fricción lateral y longitudinal, amortiguación de resortes de suspensión y transferencia de masa.',
        '<strong>Manejo Aéreo con Estabilización Angular:</strong> Control tridimensional de pitch, yaw y roll en el aire con amortiguación inercial para lograr el icónico control acrobático.',
        '<strong>Colisiones Dinámicas de Alta Velocidad:</strong> Configuración de Continuous Dynamic Collision Detection para evitar que el balón o el vehículo atraviesen paredes a máxima velocidad.'
      ],
      optimization: 'Sintonización precisa de la frecuencia de FixedUpdate (50Hz) con interpolación de Rigidbodies para movimiento ultra suave sin micro-tirones.',
      links: [
        { label: 'Ver en GitHub', url: 'https://github.com/ELCHORE709', class: 'btn-outline' }
      ]
    },

    'chess-rts': {
      title: 'Chess RTS 3D',
      tagline: 'Estrategia en Tiempo Real con Heurísticas de Ajedrez',
      badge: 'IA & Sistemas RTS',
      engine: 'Unity · C# · NavMesh',
      images: [
        'img/Captura_Chess_2.png',
        'img/Captura_Chess.png',
        'img/Captura_Chess_3.png'
      ],
      context: 'Prototipo que reimagina el ajedrez clásico transformándolo en una batalla táctica en tiempo real sin turnos, con cooldowns y posicionamiento espacial.',
      role: 'Diseñador de Sistemas e Inteligencia Artificial.',
      challenges: [
        '<strong>Algoritmo de Evaluación Táctica para IA:</strong> Matriz heurística que analiza el valor relativo de piezas amenazadas, control de casillas centrales y peligro del rey en tiempo real.',
        '<strong>Sistema de Selección Múltiple y Cooldowns:</strong> Arquitectura basada en colas de comandos (`Command Pattern`) para órdenes de ataque y movimiento simultáneo.',
        '<strong>Mapeo Isométrico 3D:</strong> Conversión fluida entre coordenadas del mundo continuo y casillas lógicas del tablero.'
      ],
      optimization: 'Cálculo de heurísticas distribuido a lo largo de múltiples frames (Time-slicing) para evitar caídas de rendimiento.',
      links: [
        { label: 'Ver en GitHub', url: 'https://github.com/ELCHORE709', class: 'btn-outline' }
      ]
    }
  };

  // ==========================================
  // 2. MENÚ MÓVIL
  // ==========================================
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-menu');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('is-active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('is-active');
      });
    });
  }

  // ==========================================
  // 3. SCROLL REVEAL OBSERVER
  // ==========================================
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { root: null, rootMargin: '0px', threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ==========================================
  // 4. SCROLL SPY (NAVBAR ACTIVO)
  // ==========================================
  const sections = document.querySelectorAll('section[id], header[id]');
  const navItems = document.querySelectorAll('.nav-link');

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) {
          navItems.forEach(l => l.classList.remove('active'));
          activeLink.classList.add('active');
        }
      }
    });
  }, { root: null, rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  sections.forEach(sec => spyObserver.observe(sec));

  // ==========================================
  // 5. FILTRADO INTERACTIVO DE PROYECTOS
  // ==========================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Estado visual del botón
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectItems.forEach(item => {
        const categories = item.getAttribute('data-category') || '';
        if (filterValue === 'all' || categories.includes(filterValue)) {
          item.classList.remove('is-hidden');
          // Pequeño retardo para animación
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 20);
        } else {
          item.classList.add('is-hidden');
          item.style.opacity = '0';
          item.style.transform = 'translateY(15px)';
        }
      });
    });
  });

  // ==========================================
  // 6. VISOR DE CÓDIGO (TABS)
  // ==========================================
  const codeTabs = document.querySelectorAll('.code-tab');
  const codePanels = document.querySelectorAll('.code-panel');

  codeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');

      codeTabs.forEach(t => t.classList.remove('active'));
      codePanels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPanel = document.getElementById(`tab-${targetTab}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // ==========================================
  // 7. SISTEMA MODAL INTERACTIVO DE CASE STUDIES
  // ==========================================
  const modal = document.getElementById('project-modal');
  const modalContentArea = document.getElementById('modal-content-area');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    // Generar miniaturas de la galería
    const thumbsHtml = data.images.map((imgSrc, index) => `
      <img src="${imgSrc}" alt="${data.title} ${index + 1}" class="modal-thumb ${index === 0 ? 'active' : ''}" data-full="${imgSrc}">
    `).join('');

    // Generar bullets de retos técnicos
    const bulletsHtml = data.challenges.map(bullet => `
      <li>${bullet}</li>
    `).join('');

    // Generar botones de enlaces
    const linksHtml = data.links.map(link => `
      <a href="${link.url}" ${link.url !== '#' ? 'target="_blank" rel="noopener"' : ''} class="btn ${link.class}">
        ${link.label}
      </a>
    `).join('');

    // Construir estructura interna del modal
    modalContentArea.innerHTML = `
      <div class="modal-header-section">
        <div class="modal-meta-row">
          <span class="badge badge-accent">${data.badge}</span>
          <span class="badge-engine">${data.engine}</span>
        </div>
        <h2 class="modal-title">${data.title}</h2>
        <div class="modal-tagline">${data.tagline}</div>
      </div>

      <div class="modal-gallery-wrap">
        <img src="${data.images[0]}" alt="${data.title}" class="modal-main-img" id="modal-main-image">
        ${data.images.length > 1 ? `<div class="modal-thumbs-row">${thumbsHtml}</div>` : ''}
      </div>

      <div class="modal-deepdive-grid">
        <div class="modal-block">
          <h4>📌 Contexto &amp; Mi Rol</h4>
          <p>${data.context}</p>
          <p><strong>Responsabilidades:</strong> ${data.role}</p>
        </div>

        <div class="modal-block">
          <h4>⚡ Rendimiento &amp; Profiling</h4>
          <p>${data.optimization}</p>
        </div>
      </div>

      <div class="modal-block" style="margin-bottom: 24px;">
        <h4>🛠️ Retos de Ingeniería &amp; Arquitectura</h4>
        <ul class="modal-bullet-list">
          ${bulletsHtml}
        </ul>
      </div>

      <div class="modal-footer-cta">
        ${linksHtml}
      </div>
    `;

    // Interacción de miniaturas de imagen
    const mainImg = document.getElementById('modal-main-image');
    const thumbs = modalContentArea.querySelectorAll('.modal-thumb');

    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        mainImg.src = thumb.getAttribute('data-full');
      });
    });

    // Mostrar modal
    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Evitar scroll del fondo
  }

  function closeModal() {
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Event listeners para abrir modal
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.open-case-study');
    if (trigger) {
      e.preventDefault();
      const projectId = trigger.getAttribute('data-project');
      if (projectId) {
        openModal(projectId);
      }
    }
  });

  // Cerrar modal
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeModal();
    }
  });

});
