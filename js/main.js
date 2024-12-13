class BackgroundVideoManager {
    constructor() {
        this.mainVideo = document.getElementById('bgVideo');
        this.videoSwitcher = document.querySelector('.video-switcher');
        this.totalVideos = 33;
        this.previewsToShow = 5;
        this.currentVideoIndex = 2;
    }

    init() {
        this.createPreviews();
    }

    createPreviews() {
        this.videoSwitcher.innerHTML = '';
        for (let i = 0; i < this.previewsToShow; i++) {
            const videoIndex = ((this.currentVideoIndex - 2 + i) % this.totalVideos) + 1;
            const preview = this.createPreviewElement(videoIndex, i === 1);
            this.videoSwitcher.appendChild(preview);
        }
    }

    createPreviewElement(index, isActive) {
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

        this.setupPreviewEvents(preview, index);
        return preview;
    }

    setupPreviewEvents(preview, index) {
        const previewVideo = preview.querySelector('video');

        preview.addEventListener('mouseenter', () => {
            previewVideo.play();
        });

        preview.addEventListener('mouseleave', () => {
            previewVideo.pause();
            previewVideo.currentTime = 0;
        });

        preview.addEventListener('click', () => {
            if (preview.classList.contains('active')) return;
            
            document.querySelector('.video-preview.active')?.classList.remove('active');
            preview.classList.add('active');
            this.currentVideoIndex = index;
            this.switchVideo(index);
            this.updatePreviews();
        });
    }

    async switchVideo(index) {
        const newSrc = `/assets/videos/video-${index}.mp4`;
        await this.preloadVideo(newSrc);
        this.mainVideo.src = newSrc;
        this.mainVideo.load();
        this.mainVideo.play();
    }

    updatePreviews() {
        this.createPreviews();
    }

    preloadVideo(src) {
        return new Promise((resolve, reject) => {
            const video = document.createElement('video');
            video.src = src;
            video.onloadeddata = () => resolve(src);
            video.onerror = reject;
        });
    }
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

document.addEventListener('DOMContentLoaded', function() {
    const videoManager = new BackgroundVideoManager();
    videoManager.init();

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

    // Анимация появления карточек
    const cardObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    cardObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.video-card').forEach(card => {
        cardObserver.observe(card);
    });
});
