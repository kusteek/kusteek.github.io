// Данные пользователя
const userData = {
    name: 'Клёк Артём',
    location: 'Новосибирск',
    telegram: '@kusteeek',
    email: 'lol.kleka2000@mail.ru',
    github: 'kusteek',
    experience: 2,
    bugs: 247,
    projects: 12,
    certificates: 3,
    streak: 365
};

// Навыки для отображения
const skillsData = [
    { name: { ru: 'Автоматизация (Selenium)', en: 'Automation (Selenium)' }, category: 'automation', level: 85, icon: 'fas fa-robot' },
    { name: { ru: 'Java', en: 'Java' }, category: 'automation', level: 80, icon: 'fab fa-java' },
    { name: { ru: 'Python', en: 'Python' }, category: 'automation', level: 70, icon: 'fab fa-python' },
    { name: { ru: 'JUnit/TestNG', en: 'JUnit/TestNG' }, category: 'automation', level: 85, icon: 'fas fa-vial' },
    { name: { ru: 'Ручное тестирование', en: 'Manual Testing' }, category: 'manual', level: 95, icon: 'fas fa-clipboard-list' },
    { name: { ru: 'Тест-дизайн', en: 'Test Design' }, category: 'manual', level: 90, icon: 'fas fa-pencil-ruler' },
    { name: { ru: 'API тестирование', en: 'API Testing' }, category: 'manual', level: 85, icon: 'fas fa-plug' },
    { name: { ru: 'Мобильное тестирование', en: 'Mobile Testing' }, category: 'manual', level: 75, icon: 'fas fa-mobile-alt' },
    { name: { ru: 'Jira', en: 'Jira' }, category: 'tools', level: 90, icon: 'fab fa-jira' },
    { name: { ru: 'Postman', en: 'Postman' }, category: 'tools', level: 85, icon: 'fas fa-plug' },
    { name: { ru: 'Git', en: 'Git' }, category: 'tools', level: 80, icon: 'fab fa-git-alt' },
    { name: { ru: 'Docker', en: 'Docker' }, category: 'tools', level: 70, icon: 'fab fa-docker' },
    { name: { ru: 'Jenkins', en: 'Jenkins' }, category: 'tools', level: 65, icon: 'fab fa-jenkins' },
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
        description: 'Превращаю сложные баги в идеальный пользовательский опыт. Специализируюсь на автоматизации и обеспечении качества.',
        contact_me: 'Связаться со мной',
        years: 'года опыта',
        bugs: 'найдено багов',
        projects: 'проектов',
        certificates: 'сертификата',
        bug_hunter: 'Bug Hunter',
        auto_qa: 'Auto QA',
        quality: 'Quality',
        who_i_am: 'Кто я',
        about_me: 'Обо мне',
        about_highlight: 'QA-инженер с фокусом на автоматизацию и обеспечение качества',
        about_text: 'За 2 года работы в IT помог 5+ проектам выйти на новый уровень качества. Специализируюсь на автоматизации тестирования, внедрении CI/CD и оптимизации процессов тестирования. Имею сертификаты ISTQB и AWS.',
        feature_1: 'Опыт работы с банковскими системами',
        feature_2: 'Участие в ПСИ с заказчиками',
        feature_3: 'Наставничество для джунов',
        feature_4: 'Open Source контрибьютор',
        location: 'Локация',
        languages: 'Языки',
        russian: 'Русский',
        english: 'English',
        coding: 'Кодинг',
        what_i_can: 'Что я умею',
        skills: 'Навыки',
        career_path: 'Карьерный путь',
        experience: 'Опыт работы',
        vtb_1: 'Нашел 150+ критических багов до продакшена',
        vtb_2: 'Ускорил регрессионное тестирование на 40%',
        vtb_3: 'Обучил 2х джуниор QA',
        vtb_4: 'Внедрил метрики качества',
        neoflex_1: 'Написал 200+ тест-кейсов',
        neoflex_2: 'Автоматизировал 50+ smoke тестов',
        neoflex_3: 'Участвовал в 3 релизах',
        my_certs: 'Мои сертификаты',
        certificates_title: 'Сертификаты',
        get_in_touch: 'Свяжитесь со мной',
        contacts: 'Контакты',
        cta_title: 'Готов к новым вызовам!',
        cta_text: 'Ищу команду, где смогу применить свои навыки и вырасти до Senior QA',
        cta_button: 'Пригласить на собеседование',
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
        description: 'Turning complex bugs into perfect user experience. Specializing in automation and quality assurance.',
        contact_me: 'Contact me',
        years: 'years exp',
        bugs: 'bugs found',
        projects: 'projects',
        certificates: 'certificates',
        bug_hunter: 'Bug Hunter',
        auto_qa: 'Auto QA',
        quality: 'Quality',
        who_i_am: 'Who I am',
        about_me: 'About me',
        about_highlight: 'QA Engineer focused on automation and quality assurance',
        about_text: 'In 2 years in IT, helped 5+ projects improve their quality. Specializing in test automation, CI/CD implementation and testing process optimization. Certified ISTQB and AWS.',
        feature_1: 'Experience with banking systems',
        feature_2: 'UAT participation with clients',
        feature_3: 'Mentoring juniors',
        feature_4: 'Open Source contributor',
        location: 'Location',
        languages: 'Languages',
        russian: 'Russian',
        english: 'English',
        coding: 'Coding',
        what_i_can: 'What I can do',
        skills: 'Skills',
        career_path: 'Career path',
        experience: 'Experience',
        vtb_1: 'Found 150+ critical bugs before production',
        vtb_2: 'Sped up regression testing by 40%',
        vtb_3: 'Trained 2 junior QAs',
        vtb_4: 'Implemented quality metrics',
        neoflex_1: 'Wrote 200+ test cases',
        neoflex_2: 'Automated 50+ smoke tests',
        neoflex_3: 'Participated in 3 releases',
        my_certs: 'My certificates',
        certificates_title: 'Certificates',
        get_in_touch: 'Get in touch',
        contacts: 'Contacts',
        cta_title: 'Ready for new challenges!',
        cta_text: 'Looking for a team where I can apply my skills and grow to Senior QA',
        cta_button: 'Invite for interview',
        qa_engineer_footer: 'QA Engineer',
        online: 'online'
    }
};

