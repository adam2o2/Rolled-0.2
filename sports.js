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
        { src: 'Feature/243.png', video: 'https://www.youtube.com/embed/5utDbhnMF0s', title: '2.43 Volleyball Team' },
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
        //Sports
        { src: 'Feature/haikyucard.png', video: 'https://www.youtube.com/embed/KhZG9Uw7PxM', title: 'Haikyu!!', episode: '85 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY8VM8MWY/haikyu', genre: 'Sports', season: '7 Seasons' },
        { src: 'Feature/yuricard.png', video: 'https://www.youtube.com/embed/KuhLOnIszok', title: 'Yuri on Ice', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY2PEJ0MY/yuri-on-ice', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/ippocard.png', video: 'https://www.youtube.com/embed/a94NcwNgPdo?start=1', title: 'Hajime No Ippo', episode: '127 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GW4HM7N7X/hajime-no-ippo-the-fighting', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/kurokobasketcard.png', video: 'https://www.youtube.com/embed/1KLvA6FMNiE', title: 'Kurokos Basketball', episode: '83 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G62P48X56/kurokos-basketball', genre: 'Sports', season: '5 Seasons' },
        { src: 'Feature/princeoftenniscard.png', video: 'https://www.youtube.com/embed/H0aHXo8q85g', title: 'The Prince of Tennis', episode: '178 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G79H23V91/the-prince-of-tennis', genre: 'Sports', season: '2 Seasons' },
        { src: 'Feature/runwiththewindcard.png', video: 'https://www.youtube.com/embed/hECoG4DhFVQ', title: 'Run With the Wind', episode: '23 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G68DM2316/run-with-the-wind', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/pedalcard.png', video: 'https://www.youtube.com/embed/4pwc916s8J0', title: 'Yowamushi Pedal', episode: '112 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRGGVKP4R/yowamushi-pedal', genre: 'Sports', season: '5 Seasons' },
        { src: 'Feature/slamdunkcard.png', video: 'https://www.youtube.com/embed/CbK6Yy4f4zY', title: 'Slam Dunk', episode: '101 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G69PJJM3Y/slam-dunk', genre: 'Sports', season: '3 Seasons' },
        { src: 'Feature/freedivecard.png', video: 'https://www.youtube.com/embed/iLUZd5e_9vs', title: 'Free', episode: '37 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRDQV2VWY/free---iwatobi-swim-club', genre: 'Sports', season: '8 Seasons' },
        { src: 'Feature/aoashicard.jpg', video: 'https://www.youtube.com/embed/UdKoCImaUeQ', title: 'Aoashi', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G4PH0WX5J/aoashi', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/bluelockcard.jpg', video: 'https://www.youtube.com/embed/IVsII3dLbWc?start=1', title: 'Blue Lock', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G4PH0WEKE/blue-lock', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/megaloboxcard.jpg', video: 'https://www.youtube.com/embed/gVxLZityaR0', title: 'MEGALOBOX', episode: '26 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR4PVJ1WY/megalobox', genre: 'Sports', season: '2 Seasons' },
        { src: 'Feature/sk8card.jpg', video: 'https://www.youtube.com/embed/vuoYi-1rCA4', title: 'SK8 the Infinity', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G5PHNM434/sk8-the-infinity', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/eyeshieldcard.jpg', video: 'https://www.youtube.com/embed/IYgnjsihha4', title: 'Eyeshield', episode: '145 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRE5KGN36/eyeshield-21', genre: 'Sports', season: '3 Seasons' },
        { src: 'Feature/ahirunosoracard.jpg', video: 'https://www.youtube.com/embed/rsqxACPa8EU', title: 'Ahiru no Sora', episode: '50 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6NVGNJGY/ahiru-no-sora', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/captaincard.png', video: 'https://www.youtube.com/embed/K6zQ1qs2hLY', title: 'Captain Tsubasa', episode: '39 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G4PH0WJDQ/captain-tsubasa-junior', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/daycard.png', video: 'https://www.youtube.com/embed/VKavtkIZXoI', title: 'DAYS', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYX040PKR/days', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/mfghostcard.png', video: 'https://www.youtube.com/embed/zNWZjjkKfXs', title: 'MF GHOST', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3W2W7/mf-ghost', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/hinomarucard.png', video: 'https://www.youtube.com/embed/Gxq9uR6EMd0', title: 'Hinomaru Sumo', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G60X7D34R/hinomaru-sumo', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/tsurunecard.png', video: 'https://www.youtube.com/embed/6w_GwGdk8_0', title: 'Tsurune', episode: '14 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRDKVP34Y/tsurune', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/birdiecard.png', video: 'https://www.youtube.com/embed/EgmBeG0Yyl8', title: 'Birdie Wing', episode: '25 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN714/birdie-wing--golf-girls', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/overtakecard.png', video: 'https://www.youtube.com/embed/x9H2uJxOREs', title: 'OVERTAKE!', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G9VHN9Q4N/overtake', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/243.png', video: 'https://www.youtube.com/embed/5utDbhnMF0s', title: '2.43 Volleyball Team', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJVEZ1/243-seiin-high-school-volleyball', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/loveallplaycard.png', video: 'https://www.youtube.com/embed/PMHRDK2qjS4', title: 'Love All Play', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GKEH2G4MW/love-all-play', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/burningburningkabaddi.png', video: 'https://www.youtube.com/embed/CeUcyCPcDa4', title: 'Burning Kabaddi', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G9VHN9W5J/burning-kabaddi', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/pingpongcard.png', video: 'https://www.youtube.com/embed/ItlDaDfLBn8', title: 'Ping Pong', episode: '11 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRJQV0N3Y/ping-pong-the-animation', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/iwakakerucard.png', video: 'https://www.youtube.com/embed/T8Skpo5daFI', title: 'Iwakakeru -Sport Climbing Girls-', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRJK7WV4Y/iwakakeru--sport-climbing-girls', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/tamayomicard.png', video: 'https://www.youtube.com/embed/BohDWS5YWdo', title: 'TAMAYOMI: The Baseball Girls', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM39XE/tamayomi-the-baseball-girls', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/2ndcard.png', video: 'https://www.youtube.com/embed/tk4rmNvDgLI', title: 'MAJOR 2nd', episode: '52 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6P5WVEQ6/major-2nd', genre: 'Sports', season: '2 Seasons' },
        { src: 'Feature/puraorecard.png', video: 'https://www.youtube.com/embed/1hBHRibhTjc', title: 'PuraOre! Pride of Orange', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G3KHEV77Z/puraore-pride-of-orange', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/hanebadocard.png', video: 'https://www.youtube.com/embed/GoHQ1ARlm4I', title: 'HANEBADO!', episode: '25 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRZJXKN86/hanebado', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/wavecard.png', video: 'https://www.youtube.com/embed/hdtr-LAywcU', title: 'Wave, Listen to Me!', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZE1PX/wave--lets-go-surfing', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/cleanfreakcard.png', video: 'https://www.youtube.com/embed/pTtBxVeaqjo', title: 'Clean Freak! Aoyama kun', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYNQZQ3XY/clean-freak-aoyama-kun', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/backflipcard.png', video: 'https://www.youtube.com/embed/tsELGZjOwhw', title: 'Backflip!!', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM3NEV/backflip', genre: 'Sports', season: '2 Seasons' },
        { src: 'Feature/starsaligncard.png', video: 'https://www.youtube.com/embed/opgXY7fqSEw', title: 'Stars Align', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM3983/stars-align', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/kemonomichicard.png', video: 'https://www.youtube.com/embed/YaSMOrWpYrM', title: 'Kemono Michi: Rise Up', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G8DHV7EPX/kemono-michi-rise-up', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/salarymansclubcard.png', video: 'https://www.youtube.com/embed/s74Cvn86dEk', title: 'Salaryman\'s Club', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G9VHN9P99/salarymans-club', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/skateleadingstarscard.png', video: 'https://www.youtube.com/embed/t9rzegGBBi0', title: 'Skate-Leading Stars', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G9VHN971K/skate-leading-stars', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/shootgoalcard.png', video: 'https://www.youtube.com/embed/vTCYrqTuoVU', title: 'Shoot! Goal to the Future', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GVDHX8JZ2/shoot-goal-to-the-future', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/re-maincard.png', video: 'https://www.youtube.com/embed/HvZ7xtjYMSk', title: 'RE-MAIN', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3WKZ3/re-main', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/farewellmydearcard.png', video: 'https://www.youtube.com/embed/kim1S3ySNqs', title: 'Farewell, My Dear Cramer', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZE431/farewell-my-dear-cramer', genre: 'Sports', season: '2 Seasons' },
        { src: 'Feature/tigermaskwcard.png', video: 'https://www.youtube.com/embed/JdIexLN-R0Q', title: 'Tiger Mask W', episode: '38 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY8VJJ0GY/tiger-mask-w', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/extremeheartscard.png', video: 'https://www.youtube.com/embed/sp3qRgn2pEc', title: 'Extreme Hearts', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G3KHEVQQG/extreme-hearts', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/twocarcard.png', video: 'https://www.youtube.com/embed/7IIevQEOXZM', title: 'TWOCAR', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY2PQNPMY/twocar', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/sorairoutilitycard.png', video: 'https://www.youtube.com/embed/zvuJ-D1W_bU', title: 'Sorairo Utility', episode: '1 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XDJM/sorairo-utility', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/futsalboyscard.png', video: 'https://www.youtube.com/embed/3CbQaVZwNMM', title: 'Futsal Boys!!!!', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G24H1NJE2/futsal-boys', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/fanfarecard.png', video: 'https://www.youtube.com/embed/6izny1r6HYU', title: 'Fanfare of Adolescence', episode: '11 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GMEHME4QD/fanfare-of-adolescence', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/gurazenicard.png', video: 'https://www.youtube.com/embed/oyXkrLEBkc8', title: 'Gurazeni: Money Pitch', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRVDWZZ4R/gurazeni-money-pitch', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/howheavyaredumbbellscard.png', video: 'https://www.youtube.com/embed/2YPtn01c66M', title: 'How Heavy Are the Dumbbells You Lift?', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GP5HJ80VJ/how-heavy-are-the-dumbbells-you-lift', genre: 'Sports', season: '1 Seasons' },
        { src: 'Feature/chihayafurucard.png', video: 'https://www.youtube.com/embed/yEflqf1U9lA', title: 'Chihayafuru', episode: '75 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYGG57V3Y/chihayafuru', genre: 'Sports', season: '3 Seasons' },
        //Sports
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