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
let mouseX = 0;
let mouseY = 0;

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
    initializeScrollAnimations();
    
    // Проверяем сохраненную тему
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        document.querySelector('#themeToggle i').className = 'fas fa-sun';
    }
});

// Частицы с взаимодействием с курсором
function initializeParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    // Отслеживание движения мыши
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
    
    // Создание частиц
    for (let i = 0; i < 80; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: Math.random() * 0.5 - 0.25,
            speedY: Math.random() * 0.5 - 0.25,
            baseColor: `rgba(108, 92, 231, ${Math.random() * 0.3 + 0.1})`,
            color: `rgba(108, 92, 231, ${Math.random() * 0.3 + 0.1})`
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            // Движение
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
                p.color = `rgba(255, 100, 100, ${Math.random() * 0.5 + 0.3})`;
            } else {
                p.color = p.baseColor;
            }
            
            // Границы
            if (p.x > canvas.width) p.x = 0;
            if (p.x < 0) p.x = canvas.width;
            if (p.y > canvas.height) p.y = 0;
            if (p.y < 0) p.y = canvas.height;
            
            // Отрисовка
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Соединяем близкие частицы
            particles.forEach(p2 => {
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(108, 92, 231, ${0.1 * (1 - distance/100)})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Печатающийся текст
function initializeTypedText() {
    const typedText = document.querySelector('.typed-text');
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

// Навыки с плавными анимациями
function initializeSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;

    function renderSkills(category = 'all') {
        const filtered = category === 'all' ? skillsData : skillsData.filter(s => s.category === category);
        
        // Анимация исчезновения
        skillsGrid.style.opacity = '0';
        skillsGrid.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            skillsGrid.innerHTML = filtered.map(skill => `
                <div class="skill-item" style="animation-delay: ${Math.random() * 0.3}s">
                    <div class="skill-name">
                        <i class="${skill.icon}"></i>
                        <span>${skill.name}</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: 0%"></div>
                    </div>
                </div>
            `).join('');
            
            // Анимация появления
            skillsGrid.style.opacity = '1';
            skillsGrid.style.transform = 'translateY(0)';
            
            // Заполнение прогресс-баров
            setTimeout(() => {
                document.querySelectorAll('.skill-item').forEach((item, index) => {
                    const progress = item.querySelector('.skill-progress');
                    const level = filtered[index].level;
                    setTimeout(() => {
                        progress.style.width = level + '%';
                    }, index * 50);
                });
            }, 300);
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
    
    toggle.addEventListener('click', () => {
        toggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            toggle.style.transform = 'scale(1)';
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
    const toggle = document.getElementById('languageToggle');
    const ru = toggle.querySelector('.lang-ru');
    const en = toggle.querySelector('.lang-en');
    
    toggle.addEventListener('click', () => {
        toggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            toggle.style.transform = 'scale(1)';
        }, 200);
        
        if (currentLanguage === 'ru') {
            currentLanguage = 'en';
            ru.classList.remove('active');
            en.classList.add('active');
            // Здесь можно добавить логику перевода текста
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
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Анимации при скролле
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.skill-item, .info-card, .project-card, .contact-card, .timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}
