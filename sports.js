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
        { src: 'Feature/haikyucard.png', video: 'https://www.youtube.com/embed/KhZG9Uw7PxM', title: 'Haikyu!!' },
        { src: 'Feature/yuricard.png', video: 'https://www.youtube.com/embed/KuhLOnIszok', title: 'Yuri on Ice' },
        { src: 'Feature/ippocard.png', video: 'https://www.youtube.com/embed/a94NcwNgPdo?start=1', title: 'Hajime No Ippo' },
        { src: 'Feature/kurokobasketcard.png', video: 'https://www.youtube.com/embed/1KLvA6FMNiE', title: 'Kurokos Basketball' },
        { src: 'Feature/princeoftenniscard.png', video: 'https://www.youtube.com/embed/H0aHXo8q85g', title: 'The Prince of Tennis' },
        { src: 'Feature/runwiththewindcard.png', video: 'https://www.youtube.com/embed/hECoG4DhFVQ', title: 'Run With the Wind' },
        { src: 'Feature/pedalcard.png', video: 'https://www.youtube.com/embed/4pwc916s8J0', title: 'Yowamushi Pedal' },
        { src: 'Feature/slamdunkcard.png', video: 'https://www.youtube.com/embed/CbK6Yy4f4zY', title: 'Slam Dunk' },
        { src: 'Feature/freedivecard.png', video: 'https://www.youtube.com/embed/iLUZd5e_9vs', title: 'Free' },
        { src: 'Feature/aoashicard.jpg', video: 'https://www.youtube.com/embed/UdKoCImaUeQ', title: 'Aoashi' },
        { src: 'Feature/bluelockcard.jpg', video: 'https://www.youtube.com/embed/IVsII3dLbWc?start=1', title: 'Blue Lock' },
        { src: 'Feature/megaloboxcard.jpg', video: 'https://www.youtube.com/embed/gVxLZityaR0', title: 'MEGALOBOX' },
        { src: 'Feature/sk8card.jpg', video: 'https://www.youtube.com/embed/vuoYi-1rCA4', title: 'SK8 the Infinity' },
        { src: 'Feature/eyeshieldcard.jpg', video: 'https://www.youtube.com/embed/IYgnjsihha4', title: 'Eyeshield' },
        { src: 'Feature/ahirunosoracard.jpg', video: 'https://www.youtube.com/embed/rsqxACPa8EU', title: 'Ahiru no Sora' },
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