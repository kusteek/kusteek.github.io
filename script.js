// Данные пользователя
const userData = {
    name: 'Клёк Артём',
    location: 'Новосибирск',
    telegram: '@kusteeek',
    email: 'lol.kleka2000@mail.ru',
    experience: 2,
    bugs: 200,
    projects: 5
};

// Навыки для отображения (без Python и Jenkins)
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
        nav_contact: 'Контакты',
        available: '🔥 Доступен для работы',
        hello: 'Привет, я',
        description: 'Стремлюсь к постоянному развитию в сфере обеспечения качества и тестирования. Увлечен автоматизацией и поиском новых подходов к улучшению процессов.',
        contact_me: 'Связаться со мной',
        years: 'года опыта',
        bugs: 'найдено багов',
        projects: 'проектов',
        bug_hunter: 'Bug Hunter',
        auto_qa: 'Auto QA',
        quality: 'Quality',
        who_i_am: 'Кто я',
        about_me: 'Обо мне',
        about_highlight: 'QA-инженер, стремящийся к совершенству в обеспечении качества',
        about_text: 'За 2 года работы в IT участвовал в тестировании различных проектов. Постоянно учусь новому, слежу за трендами в тестировании и применяю современные подходы в работе. Стремлюсь развиваться в автоматизации и внедрении лучших практик качества.',
        location: 'Локация',
        languages: 'Языки',
        russian: 'Русский',
        english: 'English',
        interests: 'Интересы',
        what_i_can: 'Что я умею',
        skills: 'Навыки',
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
        get_in_touch: 'Свяжитесь со мной',
        contacts: 'Контакты',
        cta_title: 'Открыт к предложениям!',
        cta_text: 'Готов применять свои навыки и развиваться в новой команде',
        cta_button: 'Написать мне',
        qa_engineer_footer: 'QA Инженер',
        online: 'online'
    },
    en: {
        nav_home: 'Home',
        nav_about: 'About',
        nav_skills: 'Skills',
        nav_experience: 'Experience',
        nav_contact: 'Contact',
        available: '🔥 Available for work',
        hello: "Hi, I'm",
        description: 'I strive for continuous development in quality assurance and testing. Passionate about automation and finding new approaches to improve processes.',
        contact_me: 'Contact me',
        years: 'years exp',
        bugs: 'bugs found',
        projects: 'projects',
        bug_hunter: 'Bug Hunter',
        auto_qa: 'Auto QA',
        quality: 'Quality',
        who_i_am: 'Who I am',
        about_me: 'About me',
        about_highlight: 'QA Engineer striving for excellence in quality assurance',
        about_text: 'In 2 years in IT, I participated in testing various projects. Constantly learning new things, following trends in testing and applying modern approaches in work. Striving to develop in automation and implementation of best quality practices.',
        location: 'Location',
        languages: 'Languages',
        russian: 'Russian',
        english: 'English',
        interests: 'Interests',
        what_i_can: 'What I can do',
        skills: 'Skills',
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
        get_in_touch: 'Get in touch',
        contacts: 'Contacts',
        cta_title: 'Open to offers!',
        cta_text: 'Ready to apply my skills and grow in a new team',
        cta_button: 'Write to me',
        qa_engineer_footer: 'QA Engineer',
        online: 'online'
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
    initializeStatsCounter();
    initializeScrollAnimations();
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

// Остальные функции (частицы, typed text, навыки, тема, язык, навигация, уведомления) 
// остаются такими же как в предыдущей версии, но с обновленными данными
