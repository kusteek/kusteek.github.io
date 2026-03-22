// ===== Particles Network =====
class ParticlesNetwork {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 70;
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
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                radius: Math.random() * 2 + 1
            });
        }
    }

    drawParticles() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        const color = document.body.classList.contains('light-theme') ? '#6c5ce7' : '#a29bfe';
        
        for (let p of this.particles) {
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = color;
            this.ctx.fill();

            for (let other of this.particles) {
                const dx = p.x - other.x;
                const dy = p.y - other.y;
                const dist = Math.hypot(dx, dy);
                if (dist < 100) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = color;
                    this.ctx.lineWidth = 0.2;
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(other.x, other.y);
                    this.ctx.stroke();
                }
            }

            if (this.isMouseInside && Math.hypot(p.x - this.mouseX, p.y - this.mouseY) < 100) {
                const angle = Math.atan2(p.y - this.mouseY, p.x - this.mouseX);
                const force = (100 - Math.hypot(p.x - this.mouseX, p.y - this.mouseY)) / 100;
                p.x += Math.cos(angle) * force * 1.5;
                p.y += Math.sin(angle) * force * 1.5;
            }
            
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;
        }
        requestAnimationFrame(() => this.drawParticles());
    }

    addEventListeners() {
        window.addEventListener('resize', () => this.resize());
        this.canvas.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            this.isMouseInside = true;
        });
        this.canvas.addEventListener('mouseleave', () => this.isMouseInside = false);
    }

    animate() {
        this.drawParticles();
    }
}

// ===== Typed Text Effect =====
class TypedText {
    constructor(selector, words) {
        this.el = document.querySelector(selector);
        if (!this.el) return;
        this.words = words;
        this.wordIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.type();
    }
    
    type() {
        const current = this.words[this.wordIndex];
        if (this.isDeleting) {
            this.charIndex--;
        } else {
            this.charIndex++;
        }
        this.el.textContent = current.substring(0, this.charIndex);
        
        if (!this.isDeleting && this.charIndex === current.length) {
            this.isDeleting = true;
            setTimeout(() => this.type(), 1500);
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.wordIndex = (this.wordIndex + 1) % this.words.length;
            setTimeout(() => this.type(), 300);
        } else {
            setTimeout(() => this.type(), this.isDeleting ? 50 : 100);
        }
    }
}

// ===== Skills Manager (убраны Python, Jenkins, Selenium, Docker, уровни 50-55%) =====
class SkillsManager {
    constructor() {
        this.skillsGrid = document.getElementById('skillsGrid');
        this.skillsData = [
            { name: "Java", icon: "fab fa-java", level: 55 },
            { name: "Postman", icon: "fas fa-flask", level: 52 },
            { name: "Jira", icon: "fab fa-jira", level: 50 },
            { name: "Git", icon: "fab fa-git-alt", level: 53 },
            { name: "SQL", icon: "fas fa-database", level: 50 },
            { name: "REST API", icon: "fas fa-code-branch", level: 54 },
            { name: "TestRail", icon: "fas fa-clipboard-list", level: 51 },
            { name: "Allure", icon: "fas fa-chart-line", level: 50 },
            { name: "Manual Testing", icon: "fas fa-check-double", level: 55 },
            { name: "Test Design", icon: "fas fa-pen-ruler", level: 52 }
        ];
        if (this.skillsGrid) this.renderSkills();
    }
    
    renderSkills() {
        this.skillsGrid.innerHTML = '';
        this.skillsData.forEach(skill => {
            const card = document.createElement('div');
            card.className = 'skill-card';
            card.innerHTML = `
                <i class="${skill.icon} skill-icon"></i>
                <h3 class="skill-name">${skill.name}</h3>
                <div class="skill-level">
                    <div class="skill-progress" style="width: ${skill.level}%"></div>
                </div>
            `;
            this.skillsGrid.appendChild(card);
        });
    }
}

