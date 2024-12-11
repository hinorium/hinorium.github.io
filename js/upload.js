document.addEventListener('DOMContentLoaded', function() {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('videoFile');
    const fileInfo = document.querySelector('.file-info');
    const uploadForm = document.getElementById('uploadForm');
    const selectFileBtn = document.querySelector('.select-file-btn');

    // Открытие диалога выбора файла
    selectFileBtn.addEventListener('click', () => {
        fileInput.click();
    });

    // Обработка перетаскивания
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        handleFile(file);
    });

    // Обработка выбора файла
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        handleFile(file);
    });

    function handleFile(file) {
        if (file && file.type.startsWith('video/')) {
            fileInfo.textContent = `Выбрано: ${file.name}`;
            // Здесь можно добавить предпросмотр видео
        } else {
            fileInfo.textContent = 'Пожалуйста, выберите видеофайл';
        }
    }

    // Обработка отправки формы
    uploadForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('video', fileInput.files[0]);
        formData.append('title', document.getElementById('title').value);
        formData.append('description', document.getElementById('description').value);
        formData.append('thumbnail', document.getElementById('thumbnail').files[0]);
        formData.append('tags', document.getElementById('tags').value);
        formData.append('category', document.getElementById('category').value);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('Видео успешно загружено!');
                window.location.href = '/'; // Перенаправление на главную
            } else {
                throw new Error('Ошибка загрузки');
            }
        } catch (error) {
            alert('Произошла ошибка при загрузке видео');
            console.error(error);
        }
    });
});
