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
        { src: 'Feature/dukecard.png', video: 'https://www.youtube.com/embed/55T_YNvgBbE', title: 'The Duke of Death' },
        { src: 'Feature/asigncard.png', video: 'https://www.youtube.com/embed/v50CI8LVwEY', title: 'A Sign of Affection' },
        { src: 'Feature/dressupcard.png', video: 'https://www.youtube.com/embed/8oveGY6h6T8', title: 'My Dress-Up Darling' },
        { src: 'Feature/nagatorocard.png', video: 'https://www.youtube.com/embed/6dVQ93xBYUg', title: 'NAGATORO' },
        { src: 'Feature/tonikawacard.png', video: 'https://www.youtube.com/embed/97wksuHdnF4', title: 'TONIKAWA' },        
        { src: 'Feature/girlfriendcard.png', video: 'https://www.youtube.com/embed/1foV8Fh0WRc', title: 'Girlfriend Girlfriend' },
        { src: 'Feature/cuckooscard.png', video: 'https://www.youtube.com/embed/4dhHnE_Jsbo', title: 'A Couple of Cuckoos' },
        { src: 'Feature/quintupletscard.png', video: 'https://www.youtube.com/embed/ILDps6CfIwI', title: 'Quintessential Quintuplets' },
        { src: 'Feature/morethancard.png', video: 'https://www.youtube.com/embed/rL60dbSWgtE', title: 'More than a Married Couple' },
        { src: 'Feature/bunnygirlcard.png', video: 'https://www.youtube.com/embed/tGJTrM9RphQ', title: 'Bunny Girl Senpai' },
        { src: 'Feature/kindomcard.png', video: 'https://www.youtube.com/embed/bYudboNENqs', title: 'Kindom' },
        { src: 'Feature/hinomarucard.png', video: 'https://www.youtube.com/embed/Gxq9uR6EMd0', title: 'Hinomaru Sumo' },
        { src: 'Feature/taktcard.png', video: 'https://www.youtube.com/embed/mv_SJoJY7sA', title: 'takt op.Destiny' },
        { src: 'Feature/akudamacard.png', video: 'https://www.youtube.com/embed/H2vRwrLyzQM', title: 'Akudama Drive' },
        { src: 'Feature/vinlandcard.png', video: 'https://www.youtube.com/embed/f8JrZ7Q_p-8', title: 'The Irregular' }
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
