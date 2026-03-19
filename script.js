// ===== Инициализация и глобальные переменные =====
let currentTheme = 'dark';
let currentLang = 'ru';
let typedInstance = null;
let particlesInitialized = false;
let particlesCanvas = null;
let ctx = null;
let particles = [];
let animationFrame = null;

// Объект с переводами
const translations = {
    ru: {
        // Навигация
        nav_home: 'Главная',
        nav_about: 'Обо мне',
        nav_skills: 'Навыки',
        nav_experience: 'Опыт',
        nav_projects: 'Проекты',
        nav_contact: 'Контакты',
        
        // Hero секция
        available: '🔥 Доступен для работы',
        hello: 'Привет, я',
        name: 'Клёк Артём',
        description: 'Стремлюсь к постоянному развитию в сфере обеспечения качества и тестирования. Увлечен автоматизацией и поиском новых подходов к улучшению процессов.',
        contact_me: 'Связаться со мной',
        years: 'Года опыта',
        bugs: 'багов',
        projects: 'проектов',
        bug_hunter: 'Bug Hunter',
        auto_qa: 'Auto QA',
        quality: 'Quality',
        
        // Обо мне
        about_highlight: 'QA-инженер, стремящийся к совершенству в обеспечении качества',
        about_text: 'За 2 года работы в IT участвовал в тестировании различных проектов. Постоянно учусь новому, слежу за трендами в тестировании и применяю современные подходы в работе.',
        projects_count: 'Проектов',
        bugs_count: 'Найденных багов',
        location: 'Локация',
        languages: 'Языки',
        russian: 'Русский (Native)',
        english: 'English (B1 - Intermediate)',
        interests: 'Интересы',
        interest_1: 'Изучение новых технологий',
        interest_2: 'Автоматизация всего',
        interest_3: 'Оптимизация процессов',
        interest_4: 'Поиск нестандартных решений',
        interest_5: 'Постоянное саморазвитие',
        
        // Навыки
        what_i_can: 'Что я умею',
        skills: 'Навыки',
        all: 'Все',
        automation: 'Автоматизация',
        manual: 'Ручное тестирование',
        tools: 'Инструменты',
        
        // Опыт
        career_path: 'Карьерный путь',
        experience: 'Опыт работы',
        vtb_1: 'Проектирование и планирование тестирования',
        vtb_2: 'Выполнение комплексного тестирования (функциональное, регрессионное, smoke и т.д.)',
        vtb_3: 'Управление дефектами и отслеживание качества',
        vtb_4: 'Работа с тестовыми данными и тестовым окружением',
        vtb_5: 'Отчётность и анализ результатов тестирования',
        vtb_6: 'Интеграция в процессы разработки',
        vtb_7: 'Демонстрация функционала заказчику (ПСИ)',
        neoflex_1: 'Проектирование и планирование тестирования',
        neoflex_2: 'Выполнение комплексного тестирования',
        neoflex_3: 'Управление дефектами и отслеживание качества',
        neoflex_4: 'Работа с тестовыми данными',
        neoflex_5: 'Отчётность и анализ результатов',
        
        // Проекты
        my_projects: 'Мои работы',
        projects_title: 'Проекты',
        project_title: 'Автоматизированное тестирование Tutu.ru',
        project_desc: 'Разработка фреймворка для автоматизации тестирования веб-приложения Tutu.ru. Включает UI и API тесты с генерацией отчетов.',
        open_github: 'Открыть на GitHub →',
        
        // CTA
        cta_title: 'Открыт к предложениям!',
        cta_text: 'Готов применять свои навыки и развиваться в новой команде',
        cta_button: 'Написать мне',
        
        // Контакты
        get_in_touch: 'Свяжитесь со мной',
        contacts: 'Контакты',
        qa_engineer: 'QA Инженер',
        made_with: 'Сделано с ❤️ в Новосибирске',
        
        // Название страницы
        page_title: 'Клёк Артём - QA Инженер'
    },
    en: {
        // Navigation
        nav_home: 'Home',
        nav_about: 'About',
        nav_skills: 'Skills',
        nav_experience: 'Experience',
        nav_projects: 'Projects',
        nav_contact: 'Contact',
        
        // Hero section
        available: '🔥 Available for work',
        hello: "Hi, I'm",
        name: 'Artem Klyok',
        description: 'I strive for continuous development in the field of quality assurance and testing. Passionate about automation and finding new approaches to process improvement.',
        contact_me: 'Contact me',
        years: 'Years of experience',
        bugs: 'bugs found',
        projects: 'projects',
        bug_hunter: 'Bug Hunter',
        auto_qa: 'Auto QA',
        quality: 'Quality',
        
        // About
        about_highlight: 'QA Engineer striving for excellence in quality assurance',
        about_text: 'For 2 years in IT, I have participated in testing various projects. I constantly learn new things, follow testing trends, and apply modern approaches in my work.',
        projects_count: 'Projects',
        bugs_count: 'Bugs found',
        location: 'Location',
        languages: 'Languages',
        russian: 'Russian (Native)',
        english: 'English (B1 - Intermediate)',
        interests: 'Interests',
        interest_1: 'Learning new technologies',
        interest_2: 'Automating everything',
        interest_3: 'Process optimization',
        interest_4: 'Finding non-standard solutions',
        interest_5: 'Continuous self-development',
        
        // Skills
        what_i_can: 'What I can do',
        skills: 'Skills',
        all: 'All',
        automation: 'Automation',
        manual: 'Manual testing',
        tools: 'Tools',
        
        // Experience
        career_path: 'Career path',
        experience: 'Experience',
        vtb_1: 'Test design and planning',
        vtb_2: 'Comprehensive testing (functional, regression, smoke, etc.)',
        vtb_3: 'Defect management and quality tracking',
        vtb_4: 'Working with test data and test environment',
        vtb_5: 'Reporting and test results analysis',
        vtb_6: 'Integration into development processes',
        vtb_7: 'Feature demonstration to the customer (UAT)',
        neoflex_1: 'Test design and planning',
        neoflex_2: 'Comprehensive testing',
        neoflex_3: 'Defect management and quality tracking',
        neoflex_4: 'Working with test data',
        neoflex_5: 'Reporting and results analysis',
        
        // Projects
        my_projects: 'My work',
        projects_title: 'Projects',
        project_title: 'Automated testing of Tutu.ru',
        project_desc: 'Development of a framework for automated testing of the Tutu.ru web application. Includes UI and API tests with report generation.',
        open_github: 'Open on GitHub →',
        
        // CTA
        cta_title: "Open to offers!",
        cta_text: 'Ready to apply my skills and grow in a new team',
        cta_button: 'Write to me',
        
        // Contact
        get_in_touch: 'Get in touch',
        contacts: 'Contacts',
        qa_engineer: 'QA Engineer',
        made_with: 'Made with ❤️ in Novosibirsk',
        
        // Page title
        page_title: 'Artem Klyok - QA Engineer'
    }
};

