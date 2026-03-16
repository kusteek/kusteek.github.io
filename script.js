// Данные для навыков
const skillsData = [
    { name: { ru: 'Автоматизация (Selenium)', en: 'Automation (Selenium)' }, category: 'automation', level: 85, icon: 'fas fa-robot' },
    { name: { ru: 'Java', en: 'Java' }, category: 'automation', level: 80, icon: 'fab fa-java' },
    { name: { ru: 'JUnit/TestNG', en: 'JUnit/TestNG' }, category: 'automation', level: 85, icon: 'fas fa-vial' },
    { name: { ru: 'Ручное тестирование', en: 'Manual Testing' }, category: 'manual', level: 95, icon: 'fas fa-clipboard-list' },
    { name: { ru: 'Тест-дизайн', en: 'Test Design' }, category: 'manual', level: 90, icon: 'fas fa-pencil-ruler' },
    { name: { ru: 'API тестирование', en: 'API Testing' }, category: 'manual', level: 85, icon: 'fas fa-plug' },
    { name: { ru: 'Мобильное тестирование', en: 'Mobile Testing' }, category: 'manual', level: 75, icon: 'fas fa-mobile-alt' },
    { name: { ru: 'Jira', en: 'Jira' }, category: 'tools', level: 90, icon: 'fab fa-jira' },
    { name: { ru: 'TestRail', en: 'TestRail' }, category: 'tools', level: 85, icon: 'fas fa-tasks' },
    { name: { ru: 'Postman', en: 'Postman' }, category: 'tools', level: 85, icon: 'fas fa-plug' },
    { name: { ru: 'Git', en: 'Git' }, category: 'tools', level: 80, icon: 'fab fa-git-alt' },
    { name: { ru: 'Docker', en: 'Docker' }, category: 'tools', level: 70, icon: 'fab fa-docker' },
    { name: { ru: 'SQL', en: 'SQL' }, category: 'tools', level: 75, icon: 'fas fa-database' }
];

// Переводы
const translations = {
    ru: {
        nav_home: 'Главная',
        nav_about: 'Обо мне',
        nav_skills: 'Навыки',
        nav_experience: 'Опыт',
        nav_projects: 'Проекты',
        nav_contact: 'Контакты',
        available: '🔥 Доступен для работы',
        hello: 'Привет, я',
        description: 'Стремлюсь к постоянному развитию в сфере обеспечения качества и тестирования. Увлечен автоматизацией и поиском новых подходов к улучшению процессов.',
        contact_me: 'Связаться со мной',
        years: 'Года опыта',
        bugs: '+ багов',
        projects: 'проектов',
        bug_hunter: 'Bug Hunter',
        auto_qa: 'Auto QA',
        quality: 'Quality',
        who_i_am: 'Кто я',
        about_me: 'Обо мне',
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
        what_i_can: 'Что я умею',
        skills: 'Навыки',
        all: 'Все',
        automation: 'Автоматизация',
        manual: 'Ручное тестирование',
        tools: 'Инструменты',
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
        my_projects: 'Мои работы',
        project_title: 'Автоматизированное тестирование Tutu.ru',
        project_desc: 'Разработка фреймворка для автоматизации тестирования веб-приложения Tutu.ru. Включает UI и API тесты с генерацией отчетов.',
        open_github: 'Открыть на GitHub →',
        cta_title: 'Открыт к предложениям!',
        cta_text: 'Готов применять свои навыки и развиваться в новой команде',
        cta_button: 'Написать мне',
        get_in_touch: 'Свяжитесь со мной',
        contacts: 'Контакты',
        qa_engineer: 'QA Инженер',
        made_with: 'Сделано с ❤️ в Новосибирске'
    },
    en: {
        nav_home: 'Home',
        nav_about: 'About',
        nav_skills: 'Skills',
        nav_experience: 'Experience',
        nav_projects: 'Projects',
        nav_contact: 'Contact',
        available: '🔥 Available for work',
        hello: "Hi, I'm",
        description: 'I strive for continuous development in quality assurance and testing. Passionate about automation and finding new approaches to improve processes.',
        contact_me: 'Contact me',
        years: 'years exp',
        bugs: '+ bugs',
        projects: 'projects',
        bug_hunter: 'Bug Hunter',
        auto_qa: 'Auto QA',
        quality: 'Quality',
        who_i_am: 'Who I am',
        about_me: 'About me',
        about_highlight: 'QA Engineer striving for excellence in quality assurance',
        about_text: 'In 2 years in IT, I participated in testing various projects. Constantly learning new things, following trends in testing and applying modern approaches in work.',
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
        what_i_can: 'What I can do',
        skills: 'Skills',
        all: 'All',
        automation: 'Automation',
        manual: 'Manual Testing',
        tools: 'Tools',
        career_path: 'Career path',
        experience: 'Experience',
        vtb_1: 'Test design and planning',
        vtb_2: 'Comprehensive testing (functional, regression, smoke, etc.)',
        vtb_3: 'Defect management and quality tracking',
        vtb_4: 'Test data and test environment management',
        vtb_5: 'Reporting and test results analysis',
        vtb_6: 'Integration into development processes',
        vtb_7: 'Functionality demonstration to the customer (UAT)',
        neoflex_1: 'Test design and planning',
        neoflex_2: 'Comprehensive testing',
        neoflex_3: 'Defect management and quality tracking',
        neoflex_4: 'Test data management',
        neoflex_5: 'Reporting and analysis',
        my_projects: 'My projects',
        project_title: 'Automated testing of Tutu.ru',
        project_desc: 'Development of a framework for automated testing of the Tutu.ru web application. Includes UI and API tests with report generation.',
        open_github: 'Open on GitHub →',
        cta_title: 'Open to offers!',
        cta_text: 'Ready to apply my skills and grow in a new team',
        cta_button: 'Write to me',
        get_in_touch: 'Get in touch',
        contacts: 'Contacts',
        qa_engineer: 'QA Engineer',
        made_with: 'Made with ❤️ in Novosibirsk'
    }
};

