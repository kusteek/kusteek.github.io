// Данные для навыков
const skillsData = [
    { name: 'Автоматизация (Selenium)', category: 'automation', level: 85, icon: 'fas fa-robot' },
    { name: 'Java', category: 'automation', level: 80, icon: 'fab fa-java' },
    { name: 'JUnit/TestNG', category: 'automation', level: 85, icon: 'fas fa-vial' },
    { name: 'Ручное тестирование', category: 'manual', level: 95, icon: 'fas fa-clipboard-list' },
    { name: 'Тест-дизайн', category: 'manual', level: 90, icon: 'fas fa-pencil-ruler' },
    { name: 'API тестирование', category: 'manual', level: 85, icon: 'fas fa-plug' },
    { name: 'Мобильное тестирование', category: 'manual', level: 75, icon: 'fas fa-mobile-alt' },
    { name: 'Jira', category: 'tools', level: 90, icon: 'fab fa-jira' },
    { name: 'TestRail', category: 'tools', level: 85, icon: 'fas fa-tasks' },
    { name: 'Postman', category: 'tools', level: 85, icon: 'fas fa-plug' },
    { name: 'Git', category: 'tools', level: 80, icon: 'fab fa-git-alt' },
    { name: 'Docker', category: 'tools', level: 70, icon: 'fab fa-docker' },
    { name: 'SQL', category: 'tools', level: 75, icon: 'fas fa-database' }
];

let currentLanguage = 'ru';

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
    
    // Проверяем сохраненную тему
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        document.querySelector('#themeToggle i').className = 'fas fa-sun';
    }
});

// Частицы
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
    
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedX: Math.random() * 0.2 - 0.1,
            speedY: Math.random() * 0.2 - 0.1,
            color: `rgba(108, 92, 231, ${Math.random() * 0.3})`
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            
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
    const words = ['Инженер', 'Тестировщик', 'Автоматизатор'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        
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
            wordIndex = (wordIndex + 1) % words.length;
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
        
        skillsGrid.innerHTML = filtered.map(skill => `
            <div class="skill-item">
                <div class="skill-name">
                    <i class="${skill.icon}"></i>
                    <span>${skill.name}</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-progress" style="width: ${skill.level}%"></div>
                </div>
            </div>
        `).join('');
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

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Активная ссылка при скролле
    window.addEventListener('scroll', () => {
        let current = '';
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
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
    
    toggle.addEventListener('click', () => {
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
    const toggle = document.getElementById('languageToggle');
    const ru = toggle.querySelector('.lang-ru');
    const en = toggle.querySelector('.lang-en');
    
    toggle.addEventListener('click', () => {
        if (currentLanguage === 'ru') {
            currentLanguage = 'en';
            ru.classList.remove('active');
            en.classList.add('active');
            // Здесь можно добавить логику перевода
        } else {
            currentLanguage = 'ru';
            en.classList.remove('active');
            ru.classList.add('active');
        }
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
    });

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

// Копирование в буфер
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
    
    setTimeout(() => notification.remove(), 3000);
}
