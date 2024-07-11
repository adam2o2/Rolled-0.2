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
        { src: 'Feature/summoncard.png', video: 'https://www.youtube.com/embed/hodocFdl5O8', title: 'How Not to Summon a Demon Lord' },
        { src: 'Feature/restaurantcard.png', video: 'https://www.youtube.com/embed/j_4JaXWk1a4', title: 'Restaurant to Another World' },
        { src: 'Feature/anothercard.png', video: 'https://www.youtube.com/embed/A1ll0D9J6II', title: 'In Another World...' },
        { src: 'Feature/knightcard.png', video: 'https://www.youtube.com/embed/vR9N0c_SFAY', title: 'Knight’s & Magic' },
        { src: 'Feature/realistcard.png', video: 'https://www.youtube.com/embed/M_pWteehKzM', title: 'How a Realist Hero Rebuilt the Kingdom' },
        { src: 'Feature/millioncard.png', video: 'https://www.youtube.com/embed/U26Up23GGDk', title: 'Im Standing on a Million Lives' },
        { src: 'Feature/gracecard.png', video: 'https://www.youtube.com/embed/ylms3zzyfuA', title: 'By the Grace of the Gods' },
        { src: 'Feature/assassincard.png', video: 'https://www.youtube.com/embed/2Poci60rWzg', title: 'The Worlds Finest...' },
        { src: 'Feature/cheatcard.png', video: 'https://www.youtube.com/embed/NH_lYSh38N8', title: 'Isekai Cheat Magician' },
        { src: 'Feature/ascendancecard.png', video: 'https://www.youtube.com/embed/Wo28IopG2WE', title: 'Ascendance of a Bookworm' },
        { src: 'Feature/deathcard.png', video: 'https://www.youtube.com/embed/L4VW38PLuOc', title: 'Death March to the Parallel World Rhapsody' },
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