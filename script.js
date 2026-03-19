class ParticlesNetwork {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 80;
        this.mouseX = 0;
        this.mouseY = 0;
        this.isMouseInside = false;

        this.init();
        this.animate();
        this.addEventListeners();
    }

    init() {
        this.resize();
        this.createParticles();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1
            });
        }
    }

    drawParticles() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = document.body.classList.contains('light-theme') ? '#6c5ce7' : '#a29bfe';
        
        for (let particle of this.particles) {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = document.body.classList.contains('light-theme') ? '#6c5ce7' : '#a29bfe';
            this.ctx.fill();

            for (let other of this.particles) {
                const dx = particle.x - other.x;
                const dy = particle.y - other.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = document.body.classList.contains('light-theme') ? '#6c5ce7' : '#a29bfe';
                    this.ctx.lineWidth = 0.2;
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(other.x, other.y);
                    this.ctx.stroke();
                }
            }

            if (this.isMouseInside) {
                const dx = particle.x - this.mouseX;
                const dy = particle.y - this.mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    const angle = Math.atan2(dy, dx);
                    const force = (100 - distance) / 100;
                    particle.x += Math.cos(angle) * force * 2;
                    particle.y += Math.sin(angle) * force * 2;
                }
            }
        }
    }

    updateParticles() {
        for (let particle of this.particles) {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
        }
    }

    animate() {
        this.updateParticles();
        this.drawParticles();
        requestAnimationFrame(() => this.animate());
    }

    addEventListeners() {
        window.addEventListener('resize', () => this.resize());

        this.canvas.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            this.isMouseInside = true;
        });

        this.canvas.addEventListener('mouseleave', () => {
            this.isMouseInside = false;
        });
    }
}

class TypedText {
    constructor(elementClass, words) {
        this.element = document.querySelector(elementClass);
        if (!this.element) return;
        
        this.words = words;
        this.currentWordIndex = 0;
        this.currentText = '';
        this.isDeleting = false;
        this.typeSpeed = 100;

        this.type();
    }

    type() {
        const currentWord = this.words[this.currentWordIndex];
        
        if (this.isDeleting) {
            this.currentText = currentWord.substring(0, this.currentText.length - 1);
        } else {
            this.currentText = currentWord.substring(0, this.currentText.length + 1);
        }

        this.element.textContent = this.currentText;

        if (!this.isDeleting && this.currentText === currentWord) {
            this.isDeleting = true;
            setTimeout(() => this.type(), 2000);
        } else if (this.isDeleting && this.currentText === '') {
            this.isDeleting = false;
            this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
            setTimeout(() => this.type(), 500);
        } else {
            setTimeout(() => this.type(), this.typeSpeed);
        }
    }
}

class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.themeOverlay = document.querySelector('.theme-overlay');
        this.body = document.body;
        
        this.init();
    }

    init() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            this.body.classList.add('light-theme');
            this.updateIcon('sun');
        }

        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        this.themeOverlay.classList.add('active');
        
        setTimeout(() => {
            this.body.classList.toggle('light-theme');
            
            if (this.body.classList.contains('light-theme')) {
                localStorage.setItem('theme', 'light');
                this.updateIcon('sun');
            } else {
                localStorage.setItem('theme', 'dark');
                this.updateIcon('moon');
            }
            
            setTimeout(() => {
                this.themeOverlay.classList.remove('active');
            }, 400);
        }, 300);
    }

    updateIcon(icon) {
        const iconElement = this.themeToggle.querySelector('i');
        iconElement.className = icon === 'sun' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

class LanguageManager {
    constructor() {
        this.langToggle = document.getElementById('languageToggle');
        this.langRu = document.querySelector('.lang-ru');
        this.langEn = document.querySelector('.lang-en');
        this.currentLang = localStorage.getItem('language') || 'ru';
        
        this.translations = {
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
                bugs: 'багов',
                projects: 'проектов',
                bug_hunter: 'Bug Hunter',
                auto_qa: 'Auto QA',
                quality: 'Quality',
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
                projects_title: 'Проекты',
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
                description: 'I strive for continuous development in the field of quality assurance and testing. Passionate about automation and finding new approaches to improve processes.',
                contact_me: 'Contact me',
                years: 'Years exp.',
                bugs: 'bugs',
                projects: 'projects',
                bug_hunter: 'Bug Hunter',
                auto_qa: 'Auto QA',
                quality: 'Quality',
                about_highlight: 'QA Engineer striving for excellence in quality assurance',
                about_text: 'For 2 years in IT, I have participated in testing various projects. I constantly learn new things, follow testing trends and apply modern approaches in my work.',
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
                what_i_can: 'What I do',
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
                vtb_4: 'Working with test data and test environment',
                vtb_5: 'Reporting and test results analysis',
                vtb_6: 'Integration into development processes',
                vtb_7: 'Functionality demonstration to the customer (UAT)',
                neoflex_1: 'Test design and planning',
                neoflex_2: 'Comprehensive testing',
                neoflex_3: 'Defect management and quality tracking',
                neoflex_4: 'Working with test data',
                neoflex_5: 'Reporting and analysis of results',
                my_projects: 'My work',
                projects_title: 'Projects',
                project_title: 'Automated testing of Tutu.ru',
                project_desc: 'Development of a framework for automating testing of the Tutu.ru web application. Includes UI and API tests with report generation.',
                open_github: 'Open on GitHub →',
                cta_title: "I'm open to offers!",
                cta_text: 'Ready to apply my skills and develop in a new team',
                cta_button: 'Write to me',
                get_in_touch: 'Get in touch',
                contacts: 'Contacts',
                qa_engineer: 'QA Engineer',
                made_with: 'Made with ❤️ in Novosibirsk'
            }
        };
        
        this.init();
    }

    init() {
        this.setLanguage(this.currentLang);
        
        this.langRu.addEventListener('click', () => this.setLanguage('ru'));
        this.langEn.addEventListener('click', () => this.setLanguage('en'));
    }

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        
        this.langRu.classList.toggle('active', lang === 'ru');
        this.langEn.classList.toggle('active', lang === 'en');
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (this.translations[lang][key]) {
                if (element.children.length > 0) {
                    const span = element.querySelector('span');
                    if (span) {
                        span.textContent = this.translations[lang][key];
                    }
                } else {
                    element.textContent = this.translations[lang][key];
                }
            }
        });

        const projectsTitle = document.querySelector('#projects .section-title');
        if (projectsTitle && this.translations[lang].projects_title) {
            projectsTitle.textContent = this.translations[lang].projects_title;
        }
    }
}

