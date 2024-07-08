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
        { src: 'Feature/mushokucard.png', video: 'https://www.youtube.com/embed/k5VxfJpzy1Q', title: 'Mushoku Tensei' },
        { src: 'Feature/nogamenolifecard.png', video: 'https://www.youtube.com/embed/ZgWgnSG9PB0', title: 'No Game No Life' },
        { src: 'Feature/overlordcard.png', video: 'https://www.youtube.com/embed/uhlBqFj9kDw', title: 'OverLord' },
        { src: 'Feature/rezerocard.png', video: 'https://www.youtube.com/embed/lXs3yIc_2CU', title: 'Re:Zero' },
        { src: 'Feature/sagaoftanyacard.png', video: 'https://www.youtube.com/embed/V8Gx2_sHMRI', title: 'Saga of Tanya' },
        { src: 'Feature/saocard.png', video: 'https://www.youtube.com/embed/6ohYYtxfDCg', title: 'Sword Art Online' },
        { src: 'Feature/shieldherocard.png', video: 'https://www.youtube.com/embed/rKnyi3TRznA', title: 'Shield Hero' },
        { src: 'Feature/slimecard.png', video: 'https://www.youtube.com/embed/uOzwqb74K34', title: 'Reincarnated as A Slime' },
        { src: 'Feature/tsukimichicard.png', video: 'https://www.youtube.com/embed/Q7IUIZix_yw', title: 'Tsukimichi' },
        { src: 'Feature/konosubacard.png', video: 'https://www.youtube.com/embed/5h4rQY9bpgE', title: 'Konosuba' },
        { src: 'Feature/devilisaparttimercard.png', video: 'https://www.youtube.com/embed/9eCFxxQ4WE0', title: 'Devil is a Part Timer' },
        { src: 'Feature/loghorizoncard.png', video: 'https://www.youtube.com/embed/IG1VhJ75r8k', title: 'Log Horizon' },
        { src: 'Feature/blacksummonercard.png', video: 'https://www.youtube.com/embed/m3W8sZhn3-o', title: 'Black Summoner' },
        { src: 'Feature/spidercard.png', video: 'https://www.youtube.com/embed/geMv8Lwk2sM', title: 'So What im a Spider' },
        { src: 'Feature/vendingmachinecard.png', video: 'https://www.youtube.com/embed/mMOzW_UEdvg', title: 'Reborn as A Vending Machine' },
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

// For the crunchyroll button
document.addEventListener('DOMContentLoaded', () => {
    const yellowBoxes = document.querySelectorAll('.yellow-box');
    const videoIframe = document.getElementById('video-iframe');
    const crunchyrollButton = document.getElementById('crunchyroll-button');

    yellowBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const videoUrl = box.getAttribute('data-video');
            const crunchyrollUrl = box.getAttribute('data-crunchyroll');
            
            videoIframe.src = videoUrl;
            crunchyrollButton.href = crunchyrollUrl;
            
            document.getElementById('video-overlay').style.display = 'block';
        });
    });
});