let currentLanguage = 'ru';
let typedInterval;

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
    initializeTypedText();
    initializeSkills();
    initializeNavbar();
    initializeThemeToggle();
    initializeLanguageToggle();
    initializeStatsCounter();
    initializeResumeModal();
    initializeLiveData();
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

// Частицы на canvas
function initializeParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;
    
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
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.baseColor = `rgba(108, 92, 231, ${Math.random() * 0.3 + 0.1})`;
            this.color = this.baseColor;
        }
        
        update() {
            // Движение
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Отталкивание от мыши
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const angle = Math.atan2(dy, dx);
                const force = (100 - distance) / 100;
                this.x -= Math.cos(angle) * force * 2;
                this.y -= Math.sin(angle) * force * 2;
                this.color = `rgba(255, 100, 100, ${Math.random() * 0.5 + 0.3})`;
            } else {
                this.color = this.baseColor;
            }
            
            // Границы
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
            
            // Соединяем близкие частицы
            particles.forEach(particle => {
                const dx = this.x - particle.x;
                const dy = this.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(108, 92, 231, ${0.1 * (1 - distance/100)})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(particle.x, particle.y);
                    ctx.stroke();
                }
            });
        }
    }
    
    function init() {
        particles = [];
        for (let i = 0; i < 100; i++) {
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

    function renderSkills(category = 'all') {
        const filteredSkills = category === 'all' 
            ? skillsData 
            : skillsData.filter(skill => skill.category === category);

        skillsGrid.innerHTML = filteredSkills.map(skill => {
            const name = skill.name[currentLanguage] || skill.name.ru;
            return `
                <div class="skill-item" data-category="${skill.category}">
                    <div class="skill-name">
                        <i class="${skill.icon}"></i>
                        <span>${name}</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: 0%"></div>
                    </div>
                </div>
            `;
        }).join('');

        // Анимируем заполнение
        setTimeout(() => {
            document.querySelectorAll('.skill-item').forEach((item, index) => {
                const progress = item.querySelector('.skill-progress');
                const level = filteredSkills[index].level;
                setTimeout(() => {
                    progress.style.width = level + '%';
                }, index * 100);
            });
        }, 100);
    }

    renderSkills();

    // Фильтрация
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderSkills(btn.dataset.filter);
        });
    });
}

// Анимация счетчиков
function initializeStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateNumber(entry.target, 0, target, 2000);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

function animateNumber(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Навигация
function initializeNavbar() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');

    if (!hamburger || !navMenu) return;

    window.addEventListener('scroll', () => {
        // Эффект для навбара
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Активная ссылка
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
        floatingCards[1].textContent = translations[currentLanguage].auto_qa;
        floatingCards[2].textContent = translations[currentLanguage].quality;
    }
}

// Модальное окно для резюме
function initializeResumeModal() {
    const modal = document.getElementById('resumeModal');
    const downloadBtn = document.getElementById('downloadResume');
    const closeBtn = document.querySelector('.close-modal');
    
    if (!modal || !downloadBtn) return;
    
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
    });
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // Кнопки скачивания (заглушки)
    document.getElementById('downloadPDF')?.addEventListener('click', (e) => {
        e.preventDefault();
        showNotification(currentLanguage === 'ru' ? 'PDF готовится...' : 'PDF is preparing...');
    });
    
    document.getElementById('downloadDOCX')?.addEventListener('click', (e) => {
        e.preventDefault();
        showNotification(currentLanguage === 'ru' ? 'DOCX готовится...' : 'DOCX is preparing...');
    });
    
    document.getElementById('viewOnline')?.addEventListener('click', (e) => {
        e.preventDefault();
        showNotification(currentLanguage === 'ru' ? 'Открываю онлайн версию...' : 'Opening online version...');
    });
}

// Живые данные
function initializeLiveData() {
    const lastCommit = document.getElementById('lastCommit');
    const viewers = document.getElementById('viewers');
    
    if (lastCommit) {
        const updateLastCommit = () => {
            const hours = Math.floor(Math.random() * 5) + 1;
            lastCommit.textContent = hours + (currentLanguage === 'ru' ? ' часа назад' : ' hours ago');
        };
        setInterval(updateLastCommit, 30000);
    }
    
    if (viewers) {
        const updateViewers = () => {
            const count = Math.floor(Math.random() * 5) + 2;
            viewers.textContent = count;
        };
        setInterval(updateViewers, 10000);
    }
}

// Анимации при скролле
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .slide-in-left, .slide-in-right, .scale-in, .rotate-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
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
