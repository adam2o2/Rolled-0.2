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
        { src: 'Feature/fairytailcard.png', video: 'https://www.youtube.com/embed/mAAKPx-ndAg', title: 'Fairy Tail' },
        { src: 'Feature/drstonecard.png', video: 'https://www.youtube.com/embed/S6OmSIxSj14', title: 'Dr. Stone' },
        { src: 'Feature/frierencard.png', video: 'https://www.youtube.com/embed/pqUZaKn7flw', title: 'Frieren' },
        { src: 'Feature/yuyucard.png', video: 'https://www.youtube.com/embed/bGc1Na8mlw0', title: 'Yuyu Hakusho' },
        { src: 'Feature/fullmetalcard.png', video: 'https://www.youtube.com/embed/kx0nBaS_q50', title: 'Full Metal Alchemist' },        
        { src: 'Feature/goldenkamuycard.png', video: 'https://www.youtube.com/embed/Qqy7MCK4GeI', title: 'Golden Kamuy' },
        { src: 'Feature/goldenwindcard.png', video: 'https://www.youtube.com/embed/fvSKmPdD2a4', title: 'Golden Wind' },
        { src: 'Feature/hxhcard.png', video: 'https://www.youtube.com/embed/d6kBeJjTGnY', title: 'Hunter X Hunter' },
        { src: 'Feature/somalicard.png', video: 'https://www.youtube.com/embed/Xfw57amXb8Q', title: 'Somali' },
        { src: 'Feature/onepiececard.png', video: 'https://www.youtube.com/embed/TbHtbzAnZJ4', title: 'One Piece' },
        { src: 'Feature/marksmancard.png', video: 'https://www.youtube.com/embed/u6Pm0tDeGQQ', title: 'Lord Marksman' },
        { src: 'Feature/chroniclecard.png', video: 'https://www.youtube.com/embed/wcwHx5NTJFo', title: 'Chain Chronicle' },
        { src: 'Feature/mydaughtercard.png', video: 'https://www.youtube.com/embed/hnhdx8TQ4UU', title: 'My Daughter Left' },
        { src: 'Feature/stabbercard.png', video: 'https://www.youtube.com/embed/1m9S8wQ3SlE', title: 'Sorcerous Stabber Orphen' },
        { src: 'Feature/magicard.png', video: 'https://www.youtube.com/embed/2E7o26G1T0c', title: 'Magi' },
        { src: 'Feature/borutocard.png', video: 'https://www.youtube.com/embed/nQeIObeB--8', title: 'BORUTO: NEXT GENERATIONS' },
        { src: 'Feature/undeadcard.png', video: 'https://www.youtube.com/embed/iaYgDqydDoI', title: 'The Unwanted Undead Featurer' },
        { src: 'Feature/twincard.png', video: 'https://www.youtube.com/embed/Kt7a6ms1LmA', title: 'Twin Star Exorcists' },
        { src: 'Feature/narutooldcard.png', video: 'https://www.youtube.com/embed/-G9BqkgZXRA', title: 'Naruto' },
        { src: 'Feature/demonkingcard.png', video: 'https://www.youtube.com/embed/9qJyDlZst8c', title: 'The Misfit of Demon King Academy' },
        { src: 'Feature/togcard.png', video: 'https://www.youtube.com/embed/RNyClma6awo', title: 'Tower of God' },
        { src: 'Feature/goblincard.png', video: 'https://www.youtube.com/embed/7qnhoB_cHSg', title: 'GOBLIN SLAYER' },
        { src: 'Feature/ancientcard.png', video: 'https://www.youtube.com/embed/bNNaZdtGZVc', title: 'The Ancient Magus\' Bride' },
        { src: 'Feature/triguncard.png', video: 'https://www.youtube.com/embed/AzZYXqUdp5o', title: 'Trigun Stampede' },
        { src: 'Feature/orientcard.png', video: 'https://www.youtube.com/embed/L4W_Eo6HU30', title: 'Orient' },
        { src: 'Feature/shinobicard.png', video: 'https://www.youtube.com/embed/URyzSJM-_HE', title: 'Shinobi no Ittoki' },
        { src: 'Feature/digimoncard.png', video: 'https://www.youtube.com/embed/fmfR2nR_RRY', title: 'Digimon Feature' },
        { src: 'Feature/questcard.png', video: 'https://www.youtube.com/embed/RrwbuwhIwbA', title: 'Dragon Quest' },
        { src: 'Feature/torikocard.png', video: 'https://www.youtube.com/embed/YZNDrITMpbw', title: 'Toriko' },
        { src: 'Feature/radiantcard.png', video: 'https://www.youtube.com/embed/qZwtUu3p1zg', title: 'RADIANT' },
        { src: 'Feature/sabikuicard.png', video: 'https://www.youtube.com/embed/1k7o4ywm6Is', title: 'SABIKUI BISCO' },
        { src: 'Feature/edencard.png', video: 'https://www.youtube.com/embed/1Ykbdi94frI', title: 'EDENS ZERO' },
        { src: 'Feature/idatencard.png', video: 'https://www.youtube.com/embed/q3GbjO2NXFw', title: 'Idaten Deities' },
        { src: 'Feature/fenacard.png', video: 'https://www.youtube.com/embed/QTtXMqgZRpg', title: 'Fena: Pirate Princess' },
        { src: 'Feature/jormungandcard.png', video: 'https://www.youtube.com/embed/jubovSaFDec', title: 'Jormungand' },
        { src: 'Feature/revengercard.png', video: 'https://www.youtube.com/embed/8mNZABPDT-A', title: 'Revenger' },
        { src: 'Feature/sakugancard.png', video: 'https://www.youtube.com/embed/YBZCuDWjA9A', title: 'SAKUGAN' },
        { src: 'Feature/slimecard.png', video: 'https://www.youtube.com/embed/uOzwqb74K34', title: 'Reincarnated as A Slime' },
        { src: 'Feature/tsukimichicard.png', video: 'https://www.youtube.com/embed/Q7IUIZix_yw', title: 'Tsukimichi' },
        { src: 'Feature/mushokucard.png', video: 'https://www.youtube.com/embed/k5VxfJpzy1Q', title: 'Mushoku Tensei' },
        { src: 'Feature/shieldherocard.png', video: 'https://www.youtube.com/embed/rKnyi3TRznA', title: 'Shield Hero' },
        { src: 'Feature/loghorizoncard.png', video: 'https://www.youtube.com/embed/IG1VhJ75r8k', title: 'Log Horizon' },
        { src: 'Feature/saocard.png', video: 'https://www.youtube.com/embed/6ohYYtxfDCg', title: 'Sword Art Online' },
        { src: 'Feature/campcard.png', video: 'https://www.youtube.com/embed/vpH42sJ8t9c', title: 'Laid-Back Camp' },
        { src: 'Feature/solocard.png', video: 'https://www.youtube.com/embed/bssSj4cKsrI', title: 'Solo Leveling' },
        { src: 'Feature/aotcard.png', video: 'https://www.youtube.com/embed/n4Nj6Y_SNYI', title: 'Attack On Titan' },
        { src: 'Feature/shangrilacard.png', video: 'https://www.youtube.com/embed/rsTbPKiGQdo', title: 'Shangri-La Frontier' },
        { src: 'Feature/vinlandcard.png', video: 'https://www.youtube.com/embed/f8JrZ7Q_p-8', title: 'Vinland Saga' },
        { src: 'Feature/dragonballcard.png', video: 'https://www.youtube.com/embed/2Vej889SS6s', title: 'Dragon Ball Super' },
        { src: 'Feature/bluecard.png', video: 'https://www.youtube.com/embed/hwnpiByHi20', title: 'Blue Exorcist' }


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
            videoIframe.style.display = 'block';
            videoIframe.style.position = 'fixed';
            videoIframe.style.top = '50%';
            videoIframe.style.left = '50%';
            videoIframe.style.transform = 'translate(-50%, -50%)';
            videoOverlay.style.display = 'block'; // Show overlay
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