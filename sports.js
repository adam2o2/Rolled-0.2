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
        { src: 'Feature/haikyucard.png', video: 'https://www.youtube.com/embed/KhZG9Uw7PxM', title: 'Haikyu!!' },
        { src: 'Feature/yuricard.png', video: 'https://www.youtube.com/embed/KuhLOnIszok', title: 'Yuri on Ice' },
        { src: 'Feature/ippocard.png', video: 'https://www.youtube.com/embed/a94NcwNgPdo?start=1', title: 'Hajime No Ippo' },
        { src: 'Feature/kurokobasketcard.png', video: 'https://www.youtube.com/embed/1KLvA6FMNiE', title: 'Kurokos Basketball' },
        { src: 'Feature/princeoftenniscard.png', video: 'https://www.youtube.com/embed/H0aHXo8q85g', title: 'The Prince of Tennis' },
        { src: 'Feature/runwiththewindcard.png', video: 'https://www.youtube.com/embed/hECoG4DhFVQ', title: 'Run With the Wind' },
        { src: 'Feature/pedalcard.png', video: 'https://www.youtube.com/embed/4pwc916s8J0', title: 'Yowamushi Pedal' },
        { src: 'Feature/slamdunkcard.png', video: 'https://www.youtube.com/embed/CbK6Yy4f4zY', title: 'Slam Dunk' },
        { src: 'Feature/freedivecard.png', video: 'https://www.youtube.com/embed/iLUZd5e_9vs', title: 'Free' },
        { src: 'Feature/aoashicard.jpg', video: 'https://www.youtube.com/embed/UdKoCImaUeQ', title: 'Aoashi' },
        { src: 'Feature/bluelockcard.jpg', video: 'https://www.youtube.com/embed/IVsII3dLbWc?start=1', title: 'Blue Lock' },
        { src: 'Feature/megaloboxcard.jpg', video: 'https://www.youtube.com/embed/gVxLZityaR0', title: 'MEGALOBOX' },
        { src: 'Feature/sk8card.jpg', video: 'https://www.youtube.com/embed/vuoYi-1rCA4', title: 'SK8 the Infinity' },
        { src: 'Feature/eyeshieldcard.jpg', video: 'https://www.youtube.com/embed/IYgnjsihha4', title: 'Eyeshield' },
        { src: 'Feature/ahirunosoracard.jpg', video: 'https://www.youtube.com/embed/rsqxACPa8EU', title: 'Ahiru no Sora' },
        { src: 'Feature/captaincard.png', video: 'https://www.youtube.com/embed/K6zQ1qs2hLY', title: 'Captain Tsubasa' },
        { src: 'Feature/daycard.png', video: 'https://www.youtube.com/embed/VKavtkIZXoI', title: 'DAYS' },
        { src: 'Feature/mfghostcard.png', video: 'https://www.youtube.com/embed/zNWZjjkKfXs', title: 'MF GHOST' },
        { src: 'Feature/hinomarucard.png', video: 'https://www.youtube.com/embed/Gxq9uR6EMd0', title: 'Hinomaru Sumo' },
        { src: 'Feature/tsurunecard.png', video: 'https://www.youtube.com/embed/6w_GwGdk8_0', title: 'Tsurune' },
        { src: 'Feature/birdiecard.png', video: 'https://www.youtube.com/embed/EgmBeG0Yyl8', title: 'Birdie Wing' },
        { src: 'Feature/overtakecard.png', video: 'https://www.youtube.com/embed/x9H2uJxOREs', title: 'OVERTAKE!' },
        { src: 'Feature/243card.png', video: 'https://www.youtube.com/embed/5utDbhnMF0s', title: '2.43 Volleyball Team' },
        { src: 'Feature/loveallplaycard.png', video: 'https://www.youtube.com/embed/PMHRDK2qjS4', title: 'Love All Play' },
        { src: 'Feature/burningkabaddicard.png', video: 'https://www.youtube.com/embed/CeUcyCPcDa4', title: 'Burning Kabaddi' },
        { src: 'Feature/pingpongcard.png', video: 'https://www.youtube.com/embed/ItlDaDfLBn8', title: 'Ping Pong' },
        { src: 'Feature/iwakakerucard.png', video: 'https://www.youtube.com/embed/T8Skpo5daFI', title: 'Iwakakeru -Sport Climbing Girls-' },
        { src: 'Feature/tamayomicard.png', video: 'https://www.youtube.com/embed/BohDWS5YWdo', title: 'TAMAYOMI: The Baseball Girls' },
        { src: 'Feature/2ndcard.png', video: 'https://www.youtube.com/embed/tk4rmNvDgLI', title: 'MAJOR 2nd' },
        { src: 'Feature/puraorecard.png', video: 'https://www.youtube.com/embed/1hBHRibhTjc', title: 'PuraOre! Pride of Orange' },
        { src: 'Feature/hanebadocard.png', video: 'https://www.youtube.com/embed/GoHQ1ARlm4I', title: 'HANEBADO!' },
        { src: 'Feature/wavecard.png', video: 'https://www.youtube.com/embed/hdtr-LAywcU', title: 'Wave, Listen to Me!' },
        { src: 'Feature/cleanfreakcard.png', video: 'https://www.youtube.com/embed/pTtBxVeaqjo', title: 'Clean Freak! Aoyama kun' },
        { src: 'Feature/backflipcard.png', video: 'https://www.youtube.com/embed/tsELGZjOwhw', title: 'Backflip!!' },
        { src: 'Feature/starsaligncard.png', video: 'https://www.youtube.com/embed/opgXY7fqSEw', title: 'Stars Align' },
        { src: 'Feature/kemonomichicard.png', video: 'https://www.youtube.com/embed/YaSMOrWpYrM', title: 'Kemono Michi: Rise Up' },
        { src: 'Feature/salarymansclubcard.png', video: 'https://www.youtube.com/embed/s74Cvn86dEk', title: 'Salaryman\'s Club' },
        { src: 'Feature/skateleadingstarscard.png', video: 'https://www.youtube.com/embed/t9rzegGBBi0', title: 'Skate-Leading Stars' },
        { src: 'Feature/shootgoalcard.png', video: 'https://www.youtube.com/embed/vTCYrqTuoVU', title: 'Shoot! Goal to the Future' },
        { src: 'Feature/re-maincard.png', video: 'https://www.youtube.com/embed/HvZ7xtjYMSk', title: 'RE-MAIN' },
        { src: 'Feature/farewellmydearcard.png', video: 'https://www.youtube.com/embed/kim1S3ySNqs', title: 'Farewell, My Dear Cramer' },
        { src: 'Feature/tigermaskwcard.png', video: 'https://www.youtube.com/embed/JdIexLN-R0Q', title: 'Tiger Mask W' },
        { src: 'Feature/extremeheartscard.png', video: 'https://www.youtube.com/embed/sp3qRgn2pEc', title: 'Extreme Hearts' },
        { src: 'Feature/twocarcard.png', video: 'https://www.youtube.com/embed/7IIevQEOXZM', title: 'TWOCAR' },
        { src: 'Feature/sorairoutilitycard.png', video: 'https://www.youtube.com/embed/zvuJ-D1W_bU', title: 'Sorairo Utility' },
        { src: 'Feature/futsalboyscard.png', video: 'https://www.youtube.com/embed/3CbQaVZwNMM', title: 'Futsal Boys!!!!' },
        { src: 'Feature/fanfarecard.png', video: 'https://www.youtube.com/embed/6izny1r6HYU', title: 'Fanfare of Adolescence' },
        { src: 'Feature/gurazenicard.png', video: 'https://www.youtube.com/embed/oyXkrLEBkc8', title: 'Gurazeni: Money Pitch' },
        { src: 'Feature/howheavyaredumbbellscard.png', video: 'https://www.youtube.com/embed/2YPtn01c66M', title: 'How Heavy Are the Dumbbells You Lift?' },
        { src: 'Feature/chihayafurucard.png', video: 'https://www.youtube.com/embed/yEflqf1U9lA', title: 'Chihayafuru' }

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