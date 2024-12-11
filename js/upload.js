document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('videoFile');
    const videoPreview = document.getElementById('videoPreview');
    const uploadPreview = document.querySelector('.upload-preview');
    const uploadAreaContent = document.querySelector('.upload-area-content');
    const progressBar = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text span');
    const submitButton = document.querySelector('.upload-btn');
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const thumbnailInput = document.getElementById('thumbnail');
    const thumbnailPreview = document.getElementById('thumbnailPreview');
    const tagsInput = document.getElementById('tags');
    const tagsContainer = document.querySelector('.tags-container');
    
    let tags = new Set();
    let uploadedVideo = null;
    let uploadedThumbnail = null;

    // Функция валидации формы
    function validateForm() {
        const isVideoUploaded = uploadedVideo !== null;
        const isTitleValid = titleInput.value.trim().length > 0;
        const isThumbnailUploaded = uploadedThumbnail !== null;
        
        submitButton.disabled = !(isVideoUploaded && isTitleValid && isThumbnailUploaded);
    }

    // Обработка перетаскивания
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, unhighlight, false);
    });

    function highlight() {
        dropZone.classList.add('dragover');
    }

    function unhighlight() {
        dropZone.classList.remove('dragover');
    }

    // Обработка загрузки видео
    dropZone.addEventListener('drop', handleDrop, false);
    fileInput.addEventListener('change', handleFileSelect, false);

    function handleDrop(e) {
        const dt = e.dataTransfer;
        const file = dt.files[0];
        handleVideo(file);
    }

    function handleFileSelect(e) {
        const file = e.target.files[0];
        handleVideo(file);
    }

    function handleVideo(file) {
        if (file && file.type.startsWith('video/')) {
            uploadedVideo = file;
            showVideoPreview(file);
            validateForm();
        } else {
            alert('Пожалуйста, выберите видеофайл');
        }
    }

    function showVideoPreview(file) {
        const url = URL.createObjectURL(file);
        videoPreview.src = url;
        uploadPreview.hidden = false;
        uploadAreaContent.hidden = true;
        
        // Создаем превью для миниатюры из видео
        setTimeout(() => {
            const canvas = document.createElement('canvas');
            canvas.width = 1280;
            canvas.height = 720;
            canvas.getContext('2d').drawImage(videoPreview, 0, 0, canvas.width, canvas.height);
            canvas.toBlob(blob => {
                const thumbnailFile = new File([blob], 'thumbnail.jpg', { type: 'image/jpeg' });
                handleThumbnail(thumbnailFile);
            }, 'image/jpeg', 0.95);
        }, 1000);
    }

    // Обработка миниатюры
    thumbnailInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        handleThumbnail(file);
    });

    function handleThumbnail(file) {
        if (file && file.type.startsWith('image/')) {
            uploadedThumbnail = file;
            const reader = new FileReader();
            reader.onload = (e) => {
                thumbnailPreview.innerHTML = `<img src="${e.target.result}" alt="Превью">`;
            };
            reader.readAsDataURL(file);
            validateForm();
        }
    }

    // Обработка тегов
    tagsInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const tag = e.target.value.trim();
            if (tag && tags.size < 5) {
                addTag(tag);
                e.target.value = '';
            }
        }
    });

    function addTag(tag) {
        if (!tags.has(tag)) {
            tags.add(tag);
            const tagElement = document.createElement('span');
            tagElement.className = 'tag';
            tagElement.innerHTML = `
                ${tag}
                <i class="fas fa-times" onclick="removeTag(this, '${tag}')"></i>
            `;
            tagsContainer.appendChild(tagElement);
        }
    }

    window.removeTag = function(element, tag) {
        tags.delete(tag);
        element.parentElement.remove();
    };

    // Счетчики символов
    titleInput.addEventListener('input', () => {
        const count = titleInput.value.length;
        titleInput.nextElementSibling.textContent = `${count}/100`;
        validateForm();
    });

    descriptionInput.addEventListener('input', () => {
        const count = descriptionInput.value.length;
        descriptionInput.nextElementSibling.textContent = `${count}/500`;
    });

    // Отправка формы
    uploadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('video', uploadedVideo);
        formData.append('thumbnail', uploadedThumbnail);
        formData.append('title', titleInput.value);
        formData.append('description', descriptionInput.value);
        formData.append('tags', Array.from(tags).join(','));
        formData.append('category', document.getElementById('category').value);
        formData.append('visibility', document.querySelector('input[name="visibility"]:checked').value);

        try {
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Загрузка...';

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    progressBar.style.width = `${percentCompleted}%`;
                    progressText.textContent = `${percentCompleted}%`;
                }
            });

            if (response.ok) {
                const result = await response.json();
                window.location.href = `/watch/${result.videoId}`;
            } else {
                throw new Error('Ошибка загрузки');
            }
        } catch (error) {
            alert('Произошла ошибка при загрузке видео');
            console.error(error);
        } finally {
            submitButton.disabled = false;
            submitButton.innerHTML = '<i class="fas fa-upload"></i> Опубликовать';
        }
    });

    // Кнопка отмены
    document.querySelector('.cancel-btn').addEventListener('click', () => {
        if (confirm('Вы уверены, что хотите отменить загрузку?')) {
            window.location.href = '/';
        }
    });
});
