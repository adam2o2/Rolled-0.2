document.querySelectorAll('.yellow-box').forEach(box => {
    box.addEventListener('click', function() {
        const backgroundUrl = this.getAttribute('data-background');
        const featureUrl = this.getAttribute('data-feature');
        const videoUrl = this.getAttribute('data-video');
        const title = this.getAttribute('data-title');
        const genre = this.getAttribute('data-genre');
        const seasons = this.getAttribute('data-seasons');
        const episodes = this.getAttribute('data-episodes');

        document.getElementById('background').style.backgroundImage = `url(${backgroundUrl})`;
        document.getElementById('feature-image').src = featureUrl;
        document.getElementById('video-iframe').src = videoUrl;
        document.getElementById('anime-title').textContent = title;
        document.getElementById('anime-genre').textContent = genre;
        document.getElementById('anime-seasons').textContent = seasons;
        document.getElementById('anime-episodes').textContent = episodes;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const yellowBoxes = document.querySelectorAll('.yellow-box');
    const featureImage = document.getElementById('feature-image');
    const videoIframe = document.getElementById('video-iframe');
    const background = document.getElementById('background');
    const playButton = document.querySelector('.play-button');
    const videoOverlay = document.getElementById('video-overlay');
    let selectedBox = null;

    const featureImages = [
        { src: 'Feature/bucchigiricard.png', video: 'https://www.youtube.com/embed/Kw6JkejW_Hw', title: 'BUCCHIGIRI?!' },
        { src: 'Feature/buddycard.png', video: 'https://www.youtube.com/embed/Oqxm1mn917g', title: 'Buddy Daddies' },
        { src: 'Feature/combatantscard.png', video: 'https://www.youtube.com/embed/-uJdqz-fBl8', title: 'Combatants Will...' },
        { src: 'Feature/ghostcard.png', video: 'https://www.youtube.com/embed/kOi5SpwDQR4', title: 'Ghost Stories' },
        { src: 'Feature/gintamacard.png', video: 'https://www.youtube.com/embed/Eh43PgDfSxU', title: 'Gintama' },
        { src: 'Feature/grandbluecard.png', video: 'https://www.youtube.com/embed/YILULCpNg9U', title: 'Grand Blue' },
        { src: 'Feature/gurrencard.png', video: 'https://www.youtube.com/embed/rAQylCHv8Cw', title: 'Gurren Lagann' },
        { src: 'Feature/konosubacard.png', video: 'https://www.youtube.com/embed/N1AO7k2o78g', title: 'Konosuba' },
        { src: 'Feature/mashlecard.png', video: 'https://www.youtube.com/embed/_ce5_P1Hj5A', title: 'Mashle' },
        { src: 'Feature/mobcard.png', video: 'https://www.youtube.com/embed/nTze7vAdRpM', title: 'Mob Psycho 100' },
        { src: 'Feature/nichijoucard.png', video: 'https://www.youtube.com/embed/0AEV-8d_vbg', title: 'Nichijou' },
        { src: 'Feature/pickupcard.png', video: 'https://www.youtube.com/embed/Nk23ix2xgTg', title: 'Is It Wrong to Try...' },
        { src: 'Feature/robocard.png', video: 'https://www.youtube.com/embed/M0X4J1jpApw', title: 'ME & ROBOCO' },
        { src: 'Feature/spacedandycard.png', video: 'https://www.youtube.com/embed/S4qW86moTys', title: 'Space Dandy' },
        { src: 'Feature/spyxfamilycard.png', video: 'https://www.youtube.com/embed/6sosTNRw_uQ', title: 'Spy x Family' },
        // Add other images and their corresponding videos and titles here
    ];

    function getRandomIndex(max) {
        return Math.floor(Math.random() * max);
    }

    function changeFeature() {
        const index = getRandomIndex(featureImages.length);
        const selectedImage = featureImages[index];

        featureImage.src = selectedImage.src;
        document.querySelector('.text1 h1').textContent = selectedImage.title;

        // Display seasons and episodes based on selected feature image
        selectedBox = [...yellowBoxes].find(box => box.getAttribute('data-feature') === selectedImage.src);
        if (selectedBox) {
            const seasons = selectedBox.getAttribute('data-seasons');
            const episodes = selectedBox.getAttribute('data-episodes');
            document.getElementById('anime-genre').textContent = selectedBox.getAttribute('data-genre');
            document.getElementById('anime-seasons').textContent = seasons;
            document.getElementById('anime-episodes').textContent = episodes;
        }

        // Change background image dynamically
        background.style.backgroundImage = `url(${selectedImage.src})`;
    }

    // Initialize on page load
    changeFeature();

    // Function to handle click on yellow boxes
    function handleYellowBoxClick() {
        const backgroundUrl = this.getAttribute('data-background');
        const featureUrl = this.getAttribute('data-feature');
        const videoUrl = this.getAttribute('data-video');
        const title = this.getAttribute('data-title');

        background.style.backgroundImage = `url(${backgroundUrl})`;
        featureImage.src = featureUrl;
        document.querySelector('.text1 h1').textContent = title;

        // Set the selectedBox to the current box clicked
        selectedBox = this;
    }

    yellowBoxes.forEach(box => {
        box.addEventListener('click', handleYellowBoxClick);
    });

    // Function to play video
    function playVideo(videoUrl) {
        if (videoUrl) {
            videoIframe.src = videoUrl;
            videoIframe.style.width = '1666.47px';
            videoIframe.style.height = '801px';
            videoIframe.style.display = 'block';
            videoIframe.style.position = 'fixed';
            videoIframe.style.top = '50%';
            videoIframe.style.left = '50%';
            videoIframe.style.transform = 'translate(-50%, -50%)';
            videoOverlay.style.display = 'block'; // Show overlay
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            videoIframe.style.display = 'none';
        }
    }

    playButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop propagation to prevent conflicts

        if (selectedBox) {
            const videoUrl = selectedBox.getAttribute('data-video');
            playVideo(videoUrl);
        }
    });

    // Add click event listener to yellow boxes to play video immediately
    yellowBoxes.forEach(box => {
        box.addEventListener('click', function(event) {
            event.stopPropagation(); // Stop propagation to prevent conflicts

            const videoUrl = this.getAttribute('data-video');
            playVideo(videoUrl);
        });
    });

    // Click event listener for overlay to close video
    videoOverlay.addEventListener('click', function() {
        videoIframe.style.display = 'none';
        videoIframe.src = '';
        videoOverlay.style.display = 'none'; // Hide overlay
        document.body.style.overflow = 'auto'; // Enable scrolling
    });
});
