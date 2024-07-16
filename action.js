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
        { src: 'Feature/jjkCard.png', video: 'https://www.youtube.com/embed/pkKu9hLT-t8', title: 'Jujutsu Kaisen' },
        { src: 'Feature/mhacard.png', video: 'https://www.youtube.com/embed/LqJQqcDQxBg', title: 'My Hero Academia' },
        { src: 'Feature/akamecard.png', video: 'https://www.youtube.com/embed/NIeKMKwON0U', title: 'Akame Ga Kill' },
        { src: 'Feature/aotcard.png', video: 'https://www.youtube.com/embed/n4Nj6Y_SNYI', title: 'Attack on Titan' },
        { src: 'Feature/demonslayercard.png', video: 'https://www.youtube.com/embed/Sl2k7bfBeCw', title: 'Demon Slayer' },
        { src: 'Feature/fatecard.png', video: 'https://www.youtube.com/embed/nfzKXkL_i54', title: 'Fate Stay Night' },
        { src: 'Feature/fireforcecard.png', video: 'https://www.youtube.com/embed/fzM43HZ6oeg', title: 'Fire Force' },
        { src: 'Feature/godofhighschoolcard.png', video: 'https://www.youtube.com/embed/oqjwUfprNAk', title: 'God of High School' },
        { src: 'Feature/opmcard.png', video: 'https://www.youtube.com/embed/YUH1mfV3IEU', title: 'One Punch Man' },
        { src: 'Feature/kenichicard.png', video: 'https://www.youtube.com/embed/4xDehi5Qjqs', title: 'KenIchi' },
        { src: 'Feature/kindomcard.png', video: 'https://www.youtube.com/embed/bYudboNENqs', title: 'Kindom' },
        { src: 'Feature/hinomarucard.png', video: 'https://www.youtube.com/embed/Gxq9uR6EMd0', title: 'Hinomaru Sumo' },
        { src: 'Feature/taktcard.png', video: 'https://www.youtube.com/embed/mv_SJoJY7sA', title: 'takt op.Destiny' },
        { src: 'Feature/akudamacard.png', video: 'https://www.youtube.com/embed/H2vRwrLyzQM', title: 'Akudama Drive' },
        { src: 'Feature/peachcard.png', video: 'https://www.youtube.com/embed/7vtl3NGuG1c', title: 'Peach Boy Riverside' },
        { src: 'Feature/tenjhocard.png', video: 'https://www.youtube.com/embed/BM-dTZY9HI0', title: 'Tenjho Tenge' },
        { src: 'Feature/mushibugyocard.png', video: 'https://www.youtube.com/embed/uv7dT2VSpp8', title: 'Mushibugyo' },
        { src: 'Feature/monsterstrikecard.png', video: 'https://www.youtube.com/embed/Yz-57Anl-Os', title: 'Monster Strike' },
        { src: 'Feature/shangrilacard.png', video: 'https://www.youtube.com/embed/rsTbPKiGQdo', title: 'Shangri-La Frontier' },
        { src: 'Feature/solocard.png', video: 'https://www.youtube.com/embed/bssSj4cKsrI', title: 'Solo Leveling' },
        { src: 'Feature/revengerscard.png', video: 'https://www.youtube.com/embed/idlLFNNpZiI', title: 'Tokyo Revengers' },
        { src: 'Feature/bungocard.png', video: 'https://www.youtube.com/embed/pYDv2ZR25GE', title: 'Bungo Stray Dogs' },
        { src: 'Feature/metalliccard.png', video: 'https://www.youtube.com/embed/yv8eVL4xBI4', title: 'Metallic Rouge' },
        { src: 'Feature/deadmountcard.png', video: 'https://www.youtube.com/embed/_BDDj_4nmNg', title: 'Dead Mount Death Play' },
        { src: 'Feature/gluttonycard.png', video: 'https://www.youtube.com/embed/f3FwcHciZZ0', title: 'Berserk of Gluttony' },
        { src: 'Feature/dragonballcard.png', video: 'https://www.youtube.com/embed/2Vej889SS6s', title: 'Dragon Ball Super' },
        { src: 'Feature/bloodcard.png', video: 'https://www.youtube.com/embed/aMe0J7c8uOU', title: 'Blood Blockade Battlefront' },
        { src: 'Feature/niercard.png', video: 'https://www.youtube.com/embed/eIMZYgb85xg', title: 'NieR:Automata Ver1.1a' },
        { src: 'Feature/killlakillcard.png', video: 'https://www.youtube.com/embed/B98NY8Hfo7I', title: 'Kill La Kill' },
        { src: 'Feature/berserkcard.png', video: 'https://www.youtube.com/embed/0MIw4xzxcTU', title: 'Berserk' },
        { src: 'Feature/icebladecard.png', video: 'https://www.youtube.com/embed/l1hx7s7Ywcs', title: 'The Iceblade Sorcerer' },
        { src: 'Feature/plunderercard.png', video: 'https://www.youtube.com/embed/L1Y9r8psTmo', title: 'Plunderer' },
        { src: 'Feature/irregularcard.png', video: 'https://www.youtube.com/embed/U-gkwdGooDU', title: 'The Irregular' },
        { src: 'Feature/vinlandcard.png', video: 'https://www.youtube.com/embed/f8JrZ7Q_p-8', title: 'Vinland Saga' }
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