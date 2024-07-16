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
        { src: 'Feature/erasedcard.png', video: 'https://www.youtube.com/embed/dky7my5xd2c', title: 'Erased' },
        { src: 'Feature/futurediarycard.png', video: 'https://www.youtube.com/embed/KfznTm8mJA4', title: 'Future Diary' },
        { src: 'Feature/hellsingcard.png', video: 'https://www.youtube.com/embed/7CQKMDFAKMk', title: 'Hellsing' },
        { src: 'Feature/paranoiaagentcard.png', video: 'https://www.youtube.com/embed/QEsNDDwhSJ4', title: 'Paranoia Agent' },
        { src: 'Feature/psychopasscard.png', video: 'https://www.youtube.com/embed/YzuJnyebc40', title: 'Psycho-Pass' },
        { src: 'Feature/terrorinresonancecard.png', video: 'https://www.youtube.com/embed/aiZrjeZvF8Y', title: 'Terror in Resonance' },
        { src: 'Feature/thepromisedneverlandcard.png', video: 'https://www.youtube.com/embed/5llQ56toiPs', title: 'The Promised Neverland' },
        { src: 'Feature/tokyoghoulcard.png', video: 'https://www.youtube.com/embed/vGuQeQsoRgU', title: 'Tokyo Ghoul' },
        { src: 'Feature/tomodachicard.png', video: 'https://www.youtube.com/embed/y-hPQ0-orMM', title: 'Tomodachi Game' },
        { src: 'Feature/parasytecard.png', video: 'https://www.youtube.com/embed/xWtUMR1BveU', title: 'Parasyte -the maxim-' },
        { src: 'Feature/deathparadecard.png', video: 'https://www.youtube.com/embed/8ziUXV6t0ow', title: 'Death Parade' },
        { src: 'Feature/detectiveconancard.png', video: 'https://www.youtube.com/embed/mz3b6Ym8s6s', title: 'Detective Conan' },
        { src: 'Feature/kabanericard.png', video: 'https://www.youtube.com/embed/lQ9VjFBqfH8', title: 'Kabaneri' },
        { src: 'Feature/inspectrecard.png', video: 'https://www.youtube.com/embed/l9QsM6PeTV4', title: 'In/Spectre' },
        { src: 'Feature/deadmanwonderlandcard.png', video: 'https://www.youtube.com/embed/0OjJiQ_tB6k', title: 'Deadman Wonderland' },
        { src: 'Feature/roncard.png', video: 'https://www.youtube.com/embed/f8eyItevwLI', title: 'Ron Kamonohashis...' },
        { src: 'Feature/anotherrcard.png', video: 'https://www.youtube.com/embed/N2iSnFwt9do', title: 'Another' },
        { src: 'Feature/gleipnircard.png', video: 'https://www.youtube.com/embed/QzQ1sDFUJiA', title: 'Gleipnir' },
        { src: 'Feature/detectivecard.png', video: 'https://www.youtube.com/embed/N2iSnFwt9do', title: 'The Detective Is...' },
        { src: 'Feature/eggcard.png', video: 'https://www.youtube.com/embed/zJ4yP7Icclc', title: 'WONDER EGG...' },
        { src: 'Feature/rokkacard.png', video: 'https://www.youtube.com/embed/KLOtrSOeO10', title: 'Rokka' },
        { src: 'Feature/battlecard.png', video: 'https://www.youtube.com/embed/hWnSZnkjZa4', title: 'Battle Game...' },
        { src: 'Feature/puellacard.png', video: 'https://www.youtube.com/embed/XLzlHZTfGeI', title: 'Puella Magi...' },
        { src: 'Feature/classroomcard.png', video: 'https://www.youtube.com/embed/iYsx6w5PNno', title: 'Classroom of...' },
        { src: 'Feature/loveofcard.png', video: 'https://www.youtube.com/embed/QOe5sSs5fmI', title: 'Love of Kill' },
        { src: 'Feature/steinscard.png', video: 'https://www.youtube.com/embed/MKfTpK2U9Z4', title: 'Steins;Gate 0' },
        { src: 'Feature/millionairecard.png', video: 'https://www.youtube.com/embed/an6QA92h_5o', title: 'The Millionaire Detective' },
        { src: 'Feature/dancecard.png', video: 'https://www.youtube.com/embed/fp6qRTvCTuw', title: 'Dance in the Vampire Bund' },
        { src: 'Feature/abandonedcard.png', video: 'https://www.youtube.com/embed/bWM32ukSlTY', title: 'To the Abandoned Sacred Beasts' },
        { src: 'Feature/pandoracard.png', video: 'https://www.youtube.com/embed/9Psc_hBkOoc', title: 'PandoraHearts' },
        { src: 'Feature/darwincard.png', video: 'https://www.youtube.com/embed/_cLxzQoNVpo', title: 'Darwin\'s Game' },
        { src: 'Feature/gibiatecard.png', video: 'https://www.youtube.com/embed/rU6HjgMIIBs', title: 'GIBIATE' },
        { src: 'Feature/phantomcard.png', video: 'https://www.youtube.com/embed/-NfKJZvT_64', title: 'Phantom in the Twilight' },
        { src: 'Feature/jokercard.png', video: 'https://www.youtube.com/embed/9uzrn5QzNWc', title: 'JOKER GAME' },
        { src: 'Feature/schoolcard.png', video: 'https://www.youtube.com/embed/ZG1Q6N5L-fo', title: 'School Days' },
        { src: 'Feature/gankutsuoucard.png', video: 'https://www.youtube.com/embed/nCCHjKzPzTY', title: 'Gankutsuou' },
        { src: 'Feature/moriartycard.png', video: 'https://www.youtube.com/embed/zDX2dfLqhjo', title: 'Moriarty the Patriot' },
        { src: 'Feature/junjicard.png', video: 'https://www.youtube.com/embed/sV0LIpvJ97s', title: 'Junji Ito' },
        { src: 'Feature/kingscard.png', video: 'https://www.youtube.com/embed/VDT9gIVGwK4', title: "King's Game" },
        { src: 'Feature/invadedcard.png', video: 'https://www.youtube.com/embed/nc7Y0BvEYQk', title: 'ID: INVADED' },
        { src: 'Feature/bakecard.png', video: 'https://www.youtube.com/embed/PugZi9QKL64', title: 'Bakemonogatari' },
        { src: 'Feature/totalcard.png', video: 'https://www.youtube.com/embed/mAAC_u1kpaU', title: 'Total Eclipse' },
        { src: 'Feature/bigcard.png', video: 'https://www.youtube.com/embed/FVOdep-vEjU', title: 'BIG ORDER' },
        { src: 'Feature/gardencard.png', video: 'https://www.youtube.com/embed/JSTMtdv119c', title: 'The Garden of Sinners' },
        { src: 'Feature/evilcard.png', video: 'https://www.youtube.com/embed/z2ggBRm97GA', title: 'EVIL OR LIVE' },
        { src: 'Feature/chaoscard.png', video: 'https://www.youtube.com/embed/NRquuySnm68', title: 'CHAOS;CHILD' },
        { src: 'Feature/p4card.png', video: 'https://www.youtube.com/embed/PnvAj2XyL-k', title: 'Persona4' },
        { src: 'Feature/accacard.png', video: 'https://www.youtube.com/embed/_lSK9EYLCP4', title: 'ACCA' },
        { src: 'Feature/gacard.png', video: 'https://www.youtube.com/embed/NG0Sfkm1D9U', title: 'Ga-Rei-Zero' },
        { src: 'Feature/strangecard.png', video: 'https://www.youtube.com/embed/aAZ6kSyUf-E', title: 'Strange+' }
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

// Developer & About Popup
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