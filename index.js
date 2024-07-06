document.addEventListener('DOMContentLoaded', function() {
    const featureImage = document.getElementById('feature-image');
    const background = document.getElementById('background');
    const genreElement = document.getElementById('anime-genre');
    const seasonsElement = document.getElementById('anime-seasons');
    const episodesElement = document.getElementById('anime-episodes');

    const featureImages = [
        { src: 'Feature/fairytailcard.png', video: 'https://www.youtube.com/embed/mAAKPx-ndAg', title: 'Fairy Tail', genre: 'Adventure', seasons: '3 Seasons', episodes: '328 Episodes' },
        { src: 'Feature/drstonecard.png', video: 'https://www.youtube.com/embed/S6OmSIxSj14', title: 'Dr. Stone', genre: 'Adventure', seasons: '4 Seasons', episodes: '59 Episodes' },
        { src: 'Feature/frierencard.png', video: 'https://www.youtube.com/embed/pqUZaKn7flw', title: 'Frieren', genre: 'Adventure', seasons: '1 Season', episodes: '28 Episodes' },
        { src: 'Feature/yuyucard.png', video: 'https://www.youtube.com/embed/bGc1Na8mlw0', title: 'Yuyu Hakusho', genre: 'Adventure', seasons: '1 Season', episodes: '112 Episodes' },
        { src: 'Feature/fullmetalcard.png', video: 'https://www.youtube.com/embed/kx0nBaS_q50', title: 'Full Metal Alchemist', genre: 'Adventure', seasons: '1 Season', episodes: '64 Episodes' },
        { src: 'Feature/goldenkamuycard.png', video: 'https://www.youtube.com/embed/Qqy7MCK4GeI', title: 'Golden Kamuy', genre: 'Adventure', seasons: '4 Seasons', episodes: '49 Episodes' },
        { src: 'Feature/goldenwindcard.png', video: 'https://www.youtube.com/embed/fvSKmPdD2a4', title: 'Golden Wind', genre: 'Adventure', seasons: '1 Season', episodes: '39 Episodes' },
        { src: 'Feature/hxhcard.png', video: 'https://www.youtube.com/embed/d6kBeJjTGnY', title: 'Hunter X Hunter', genre: 'Adventure', seasons: '6 Seasons', episodes: '148 Episodes' },
        { src: 'Feature/somalicard.png', video: 'https://www.youtube.com/embed/Xfw57amXb8Q', title: 'Somali', genre: 'Adventure', seasons: '1 Season', episodes: '12 Episodes' },
        { src: 'Feature/onepiececard.png', video: 'https://www.youtube.com/embed/TbHtbzAnZJ4', title: 'One Piece', genre: 'Adventure', seasons: '25 Seasons', episodes: '1110 Episodes' },
        { src: 'Feature/marksmancard.png', video: 'https://www.youtube.com/embed/u6Pm0tDeGQQ', title: 'Lord Marksman', genre: 'Adventure', seasons: '1 Season', episodes: '12 Episodes' },
        { src: 'Feature/chroniclecard.png', video: 'https://www.youtube.com/embed/wcwHx5NTJFo', title: 'Chain Chronicle', genre: 'Adventure', seasons: '1 Season', episodes: '12 Episodes' },
        { src: 'Feature/mydaughtercard.png', video: 'https://www.youtube.com/embed/hnhdx8TQ4UU', title: 'My Daughter Left', genre: 'Adventure', seasons: '1 Season', episodes: '12 Episodes' },
        { src: 'Feature/stabbercard.png', video: 'https://www.youtube.com/embed/1m9S8wQ3SlE', title: 'Sorcerous Stabber Orphen', genre: 'Adventure', seasons: '1 Season', episodes: '13 Episodes' },
        { src: 'Feature/magicard.png', video: 'https://www.youtube.com/embed/2E7o26G1T0c', title: 'Magi', genre: 'Adventure', seasons: '3 Seasons', episodes: '50 Episodes' }
    ];

    function getRandomIndex(max) {
        return Math.floor(Math.random() * max);
    }

    function changeFeature() {
        const index = getRandomIndex(featureImages.length);
        const selectedImage = featureImages[index];

        featureImage.src = selectedImage.src;
        document.querySelector('.text1 h1').textContent = selectedImage.title;

        // Update genre, seasons, and episodes information
        genreElement.textContent = selectedImage.genre;
        seasonsElement.textContent = selectedImage.seasons;
        episodesElement.textContent = selectedImage.episodes;

        // Change background image dynamically
        background.style.backgroundImage = `url(${selectedImage.src})`;
    }

    // Initialize on page load
    changeFeature();
});