// ===== Theme Manager =====
class ThemeManager {
    constructor() {
        this.btn = document.getElementById('themeToggle');
        this.load();
        if (this.btn) this.btn.addEventListener('click', () => this.toggle());
    }
    
    load() {
        const isLight = localStorage.getItem('theme') === 'light';
        if (isLight) document.body.classList.add('light-theme');
        else document.body.classList.remove('light-theme');
    }
    
    toggle() {
        document.body.classList.toggle('light-theme');
        localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
    }
}

// ===== Language Manager =====
class LanguageManager {
    constructor() {
        this.ru = document.querySelector('.lang-ru');
        this.en = document.querySelector('.lang-en');
        if (this.ru && this.en) {
            this.ru.addEventListener('click', () => this.setLang('ru'));
            this.en.addEventListener('click', () => this.setLang('en'));
        }
        this.setLang('ru');
    }
    
    setLang(lang) {
        const ruActive = lang === 'ru';
        this.ru.classList.toggle('active', ruActive);
        this.en.classList.toggle('active', !ruActive);
        
        const translations = {
            ru: {
                nav_home: 'Главная', nav_about: 'Обо мне', nav_skills: 'Навыки',
                nav_experience: 'Опыт', nav_projects: 'Проекты', nav_contact: 'Контакты',
                hello: 'Привет, я', description: 'Стремлюсь к постоянному развитию в сфере обеспечения качества и тестирования. Увлечен автоматизацией и поиском новых подходов к улучшению процессов.',
                contact_me: 'Связаться со мной', years: 'Года опыта', my_skills: 'Технологии',
                skills_title: 'Навыки', about_me_sub: 'Кто я', about_title: 'Обо мне',
                my_exp: 'Карьера', exp_title: 'Опыт работы', my_projects: 'Мои работы',
                projects_title: 'Проекты', get_in_touch: 'Свяжитесь со мной', contacts: 'Контакты'
            },
            en: {
                nav_home: 'Home', nav_about: 'About', nav_skills: 'Skills',
                nav_experience: 'Experience', nav_projects: 'Projects', nav_contact: 'Contact',
                hello: "Hi, I'm", description: 'Striving for continuous growth in quality assurance and testing. Passionate about automation and improving processes.',
                contact_me: 'Contact me', years: 'Years exp', my_skills: 'Technologies',
                skills_title: 'Skills', about_me_sub: 'Who am I', about_title: 'About me',
                my_exp: 'Career', exp_title: 'Work Experience', my_projects: 'My work',
                projects_title: 'Projects', get_in_touch: 'Get in touch', contacts: 'Contacts'
            }
        };
        
        const t = translations[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) el.textContent = t[key];
        });
    }
}

// ===== Mobile Navigation =====
class MobileNav {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.navLinks = document.querySelector('.nav-links');
        if (this.hamburger && this.navLinks) {
            this.hamburger.addEventListener('click', () => {
                this.navLinks.classList.toggle('active');
                const spans = this.hamburger.querySelectorAll('span');
                if (this.navLinks.classList.contains('active')) {
                    spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
                    spans[1].style.opacity = '0';
                    spans[2].style.transform = 'rotate(-45deg) translate(8px, -8px)';
                } else {
                    spans[0].style.transform = '';
                    spans[1].style.opacity = '';
                    spans[2].style.transform = '';
                }
            });
            
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    this.navLinks.classList.remove('active');
                    const spans = this.hamburger.querySelectorAll('span');
                    spans[0].style.transform = '';
                    spans[1].style.opacity = '';
                    spans[2].style.transform = '';
                });
            });
        }
    }
}

// ===== Copy to Clipboard =====
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    const notification = document.createElement('div');
    notification.textContent = 'Email скопирован!';
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
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
}

// ===== Initialize Everything =====
document.addEventListener('DOMContentLoaded', () => {
    new ParticlesNetwork('particles-canvas');
    new TypedText('.typed-text', ['Engineer', 'Automation', 'Manual', 'Specialist']);
    new ThemeManager();
    new LanguageManager();
    new SkillsManager();
    new MobileNav();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
