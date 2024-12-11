// Функция загрузки новых видео
async function loadNewVideos() {
    const newVideosContainer = document.querySelector('#new .video-grid');
    if (!newVideosContainer) return;

    try {
        const response = await fetch('/api/videos/new');
        const videos = await response.json();
        
        newVideosContainer.innerHTML = videos.map(video => `
            <article class="video-card">
                <a href="/watch/${video.id}" class="video-link">
                    <div class="thumbnail">
                        <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
                        <span class="duration">${video.duration}</span>
                        <div class="thumbnail-overlay">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                </a>
                <div class="video-info">
                    <div class="video-meta">
                        <img src="${video.authorAvatar}" alt="${video.author}" class="author-avatar">
                        <div>
                            <h3>${video.title}</h3>
                            <a href="/channel/${video.authorId}" class="author-name">${video.author}</a>
                            <div class="meta">
                                <span>${video.views} просмотров</span>
                                <span>${video.uploadDate}</span>
                            </div>
                        </div>
                    </div>
                    <div class="tags">
                        ${video.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                </div>
            </article>
        `).join('');
    } catch (error) {
        console.error('Ошибка загрузки видео:', error);
        newVideosContainer.innerHTML = '<p class="error-message">Не удалось загрузить видео</p>';
    }
}

// Загружаем новые видео при прокрутке до секции
const newSection = document.getElementById('new');
if (newSection) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadNewVideos();
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );
    
    observer.observe(newSection);
}

// End [Upload Videos] 

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

// Мобильное меню
const menuToggle = document.querySelector('.menu-toggle');
const navContent = document.querySelector('.nav-content');

menuToggle?.addEventListener('click', () => {
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