document.addEventListener('DOMContentLoaded', function() {
    const yellowBoxes = document.querySelectorAll('.yellow-box');

    // Define array for action anime images with titles, videos, and episodes
    let actionImages = [
        { src: 'mha.png', video: 'https://www.youtube.com/embed/zw5QhH3-1lI', title: 'My Hero Academia', episodes: '138 episodes' },
        { src: 'blood.png', video: 'https://www.youtube.com/embed/NIeKMKwON0U', title: 'Blood Blockade Battlefront', episodes: '25 episodes' },
        { src: 'fireforce.png', video: 'https://www.youtube.com/embed/fzM43HZ6oeg', title: 'Fire Force', episodes: '48 episodes' },
        { src: 'bungo.png', video: 'https://www.youtube.com/embed/YUH1mfV3IEU', title: 'Bungo Stray Dogs', episodes: '62 episodes' },
        { src: 'jjk.png', video: 'https://www.youtube.com/embed/pkKu9hLT-t8', title: 'Jujutsu Kaisen', episodes: '24 episodes' },
        { src: 'akame.png', video: 'https://www.youtube.com/embed/NIeKMKwON0U', title: 'Akame Ga Kill', episodes: '24 episodes' },
        { src: 'aot.png', video: 'https://www.youtube.com/embed/n4Nj6Y_SNYI', title: 'Attack on Titan', episodes: '75 episodes' },
        { src: 'demonslayer.png', video: 'https://www.youtube.com/embed/Sl2k7bfBeCw', title: 'Demon Slayer', episodes: '26 episodes' },
        { src: 'fate.png', video: 'https://www.youtube.com/embed/nfzKXkL_i54', title: 'Fate Stay Night', episodes: '24 episodes' },
        { src: 'godofhighschool.png', video: 'https://www.youtube.com/embed/oqjwUfprNAk', title: 'God of High School', episodes: '13 episodes' },
        { src: 'opm.png', video: 'https://www.youtube.com/embed/YUH1mfV3IEU', title: 'One Punch Man', episodes: '24 episodes' },
        { src: 'kenichi.png', video: 'https://www.youtube.com/embed/4xDehi5Qjqs', title: 'KenIchi', episodes: '50 episodes' },
        { src: 'kindom.png', video: 'https://www.youtube.com/embed/bYudboNENqs', title: 'Kindom', episodes: '79 episodes' },
        { src: 'hinomaru.png', video: 'https://www.youtube.com/embed/Gxq9uR6EMd0', title: 'Hinomaru Sumo', episodes: '24 episodes' },
        { src: 'takt.png', video: 'https://www.youtube.com/embed/mv_SJoJY7sA', title: 'takt op.Destiny', episodes: '24 episodes' },
        { src: 'akudama.png', video: 'https://www.youtube.com/embed/H2vRwrLyzQM', title: 'Akudama Drive', episodes: '12 episodes' },
        { src: 'peach.png', video: 'https://www.youtube.com/embed/7vtl3NGuG1c', title: 'Peach Boy Riverside', episodes: '12 episodes' },
        { src: 'tenjho.png', video: 'https://www.youtube.com/embed/BM-dTZY9HI0', title: 'Tenjho Tenge', episodes: '24 episodes' },
        { src: 'mushibugyo.png', video: 'https://www.youtube.com/embed/uv7dT2VSpp8', title: 'Mushibugyo', episodes: '26 episodes' },
        { src: 'monsterstrike.png', video: 'https://www.youtube.com/embed/Yz-57Anl-Os', title: 'Monster Strike', episodes: '51 episodes' },
        { src: 'shangrila.png', video: 'https://www.youtube.com/embed/rsTbPKiGQdo', title: 'Shangri-La Frontier', episodes: '12 episodes' },
        { src: 'solo.png', video: 'https://www.youtube.com/embed/bssSj4cKsrI', title: 'Solo Leveling', episodes: 'Ongoing' },
        { src: 'revengers.png', video: 'https://www.youtube.com/embed/idlLFNNpZiI', title: 'Tokyo Revengers', episodes: '24 episodes' },
        { src: 'bungo.png', video: 'https://www.youtube.com/embed/pYDv2ZR25GE', title: 'Bungo Stray Dogs', episodes: '62 episodes' },
        { src: 'metallic.png', video: 'https://www.youtube.com/embed/yv8eVL4xBI4', title: 'Metallic Rouge', episodes: '12 episodes' },
        { src: 'deadmount.png', video: 'https://www.youtube.com/embed/_BDDj_4nmNg', title: 'Dead Mount Death Play', episodes: '13 episodes' },
        { src: 'gluttony.png', video: 'https://www.youtube.com/embed/f3FwcHciZZ0', title: 'Berserk of Gluttony', episodes: '12 episodes' },
        { src: 'dragon.png', video: 'https://www.youtube.com/embed/2Vej889SS6s', title: 'Dragon Ball Super', episodes: '131 episodes' },
        { src: 'blood.png', video: 'https://www.youtube.com/embed/aMe0J7c8uOU', title: 'Blood Blockade Battlefront', episodes: '25 episodes' },
        { src: 'nier.png', video: 'https://www.youtube.com/embed/eIMZYgb85xg', title: 'NieR:Automata Ver1.1a', episodes: 'Ongoing' },
        { src: 'killlakill.png', video: 'https://www.youtube.com/embed/B98NY8Hfo7I', title: 'Kill La Kill', episodes: '24 episodes' },
        { src: 'berserk.png', video: 'https://www.youtube.com/embed/0MIw4xzxcTU', title: 'Berserk', episodes: '25 episodes' },
        { src: 'iceblade.png', video: 'https://www.youtube.com/embed/l1hx7s7Ywcs', title: 'The Iceblade Sorcerer', episodes: '12 episodes' },
        { src: 'plunderer.png', video: 'https://www.youtube.com/embed/L1Y9r8psTmo', title: 'Plunderer', episodes: '24 episodes' },
        { src: 'irregular.png', video: 'https://www.youtube.com/embed/U-gkwdGooDU', title: 'The Irregular', episodes: '13 episodes' },
        { src: 'vinland.png', video: 'https://www.youtube.com/embed/f8JrZ7Q_p-8', title: 'Vinland Saga', episodes: '24 episodes' },
    ];

    function getRandomIndex(max) {
        return Math.floor(Math.random() * max);
    }

    function loadRandomAnime() {
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

            // Remove the selected anime from actionImages array to avoid duplicates
            actionImages.splice(index, 1);
        });
    }

    // Call the function to load random anime on page load
    loadRandomAnime();

    // Log a message to confirm script execution
    console.log('Script executed successfully.');
});
