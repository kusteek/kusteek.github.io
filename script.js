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

// Обновляем статистику при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Обновляем цифры в статистике
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length >= 3) {
        statNumbers[0].setAttribute('data-target', userData.experience);
        statNumbers[1].setAttribute('data-target', userData.bugs);
    }
    
    // Обновляем текст "лет опыта" с правильным склонением
    const expLabel = document.querySelector('.stat-item:nth-child(1) .stat-label');
    if (expLabel) {
        const years = userData.experience;
        let yearsText = 'лет';
        if (years === 1) yearsText = 'год';
        else if (years >= 2 && years <= 4) yearsText = 'года';
        expLabel.textContent = yearsText;
    }
    
    // Анимация цифр
    animateNumbers();
});

// Функция для анимации цифр
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50; // Плавное увеличение
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

// Обновляем информацию в about секции
function updateAboutSection() {
    const aboutText = document.querySelector('.about-text p');
    if (aboutText) {
        aboutText.innerHTML = `За ${userData.experience} ${getYearsText(userData.experience)} работы в IT помог 3+ проектам выйти на новый уровень качества. 
        Специализируюсь на автоматизации тестирования, внедрении CI/CD и оптимизации 
        процессов тестирования. Постоянно учусь и применяю новые подходы в работе.`;
    }
}

// Функция для склонения слова "год"
function getYearsText(years) {
    if (years === 1) return 'год';
    if (years >= 2 && years <= 4) return 'года';
    return 'лет';
}

// Обновляем город в контактах
function updateLocation() {
    const locationElements = document.querySelectorAll('.contact-card .fa-map-marker-alt + span, .info-card .fa-map-pin + h3 + p');
    locationElements.forEach(el => {
        if (el && el.tagName === 'P' || el.tagName === 'SPAN') {
            el.innerHTML = el.innerHTML.replace('Москва', userData.location);
        }
    });
}

// Запускаем обновления
updateAboutSection();
updateLocation();
