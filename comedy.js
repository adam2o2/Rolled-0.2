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

// Developer / Roll / About Popup

    //Developer
    document.addEventListener("DOMContentLoaded", function() {
        const developerSpan = document.querySelector(".ribbon-right span:nth-child(1)");
        const developerPopupBox = document.getElementById("developer-popup");
        const overlay = document.getElementById("overlay");
        
        developerSpan.addEventListener("click", function() {
        developerPopupBox.style.display = "block";
        overlay.style.display = "block";
        });
        
        overlay.addEventListener("click", function() {
        developerPopupBox.style.display = "none";
        overlay.style.display = "none";
        });
        });
    
        //Roll
        document.addEventListener("DOMContentLoaded", function() {
        const rollSpan = document.querySelector(".ribbon-right span:nth-child(2)");
        const popupBox = document.getElementById("roll-popup");
        const overlay = document.getElementById("overlay");
        
        rollSpan.addEventListener("click", function() {
        popupBox.style.display = "block";
        overlay.style.display = "block";
        });
        
        
        overlay.addEventListener("click", function() {
        popupBox.style.display = "none";
        overlay.style.display = "none";
        });
        });
    
    
    
    
        //About
        document.addEventListener("DOMContentLoaded", function() {
        const aboutSpan = document.querySelector(".ribbon-right span:nth-child(3)");
        const popupBox = document.getElementById("popup-box");
        const overlay = document.getElementById("overlay");
        
        aboutSpan.addEventListener("click", function() {
        popupBox.style.display = "block";
        overlay.style.display = "block";
        });
        
        
        overlay.addEventListener("click", function() {
        popupBox.style.display = "none";
        overlay.style.display = "none";
        });
        });
    //Roll random anime

    document.addEventListener("DOMContentLoaded", function() {
        const rollSpan = document.querySelector(".ribbon-right span:nth-child(2)");
        const popupBox = document.getElementById("roll-popup");
        const overlay = document.getElementById("overlay");
        const rollImage = document.getElementById("roll-image");
        const rollImage1 = document.getElementById("roll-image1");
        const rollImage2 = document.getElementById("roll-image2");
        const rollImage3 = document.getElementById("roll-image3");
        const rollImage4 = document.getElementById("roll-image4");
        const rollCrunchyrollButton1 = document.getElementById("roll-crunchyroll-button-1");
        const rollCrunchyrollButton2 = document.getElementById("roll-crunchyroll-button-2");
        const rollTitle = document.getElementById("roll-title");
        const rollGenre = document.getElementById("roll-genre");
        const rollSeason = document.getElementById("roll-season");
        const rollEpisode = document.getElementById("roll-episode");
        const videoIframe = document.getElementById('video-iframe');
        const videoOverlay = document.getElementById('video-overlay1');
    
        const images = [
        //Comedy
        { src: 'Feature/bucchigiricard.png', video: 'https://www.youtube.com/embed/Kw6JkejW_Hw', title: 'BUCCHIGIRI?!', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G5PHNM985/bucchigiri', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/buddycard.png', video: 'https://www.youtube.com/embed/Oqxm1mn917g', title: 'Buddy Daddies', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5X3DE/buddy-daddies', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/combatantscard.png', video: 'https://www.youtube.com/embed/-uJdqz-fBl8', title: 'Combatants Will...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GQWH0M98E/combatants-will-be-dispatched', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/ghostcard.png', video: 'https://www.youtube.com/embed/kOi5SpwDQR4', title: 'Ghost Stories', episode: '20 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6MGP0K46/ghost-stories', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/gintamacard.png', video: 'https://www.youtube.com/embed/Eh43PgDfSxU', title: 'Gintama', episode: '328 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYQ4MKDZ6/gintama', genre: 'Comedy', season: '8 Seasons' },
        { src: 'Feature/grandbluecard.png', video: 'https://www.youtube.com/embed/YILULCpNg9U', title: 'Grand Blue', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR097JN7R/grand-blue', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/gurrencard.png', video: 'https://www.youtube.com/embed/rAQylCHv8Cw', title: 'Gurren Lagann', episode: '27 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR097JN7R/gurren-lagann', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/konosubacard.png', video: 'https://www.youtube.com/embed/N1AO7k2o78g', title: 'Konosuba', episode: '20 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYE5K3GQR/konosuba--gods-blessing-on-this-wonderful-world', genre: 'Comedy', season: '4 Seasons' },
        { src: 'Feature/mashlecard.png', video: 'https://www.youtube.com/embed/_ce5_P1Hj5A', title: 'Mashle', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZEP8W/mashle-magic-and-muscles', genre: 'Comedy', season: '2 Seasons' },
        { src: 'Feature/mobcard.png', video: 'https://www.youtube.com/embed/nTze7vAdRpM', title: 'Mob Psycho 100', episode: '39 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY190DKQR/mob-psycho-100', genre: 'Comedy', season: '4 Seasons' },
        { src: 'Feature/nichijoucard.png', video: 'https://www.youtube.com/embed/0AEV-8d_vbg', title: 'Nichijou', episode: '26 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR24PVM76/nichijou---my-ordinary-life', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/pickupcard.png', video: 'https://www.youtube.com/embed/Nk23ix2xgTg', title: 'Is It Wrong to Try...', episode: '37 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6DQN9KGR/is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon', genre: 'Comedy', season: '2 Seasons' },
        { src: 'Feature/robocard.png', video: 'https://www.youtube.com/embed/M0X4J1jpApw', title: 'ME & ROBOCO', episode: '20 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GKEH2G031/me--roboco', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/spacedandycard.png', video: 'https://www.youtube.com/embed/S4qW86moTys', title: 'Space Dandy', episode: '26 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G63K4W296/space-dandy', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/spyxfamilycard.png', video: 'https://www.youtube.com/embed/6sosTNRw_uQ', title: 'Spy x Family', episode: '37 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G4PH0WXVJ/spy-x-family', genre: 'Comedy', season: '2 Seasons' },
        { src: 'Feature/butlercard.png', video: 'https://www.youtube.com/embed/S8j5iEklHyI', title: 'Black Butler', episode: '65 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYQ43P3E6/black-butler', genre: 'Comedy', season: '6 Seasons' },
        { src: 'Feature/campcard.png', video: 'https://www.youtube.com/embed/vpH42sJ8t9c', title: 'Laid-Back Camp', episode: '44 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRWEW95KR/laid-back-camp', genre: 'Comedy', season: '5 Seasons' },
        { src: 'Feature/blackclovercard.png', video: 'https://www.youtube.com/embed/vUjAxk1qYzQ', title: 'Black Clover', episode: '171 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRE50KV36/black-clover', genre: 'Comedy', season: '4 Seasons' },
        { src: 'Feature/datecard.png', video: 'https://www.youtube.com/embed/AytCKBRQJu0', title: 'Date A Live', episode: '60 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GZJH3DJ8E/date-a-live', genre: 'Comedy', season: '7 Seasons' },
        { src: 'Feature/kingcard.png', video: 'https://www.youtube.com/embed/fPj-SXsUbcU', title: 'The Daily Life of...', episode: '51 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GZJH3DJ8E/the-daily-life-of-the-immortal-king', genre: 'Comedy', season: '4 Seasons' },
        { src: 'Feature/bluecard.png', video: 'https://www.youtube.com/embed/hwnpiByHi20', title: 'Blue Exorcist', episode: '49 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G649PJ0JY/blue-exorcist', genre: 'Comedy', season: '3 Seasons' },
        { src: 'Feature/fairytailcard.png', video: 'https://www.youtube.com/embed/mAAKPx-ndAg', title: 'Fairy Tail', episode: '329 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6DQDD3WR/fairy-tail', genre: 'Comedy', season: '3 Seasons' },
        { src: 'Feature/drstonecard.png', video: 'https://www.youtube.com/embed/S6OmSIxSj14', title: 'Dr.Stone', episode: '59 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYEXQKJG6/dr-stone', genre: 'Comedy', season: '4 Seasons' },
        { src: 'Feature/hxhcard.png', video: 'https://www.youtube.com/embed/d6kBeJjTGnY', title: 'Hunter x Hunter', episode: '148 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY3VKX1MR/hunter-x-hunter', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/irumacard.png', video: 'https://www.youtube.com/embed/kkeuJt0DE7g', title: 'Iruma-kun', episode: '65 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6NVG970Y/welcome-to-demon-school-iruma-kun', genre: 'Comedy', season: '3 Seasons' },
        { src: 'Feature/clericcard.png', video: 'https://www.youtube.com/embed/susqUMviH_E', title: 'The Great Cleric', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XQ24/the-great-cleric', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/toradoracard.png', video: 'https://www.youtube.com/embed/ya570uUgQNc', title: 'Toradora!', episode: '25 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6P8PXJW6/toradora', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/zombiecard.png', video: 'https://www.youtube.com/embed/O3VO4zinUOI', title: 'Zombie Land Saga', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRJ0K7X5Y/zombie-land-saga', genre: 'Comedy', season: '2 Seasons' },
        { src: 'Feature/mylittlecard.png', video: 'https://www.youtube.com/embed/SlD-8h96pDw', title: 'My little Monster', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6MG8P1W6/my-little-monster', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/kamikatsucard.png', video: 'https://www.youtube.com/embed/MD_q7xYb-Xs', title: 'KamiKatsu', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKNP4J/kamikatsu-working-', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/attorneycard.png', video: 'https://www.youtube.com/embed/O-tfGuZShKQ', title: 'Ace Attorney', episode: '47 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYE5K0XVR/ace-attorney', genre: 'Comedy', season: '2 Seasons' },
        { src: 'Feature/aharencard.png', video: 'https://www.youtube.com/embed/F7bGTibgcjM', title: 'Aharen-san', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN72N/aharen-san-wa-haka', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/cellcard.png', video: 'https://www.youtube.com/embed/HMXWvvjAJek', title: 'Cells at Work!', episode: '22 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR3KVPQER/cells-at-work', genre: 'Comedy', season: '2 Seasons' },
        { src: 'Feature/tsugumomocard.png', video: 'https://www.youtube.com/embed/ptCRrKccB0E', title: 'Tsugumomo', episode: '25 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G675QE8JR/tsugumomo', genre: 'Comedy', season: '3 Seasons' },
        { src: 'Feature/blackcard.png', video: 'https://www.youtube.com/embed/x39JYXYmQ90', title: 'The Dungeon of Black Company', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GP5HJ85WM/the-dungeon-of-black', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/tyrantcard.png', video: 'https://www.youtube.com/embed/ixAK3zJpbwE', title: 'Love Tyrant', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6NQ59GG6/love-tyrant', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/hinamatsuricard.png', video: 'https://www.youtube.com/embed/1oTxGJcx04Q', title: 'Hinamatsuri', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR79PWJ16/hinamatsuri', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/beelzebubcard.png', video: 'https://www.youtube.com/embed/5lyYR7StfrQ', title: 'Beelzebub', episode: '60 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6GG5KQ86/beelzebub', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/tiscard.png', video: 'https://www.youtube.com/embed/--EXveSl_0k', title: 'Tis Time for Torture, Princess', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJV0KV/tis-time-for-torture', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/desertcard.png', video: 'https://www.youtube.com/embed/XMCqw1vxMnY', title: 'Desert Punk', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR9P7MP06/desert-punk', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/bakemonogataricard.png', video: 'https://www.youtube.com/embed/PugZi9QKL64', title: 'Bakemonogatari', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G69PXP1EY/bakemonogatari', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/osomatsucard.png', video: 'https://www.youtube.com/embed/_imsKXx0Stk', title: 'Mr. Osomatsu', episode: '84 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYQ4Q3DP6/mr-osomatsu', genre: 'Comedy', season: '4 Seasons' },
        { src: 'Feature/highschoolcard.png', video: 'https://www.youtube.com/embed/BsQj0RYzW98', title: 'Daily Lives of High School Boys', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6X0K0N7Y/daily-lives-of-high', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/mierukocard.png', video: 'https://www.youtube.com/embed/oW2dO_T-9jA', title: 'Mieruko-chan', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3WK52/mieruko-chan', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/hiddencard.png', video: 'https://www.youtube.com/embed/LAuF6RZYTc0', title: 'The Hidden Dungeon Only I Can Enter', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G3KHEV5QQ/the-hidden-dungeon', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/tonikawacard.png', video: 'https://www.youtube.com/embed/3M7w-ROU62U', title: 'Tonikawa: Over the Moon for You', episode: '31 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRWMGGQ86/tonikawa-over-the-', genre: 'Comedy', season: '3 Seasons' },
        { src: 'Feature/godofhighschoolcard.png', video: 'https://www.youtube.com/embed/oqjwUfprNAk', title: 'The God of High School', episode: '14 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRVD0ZDQR/the-god-of-high-sc', genre: 'Comedy', season: '1 Seasons' },
        { src: 'Feature/dragoncard.png', video: 'https://www.youtube.com/embed/okBHQWnYImg', title: 'Miss Kobayashi\'s Dragon Maid', episode: '43 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6497Z43Y/miss-kobayashis-dr', genre: 'Comedy', season: '3 Seasons' },
        { src: 'Feature/bungocard.png', video: 'https://www.youtube.com/embed/pYDv2ZR25GE', title: 'Bungo Stray Dogs', episode: '62 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR5VXQ8PR/bungo-stray-dogs', genre: 'Comedy', season: '6 Seasons' },
        { src: 'Feature/fruitsbasketcard.png', video: 'https://www.youtube.com/embed/g5MDFMukmUI', title: 'Fruits Basket', episode: '64 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6ZJMGEXY/fruits-basket', genre: 'Comedy', season: '4 Seasons' }
        //Comedy
        ];
    
        let currentIndex = 0;

        function updateCarousel() {
            const nextIndex = (currentIndex + 1) % images.length;
            const nextIndex2 = (nextIndex + 1) % images.length;
            const nextIndex3 = (nextIndex2 + 1) % images.length;
            const nextIndex4 = (nextIndex3 + 1) % images.length;

            rollImage.src = images[nextIndex2].src;
            rollImage1.src = images[nextIndex3].src;
            rollImage2.src = images[nextIndex].src;
            rollImage3.src = images[nextIndex4].src;
            rollImage4.src = images[currentIndex].src;

            const centralImage = images[nextIndex2];
            rollTitle.textContent = centralImage.title;
            rollGenre.textContent = centralImage.genre;
            rollSeason.textContent = `${centralImage.season}`;
            rollEpisode.textContent = `${centralImage.episode}`;
            rollCrunchyrollButton1.href = centralImage.rollcrunchyrollLink;
            rollCrunchyrollButton2.href = centralImage.rollcrunchyrollLink;

            currentIndex = nextIndex;

            rollImage.classList.add('roll-image');
            rollImage1.classList.add('roll-image1');
            rollImage2.classList.add('roll-image2');
            rollImage3.classList.add('roll-image3');
            rollImage4.classList.add('roll-image4');

            setTimeout(() => {
                rollImage.classList.remove('roll-image');
                rollImage1.classList.remove('roll-image1');
                rollImage2.classList.remove('roll-image2');
                rollImage3.classList.remove('roll-image3');
                rollImage4.classList.remove('roll-image4');
            }, 500);
        }

        function spinAndSelectRandomAnime() {
            const interval = setInterval(updateCarousel, 100);
            setTimeout(() => {
                clearInterval(interval);

                // Select a random anime from the images array
                const randomIndex = Math.floor(Math.random() * images.length);
                currentIndex = (randomIndex - 2 + images.length) % images.length; // Adjust to set central image

                updateCarousel();
            }, 2000); // Spins for 2 seconds
        }

        document.getElementById("roll-crunchyroll-button-2").addEventListener("click", function() {
            spinAndSelectRandomAnime();
        });

        overlay.addEventListener("click", function() {
            popupBox.style.display = "none";
            overlay.style.display = "none";
            videoOverlay.style.display = 'none';
            videoIframe.style.display = 'none';
            videoIframe.src = '';
            document.body.style.overflow = 'auto';
        });

        function playVideo(videoUrl) {
            if (videoUrl) {
                videoIframe.src = videoUrl;
                videoIframe.style.display = 'block';
                videoOverlay.style.display = 'block';
                document.body.style.overflow = 'hidden';

                if (window.innerWidth <= 414) {
                    videoIframe.style.width = '391px';
                    videoIframe.style.height = '221px';
                } else {
                    videoIframe.style.width = '1666.47px';
                    videoIframe.style.height = '801px';
                }
            } else {
                videoIframe.style.display = 'none';
            }
        }

        rollImage.addEventListener('click', function() {
            const videoUrl = images[(currentIndex + 1) % images.length].video;
            playVideo(videoUrl);
            rollCrunchyrollButton1.href = images[(currentIndex + 1) % images.length].rollcrunchyrollLink;
        });

        videoOverlay.addEventListener('click', function() {
            videoIframe.style.display = 'none';
            videoIframe.src = '';
            videoOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });