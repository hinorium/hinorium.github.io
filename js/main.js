// Управление темой
class ThemeManager {
    constructor() {
        this.root = document.documentElement;
        this.themeButtons = {
            light: document.getElementById('theme-light'),
            dark: document.getElementById('theme-dark'),
            system: document.getElementById('theme-system')
        };
        
        this.initTheme();
        this.setupEventListeners();
    }

    initTheme() {
        const savedTheme = localStorage.getItem('theme-preference') || 'system';
        this.setTheme(savedTheme, true);
    }

    getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    setTheme(theme, isInitial = false) {
        // Удаляем все классы тем
        this.root.classList.remove('theme-light', 'theme-dark');
        
        // Убираем активное состояние со всех кнопок
        Object.values(this.themeButtons).forEach(button => {
            button?.classList.remove('active');
        });

        let effectiveTheme = theme;
        if (theme === 'system') {
            effectiveTheme = this.getSystemTheme();
            this.themeButtons.system?.classList.add('active');
        } else {
            this.themeButtons[theme]?.classList.add('active');
        }

        // Установка атрибута data-theme
        this.root.setAttribute('data-theme', effectiveTheme);
        // Добавление класса темы
        this.root.classList.add(`theme-${effectiveTheme}`);

        if (!isInitial) {
            localStorage.setItem('theme-preference', theme);
        }

        // Добавим вывод в консоль для отладки
        console.log('Theme set to:', effectiveTheme);
        console.log('data-theme attribute:', this.root.getAttribute('data-theme'));
        console.log('classList:', this.root.classList);
    }

    setupEventListeners() {
        // Обработчики для кнопок
        Object.entries(this.themeButtons).forEach(([theme, button]) => {
            button?.addEventListener('click', () => this.setTheme(theme));
        });

        // Слушатель изменения системной темы
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            if (localStorage.getItem('theme-preference') === 'system') {
                this.setTheme('system');
            }
        });
    }
}

// Инициализация менеджера темы после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    const themeManager = new ThemeManager();
});

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
