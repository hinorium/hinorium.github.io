// Функция для управления фоновыми видео
function initBackgroundVideoSystem() {
    const mainVideo = document.getElementById('bgVideo');
    const videoSwitcher = document.querySelector('.video-switcher');
    const totalVideos = 33; // Общее количество видео
    const previewsToShow = 5; // Количество превью для показа
    let currentVideoIndex = 2; // Начинаем с video-2.mp4

    // Очищаем текущие превью
    videoSwitcher.innerHTML = '';

    // Создаем новые превью
    for (let i = 0; i < previewsToShow; i++) {
        const videoIndex = ((currentVideoIndex - 2 + i) % totalVideos) + 1;
        const preview = createVideoPreview(videoIndex, i === 1);
        videoSwitcher.appendChild(preview);
    }

    // Функция создания превью видео
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
        
        preview.addEventListener('mouseenter', () => previewVideo.play());
        preview.addEventListener('mouseleave', () => {
            previewVideo.pause();
            previewVideo.currentTime = 0;
        });

        preview.addEventListener('click', () => {
            if (preview.classList.contains('active')) return;
            document.querySelector('.video-preview.active')?.classList.remove('active');
            preview.classList.add('active');
            currentVideoIndex = index;
            changeBackgroundVideo(index);
            updatePreviews();
        });

        return preview;
    }

    // Функция обновления превью
    function updatePreviews() {
        const previews = Array.from(videoSwitcher.children);
        previews.forEach(preview => preview.style.opacity = '0');

        setTimeout(() => {
            videoSwitcher.innerHTML = '';
            
            for (let i = 0; i < previewsToShow; i++) {
                const offset = i - Math.floor(previewsToShow / 2);
                let videoIndex = ((currentVideoIndex + offset - 1 + totalVideos) % totalVideos) + 1;
                const preview = createVideoPreview(videoIndex, offset === 0);
                preview.style.opacity = '0';
                videoSwitcher.appendChild(preview);
            }

            requestAnimationFrame(() => {
                videoSwitcher.querySelectorAll('.video-preview').forEach(preview => {
                    preview.style.opacity = '1';
                });
            });
        }, 300);
    }

    // Функция смены фонового видео
    async function changeBackgroundVideo(index) {
        const newSrc = `/assets/videos/video-${index}.mp4`;
        try {
            await preloadVideo(newSrc);
            mainVideo.style.opacity = '0';
            
            setTimeout(() => {
                mainVideo.src = newSrc;
                mainVideo.load();
                mainVideo.play();
                mainVideo.style.opacity = '1';
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

    // Автоматическая смена видео
    setInterval(() => {
        currentVideoIndex = (currentVideoIndex % totalVideos) + 1;
        changeBackgroundVideo(currentVideoIndex);
        updatePreviews();
    }, 30000);

    // Плавные переходы
    mainVideo.style.transition = 'opacity 0.3s ease';
}

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
