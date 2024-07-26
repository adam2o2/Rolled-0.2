document.addEventListener('DOMContentLoaded', function() {
    const featureImage = document.getElementById('feature-image');
    const background = document.getElementById('background');
    const genreElement = document.getElementById('anime-genre');
    const seasonsElement = document.getElementById('anime-seasons');
    const episodesElement = document.getElementById('anime-episodes');
    const videoIframe = document.getElementById('video-iframe');
    const videoOverlay = document.getElementById('video-overlay');
    const crunchyrollButton = document.getElementById('crunchyroll-button');

    const featureImages = [
        { src: 'Feature/fairytailcard.png', video: 'https://www.youtube.com/embed/mAAKPx-ndAg', title: 'Fairy Tail', genre: 'Adventure', seasons: '3 Seasons', episodes: '328 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6DQDD3WR/fairy-tail' },
        { src: 'Feature/drstonecard.png', video: 'https://www.youtube.com/embed/S6OmSIxSj14', title: 'Dr. Stone', genre: 'Adventure', seasons: '4 Seasons', episodes: '59 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYEXQKJG6/dr-stone' },
        { src: 'Feature/frierencard.png', video: 'https://www.youtube.com/embed/pqUZaKn7flw', title: 'Frieren', genre: 'Adventure', seasons: '1 Season', episodes: '28 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XQX4/frieren-beyond-journeys-end' },
        { src: 'Feature/yuyucard.png', video: 'https://www.youtube.com/embed/bGc1Na8mlw0', title: 'Yuyu Hakusho', genre: 'Adventure', seasons: '1 Season', episodes: '112 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR9PKENW6/yu-yu-hakusho' },
        { src: 'Feature/fullmetalcard.png', video: 'https://www.youtube.com/embed/kx0nBaS_q50', title: 'Full Metal Alchemist', genre: 'Adventure', seasons: '1 Season', episodes: '64 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRGGPG93R/fullmetal-alchemist-brotherhood' },
        { src: 'Feature/goldenkamuycard.png', video: 'https://www.youtube.com/embed/Qqy7MCK4GeI', title: 'Golden Kamuy', genre: 'Adventure', seasons: '4 Seasons', episodes: '49 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8DWQN5Y/golden-kamuy' },
        { src: 'Feature/goldenwindcard.png', video: 'https://www.youtube.com/embed/Ubve8INYEws', title: 'Golden Wind', genre: 'Adventure', seasons: '1 Season', episodes: '42 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYP8DP1MY/jojos-bizarre-adventure' },
        { src: 'Feature/hxhcard.png', video: 'https://www.youtube.com/embed/d6kBeJjTGnY', title: 'Hunter X Hunter', genre: 'Adventure', seasons: '6 Seasons', episodes: '148 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY3VKX1MR/hunter-x-hunter' },
        { src: 'Feature/somalicard.png', video: 'https://www.youtube.com/embed/Xfw57amXb8Q', title: 'Somali', genre: 'Adventure', seasons: '1 Season', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G60X5KMPR/somali-and-the-forest-spirit' },
        { src: 'Feature/onepieceCard.png', video: 'https://www.youtube.com/embed/TbHtbzAnZJ4', title: 'One Piece', genre: 'Adventure', seasons: '25 Seasons', episodes: '1110 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece' },
        { src: 'Feature/marksmancard.png', video: 'https://www.youtube.com/embed/u6Pm0tDeGQQ', title: 'Lord Marksman', genre: 'Adventure', seasons: '1 Season', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYWEZN1NY/lord-marksman-and-vanadis' },
        { src: 'Feature/chroniclecard.png', video: 'https://www.youtube.com/embed/wcwHx5NTJFo', title: 'Chain Chronicle', genre: 'Adventure', seasons: '1 Season', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8VQJM0Y/chain-chronicle---the-light-of-haecceitas--' },
        { src: 'Feature/mydaughtercard.png', video: 'https://www.youtube.com/embed/hnhdx8TQ4UU', title: 'My Daughter Left', genre: 'Adventure', seasons: '1 Season', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G5PHNM9M5/my-daughter-left-the-nest-and-returned-an-s-rank-adventurer' },
        { src: 'Feature/stabbercard.png', video: 'https://www.youtube.com/embed/1m9S8wQ3SlE', title: 'Sorcerous Stabber Orphen', genre: 'Adventure', seasons: '1 Season', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GJ0H7QXDW/sorcerous-stabber-orphen' },
        { src: 'Feature/magicard.png', video: 'https://www.youtube.com/embed/2E7o26G1T0c', title: 'Magi', genre: 'Adventure', seasons: '3 Seasons', episodes: '50 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY09XN14Y/magi' }
    ];

    let currentVideoUrl = '';
    let currentCrunchyrollLink = '';

    function getRandomIndex(max) {
        return Math.floor(Math.random() * max);
    }

    function changeFeature() {
        const index = getRandomIndex(featureImages.length);
        const selectedImage = featureImages[index];

        featureImage.src = selectedImage.src;
        featureImage.style.display = 'block'; // Show the image once it has a valid src
        document.querySelector('.text1 h1').textContent = selectedImage.title;

        // Update genre, seasons, and episodes information
        genreElement.textContent = selectedImage.genre;
        seasonsElement.textContent = selectedImage.seasons;
        episodesElement.textContent = selectedImage.episodes;

        // Change background image dynamically
        background.style.backgroundImage = `url(${selectedImage.src})`;

        // Store the current video URL and Crunchyroll link
        currentVideoUrl = selectedImage.video;
        currentCrunchyrollLink = selectedImage.crunchyrollLink;
    }

    // Function to play video
    function playVideo(videoUrl) {
        if (videoUrl) {
            videoIframe.src = videoUrl;
            videoIframe.style.display = 'block';
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

    featureImage.addEventListener('click', function() {
        playVideo(currentVideoUrl);
        crunchyrollButton.href = currentCrunchyrollLink; // Update Crunchyroll button link
    });

    // Click event listener for overlay to close video
    videoOverlay.addEventListener('click', function() {
        videoIframe.style.display = 'none';
        videoIframe.src = '';
        videoOverlay.style.display = 'none'; // Hide overlay
        document.body.style.overflow = 'auto'; // Enable scrolling
    });

    // Initialize on page load
    changeFeature();



    const yellowBoxes = document.querySelectorAll('.yellow-box');

    // Define array for action anime images with titles, videos, and episodes
    let actionImages = [
        { src: 'mha.png', video: 'https://www.youtube.com/embed/LqJQqcDQxBg', title: 'My Hero Academia', episodes: '138 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia' },
        { src: 'fireforce.png', video: 'https://www.youtube.com/embed/fzM43HZ6oeg', title: 'Fire Force', episodes: '48 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYQWNXPZY/fire-force' },
        { src: 'bungo.png', video: 'https://www.youtube.com/embed/YUH1mfV3IEU', title: 'Bungo Stray Dogs', episodes: '62 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR5VXQ8PR/bungo-stray-dogs' },
        { src: 'jjk.png', video: 'https://www.youtube.com/embed/pkKu9hLT-t8', title: 'Jujutsu Kaisen', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen' },
        { src: 'akame.png', video: 'https://www.youtube.com/embed/NIeKMKwON0U', title: 'Akame Ga Kill', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/' },
        { src: 'AOT.png', video: 'https://www.youtube.com/embed/n4Nj6Y_SNYI', title: 'Attack On Titan', episodes: '99 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan'  },
        { src: 'demonslayer.png', video: 'https://www.youtube.com/embed/Sl2k7bfBeCw', title: 'Demon Slayer', episodes: '26 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba' },
        { src: 'fate.png', video: 'https://www.youtube.com/embed/nfzKXkL_i54', title: 'Fate Stay Night', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8V11X7Y/fatestay-night-unlimited-blade-works' },
        { src: 'godofhighschool.png', video: 'https://www.youtube.com/embed/oqjwUfprNAk', title: 'God of High School', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRVD0ZDQR/the-god-of-high-school' },
        { src: 'opm.png', video: 'https://www.youtube.com/embed/YUH1mfV3IEU', title: 'One Punch Man', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/' },
        { src: 'kenichi.png', video: 'https://www.youtube.com/embed/4xDehi5Qjqs', title: 'KenIchi', episodes: '50 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3W859/kenichi-the-mightiest-disciple' },
        { src: 'kindom.png', video: 'https://www.youtube.com/embed/bYudboNENqs', title: 'Kindom', episodes: '79 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRWE89KMR/kingdom' },
        { src: 'hinomaru.png', video: 'https://www.youtube.com/embed/Gxq9uR6EMd0', title: 'Hinomaru Sumo', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G60X7D34R/hinomaru-sumo' },
        { src: 'takt.png', video: 'https://www.youtube.com/embed/mv_SJoJY7sA', title: 'takt op.Destiny', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJVXX2/takt-opdestiny' },
        { src: 'akudama.png', video: 'https://www.youtube.com/embed/H2vRwrLyzQM', title: 'Akudama Drive', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GKEH2G440/akudama-drive' },
        { src: 'peach.png', video: 'https://www.youtube.com/embed/7vtl3NGuG1c', title: 'Peach Boy Riverside', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XM84/peach-boy-riverside' },
        { src: 'tenjho.png', video: 'https://www.youtube.com/embed/BM-dTZY9HI0', title: 'Tenjho Tenge', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR5VXM03R/tenjho-tenge' },
        { src: 'mushibugyo.png', video: 'https://www.youtube.com/embed/uv7dT2VSpp8', title: 'Mushibugyo', episodes: '26 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G65VJVG56/mushibugyo' },
        { src: 'monsterstrike.png', video: 'https://www.youtube.com/embed/Yz-57Anl-Os', title: 'Monster Strike', episodes: '51 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G619JM99Y/monster-strike' },
        { src: 'shangrila.png', video: 'https://www.youtube.com/embed/rsTbPKiGQdo', title: 'Shangri-La Frontier', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G79H23Z8P/shangri-la-frontier' },
        { src: 'solo.png', video: 'https://www.youtube.com/embed/bssSj4cKsrI', title: 'Solo Leveling', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZEJ0K/solo-leveling' },
        { src: 'revengers.png', video: 'https://www.youtube.com/embed/idlLFNNpZiI', title: 'Tokyo Revengers', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G3KHEVMN1/tokyo-revengers' },
        { src: 'metallic.png', video: 'https://www.youtube.com/embed/yv8eVL4xBI4', title: 'Metallic Rouge', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G24H1NWMJ/metallic-rouge' },
        { src: 'deadmount.png', video: 'https://www.youtube.com/embed/_BDDj_4nmNg', title: 'Dead Mount Death Play', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G3KHEV04J/dead-mount-death-play' },
        { src: 'gluttony.png', video: 'https://www.youtube.com/embed/f3FwcHciZZ0', title: 'Berserk of Gluttony', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJV05V/berserk-of-gluttony' },
        { src: 'dragon.png', video: 'https://www.youtube.com/embed/2Vej889SS6s', title: 'Dragon Ball Super', episodes: '131 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR19V7816/dragon-ball-super' },
        { src: 'blood.png', video: 'https://www.youtube.com/embed/aMe0J7c8uOU', title: 'Blood Blockade Battlefront', episodes: '25 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRWEQEZER/blood-blockade-battlefront' },
        { src: 'nier.png', video: 'https://www.youtube.com/embed/eIMZYgb85xg', title: 'NieR:Automata Ver1.1a', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKNPW1/nierautomata-ver11a' },
        { src: 'killlakill.png', video: 'https://www.youtube.com/embed/B98NY8Hfo7I', title: 'Kill La Kill', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8VM43GY/kill-la-kill' },
        { src: 'berserk.png', video: 'https://www.youtube.com/embed/0MIw4xzxcTU', title: 'Berserk', episodes: '25 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYX04955R/berserk' },
        { src: 'iceblade.png', video: 'https://www.youtube.com/embed/l1hx7s7Ywcs', title: 'The Iceblade Sorcerer', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZEP21/the-iceblade-sorcerer-shall-rule-the-world' },
        { src: 'plunderer.png', video: 'https://www.youtube.com/embed/L1Y9r8psTmo', title: 'Plunderer', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN70Z/plunderer' },
        { src: 'irregular.png', video: 'https://www.youtube.com/embed/U-gkwdGooDU', title: 'The Irregular', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRMGDGZVR/the-irregular-at-magic-high-school' },
        { src: 'vinland.png', video: 'https://www.youtube.com/embed/f8JrZ7Q_p-8', title: 'Vinland Saga', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3WKK0/vinland-saga' },
        { src: 'trigger.png', video: 'https://www.youtube.com/embed/pqc0AS1nFlA', title: 'World Trigger', episodes: '99 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR757DMKY/world-trigger' },
        { src: 'trigun.png', video: 'https://www.youtube.com/embed/bJVyIXeUznY', title: 'Trigun', episodes: '27 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYP58QMMY/trigun' },
        { src: 'freezing.png', video: 'https://www.youtube.com/embed/V5NefFZiaQc', title: 'Freezing', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRDQE71GY/freezing' },
        { src: 'butler.png', video: 'https://www.youtube.com/embed/S8j5iEklHyI', title: 'Black Butler', episodes: '58 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYQ43P3E6/black-butler' },
        { src: 'date.png', video: 'https://www.youtube.com/embed/4CA7RDDhz2Q', title: 'Date A Live', episodes: '58 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYEX5E1G6/date-a-live' },
        { src: 'assassination.png', video: 'https://www.youtube.com/embed/kgNkGohA20k', title: 'Assassination Classroom', episodes: '47 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRE59JGX6/assassination-classroom' },
        { src: 'wistoria.png', video: 'https://www.youtube.com/embed/Br9na3MPEh8', title: 'Wistoria', episodes: '3 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GW4HM7WK9/wistoria-wand-and-sword' },
        { src: 'soul.png', video: 'https://www.youtube.com/embed/ac-ir1b1p-k', title: 'Soul Eater', episodes: '51 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYX0ZW80R/soul-eater' },
        { src: '86.png', video: 'https://www.youtube.com/embed/VSdS29SDvn4', title: '86 EIGHTY-SIX', episodes: '23 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GVDHX8DM5/86-eighty-six' },
        { src: 'healing.png', video: 'https://www.youtube.com/embed/UkPRnHQJrws', title: 'The Wrong Way...', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G0XHWM1EK/the-wrong-way-to-use-healing-magic' },
        { src: 'wind.png', video: 'https://www.youtube.com/embed/62r_G9bEPlU', title: 'WIND BREAKER', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G3KHEVDPE/wind-breaker' }, 
        { src: 'viral.png', video: 'https://www.youtube.com/embed/J6BdqP4lOkE', title: 'Viral Hit', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GJ0H7QGME/viral-hit' }, 
        { src: 'tower.png', video: 'https://www.youtube.com/embed/RNyClma6awo', title: 'Tower of God', episodes: '16 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6J0G49DR/tower-of-god' }, 
        { src: 'elusivesamurai.png', video: 'https://www.youtube.com/embed/O4AqQNg1MI0', title: 'The Elusive Samurai', episodes: '3 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GQWH0M19X/the-elusive-samurai' }, 
        { src: 'kaijuno8.png', video: 'https://www.youtube.com/embed/JwF7bhvnCxI', title: 'Kaiju No. 8', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XQ7D/kaiju-no-8' },
    ];

    function loadRandomActionAnime() {
        yellowBoxes.forEach(box => {
            if (actionImages.length === 0) {
                console.log('No more unique anime images available.');
                return;
            }

            const index = getRandomIndex(actionImages.length);
            const selectedAnime = actionImages[index];

            const imageElement = box.querySelector('.box-image');
            const titleElement = box.querySelector('.title');
            const episodesElement = box.querySelector('.episodes');

            // Set image source, alt text, title, and episodes
            imageElement.src = `Action/${selectedAnime.src}`;
            imageElement.alt = selectedAnime.title;
            titleElement.textContent = selectedAnime.title;
            episodesElement.textContent = selectedAnime.episodes;

            // Set the data-video-url and data-crunchyroll-link attributes
            box.setAttribute('data-video-url', selectedAnime.video);
            box.setAttribute('data-crunchyroll-link', selectedAnime.crunchyrollLink);

            // Remove the selected anime from actionImages array to avoid duplicates
            actionImages.splice(index, 1);
        });
    }

    // Call the function to load random action anime on page load
    loadRandomActionAnime();

    // Log a message to confirm script execution
    console.log('Action anime script executed successfully.');

    // Function to play video
    function playActionVideo(videoUrl, crunchyrollLink) {
        if (videoUrl) {
            videoIframe.src = videoUrl;
            videoIframe.style.display = 'block';
            videoOverlay.style.display = 'flex'; // Show overlay
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

            // Set the Crunchyroll button link for action anime
            crunchyrollButton.href = crunchyrollLink;
        } else {
            videoIframe.style.display = 'none';
            videoOverlay.style.display = 'none'; // Hide overlay
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    }

    // Add event listener to yellow boxes
    yellowBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const videoUrl = this.getAttribute('data-video-url');
            const crunchyrollLink = this.getAttribute('data-crunchyroll-link');
            playActionVideo(videoUrl, crunchyrollLink);
        });
    });

    // Add event listener to video overlay to close the video
    videoOverlay.addEventListener('click', function() {
        playActionVideo(null, '');
    });


// Select all red boxes for romance anime
const redBoxes = document.querySelectorAll('.red-box');

// Define array for romance anime images with titles, videos, and episodes
const romanceImages = [
{ src: 'duke.png', video: 'https://www.youtube.com/embed/55T_YNvgBbE', title: 'The Duke of Death', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G79H23V0G/the-duke-of-death-and-his-maid' },
{ src: 'asign.png', video: 'https://www.youtube.com/embed/v50CI8LVwEY', title: 'A Sign of Affection', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3W2V7/a-sign-of-affection' },
{ src: 'dressup.png', video: 'https://www.youtube.com/embed/8oveGY6h6T8', title: 'My Dress-Up Darling', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GQWH0M9N8/my-dress-up-darling' },
{ src: 'nagatoro.png', video: 'https://www.youtube.com/embed/6dVQ93xBYUg', title: 'NAGATORO', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GQWH0M455/dont-toy-with-me-miss-nagatoro' },
{ src: 'tonikawa.png', video: 'https://www.youtube.com/embed/97wksuHdnF4', title: 'TONIKAWA', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRWMGGQ86/tonikawa-over-the-moon-for-you' },
{ src: 'girlfriend.png', video: 'https://www.youtube.com/embed/1foV8Fh0WRc', title: 'Girlfriend Girlfriend', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3WP97/girlfriend-girlfriend' },
{ src: 'cuckoos.png', video: 'https://www.youtube.com/embed/4dhHnE_Jsbo', title: 'A Couple of Cuckoos', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM39MP/a-couple-of-cuckoos' },
{ src: 'quintuplets.png', video: 'https://www.youtube.com/embed/ILDps6CfIwI', title: 'Quintessential Quintuplets', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY4PD7Z06/the-quintessential-quintuplets' },
{ src: 'morethan.png', video: 'https://www.youtube.com/embed/rL60dbSWgtE', title: 'More than a Married Couple', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GJ0H7Q5N3/more-than-a-married-couple-but-not-lovers' },
{ src: 'bunnygirl.png', video: 'https://www.youtube.com/embed/tGJTrM9RphQ', title: 'Bunny Girl Senpai', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYW4MG9G6/rascal-does-not-dream-of-bunny-girl-senpai' },
{ src: 'loveafter.png', video: 'https://www.youtube.com/embed/t_LOPSpeYvE', title: 'Love After World Domination', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3WG78/love-after-world-domination' },
{ src: 'masamune.png', video: 'https://www.youtube.com/embed/dJSjZnKDbHk', title: 'Masamune-kuns Revenge', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYX02P3MR/masamune-kuns-revenge' },
{ src: 'mylittle.png', video: 'https://www.youtube.com/embed/SlD-8h96pDw', title: 'My Little Monster', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6MG8P1W6/my-little-monster' },
{ src: 'worldgod.png', video: 'https://www.youtube.com/embed/OdBmj4TWqzk', title: 'The World God Only Knows', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR9PV5MD6/the-world-god-only-knows' },
{ src: 'yamadakun.png', video: 'https://www.youtube.com/embed/iwyufFdfO80', title: 'Yamada-kun', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G63VMKVQY/yamada-kun-and-the-seven-witches' },
{ src: 'horimiya.png', video: 'https://www.youtube.com/embed/e4RCugyx5No', title: 'Horimiya', episodes: '26 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G9VHN9P43/horimiya' },
{ src: 'timeloop.png', video: 'https://www.youtube.com/embed/aPSmBt6GeqA', title: '7th Time Loop', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G4PH0WJGQ/7th-time-loop-the-villainess-enjoys-a-carefree-life-married-to-her-worst-enemy' },
{ src: 'theangel.png', video: 'https://www.youtube.com/embed/twfLsWdXcZI', title: 'The Angel Next Door', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G9VHN91DJ/the-angel-next-door-spoils-me-rotten' },
{ src: 'shikimori.png', video: 'https://www.youtube.com/embed/utyXdk4G0-w', title: 'Shikimori\'s Not Just a Cutie', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN7M4/shikimoris-not-just-a-cutie' },
{ src: 'villainess.png', video: 'https://www.youtube.com/embed/5cfNLZqPBiM', title: 'I\'m the Villainess...', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5X0JK/im-the-villainess-so-im-taming-the-final-boss' },
{ src: 'orange.png', video: 'https://www.youtube.com/embed/G9CzaN3WyKs', title: 'Orange', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRVNXW75Y/orange' },
{ src: 'stepmom.png', video: 'https://www.youtube.com/embed/W4C2ye5mK9g', title: 'My Stepmom\'s...', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G0XHWM44M/my-stepmoms-daughter-is-my-ex' },
{ src: 'science.png', video: 'https://www.youtube.com/embed/4vJ33PVcsMM', title: 'Science Fell in Love...', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6P5MMXV6/science-fell-in-love-so-i-tried-to-prove-it' },
{ src: 'ourdating.png', video: 'https://www.youtube.com/embed/5Z824-bOhZA', title: 'Our Dating Story...', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G5PHNM9G5/our-dating-story-the-experienced-you-and-the-inexperienced-me' },
{ src: 'lv999.png', video: 'https://www.youtube.com/embed/Mk8gEBzunD8', title: 'My Love Story...', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKNPQ7/my-love-story-with-yamada-kun-at-lv999' },
{ src: '100.png', video: 'https://www.youtube.com/embed/ls2VNcSifi4', title: 'The 100 Girlfriends...', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN933/the-100-girlfriends-who-really-really-really-really-really-love-you' },
{ src: 'mywife.png', video: 'https://www.youtube.com/embed/slxnDYn0dPY', title: 'My Wife is the...', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYP8XN95Y/my-wife-is-the-student-council-president' },
{ src: 'aharen.png', video: 'https://www.youtube.com/embed/Rd4usifUuEY', title: 'Aharen-san wa Hakarenai', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN72N/aharen-san-wa-hakarenai' },
{ src: 'kisshim.png', video: 'https://www.youtube.com/embed/d6Eh-y9BnUg', title: 'Kiss Him, Not Me', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G65VXM1P6/kiss-him-not-me' },
{ src: 'bokuben.png', video: 'https://www.youtube.com/embed/qFSK5XI7QyM', title: 'BOKUBEN: We Never Learn', episodes: '26 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR8DN8XDR/we-never-learn-bokuben' },
{ src: 'mylove.png', video: 'https://www.youtube.com/embed/GdB0LsAceGE', title: 'MY love STORY!!', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6MGPGZ86/my-love--story' },
{ src: 'tsuredure.png', video: 'https://www.youtube.com/embed/VUCFNbrVtiM', title: 'Tsuredure Children', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY2P9PZPY/tsuredure-children' },
{ src: 'annoying.png', video: 'https://www.youtube.com/embed/TxDxGA4i758', title: 'My Senpai Is Annoying', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GP5HJ815K/my-senpai-is-annoying' },
{ src: 'domestic.png', video: 'https://www.youtube.com/embed/A8dh2392QsQ', title: 'Domestic Girlfriend', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G679D84KY/domestic-girlfriend' },
{ src: 'kaguya.png', video: 'https://www.youtube.com/embed/S6p_PjK7naQ', title: 'Love Is War', episodes: '41 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRJ0J828Y/kaguya-sama-love-is-war' },
{ src: 'gal.png', video: 'https://www.youtube.com/embed/LexsadMYp5A?start=11', title: 'My First Girlfriend Is a Gal', episodes: '10 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G675N15MR/my-first-girlfriend-is-a-gal' },
{ src: 'tyrant.png', video: 'https://www.youtube.com/embed/7lVHNZK6Fn4', title: 'Love Tyrant', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6NQ59GG6/love-tyrant' },
{ src: 'hensuki.png', video: 'https://www.youtube.com/embed/a1BxLBr_O88', title: 'Hensuki', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GQWH0MX4W/hensuki---are-you-willing-to-fall-in-love-with-a-pervert-as-long-as-shes-a-cutie' },
{ src: 'engage.png', video: 'https://www.youtube.com/embed/Qsauwn7RnS4', title: 'Engage Kiss', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GJ0H7Q8J0/engage-kiss' },
{ src: 'remake.png', video: 'https://www.youtube.com/embed/cFAx8fMWqpM', title: 'Remake Our Life!', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GKEH2GZX9/remake-our-life' },
{ src: 'oresuki.png', video: 'https://www.youtube.com/embed/Pt3MqwiSyKY', title: 'ORESUKI', episodes: '15 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8DP4JDY/oresuki-are-you-the-only-one-who-loves-me' },
{ src: 'cocktail.png', video: 'https://www.youtube.com/embed/vvMNeq4AW1k', title: 'Love is Like a Cocktail', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6P8QX856/love-is-like-a-cocktail' },
{ src: 'rokudo.png', video: 'https://www.youtube.com/embed/pGJOnJRpAIo', title: 'Rokudo\'s Bad Girls', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GW4HM75QW/rokudos-bad-girls' },
{ src: 'karakai.png', video: 'https://www.youtube.com/embed/jfckVPkj-Ok', title: 'KARAKAI JOZU...', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6X0P133Y/karakai-jozu-no-takagi-san' },
{ src: 'dagashi.png', video: 'https://www.youtube.com/embed/NK82zttzfh8', title: 'Dagashi Kashi', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYDQN15K6/dagashi-kashi' },
{ src: 'arakawa.png', video: 'https://www.youtube.com/embed/sqeoy8k6sco', title: 'Arakawa Under the Bridge', episodes: '26 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRP8PGDWR/arakawa-under-the-bridge' },
{ src: 'asteroid.png', video: 'https://www.youtube.com/embed/ogIQ3d1w8Rs', title: 'Asteroid in Love', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRMEJX3VY/asteroid-in-love' },
{ src: 'netsuzou.png', video: 'https://www.youtube.com/embed/E6y5q55Q2rU', title: 'Netsuzou Trap -NTR-', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G609E9EW6/netsuzou-trap--ntr-' },
{ src: 'chihayafuru.png', video: 'https://www.youtube.com/embed/yEflqf1U9lA', title: 'Chihayafuru', episodes: '26 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYGG57V3Y/chihayafuru' },
{ src: 'galaxy.png', video: 'https://www.youtube.com/embed/Y4fOhmP1050', title: 'A Galaxy Next Door', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM3PZW/a-galaxy-next-door' },


];

function loadRandomRomanceAnime() {
    redBoxes.forEach(box => {
        if (romanceImages.length === 0) {
            console.log('No more unique anime images available.');
            return;
        }

        const index = getRandomIndex(romanceImages.length);
        const selectedAnime = romanceImages[index];

        const imageElement = box.querySelector('.box-image');
        const titleElement = box.querySelector('.title');
        const episodesElement = box.querySelector('.episodes');

        // Set image source, alt text, title, and episodes
        imageElement.src = `Romance/${selectedAnime.src}`;
        imageElement.alt = selectedAnime.title;
        titleElement.textContent = selectedAnime.title;
        episodesElement.textContent = selectedAnime.episodes;

        // Set the data-video-url and data-crunchyroll-link attributes
        box.setAttribute('data-video-url', selectedAnime.video);
        box.setAttribute('data-crunchyroll-link', selectedAnime.crunchyrollLink);

        // Remove the selected anime from romanceImages array to avoid duplicates
        romanceImages.splice(index, 1);
    });
}

// Call the function to load random romance anime on page load
loadRandomRomanceAnime();

// Log a message to confirm script execution
console.log('Romance anime script executed successfully.');

// Function to play video
function playRomanceVideo(videoUrl, crunchyrollLink) {
    if (videoUrl) {
        videoIframe.src = videoUrl;
        videoIframe.style.display = 'block';
        videoOverlay.style.display = 'flex'; // Show overlay
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

        // Set the Crunchyroll button link for romance anime
        crunchyrollButton.href = crunchyrollLink;
    } else {
        videoIframe.style.display = 'none';
        videoOverlay.style.display = 'none'; // Hide overlay
        document.body.style.overflow = 'auto'; // Enable scrolling
    }
}

// Add event listener to red boxes
redBoxes.forEach(box => {
    box.addEventListener('click', function() {
        const videoUrl = this.getAttribute('data-video-url');
        const crunchyrollLink = this.getAttribute('data-crunchyroll-link');
        playRomanceVideo(videoUrl, crunchyrollLink);
    });
});

// Add event listener to video overlay to close the video
videoOverlay.addEventListener('click', function() {
    playRomanceVideo(null, '');
});


// Select all blue boxes for isekai anime
const blueBoxes = document.querySelectorAll('.blue-box');

// Define array for isekai anime images with titles, videos, and episodes
const isekaiImages = [
{ src: 'mushoku.png', video: 'https://www.youtube.com/embed/k5VxfJpzy1Q', title: 'Mushoku Tensei', episodes: '23 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G24H1N3MP/mushoku-tensei-jobless-reincarnation' },
{ src: 'nogamenolife.png', video: 'https://www.youtube.com/embed/ZgWgnSG9PB0', title: 'No Game No Life', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/'},
{ src: 'overlord.png', video: 'https://www.youtube.com/embed/uhlBqFj9kDw', title: 'OverLord', episodes: '52 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G69PZ5PDY/overlord' },
{ src: 'rezero.png', video: 'https://www.youtube.com/embed/lXs3yIc_2CU', title: 'Re:Zero', episodes: '50 episodes', crunchyrollLink: 'https://www.crunchyroll.com/' },
{ src: 'sagaoftanya.png', video: 'https://www.youtube.com/embed/V8Gx2_sHMRI', title: 'Saga of Tanya', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR9P57W96/saga-of-tanya-the-evil' },
{ src: 'sao.png', video: 'https://www.youtube.com/embed/6ohYYtxfDCg', title: 'Sword Art Online', episodes: '96 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR49G9VP6/sword-art-online' },
{ src: 'shieldhero.png', video: 'https://www.youtube.com/embed/rKnyi3TRznA', title: 'Shield Hero', episodes: '38 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6W4QKX0R/the-rising-of-the-shield-hero' },
{ src: 'slime.png', video: 'https://www.youtube.com/embed/uOzwqb74K34', title: 'Reincarnated as A Slime', episodes: '48 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYZJ43JMR/that-time-i-got-reincarnated-as-a-slime' },
{ src: 'tsukimichi.png', video: 'https://www.youtube.com/embed/Q7IUIZix_yw', title: 'Tsukimichi', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GZJH3D719/tsukimichi--moonlit-fantasy-' },
{ src: 'konosuba.png', video: 'https://www.youtube.com/embed/5h4rQY9bpgE', title: 'Konosuba', episodes: '20 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYE5K3GQR/konosuba--gods-blessing-on-this-wonderful-world' },
{ src: 'devilisaparttimer.png', video: 'https://www.youtube.com/embed/9eCFxxQ4WE0', title: 'Devil is a Part Timer', episodes: '26 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR75Z5KKY/the-devil-is-a-part-timer' },
{ src: 'loghorizon.png', video: 'https://www.youtube.com/embed/IG1VhJ75r8k', title: 'Log Horizon', episodes: '62 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRVNMG93Y/log-horizon' },
{ src: 'blacksummoner.png', video: 'https://www.youtube.com/embed/m3W8sZhn3-o', title: 'Black Summoner', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GVDHX8JJE/black-summoner' },
{ src: 'spider.png', video: 'https://www.youtube.com/embed/geMv8Lwk2sM', title: 'So What im a Spider', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G79H23G0D/so-im-a-spider-so-what' },
{ src: 'vendingmachine.png', video: 'https://www.youtube.com/embed/mMOzW_UEdvg', title: 'Reborn as A Vending Machine', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GVDHX8504/reborn-as-a-vending-machine-i-now-wander-the-dungeon' },
{ src: 'yourmom.png', video: 'https://www.youtube.com/embed/8qoBfi8REs0', title: 'Do You Love Your...', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6J0EEP0R/do-you-love-your-mom-and-her-two-hit-multi-target-attacks' },
{ src: 'demonlord.png', video: 'https://www.youtube.com/embed/V0gQ4N6Y4bI', title: 'Demon Lord, Retry!', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM37KD/demon-lord-retry' },
{ src: 'summon.png', video: 'https://www.youtube.com/embed/hodocFdl5O8', title: 'How Not to Summon a Demon Lord', episodes: '22 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYZJXWWGR/how-not-to-summon-a-demon-lord' },
{ src: 'restaurant.png', video: 'https://www.youtube.com/embed/j_4JaXWk1a4', title: 'Restaurant to Another World', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR49493P6/restaurant-to-another-world' },
{ src: 'another.png', video: 'https://www.youtube.com/embed/A1ll0D9J6II', title: 'In Another World...', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYQ4ZWV46/in-another-world-with-my-smartphone' },
{ src: 'knight.png', video: 'https://www.youtube.com/embed/vR9N0c_SFAY', title: 'Knights & Magic', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYX08020R/knights--magic' },
{ src: 'realist.png', video: 'https://www.youtube.com/embed/M_pWteehKzM', title: 'How a Realist...', episodes: '26 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJV3MV/how-a-realist-hero-rebuilt-the-kingdom' },
{ src: 'million.png', video: 'https://www.youtube.com/embed/U26Up23GGDk', title: 'Im Standing on a Million Lives', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6Q9GGE26/im-standing-on-a-million-lives' },
{ src: 'grace.png', video: 'https://www.youtube.com/embed/ylms3zzyfuA', title: 'By the Grace of the Gods', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GP5HJ85ED/by-the-grace-of-the-gods' },
{ src: 'assassin.png', video: 'https://www.youtube.com/embed/2Poci60rWzg', title: 'The Worlds Finest...', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GMEHME55K/the-worlds-finest-assassin-gets-reincarnated-in-another-world-as-an-aristocrat' },
{ src: 'cheat.png', video: 'https://www.youtube.com/embed/NH_lYSh38N8', title: 'Isekai Cheat...', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY79GJX1R/isekai-cheat-magician' },
{ src: 'ascendance.png', video: 'https://www.youtube.com/embed/Wo28IopG2WE', title: 'Ascendance of a Bookworm', episodes: '36 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6793XKZY/ascendance-of-a-bookworm' },
{ src: 'death.png', video: 'https://www.youtube.com/embed/L4VW38PLuOc', title: 'Death March to...', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6K50XJ7Y/death-march-to-the-parallel-world-rhapsody' },
{ src: 'wise.png', video: 'https://www.youtube.com/embed/gy-78Y-chds', title: 'Wise Mans Grandchild', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G63K95846/wise-mans-grandchild' },
{ src: 'seirei.png', video: 'https://www.youtube.com/embed/KS7dinNk_z4', title: 'Seirei Gensouki', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G0XHWM380/seirei-gensouki-spirit-chronicles' },
{ src: 'grimgar.png', video: 'https://www.youtube.com/embed/aR0UcWq_JrY', title: 'Grimgar, Ashes and Illusions', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRVNX917Y/grimgar-ashes-and-illusions' },
{ src: 'ambition.png', video: 'https://www.youtube.com/embed/_Q-qoxLfk48', title: 'The Ambition...', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6JQK7D5R/the-ambition-of-oda-nobuna' },
{ src: 'conception.png', video: 'https://www.youtube.com/embed/8jUGg1yjmLU', title: 'Conception', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR1XQ92VR/conception' },
{ src: 'master.png', video: 'https://www.youtube.com/embed/mVd2HX5oVRk', title: 'The Master of Ragnarok...', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6NVQ59XY/the-master-of-ragnarok--blesser-of-einherjar' },
{ src: 'high.png', video: 'https://www.youtube.com/embed/QSFXJzpEpqs', title: 'High School Prodigies...', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYXJKGDN6/high-school-prodigies-have-it-easy-even-in-another-world' },
{ src: 'sweet.png', video: 'https://www.youtube.com/embed/uPYEALVBhI8', title: 'Sweet Reincarnation', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GJ0H7QG2G/sweet-reincarnation' },
{ src: 'reincarnation.png', video: 'https://www.youtube.com/embed/NNrCwPAj1IY', title: 'The Reincarnation of...', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJVWXG/the-reincarnation-of-the-strongest-exorcist-in-another-world' },
{ src: 'didnt.png', video: 'https://www.youtube.com/embed/39XpskL3jic', title: 'Didnt I Say to...', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G679305JY/didnt-i-say-to-make-my-abilities-average-in-the-next-life' },
{ src: 'iruma.png', video: 'https://www.youtube.com/embed/kkeuJt0DE7g', title: 'Welcome to Demon...', episodes: '65 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3W2PK/chillin-in-another-world-with-level-2-super-cheat-powers' },
{ src: 'chillin.png', video: 'https://www.youtube.com/embed/IwxaZRkXdps', title: 'Chillin in Another...', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3W2PK/chillin-in-another-world-with-level-2-super-cheat-powers' },
{ src: 'skeleton.png', video: 'https://www.youtube.com/embed/dPzd8VNbQQI', title: 'Skeleton Knight...', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G8DHV7WJP/skeleton-knight-in-another-world' },
{ src: 'drug.png', video: 'https://www.youtube.com/embed/reOfMXg3kqs', title: 'Drug Store in...', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZEN80/drug-store-in-another-world---the-slow-life-of-a-cheat-pharmacist' },
{ src: 'endride.png', video: 'https://www.youtube.com/embed/4yzMnwxt3yQ', title: 'Endride', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G649D0KPY/endride' },
{ src: 'campfire.png', video: 'https://www.youtube.com/embed/JaxjIDezSBQ', title: 'Campfire Cooking in...', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5X3EE/campfire-cooking-in-another-world-with-my-absurd-skill' },
{ src: 'saint.png', video: 'https://www.youtube.com/embed/JwsnFH4XRsU', title: 'The Saints Magic...', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJV3P3/the-saints-magic-power-is-omnipotent' },
{ src: 'meiji.png', video: 'https://www.youtube.com/embed/F1LDCFKTbqU', title: 'Meiji Tokyo Renka', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR4PD7WQY/meiji-tokyo-renka' },
{ src: 'collection.png', video: 'https://www.youtube.com/embed/kUcgIqI0_kE', title: 'Sengoku Collection', episodes: '26 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR3VW7XM6/sengoku-collection-parallel-world-samurai' },
{ src: 'sengoku.png', video: 'https://www.youtube.com/embed/fAYhdawxFwc', title: 'SENGOKU NIGHT BLOOD', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G65VGXVQ6/sengoku-night-blood' },
{ src: 'problem.png', video: 'https://www.youtube.com/embed/qQpOcHsMUnA', title: 'Problem Children...', episodes: '10 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6Q49G21R/problem-children-are-coming-from-another-world-arent-they' },
{ src: 'tobe.png', video: 'https://www.youtube.com/embed/z2WARBz4QXc', title: 'To Be Heroine', episodes: '7 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G63KVV3E6/to-be-heroine' }
];


function loadRandomIsekaiAnime() {
    blueBoxes.forEach(box => {
        if (isekaiImages.length === 0) {
            console.log('No more unique anime images available.');
            return;
        }

        const index = getRandomIndex(isekaiImages.length);
        const selectedAnime = isekaiImages[index];

        const imageElement = box.querySelector('.box-image');
        const titleElement = box.querySelector('.title');
        const episodesElement = box.querySelector('.episodes');

        // Set image source, alt text, title, and episodes
        imageElement.src = `Isekai/${selectedAnime.src}`;
        imageElement.alt = selectedAnime.title;
        titleElement.textContent = selectedAnime.title;
        episodesElement.textContent = selectedAnime.episodes;

        // Set the data-video-url and data-crunchyroll-link attributes
        box.setAttribute('data-video-url', selectedAnime.video);
        box.setAttribute('data-crunchyroll-link', selectedAnime.crunchyrollLink);

        // Remove the selected anime from isekaiImages array to avoid duplicates
        isekaiImages.splice(index, 1);
    });
}

// Call the function to load random isekai anime on page load
loadRandomIsekaiAnime();

// Log a message to confirm script execution
console.log('Isekai anime script executed successfully.');

// Function to play video
function playIsekaiVideo(videoUrl, crunchyrollLink) {
    if (videoUrl) {
        videoIframe.src = videoUrl;
        videoIframe.style.display = 'block';
        videoOverlay.style.display = 'flex'; // Show overlay
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

        // Set the Crunchyroll button link for isekai anime
        crunchyrollButton.href = crunchyrollLink;
    } else {
        videoIframe.style.display = 'none';
        videoOverlay.style.display = 'none'; // Hide overlay
        document.body.style.overflow = 'auto'; // Enable scrolling
    }
}

// Add event listener to blue boxes
blueBoxes.forEach(box => {
    box.addEventListener('click', function() {
        const videoUrl = this.getAttribute('data-video-url');
        const crunchyrollLink = this.getAttribute('data-crunchyroll-link');
        playIsekaiVideo(videoUrl, crunchyrollLink);
    });
});

// Add event listener to video overlay to close the video
videoOverlay.addEventListener('click', function() {
    playIsekaiVideo(null, '');
});


// Select all green boxes for thriller anime
const greenBoxes = document.querySelectorAll('.green-box');

// Define array for thriller anime images with titles, videos, and episodes
const thrillerImages = [
{ src: 'erased.png', video: 'https://www.youtube.com/embed/dky7my5xd2c', title: 'Erased', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYGG92K7Y/erased' },
{ src: 'futurediary.png', video: 'https://www.youtube.com/embed/KfznTm8mJA4', title: 'Future Diary', episodes: '26 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYGGXPQ2Y/the-future-diary' },
{ src: 'hellsing.png', video: 'https://www.youtube.com/embed/7CQKMDFAKMk', title: 'Hellsing', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G649DPXQY/hellsing' },
{ src: 'paranoiaagent.png', video: 'https://www.youtube.com/embed/QEsNDDwhSJ4', title: 'Paranoia Agent', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G5PHNMW8E/paranoia-agent' },
{ src: 'psychopass.png', video: 'https://www.youtube.com/embed/YzuJnyebc40', title: 'Psycho-Pass', episodes: '22 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR75253JY/psycho-pass' },
{ src: 'terrorinresonance.png', video: 'https://www.youtube.com/embed/aiZrjeZvF8Y', title: 'Terror in...', episodes: '11 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G675W00MR/terror-in-resonance' },
{ src: 'thepromisedneverland.png', video: 'https://www.youtube.com/embed/5llQ56toiPs', title: 'The Promised Neverland', episodes: '23 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYVD2K1WY/the-promised-neverland' },
{ src: 'tokyoghoul.png', video: 'https://www.youtube.com/embed/vGuQeQsoRgU', title: 'Tokyo Ghoul', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6NV7Z50Y/tokyo-ghoul' },
{ src: 'tomodachi.png', video: 'https://www.youtube.com/embed/y-hPQ0-orMM', title: 'Tomodachi Game', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GJ0H7QX0Z/tomodachi-game' },
{ src: 'parasyte.png', video: 'https://www.youtube.com/embed/xWtUMR1BveU', title: 'Parasyte', episodes: '24 episodes', crunchyrollLink: 'https://crunchyroll.com/series/G6K53VGGY/parasyte--the-maxim-' },
{ src: 'deathparade.png', video: 'https://www.youtube.com/embed/8ziUXV6t0ow', title: 'Death Parade', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6GGXKNE6/death-parade' },
{ src: 'detectiveconan.png', video: 'https://www.youtube.com/embed/mz3b6Ym8s6s', title: 'Detective Conan', episodes: '1,056 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6JQVM3ER/case-closed-detective-conan' },
{ src: 'kabaneri.png', video: 'https://www.youtube.com/embed/lQ9VjFBqfH8', title: 'Kabaneri', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR24GX896/kabaneri-of-the-iron-fortress' },
{ src: 'inspectre.png', video: 'https://www.youtube.com/embed/l9QsM6PeTV4', title: 'In/Spectre', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYZJEEQGR/inspectre' },
{ src: 'deadmanwonderland.png', video: 'https://www.youtube.com/embed/0OjJiQ_tB6k', title: 'Deadman Wonderland', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRX02EZ06/deadman-wonderland' },
{ src: 'ron.png', video: 'https://www.youtube.com/embed/f8eyItevwLI', title: "Ron Kamonohashi's...", episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN903/ron-kamonohashis-forbidden-deductions' },
{ src: 'anotherr.png', video: 'https://www.youtube.com/embed/N2iSnFwt9do', title: 'Another', episodes: '12 episodes', crunchyrollLink: 'https://crunchyroll.com/series/GR09X52WR/another' },
{ src: 'gleipnir.png', video: 'https://www.youtube.com/embed/QzQ1sDFUJiA', title: 'Gleipnir', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G9VHN9P7W/gleipnir' },
{ src: 'detective.png', video: 'https://www.youtube.com/embed/N2iSnFwt9do', title: 'The Detective Is Already Dead', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G24H1N334/the-detective-is-already-dead' },
{ src: 'egg.png', video: 'https://www.youtube.com/embed/zJ4yP7Icclc', title: 'WONDER EGG...', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM372Z/wonder-egg-priority' },
{ src: 'rokka.png', video: 'https://www.youtube.com/embed/KLOtrSOeO10', title: 'Rokka', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRVNEXKXY/rokka--braves-of-the-six-flowers-' },
{ src: 'battle.png', video: 'https://www.youtube.com/embed/hWnSZnkjZa4', title: 'Battle Game...', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G8DHV7DG7/battle-game-in-5-seconds' },
{ src: 'puella.png', video: 'https://www.youtube.com/embed/XLzlHZTfGeI', title: 'Puella Magi...', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRDQK39GY/puella-magi-madoka-magica' },
{ src: 'classroom.png', video: 'https://www.youtube.com/embed/iYsx6w5PNno', title: 'Classroom of...', episodes: '38 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRVN8MNQY/classroom-of-the-elite' },
{ src: 'loveof.png', video: 'https://www.youtube.com/embed/QOe5sSs5fmI', title: 'Love of Kill', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G0XHWM0XW/love-of-kill' },
{ src: 'steins.png', video: 'https://www.youtube.com/embed/MKfTpK2U9Z4', title: 'Steins;Gate 0', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYWE7W5GY/steinsgate' },
{ src: 'millionaire.png', video: 'https://www.youtube.com/embed/an6QA92h_5o', title: 'The Millionaire Detective', episodes: '11 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GP5HJ855D/the-millionaire-detective---balance-unlimited' },
{ src: 'dance.png', video: 'https://www.youtube.com/embed/fp6qRTvCTuw', title: 'Dance in the...', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6QWGNN76/dance-in-the-vampire-bund' },
{ src: 'abandoned.png', video: 'https://www.youtube.com/embed/bWM32ukSlTY', title: 'To the Abandoned...', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRW459Z8Y/to-the-abandoned-sacred-beasts' },
{ src: 'pandora.png', video: 'https://www.youtube.com/embed/9Psc_hBkOoc', title: 'PandoraHearts', episodes: '25 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR751Q2ZY/pandorahearts' },
{ src: 'darwin.png', video: 'https://www.youtube.com/embed/_cLxzQoNVpo', title: "Darwin's Game", episodes: '11 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G61X24PZ6/darwins-game' },
{ src: 'gibiate.png', video: 'https://www.youtube.com/embed/rU6HjgMIIBs', title: 'GIBIATE', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR3K2EXXR/gibiate' },
{ src: 'phantom.png', video: 'https://www.youtube.com/embed/-NfKJZvT_64', title: 'Phantom in the...', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G63KVZV46/phantom-in-the-twilight' },
{ src: 'joker.png', video: 'https://www.youtube.com/embed/9uzrn5QzNWc', title: 'JOKER GAME', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8VXP2JY/joker-game' },
{ src: 'school.png', video: 'https://www.youtube.com/embed/ZG1Q6N5L-fo', title: 'School Days', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G62P4MG76/school-days' },
{ src: 'gankutsuou.png', video: 'https://www.youtube.com/embed/nCCHjKzPzTY', title: 'Gankutsuou', episodes: '24 episodes', crunchyrollLink: 'https://crunchyroll.com/series/G6MG10376/gankutsuou' },
{ src: 'moriarty.png', video: 'https://www.youtube.com/embed/zDX2dfLqhjo', title: 'Moriarty the Patriot', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM379D/moriarty-the-patriot' },
{ src: 'junji.png', video: 'https://www.youtube.com/embed/sV0LIpvJ97s', title: 'Junji Ito Collection', episodes: '13 episodes', crunchyrollLink: 'https://crunchyroll.com/series/G68V4NDJ6/junji-ito-collection' },
{ src: 'kings.png', video: 'https://www.youtube.com/embed/VDT9gIVGwK4', title: "King's Game", episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8V73KJY/kings-game' },
{ src: 'invaded.png', video: 'https://www.youtube.com/embed/nc7Y0BvEYQk', title: 'ID: INVADED', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G79H230GE/id-invaded' },
{ src: 'bake.png', video: 'https://www.youtube.com/embed/PugZi9QKL64', title: 'Bakemonogatari', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G69PXP1EY/bakemonogatari' },
{ src: 'total.png', video: 'https://www.youtube.com/embed/maAC_u1kpaU', title: 'Total Eclipse', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8VDPKGY/total-eclipse' },
{ src: 'big.png', video: 'https://www.youtube.com/embed/FVOdep-vEjU', title: 'BIG ORDER', episodes: '10 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6VNEV0QR/big-order' },
{ src: 'garden.png', video: 'https://www.youtube.com/embed/JSTMtdv119c', title: 'The Garden of Sinners', episodes: '10 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6DK07N7R/the-garden-of-sinners' },
{ src: 'evil.png', video: 'https://www.youtube.com/embed/z2ggBRm97GA', title: 'EVIL OR LIVE', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6E5098GY/evil-or-live' },
{ src: 'chaos.png', video: 'https://www.youtube.com/embed/NRquuySnm68', title: 'CHAOS;CHILD', episodes: '14 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR497ZW36/chaoschild' },
{ src: 'p4.png', video: 'https://www.youtube.com/embed/PnvAj2XyL-k', title: 'Persona4', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR9P3GND6/persona4-the-golden-animation' },
{ src: 'acca.png', video: 'https://www.youtube.com/embed/_lSK9EYLCP4', title: 'ACCA', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR5V95N8R/acca-13-territory-inspection-dept' },
{ src: 'ga.png', video: 'https://www.youtube.com/embed/NG0Sfkm1D9U', title: 'Ga-Rei-Zero', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6ZXZD93R/ga-rei-zero' },
{ src: 'strange.png', video: 'https://www.youtube.com/embed/aAZ6kSyUf-E', title: 'Strange+', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRGGVKZWR/strange' }
];


function loadRandomThrillerAnime() {
    greenBoxes.forEach(box => {
        if (thrillerImages.length === 0) {
            console.log('No more unique anime images available.');
            return;
        }

        const index = getRandomIndex(thrillerImages.length);
        const selectedAnime = thrillerImages[index];

        const imageElement = box.querySelector('.box-image');
        const titleElement = box.querySelector('.title');
        const episodesElement = box.querySelector('.episodes');

        // Set image source, alt text, title, and episodes
        imageElement.src = `Thriller/${selectedAnime.src}`;
        imageElement.alt = selectedAnime.title;
        titleElement.textContent = selectedAnime.title;
        episodesElement.textContent = selectedAnime.episodes;

        // Set the data-video-url and data-crunchyroll-link attributes
        box.setAttribute('data-video-url', selectedAnime.video);
        box.setAttribute('data-crunchyroll-link', selectedAnime.crunchyrollLink);

        // Remove the selected anime from thrillerImages array to avoid duplicates
        thrillerImages.splice(index, 1);
    });
}

// Call the function to load random thriller anime on page load
loadRandomThrillerAnime();

// Log a message to confirm script execution
console.log('Thriller anime script executed successfully.');

// Function to play video
function playThrillerVideo(videoUrl, crunchyrollLink) {
    if (videoUrl) {
        videoIframe.src = videoUrl;
        videoIframe.style.display = 'block';
        videoOverlay.style.display = 'flex'; // Show overlay
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

        // Set the Crunchyroll button link for thriller anime
        crunchyrollButton.href = crunchyrollLink;
    } else {
        videoIframe.style.display = 'none';
        videoOverlay.style.display = 'none'; // Hide overlay
        document.body.style.overflow = 'auto'; // Enable scrolling
    }
}

// Add event listener to green boxes
greenBoxes.forEach(box => {
    box.addEventListener('click', function() {
        const videoUrl = this.getAttribute('data-video-url');
        const crunchyrollLink = this.getAttribute('data-crunchyroll-link');
        playThrillerVideo(videoUrl, crunchyrollLink);
    });
});

// Add event listener to video overlay to close the video
videoOverlay.addEventListener('click', function() {
    playThrillerVideo(null, '');
});


// Select all black boxes for adventure anime
const blackBoxes = document.querySelectorAll('.black-box');

// Define array for adventure anime images with titles, videos, and episodes
const adventureImages = [
    { src: 'fairytail.png', video: 'https://www.youtube.com/embed/mAAKPx-ndAg', title: 'Fairy Tail', episodes: '328 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6DQDD3WR/fairy-tail' },
    { src: 'drstone.png', video: 'https://www.youtube.com/embed/S6OmSIxSj14', title: 'Dr. Stone', episodes: '35 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYEXQKJG6/dr-stone' },
    { src: 'frieren.png', video: 'https://www.youtube.com/embed/pqUZaKn7flw', title: 'Frieren', episodes: '28 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XQX4/frieren-beyond-journeys-end' },
    { src: 'yuyu.png', video: 'https://www.youtube.com/embed/bGc1Na8mlw0', title: 'Yuyu Hakusho', episodes: '112 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR9PKENW6/yu-yu-hakusho' },
    { src: 'fullmetal.png', video: 'https://www.youtube.com/embed/kx0nBaS_q50', title: 'Full Metal Alchemist', episodes: '94 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRGGPG93R/fullmetal-alchemist-brotherhood' },
    { src: 'goldenkamuy.png', video: 'https://www.youtube.com/embed/Qqy7MCK4GeI', title: 'Golden Kamuy', episodes: '49 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8DWQN5Y/golden-kamuy' },
    { src: 'goldenwind.png', video: 'https://www.youtube.com/embed/Ubve8INYEws', title: 'Golden Wind', episodes: '42 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYP8DP1MY/jojos-bizarre-adventure' },
    { src: 'hxh.png', video: 'https://www.youtube.com/embed/d6kBeJjTGnY', title: 'Hunter X Hunter', episodes: '148 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY3VKX1MR/hunter-x-hunter' },
    { src: 'somali.png', video: 'https://www.youtube.com/embed/Xfw57amXb8Q', title: 'Somali', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G60X5KMPR/somali-and-the-forest-spirit' },
    { src: 'onepiece.png', video: 'https://www.youtube.com/embed/TbHtbzAnZJ4', title: 'One Piece', episodes: '1,110 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece' },
    { src: 'marksman.png', video: 'https://www.youtube.com/embed/u6Pm0tDeGQQ', title: 'Lord Marksman', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYWEZN1NY/lord-marksman-and-vanadis' },
    { src: 'chronicle.png', video: 'https://www.youtube.com/embed/wcwHx5NTJFo', title: 'Chain Chronicle', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8VQJM0Y/chain-chronicle---the-light-of-haecceitas' },
    { src: 'mydaughter.png', video: 'https://www.youtube.com/embed/hnhdx8TQ4UU', title: 'My Daughter Left', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G5PHNM9M5/my-daughter-left-the-nest-and-returned-an-s-rank-adventurer' },
    { src: 'stabber.png', video: 'https://www.youtube.com/embed/1m9S8wQ3SlE', title: 'Sorcerous Stabber Orphen', episodes: '49 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GJ0H7QXDW/sorcerous-stabber-orphen' },
    { src: 'magi.png', video: 'https://www.youtube.com/embed/2E7o26G1T0c', title: 'Magi', episodes: '50 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY09XN14Y/magi' },
    { src: 'boruto.png', video: 'https://www.youtube.com/embed/nQeIObeB--8', title: 'BORUTO: NEXT GENERATIONS', episodes: '293 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR75Q020Y/boruto-naruto-next-generations'  },
    { src: 'undead.png', video: 'https://www.youtube.com/embed/iaYgDqydDoI', title: 'The Unwanted Undead Featurer', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GW4HM7WZQ/the-unwanted-undead-adventurer'  },
    { src: 'twin.png', video: 'https://www.youtube.com/embed/Kt7a6ms1LmA', title: 'Twin Star Exorcists', episodes: '50 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G63VM084Y/twin-star-exorcists'  },
    { src: 'narutoold.png', video: 'https://www.youtube.com/embed/-G9BqkgZXRA', title: 'Naruto', episodes: '220 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY9PJ5KWR/naruto'  },
    { src: 'demonking.png', video: 'https://www.youtube.com/embed/9qJyDlZst8c', title: 'The Misfit of Demon King Academy' , episodes: '36 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY243NN0R/the-misfit-of-demon-king-academy' },
    { src: 'tog.png', video: 'https://www.youtube.com/embed/RNyClma6awo', title: 'Tower of God', episodes: '14 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6J0G49DR/tower-of-god'  },
    { src: 'goblin.png', video: 'https://www.youtube.com/embed/7qnhoB_cHSg', title: 'GOBLIN SLAYER', episodes: '26 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6VDMN306/goblin-slayer'  },
    { src: 'ancient.png', video: 'https://www.youtube.com/embed/bNNaZdtGZVc', title: 'The Ancient Magus\' Bride', episodes: '54 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRZXQJJ8Y/the-ancient-magus-bride'  },
    { src: 'trigun.png', video: 'https://www.youtube.com/embed/AzZYXqUdp5o', title: 'Trigun Stampede', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM3PK5/trigun-stampede'  },
    { src: 'orient.png', video: 'https://www.youtube.com/embed/L4W_Eo6HU30', title: 'Orient', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GVDHX8PMM/orient'  },
    { src: 'shinobi.png', video: 'https://www.youtube.com/embed/URyzSJM-_HE', title: 'Shinobi no Ittoki', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G5PHNM7KG/shinobi-no-ittoki'  },
    { src: 'digimon.png', video: 'https://www.youtube.com/embed/fmfR2nR_RRY', title: 'Digimon Feature', episodes: '67 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYEX24PV6/digimon-adventure-2020'  },
    { src: 'quest.png', video: 'https://www.youtube.com/embed/RrwbuwhIwbA', title: 'Dragon Quest', episodes: '101 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYXM79M56/dragon-quest-the-adventure'  },
    { src: 'toriko.png', video: 'https://www.youtube.com/embed/YZNDrITMpbw', title: 'Toriko', episodes: '146 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRE5MNM06/toriko' },
    { src: 'radiant.png', video: 'https://www.youtube.com/embed/qZwtUu3p1zg', title: 'RADIANT', episodes: '42 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6W4MEZ0R/radiant' },
    { src: 'sabikui.png', video: 'https://www.youtube.com/embed/1k7o4ywm6Is', title: 'SABIKUI BISCO', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G79H23V24/sabikui-bisco' },
    { src: 'eden.png', video: 'https://www.youtube.com/embed/1Ykbdi94frI', title: 'EDENS ZERO', episodes: '26 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G79H23XJJ/edens-zero' },
    { src: 'idaten.png', video: 'https://www.youtube.com/embed/q3GbjO2NXFw', title: 'Idaten Deities', episodes: '11 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G8DHV7DJ7/the-idaten-deities-know' },
    { src: 'fena.png', video: 'https://www.youtube.com/embed/QTtXMqgZRpg', title: 'Fena: Pirate Princess', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GZJH3DPM1/fena-pirate-princess' },
    { src: 'jormungand.png', video: 'https://www.youtube.com/embed/jubovSaFDec', title: 'Jormungand', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRMGWEM3R/jormungand' },
    { src: 'revenger.png', video: 'https://www.youtube.com/embed/8mNZABPDT-A', title: 'Revenger', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G8DHV7425/revenger' },
    { src: 'sakugan.png', video: 'https://www.youtube.com/embed/YBZCuDWjA9A', title: 'SAKUGAN', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GP5HJ800Z/sakugan' },
    { src: 'slime.png', video: 'https://www.youtube.com/embed/uOzwqb74K34', title: 'Reincarnated as A Slime', episodes: '48 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYZJ43JMR/that-time-i-got-reincar' },
    { src: 'tsukimichi.png', video: 'https://www.youtube.com/embed/Q7IUIZix_yw', title: 'Tsukimichi', episodes: '37 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GZJH3D719/tsukimichi--moonlit-fan' },
    { src: 'mushoku.png', video: 'https://www.youtube.com/embed/k5VxfJpzy1Q', title: 'Mushoku Tensei', episodes: '49 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G24H1N3MP/mushoku-tensei-jobless-' },
    { src: 'shieldhero.png', video: 'https://www.youtube.com/embed/rKnyi3TRznA', title: 'Shield Hero', episodes: '74 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6W4QKX0R/the-rising-of-the-shiel' },
    { src: 'loghorizon.png', video: 'https://www.youtube.com/embed/IG1VhJ75r8k', title: 'Log Horizon', episodes: '62 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRVNMG93Y/log-horizon' },
    { src: 'sao.png', video: 'https://www.youtube.com/embed/6ohYYtxfDCg', title: 'Sword Art Online', episodes: '107 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR49G9VP6/sword-art-online' },
    { src: 'camp.png', video: 'https://www.youtube.com/embed/vpH42sJ8t9c', title: 'Laid-Back Camp', episodes: '44 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRWEW95KR/laid-back-camp' },
    { src: 'solo.png', video: 'https://www.youtube.com/embed/bssSj4cKsrI', title: 'Solo Leveling', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZEJ0K/solo-leveling' },
    { src: 'Aot.png', video: 'https://www.youtube.com/embed/n4Nj6Y_SNYI', title: 'Attack On Titan', episodes: '94 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan' },
    { src: 'shangrila.png', video: 'https://www.youtube.com/embed/rsTbPKiGQdo', title: 'Shangri-La Frontier', episodes: '25 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G79H23Z8P/shangri-la-frontier' },
    { src: 'vinland.png', video: 'https://www.youtube.com/embed/f8JrZ7Q_p-8', title: 'Vinland Saga', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3WKK0/vinland-saga' },
    { src: 'dragon.png', video: 'https://www.youtube.com/embed/2Vej889SS6s', title: 'Dragon Ball Super', episodes: '131 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR19V7816/dragon-ball-super'  },
    { src: 'blue.png', video: 'https://www.youtube.com/embed/hwnpiByHi20', title: 'Blue Exorcist', episodes: '49 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G649PJ0JY/blue-exorcist'  }
];


function loadRandomAdventureAnime() {
    blackBoxes.forEach(box => {
        if (adventureImages.length === 0) {
            console.log('No more unique anime images available.');
            return;
        }

        const index = getRandomIndex(adventureImages.length);
        const selectedAnime = adventureImages[index];

        const imageElement = box.querySelector('.box-image');
        const titleElement = box.querySelector('.title');
        const episodesElement = box.querySelector('.episodes');

        // Set image source, alt text, title, and episodes
        imageElement.src = `Adventure/${selectedAnime.src}`;
        imageElement.alt = selectedAnime.title;
        titleElement.textContent = selectedAnime.title;
        episodesElement.textContent = selectedAnime.episodes;

        // Set the data-video-url and data-crunchyroll-link attributes
        box.setAttribute('data-video-url', selectedAnime.video);
        box.setAttribute('data-crunchyroll-link', selectedAnime.crunchyrollLink);

        // Remove the selected anime from adventureImages array to avoid duplicates
        adventureImages.splice(index, 1);
    });
}

// Call the function to load random adventure anime on page load
loadRandomAdventureAnime();

// Log a message to confirm script execution
console.log('Adventure anime script executed successfully.');

// Function to play video
function playAdventureVideo(videoUrl, crunchyrollLink) {
    if (videoUrl) {
        videoIframe.src = videoUrl;
        videoIframe.style.display = 'block';
        videoOverlay.style.display = 'flex'; // Show overlay
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

        // Set the Crunchyroll button link for adventure anime
        crunchyrollButton.href = crunchyrollLink;
    } else {
        videoIframe.style.display = 'none';
        videoOverlay.style.display = 'none'; // Hide overlay
        document.body.style.overflow = 'auto'; // Enable scrolling
    }
}

// Add event listener to black boxes
blackBoxes.forEach(box => {
    box.addEventListener('click', function() {
        const videoUrl = this.getAttribute('data-video-url');
        const crunchyrollLink = this.getAttribute('data-crunchyroll-link');
        playAdventureVideo(videoUrl, crunchyrollLink);
    });
});

// Add event listener to video overlay to close the video
videoOverlay.addEventListener('click', function() {
    playAdventureVideo(null, '');
});



// Select all purple boxes for sports anime
const purpleBoxes = document.querySelectorAll('.purple-box');

// Define array for sports anime images with titles, videos, and episodes
const sportsImages = [
    { src: 'haikyu.png', video: 'https://www.youtube.com/embed/KhZG9Uw7PxM', title: 'Haikyu!!', episodes: '85 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8VM8MWY/haikyu' },
    { src: 'yuri.png', video: 'https://www.youtube.com/embed/KuhLOnIszok', title: 'Yuri on Ice', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY2PEJ0MY/yuri-on-ice' },
    { src: 'ippo.png', video: 'https://www.youtube.com/embed/a94NcwNgPdo?start=1', title: 'Hajime No Ippo', episodes: '127 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GW4HM7N7X/hajime-no-ippo-the-fighting' },
    { src: 'kurokobasket.png', video: 'https://www.youtube.com/embed/1KLvA6FMNiE', title: 'Kurokos Basketball', episodes: '75 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G62P48X56/kurokos-basketball' },
    { src: 'princeoftennis.png', video: 'https://www.youtube.com/embed/H0aHXo8q85g', title: 'The Prince of Tennis', episodes: '178 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G79H23V91/the-prince-of-tennis' },
    { src: 'runwiththewind.png', video: 'https://www.youtube.com/embed/hECoG4DhFVQ', title: 'Run With the Wind', episodes: '23 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G68DM2316/run-with-the-wind' },
    { src: 'pedal.png', video: 'https://www.youtube.com/embed/4pwc916s8J0', title: 'Yowamushi Pedal', episodes: '112 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRGGVKP4R/yowamushi-pedal' },
    { src: 'slamdunk.png', video: 'https://www.youtube.com/embed/CbK6Yy4f4zY', title: 'Slam Dunk', episodes: '101 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G69PJJM3Y/slam-dunk' },
    { src: 'freedive.png', video: 'https://www.youtube.com/embed/iLUZd5e_9vs', title: 'Free', episodes: '37 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRDQV2VWY/free---iwatobi-swim-club' },
    { src: 'aoashi.png', video: 'https://www.youtube.com/embed/UdKoCImaUeQ', title: 'Aoashi', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G4PH0WX5J/aoashi' },
    { src: 'bluelock.png', video: 'https://www.youtube.com/embed/IVsII3dLbWc?start=1', title: 'Blue Lock', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G4PH0WEKE/blue-lock' },
    { src: 'megalobox.png', video: 'https://www.youtube.com/embed/gVxLZityaR0', title: 'MEGALOBOX', episodes: '26 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR4PVJ1WY/megalobox' },
    { src: 'sk8.png', video: 'https://www.youtube.com/embed/vuoYi-1rCA4', title: 'SK8 the Infinity', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G5PHNM434/sk8-the-infinity' },
    { src: 'eyeshield.png', video: 'https://www.youtube.com/embed/IYgnjsihha4', title: 'Eyeshield', episodes: '145 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRE5KGN36/eyeshield-21' },
    { src: 'ahirunosora.png', video: 'https://www.youtube.com/embed/rsqxACPa8EU', title: 'Ahiru no Sora', episodes: '50 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6NVGNJGY/ahiru-no-sora' },
    { src: 'captain.png', video: 'https://www.youtube.com/embed/K6zQ1qs2hLY', title: 'Captain Tsubasa', episodes: '39 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G4PH0WJDQ/captain-tsubasa-junior' },
    { src: 'day.png', video: 'https://www.youtube.com/embed/VKavtkIZXoI', title: 'DAYS', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYX040PKR/days' },
    { src: 'mfghost.png', video: 'https://www.youtube.com/embed/zNWZjjkKfXs', title: 'MF GHOST', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3W2W7/mf-ghost' },
    { src: 'hinomaru.png', video: 'https://www.youtube.com/embed/Gxq9uR6EMd0', title: 'Hinomaru Sumo', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G60X7D34R/hinomaru-sumo' },
    { src: 'tsurune.png', video: 'https://www.youtube.com/embed/6w_GwGdk8_0', title: 'Tsurune', episodes: '14 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRDKVP34Y/tsurune' },
    { src: 'birdie.png', video: 'https://www.youtube.com/embed/EgmBeG0Yyl8', title: 'Birdie Wing', episodes: '25 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN714/birdie-wing--golf-girls' },
    { src: 'overtake.png', video: 'https://www.youtube.com/embed/x9H2uJxOREs', title: 'OVERTAKE!', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G9VHN9Q4N/overtake' },
    { src: '243.png', video: 'https://www.youtube.com/embed/5utDbhnMF0s', title: '2.43 Volleyball Team', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJVEZ1/243-seiin-high-school-volleyball' },
    { src: 'loveallplay.png', video: 'https://www.youtube.com/embed/PMHRDK2qjS4', title: 'Love All Play', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GKEH2G4MW/love-all-play' },
    { src: 'burningkabaddi.png', video: 'https://www.youtube.com/embed/CeUcyCPcDa4', title: 'Burning Kabaddi' , episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G9VHN9W5J/burning-kabaddi' },
    { src: 'pingpong.png', video: 'https://www.youtube.com/embed/ItlDaDfLBn8', title: 'Ping Pong', episodes: '11 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRJQV0N3Y/ping-pong-the-animation' },
    { src: 'iwakakeru.png', video: 'https://www.youtube.com/embed/T8Skpo5daFI', title: 'Iwakakeru -Sport Climbing Girls-', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRJK7WV4Y/iwakakeru--sport-climbing-girls' },
    { src: 'tamayomi.png', video: 'https://www.youtube.com/embed/BohDWS5YWdo', title: 'TAMAYOMI: The Baseball Girls', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM39XE/tamayomi-the-baseball-girls' },
    { src: '2nd.png', video: 'https://www.youtube.com/embed/tk4rmNvDgLI', title: 'MAJOR 2nd', episodes: '52 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6P5WVEQ6/major-2nd' },
    { src: 'puraore.png', video: 'https://www.youtube.com/embed/1hBHRibhTjc', title: 'PuraOre! Pride of Orange', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G3KHEV77Z/puraore-pride-of-orange' },
    { src: 'hanebado.png', video: 'https://www.youtube.com/embed/GoHQ1ARlm4I', title: 'HANEBADO!', episodes: '25 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRZJXKN86/hanebado' },
    { src: 'wave.png', video: 'https://www.youtube.com/embed/hdtr-LAywcU', title: 'Wave, Listen to Me!', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZE1PX/wave--lets-go-surfing' },
    { src: 'cleanfreak.png', video: 'https://www.youtube.com/embed/pTtBxVeaqjo', title: 'Clean Freak! Aoyama kun', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYNQZQ3XY/clean-freak-aoyama-kun' },
    { src: 'backflip.png', video: 'https://www.youtube.com/embed/tsELGZjOwhw', title: 'Backflip!!', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM3NEV/backflip' },
    { src: 'starsalign.png', video: 'https://www.youtube.com/embed/opgXY7fqSEw', title: 'Stars Align', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM3983/stars-align' },
    { src: 'kemonomichi.png', video: 'https://www.youtube.com/embed/YaSMOrWpYrM', title: 'Kemono Michi: Rise Up', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G8DHV7EPX/kemono-michi-rise-up' },
    { src: 'salarymansclub.png', video: 'https://www.youtube.com/embed/s74Cvn86dEk', title: 'Salaryman\'s Club', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G9VHN9P99/salarymans-club' },
    { src: 'skateleadingstars.png', video: 'https://www.youtube.com/embed/t9rzegGBBi0', title: 'Skate-Leading Stars', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G9VHN971K/skate-leading-stars' },
    { src: 'shootgoal.png', video: 'https://www.youtube.com/embed/vTCYrqTuoVU', title: 'Shoot! Goal to the Future', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GVDHX8JZ2/shoot-goal-to-the-future' },
    { src: 're-main.png', video: 'https://www.youtube.com/embed/HvZ7xtjYMSk', title: 'RE-MAIN', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3WKZ3/re-main' },
    { src: 'farewellmydear.png', video: 'https://www.youtube.com/embed/kim1S3ySNqs', title: 'Farewell, My Dear Cramer', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZE431/farewell-my-dear-cramer' },
    { src: 'tigermaskw.png', video: 'https://www.youtube.com/embed/JdIexLN-R0Q', title: 'Tiger Mask W', episodes: '38 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8VJJ0GY/tiger-mask-w' },
    { src: 'extremehearts.png', video: 'https://www.youtube.com/embed/sp3qRgn2pEc', title: 'Extreme Hearts', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G3KHEVQQG/extreme-hearts' },
    { src: 'twocar.png', video: 'https://www.youtube.com/embed/7IIevQEOXZM', title: 'TWOCAR', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY2PQNPMY/twocar' },
    { src: 'sorairoutility.png', video: 'https://www.youtube.com/embed/zvuJ-D1W_bU', title: 'Sorairo Utility', episodes: '1 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XDJM/sorairo-utility' },
    { src: 'futsalboys.png', video: 'https://www.youtube.com/embed/3CbQaVZwNMM', title: 'Futsal Boys!!!!', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G24H1NJE2/futsal-boys' },
    { src: 'fanfare.png', video: 'https://www.youtube.com/embed/6izny1r6HYU', title: 'Fanfare of Adolescence', episodes: '11 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GMEHME4QD/fanfare-of-adolescence' },
    { src: 'gurazeni.png', video: 'https://www.youtube.com/embed/oyXkrLEBkc8', title: 'Gurazeni: Money Pitch', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRVDWZZ4R/gurazeni-money-pitch' },
    { src: 'howheavyaredumbbells.png', video: 'https://www.youtube.com/embed/2YPtn01c66M', title: 'How Heavy Are the Dumbbells You Lift?', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GP5HJ80VJ/how-heavy-are-the-dumbbells-you-lift' },
    { src: 'chihayafuru.png', video: 'https://www.youtube.com/embed/yEflqf1U9lA', title: 'Chihayafuru', episodes: '75 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYGG57V3Y/chihayafuru' }

];




function loadRandomSportsAnime() {
    purpleBoxes.forEach(box => {
        if (sportsImages.length === 0) {
            console.log('No more unique anime images available.');
            return;
        }

        const index = getRandomIndex(sportsImages.length);
        const selectedAnime = sportsImages[index];

        const imageElement = box.querySelector('.box-image');
        const titleElement = box.querySelector('.title');
        const episodesElement = box.querySelector('.episodes');

        // Set image source, alt text, title, and episodes
        imageElement.src = `Sports/${selectedAnime.src}`;
        imageElement.alt = selectedAnime.title;
        titleElement.textContent = selectedAnime.title;
        episodesElement.textContent = selectedAnime.episodes;

        // Set the data-video-url and data-crunchyroll-link attributes
        box.setAttribute('data-video-url', selectedAnime.video);
        box.setAttribute('data-crunchyroll-link', selectedAnime.crunchyrollLink);

        // Remove the selected anime from sportsImages array to avoid duplicates
        sportsImages.splice(index, 1);
    });
}

// Call the function to load random sports anime on page load
loadRandomSportsAnime();

// Log a message to confirm script execution
console.log('Sports anime script executed successfully.');

// Function to play video
function playSportsVideo(videoUrl, crunchyrollLink) {
    if (videoUrl) {
        videoIframe.src = videoUrl;
        videoIframe.style.display = 'block';
        videoOverlay.style.display = 'flex'; // Show overlay
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

        // Set the Crunchyroll button link for sports anime
        crunchyrollButton.href = crunchyrollLink;
    } else {
        videoIframe.style.display = 'none';
        videoOverlay.style.display = 'none'; // Hide overlay
        document.body.style.overflow = 'auto'; // Enable scrolling
    }
}

// Add event listener to purple boxes
purpleBoxes.forEach(box => {
    box.addEventListener('click', function() {
        const videoUrl = this.getAttribute('data-video-url');
        const crunchyrollLink = this.getAttribute('data-crunchyroll-link');
        playSportsVideo(videoUrl, crunchyrollLink);
    });
});

// Add event listener to video overlay to close the video
videoOverlay.addEventListener('click', function() {
    playSportsVideo(null, '');
});


// Select all orange boxes for comedy anime
const orangeBoxes = document.querySelectorAll('.orange-box');

// Define array for comedy anime images with titles, videos, and episodes
const comedyImages = [
    { src: 'bucchigiri.png', video: 'https://www.youtube.com/embed/Kw6JkejW_Hw', title: 'BUCCHIGIRI?!', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G5PHNM985/bucchigiri' },
    { src: 'buddy.png', video: 'https://www.youtube.com/embed/Oqxm1mn917g', title: 'Buddy Daddies', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5X3DE/buddy-daddies' },
    { src: 'combatants.png', video: 'https://www.youtube.com/embed/-uJdqz-fBl8', title: 'Combatants Will...', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GQWH0M98E/combatants-will-be-dispatched' },
    { src: 'ghost.png', video: 'https://www.youtube.com/embed/kOi5SpwDQR4', title: 'Ghost Stories', episodes: '20 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6MGP0K46/ghost-stories' },
    { src: 'gintama.png', video: 'https://www.youtube.com/embed/Eh43PgDfSxU', title: 'Gintama', episodes: '367 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYQ4MKDZ6/gintama' },
    { src: 'grandblue.png', video: 'https://www.youtube.com/embed/YILULCpNg9U', title: 'Grand Blue', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR097JN7R/grand-blue' },
    { src: 'gurren.png', video: 'https://www.youtube.com/embed/rAQylCHv8Cw', title: 'Gurren Lagann', episodes: '27 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR097JN7R/gurren-lagann' },
    { src: 'konosuba.png', video: 'https://www.youtube.com/embed/N1AO7k2o78g', title: 'Konosuba', episodes: '20 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYE5K3GQR/konosuba--gods-blessing-on-this-wonderful-world' },
    { src: 'mashle.png', video: 'https://www.youtube.com/embed/_ce5_P1Hj5A', title: 'Mashle', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZEP8W/mashle-magic-and-muscles' },
    { src: 'mob.png', video: 'https://www.youtube.com/embed/nTze7vAdRpM', title: 'Mob Psycho 100', episodes: '25 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY190DKQR/mob-psycho-100' },
    { src: 'nichijou.png', video: 'https://www.youtube.com/embed/0AEV-8d_vbg', title: 'Nichijou', episodes: '26 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR24PVM76/nichijou---my-ordinary-life' },
    { src: 'pickup.png', video: 'https://www.youtube.com/embed/Nk23ix2xgTg', title: 'Is It Wrong to Try...', episodes: '37 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6DQN9KGR/is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon' },
    { src: 'robo.png', video: 'https://www.youtube.com/embed/M0X4J1jpApw', title: 'ME & ROBOCO', episodes: '20 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GKEH2G031/me--roboco' },
    { src: 'spacedandy.png', video: 'https://www.youtube.com/embed/S4qW86moTys', title: 'Space Dandy', episodes: '26 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G63K4W296/space-dandy' },
    { src: 'spyxfamily.png', video: 'https://www.youtube.com/embed/6sosTNRw_uQ', title: 'Spy x Family', episodes: '25 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G4PH0WXVJ/spy-x-family' },
    { src: 'butler.png', video: 'https://www.youtube.com/embed/S8j5iEklHyI', title: 'Black Butler', episodes: '65 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYQ43P3E6/black-butler' },
    { src: 'camp.png', video: 'https://www.youtube.com/embed/vpH42sJ8t9c', title: 'Laid-Back Camp', episodes: '44 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRWEW95KR/laid-back-camp' },
    { src: 'blackclover.png', video: 'https://www.youtube.com/embed/vUjAxk1qYzQ', title: 'Black Clover', episodes: '171 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRE50KV36/black-clover' },
    { src: 'date.png', video: 'https://www.youtube.com/embed/AytCKBRQJu0', title: 'Date A Live', episodes: '60 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GZJH3DJ8E/date-a-live' },
    { src: 'king.png', video: 'https://www.youtube.com/embed/fPj-SXsUbcU', title: 'The Daily Life of...', episodes: '51 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G649PJ0JY/blue-exorcist' },
    { src: 'blue.png', video: 'https://www.youtube.com/embed/hwnpiByHi20', title: 'Blue Exorcist', episodes: '49 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6DQDD3WR/fairy-tail' },
    { src: 'fairytail.png', video: 'https://www.youtube.com/embed/mAAKPx-ndAg', title: 'Fairy Tail', episodes: '329 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYEXQKJG6/fairy-tail' },
    { src: 'drstone.png', video: 'https://www.youtube.com/embed/S6OmSIxSj14', title: 'Dr.Stone', episodes: '59 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYEXQKJG6/dr-stone' },
    { src: 'hxh.png', video: 'https://www.youtube.com/embed/d6kBeJjTGnY', title: 'Hunter x Hunter', episodes: '148 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY3VKX1MR/hunter-x-hunter' },
    { src: 'iruma.png', video: 'https://www.youtube.com/embed/kkeuJt0DE7g', title: 'Iruma-kun', episodes: '65 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XQ24/the-great-cleric' },
    { src: 'cleric.png', video: 'https://www.youtube.com/embed/susqUMviH_E', title: 'The Great Cleric', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6P8PXJW6/toradora' },
    { src: 'toradora.png', video: 'https://www.youtube.com/embed/ya570uUgQNc', title: 'Toradora!', episodes: '25 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6P8PXJW6/toradora' },
    { src: 'zombie.png', video: 'https://www.youtube.com/embed/O3VO4zinUOI', title: 'Zombie Land Saga', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRJ0K7X5Y/zombie-land-saga' },
    { src: 'mylittle.png', video: 'https://www.youtube.com/embed/SlD-8h96pDw', title: 'My little Monster', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6MG8P1W6/my-little-monster' },
    { src: 'kamikatsu.png', video: 'https://www.youtube.com/embed/MD_q7xYb-Xs', title: 'KamiKatsu', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKNP4J/kamikatsu-working-' },
    { src: 'attorney.png', video: 'https://www.youtube.com/embed/O-tfGuZShKQ', title: 'Ace Attorney', episodes: '47 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYE5K0XVR/ace-attorney' },
    { src: 'aharen.png', video: 'https://www.youtube.com/embed/F7bGTibgcjM', title: 'Aharen-san', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN72N/aharen-san-wa-haka' },
    { src: 'cell.png', video: 'https://www.youtube.com/embed/HMXWvvjAJek', title: 'Cells at Work!', episodes: '22 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR3KVPQER/cells-at-work' },
    { src: 'tsugumomo.png', video: 'https://www.youtube.com/embed/ptCRrKccB0E', title: 'Tsugumomo', episodes: '25 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G675QE8JR/tsugumomo' },
    { src: 'black.png', video: 'https://www.youtube.com/embed/x39JYXYmQ90', title: 'The Dungeon of Black Company', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GP5HJ85WM/the-dungeon-of-black' },
    { src: 'tyrant.png', video: 'https://www.youtube.com/embed/ixAK3zJpbwE', title: 'Love Tyrant', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6NQ59GG6/love-tyrant' },
    { src: 'hinamatsuri.png', video: 'https://www.youtube.com/embed/1oTxGJcx04Q', title: 'Hinamatsuri', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR79PWJ16/hinamatsuri' },
    { src: 'beelzebub.png', video: 'https://www.youtube.com/embed/5lyYR7StfrQ', title: 'Beelzebub', episodes: '60 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6GG5KQ86/beelzebub' },
    { src: 'tis.png', video: 'https://www.youtube.com/embed/--EXveSl_0k', title: 'Tis Time for Torture, Princess', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJV0KV/tis-time-for-torture' },
    { src: 'desert.png', video: 'https://www.youtube.com/embed/XMCqw1vxMnY', title: 'Desert Punk', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR9P7MP06/desert-punk' },
    { src: 'bakemonogatari.png', video: 'https://www.youtube.com/embed/PugZi9QKL64', title: 'Bakemonogatari', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G69PXP1EY/bakemonogatari' },
    { src: 'osomatsu.png', video: 'https://www.youtube.com/embed/_imsKXx0Stk', title: 'Mr. Osomatsu', episodes: '48 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYQ4Q3DP6/mr-osomatsu' },
    { src: 'highschool.png', video: 'https://www.youtube.com/embed/BsQj0RYzW98', title: 'Daily Lives of High School Boys', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6X0K0N7Y/daily-lives-of-high' },
    { src: 'mieruko.png', video: 'https://www.youtube.com/embed/oW2dO_T-9jA', title: 'Mieruko-chan', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3WK52/mieruko-chan' },
    { src: 'hidden.png', video: 'https://www.youtube.com/embed/LAuF6RZYTc0', title: 'The Hidden Dungeon Only I Can Enter', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G3KHEV5QQ/the-hidden-dungeon' },
    { src: 'tonikawa.png', video: 'https://www.youtube.com/embed/3M7w-ROU62U', title: 'Tonikawa: Over the Moon for You', episodes: '31 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRWMGGQ86/tonikawa-over-the-' },
    { src: 'godofhighschool.png', video: 'https://www.youtube.com/embed/oqjwUfprNAk', title: 'The God of High School', episodes: '14 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRVD0ZDQR/the-god-of-high-sc' },
    { src: 'dragon.png', video: 'https://www.youtube.com/embed/okBHQWnYImg', title: 'Miss Kobayashi\'s Dragon Maid', episodes: '43 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6497Z43Y/miss-kobayashis-dr' },
    { src: 'bungo.png', video: 'https://www.youtube.com/embed/pYDv2ZR25GE', title: 'Bungo Stray Dogs', episodes: '62 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR5VXQ8PR/bungo-stray-dogs' },
    { src: 'fruitsbasket.png', video: 'https://www.youtube.com/embed/g5MDFMukmUI', title: 'Fruits Basket', episodes: '64 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6ZJMGEXY/fruits-basket' }
];



function loadRandomComedyAnime() {
    orangeBoxes.forEach(box => {
        if (comedyImages.length === 0) {
            console.log('No more unique anime images available.');
            return;
        }

        const index = getRandomIndex(comedyImages.length);
        const selectedAnime = comedyImages[index];

        const imageElement = box.querySelector('.box-image');
        const titleElement = box.querySelector('.title');
        const episodesElement = box.querySelector('.episodes');

        // Set image source, alt text, title, and episodes
        imageElement.src = `Comedy/${selectedAnime.src}`;
        imageElement.alt = selectedAnime.title;
        titleElement.textContent = selectedAnime.title;
        episodesElement.textContent = selectedAnime.episodes;

        // Set the data-video-url and data-crunchyroll-link attributes
        box.setAttribute('data-video-url', selectedAnime.video);
        box.setAttribute('data-crunchyroll-link', selectedAnime.crunchyrollLink);

        // Remove the selected anime from comedyImages array to avoid duplicates
        comedyImages.splice(index, 1);
    });
}

// Call the function to load random comedy anime on page load
loadRandomComedyAnime();

// Log a message to confirm script execution
console.log('Comedy anime script executed successfully.');

// Function to play video
function playComedyVideo(videoUrl, crunchyrollLink) {
    if (videoUrl) {
        videoIframe.src = videoUrl;
        videoIframe.style.display = 'block';
        videoOverlay.style.display = 'flex'; // Show overlay
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

        // Set the Crunchyroll button link for comedy anime
        crunchyrollButton.href = crunchyrollLink;
    } else {
        videoIframe.style.display = 'none';
        videoOverlay.style.display = 'none'; // Hide overlay
        document.body.style.overflow = 'auto'; // Enable scrolling
    }
}

// Add event listener to orange boxes
orangeBoxes.forEach(box => {
    box.addEventListener('click', function() {
        const videoUrl = this.getAttribute('data-video-url');
        const crunchyrollLink = this.getAttribute('data-crunchyroll-link');
        playComedyVideo(videoUrl, crunchyrollLink);
    });
});

// Add event listener to video overlay to close the video
videoOverlay.addEventListener('click', function() {
    playComedyVideo(null, '');
});
});


//Recently added section
document.addEventListener('DOMContentLoaded', function() {
    const videoIframe = document.getElementById('video-iframe');
    const videoOverlay = document.getElementById('video-overlay');
    const crunchyrollButton = document.getElementById('crunchyroll-button');

    const videoLinks = {
        'fairy-tail-card': 'https://www.youtube.com/embed/E1a5MRYIGUk',
        'wistoria-card': 'https://www.youtube.com/embed/Br9na3MPEh8',
        'elusive-samurai-card': 'https://www.youtube.com/embed/O4AqQNg1MI0',
        'kaiju-no-8-card': 'https://www.youtube.com/embed/JwF7bhvnCxI'
    };

    function playVideo(videoUrl) {
        if (videoUrl) {
            videoIframe.src = videoUrl;
            videoIframe.style.display = 'block';
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

    document.querySelectorAll('.image-card').forEach(card => {
        card.addEventListener('click', function() {
            const videoUrl = videoLinks[card.id];
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
        const rollCrunchyrollButton1 = document.getElementById("roll-crunchyroll-button-1");
        const rollCrunchyrollButton2 = document.getElementById("roll-crunchyroll-button-2");
        const rollTitle = document.getElementById("roll-title");
        const rollGenre = document.getElementById("roll-genre");
        const rollSeason = document.getElementById("roll-season");
        const rollEpisode = document.getElementById("roll-episode");
        const videoIframe = document.getElementById('video-iframe');
        const videoOverlay = document.getElementById('video-overlay1');
    
        const images = [
            { src: 'Feature/jjkcard.png', video: 'https://www.youtube.com/embed/pkKu9hLT-t8', title: 'Jujutsu Kaisen', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen', episode: '48 Episodes', season: '3 Seasons', genre: 'Action' },
            { src: 'Feature/kaijuno8Card.png', video: 'https://www.youtube.com/embed/JwF7bhvnCxI', title: 'Kaiju No 8', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XQ7D/kaiju-no-8', episode: '12 Episodes', season: '1 Seasons', genre: 'Action' },
            { src: 'Feature/fairytail100card.png', video: 'https://www.youtube.com/embed/E1a5MRYIGUk', title: 'Fairy Tail 100 Years Quest', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XQED/fairy-tail-100-years-quest', episode: '332 Episodes', season: '4 Seasons', genre: 'Action' },
            { src: 'Feature/wistoriacard.png', video: 'https://www.youtube.com/embed/Br9na3MPEh8', title: 'Wistoria', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GW4HM7WK9/wistoria-wand-and-sword', episode: '3 Episodes', season: '1 Seasons', genre: 'Action' },
            { src: 'Feature/elusivesamuraicard.png', video: 'https://www.youtube.com/embed/O4AqQNg1MI0', title: 'Elusive Samurai', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GQWH0M19X/the-elusive-samurai', episode: '3 Episodes', season: '1 Seasons', genre: 'Action' }
        ];
    
        let rollCurrentVideoUrl = '';
        let rollCurrentCrunchyrollLink = '';
    
        rollSpan.addEventListener("click", function() {
            const randomIndex = Math.floor(Math.random() * images.length);
            const selectedImage = images[randomIndex];
    
            rollImage.src = selectedImage.src;
            rollTitle.textContent = selectedImage.title;
            rollGenre.textContent = selectedImage.genre;
            rollSeason.textContent = selectedImage.season;
            rollEpisode.textContent = selectedImage.episode;
            rollCrunchyrollButton1.href = selectedImage.rollcrunchyrollLink; 
            rollCrunchyrollButton2.href = selectedImage.rollcrunchyrollLink;
            popupBox.style.display = "block";
            overlay.style.display = "block";
    
            rollCurrentVideoUrl = selectedImage.video;
            rollCurrentCrunchyrollLink = selectedImage.rollcrunchyrollLink;
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
            playVideo(rollCurrentVideoUrl);
            rollCrunchyrollButton1.href = rollCurrentCrunchyrollLink;
            rollCrunchyrollButton2.href = rollCurrentCrunchyrollLink;
        });
    
        videoOverlay.addEventListener('click', function() {
            videoIframe.style.display = 'none';
            videoIframe.src = '';
            videoOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });