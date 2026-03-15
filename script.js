// Данные пользователя
const userData = {
    name: 'Клёк Артём',
    location: 'Новосибирск',
    telegram: '@kusteeek',
    email: 'lol.kleka2000@mail.ru',
    experience: 2
};

// Навыки для отображения
const skillsData = [
    { name: { ru: 'Функциональное тестирование', en: 'Functional Testing' }, level: 90, icon: 'fas fa-vial' },
    { name: { ru: 'Регрессионное тестирование', en: 'Regression Testing' }, level: 90, icon: 'fas fa-rotate' },
    { name: { ru: 'Интеграционное тестирование', en: 'Integration Testing' }, level: 85, icon: 'fas fa-link' },
    { name: { ru: 'Smoke тестирование', en: 'Smoke Testing' }, level: 95, icon: 'fas fa-fire' },
    { name: { ru: 'Jira', en: 'Jira' }, level: 90, icon: 'fab fa-jira' },
    { name: { ru: 'TestRail', en: 'TestRail' }, level: 85, icon: 'fas fa-tasks' },
    { name: { ru: 'Postman', en: 'Postman' }, level: 80, icon: 'fas fa-plug' },
    { name: { ru: 'SQL', en: 'SQL' }, level: 75, icon: 'fas fa-database' },
    { name: { ru: 'Git', en: 'Git' }, level: 70, icon: 'fab fa-git-alt' },
    { name: { ru: 'Тест-дизайн', en: 'Test Design' }, level: 85, icon: 'fas fa-pencil-ruler' },
    { name: { ru: 'Управление дефектами', en: 'Bug Tracking' }, level: 90, icon: 'fas fa-bug' },
    { name: { ru: 'SDLC', en: 'SDLC' }, level: 85, icon: 'fas fa-code-branch' }
];

