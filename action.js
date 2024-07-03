document.querySelectorAll('.yellow-box').forEach(box => {
    box.addEventListener('click', function() {
        const backgroundUrl = this.getAttribute('data-background');
        const featureUrl = this.getAttribute('data-feature');
        const actionUrl = this.getAttribute('data-action');
        const videoUrl = this.getAttribute('data-video');
        const title = this.getAttribute('data-title');

        document.getElementById('background').style.backgroundImage = `url(${backgroundUrl})`;
        document.getElementById('feature-image').src = featureUrl;
        document.getElementById('video-iframe').src = videoUrl;
        document.querySelector('.text1 h1').textContent = title;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const yellowBoxes = document.querySelectorAll('.yellow-box');
    const featureImage = document.getElementById('feature-image');
    const playButton = document.querySelector('.play-button');
    const videoIframe = document.getElementById('video-iframe');
    let selectedBox = null;

    // Function to handle yellow box clicks
    function handleYellowBoxClick() {
        yellowBoxes.forEach(box => box.classList.remove('selected'));
        this.classList.add('selected');
        selectedBox = this;
        const featureImageSrc = this.getAttribute('data-feature');
        featureImage.src = featureImageSrc;

        // Hide the iframe when a new anime is selected
        videoIframe.style.display = 'none';
        videoIframe.src = '';
    }

    yellowBoxes.forEach(box => {
        box.addEventListener('click', handleYellowBoxClick);
    });

    playButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop propagation to prevent conflicts

        if (selectedBox) {
            const videoUrl = selectedBox.getAttribute('data-video');
            if (videoUrl) {
                videoIframe.src = videoUrl;
                videoIframe.style.width = '1664.47px';
                videoIframe.style.height = '801px';
                videoIframe.style.display = 'block';
            } else {
                videoIframe.style.display = 'none';
            }
        }
    });

    // Add click event listener to hide the iframe when clicked outside
    document.body.addEventListener('click', function(event) {
        if (!videoIframe.contains(event.target)) {
            videoIframe.style.display = 'none';
            videoIframe.src = '';
        }
    });
});
