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
        { src: 'Feature/vendingmachinecard.png', video: 'https://www.youtube.com/embed/mMOzW_UEdvg', title: 'Reborn as A Vending...' },
        { src: 'Feature/yourmomcard.png', video: 'https://www.youtube.com/embed/8qoBfi8REs0', title: 'Do You Love Your...' },
        { src: 'Feature/demonlordcard.png', video: 'https://www.youtube.com/embed/V0gQ4N6Y4bI', title: 'Demon Lord, Retry!' },
        { src: 'Feature/summoncard.png', video: 'https://www.youtube.com/embed/hodocFdl5O8', title: 'How Not to Summon...' },
        { src: 'Feature/restaurantcard.png', video: 'https://www.youtube.com/embed/j_4JaXWk1a4', title: 'Restaurant to Another...' },
        { src: 'Feature/anothercard.png', video: 'https://www.youtube.com/embed/A1ll0D9J6II', title: 'In Another World...' },
        { src: 'Feature/knightcard.png', video: 'https://www.youtube.com/embed/vR9N0c_SFAY', title: 'Knight’s & Magic' },
        { src: 'Feature/realistcard.png', video: 'https://www.youtube.com/embed/M_pWteehKzM', title: 'How a Realist...' },
        { src: 'Feature/millioncard.png', video: 'https://www.youtube.com/embed/U26Up23GGDk', title: 'Im Standing on a...' },
        { src: 'Feature/gracecard.png', video: 'https://www.youtube.com/embed/ylms3zzyfuA', title: 'By the Grace of the Gods' },
        { src: 'Feature/assassincard.png', video: 'https://www.youtube.com/embed/2Poci60rWzg', title: 'The Worlds Finest...' },
        { src: 'Feature/cheatcard.png', video: 'https://www.youtube.com/embed/NH_lYSh38N8', title: 'Isekai Cheat Magician' },
        { src: 'Feature/ascendancecard.png', video: 'https://www.youtube.com/embed/Wo28IopG2WE', title: 'Ascendance of a Bookworm' },
        { src: 'Feature/deathcard.png', video: 'https://www.youtube.com/embed/L4VW38PLuOc', title: 'Death March to the...' },
        { src: 'Feature/wisecard.png', video: 'https://www.youtube.com/embed/gy-78Y-chds', title: 'Wise Mans Grandchild' },
        { src: 'Feature/seireicard.png', video: 'https://www.youtube.com/embed/KS7dinNk_z4', title: 'Seirei Gensouki' },
        { src: 'Feature/grimgarcard.png', video: 'https://www.youtube.com/embed/aR0UcWq_JrY', title: 'Grimgar, Ashes and Illusions' },
        { src: 'Feature/ambitioncard.png', video: 'https://www.youtube.com/embed/_Q-qoxLfk48', title: 'The Ambition of Oda Nobuna' },
        { src: 'Feature/conceptioncard.png', video: 'https://www.youtube.com/embed/8jUGg1yjmLU', title: 'Conception' },
        { src: 'Feature/mastercard.png', video: 'https://www.youtube.com/embed/mVd2HX5oVRk', title: 'The Master of Ragnarok...' },
        { src: 'Feature/highcard.png', video: 'https://www.youtube.com/embed/QSFXJzpEpqs', title: 'High School Prodigies...' },
        { src: 'Feature/sweetcard.png', video: 'https://www.youtube.com/embed/uPYEALVBhI8', title: 'Sweet Reincarnation' },
        { src: 'Feature/reincarnationcard.png', video: 'https://www.youtube.com/embed/NNrCwPAj1IY', title: 'The Reincarnation of...' },
        { src: 'Feature/didntcard.png', video: 'https://www.youtube.com/embed/39XpskL3jic', title: 'Didnt I Say to...' },
        { src: 'Feature/irumacard.png', video: 'https://www.youtube.com/embed/kkeuJt0DE7g', title: 'Welcome to Demon...' },
        { src: 'Feature/chillincard.png', video: 'https://www.youtube.com/embed/IwxaZRkXdps', title: 'Chillin in Another...' },
        { src: 'Feature/skeletoncard.png', video: 'https://www.youtube.com/embed/dPzd8VNbQQI', title: 'Skeleton Knight...' },
        { src: 'Feature/drugcard.png', video: 'https://www.youtube.com/embed/reOfMXg3kqs', title: 'Drug Store in...' },
        { src: 'Feature/endridecard.png', video: 'https://www.youtube.com/embed/4yzMnwxt3yQ', title: 'Endride' },
        { src: 'Feature/campfirecard.png', video: 'https://www.youtube.com/embed/JaxjIDezSBQ', title: 'Campfire Cooking in...' },
        { src: 'Feature/saintcard.png', video: 'https://www.youtube.com/embed/JwsnFH4XRsU', title: 'The Saints Magic...' },
        { src: 'Feature/meijicard.png', video: 'https://www.youtube.com/embed/F1LDCFKTbqU', title: 'Meiji Tokyo Renka' },
        { src: 'Feature/collectioncard.png', video: 'https://www.youtube.com/embed/kUcgIqI0_kE', title: 'Sengoku Collection' },
        { src: 'Feature/sengokucard.png', video: 'https://www.youtube.com/embed/fAYhdawxFwc', title: 'SENGOKU NIGHT BLOOD' },
        { src: 'Feature/problemcard.png', video: 'https://www.youtube.com/embed/qQpOcHsMUnA', title: 'Problem Children Are...' },
        { src: 'Feature/tobecard.png', video: 'https://www.youtube.com/embed/z2WARBz4QXc', title: 'To Be Heroine' }
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
        //Isekai
        { src: 'Feature/mushokucard.png', video: 'https://www.youtube.com/embed/k5VxfJpzy1Q', title: 'Mushoku Tensei', episode: '23 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G24H1N3MP/mushoku-tensei-jobless-reincarnation', genre: 'Isekai', season: '2 Seasons' },
        { src: 'Feature/nogamenolifecard.png', video: 'https://www.youtube.com/embed/ZgWgnSG9PB0', title: 'No Game No Life', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/overlordcard.png', video: 'https://www.youtube.com/embed/uhlBqFj9kDw', title: 'OverLord', episode: '52 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G69PZ5PDY/overlord', genre: 'Isekai', season: '5 Seasons' },
        { src: 'Feature/rezerocard.png', video: 'https://www.youtube.com/embed/lXs3yIc_2CU', title: 'Re:Zero', episode: '50 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/', genre: 'Isekai', season: '4 Seasons' },
        { src: 'Feature/sagaoftanyacard.png', video: 'https://www.youtube.com/embed/V8Gx2_sHMRI', title: 'Saga of Tanya', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR9P57W96/saga-of-tanya-the-evil', genre: 'Isekai', season: '3 Seasons' },
        { src: 'Feature/saocard.png', video: 'https://www.youtube.com/embed/6ohYYtxfDCg', title: 'Sword Art Online', episode: '96 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR49G9VP6/sword-art-online', genre: 'Isekai', season: '8 Seasons' },
        { src: 'Feature/shieldherocard.png', video: 'https://www.youtube.com/embed/rKnyi3TRznA', title: 'Shield Hero', episode: '38 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6W4QKX0R/the-rising-of-the-shield-hero', genre: 'Isekai', season: '3 Seasons' },
        { src: 'Feature/slimecard.png', video: 'https://www.youtube.com/embed/uOzwqb74K34', title: 'Reincarnated as A Slime', episode: '48 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYZJ43JMR/that-time-i-got-reincarnated-as-a-slime', genre: 'Isekai', season: '6 Seasons' },
        { src: 'Feature/tsukimichicard.png', video: 'https://www.youtube.com/embed/Q7IUIZix_yw', title: 'Tsukimichi', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GZJH3D719/tsukimichi--moonlit-fantasy-', genre: 'Isekai', season: '2 Seasons' },
        { src: 'Feature/konosubacard.png', video: 'https://www.youtube.com/embed/5h4rQY9bpgE', title: 'Konosuba', episode: '20 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYE5K3GQR/konosuba--gods-blessing-on-this-wonderful-world', genre: 'Isekai', season: '4 Seasons' },
        { src: 'Feature/devilisaparttimercard.png', video: 'https://www.youtube.com/embed/9eCFxxQ4WE0', title: 'Devil is a Part Timer', episode: '26 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR75Z5KKY/the-devil-is-a-part-timer', genre: 'Isekai', season: '2 Seasons' },
        { src: 'Feature/loghorizoncard.png', video: 'https://www.youtube.com/embed/IG1VhJ75r8k', title: 'Log Horizon', episode: '62 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRVNMG93Y/log-horizon', genre: 'Isekai', season: '3 Seasons' },
        { src: 'Feature/blacksummonercard.png', video: 'https://www.youtube.com/embed/m3W8sZhn3-o', title: 'Black Summoner', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GVDHX8JJE/black-summoner', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/spidercard.png', video: 'https://www.youtube.com/embed/geMv8Lwk2sM', title: 'So What im a Spider', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G79H23G0D/so-im-a-spider-so-what', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/vendingmachinecard.png', video: 'https://www.youtube.com/embed/mMOzW_UEdvg', title: 'Reborn as A Vending Machine', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GVDHX8504/reborn-as-a-vending-machine-i-now-wander-the-dungeon', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/yourmomcard.png', video: 'https://www.youtube.com/embed/8qoBfi8REs0', title: 'Do You Love Your...', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6J0EEP0R/do-you-love-your-mom-and-her-two-hit-multi-target-attacks', genre: 'Isekai', season: '13 Seasons' },
        { src: 'Feature/demonlordcard.png', video: 'https://www.youtube.com/embed/V0gQ4N6Y4bI', title: 'Demon Lord, Retry!', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM37KD/demon-lord-retry', genre: 'Isekai', season: '2 Seasons' },
        { src: 'Feature/summoncard.png', video: 'https://www.youtube.com/embed/hodocFdl5O8', title: 'How Not to Summon a Demon Lord', episode: '22 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYZJXWWGR/how-not-to-summon-a-demon-lord', genre: 'Isekai', season: '2 Seasons' },
        { src: 'Feature/restaurantcard.png', video: 'https://www.youtube.com/embed/j_4JaXWk1a4', title: 'Restaurant to Another World', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR49493P6/restaurant-to-another-world', genre: 'Isekai', season: '2 Seasons' },
        { src: 'Feature/anothercard.png', video: 'https://www.youtube.com/embed/A1ll0D9J6II', title: 'In Another World...', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYQ4ZWV46/in-another-world-with-my-smartphone', genre: 'Isekai', season: '2 Seasons' },
        { src: 'Feature/knightcard.png', video: 'https://www.youtube.com/embed/vR9N0c_SFAY', title: 'Knights & Magic', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYX08020R/knights--magic', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/realistcard.png', video: 'https://www.youtube.com/embed/M_pWteehKzM', title: 'How a Realist...', episode: '26 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJV3MV/how-a-realist-hero-rebuilt-the-kingdom', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/millioncard.png', video: 'https://www.youtube.com/embed/U26Up23GGDk', title: 'Im Standing on a Million Lives', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6Q9GGE26/im-standing-on-a-million-lives', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/gracecard.png', video: 'https://www.youtube.com/embed/ylms3zzyfuA', title: 'By the Grace of the Gods', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GP5HJ85ED/by-the-grace-of-the-gods', genre: 'Isekai', season: '2 Seasons' },
        { src: 'Feature/assassincard.png', video: 'https://www.youtube.com/embed/2Poci60rWzg', title: 'The Worlds Finest...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GMEHME55K/the-worlds-finest-assassin-gets-reincarnated-in-another-world-as-an-aristocrat', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/cheatcard.png', video: 'https://www.youtube.com/embed/NH_lYSh38N8', title: 'Isekai Cheat...', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY79GJX1R/isekai-cheat-magician', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/ascendancecard.png', video: 'https://www.youtube.com/embed/Wo28IopG2WE', title: 'Ascendance of a Bookworm', episode: '36 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6793XKZY/ascendance-of-a-bookworm', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/deathcard.png', video: 'https://www.youtube.com/embed/L4VW38PLuOc', title: 'Death March to...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6K50XJ7Y/death-march-to-the-parallel-world-rhapsody', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/wisecard.png', video: 'https://www.youtube.com/embed/gy-78Y-chds', title: 'Wise Mans Grandchild', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G63K95846/wise-mans-grandchild', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/seireicard.png', video: 'https://www.youtube.com/embed/KS7dinNk_z4', title: 'Seirei Gensouki', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G0XHWM380/seirei-gensouki-spirit-chronicles', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/grimgarcard.png', video: 'https://www.youtube.com/embed/aR0UcWq_JrY', title: 'Grimgar, Ashes and Illusions', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRVNX917Y/grimgar-ashes-and-illusions', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/ambitioncard.png', video: 'https://www.youtube.com/embed/_Q-qoxLfk48', title: 'The Ambition...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6JQK7D5R/the-ambition-of-oda-nobuna', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/conceptioncard.png', video: 'https://www.youtube.com/embed/8jUGg1yjmLU', title: 'Conception', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR1XQ92VR/conception', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/mastercard.png', video: 'https://www.youtube.com/embed/mVd2HX5oVRk', title: 'The Master of Ragnarok...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6NVQ59XY/the-master-of-ragnarok--blesser-of-einherjar', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/highcard.png', video: 'https://www.youtube.com/embed/QSFXJzpEpqs', title: 'High School Prodigies...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYXJKGDN6/high-school-prodigies-have-it-easy-even-in-another-world', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/sweetcard.png', video: 'https://www.youtube.com/embed/uPYEALVBhI8', title: 'Sweet Reincarnation', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GJ0H7QG2G/sweet-reincarnation', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/reincarnationcard.png', video: 'https://www.youtube.com/embed/NNrCwPAj1IY', title: 'The Reincarnation of...', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJVWXG/the-reincarnation-of-the-strongest-exorcist-in-another-world', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/didntcard.png', video: 'https://www.youtube.com/embed/39XpskL3jic', title: 'Didnt I Say to...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G679305JY/didnt-i-say-to-make-my-abilities-average-in-the-next-life', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/irumacard.png', video: 'https://www.youtube.com/embed/kkeuJt0DE7g', title: 'Welcome to Demon...', episode: '65 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3W2PK/chillin-in-another-world-with-level-2-super-cheat-powers', genre: 'Isekai', season: '3 Seasons' },
        { src: 'Feature/chillincard.png', video: 'https://www.youtube.com/embed/IwxaZRkXdps', title: 'Chillin in Another...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3W2PK/chillin-in-another-world-with-level-2-super-cheat-powers', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/skeletoncard.png', video: 'https://www.youtube.com/embed/dPzd8VNbQQI', title: 'Skeleton Knight...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G8DHV7WJP/skeleton-knight-in-another-world', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/drugcard.png', video: 'https://www.youtube.com/embed/reOfMXg3kqs', title: 'Drug Store in...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZEN80/drug-store-in-another-world---the-slow-life-of-a-cheat-pharmacist', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/endridecard.png', video: 'https://www.youtube.com/embed/4yzMnwxt3yQ', title: 'Endride', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G649D0KPY/endride', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/campfirecard.png', video: 'https://www.youtube.com/embed/JaxjIDezSBQ', title: 'Campfire Cooking in...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5X3EE/campfire-cooking-in-another-world-with-my-absurd-skill', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/saintcard.png', video: 'https://www.youtube.com/embed/JwsnFH4XRsU', title: 'The Saints Magic...', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJV3P3/the-saints-magic-power-is-omnipotent', genre: 'Isekai', season: '2 Seasons' },
        { src: 'Feature/meijicard.png', video: 'https://www.youtube.com/embed/F1LDCFKTbqU', title: 'Meiji Tokyo Renka', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR4PD7WQY/meiji-tokyo-renka', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/collectioncard.png', video: 'https://www.youtube.com/embed/kUcgIqI0_kE', title: 'Sengoku Collection', episode: '26 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR3VW7XM6/sengoku-collection-parallel-world-samurai', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/sengokucard.png', video: 'https://www.youtube.com/embed/fAYhdawxFwc', title: 'SENGOKU NIGHT BLOOD', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G65VGXVQ6/sengoku-night-blood', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/problemcard.png', video: 'https://www.youtube.com/embed/qQpOcHsMUnA', title: 'Problem Children...', episode: '10 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6Q49G21R/problem-children-are-coming-from-another-world-arent-they', genre: 'Isekai', season: '1 Seasons' },
        { src: 'Feature/tobecard.png', video: 'https://www.youtube.com/embed/z2WARBz4QXc', title: 'To Be Heroine', episode: '7 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G63KVV3E6/to-be-heroine', genre: 'Isekai', season: '1 Seasons' },
        //Isekai
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