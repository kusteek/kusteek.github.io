// script.js

document.addEventListener('DOMContentLoaded', function() {
    // ===== Инициализация =====
    initTheme();
    initParticles();
    initTyped();
    initSkills();
    initMobileMenu();
    initSmoothScroll();
    initCopyButtons();

    // ===== ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ (с медленной анимацией) =====
    function initTheme() {
        const themeToggle = document.getElementById('themeToggle');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Загружаем сохраненную тему или используем системные настройки
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
            updateThemeIcon('light');
        } else if (savedTheme === 'dark') {
            document.body.classList.remove('light-theme');
            updateThemeIcon('dark');
        } else {
            // Используем системные настройки
            if (!prefersDarkScheme.matches) {
                document.body.classList.add('light-theme');
                updateThemeIcon('light');
            } else {
                updateThemeIcon('dark');
            }
        }

        // Обработчик клика по кнопке темы
        if (themeToggle) {
            themeToggle.addEventListener('click', function() {
                // Используем requestAnimationFrame для плавности
                requestAnimationFrame(() => {
                    document.body.classList.toggle('light-theme');
                    
                    if (document.body.classList.contains('light-theme')) {
                        localStorage.setItem('theme', 'light');
                        updateThemeIcon('light');
                    } else {
                        localStorage.setItem('theme', 'dark');
                        updateThemeIcon('dark');
                    }
                    
                    // Обновляем частицы при смене темы
                    if (window.particles) {
                        updateParticlesColor();
                    }
                });
            });
        }
    }

    function updateThemeIcon(theme) {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
    }

    // ===== ЧАСТИЦЫ =====
    function initParticles() {
        const canvas = document.getElementById('particles-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationFrame;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function createParticles() {
            particles = [];
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2 + 1,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    opacity: Math.random() * 0.5 + 0.2
                });
            }
        }

        function updateParticlesColor() {
            // Функция будет вызвана при смене темы
            // Перерисовываем с новыми цветами
        }

        function drawParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const isLightTheme = document.body.classList.contains('light-theme');
            const particleColor = isLightTheme ? '#6c5ce7' : '#a463f5';
            
            particles.forEach(particle => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particleColor;
                ctx.globalAlpha = particle.opacity;
                ctx.fill();
                
                // Двигаем частицы
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                
                // Возвращаем в край если ушли за границы
                if (particle.x < 0 || particle.x > canvas.width) {
                    particle.speedX *= -1;
                }
                if (particle.y < 0 || particle.y > canvas.height) {
                    particle.speedY *= -1;
                }
            });
            
            animationFrame = requestAnimationFrame(drawParticles);
        }

        window.addEventListener('resize', () => {
            resizeCanvas();
            createParticles();
        });

        resizeCanvas();
        createParticles();
        drawParticles();

        // Сохраняем ссылку на функции для обновления
        window.particles = {
            updateColor: updateParticlesColor
        };
    }

    // ===== TYPED TEXT =====
    function initTyped() {
        const typedElement = document.querySelector('.typed-text');
        if (!typedElement) return;

        const words = ['Engineer', 'Automation', 'Manual', 'Tester'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typedElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 1500);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 200);
            } else {
                setTimeout(type, isDeleting ? 50 : 100);
            }
        }

        type();
    }

    // ===== НАВЫКИ =====
    function initSkills() {
        const skillsGrid = document.getElementById('skillsGrid');
        if (!skillsGrid) return;

        // Данные навыков
        const skills = [
            { name: 'Java', category: 'automation', icon: 'fab fa-java' },
            { name: 'Python', category: 'automation', icon: 'fab fa-python' },
            { name: 'Selenium', category: 'automation', icon: 'fas fa-code' },
            { name: 'JUnit', category: 'automation', icon: 'fas fa-vial' },
            { name: 'TestNG', category: 'automation', icon: 'fas fa-vial' },
            { name: 'REST Assured', category: 'automation', icon: 'fas fa-cloud' },
            { name: 'Manual Testing', category: 'manual', icon: 'fas fa-clipboard-list' },
            { name: 'Test Design', category: 'manual', icon: 'fas fa-pencil-ruler' },
            { name: 'Regression', category: 'manual', icon: 'fas fa-undo-alt' },
            { name: 'Smoke Testing', category: 'manual', icon: 'fas fa-fire' },
            { name: 'Jira', category: 'tools', icon: 'fab fa-jira' },
            { name: 'TestRail', category: 'tools', icon: 'fas fa-train' },
            { name: 'Postman', category: 'tools', icon: 'fas fa-mail-bulk' },
            { name: 'Git', category: 'tools', icon: 'fab fa-git-alt' },
            { name: 'SQL', category: 'tools', icon: 'fas fa-database' },
            { name: 'Docker', category: 'tools', icon: 'fab fa-docker' }
        ];

        function displaySkills(category = 'all') {
            skillsGrid.innerHTML = '';
            
            const filteredSkills = category === 'all' 
                ? skills 
                : skills.filter(skill => skill.category === category);
            
            filteredSkills.forEach(skill => {
                const skillElement = document.createElement('div');
                skillElement.className = 'skill-item';
                skillElement.innerHTML = `
                    <i class="${skill.icon}"></i>
                    <span>${skill.name}</span>
                `;
                skillsGrid.appendChild(skillElement);
            });
        }

        // Фильтрация навыков
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                filterButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                displaySkills(filter);
            });
        });

        // Показываем все навыки по умолчанию
        displaySkills('all');
    }

    // ===== МОБИЛЬНОЕ МЕНЮ =====
    function initMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', function() {
                this.classList.toggle('active');
                navLinks.classList.toggle('active');
            });

            // Закрываем меню при клике на ссылку
            navLinks.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                });
            });
        }
    }

    // ===== ПЛАВНЫЙ СКРОЛЛ =====
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Подсветка активного пункта меню при скролле
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
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

    // ===== КНОПКИ КОПИРОВАНИЯ =====
    function initCopyButtons() {
        window.copyToClipboard = function(text) {
            navigator.clipboard.writeText(text).then(() => {
                // Можно добавить уведомление
                console.log('Copied to clipboard:', text);
                
                // Визуальная обратная связь
                const btn = event.currentTarget;
                const originalHTML = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-check"></i>';
                btn.style.background = '#00ff00';
                
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                    btn.style.background = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy:', err);
            });
        };
    }

    // ===== ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА (вспомогательная функция) =====
    // Основная логика перевода находится в HTML, но здесь можно добавить
    // дополнительную логику, если нужно обновлять динамические элементы
    window.addEventListener('languageChanged', function(e) {
        // Если нужно обновить что-то динамическое при смене языка
        console.log('Language changed to:', e.detail.lang);
    });
});
