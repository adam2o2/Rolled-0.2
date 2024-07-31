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
        { src: 'Feature/vinlandcard.png', video: 'https://www.youtube.com/embed/f8JrZ7Q_p-8', title: 'Vinland Saga' },
        { src: 'Feature/triggercard.png', video: 'https://www.youtube.com/embed/pqc0AS1nFlA', title: 'World Trigger' },
        { src: 'Feature/triguncard.png', video: 'https://www.youtube.com/embed/bJVyIXeUznY', title: 'Trigun' },
        { src: 'Feature/freezingcard.png', video: 'https://www.youtube.com/embed/V5NefFZiaQc', title: 'Freezing' },
        { src: 'Feature/butlercard.png', video: 'https://www.youtube.com/embed/S8j5iEklHyI', title: 'Black Butler' },
        { src: 'Feature/datecard.png', video: 'https://www.youtube.com/embed/4CA7RDDhz2Q', title: 'Date A Live' },
        { src: 'Feature/assassinationcard.png', video: 'https://www.youtube.com/embed/kgNkGohA20k', title: 'Assassination Classroom' },
        { src: 'Feature/wistoriacard.png', video: 'https://www.youtube.com/embed/Br9na3MPEh8', title: 'Wistoria' },
        { src: 'Feature/soulcard.png', video: 'https://www.youtube.com/embed/ac-ir1b1p-k', title: 'Soul Eater' },
        { src: 'Feature/86card.png', video: 'https://www.youtube.com/embed/VSdS29SDvn4', title: '86 EIGHTY-SIX' },
        { src: 'Feature/healingcard.png', video: 'https://www.youtube.com/embed/UkPRnHQJrws', title: 'The Wrong Way to...' },
        { src: 'Feature/windcard.png', video: 'https://www.youtube.com/embed/62r_G9bEPlU', title: 'WIND BREAKER' },
        { src: 'Feature/viralcard.png', video: 'https://www.youtube.com/embed/J6BdqP4lOkE', title: 'Viral Hit' },
        { src: 'Feature/towercard.png', video: 'https://www.youtube.com/embed/RNyClma6awo', title: 'Tower of God' },
        { src: 'Feature/elusivesamuraicard.png', video: 'https://www.youtube.com/embed/O4AqQNg1MI0', title: 'The Elusive Samurai' },
        { src: 'Feature/kaijuno8card.png', video: 'https://www.youtube.com/embed/JwF7bhvnCxI', title: 'Kaiju No. 8' }


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
            //Action
            { src: 'Feature/jjkCard.png', video: 'https://www.youtube.com/embed/pkKu9hLT-t8', title: 'Jujutsu Kaisen', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen', episode: '48 Episodes', season: '3 Seasons', genre: 'Action' },
            { src: 'Feature/kaijuno8Card.png', video: 'https://www.youtube.com/embed/JwF7bhvnCxI', title: 'Kaiju No 8', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XQ7D/kaiju-no-8', episode: '12 Episodes', season: '1 Seasons', genre: 'Action' },
            { src: 'Feature/fairytail100card.png', video: 'https://www.youtube.com/embed/E1a5MRYIGUk', title: 'Fairy Tail 100 Years Quest', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XQED/fairy-tail-100-years-quest', episode: '332 Episodes', season: '4 Seasons', genre: 'Action' },
            { src: 'Feature/wistoriacard.png', video: 'https://www.youtube.com/embed/Br9na3MPEh8', title: 'Wistoria', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GW4HM7WK9/wistoria-wand-and-sword', episode: '3 Episodes', season: '1 Seasons', genre: 'Action' },
            { src: 'Feature/elusivesamuraicard.png', video: 'https://www.youtube.com/embed/O4AqQNg1MI0', title: 'Elusive Samurai', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GQWH0M19X/the-elusive-samurai', episode: '3 Episodes', season: '1 Seasons', genre: 'Action' },
            { src: 'Feature/mhacard.png', video: 'https://www.youtube.com/embed/LqJQqcDQxBg', title: 'My Hero Academia', episode: '138 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia', genre: 'Action', season: '5 Seasons' },
            { src: 'Feature/fireforcecard.png', video: 'https://www.youtube.com/embed/fzM43HZ6oeg', title: 'Fire Force', episode: '48 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYQWNXPZY/fire-force', genre: 'Action', season: '2 Seasons' },
            { src: 'Feature/bungocard.png', video: 'https://www.youtube.com/embed/YUH1mfV3IEU', title: 'Bungo Stray Dogs', episode: '62 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR5VXQ8PR/bungo-stray-dogs', genre: 'Action', season: '5 Seasons' },
            { src: 'Feature/akamecard.png', video: 'https://www.youtube.com/embed/NIeKMKwON0U', title: 'Akame Ga Kill', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/aotcard.png', video: 'https://www.youtube.com/embed/n4Nj6Y_SNYI', title: 'Attack On Titan', episode: '99 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan', genre: 'Action', season: '4 Seasons'  },
            { src: 'Feature/demonslayercard.png', video: 'https://www.youtube.com/embed/Sl2k7bfBeCw', title: 'Demon Slayer', episode: '26 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba', genre: 'Action', season: '5 Seasons' },
            { src: 'Feature/fatecard.png', video: 'https://www.youtube.com/embed/nfzKXkL_i54', title: 'Fate Stay Night', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY8V11X7Y/fatestay-night-unlimited-blade-works', genre: 'Action', season: '4 Seasons' },
            { src: 'Feature/godofhighschoolcard.png', video: 'https://www.youtube.com/embed/oqjwUfprNAk', title: 'God of High School', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRVD0ZDQR/the-god-of-high-school', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/opmcard.png', video: 'https://www.youtube.com/embed/YUH1mfV3IEU', title: 'One Punch Man', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/', genre: 'Action', season: '2 Seasons' },
            { src: 'Feature/kenichicard.png', video: 'https://www.youtube.com/embed/4xDehi5Qjqs', title: 'KenIchi', episode: '50 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3W859/kenichi-the-mightiest-disciple', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/kindomcard.png', video: 'https://www.youtube.com/embed/bYudboNENqs', title: 'Kindom', episode: '79 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRWE89KMR/kingdom', genre: 'Action', season: '5 Seasons' },
            { src: 'Feature/hinomarucard.png', video: 'https://www.youtube.com/embed/Gxq9uR6EMd0', title: 'Hinomaru Sumo', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G60X7D34R/hinomaru-sumo', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/taktcard.png', video: 'https://www.youtube.com/embed/mv_SJoJY7sA', title: 'takt op.Destiny', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJVXX2/takt-opdestiny', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/akudamacard.png', video: 'https://www.youtube.com/embed/H2vRwrLyzQM', title: 'Akudama Drive', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GKEH2G440/akudama-drive', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/peachcard.png', video: 'https://www.youtube.com/embed/7vtl3NGuG1c', title: 'Peach Boy Riverside', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XM84/peach-boy-riverside', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/tenjhocard.png', video: 'https://www.youtube.com/embed/BM-dTZY9HI0', title: 'Tenjho Tenge', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR5VXM03R/tenjho-tenge', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/mushibugyocard.png', video: 'https://www.youtube.com/embed/uv7dT2VSpp8', title: 'Mushibugyo', episode: '26 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G65VJVG56/mushibugyo', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/monsterstrikecard.png', video: 'https://www.youtube.com/embed/Yz-57Anl-Os', title: 'Monster Strike', episode: '51 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G619JM99Y/monster-strike', genre: 'Action', season: '3 Seasons' },
            { src: 'Feature/shangrilacard.png', video: 'https://www.youtube.com/embed/rsTbPKiGQdo', title: 'Shangri-La Frontier', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G79H23Z8P/shangri-la-frontier', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/solocard.png', video: 'https://www.youtube.com/embed/bssSj4cKsrI', title: 'Solo Leveling', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZEJ0K/solo-leveling', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/revengerscard.png', video: 'https://www.youtube.com/embed/idlLFNNpZiI', title: 'Tokyo Revengers', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G3KHEVMN1/tokyo-revengers', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/metalliccard.png', video: 'https://www.youtube.com/embed/yv8eVL4xBI4', title: 'Metallic Rouge', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G24H1NWMJ/metallic-rouge', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/deadmountcard.png', video: 'https://www.youtube.com/embed/_BDDj_4nmNg', title: 'Dead Mount Death Play', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G3KHEV04J/dead-mount-death-play', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/gluttonycard.png', video: 'https://www.youtube.com/embed/f3FwcHciZZ0', title: 'Berserk of Gluttony', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJV05V/berserk-of-gluttony', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/dragoncard.png', video: 'https://www.youtube.com/embed/2Vej889SS6s', title: 'Dragon Ball Super', episode: '131 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR19V7816/dragon-ball-super', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/bloodcard.png', video: 'https://www.youtube.com/embed/aMe0J7c8uOU', title: 'Blood Blockade Battlefront', episode: '25 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRWEQEZER/blood-blockade-battlefront', genre: 'Action', season: '2 Seasons' },
            { src: 'Feature/niercard.png', video: 'https://www.youtube.com/embed/eIMZYgb85xg', title: 'NieR:Automata Ver1.1a', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKNPW1/nierautomata-ver11a', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/killlakillcard.png', video: 'https://www.youtube.com/embed/B98NY8Hfo7I', title: 'Kill La Kill', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY8VM43GY/kill-la-kill', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/berserkcard.png', video: 'https://www.youtube.com/embed/0MIw4xzxcTU', title: 'Berserk', episode: '25 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYX04955R/berserk', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/icebladecard.png', video: 'https://www.youtube.com/embed/l1hx7s7Ywcs', title: 'The Iceblade Sorcerer', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZEP21/the-iceblade-sorcerer-shall-rule-the-world', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/plunderercard.png', video: 'https://www.youtube.com/embed/L1Y9r8psTmo', title: 'Plunderer', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN70Z/plunderer', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/irregularcard.png', video: 'https://www.youtube.com/embed/U-gkwdGooDU', title: 'The Irregular', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRMGDGZVR/the-irregular-at-magic-high-school', genre: 'Action', season: '3 Seasons' },
            { src: 'Feature/vinlandcard.png', video: 'https://www.youtube.com/embed/f8JrZ7Q_p-8', title: 'Vinland Saga', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3WKK0/vinland-saga', genre: 'Action', season: '2 Seasons' },
            { src: 'Feature/triggercard.png', video: 'https://www.youtube.com/embed/pqc0AS1nFlA', title: 'World Trigger', episode: '99 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR757DMKY/world-trigger', genre: 'Action', season: '3 Seasons' },
            { src: 'Feature/triguncard.png', video: 'https://www.youtube.com/embed/bJVyIXeUznY', title: 'Trigun', episode: '27 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYP58QMMY/trigun', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/freezingcard.png', video: 'https://www.youtube.com/embed/V5NefFZiaQc', title: 'Freezing', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRDQE71GY/freezing', genre: 'Action', season: '2 Seasons' },
            { src: 'Feature/butlercard.png', video: 'https://www.youtube.com/embed/S8j5iEklHyI', title: 'Black Butler', episode: '58 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYQ43P3E6/black-butler', genre: 'Action', season: '4 Seasons' },
            { src: 'Feature/datecard.png', video: 'https://www.youtube.com/embed/4CA7RDDhz2Q', title: 'Date A Live', episode: '58 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYEX5E1G6/date-a-live', genre: 'Action', season: '5 Seasons' },
            { src: 'Feature/assassinationcard.png', video: 'https://www.youtube.com/embed/kgNkGohA20k', title: 'Assassination Classroom', episode: '47 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRE59JGX6/assassination-classroom', genre: 'Action', season: '2 Seasons' },
            { src: 'Feature/soulcard.png', video: 'https://www.youtube.com/embed/ac-ir1b1p-k', title: 'Soul Eater', episode: '51 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYX0ZW80R/soul-eater', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/86card.png', video: 'https://www.youtube.com/embed/VSdS29SDvn4', title: '86 EIGHTY-SIX', episode: '23 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GVDHX8DM5/86-eighty-six', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/healingcard.png', video: 'https://www.youtube.com/embed/UkPRnHQJrws', title: 'The Wrong Way...', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G0XHWM1EK/the-wrong-way-to-use-healing-magic', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/windcard.png', video: 'https://www.youtube.com/embed/62r_G9bEPlU', title: 'WIND BREAKER', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G3KHEVDPE/wind-breaker', genre: 'Action', season: '1 Seasons' }, 
            { src: 'Feature/viralcard.png', video: 'https://www.youtube.com/embed/J6BdqP4lOkE', title: 'Viral Hit', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GJ0H7QGME/viral-hit', genre: 'Action', season: '1 Seasons' }, 
            { src: 'Feature/towercard.png', video: 'https://www.youtube.com/embed/RNyClma6awo', title: 'Tower of God', episode: '16 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6J0G49DR/tower-of-god', genre: 'Action', season: '1 Seasons' }, 
            //Action
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