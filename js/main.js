// Добавляем JavaScript для управления видео
document.addEventListener('DOMContentLoaded', function() {
    const mainVideo = document.getElementById('bgVideo');
    const previews = document.querySelectorAll('.video-preview');
    let currentVideo = document.querySelector('.video-preview.active');
    
    // Предзагрузка видео
    const preloadVideo = (src) => {
        return new Promise((resolve, reject) => {
            const video = document.createElement('video');
            video.src = src;
            video.onloadeddata = () => resolve(src);
            video.onerror = reject;
        });
    };

    // Функция смены видео с анимацией
    const changeVideo = async (newSrc) => {
        try {
            // Предзагружаем новое видео
            await preloadVideo(newSrc);
            
            // Плавно скрываем текущее видео
            mainVideo.style.opacity = '0';
            
            setTimeout(() => {
                // Меняем источник
                mainVideo.src = newSrc;
                
                // Воспроизводим новое видео
                mainVideo.load();
                mainVideo.play();
                
                // Плавно показываем новое видео
                mainVideo.style.opacity = '1';
            }, 300);
            
        } catch (error) {
            console.error('Error loading video:', error);
        }
    };

    // Обработчики событий для превью
    previews.forEach(preview => {
        // При наведении воспроизводим превью
        preview.addEventListener('mouseenter', () => {
            const previewVideo = preview.querySelector('video');
            previewVideo.play();
        });

        // При уходе мыши останавливаем превью
        preview.addEventListener('mouseleave', () => {
            const previewVideo = preview.querySelector('video');
            previewVideo.pause();
            previewVideo.currentTime = 0;
        });

        // При клике меняем основное видео
        preview.addEventListener('click', async () => {
            if (preview === currentVideo) return;

            // Обновляем активное состояние
            currentVideo.classList.remove('active');
            preview.classList.add('active');
            currentVideo = preview;

            // Меняем видео
            const newVideoSrc = preview.dataset.video;
            await changeVideo(newVideoSrc);
        });
    });

    // Добавляем плавные переходы для видео
    mainVideo.style.transition = 'opacity 0.3s ease';
});

// Добавляем эффект параллакса для видео
document.addEventListener('mousemove', (e) => {
    const video = document.querySelector('.video-background');
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    video.style.transform = `translate(${moveX}px, ${moveY}px)`;
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