// ===== Функция перевода страницы =====
function translatePage(lang) {
    // Сохраняем выбранный язык
    currentLang = lang;
    localStorage.setItem('preferred-language', lang);
    
    // Обновляем активный класс у переключателя языка
    document.querySelectorAll('.language-toggle span').forEach(span => {
        span.classList.remove('active');
    });
    document.querySelector(`.lang-${lang}`).classList.add('active');
    
    // Переводим все элементы с атрибутом data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Для input элементов переводим placeholder или value
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.placeholder) {
                    element.placeholder = translations[lang][key];
                } else if (element.value) {
                    element.value = translations[lang][key];
                }
            } 
            // Для обычных элементов переводим текст
            else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Отдельно переводим имя и фамилию в заголовке
    const nameElement = document.querySelector('.gradient-text');
    if (nameElement && translations[lang] && translations[lang]['name']) {
        nameElement.textContent = translations[lang]['name'];
    }
    
    // Переводим заголовок страницы
    if (translations[lang] && translations[lang]['page_title']) {
        document.title = translations[lang]['page_title'];
    }
    
    // Обновляем текст в typed.js если он инициализирован
    if (typedInstance) {
        typedInstance.destroy();
        initTyped();
    }
}

// ===== Загрузка языка при старте =====
function loadSavedLanguage() {
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && (savedLang === 'ru' || savedLang === 'en')) {
        currentLang = savedLang;
        translatePage(savedLang);
    } else {
        // По умолчанию русский
        translatePage('ru');
    }
}

// ===== Particles =====
function initParticles() {
    if (particlesInitialized) return;
    
    particlesCanvas = document.getElementById('particles-canvas');
    if (!particlesCanvas) return;
    
    ctx = particlesCanvas.getContext('2d');
    
    function resizeCanvas() {
        particlesCanvas.width = window.innerWidth;
        particlesCanvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Создание частиц
    const particleCount = 50;
    particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * particlesCanvas.width,
            y: Math.random() * particlesCanvas.height,
            radius: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            color: `rgba(108, 92, 231, ${Math.random() * 0.3})`
        });
    }
    
    function animate() {
        if (!ctx || !particlesCanvas) return;
        
        ctx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
        
        particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Отскок от границ
            if (particle.x < 0 || particle.x > particlesCanvas.width) {
                particle.speedX *= -1;
            }
            if (particle.y < 0 || particle.y > particlesCanvas.height) {
                particle.speedY *= -1;
            }
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
        });
        
        animationFrame = requestAnimationFrame(animate);
    }
    
    animate();
    particlesInitialized = true;
}

