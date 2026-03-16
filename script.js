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
