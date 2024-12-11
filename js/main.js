// Управление темой
const themeButtons = {
    light: document.getElementById('theme-light'),
    dark: document.getElementById('theme-dark'),
    system: document.getElementById('theme-system')
};

// Определение системной темы
function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Установка темы
function setTheme(theme) {
    const root = document.documentElement;
    
    // Удаляем активный класс со всех кнопок
    Object.values(themeButtons).forEach(button => button.classList.remove('active'));
    
    if (theme === 'system') {
        root.setAttribute('data-theme', getSystemTheme());
        themeButtons.system.classList.add('active');
    } else {
        root.setAttribute('data-theme', theme);
        themeButtons[theme].classList.add('active');
    }
    
    localStorage.setItem('theme-preference', theme);
}

// Обработчики для кнопок переключения темы
Object.entries(themeButtons).forEach(([theme, button]) => {
    button.addEventListener('click', () => setTheme(theme));
});

// Слушатель изменения системной темы
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (localStorage.getItem('theme-preference') === 'system') {
        setTheme('system');
    }
});

// Инициализация темы
const savedTheme = localStorage.getItem('theme-preference') || 'system';
setTheme(savedTheme);

// Мобильное меню
const menuToggle = document.querySelector('.menu-toggle');
const navContent = document.querySelector('.nav-content');

menuToggle.addEventListener('click', () => {
    navContent.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navContent.classList.remove('active');
        document.body.classList.remove('menu-open');
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Анимация появления карточек при прокрутке
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.video-card').forEach(card => {
    observer.observe(card);
});