// ===== Typed.js эффект =====
function initTyped() {
    const typedElement = document.querySelector('.typed-text');
    if (!typedElement) return;
    
    const words = currentLang === 'ru' 
        ? ['инженер', 'тестировщик', 'автоматизатор']
        : ['Engineer', 'Tester', 'Automation'];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isWaiting = false;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typedElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            isWaiting = true;
            setTimeout(() => {
                isDeleting = true;
                isWaiting = false;
            }, 2000);
        }
        
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
        
        if (!isWaiting) {
            const speed = isDeleting ? 50 : 100;
            setTimeout(type, speed);
        } else {
            setTimeout(type, 100);
        }
    }
    
    type();
}

// ===== Theme Toggle =====
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeOverlay = document.querySelector('.theme-overlay');
    
    if (!themeToggle) return;
    
    // Загружаем сохраненную тему
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('light-theme', savedTheme === 'light');
    updateThemeIcon(savedTheme === 'light');
    
    themeToggle.addEventListener('click', () => {
        // Активируем overlay для плавного перехода
        themeOverlay.classList.add('active');
        
        // Меняем тему после небольшой задержки
        setTimeout(() => {
            const isLight = document.body.classList.contains('light-theme');
            
            if (isLight) {
                document.body.classList.remove('light-theme');
                localStorage.setItem('theme', 'dark');
                updateThemeIcon(false);
            } else {
                document.body.classList.add('light-theme');
                localStorage.setItem('theme', 'light');
                updateThemeIcon(true);
            }
            
            // Деактивируем overlay
            setTimeout(() => {
                themeOverlay.classList.remove('active');
            }, 300);
        }, 150);
    });
}

