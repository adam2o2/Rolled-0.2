// Function to load random romance anime
function loadRandomRomanceAnime() {
    redBoxes.forEach(box => {
        if (romanceImages.length === 0) {
            console.log('No more unique romance anime images available.');
            return;
        }

        const index = getRandomIndex(romanceImages.length);
        const selectedAnime = romanceImages[index];

        const imageElement = box.querySelector('.box-image');
        const titleElement = box.querySelector('.title');
        const episodesElement = box.querySelector('.episodes');

        // Set image source, alt text, title, and episodes
        imageElement.src = `Romance/${selectedAnime.src}`;
        imageElement.alt = selectedAnime.title;
        titleElement.textContent = selectedAnime.title;
        episodesElement.textContent = selectedAnime.episodes;

        // Set the data-video-url attribute to the video URL
        box.setAttribute('data-video-url', selectedAnime.video);

        // Remove the selected anime from romanceImages array to avoid duplicates
        romanceImages.splice(index, 1);
    });
}

// Call the function to load random romance anime on page load
loadRandomRomanceAnime();

// Log a message to confirm script execution
console.log('Romance anime script executed successfully.');

// Function to play video
function playVideo(videoUrl) {
    if (videoUrl) {
        videoIframe.src = videoUrl;
        videoIframe.style.display = 'block';
        videoOverlay.style.display = 'flex'; // Show overlay
        document.body.style.overflow = 'hidden'; // Disable scrolling

        if (window.innerWidth <= 414) {
            // Mobile styles
            videoIframe.style.width = '391px';
            videoIframe.style.height = '221px';
        } else {
            // Desktop styles
            videoIframe.style.width = '1666.47px';
            videoIframe.style.height = '801px';
        }
    } else {
        videoIframe.style.display = 'none';
        videoOverlay.style.display = 'none'; // Hide overlay
        document.body.style.overflow = 'auto'; // Enable scrolling
    }
}

// Add event listener to red boxes
redBoxes.forEach(box => {
    box.addEventListener('click', function() {
        const videoUrl = this.getAttribute('data-video-url');
        playVideo(videoUrl);
    });
});

// Add event listener to video overlay to close the video
videoOverlay.addEventListener('click', function() {
    playVideo(null);
});