// Переводы
const translations = {
    ru: {
        nav_home: 'Главная',
        nav_about: 'Обо мне',
        nav_skills: 'Навыки',
        nav_experience: 'Опыт',
        nav_contact: 'Контакты',
        available: 'Доступен для работы',
        hello: 'Привет, я',
        description: 'Превращаю сложные баги в идеальный пользовательский опыт. Специализируюсь на обеспечении качества и тестировании.',
        contact_me: 'Связаться со мной',
        years: 'Года опыта',
        bugs: '+ багов',
        projects: 'проекта',
        bug_hunter: 'Bug Hunter',
        qa_engineer: 'QA Engineer',
        quality: 'Quality',
        who_i_am: 'Кто я',
        about_me: 'Обо мне',
        about_highlight: 'QA-инженер с фокусом на обеспечение качества и тестирование программного обеспечения',
        about_text: 'За 2 года работы в IT участвовал в тестировании различных проектов, от стартапов до крупных банковских систем. Специализируюсь на функциональном, регрессионном и интеграционном тестировании. Постоянно развиваюсь и применяю лучшие практики в работе.',
        feature_1: 'Опыт работы с банковскими системами',
        feature_2: 'Участие в ПСИ с заказчиками',
        feature_3: 'Знание SDLC и методологий разработки',
        location: 'Локация',
        languages: 'Языки',
        russian: 'Русский',
        english: 'English',
        interests: 'Интересы',
        interest_1: 'Тестирование',
        interest_2: 'Качество ПО',
        interest_3: 'Автоматизация',
        what_i_can: 'Что я умею',
        skills: 'Навыки',
        career_path: 'Карьерный путь',
        experience: 'Опыт работы',
        vtb_1: 'Проектирование и планирование процессов тестирования, включая разработку тестовой стратегии, подготовку тест-планов, тест-кейсов и чек-листов',
        vtb_2: 'Выполнение комплексного тестирования ПО: функционального, регрессионного, smoke, интеграционного, повторное тестирование дефектов',
        vtb_3: 'Управление дефектами: регистрация, приоритизация, отслеживание статусов багов и контроль качества продукта',
        vtb_4: 'Работа с тестовыми данными и поддержка тестового окружения, подготовка конфигураций и сценариев',
        vtb_5: 'Подготовка отчётности, анализ проблем, оценка рисков и формирование рекомендаций по улучшению качества',
        vtb_6: 'Интеграция процессов тестирования в SDLC, взаимодействие с разработчиками, аналитиками и менеджерами',
        vtb_7: 'Участие в демонстрациях функционала заказчику (ПСИ), подготовка сценариев и сопровождение приемочного тестирования',
        vtb_8: 'Участие в улучшении процессов тестирования, оптимизация тестовых сценариев, внедрение новых практик контроля качества',
        neoflex_1: 'Проектирование и планирование тестирования',
        neoflex_2: 'Выполнение комплексного тестирования (функциональное, регрессионное, smoke и т.д.)',
        neoflex_3: 'Управление дефектами и отслеживание качества',
        neoflex_4: 'Работа с тестовыми данными и тестовым окружением',
        neoflex_5: 'Отчётность и анализ результатов тестирования',
        neoflex_6: 'Интеграция в процессы разработки',
        neoflex_7: 'Демонстрация функционала заказчику (ПСИ)',
        get_in_touch: 'Свяжитесь со мной',
        contacts: 'Контакты',
        online: 'online',
        qa_engineer_footer: 'QA Инженер'
    },
    en: {
        nav_home: 'Home',
        nav_about: 'About',
        nav_skills: 'Skills',
        nav_experience: 'Experience',
        nav_contact: 'Contact',
        available: 'Available for work',
        hello: "Hi, I'm",
        description: 'Turning complex bugs into perfect user experience. Specializing in quality assurance and testing.',
        contact_me: 'Contact me',
        years: 'Years exp',
        bugs: '+ bugs',
        projects: 'projects',
        bug_hunter: 'Bug Hunter',
        qa_engineer: 'QA Engineer',
        quality: 'Quality',
        who_i_am: 'Who I am',
        about_me: 'About me',
        about_highlight: 'QA Engineer focused on quality assurance and software testing',
        about_text: 'In 2 years in IT, I participated in testing various projects, from startups to large banking systems. I specialize in functional, regression and integration testing. Constantly improving and applying best practices.',
        feature_1: 'Experience with banking systems',
        feature_2: 'Participation in UAT with clients',
        feature_3: 'Knowledge of SDLC and development methodologies',
        location: 'Location',
        languages: 'Languages',
        russian: 'Russian',
        english: 'English',
        interests: 'Interests',
        interest_1: 'Testing',
        interest_2: 'Quality',
        interest_3: 'Automation',
        what_i_can: 'What I can do',
        skills: 'Skills',
        career_path: 'Career path',
        experience: 'Experience',
        vtb_1: 'Design and planning of testing processes, including test strategy development, test plans, test cases and checklists',
        vtb_2: 'Comprehensive software testing: functional, regression, smoke, integration, defect retesting',
        vtb_3: 'Defect management: registration, prioritization, bug status tracking and product quality control',
        vtb_4: 'Test data management and test environment support, configuration and scenario preparation',
        vtb_5: 'Reporting, problem analysis, risk assessment and quality improvement recommendations',
        vtb_6: 'Integration of testing processes into SDLC, interaction with developers, analysts and managers',
        vtb_7: 'Participation in functionality demos to the customer (UAT), scenario preparation and acceptance testing support',
        vtb_8: 'Participation in improving testing processes, optimization of test scenarios, implementation of new quality control practices',
        neoflex_1: 'Test design and planning',
        neoflex_2: 'Comprehensive testing (functional, regression, smoke, etc.)',
        neoflex_3: 'Defect management and quality tracking',
        neoflex_4: 'Test data and test environment management',
        neoflex_5: 'Reporting and test results analysis',
        neoflex_6: 'Integration into development processes',
        neoflex_7: 'Functionality demonstration to the customer (UAT)',
        get_in_touch: 'Get in touch',
        contacts: 'Contacts',
        online: 'online',
        qa_engineer_footer: 'QA Engineer'
    }
};

