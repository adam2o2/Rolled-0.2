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
    const background = document.getElementById('background');
    let selectedBox = null;

    const featureImages = [
        { src: 'Feature/jjkcard.png', video: 'https://www.youtube.com/embed/pkKu9hLT-t8', title: 'Jujutsu Kaisen' },
        { src: 'Feature/mhacard.png', video: 'https://www.youtube.com/embed/zw5QhH3-1lI', title: 'My Hero Academia' },
        { src: 'Feature/akamecard.png', video: 'https://www.youtube.com/embed/NIeKMKwON0U', title: 'Akame Ga Kill' },
        { src: 'Feature/aotcard.png', video: 'https://www.youtube.com/embed/n4Nj6Y_SNYI', title: 'Attack on Titan' },
        { src: 'Feature/demonslayercard.png', video: 'https://www.youtube.com/embed/Sl2k7bfBeCw', title: 'Demon Slayer' },
        { src: 'Feature/fatecard.png', video: 'https://www.youtube.com/embed/nfzKXkL_i54', title: 'Fate Stay Night' },
        { src: 'Feature/fireforcecard.png', video: 'https://www.youtube.com/embed/fzM43HZ6oeg', title: 'Fire Force' },
        { src: 'Feature/godofhighschoolcard.png', video: 'https://www.youtube.com/embed/oqjwUfprNAk', title: 'God of High School' },
        { src: 'Feature/opmcard.png', video: 'https://www.youtube.com/embed/YUH1mfV3IEU', title: 'One Punch Man' },
        { src: 'Feature/vinlandcard.png', video: 'https://www.youtube.com/embed/f8JrZ7Q_p-8', title: 'Vinland Saga' }
        // Add other images and their corresponding videos and titles here
    ];

    function getRandomIndex(max) {
        return Math.floor(Math.random() * max);
    }

    function changeFeature() {
        const index = getRandomIndex(featureImages.length);
        const selectedImage = featureImages[index];

        featureImage.src = selectedImage.src;
        videoIframe.src = selectedImage.video;
        document.querySelector('.text1 h1').textContent = selectedImage.title;

        // Change background image dynamically
        background.style.backgroundImage = `url(${selectedImage.src})`;

        // Set selectedBox based on the currently displayed feature image
        selectedBox = [...yellowBoxes].find(box => box.getAttribute('data-feature') === selectedImage.src);
    }

    // Initialize on page load
    changeFeature();

    // Function to handle click on yellow boxes
    function handleYellowBoxClick() {
        const backgroundUrl = this.getAttribute('data-background');
        const featureUrl = this.getAttribute('data-feature');
        const actionUrl = this.getAttribute('data-action');
        const videoUrl = this.getAttribute('data-video');
        const title = this.getAttribute('data-title');

        background.style.backgroundImage = `url(${backgroundUrl})`;
        featureImage.src = featureUrl;
        videoIframe.src = videoUrl;
        document.querySelector('.text1 h1').textContent = title;

        // Set the selectedBox to the current box clicked
        selectedBox = this;
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
                videoIframe.style.width = '1666.47px';
                videoIframe.style.height = '801px';
                videoIframe.style.display = 'block';
            } else {
                videoIframe.style.display = 'none';
            }
        }
    });

    document.body.addEventListener('click', function(event) {
        if (!videoIframe.contains(event.target)) {
            videoIframe.style.display = 'none';
            videoIframe.src = '';
        }
    });
});