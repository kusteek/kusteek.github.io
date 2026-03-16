// ===== Particles.js Effect с улучшенным взаимодействием =====
class ParticlesNetwork {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 100; // Увеличил количество частиц для лучшего эффекта
        this.mouseX = 0;
        this.mouseY = 0;
        this.isMouseInside = false;
        this.mouseRadius = 150; // Радиус влияния курсора
        this.mouseForce = 0.5; // Сила отталкивания/притяжения
        this.mouseRepel = true; // true - отталкивание, false - притяжение

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
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                radius: Math.random() * 3 + 1,
                originalRadius: 0,
                baseX: 0,
                baseY: 0,
                angle: Math.random() * Math.PI * 2,
                speed: 0.5 + Math.random() * 0.5
            });
        }
    }

    drawParticles() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Рисуем соединения между частицами
        this.ctx.lineWidth = 0.3;
        
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    // Цвет линии зависит от расстояния и темы
                    const opacity = (1 - distance / 120) * 0.3;
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = document.body.classList.contains('light-theme') 
                        ? `rgba(108, 92, 231, ${opacity})` 
                        : `rgba(162, 155, 254, ${opacity})`;
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }

        // Рисуем частицы
        for (let particle of this.particles) {
            // Эффект пульсации при приближении курсора
            let radius = particle.radius;
            if (this.isMouseInside) {
                const dx = particle.x - this.mouseX;
                const dy = particle.y - this.mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.mouseRadius) {
                    // Увеличиваем размер частицы при приближении курсора
                    const scale = 1 + (1 - distance / this.mouseRadius) * 0.5;
                    radius *= scale;
                }
            }

            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
            
            // Градиент для частиц
            const gradient = this.ctx.createRadialGradient(
                particle.x - radius * 0.3, 
                particle.y - radius * 0.3, 
                radius * 0.3,
                particle.x, 
                particle.y, 
                radius * 1.5
            );
            
            if (document.body.classList.contains('light-theme')) {
                gradient.addColorStop(0, '#6c5ce7');
                gradient.addColorStop(1, '#a363d9');
            } else {
                gradient.addColorStop(0, '#a29bfe');
                gradient.addColorStop(1, '#6c5ce7');
            }
            
            this.ctx.fillStyle = gradient;
            this.ctx.fill();

            // Добавляем блик
            this.ctx.beginPath();
            this.ctx.arc(particle.x - radius * 0.3, particle.y - radius * 0.3, radius * 0.4, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            this.ctx.fill();
        }
    }

    updateParticles() {
        for (let particle of this.particles) {
            // Естественное движение
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Границы с отскоком
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.vx *= -1;
                particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
            }
            if (particle.y < 0 || particle
