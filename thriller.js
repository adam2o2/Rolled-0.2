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
        { src: 'Feature/erasedcard.png', video: 'https://www.youtube.com/embed/dky7my5xd2c', title: 'Erased' },
        { src: 'Feature/futurediarycard.png', video: 'https://www.youtube.com/embed/KfznTm8mJA4', title: 'Future Diary' },
        { src: 'Feature/hellsingcard.png', video: 'https://www.youtube.com/embed/7CQKMDFAKMk', title: 'Hellsing' },
        { src: 'Feature/paranoiaagentcard.png', video: 'https://www.youtube.com/embed/QEsNDDwhSJ4', title: 'Paranoia Agent' },
        { src: 'Feature/psychopasscard.png', video: 'https://www.youtube.com/embed/YzuJnyebc40', title: 'Psycho-Pass' },
        { src: 'Feature/terrorinresonancecard.png', video: 'https://www.youtube.com/embed/aiZrjeZvF8Y', title: 'Terror in Resonance' },
        { src: 'Feature/thepromisedneverlandcard.png', video: 'https://www.youtube.com/embed/5llQ56toiPs', title: 'The Promised Neverland' },
        { src: 'Feature/tokyoghoulcard.png', video: 'https://www.youtube.com/embed/vGuQeQsoRgU', title: 'Tokyo Ghoul' },
        { src: 'Feature/tomodachicard.png', video: 'https://www.youtube.com/embed/y-hPQ0-orMM', title: 'Tomodachi Game' },
        { src: 'Feature/parasytecard.png', video: 'https://www.youtube.com/embed/xWtUMR1BveU', title: 'Parasyte -the maxim-' },
        { src: 'Feature/deathparadecard.png', video: 'https://www.youtube.com/embed/8ziUXV6t0ow', title: 'Death Parade' },
        { src: 'Feature/detectiveconancard.png', video: 'https://www.youtube.com/embed/mz3b6Ym8s6s', title: 'Detective Conan' },
        { src: 'Feature/kabanericard.png', video: 'https://www.youtube.com/embed/lQ9VjFBqfH8', title: 'Kabaneri' },
        { src: 'Feature/inspectrecard.png', video: 'https://www.youtube.com/embed/l9QsM6PeTV4', title: 'In/Spectre' },
        { src: 'Feature/deadmanwonderlandcard.png', video: 'https://www.youtube.com/embed/0OjJiQ_tB6k', title: 'Deadman Wonderland' },
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