class SkillsManager {
    constructor() {
        this.skillsGrid = document.getElementById('skillsGrid');
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.skills = [
            { name: 'Java', icon: 'fab fa-java', level: 85, category: 'automation' },
            { name: 'Python', icon: 'fab fa-python', level: 70, category: 'automation' },
            { name: 'Selenium', icon: 'fas fa-robot', level: 85, category: 'automation' },
            { name: 'JUnit', icon: 'fas fa-flask', level: 80, category: 'automation' },
            { name: 'TestNG', icon: 'fas fa-vial', level: 75, category: 'automation' },
            { name: 'REST Assured', icon: 'fas fa-cloud', level: 80, category: 'automation' },
            { name: 'Manual Testing', icon: 'fas fa-clipboard-list', level: 95, category: 'manual' },
            { name: 'Test Design', icon: 'fas fa-pencil-ruler', level: 90, category: 'manual' },
            { name: 'Bug Tracking', icon: 'fas fa-bug', level: 95, category: 'manual' },
            { name: 'Postman', icon: 'fas fa-paper-plane', level: 90, category: 'tools' },
            { name: 'Jira', icon: 'fab fa-jira', level: 95, category: 'tools' },
            { name: 'Git', icon: 'fab fa-git-alt', level: 85, category: 'tools' },
            { name: 'SQL', icon: 'fas fa-database', level: 80, category: 'tools' },
            { name: 'Docker', icon: 'fab fa-docker', level: 70, category: 'tools' },
            { name: 'Jenkins', icon: 'fab fa-jenkins', level: 65, category: 'tools' }
        ];
        
        this.init();
    }

    init() {
        this.renderSkills('all');
        this.addFilterListeners();
    }

    renderSkills(category) {
        this.skillsGrid.classList.add('fade-out');
        
        setTimeout(() => {
            const filteredSkills = category === 'all' 
                ? this.skills 
                : this.skills.filter(skill => skill.category === category);
            
            this.skillsGrid.innerHTML = '';
            
            filteredSkills.forEach((skill, index) => {
                const card = document.createElement('div');
                card.className = 'skill-card';
                card.setAttribute('data-category', skill.category);
                card.style.animationDelay = `${index * 0.05}s`;
                
                card.innerHTML = `
                    <i class="${skill.icon} skill-icon"></i>
                    <h3 class="skill-name">${skill.name}</h3>
                    <div class="skill-level">
                        <div class="skill-progress" style="width: ${skill.level}%"></div>
                    </div>
                `;
                
                this.skillsGrid.appendChild(card);
            });
            
            setTimeout(() => {
                this.skillsGrid.classList.remove('fade-out');
            }, 50);
        }, 400);
    }

    addFilterListeners() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const category = btn.getAttribute('data-filter');
                this.renderSkills(category);
            });
        });
    }
}

// ===== Copy to Clipboard =====
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const notification = document.createElement('div');
        notification.textContent = 'Email скопирован! / Email copied!';
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--accent-color);
            color: white;
            padding: 10px 20px;
            border-radius: 30px;
            z-index: 10000;
            font-weight: 500;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            animation: slideUp 0.3s ease;
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    });
}

// ===== Mobile Navigation =====
class MobileNav {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.navLinks = document.querySelector('.nav-links');
        this.navLinksItems = document.querySelectorAll('.nav-link');
        
        this.init();
    }

    init() {
        if (!this.hamburger || !this.navLinks) return;
        
        this.hamburger.addEventListener('click', () => {
            this.hamburger.classList.toggle('active');
            this.navLinks.classList.toggle('active');
            
            const spans = this.hamburger.querySelectorAll('span');
            if (this.hamburger.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(8px, -8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        this.navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                this.hamburger.classList.remove('active');
                this.navLinks.classList.remove('active');
                
                const spans = this.hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
}

// ===== Initialize Everything =====
document.addEventListener('DOMContentLoaded', () => {
    new ParticlesNetwork('particles-canvas');
    new TypedText('.typed-text', ['Engineer', 'Automation', 'Manual', 'Specialist']);
    new ThemeManager();
    new LanguageManager();
    new SkillsManager();
    new MobileNav();
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// Add slideUp animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            transform: translate(-50%, 20px);
            opacity: 0;
        }
        to {
            transform: translate(-50%, 0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
