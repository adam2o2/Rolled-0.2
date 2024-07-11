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
        { src: 'Feature/butlercard.png', video: 'https://www.youtube.com/embed/S8j5iEklHyI', title: 'Black Butler' },
        { src: 'Feature/campcard.png', video: 'https://www.youtube.com/embed/vpH42sJ8t9c', title: 'Laid-Back Camp' },
        { src: 'Feature/blackclovercard.png', video: 'https://www.youtube.com/embed/vUjAxk1qYzQ', title: 'Black Clover' },
        { src: 'Feature/datecard.png', video: 'https://www.youtube.com/embed/AytCKBRQJu0', title: 'Date A Live' },
        { src: 'Feature/kingcard.png', video: 'https://www.youtube.com/embed/fPj-SXsUbcU', title: 'The Daily Life of...' },
        { src: 'Feature/bluecard.png', video: 'https://www.youtube.com/embed/hwnpiByHi20', title: 'Blue Exorcist' },
        { src: 'Feature/fairytailcard.png', video: 'https://www.youtube.com/embed/mAAKPx-ndAg', title: 'Fairy Tail' },
        { src: 'Feature/drstonecard.png', video: 'https://www.youtube.com/embed/S6OmSIxSj14', title: 'Dr.Stone' },
        { src: 'Feature/hxhcard.png', video: 'https://www.youtube.com/embed/d6kBeJjTGnY', title: 'Hunter x Hunter' },
        { src: 'Feature/irumacard.png', video: 'https://www.youtube.com/embed/kkeuJt0DE7g', title: 'Iruma-kun' },
        { src: 'Feature/clericcard.png', video: 'https://www.youtube.com/embed/susqUMviH_E', title: 'The Great Cleric' },
        { src: 'Feature/toradoracard.png', video: 'https://www.youtube.com/embed/ya570uUgQNc', title: 'Toradora!' },
        { src: 'Feature/zombiecard.png', video: 'https://www.youtube.com/embed/O3VO4zinUOI', title: 'Zomie Land Saga' },
        { src: 'Feature/mylittlecard.png', video: 'https://www.youtube.com/embed/SlD-8h96pDw', title: 'My little Monster' },
        { src: 'Feature/kamikatsucard.png', video: 'https://www.youtube.com/embed/MD_q7xYb-Xs', title: 'KamiKatsu' },
        { src: 'Feature/attorneycard.png', video: 'https://www.youtube.com/embed/O-tfGuZShKQ', title: 'Ace Attorney' },
        { src: 'Feature/aharencard.png', video: 'https://www.youtube.com/embed/F7bGTibgcjM', title: 'Aharen-san' },
        { src: 'Feature/cellcard.png', video: 'https://www.youtube.com/embed/HMXWvvjAJek', title: 'Cells at Work!' },
        { src: 'Feature/tsugumomocard.png', video: 'https://www.youtube.com/embed/ptCRrKccB0E', title: 'Tsugumomo' },
        { src: 'Feature/blackcard.png', video: 'https://www.youtube.com/embed/x39JYXYmQ90', title: 'The Dungeon of Black Company' },
        { src: 'Feature/tyrantcard.png', video: 'https://www.youtube.com/embed/ixAK3zJpbwE', title: 'Love Tyrant' },
        { src: 'Feature/hinamatsuricard.png', video: 'https://www.youtube.com/embed/1oTxGJcx04Q', title: 'Hinamatsuri' },
        { src: 'Feature/beelzebubcard.png', video: 'https://www.youtube.com/embed/5lyYR7StfrQ', title: 'Beelzebub' },
        { src: 'Feature/tiscard.png', video: 'https://www.youtube.com/embed/--EXveSl_0k', title: 'Tis Time for Torture, Princess' },
        { src: 'Feature/desertcard.png', video: 'https://www.youtube.com/embed/XMCqw1vxMnY', title: 'Desert Punk' },
        { src: 'Feature/bakemonogataricard.png', video: 'https://www.youtube.com/embed/PugZi9QKL64', title: 'Bakemonogatari' },
        { src: 'Feature/osomatsucard.png', video: 'https://www.youtube.com/embed/_imsKXx0Stk', title: 'Mr. Osomatsu' },
        { src: 'Feature/highschoolcard.png', video: 'https://www.youtube.com/embed/BsQj0RYzW98', title: 'Daily Lives of High School Boys' },
        { src: 'Feature/mierukocard.png', video: 'https://www.youtube.com/embed/oW2dO_T-9jA', title: 'Mieruko-chan' },
        { src: 'Feature/hiddencard.png', video: 'https://www.youtube.com/embed/LAuF6RZYTc0', title: 'The Hidden Dungeon Only I Can Enter' },
        { src: 'Feature/tonikawacard.png', video: 'https://www.youtube.com/embed/3M7w-ROU62U', title: 'Tonikawa: Over the Moon for You' },
        { src: 'Feature/godofhighschoolcard.png', video: 'https://www.youtube.com/embed/oqjwUfprNAk', title: 'The God of High School' },
        { src: 'Feature/dragoncard.png', video: 'https://www.youtube.com/embed/okBHQWnYImg', title: 'Miss Kobayashi\'s Dragon Maid' },
        { src: 'Feature/bungocard.png', video: 'https://www.youtube.com/embed/pYDv2ZR25GE', title: 'Bungo Stray Dogs' },
        { src: 'Feature/fruitbasketcard.png', video: 'https://www.youtube.com/embed/g5MDFMukmUI', title: 'Fruits Basket' }

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
