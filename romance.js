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
        { src: 'Feature/dukecard.png', video: 'https://www.youtube.com/embed/55T_YNvgBbE', title: 'The Duke of Death' },
        { src: 'Feature/asigncard.png', video: 'https://www.youtube.com/embed/v50CI8LVwEY', title: 'A Sign of Affection' },
        { src: 'Feature/dressupcard.png', video: 'https://www.youtube.com/embed/8oveGY6h6T8', title: 'My Dress-Up Darling' },
        { src: 'Feature/nagatorocard.png', video: 'https://www.youtube.com/embed/DbTbFCkIdss', title: 'NAGATORO' },
        { src: 'Feature/tonikawacard.png', video: 'https://www.youtube.com/embed/97wksuHdnF4', title: 'TONIKAWA' },        
        { src: 'Feature/girlfriendcard.png', video: 'https://www.youtube.com/embed/1foV8Fh0WRc', title: 'Girlfriend Girlfriend' },
        { src: 'Feature/cuckooscard.png', video: 'https://www.youtube.com/embed/4dhHnE_Jsbo', title: 'A Couple of Cuckoos' },
        { src: 'Feature/quintupletscard.png', video: 'https://www.youtube.com/embed/ILDps6CfIwI', title: 'Quintessential Quintuplets' },
        { src: 'Feature/morethancard.png', video: 'https://www.youtube.com/embed/rL60dbSWgtE', title: 'More than a Married Couple' },
        { src: 'Feature/bunnygirlcard.png', video: 'https://www.youtube.com/embed/tGJTrM9RphQ', title: 'Bunny Girl Senpai' },
        { src: 'Feature/loveaftercard.png', video: 'https://www.youtube.com/embed/t_LOPSpeYvE', title: 'Love After World Domination' },
        { src: 'Feature/masamunecard.png', video: 'https://www.youtube.com/embed/dJSjZnKDbHk', title: 'Masamune-kuns Revenge' },
        { src: 'Feature/mylittlecard.png', video: 'https://www.youtube.com/embed/SlD-8h96pDw', title: 'My Little Monster' },
        { src: 'Feature/worldgodcard.png', video: 'https://www.youtube.com/embed/OdBmj4TWqzk', title: 'The World God Only Knows' },
        { src: 'Feature/yamadakuncard.png', video: 'https://www.youtube.com/embed/iwyufFdfO80', title: 'Yamada-kun' },
        { src: 'Feature/horimiyacard.png', video: 'https://www.youtube.com/embed/e4RCugyx5No', title: 'Horimiya' },
        { src: 'Feature/timeloopcard.png', video: 'https://www.youtube.com/embed/aPSmBt6GeqA', title: '7th Time Loop' },
        { src: 'Feature/theangelcard.png', video: 'https://www.youtube.com/embed/twfLsWdXcZI', title: 'The Angel Next Door' },
        { src: 'Feature/shikimoricard.png', video: 'https://www.youtube.com/embed/utyXdk4G0-w', title: 'Shikimoris...' },
        { src: 'Feature/villainesscard.png', video: 'https://www.youtube.com/embed/5cfNLZqPBiM', title: 'Im the Villainess...' },
        { src: 'Feature/orangecard.png', video: 'https://www.youtube.com/embed/G9CzaN3WyKs', title: 'Orange' },
        { src: 'Feature/horimiyacard.png', video: 'https://www.youtube.com/embed/W4C2ye5mK9g', title: 'My Stepmoms Daughter Is My Ex' },
        { src: 'Feature/sciencecard.png', video: 'https://www.youtube.com/embed/4vJ33PVcsMM', title: 'Science Fell in...' },
        { src: 'Feature/ourdatingcard.png', video: 'https://www.youtube.com/embed/5Z824-bOhZA', title: 'Our Dating Story...' },
        { src: 'Feature/lv999card.png', video: 'https://www.youtube.com/embed/Mk8gEBzunD8', title: 'My Love Story...' },
        { src: 'Feature/100card.png', video: 'https://www.youtube.com/embed/ls2VNcSifi4', title: 'The 100 Girlfriends...' },
        { src: 'Feature/mywifecard.png', video: 'https://www.youtube.com/embed/slxnDYn0dPY', title: 'My Wife is...' },
        { src: 'Feature/aharencard.png', video: 'https://www.youtube.com/embed/Rd4usifUuEY', title: 'Aharen-san' },
        { src: 'Feature/kisshimcard.png', video: 'https://www.youtube.com/embed/d6Eh-y9BnUg', title: 'Kiss Him, Not Me' },
        { src: 'Feature/bokubencard.png', video: 'https://www.youtube.com/embed/qFSK5XI7QyM', title: 'BOKUBEN...' },
        { src: 'Feature/mylovecard.png', video: 'https://www.youtube.com/embed/GdB0LsAceGE', title: 'MY love STORY!!' },
        { src: 'Feature/tsuredurecard.png', video: 'https://www.youtube.com/embed/VUCFNbrVtiM', title: 'Tsuredure Children' },
        { src: 'Feature/annoyingcard.png', video: 'https://www.youtube.com/embed/TxDxGA4i758', title: 'My Senpai Is Annoying' },
        { src: 'Feature/domesticcard.png', video: 'https://www.youtube.com/embed/A8dh2392QsQ', title: 'Domestic Girlfriend' },
        { src: 'Feature/kaguyacard.png', video: 'https://www.youtube.com/embed/S6p_PjK7naQ', title: 'Love Is War' },
        { src: 'Feature/galcard.png', video: 'https://www.youtube.com/embed/9J3t8Q4uvL0', title: 'My First Girlfriend Is a Gal' },
        { src: 'Feature/tyrantcard.png', video: 'https://www.youtube.com/embed/7lVHNZK6Fn4', title: 'Love Tyrant' },
        { src: 'Feature/hensukicard.png', video: 'https://www.youtube.com/embed/a1BxLBr_O88', title: 'Hensuki' },
        { src: 'Feature/engagecard.png', video: 'https://www.youtube.com/embed/Qsauwn7RnS4', title: 'Engage Kiss' },
        { src: 'Feature/remakecard.png', video: 'https://www.youtube.com/embed/cFAx8fMWqpM', title: 'Remake Our Life!' },
        { src: 'Feature/oresukicard.png', video: 'https://www.youtube.com/embed/Pt3MqwiSyKY', title: 'ORESUKI' },
        { src: 'Feature/cocktailcard.png', video: 'https://www.youtube.com/embed/vvMNeq4AW1k', title: 'Love is Like...' },
        { src: 'Feature/rokudocard.png', video: 'https://www.youtube.com/embed/pGJOnJRpAIo', title: 'Rokudos Bad Girls' },
        { src: 'Feature/karakaicard.png', video: 'https://www.youtube.com/embed/jfckVPkj-Ok', title: 'KARAKAI JOZU...' },
        { src: 'Feature/dagashicard.png', video: 'https://www.youtube.com/embed/NK82zttzfh8', title: 'Dagashi Kashi' },
        { src: 'Feature/arakawacard.png', video: 'https://www.youtube.com/embed/sqeoy8k6sco', title: 'Arakawa...' },
        { src: 'Feature/asteroidcard.png', video: 'https://www.youtube.com/embed/ogIQ3d1w8Rs', title: 'Asteroid in Love' },
        { src: 'Feature/netsuzoucard.png', video: 'https://www.youtube.com/embed/E6y5q55Q2rU', title: 'Netsuzou Trap -NTR-' },
        { src: 'Feature/chihayafurucard.png', video: 'https://www.youtube.com/embed/yEflqf1U9lA', title: 'Chihayafuru' },
        { src: 'Feature/galaxycard.png', video: 'https://www.youtube.com/embed/Y4fOhmP1050', title: 'A Galaxy Next Door' },

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