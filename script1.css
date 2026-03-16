/* Расширение панели Интересы */
.info-card:last-child {
    min-width: 280px;
}

.interests-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
    text-align: left;
    width: 100%;
}

.interests-list span {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--text-secondary);
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 10px;
    transition: all 0.3s ease;
    white-space: normal;
    word-break: break-word;
    line-height: 1.4;
}

/* Анимация для навыков */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    min-height: 400px;
}

.skill-item {
    background: var(--bg-card);
    padding: 1.5rem;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    transform: translateY(20px) scale(0.95);
    animation: skillFadeIn 0.5s ease forwards;
}

@keyframes skillFadeIn {
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

/* Задержки для анимации навыков */
.skill-item:nth-child(1) { animation-delay: 0.05s; }
.skill-item:nth-child(2) { animation-delay: 0.1s; }
.skill-item:nth-child(3) { animation-delay: 0.15s; }
.skill-item:nth-child(4) { animation-delay: 0.2s; }
.skill-item:nth-child(5) { animation-delay: 0.25s; }
.skill-item:nth-child(6) { animation-delay: 0.3s; }
.skill-item:nth-child(7) { animation-delay: 0.35s; }
.skill-item:nth-child(8) { animation-delay: 0.4s; }
.skill-item:nth-child(9) { animation-delay: 0.45s; }
.skill-item:nth-child(10) { animation-delay: 0.5s; }
.skill-item:nth-child(11) { animation-delay: 0.55s; }
.skill-item:nth-child(12) { animation-delay: 0.6s; }
.skill-item:nth-child(13) { animation-delay: 0.65s; }

/* Эффект при фильтрации */
.skills-grid.replacing {
    opacity: 0;
    transform: scale(0.95);
}

.skills-grid.replacing .skill-item {
    animation: none;
    opacity: 0;
}

/* Убираем подзаголовки */
.section-header .section-subtitle {
    display: none;
}

/* Заголовки секций */
.section-title {
    font-size: 2.5rem;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    display: inline-block;
    margin-bottom: 2rem;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: var(--gradient-1);
    border-radius: 3px;
}

/* Улучшенное взаимодействие с частицами */
#particles-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
    opacity: 0.8;
    transition: opacity 0.3s ease;
}

#particles-canvas:hover {
    opacity: 1;
}

/* Мобильная версия для интересов */
@media (max-width: 768px) {
    .info-card:last-child {
        min-width: 100%;
    }
    
    .interests-list span {
        font-size: 0.95rem;
        padding: 0.4rem;
    }
}