let currentLanguage = 'ru';

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
    initializeTypedText();
    initializeSkills();
    initializeNavbar();
    initializeThemeToggle();
    initializeLanguageToggle();
    applyTranslations();
    
    // Проверяем сохраненные настройки
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        const icon = document.querySelector('#themeToggle i');
        if (icon) icon.className = 'fas fa-sun';
    }
    
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        setLanguage(savedLanguage);
    }
});

// Функция для копирования в буфер обмена
window.copyToClipboard = function(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification(currentLanguage === 'ru' ? 'Скопировано!' : 'Copied!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
};

// Частицы на canvas
function initializeParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.3 - 0.15;
            this.speedY = Math.random() * 0.3 - 0.15;
            this.color = `rgba(108, 92, 231, ${Math.random() * 0.2 + 0.1})`;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    function init() {
        particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push(new Particle());
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    init();
    animate();
}

// Печатающийся текст
function initializeTypedText() {
    const typedTextElement = document.querySelector('.typed-text');
    if (!typedTextElement) return;
    
    const words = {
        ru: ['Инженер', 'Тестировщик', 'Специалист'],
        en: ['Engineer', 'Tester', 'Specialist']
    };
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWords = words[currentLanguage];
        const currentWord = currentWords[wordIndex];
        
        if (isDeleting) {
            typedTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % currentWords.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, 100);
        }
    }

    type();
}

// Инициализация навыков
function initializeSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;

    skillsGrid.innerHTML = skillsData.map(skill => {
        const name = skill.name[currentLanguage] || skill.name.ru;
        return `
            <div class="skill-item">
                <div class="skill-name">
                    <i class="${skill.icon}"></i>
                    <span>${name}</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-progress" style="width: ${skill.level}%"></div>
                </div>
            </div>
        `;
    }).join('');
}

// Переключение темы
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const icon = themeToggle.querySelector('i');
    
    themeToggle.addEventListener('click', () => {
        themeToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 200);
        
        document.body.classList.toggle('light-theme');
        
        if (document.body.classList.contains('light-theme')) {
            icon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'light');
        } else {
            icon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'dark');
        }
    });
}

// Переключение языка
function initializeLanguageToggle() {
    const langToggle = document.getElementById('languageToggle');
    if (!langToggle) return;
    
    langToggle.addEventListener('click', () => {
        const newLang = currentLanguage === 'ru' ? 'en' : 'ru';
        setLanguage(newLang);
    });
}

function setLanguage(lang) {
    currentLanguage = lang;
    
    const langToggle = document.getElementById('languageToggle');
    const ruOption = document.querySelector('.lang-ru');
    const enOption = document.querySelector('.lang-en');
    
    if (langToggle && ruOption && enOption) {
        if (lang === 'en') {
            langToggle.classList.add('en');
            ruOption.classList.remove('active');
            enOption.classList.add('active');
        } else {
            langToggle.classList.remove('en');
            enOption.classList.remove('active');
            ruOption.classList.add('active');
        }
    }
    
    applyTranslations();
    initializeSkills();
    
    const typedTextElement = document.querySelector('.typed-text');
    if (typedTextElement) {
        typedTextElement.textContent = '';
        initializeTypedText();
    }
    
    localStorage.setItem('language', lang);
}

// Применение переводов
function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    const floatingCards = document.querySelectorAll('.floating-card span');
    if (floatingCards.length >= 3) {
        floatingCards[0].textContent = translations[currentLanguage].bug_hunter;
        floatingCards[1].textContent = translations[currentLanguage].qa_engineer;
        floatingCards[2].textContent = translations[currentLanguage].quality;
    }
}

// Навигация
function initializeNavbar() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');

    if (!hamburger || !navMenu) return;

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
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

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });
}

// Уведомления
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}
