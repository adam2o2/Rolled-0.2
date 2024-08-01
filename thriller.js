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
        //Thriller
        { src: 'Feature/erasedcard.png', video: 'https://www.youtube.com/embed/dky7my5xd2c', title: 'Erased', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYGG92K7Y/erased', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/futurediarycard.png', video: 'https://www.youtube.com/embed/KfznTm8mJA4', title: 'Future Diary', episode: '26 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYGGXPQ2Y/the-future-diary', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/hellsingcard.png', video: 'https://www.youtube.com/embed/7CQKMDFAKMk', title: 'Hellsing', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G649DPXQY/hellsing', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/paranoiaagentcard.png', video: 'https://www.youtube.com/embed/QEsNDDwhSJ4', title: 'Paranoia Agent', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G5PHNMW8E/paranoia-agent', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/psychopasscard.png', video: 'https://www.youtube.com/embed/YzuJnyebc40', title: 'Psycho-Pass', episode: '22 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR75253JY/psycho-pass', genre: 'Thriller', season: '5 Seasons' },
        { src: 'Feature/terrorinresonancecard.png', video: 'https://www.youtube.com/embed/aiZrjeZvF8Y', title: 'Terror in...', episode: '11 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G675W00MR/terror-in-resonance', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/thepromisedneverlandcard.png', video: 'https://www.youtube.com/embed/5llQ56toiPs', title: 'The Promised Neverland', episode: '23 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYVD2K1WY/the-promised-neverland', genre: 'Thriller', season: '2 Seasons' },
        { src: 'Feature/tokyoghoulcard.png', video: 'https://www.youtube.com/embed/vGuQeQsoRgU', title: 'Tokyo Ghoul', episode: '50 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6NV7Z50Y/tokyo-ghoul', genre: 'Thriller', season: '4 Seasons' },
        { src: 'Feature/tomodachicard.png', video: 'https://www.youtube.com/embed/y-hPQ0-orMM', title: 'Tomodachi Game', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GJ0H7QX0Z/tomodachi-game', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/parasytecard.png', video: 'https://www.youtube.com/embed/xWtUMR1BveU', title: 'Parasyte', episode: '24 Episodes', rollcrunchyrollLink: 'https://crunchyroll.com/series/G6K53VGGY/parasyte--the-maxim-', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/deathparadecard.png', video: 'https://www.youtube.com/embed/8ziUXV6t0ow', title: 'Death Parade', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6GGXKNE6/death-parade', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/detectiveconancard.png', video: 'https://www.youtube.com/embed/mz3b6Ym8s6s', title: 'Detective Conan', episode: '1,056 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6JQVM3ER/case-closed-detective-conan', genre: 'Thriller', season: '2 Seasons' },
        { src: 'Feature/kabanericard.png', video: 'https://www.youtube.com/embed/lQ9VjFBqfH8', title: 'Kabaneri', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR24GX896/kabaneri-of-the-iron-fortress', genre: 'Thriller', season: '2 Seasons' },
        { src: 'Feature/inspectrecard.png', video: 'https://www.youtube.com/embed/l9QsM6PeTV4', title: 'In/Spectre', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYZJEEQGR/inspectre', genre: 'Thriller', season: '2 Seasons' },
        { src: 'Feature/deadmanwonderlandcard.png', video: 'https://www.youtube.com/embed/0OjJiQ_tB6k', title: 'Deadman Wonderland', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRX02EZ06/deadman-wonderland', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/roncard.png', video: 'https://www.youtube.com/embed/f8eyItevwLI', title: "Ron Kamonohashi's...", episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN903/ron-kamonohashis-forbidden-deductions', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/anotherrcard.png', video: 'https://www.youtube.com/embed/N2iSnFwt9do', title: 'Another', episode: '12 Episodes', rollcrunchyrollLink: 'https://crunchyroll.com/series/GR09X52WR/another', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/gleipnircard.png', video: 'https://www.youtube.com/embed/QzQ1sDFUJiA', title: 'Gleipnir', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G9VHN9P7W/gleipnir', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/detectivecard.png', video: 'https://www.youtube.com/embed/N2iSnFwt9do', title: 'The Detective Is Already Dead', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G24H1N334/the-detective-is-already-dead', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/eggcard.png', video: 'https://www.youtube.com/embed/zJ4yP7Icclc', title: 'WONDER EGG...', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM372Z/wonder-egg-priority', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/rokkacard.png', video: 'https://www.youtube.com/embed/KLOtrSOeO10', title: 'Rokka', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRVNEXKXY/rokka--braves-of-the-six-flowers-', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/battlecard.png', video: 'https://www.youtube.com/embed/hWnSZnkjZa4', title: 'Battle Game...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G8DHV7DG7/battle-game-in-5-seconds', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/puellacard.png', video: 'https://www.youtube.com/embed/XLzlHZTfGeI', title: 'Puella Magi...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRDQK39GY/puella-magi-madoka-magica', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/classroomcard.png', video: 'https://www.youtube.com/embed/iYsx6w5PNno', title: 'Classroom of...', episode: '38 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRVN8MNQY/classroom-of-the-elite', genre: 'Thriller', season: '3 Seasons' },
        { src: 'Feature/loveofcard.png', video: 'https://www.youtube.com/embed/QOe5sSs5fmI', title: 'Love of Kill', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G0XHWM0XW/love-of-kill', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/steinscard.png', video: 'https://www.youtube.com/embed/MKfTpK2U9Z4', title: 'Steins;Gate 0', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYWE7W5GY/steinsgate', genre: 'Thriller', season: '2 Seasons' },
        { src: 'Feature/millionairecard.png', video: 'https://www.youtube.com/embed/an6QA92h_5o', title: 'The Millionaire Detective', episode: '11 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GP5HJ855D/the-millionaire-detective---balance-unlimited', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/dancecard.png', video: 'https://www.youtube.com/embed/fp6qRTvCTuw', title: 'Dance in the...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6QWGNN76/dance-in-the-vampire-bund', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/abandonedcard.png', video: 'https://www.youtube.com/embed/bWM32ukSlTY', title: 'To the Abandoned...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRW459Z8Y/to-the-abandoned-sacred-beasts', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/pandoracard.png', video: 'https://www.youtube.com/embed/9Psc_hBkOoc', title: 'PandoraHearts', episode: '25 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR751Q2ZY/pandorahearts', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/darwincard.png', video: 'https://www.youtube.com/embed/_cLxzQoNVpo', title: "Darwin's Game", episode: '11 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G61X24PZ6/darwins-game', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/gibiatecard.png', video: 'https://www.youtube.com/embed/rU6HjgMIIBs', title: 'GIBIATE', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR3K2EXXR/gibiate', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/phantomcard.png', video: 'https://www.youtube.com/embed/-NfKJZvT_64', title: 'Phantom in the...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G63KVZV46/phantom-in-the-twilight', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/jokercard.png', video: 'https://www.youtube.com/embed/9uzrn5QzNWc', title: 'JOKER GAME', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY8VXP2JY/joker-game', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/schoolcard.png', video: 'https://www.youtube.com/embed/ZG1Q6N5L-fo', title: 'School Days', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G62P4MG76/school-days', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/gankutsuoucard.png', video: 'https://www.youtube.com/embed/nCCHjKzPzTY', title: 'Gankutsuou', episode: '24 Episodes', rollcrunchyrollLink: 'https://crunchyroll.com/series/G6MG10376/gankutsuou', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/moriartycard.png', video: 'https://www.youtube.com/embed/zDX2dfLqhjo', title: 'Moriarty the Patriot', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM379D/moriarty-the-patriot', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/junjicard.png', video: 'https://www.youtube.com/embed/sV0LIpvJ97s', title: 'Junji Ito Collection', episode: '13 Episodes', rollcrunchyrollLink: 'https://crunchyroll.com/series/G68V4NDJ6/junji-ito-collection', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/kingscard.png', video: 'https://www.youtube.com/embed/VDT9gIVGwK4', title: "King's Game", episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY8V73KJY/kings-game', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/invadedcard.png', video: 'https://www.youtube.com/embed/nc7Y0BvEYQk', title: 'ID: INVADED', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G79H230GE/id-invaded', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/bakecard.png', video: 'https://www.youtube.com/embed/PugZi9QKL64', title: 'Bakemonogatari', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G69PXP1EY/bakemonogatari', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/totalcard.png', video: 'https://www.youtube.com/embed/maAC_u1kpaU', title: 'Total Eclipse', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY8VDPKGY/total-eclipse', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/bigcard.png', video: 'https://www.youtube.com/embed/FVOdep-vEjU', title: 'BIG ORDER', episode: '10 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6VNEV0QR/big-order', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/gardencard.png', video: 'https://www.youtube.com/embed/JSTMtdv119c', title: 'The Garden of Sinners', episode: '10 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6DK07N7R/the-garden-of-sinners', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/evilcard.png', video: 'https://www.youtube.com/embed/z2ggBRm97GA', title: 'EVIL OR LIVE', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6E5098GY/evil-or-live', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/chaoscard.png', video: 'https://www.youtube.com/embed/NRquuySnm68', title: 'CHAOS;CHILD', episode: '14 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR497ZW36/chaoschild', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/p4card.png', video: 'https://www.youtube.com/embed/PnvAj2XyL-k', title: 'Persona4', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR9P3GND6/persona4-the-golden-animation', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/accacard.png', video: 'https://www.youtube.com/embed/_lSK9EYLCP4', title: 'ACCA', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR5V95N8R/acca-13-territory-inspection-dept', genre: 'Thriller', season: '2 Seasons' },
        { src: 'Feature/gacard.png', video: 'https://www.youtube.com/embed/NG0Sfkm1D9U', title: 'Ga-Rei-Zero', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6ZXZD93R/ga-rei-zero', genre: 'Thriller', season: '1 Seasons' },
        { src: 'Feature/strangecard.png', video: 'https://www.youtube.com/embed/aAZ6kSyUf-E', title: 'Strange+', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRGGVKZWR/strange', genre: 'Thriller', season: '2 Seasons' },
        //Thriller
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