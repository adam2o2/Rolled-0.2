document.querySelectorAll('.yellow-box').forEach(box => {
    box.addEventListener('click', function() {
        const backgroundUrl = this.getAttribute('data-background');
        const featureUrl = this.getAttribute('data-feature');

        document.getElementById('background').style.backgroundImage = `url(${backgroundUrl})`;
        document.getElementById('feature-image').src = featureUrl;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const yellowBoxes = document.querySelectorAll('.yellow-box');
    const featureImage = document.getElementById('feature-image');
    const playButton = document.querySelector('.play-button');
    const videoIframe = document.getElementById('video-iframe');
    let selectedBox = null;

    yellowBoxes.forEach(box => {
        box.addEventListener('click', function() {
            yellowBoxes.forEach(box => box.classList.remove('selected'));
            this.classList.add('selected');
            selectedBox = this;
            const featureImageSrc = this.getAttribute('data-feature');
            featureImage.src = featureImageSrc;
            const actionImageSrc = this.querySelector('.box-image').src;
        });
    });

    playButton.addEventListener('click', function() {
        if (selectedBox) {
            const videoUrl = selectedBox.getAttribute('data-video');
            if (videoUrl) {
                videoIframe.src = videoUrl;
                videoIframe.style.display = 'block';
            } else {
                videoIframe.style.display = 'none';
            }
        }
    });
});
