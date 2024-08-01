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
        { src: 'Feature/goldenwindcard.png', video: 'https://www.youtube.com/embed/Ubve8INYEws', title: 'Golden Wind' },
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
        //Adventure
        { src: 'Feature/fairytailcard.png', video: 'https://www.youtube.com/embed/mAAKPx-ndAg', title: 'Fairy Tail', episode: '328 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6DQDD3WR/fairy-tail', genre: 'Adventure', season: '3 Seasons' },
        { src: 'Feature/drstonecard.png', video: 'https://www.youtube.com/embed/S6OmSIxSj14', title: 'Dr. Stone', episode: '35 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYEXQKJG6/dr-stone', genre: 'Adventure', season: '4 Seasons' },
        { src: 'Feature/frierencard.png', video: 'https://www.youtube.com/embed/pqUZaKn7flw', title: 'Frieren', episode: '28 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XQX4/frieren-beyond-journeys-end', genre: 'Adventure', season: '1 Seasons' },
        { src: 'Feature/yuyucard.png', video: 'https://www.youtube.com/embed/bGc1Na8mlw0', title: 'Yuyu Hakusho', episode: '112 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR9PKENW6/yu-yu-hakusho', genre: 'Adventure', season: '3 Seasons' },
        { src: 'Feature/fullmetalcard.png', video: 'https://www.youtube.com/embed/kx0nBaS_q50', title: 'Full Metal Alchemist', episode: '94 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRGGPG93R/fullmetal-alchemist-brotherhood', genre: 'Adventure', season: '1 Seasons' },
        { src: 'Feature/goldenkamuycard.png', video: 'https://www.youtube.com/embed/Qqy7MCK4GeI', title: 'Golden Kamuy', episode: '49 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY8DWQN5Y/golden-kamuy', genre: 'Adventure', season: '1 Seasons' },
        { src: 'Feature/goldenwindcard.png', video: 'https://www.youtube.com/embed/Ubve8INYEws', title: 'Golden Wind', episode: '158 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYP8DP1MY/jojos-bizarre-adventure', genre: 'Adventure', season: '6 Seasons' },
        { src: 'Feature/hxhcard.png', video: 'https://www.youtube.com/embed/d6kBeJjTGnY', title: 'Hunter X Hunter', episode: '148 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY3VKX1MR/hunter-x-hunter', genre: 'Adventure', season: '1 Seasons' },
        { src: 'Feature/somalicard.png', video: 'https://www.youtube.com/embed/Xfw57amXb8Q', title: 'Somali', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G60X5KMPR/somali-and-the-forest-spirit', genre: 'Adventure', season: '1 Seasons' },
        { src: 'Feature/onepiececard.png', video: 'https://www.youtube.com/embed/TbHtbzAnZJ4', title: 'One Piece', episode: '1,110 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece', genre: 'Adventure', season: '25 Seasons' },
        { src: 'Feature/marksmancard.png', video: 'https://www.youtube.com/embed/u6Pm0tDeGQQ', title: 'Lord Marksman', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYWEZN1NY/lord-marksman-and-vanadis', genre: 'Adventure', season: '1 Seasons' },
        { src: 'Feature/chroniclecard.png', video: 'https://www.youtube.com/embed/wcwHx5NTJFo', title: 'Chain Chronicle', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY8VQJM0Y/chain-chronicle---the-light-of-haecceitas', genre: 'Adventure', season: '2 Seasons' },
        { src: 'Feature/mydaughtercard.png', video: 'https://www.youtube.com/embed/hnhdx8TQ4UU', title: 'My Daughter Left', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G5PHNM9M5/my-daughter-left-the-nest-and-returned-an-s-rank-adventurer', genre: 'Adventure', season: '1 Seasons' },
        { src: 'Feature/stabbercard.png', video: 'https://www.youtube.com/embed/1m9S8wQ3SlE', title: 'Sorcerous Stabber Orphen', episode: '49 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GJ0H7QXDW/sorcerous-stabber-orphen', genre: 'Adventure', season: '1 Seasons' },
        { src: 'Feature/magicard.png', video: 'https://www.youtube.com/embed/2E7o26G1T0c', title: 'Magi', episode: '50 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY09XN14Y/magi', genre: 'Adventure', season: '2 Seasons' },
        { src: 'Feature/borutocard.png', video: 'https://www.youtube.com/embed/nQeIObeB--8', title: 'BORUTO: NEXT GENERATIONS', episode: '293 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR75Q020Y/boruto-naruto-next-generations', genre: 'Adventure', season: '1 Seasons'  },
        { src: 'Feature/undeadcard.png', video: 'https://www.youtube.com/embed/iaYgDqydDoI', title: 'The Unwanted Undead Featurer', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GW4HM7WZQ/the-unwanted-undead-adventurer', genre: 'Adventure', season: '1 Seasons'  },
        { src: 'Feature/twincard.png', video: 'https://www.youtube.com/embed/Kt7a6ms1LmA', title: 'Twin Star Exorcists', episode: '50 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G63VM084Y/twin-star-exorcists', genre: 'Adventure', season: '1 Seasons'  },
        { src: 'Feature/narutooldcard.png', video: 'https://www.youtube.com/embed/-G9BqkgZXRA', title: 'Naruto', episode: '220 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY9PJ5KWR/naruto', genre: 'Adventure', season: '9 Seasons'  },
        { src: 'Feature/demonkingcard.png', video: 'https://www.youtube.com/embed/9qJyDlZst8c', title: 'The Misfit of Demon King Academy', episode: '36 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY243NN0R/the-misfit-of-demon-king-academy', genre: 'Adventure', season: '2 Seasons' },
        { src: 'Feature/togcard.png', video: 'https://www.youtube.com/embed/RNyClma6awo', title: 'Tower of God', episode: '14 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6J0G49DR/tower-of-god', genre: 'Adventure', season: '2 Seasons'  },
        { src: 'Feature/goblincard.png', video: 'https://www.youtube.com/embed/7qnhoB_cHSg', title: 'GOBLIN SLAYER', episode: '26 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6VDMN306/goblin-slayer', genre: 'Adventure', season: '3 Seasons'  },
        { src: 'Feature/ancientcard.png', video: 'https://www.youtube.com/embed/bNNaZdtGZVc', title: 'The Ancient Magus\'Bride', episode: '54 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRZXQJJ8Y/the-ancient-magus-bride', genre: 'Adventure', season: '4 Seasons'  },
        { src: 'Feature/triguncard.png', video: 'https://www.youtube.com/embed/AzZYXqUdp5o', title: 'Trigun Stampede', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM3PK5/trigun-stampede', genre: 'Adventure', season: '2 Seasons'  },
        { src: 'Feature/orientcard.png', video: 'https://www.youtube.com/embed/L4W_Eo6HU30', title: 'Orient', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GVDHX8PMM/orient', genre: 'Adventure', season: '1 Seasons'  },
        { src: 'Feature/shinobicard.png', video: 'https://www.youtube.com/embed/URyzSJM-_HE', title: 'Shinobi no Ittoki', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G5PHNM7KG/shinobi-no-ittoki', genre: 'Adventure', season: '1 Seasons'  },
        { src: 'Feature/digimoncard.png', video: 'https://www.youtube.com/embed/fmfR2nR_RRY', title: 'Digimon Feature', episode: '67 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYEX24PV6/digimon-adventure-2020', genre: 'Adventure', season: '1 Seasons'  },
        { src: 'Feature/questcard.png', video: 'https://www.youtube.com/embed/RrwbuwhIwbA', title: 'Dragon Quest', episode: '101 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYXM79M56/dragon-quest-the-adventure', genre: 'Adventure', season: '1 Seasons'  },
        { src: 'Feature/torikocard.png', video: 'https://www.youtube.com/embed/YZNDrITMpbw', title: 'Toriko', episode: '146 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRE5MNM06/toriko', genre: 'Adventure', season: '1 Seasons' },
        { src: 'Feature/radiantcard.png', video: 'https://www.youtube.com/embed/qZwtUu3p1zg', title: 'RADIANT', episode: '42 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6W4MEZ0R/radiant', genre: 'Adventure', season: '2 Seasons' },
        { src: 'Feature/sabikuicard.png', video: 'https://www.youtube.com/embed/1k7o4ywm6Is', title: 'SABIKUI BISCO', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G79H23V24/sabikui-bisco', genre: 'Adventure', season: '1 Seasons' },
        { src: 'Feature/edencard.png', video: 'https://www.youtube.com/embed/1Ykbdi94frI', title: 'EDENS ZERO', episode: '26 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G79H23XJJ/edens-zero', genre: 'Adventure', season: '2 Seasons' },
        { src: 'Feature/idatencard.png', video: 'https://www.youtube.com/embed/q3GbjO2NXFw', title: 'Idaten Deities', episode: '11 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G8DHV7DJ7/the-idaten-deities-know', genre: 'Adventure', season: '1 Seasons' },
        { src: 'Feature/fenacard.png', video: 'https://www.youtube.com/embed/QTtXMqgZRpg', title: 'Fena: Pirate Princess', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GZJH3DPM1/fena-pirate-princess', genre: 'Adventure', season: '1 Seasons' },
        { src: 'Feature/jormungandcard.png', video: 'https://www.youtube.com/embed/jubovSaFDec', title: 'Jormungand', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRMGWEM3R/jormungand', genre: 'Adventure', season: '1 Seasons' },
        { src: 'Feature/revengercard.png', video: 'https://www.youtube.com/embed/8mNZABPDT-A', title: 'Revenger', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G8DHV7425/revenger', genre: 'Adventure', season: '1 Seasons' },
        { src: 'Feature/sakugancard.png', video: 'https://www.youtube.com/embed/YBZCuDWjA9A', title: 'SAKUGAN', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GP5HJ800Z/sakugan', genre: 'Adventure', season: '1 Seasons' },
        { src: 'Feature/slimecard.png', video: 'https://www.youtube.com/embed/uOzwqb74K34', title: 'Reincarnated as A Slime', episode: '77 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYZJ43JMR/that-time-i-got-reincar', genre: 'Adventure', season: '6 Seasons' },
        { src: 'Feature/tsukimichicard.png', video: 'https://www.youtube.com/embed/Q7IUIZix_yw', title: 'Tsukimichi', episode: '37 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GZJH3D719/tsukimichi--moonlit-fan', genre: 'Adventure', season: '2 Seasons' },
        { src: 'Feature/mushokucard.png', video: 'https://www.youtube.com/embed/k5VxfJpzy1Q', title: 'Mushoku Tensei', episode: '49 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G24H1N3MP/mushoku-tensei-jobless-', genre: 'Adventure', season: '2 Seasons' },
        { src: 'Feature/shieldherocard.png', video: 'https://www.youtube.com/embed/rKnyi3TRznA', title: 'Shield Hero', episode: '50 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6W4QKX0R/the-rising-of-the-shiel', genre: 'Adventure', season: '3 Seasons' },
        { src: 'Feature/loghorizoncard.png', video: 'https://www.youtube.com/embed/IG1VhJ75r8k', title: 'Log Horizon', episode: '62 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRVNMG93Y/log-horizon', genre: 'Adventure', season: '3 Seasons' },
        { src: 'Feature/saocard.png', video: 'https://www.youtube.com/embed/6ohYYtxfDCg', title: 'Sword Art Online', episode: '107 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR49G9VP6/sword-art-online', genre: 'Adventure', season: '8 Seasons' },
        { src: 'Feature/campcard.png', video: 'https://www.youtube.com/embed/vpH42sJ8t9c', title: 'Laid-Back Camp', episode: '44 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRWEW95KR/laid-back-camp', genre: 'Adventure', season: '5 Seasons' },
        { src: 'Feature/solocard.png', video: 'https://www.youtube.com/embed/bssSj4cKsrI', title: 'Solo Leveling', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZEJ0K/solo-leveling', genre: 'Adventure', season: '1 Seasons' },
        { src: 'Feature/aotcard.png', video: 'https://www.youtube.com/embed/n4Nj6Y_SNYI', title: 'Attack On Titan', episode: '94 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan', genre: 'Adventure', season: '5 Seasons' },
        { src: 'Feature/shangrilacard.png', video: 'https://www.youtube.com/embed/rsTbPKiGQdo', title: 'Shangri-La Frontier', episode: '25 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G79H23Z8P/shangri-la-frontier', genre: 'Adventure', season: '1 Seasons' },
        { src: 'Feature/vinlandcard.png', video: 'https://www.youtube.com/embed/f8JrZ7Q_p-8', title: 'Vinland Saga', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3WKK0/vinland-saga', genre: 'Adventure', season: '2 Seasons' },
        { src: 'Feature/dragoncard.png', video: 'https://www.youtube.com/embed/2Vej889SS6s', title: 'Dragon Ball Super', episode: '131 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR19V7816/dragon-ball-super', genre: 'Adventure', season: '1 Seasons'  },
        { src: 'Feature/bluecard.png', video: 'https://www.youtube.com/embed/hwnpiByHi20', title: 'Blue Exorcist', episode: '49 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G649PJ0JY/blue-exorcist', genre: 'Adventure', season: '3 Seasons'  } ,   
        //Adventure
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