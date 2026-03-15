// Данные пользователя
const userData = {
    name: 'Клёк Артём',
    level: 'Middle',
    location: 'Новосибирск',
    telegram: '@kusteeek',
    email: 'lol.kleka2000@mail.ru',
    github: 'kusteek',
    experience: 2,
    bugs: 200
};

// Навыки для отображения
const skillsData = [
    { name: 'Java', category: 'automation', level: 80, icon: 'fab fa-java' },
    { name: 'Selenium', category: 'automation', level: 85, icon: 'fas fa-robot' },
    { name: 'TestNG/JUnit', category: 'automation', level: 80, icon: 'fas fa-vial' },
    { name: 'Python', category: 'automation', level: 60, icon: 'fab fa-python' },
    { name: 'Postman', category: 'tools', level: 90, icon: 'fas fa-plug' },
    { name: 'REST API', category: 'manual', level: 85, icon: 'fas fa-network-wired' },
    { name: 'SQL', category: 'tools', level: 75, icon: 'fas fa-database' },
    { name: 'Git', category: 'tools', level: 80, icon: 'fab fa-git-alt' },
    { name: 'Jira', category: 'tools', level: 85, icon: 'fab fa-jira' },
    { name: 'Docker', category: 'tools', level: 60, icon: 'fab fa-docker' },
    { name: 'Jenkins', category: 'tools', level: 65, icon: 'fab fa-jenkins' },
    { name: 'Mobile Testing', category: 'manual', level: 70, icon: 'fas fa-mobile-alt' },
    { name: 'Test Design', category: 'manual', level: 85, icon: 'fas fa-pencil-ruler' },
    { name: 'DevTools', category: 'tools', level: 80, icon: 'fab fa-chrome' }
];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initializeTypedText();
    initializeSkills();
    initializeStats();
    initializeParticles();
    initializeNavbar();
    initializeContactForm();
    initializeCopyButtons();
    initializeTiltEffect();
});

// Печатающийся текст
function initializeTypedText() {
    const typedTextElement = document.querySelector('.typed-text');
    const cursor = document.querySelector('.cursor');
    const words = ['QA Automation', 'QA Engineer', 'Bug Hunter', 'Test Designer'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        
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
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, 100);
        }
    }

    type();
}

// Инициализация навыков
function initializeSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;

    function renderSkills(category = 'all') {
        const filteredSkills = category === 'all' 
            ? skillsData 
            : skillsData.filter(skill => skill.category === category);

        skillsGrid.innerHTML = filteredSkills.map(skill => `
            <div class="skill-item" data-category="${skill.category}">
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

    // Фильтрация навыков
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderSkills(btn.dataset.filter);
        });
    });
}

// Анимация статистики
function initializeStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    // Обновляем target значения
    if (statNumbers.length >= 3) {
        statNumbers[0].setAttribute('data-target', userData.experience);
        statNumbers[1].setAttribute('data-target', userData.bugs);
    }

    function animateNumbers() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current);
                }
            }, 20);
        });
    }

    // Запускаем анимацию когда секция появляется
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        observer.observe(heroStats);
    }
}

// Частицы фона
function initializeParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 5000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        vertices.push(x, y, z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({
        color: 0x6c5ce7,
        size: 0.5,
        transparent: true,
        opacity: 0.5
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 500;

    function animate() {
        requestAnimationFrame(animate);
        particles.rotation.x += 0.0001;
        particles.rotation.y += 0.0001;
        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Навигация
function initializeNavbar() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');

    // Прозрачность навбара при скролле
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }

        // Активная ссылка в меню
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

    // Мобильное меню
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Плавный скролл к якорям
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                // Закрываем мобильное меню
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });
}

// Контактная форма
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Здесь можно добавить отправку формы на сервер
        // Пока просто показываем уведомление
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            showNotification('Сообщение отправлено! Я свяжусь с вами в ближайшее время.', 'success');
            form.reset();
        } else {
            showNotification('Пожалуйста, заполните все поля', 'error');
        }
    });
}

// Кнопки копирования
function initializeCopyButtons() {
    const copyBtns = document.querySelectorAll('.copy-btn');
    
    copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const textToCopy = btn.dataset.copy;
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                showNotification('Скопировано в буфер обмена!', 'success');
                
                // Визуальный эффект
                btn.style.color = 'var(--accent-primary)';
                setTimeout(() => {
                    btn.style.color = '';
                }, 500);
            });
        });
    });
}

// Эффект наклона для карточек
function initializeTiltEffect() {
    const cards = document.querySelectorAll('[data-tilt]');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Уведомления
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? 'linear-gradient(135deg, #00b09b, #96c93d)' : 'linear-gradient(135deg, #ff6b6b, #ee5253)'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Добавляем стили для анимаций уведомлений
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .progress {
        transition: width 1s ease-in-out;
    }
`;
document.head.appendChild(style);
