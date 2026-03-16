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

let mouseX = 0;
let mouseY = 0;
let particles = [];
let animationFrame;

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
    initializeTypedText();
    initializeSkills();
    initializeNavbar();
    initializeThemeToggle();
    initializeLanguageToggle();
    initializeStatsAnimation();
    
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
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Создаем частицы
    for (let i = 0; i < 60; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            color: `rgba(108, 92, 231, ${Math.random() * 0.3 + 0.2})`
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            
            // Взаимодействие с мышью
            const dx = mouseX - p.x;
            const dy = mouseY - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const angle = Math.atan2(dy, dx);
                const force = (100 - distance) / 100;
                p.x -= Math.cos(angle) * force * 2;
                p.y -= Math.sin(angle) * force * 2;
            }
            
            // Границы
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });
        
        animationFrame = requestAnimationFrame(animate);
    }
    
    animate();
}

// Печатающийся текст
function initializeTypedText() {
    const typedText = document.getElementById('typedText');
    if (!typedText) return;
    
    const words = ['Инженер', 'Тестировщик', 'Автоматизатор', 'Специалист'];
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
        
        // Плавное исчезновение
        skillsGrid.style.opacity = '0';
        
        setTimeout(() => {
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
            
            skillsGrid.style.opacity = '1';
        }, 300);
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
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navLinks');
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
    const overlay = document.getElementById('themeOverlay');
    
    toggle.addEventListener('click', (e) => {
        const rect = toggle.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        overlay.style.setProperty('--x', x + 'px');
        overlay.style.setProperty('--y', y + 'px');
        overlay.classList.add('active');
        
        setTimeout(() => {
            document.body.classList.toggle('light-theme');
            
            if (document.body.classList.contains('light-theme')) {
                icon.className = 'fas fa-sun';
                localStorage.setItem('theme', 'light');
            } else {
                icon.className = 'fas fa-moon';
                localStorage.setItem('theme', 'dark');
            }
            
            setTimeout(() => {
                overlay.classList.remove('active');
            }, 500);
        }, 150);
    });
}

// Переключение языка (упрощенная версия)
function initializeLanguageToggle() {
    const toggle = document.getElementById('languageToggle');
    const ru = toggle.querySelector('.lang-ru');
    const en = toggle.querySelector('.lang-en');
    
    toggle.addEventListener('click', () => {
        if (ru.classList.contains('active')) {
            ru.classList.remove('active');
            en.classList.add('active');
            // Здесь можно добавить логику перевода
        } else {
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
        notification.remove();
    }, 2000);
}
