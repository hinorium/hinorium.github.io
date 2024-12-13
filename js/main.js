function initBackgroundVideoSystem() {
    const mainVideo = document.getElementById('bgVideo');
    const videoSwitcher = document.querySelector('.video-switcher');
    const videoOverlay = document.querySelector('.video-overlay');
    const totalVideos = 33;
    const previewsToShow = 5;
    let currentVideoIndex = 2;

    // Добавляем класс для анимации
    mainVideo.classList.add('video-transition');
    videoOverlay.classList.add('overlay-transition');

    // Очищаем текущие превью
    videoSwitcher.innerHTML = '';

    // Создаем новые превью
    for (let i = 0; i < previewsToShow; i++) {
        const videoIndex = ((currentVideoIndex - 2 + i) % totalVideos) + 1;
        const preview = createVideoPreview(videoIndex, i === 1);
        videoSwitcher.appendChild(preview);
    }

    function createVideoPreview(index, isActive) {
        const preview = document.createElement('div');
        preview.className = `video-preview${isActive ? ' active' : ''}`;
        preview.dataset.video = `/assets/videos/video-${index}.mp4`;

        preview.innerHTML = `
            <video muted loop>
                <source src="/assets/videos/video-${index}.mp4" type="video/mp4">
            </video>
            <div class="preview-overlay">
                <span class="preview-number">${String(index).padStart(2, '0')}</span>
            </div>
        `;

        const previewVideo = preview.querySelector('video');
        
        preview.addEventListener('mouseenter', () => {
            previewVideo.play();
            preview.classList.add('preview-hover');
        });

        preview.addEventListener('mouseleave', () => {
            previewVideo.pause();
            previewVideo.currentTime = 0;
            preview.classList.remove('preview-hover');
        });

        preview.addEventListener('click', () => {
            if (preview.classList.contains('active')) return;
            
            // Эффект нажатия
            preview.classList.add('preview-click');
            setTimeout(() => preview.classList.remove('preview-click'), 300);

            document.querySelector('.video-preview.active')?.classList.remove('active');
            preview.classList.add('active');
            currentVideoIndex = index;
            changeBackgroundVideo(index);
            updatePreviews();
        });

        return preview;
    }

    function updatePreviews() {
        const previews = Array.from(videoSwitcher.children);
        videoSwitcher.classList.add('switcher-transition');
        
        previews.forEach(preview => {
            preview.style.transform = 'scale(0.95)';
            preview.style.opacity = '0';
        });

        setTimeout(() => {
            videoSwitcher.innerHTML = '';
            
            for (let i = 0; i < previewsToShow; i++) {
                const offset = i - Math.floor(previewsToShow / 2);
                let videoIndex = ((currentVideoIndex + offset - 1 + totalVideos) % totalVideos) + 1;
                const preview = createVideoPreview(videoIndex, offset === 0);
                preview.style.opacity = '0';
                preview.style.transform = 'scale(0.95)';
                videoSwitcher.appendChild(preview);
            }

            requestAnimationFrame(() => {
                videoSwitcher.querySelectorAll('.video-preview').forEach(preview => {
                    preview.style.opacity = '1';
                    preview.style.transform = 'scale(1)';
                });
            });
            
            videoSwitcher.classList.remove('switcher-transition');
        }, 300);
    }

    async function changeBackgroundVideo(index) {
        const newSrc = `/assets/videos/video-${index}.mp4`;
        try {
            await preloadVideo(newSrc);
            
            // Добавляем эффекты перехода
            mainVideo.classList.add('video-fade');
            videoOverlay.classList.add('overlay-fade');
            
            setTimeout(() => {
                mainVideo.src = newSrc;
                mainVideo.load();
                mainVideo.play();
                
                setTimeout(() => {
                    mainVideo.classList.remove('video-fade');
                    videoOverlay.classList.remove('overlay-fade');
                }, 50);
            }, 300);
        } catch (error) {
            console.error('Error loading video:', error);
        }
    }

    function preloadVideo(src) {
        return new Promise((resolve, reject) => {
            const video = document.createElement('video');
            video.src = src;
            video.onloadeddata = () => resolve(src);
            video.onerror = reject;
        });
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', initBackgroundVideoSystem);

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

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    initBackgroundVideoSystem();
    
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

    // Загрузка новых видео при прокрутке
    const newSection = document.getElementById('new');
    if (newSection) {
        const observer = new IntersectionObserver(
            entries => entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadNewVideos();
                    observer.unobserve(entry.target);
                }
            }),
            { threshold: 0.1 }
        );
        
        observer.observe(newSection);
    }
});