function updateThemeIcon(isLight) {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const icon = themeToggle.querySelector('i');
    if (icon) {
        icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// ===== Language Toggle =====
function initLanguageToggle() {
    const langToggle = document.getElementById('languageToggle');
    if (!langToggle) return;
    
    langToggle.addEventListener('click', (e) => {
        if (e.target.classList.contains('lang-ru')) {
            translatePage('ru');
        } else if (e.target.classList.contains('lang-en')) {
            translatePage('en');
        }
    });
}

// ===== Copy to clipboard =====
window.copyToClipboard = function(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Показываем уведомление (можно добавить стили)
        alert('Email скопирован!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
};

// ===== Active Navigation Highlight =====
function initNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== Mobile Menu =====
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (!hamburger || !navLinks) return;
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Закрываем меню при клике на ссылку
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ===== Skills Grid =====
function initSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;
    
    const skillsData = {
        all: [
            { name: 'Jira', icon: 'fab fa-jira', level: 85, category: 'tools' },
            { name: 'TestRail', icon: 'fas fa-tasks', level: 80, category: 'tools' },
            { name: 'Postman', icon: 'fas fa-code', level: 85, category: 'tools' },
            { name: 'SQL', icon: 'fas fa-database', level: 75, category: 'tools' },
            { name: 'Git', icon: 'fab fa-git-alt', level: 80, category: 'tools' },
            { name: 'Selenium', icon: 'fas fa-robot', level: 70, category: 'automation' },
            { name: 'Java', icon: 'fab fa-java', level: 65, category: 'automation' },
            { name: 'REST API', icon: 'fas fa-cloud', level: 75, category: 'automation' },
            { name: 'Test Design', icon: 'fas fa-pencil-ruler', level: 90, category: 'manual' },
            { name: 'Regression Testing', icon: 'fas fa-redo-alt', level: 85, category: 'manual' },
            { name: 'Smoke Testing', icon: 'fas fa-fire', level: 85, category: 'manual' },
            { name: 'Chrome DevTools', icon: 'fab fa-chrome', level: 80, category: 'tools' },
            { name: 'Charles Proxy', icon: 'fas fa-network-wired', level: 70, category: 'tools' },
            { name: 'Agile/Scrum', icon: 'fas fa-users-cog', level: 85, category: 'manual' },
            { name: 'API Testing', icon: 'fas fa-exchange-alt', level: 80, category: 'automation' }
        ],
        automation: [
            { name: 'Selenium', icon: 'fas fa-robot', level: 70, category: 'automation' },
            { name: 'Java', icon: 'fab fa-java', level: 65, category: 'automation' },
            { name: 'REST API', icon: 'fas fa-cloud', level: 75, category: 'automation' },
            { name: 'API Testing', icon: 'fas fa-exchange-alt', level: 80, category: 'automation' }
        ],
        manual: [
            { name: 'Test Design', icon: 'fas fa-pencil-ruler', level: 90, category: 'manual' },
            { name: 'Regression Testing', icon: 'fas fa-redo-alt', level: 85, category: 'manual' },
            { name: 'Smoke Testing', icon: 'fas fa-fire', level: 85, category: 'manual' },
            { name: 'Agile/Scrum', icon: 'fas fa-users-cog', level: 85, category: 'manual' }
        ],
        tools: [
            { name: 'Jira', icon: 'fab fa-jira', level: 85, category: 'tools' },
            { name: 'TestRail', icon: 'fas fa-tasks', level: 80, category: 'tools' },
            { name: 'Postman', icon: 'fas fa-code', level: 85, category: 'tools' },
            { name: 'SQL', icon: 'fas fa-database', level: 75, category: 'tools' },
            { name: 'Git', icon: 'fab fa-git-alt', level: 80, category: 'tools' },
            { name: 'Chrome DevTools', icon: 'fab fa-chrome', level: 80, category: 'tools' },
            { name: 'Charles Proxy', icon: 'fas fa-network-wired', level: 70, category: 'tools' }
        ]
    };
    
    function renderSkills(category = 'all') {
        const skills = skillsData[category] || skillsData.all;
        
        skillsGrid.classList.add('fade-out');
        
        setTimeout(() => {
            skillsGrid.innerHTML = '';
            
            skills.forEach(skill => {
                const skillCard = document.createElement('div');
                skillCard.className = 'skill-card';
                
                // Переводим название навыка если нужно
                let skillName = skill.name;
                if (currentLang === 'en') {
                    // Базовая карта переводов для навыков
                    const skillTranslations = {
                        'Jira': 'Jira',
                        'TestRail': 'TestRail',
                        'Postman': 'Postman',
                        'SQL': 'SQL',
                        'Git': 'Git',
                        'Selenium': 'Selenium',
                        'Java': 'Java',
                        'REST API': 'REST API',
                        'Test Design': 'Test Design',
                        'Regression Testing': 'Regression Testing',
                        'Smoke Testing': 'Smoke Testing',
                        'Chrome DevTools': 'Chrome DevTools',
                        'Charles Proxy': 'Charles Proxy',
                        'Agile/Scrum': 'Agile/Scrum',
                        'API Testing': 'API Testing'
                    };
                    skillName = skillTranslations[skill.name] || skill.name;
                }
                
                skillCard.innerHTML = `
                    <div class="skill-icon">
                        <i class="${skill.icon}"></i>
                    </div>
                    <div class="skill-name">${skillName}</div>
                    <div class="skill-level">
                        <div class="skill-progress" style="width: ${skill.level}%"></div>
                    </div>
                `;
                
                skillsGrid.appendChild(skillCard);
            });
            
            skillsGrid.classList.remove('fade-out');
        }, 300);
    }
    
    // Инициализация с 'all'
    renderSkills('all');
    
    // Фильтрация
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            renderSkills(filter);
        });
    });
}

// ===== Animate Stats =====
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const target = stat.getAttribute('data-target');
                if (!target) return;
                
                let current = 0;
                const increment = target > 100 ? 5 : 1;
                const duration = 2000;
                const stepTime = 20;
                const steps = duration / stepTime;
                const incrementPerStep = target / steps;
                
                const timer = setInterval(() => {
                    current += incrementPerStep;
                    if (current >= target) {
                        stat.textContent = target + (target === '200' ? '+' : '');
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(current) + (target === '200' ? '+' : '');
                    }
                }, stepTime);
                
                observer.unobserve(stat);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
}

// ===== Smooth Scroll =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== Reveal Animations on Scroll =====
function initRevealAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.info-card, .timeline-item, .project-card, .contact-card').forEach(el => {
        observer.observe(el);
    });
}

// ===== Инициализация при загрузке страницы =====
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    loadSavedLanguage();
    initThemeToggle();
    initLanguageToggle();
    initTyped();
    initNavigation();
    initMobileMenu();
    initSkills();
    animateStats();
    initSmoothScroll();
    initRevealAnimations();
    
    // Переводим навыки при смене языка (если нужно обновлять названия в skill-card)
    document.addEventListener('languageChanged', () => {
        if (typeof renderSkills === 'function') {
            const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
            renderSkills(activeFilter);
        }
    });
});

// Очистка при размонтировании
window.addEventListener('beforeunload', () => {
    if (animationFrame) {
        cancelAnimationFrame(animationFrame);
    }
});

// Обновляем particles при изменении размера окна
window.addEventListener('resize', () => {
    if (particlesCanvas) {
        particlesCanvas.width = window.innerWidth;
        particlesCanvas.height = window.innerHeight;
    }
});
