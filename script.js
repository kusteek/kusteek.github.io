// Динамическое приветствие в зависимости от времени суток
document.addEventListener('DOMContentLoaded', function() {
    const hours = new Date().getHours();
    let greeting;
    
    if (hours < 12) {
        greeting = 'Доброе утро!';
    } else if (hours < 18) {
        greeting = 'Добрый день!';
    } else {
        greeting = 'Добрый вечер!';
    }
    
    // Добавляем приветствие в заголовок
    const nameElement = document.querySelector('.profile-title h1');
    if (nameElement) {
        nameElement.innerHTML = `${greeting} Я, ${nameElement.textContent}`;
    }
});

// Анимация для навыков при скролле
function animateSkills() {
    const skills = document.querySelectorAll('.progress');
    skills.forEach(skill => {
        const width = skill.style.width;
        skill.style.width = '0%';
        setTimeout(() => {
            skill.style.width = width;
        }, 100);
    });
}

// Запускаем анимацию когда секция навыков появляется в зоне видимости
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const techStack = document.querySelector('.tech-stack');
if (techStack) {
    observer.observe(techStack);
}

// Плавная прокрутка для якорей
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Копирование email в буфер обмена
const emailElement = document.querySelector('.contact-item .fa-envelope').parentElement;
if (emailElement) {
    emailElement.addEventListener('click', function(e) {
        e.preventDefault();
        const email = this.querySelector('a').textContent;
        
        navigator.clipboard.writeText(email).then(() => {
            // Показываем уведомление
            const notification = document.createElement('div');
            notification.textContent = 'Email скопирован!';
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 1rem 2rem;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                z-index: 1000;
                animation: slideIn 0.3s ease;
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        });
    });
}

// Добавляем стили для анимации
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
    
    .progress {
        transition: width 1s ease-in-out;
    }
`;
document.head.appendChild(style);