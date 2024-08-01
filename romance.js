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
            //Romance
        { src: 'Feature/dukecard.png', video: 'https://www.youtube.com/embed/55T_YNvgBbE', title: 'The Duke of Death', episodes: '36 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G79H23V0G/the-duke-of-death-and-his-maid', genre: 'Romance', seasons: '3 Seasons' },
        { src: 'Feature/asigncard.png', video: 'https://www.youtube.com/embed/v50CI8LVwEY', title: 'A Sign of Affection', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3W2V7/a-sign-of-affection', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/dressupcard.png', video: 'https://www.youtube.com/embed/8oveGY6h6T8', title: 'My Dress-Up Darling', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GQWH0M9N8/my-dress-up-darling', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/nagatorocard.png', video: 'https://www.youtube.com/embed/6dVQ93xBYUg', title: 'NAGATORO', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GQWH0M455/dont-toy-with-me-miss-nagatoro', genre: 'Romance', seasons: '2 Seasons' },
        { src: 'Feature/tonikawacard.png', video: 'https://www.youtube.com/embed/97wksuHdnF4', title: 'TONIKAWA', episodes: '31 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRWMGGQ86/tonikawa-over-the-moon-for-you', genre: 'Romance', seasons: '3 Seasons' },
        { src: 'Feature/girlfriendcard.png', video: 'https://www.youtube.com/embed/1foV8Fh0WRc', title: 'Girlfriend Girlfriend', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3WP97/girlfriend-girlfriend', genre: 'Romance', seasons: '2 Seasons' },
        { src: 'Feature/cuckooscard.png', video: 'https://www.youtube.com/embed/4dhHnE_Jsbo', title: 'A Couple of Cuckoos', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM39MP/a-couple-of-cuckoos', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/quintupletscard.png', video: 'https://www.youtube.com/embed/ILDps6CfIwI', title: 'Quintessential...', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY4PD7Z06/the-quintessential-quintuplets', genre: 'Romance', seasons: '2 Seasons' },
        { src: 'Feature/morethancard.png', video: 'https://www.youtube.com/embed/rL60dbSWgtE', title: 'More than a Married Couple', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GJ0H7Q5N3/more-than-a-married-couple-but-not-lovers', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/bunnygirlcard.png', video: 'https://www.youtube.com/embed/tGJTrM9RphQ', title: 'Bunny Girl Senpai', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYW4MG9G6/rascal-does-not-dream-of-bunny-girl-senpai', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/loveaftercard.png', video: 'https://www.youtube.com/embed/t_LOPSpeYvE', title: 'Love After World...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3WG78/love-after-world-domination', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/masamunecard.png', video: 'https://www.youtube.com/embed/dJSjZnKDbHk', title: 'Masamune-kuns Revenge', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYX02P3MR/masamune-kuns-revenge', genre: 'Romance', seasons: '2 Seasons' },
        { src: 'Feature/mylittlecard.png', video: 'https://www.youtube.com/embed/SlD-8h96pDw', title: 'My Little Monster', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6MG8P1W6/my-little-monster', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/worldgodcard.png', video: 'https://www.youtube.com/embed/OdBmj4TWqzk', title: 'The World God...', episodes: '36 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR9PV5MD6/the-world-god-only-knows', genre: 'Romance', seasons: '3 Seasons' },
        { src: 'Feature/yamadakuncard.png', video: 'https://www.youtube.com/embed/iwyufFdfO80', title: 'Yamada-kun', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G63VMKVQY/yamada-kun-and-the-seven-witches', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/horimiyacard.png', video: 'https://www.youtube.com/embed/e4RCugyx5No', title: 'Horimiya', episodes: '26 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G9VHN9P43/horimiya', genre: 'Romance', seasons: '2 Seasons' },
        { src: 'Feature/timeloopcard.png', video: 'https://www.youtube.com/embed/aPSmBt6GeqA', title: '7th Time Loop', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G4PH0WJGQ/7th-time-loop-the-villainess-enjoys-a-carefree-life-married-to-her-worst-enemy', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/theangelcard.png', video: 'https://www.youtube.com/embed/twfLsWdXcZI', title: 'The Angel Next Door', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G9VHN91DJ/the-angel-next-door-spoils-me-rotten', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/shikimoricard.png', video: 'https://www.youtube.com/embed/utyXdk4G0-w', title: 'Shikimori\'s', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN7M4/shikimoris-not-just-a-cutie', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/villainesscard.png', video: 'https://www.youtube.com/embed/5cfNLZqPBiM', title: 'I\'m the Villainess...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5X0JK/im-the-villainess-so-im-taming-the-final-boss', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/orangecard.png', video: 'https://www.youtube.com/embed/G9CzaN3WyKs', title: 'Orange', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRVNXW75Y/orange', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/stepmomcard.png', video: 'https://www.youtube.com/embed/W4C2ye5mK9g', title: 'My Stepmom\'s...', episodes: '26 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G0XHWM44M/my-stepmoms-daughter-is-my-ex', genre: 'Romance', seasons: '2 Seasons' },
        { src: 'Feature/sciencecard.png', video: 'https://www.youtube.com/embed/4vJ33PVcsMM', title: 'Science Fell in Love...', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6P5MMXV6/science-fell-in-love-so-i-tried-to-prove-it', genre: 'Romance', seasons: '2 Seasons' },
        { src: 'Feature/ourdatingcard.png', video: 'https://www.youtube.com/embed/5Z824-bOhZA', title: 'Our Dating Story...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G5PHNM9G5/our-dating-story-the-experienced-you-and-the-inexperienced-me', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/lv999card.png', video: 'https://www.youtube.com/embed/Mk8gEBzunD8', title: 'My Love Story...', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKNPQ7/my-love-story-with-yamada-kun-at-lv999', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/100card.png', video: 'https://www.youtube.com/embed/ls2VNcSifi4', title: 'The 100 Girlfriends...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN933/the-100-girlfriends-who-really-really-really-really-really-love-you', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/mywifecard.png', video: 'https://www.youtube.com/embed/slxnDYn0dPY', title: 'My Wife is the...', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYP8XN95Y/my-wife-is-the-student-council-president', genre: 'Romance', seasons: '2 Seasons' },
        { src: 'Feature/aharencard.png', video: 'https://www.youtube.com/embed/Rd4usifUuEY', title: 'Aharen-san', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN72N/aharen-san-wa-hakarenai', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/kisshimcard.png', video: 'https://www.youtube.com/embed/d6Eh-y9BnUg', title: 'Kiss Him, Not Me', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G65VXM1P6/kiss-him-not-me', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/bokubencard.png', video: 'https://www.youtube.com/embed/qFSK5XI7QyM', title: 'BOKUBEN', episodes: '26 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR8DN8XDR/we-never-learn-bokuben', genre: 'Romance', seasons: '2 Seasons' },
        { src: 'Feature/mylovecard.png', video: 'https://www.youtube.com/embed/GdB0LsAceGE', title: 'MY love STORY!!', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6MGPGZ86/my-love--story', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/tsuredurecard.png', video: 'https://www.youtube.com/embed/VUCFNbrVtiM', title: 'Tsuredure Children', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY2P9PZPY/tsuredure-children', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/annoyingcard.png', video: 'https://www.youtube.com/embed/TxDxGA4i758', title: 'My Senpai Is Annoying', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GP5HJ815K/my-senpai-is-annoying', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/domesticcard.png', video: 'https://www.youtube.com/embed/A8dh2392QsQ', title: 'Domestic Girlfriend', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G679D84KY/domestic-girlfriend', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/kaguyacard.png', video: 'https://www.youtube.com/embed/S6p_PjK7naQ', title: 'Love Is War', episodes: '41 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRJ0J828Y/kaguya-sama-love-is-war', genre: 'Romance', seasons: '3 Seasons' },
        { src: 'Feature/galcard.png', video: 'https://www.youtube.com/embed/LexsadMYp5A?start=11', title: 'My First Girlfriend...', episodes: '10 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G675N15MR/my-first-girlfriend-is-a-gal', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/tyrantcard.png', video: 'https://www.youtube.com/embed/7lVHNZK6Fn4', title: 'Love Tyrant', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6NQ59GG6/love-tyrant', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/hensukicard.png', video: 'https://www.youtube.com/embed/a1BxLBr_O88', title: 'Hensuki', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GQWH0MX4W/hensuki---are-you-willing-to-fall-in-love-with-a-pervert-as-long-as-shes-a-cutie', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/engagecard.png', video: 'https://www.youtube.com/embed/Qsauwn7RnS4', title: 'Engage Kiss', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GJ0H7Q8J0/engage-kiss', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/remakecard.png', video: 'https://www.youtube.com/embed/cFAx8fMWqpM', title: 'Remake Our Life!', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GKEH2GZX9/remake-our-life', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/oresukicard.png', video: 'https://www.youtube.com/embed/Pt3MqwiSyKY', title: 'ORESUKI', episodes: '15 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8DP4JDY/oresuki-are-you-the-only-one-who-loves-me', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/cocktailcard.png', video: 'https://www.youtube.com/embed/vvMNeq4AW1k', title: 'Love is Like a Cocktail', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6P8QX856/love-is-like-a-cocktail', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/rokudocard.png', video: 'https://www.youtube.com/embed/pGJOnJRpAIo', title: 'Rokudo\'s Bad Girls', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GW4HM75QW/rokudos-bad-girls', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/karakaicard.png', video: 'https://www.youtube.com/embed/jfckVPkj-Ok', title: 'KARAKAI JOZU...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6X0P133Y/karakai-jozu-no-takagi-san', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/dagashicard.png', video: 'https://www.youtube.com/embed/NK82zttzfh8', title: 'Dagashi Kashi', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYDQN15K6/dagashi-kashi', genre: 'Romance', seasons: '2 Seasons' },
        { src: 'Feature/arakawacard.png', video: 'https://www.youtube.com/embed/sqeoy8k6sco', title: 'Arakawa', episodes: '26 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRP8PGDWR/arakawa-under-the-bridge', genre: 'Romance', seasons: '2 Seasons' },
        { src: 'Feature/asteroidcard.png', video: 'https://www.youtube.com/embed/ogIQ3d1w8Rs', title: 'Asteroid in Love', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRMEJX3VY/asteroid-in-love', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/netsuzoucard.png', video: 'https://www.youtube.com/embed/E6y5q55Q2rU', title: 'Netsuzou Trap -NTR-', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G609E9EW6/netsuzou-trap--ntr-', genre: 'Romance', seasons: '1 Seasons' },
        { src: 'Feature/chihayafurucard.png', video: 'https://www.youtube.com/embed/yEflqf1U9lA', title: 'Chihayafuru', episodes: '26 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYGG57V3Y/chihayafuru', genre: 'Romance', seasons: '2 Seasons' },
        { src: 'Feature/galaxycard.png', video: 'https://www.youtube.com/embed/Y4fOhmP1050', title: 'A Galaxy Next Door', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM3PZW/a-galaxy-next-door', genre: 'Romance', seasons: '1 Seasons' },  
        //Romance
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