let currentLanguage = 'ru';
let mouseX = 0;
let mouseY = 0;
let typedInterval;

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
    initializeTypedText();
    initializeSkills();
    initializeNavbar();
    initializeThemeToggle();
    initializeLanguageToggle();
    initializeStatsAnimation();
    initializeCopyButtons();
    
    // Применяем переводы
    applyTranslations();
    
    // Проверяем сохраненные настройки
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        document.querySelector('#themeToggle i').className = 'fas fa-sun';
    }
    
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        setLanguage(savedLanguage);
    }
});

// Функция применения переводов
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLanguage][key];
            } else if (element.tagName === 'BUTTON') {
                element.innerHTML = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
}

// Переключение языка
function initializeLanguageToggle() {
    const toggle = document.getElementById('languageToggle');
    const ru = toggle.querySelector('.lang-ru');
    const en = toggle.querySelector('.lang-en');
    
    toggle.addEventListener('click', () => {
        toggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            toggle.style.transform = 'scale(1)';
        }, 200);
        
        const newLang = currentLanguage === 'ru' ? 'en' : 'ru';
        setLanguage(newLang);
    });
}

function setLanguage(lang) {
    currentLanguage = lang;
    
    const ru = document.querySelector('.lang-ru');
    const en = document.querySelector('.lang-en');
    
    if (lang === 'en') {
        ru.classList.remove('active');
        en.classList.add('active');
    } else {
        en.classList.remove('active');
        ru.classList.add('active');
    }
    
    applyTranslations();
    initializeSkills();
    
    // Перезапускаем typed text
    const typedText = document.querySelector('.typed-text');
    if (typedText) {
        typedText.textContent = '';
        initializeTypedText();
    }
    
    localStorage.setItem('language', lang);
}

// Частицы
function initializeParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    for (let i = 0; i < 60; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedX: Math.random() * 0.3 - 0.15,
            speedY: Math.random() * 0.3 - 0.15,
            color: `rgba(108, 92, 231, ${Math.random() * 0.3 + 0.1})`
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            
            const dx = mouseX - p.x;
            const dy = mouseY - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const angle = Math.atan2(dy, dx);
                const force = (100 - distance) / 100;
                p.x -= Math.cos(angle) * force * 1.5;
                p.y -= Math.sin(angle) * force * 1.5;
            }
            
            if (p.x > canvas.width) p.x = 0;
            if (p.x < 0) p.x = canvas.width;
            if (p.y > canvas.height) p.y = 0;
            if (p.y < 0) p.y = canvas.height;
            
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Печатающийся текст
function initializeTypedText() {
    const typedText = document.querySelector('.typed-text');
    if (!typedText) return;
    
    if (typedInterval) clearInterval(typedInterval);
    
    const words = {
        ru: ['Инженер', 'Тестировщик', 'Автоматизатор', 'Специалист'],
        en: ['Engineer', 'Tester', 'Automator', 'Specialist']
    };
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWords = words[currentLanguage];
        const currentWord = currentWords[wordIndex];
        
        if (isDeleting) {
            typedText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedText.textContent = currentWord.substring(0, charIndex + 1);
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

// Навыки
function initializeSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;

    function renderSkills(category = 'all') {
        const filtered = category === 'all' ? skillsData : skillsData.filter(s => s.category === category);
        
        skillsGrid.innerHTML = filtered.map(skill => {
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

    renderSkills();

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderSkills(btn.dataset.filter);
        });
    });
}

// Навигация
function initializeNavbar() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                if (navMenu) {
                    navMenu.classList.remove('active');
                    if (hamburger) hamburger.classList.remove('active');
                }
            }
        });
    });

    window.addEventListener('scroll', () => {
        let current = '';
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
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

// Переключение темы
function initializeThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    const icon = toggle.querySelector('i');
    const overlay = document.querySelector('.theme-overlay');
    
    toggle.addEventListener('click', (e) => {
        const rect = toggle.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        overlay.style.setProperty('--x', x + 'px');
        overlay.style.setProperty('--y', y + 'px');
        overlay.classList.add('active');
        
        toggle.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            document.body.classList.toggle('light-theme');
            
            if (document.body.classList.contains('light-theme')) {
                icon.className = 'fas fa-sun';
                localStorage.setItem('theme', 'light');
            } else {
                icon.className = 'fas fa-moon';
                localStorage.setItem('theme', 'dark');
            }
            
            toggle.style.transform = 'scale(1)';
            
            setTimeout(() => {
                overlay.classList.remove('active');
            }, 800);
        }, 150);
    });
}

// Анимация статистики
function initializeStatsAnimation() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateNumber(entry.target, 0, target, 2000);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element, start, end, duration) {
    let startTime = null;
    
    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}

// Копирование
window.copyToClipboard = function(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Скопировано!');
    });
};

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}
