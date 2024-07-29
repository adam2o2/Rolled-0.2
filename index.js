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
        { src: 'Feature/magicard.png', video: 'https://www.youtube.com/embed/2E7o26G1T0c', title: 'Magi', genre: 'Adventure', seasons: '3 Seasons', episodes: '50 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY09XN14Y/magi' },
        //Action
        { src: 'Feature/jjkcard.png', video: 'https://www.youtube.com/embed/pkKu9hLT-t8', title: 'Jujutsu Kaisen', crunchyrollLink: 'https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen', episodes: '48 Episodes', seasons: '3 Seasons', genre: 'Action' },
        { src: 'Feature/kaijuno8Card.png', video: 'https://www.youtube.com/embed/JwF7bhvnCxI', title: 'Kaiju No 8', crunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XQ7D/kaiju-no-8', episodes: '12 Episodes', seasons: '1 Seasons', genre: 'Action' },
        { src: 'Feature/fairytail100card.png', video: 'https://www.youtube.com/embed/E1a5MRYIGUk', title: 'Fairy Tail 100...', crunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XQED/fairy-tail-100-years-quest', episodes: '332 Episodes', seasons: '4 Seasons', genre: 'Action' },
        { src: 'Feature/wistoriacard.png', video: 'https://www.youtube.com/embed/Br9na3MPEh8', title: 'Wistoria', crunchyrollLink: 'https://www.crunchyroll.com/series/GW4HM7WK9/wistoria-wand-and-sword', episodes: '3 Episodes', seasons: '1 Seasons', genre: 'Action' },
        { src: 'Feature/elusivesamuraicard.png', video: 'https://www.youtube.com/embed/O4AqQNg1MI0', title: 'Elusive Samurai', crunchyrollLink: 'https://www.crunchyroll.com/series/GQWH0M19X/the-elusive-samurai', episodes: '3 Episodes', seasons: '1 Seasons', genre: 'Action' },
        { src: 'Feature/mhacard.png', video: 'https://www.youtube.com/embed/LqJQqcDQxBg', title: 'My Hero Academia', episodes: '138 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia', genre: 'Action', seasons: '5 Seasons' },
        { src: 'Feature/fireforcecard.png', video: 'https://www.youtube.com/embed/fzM43HZ6oeg', title: 'Fire Force', episodes: '48 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYQWNXPZY/fire-force', genre: 'Action', seasons: '2 Seasons' },
        { src: 'Feature/bungocard.png', video: 'https://www.youtube.com/embed/YUH1mfV3IEU', title: 'Bungo Stray Dogs', episodes: '62 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR5VXQ8PR/bungo-stray-dogs', genre: 'Action', seasons: '5 Seasons' },
        { src: 'Feature/akamecard.png', video: 'https://www.youtube.com/embed/NIeKMKwON0U', title: 'Akame Ga Kill', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/AOTcard.png', video: 'https://www.youtube.com/embed/n4Nj6Y_SNYI', title: 'Attack On Titan', episodes: '99 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan', genre: 'Action', seasons: '4 Seasons'  },
        { src: 'Feature/demonslayercard.png', video: 'https://www.youtube.com/embed/Sl2k7bfBeCw', title: 'Demon Slayer', episodes: '26 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba', genre: 'Action', seasons: '5 Seasons' },
        { src: 'Feature/fatecard.png', video: 'https://www.youtube.com/embed/nfzKXkL_i54', title: 'Fate Stay Night', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8V11X7Y/fatestay-night-unlimited-blade-works', genre: 'Action', seasons: '4 Seasons' },
        { src: 'Feature/godofhighschoolcard.png', video: 'https://www.youtube.com/embed/oqjwUfprNAk', title: 'God of High School', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRVD0ZDQR/the-god-of-high-school', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/opmcard.png', video: 'https://www.youtube.com/embed/YUH1mfV3IEU', title: 'One Punch Man', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/', genre: 'Action', seasons: '2 Seasons' },
        { src: 'Feature/kenichicard.png', video: 'https://www.youtube.com/embed/4xDehi5Qjqs', title: 'KenIchi', episodes: '50 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3W859/kenichi-the-mightiest-disciple', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/kindomcard.png', video: 'https://www.youtube.com/embed/bYudboNENqs', title: 'Kindom', episodes: '79 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRWE89KMR/kingdom', genre: 'Action', seasons: '5 Seasons' },
        { src: 'Feature/hinomarucard.png', video: 'https://www.youtube.com/embed/Gxq9uR6EMd0', title: 'Hinomaru Sumo', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G60X7D34R/hinomaru-sumo', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/taktcard.png', video: 'https://www.youtube.com/embed/mv_SJoJY7sA', title: 'takt op.Destiny', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJVXX2/takt-opdestiny', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/akudamacard.png', video: 'https://www.youtube.com/embed/H2vRwrLyzQM', title: 'Akudama Drive', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GKEH2G440/akudama-drive', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/peachcard.png', video: 'https://www.youtube.com/embed/7vtl3NGuG1c', title: 'Peach Boy Riverside', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XM84/peach-boy-riverside', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/tenjhocard.png', video: 'https://www.youtube.com/embed/BM-dTZY9HI0', title: 'Tenjho Tenge', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR5VXM03R/tenjho-tenge', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/mushibugyocard.png', video: 'https://www.youtube.com/embed/uv7dT2VSpp8', title: 'Mushibugyo', episodes: '26 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G65VJVG56/mushibugyo', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/monsterstrikecard.png', video: 'https://www.youtube.com/embed/Yz-57Anl-Os', title: 'Monster Strike', episodes: '51 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G619JM99Y/monster-strike', genre: 'Action', seasons: '3 Seasons' },
        { src: 'Feature/shangrilacard.png', video: 'https://www.youtube.com/embed/rsTbPKiGQdo', title: 'Shangri-La Frontier', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G79H23Z8P/shangri-la-frontier', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/solocard.png', video: 'https://www.youtube.com/embed/bssSj4cKsrI', title: 'Solo Leveling', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZEJ0K/solo-leveling', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/revengerscard.png', video: 'https://www.youtube.com/embed/idlLFNNpZiI', title: 'Tokyo Revengers', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G3KHEVMN1/tokyo-revengers', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/metalliccard.png', video: 'https://www.youtube.com/embed/yv8eVL4xBI4', title: 'Metallic Rouge', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G24H1NWMJ/metallic-rouge', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/deadmountcard.png', video: 'https://www.youtube.com/embed/_BDDj_4nmNg', title: 'Dead Mount Death Play', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G3KHEV04J/dead-mount-death-play', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/gluttonycard.png', video: 'https://www.youtube.com/embed/f3FwcHciZZ0', title: 'Berserk of Gluttony', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJV05V/berserk-of-gluttony', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/dragoncard.png', video: 'https://www.youtube.com/embed/2Vej889SS6s', title: 'Dragon Ball Super', episodes: '131 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR19V7816/dragon-ball-super', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/bloodcard.png', video: 'https://www.youtube.com/embed/aMe0J7c8uOU', title: 'Blood Blockade...', episodes: '25 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRWEQEZER/blood-blockade-battlefront', genre: 'Action', seasons: '2 Seasons' },
        { src: 'Feature/niercard.png', video: 'https://www.youtube.com/embed/eIMZYgb85xg', title: 'NieR:Automata Ver1.1a', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKNPW1/nierautomata-ver11a', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/killlakillcard.png', video: 'https://www.youtube.com/embed/B98NY8Hfo7I', title: 'Kill La Kill', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8VM43GY/kill-la-kill', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/berserkcard.png', video: 'https://www.youtube.com/embed/0MIw4xzxcTU', title: 'Berserk', episodes: '25 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYX04955R/berserk', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/icebladecard.png', video: 'https://www.youtube.com/embed/l1hx7s7Ywcs', title: 'The Iceblade Sorcerer', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZEP21/the-iceblade-sorcerer-shall-rule-the-world', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/plunderercard.png', video: 'https://www.youtube.com/embed/L1Y9r8psTmo', title: 'Plunderer', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN70Z/plunderer', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/irregularcard.png', video: 'https://www.youtube.com/embed/U-gkwdGooDU', title: 'The Irregular', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRMGDGZVR/the-irregular-at-magic-high-school', genre: 'Action', seasons: '3 Seasons' },
        { src: 'Feature/vinlandcard.png', video: 'https://www.youtube.com/embed/f8JrZ7Q_p-8', title: 'Vinland Saga', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3WKK0/vinland-saga', genre: 'Action', seasons: '2 Seasons' },
        { src: 'Feature/triggercard.png', video: 'https://www.youtube.com/embed/pqc0AS1nFlA', title: 'World Trigger', episodes: '99 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR757DMKY/world-trigger', genre: 'Action', seasons: '3 Seasons' },
        { src: 'Feature/triguncard.png', video: 'https://www.youtube.com/embed/bJVyIXeUznY', title: 'Trigun', episodes: '27 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYP58QMMY/trigun', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/freezingcard.png', video: 'https://www.youtube.com/embed/V5NefFZiaQc', title: 'Freezing', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRDQE71GY/freezing', genre: 'Action', seasons: '2 Seasons' },
        { src: 'Feature/butlercard.png', video: 'https://www.youtube.com/embed/S8j5iEklHyI', title: 'Black Butler', episodes: '58 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYQ43P3E6/black-butler', genre: 'Action', seasons: '4 Seasons' },
        { src: 'Feature/datecard.png', video: 'https://www.youtube.com/embed/4CA7RDDhz2Q', title: 'Date A Live', episodes: '58 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYEX5E1G6/date-a-live', genre: 'Action', seasons: '5 Seasons' },
        { src: 'Feature/assassinationcard.png', video: 'https://www.youtube.com/embed/kgNkGohA20k', title: 'Assassination Classroom', episodes: '47 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRE59JGX6/assassination-classroom', genre: 'Action', seasons: '2 Seasons' },
        { src: 'Feature/soulcard.png', video: 'https://www.youtube.com/embed/ac-ir1b1p-k', title: 'Soul Eater', episodes: '51 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYX0ZW80R/soul-eater', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/86card.png', video: 'https://www.youtube.com/embed/VSdS29SDvn4', title: '86 EIGHTY-SIX', episodes: '23 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GVDHX8DM5/86-eighty-six', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/healingcard.png', video: 'https://www.youtube.com/embed/UkPRnHQJrws', title: 'The Wrong Way...', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G0XHWM1EK/the-wrong-way-to-use-healing-magic', genre: 'Action', seasons: '1 Seasons' },
        { src: 'Feature/windcard.png', video: 'https://www.youtube.com/embed/62r_G9bEPlU', title: 'WIND BREAKER', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G3KHEVDPE/wind-breaker', genre: 'Action', seasons: '1 Seasons' }, 
        { src: 'Feature/viralcard.png', video: 'https://www.youtube.com/embed/J6BdqP4lOkE', title: 'Viral Hit', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GJ0H7QGME/viral-hit', genre: 'Action', seasons: '1 Seasons' }, 
        { src: 'Feature/towercard.png', video: 'https://www.youtube.com/embed/RNyClma6awo', title: 'Tower of God', episodes: '16 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6J0G49DR/tower-of-god', genre: 'Action', seasons: '1 Seasons' },
        //Action
        //Isekai
        { src: 'Feature/mushokucard.png', video: 'https://www.youtube.com/embed/k5VxfJpzy1Q', title: 'Mushoku Tensei', episode: '23 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G24H1N3MP/mushoku-tensei-jobless-reincarnation', genre: 'Isekai', season: '2 Seasons' },
        { src: 'Feature/nogamenolifecard.png', video: 'https://www.youtube.com/embed/ZgWgnSG9PB0', title: 'No Game No Life', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/overlordcard.png', video: 'https://www.youtube.com/embed/uhlBqFj9kDw', title: 'OverLord', episodes: '52 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G69PZ5PDY/overlord', genre: 'Isekai', seasons: '5 Seasons' },
        { src: 'Feature/rezerocard.png', video: 'https://www.youtube.com/embed/lXs3yIc_2CU', title: 'Re:Zero', episodes: '50 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/', genre: 'Isekai', seasons: '4 Seasons' },
        { src: 'Feature/sagaoftanyacard.png', video: 'https://www.youtube.com/embed/V8Gx2_sHMRI', title: 'Saga of Tanya', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR9P57W96/saga-of-tanya-the-evil', genre: 'Isekai', seasons: '3 Seasons' },
        { src: 'Feature/saocard.png', video: 'https://www.youtube.com/embed/6ohYYtxfDCg', title: 'Sword Art Online', episodes: '96 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR49G9VP6/sword-art-online', genre: 'Isekai', seasons: '8 Seasons' },
        { src: 'Feature/shieldherocard.png', video: 'https://www.youtube.com/embed/rKnyi3TRznA', title: 'Shield Hero', episodes: '38 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6W4QKX0R/the-rising-of-the-shield-hero', genre: 'Isekai', seasons: '3 Seasons' },
        { src: 'Feature/slimecard.png', video: 'https://www.youtube.com/embed/uOzwqb74K34', title: 'Reincarnated as A Slime', episodes: '48 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYZJ43JMR/that-time-i-got-reincarnated-as-a-slime', genre: 'Isekai', seasons: '6 Seasons' },
        { src: 'Feature/tsukimichicard.png', video: 'https://www.youtube.com/embed/Q7IUIZix_yw', title: 'Tsukimichi', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GZJH3D719/tsukimichi--moonlit-fantasy-', genre: 'Isekai', seasons: '2 Seasons' },
        { src: 'Feature/konosubacard.png', video: 'https://www.youtube.com/embed/5h4rQY9bpgE', title: 'Konosuba', episodes: '20 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYE5K3GQR/konosuba--gods-blessing-on-this-wonderful-world', genre: 'Isekai', seasons: '4 Seasons' },
        { src: 'Feature/devilisaparttimercard.png', video: 'https://www.youtube.com/embed/9eCFxxQ4WE0', title: 'Devil is a Part Timer', episodes: '26 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR75Z5KKY/the-devil-is-a-part-timer', genre: 'Isekai', seasons: '2 Seasons' },
        { src: 'Feature/loghorizoncard.png', video: 'https://www.youtube.com/embed/IG1VhJ75r8k', title: 'Log Horizon', episodes: '62 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRVNMG93Y/log-horizon', genre: 'Isekai', seasons: '3 Seasons' },
        { src: 'Feature/blacksummonercard.png', video: 'https://www.youtube.com/embed/m3W8sZhn3-o', title: 'Black Summoner', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GVDHX8JJE/black-summoner', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/spidercard.png', video: 'https://www.youtube.com/embed/geMv8Lwk2sM', title: 'So What im a Spider', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G79H23G0D/so-im-a-spider-so-what', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/vendingmachinecard.png', video: 'https://www.youtube.com/embed/mMOzW_UEdvg', title: 'Reborn as A...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GVDHX8504/reborn-as-a-vending-machine-i-now-wander-the-dungeon', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/yourmomcard.png', video: 'https://www.youtube.com/embed/8qoBfi8REs0', title: 'Do You Love Your...', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6J0EEP0R/do-you-love-your-mom-and-her-two-hit-multi-target-attacks', genre: 'Isekai', seasons: '13 Seasons' },
        { src: 'Feature/demonlordcard.png', video: 'https://www.youtube.com/embed/V0gQ4N6Y4bI', title: 'Demon Lord, Retry!', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM37KD/demon-lord-retry', genre: 'Isekai', seasons: '2 Seasons' },
        { src: 'Feature/summoncard.png', video: 'https://www.youtube.com/embed/hodocFdl5O8', title: 'How Not to...', episodes: '22 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYZJXWWGR/how-not-to-summon-a-demon-lord', genre: 'Isekai', seasons: '2 Seasons' },
        { src: 'Feature/restaurantcard.png', video: 'https://www.youtube.com/embed/j_4JaXWk1a4', title: 'Restaurant to...', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR49493P6/restaurant-to-another-world', genre: 'Isekai', seasons: '2 Seasons' },
        { src: 'Feature/anothercard.png', video: 'https://www.youtube.com/embed/A1ll0D9J6II', title: 'In Another World...', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYQ4ZWV46/in-another-world-with-my-smartphone', genre: 'Isekai', seasons: '2 Seasons' },
        { src: 'Feature/knightcard.png', video: 'https://www.youtube.com/embed/vR9N0c_SFAY', title: 'Knights & Magic', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYX08020R/knights--magic', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/realistcard.png', video: 'https://www.youtube.com/embed/M_pWteehKzM', title: 'How a Realist...', episodes: '26 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJV3MV/how-a-realist-hero-rebuilt-the-kingdom', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/millioncard.png', video: 'https://www.youtube.com/embed/U26Up23GGDk', title: 'Im Standing on...', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6Q9GGE26/im-standing-on-a-million-lives', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/gracecard.png', video: 'https://www.youtube.com/embed/ylms3zzyfuA', title: 'By the Grace of the Gods', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GP5HJ85ED/by-the-grace-of-the-gods', genre: 'Isekai', seasons: '2 Seasons' },
        { src: 'Feature/assassincard.png', video: 'https://www.youtube.com/embed/2Poci60rWzg', title: 'The Worlds Finest...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GMEHME55K/the-worlds-finest-assassin-gets-reincarnated-in-another-world-as-an-aristocrat', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/cheatcard.png', video: 'https://www.youtube.com/embed/NH_lYSh38N8', title: 'Isekai Cheat...', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY79GJX1R/isekai-cheat-magician', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/ascendancecard.png', video: 'https://www.youtube.com/embed/Wo28IopG2WE', title: 'Ascendance...', episodes: '36 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6793XKZY/ascendance-of-a-bookworm', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/deathcard.png', video: 'https://www.youtube.com/embed/L4VW38PLuOc', title: 'Death March to...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6K50XJ7Y/death-march-to-the-parallel-world-rhapsody', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/wisecard.png', video: 'https://www.youtube.com/embed/gy-78Y-chds', title: 'Wise Mans Grandchild', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G63K95846/wise-mans-grandchild', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/seireicard.png', video: 'https://www.youtube.com/embed/KS7dinNk_z4', title: 'Seirei Gensouki', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G0XHWM380/seirei-gensouki-spirit-chronicles', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/grimgarcard.png', video: 'https://www.youtube.com/embed/aR0UcWq_JrY', title: 'Grimgar', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRVNX917Y/grimgar-ashes-and-illusions', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/ambitioncard.png', video: 'https://www.youtube.com/embed/_Q-qoxLfk48', title: 'The Ambition...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6JQK7D5R/the-ambition-of-oda-nobuna', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/conceptioncard.png', video: 'https://www.youtube.com/embed/8jUGg1yjmLU', title: 'Conception', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR1XQ92VR/conception', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/mastercard.png', video: 'https://www.youtube.com/embed/mVd2HX5oVRk', title: 'The Master of...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6NVQ59XY/the-master-of-ragnarok--blesser-of-einherjar', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/highcard.png', video: 'https://www.youtube.com/embed/QSFXJzpEpqs', title: 'High School Prodigies...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYXJKGDN6/high-school-prodigies-have-it-easy-even-in-another-world', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/sweetcard.png', video: 'https://www.youtube.com/embed/uPYEALVBhI8', title: 'Sweet Reincarnation', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GJ0H7QG2G/sweet-reincarnation', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/reincarnationcard.png', video: 'https://www.youtube.com/embed/NNrCwPAj1IY', title: 'The Reincarnation of...', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJVWXG/the-reincarnation-of-the-strongest-exorcist-in-another-world', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/didntcard.png', video: 'https://www.youtube.com/embed/39XpskL3jic', title: 'Didnt I Say to...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G679305JY/didnt-i-say-to-make-my-abilities-average-in-the-next-life', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/irumacard.png', video: 'https://www.youtube.com/embed/kkeuJt0DE7g', title: 'Welcome to Demon...', episodes: '65 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3W2PK/chillin-in-another-world-with-level-2-super-cheat-powers', genre: 'Isekai', seasons: '3 Seasons' },
        { src: 'Feature/chillincard.png', video: 'https://www.youtube.com/embed/IwxaZRkXdps', title: 'Chillin in Another...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3W2PK/chillin-in-another-world-with-level-2-super-cheat-powers', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/skeletoncard.png', video: 'https://www.youtube.com/embed/dPzd8VNbQQI', title: 'Skeleton Knight...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G8DHV7WJP/skeleton-knight-in-another-world', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/drugcard.png', video: 'https://www.youtube.com/embed/reOfMXg3kqs', title: 'Drug Store in...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZEN80/drug-store-in-another-world---the-slow-life-of-a-cheat-pharmacist', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/endridecard.png', video: 'https://www.youtube.com/embed/4yzMnwxt3yQ', title: 'Endride', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G649D0KPY/endride', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/campfirecard.png', video: 'https://www.youtube.com/embed/JaxjIDezSBQ', title: 'Campfire Cooking in...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5X3EE/campfire-cooking-in-another-world-with-my-absurd-skill', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/saintcard.png', video: 'https://www.youtube.com/embed/JwsnFH4XRsU', title: 'The Saints Magic...', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJV3P3/the-saints-magic-power-is-omnipotent', genre: 'Isekai', seasons: '2 Seasons' },
        { src: 'Feature/meijicard.png', video: 'https://www.youtube.com/embed/F1LDCFKTbqU', title: 'Meiji Tokyo Renka', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR4PD7WQY/meiji-tokyo-renka', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/collectioncard.png', video: 'https://www.youtube.com/embed/kUcgIqI0_kE', title: 'Sengoku Collection', episodes: '26 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR3VW7XM6/sengoku-collection-parallel-world-samurai', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/sengokucard.png', video: 'https://www.youtube.com/embed/fAYhdawxFwc', title: 'SENGOKU NIGHT...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G65VGXVQ6/sengoku-night-blood', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/problemcard.png', video: 'https://www.youtube.com/embed/qQpOcHsMUnA', title: 'Problem Children...', episodes: '10 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6Q49G21R/problem-children-are-coming-from-another-world-arent-they', genre: 'Isekai', seasons: '1 Seasons' },
        { src: 'Feature/tobecard.png', video: 'https://www.youtube.com/embed/z2WARBz4QXc', title: 'To Be Heroine', episodes: '7 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G63KVV3E6/to-be-heroine', genre: 'Isekai', seasons: '1 Seasons' },   
        //Isekai
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
        //Thriller
        { src: 'Feature/erasedcard.png', video: 'https://www.youtube.com/embed/dky7my5xd2c', title: 'Erased', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYGG92K7Y/erased', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/futurediarycard.png', video: 'https://www.youtube.com/embed/KfznTm8mJA4', title: 'Future Diary', episodes: '26 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYGGXPQ2Y/the-future-diary', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/hellsingcard.png', video: 'https://www.youtube.com/embed/7CQKMDFAKMk', title: 'Hellsing', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G649DPXQY/hellsing', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/paranoiaagentcard.png', video: 'https://www.youtube.com/embed/QEsNDDwhSJ4', title: 'Paranoia Agent', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G5PHNMW8E/paranoia-agent', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/psychopasscard.png', video: 'https://www.youtube.com/embed/YzuJnyebc40', title: 'Psycho-Pass', episodes: '22 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR75253JY/psycho-pass', genre: 'Thriller', seasons: '5 Seasons' },
        { src: 'Feature/terrorinresonancecard.png', video: 'https://www.youtube.com/embed/aiZrjeZvF8Y', title: 'Terror in...', episodes: '11 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G675W00MR/terror-in-resonance', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/thepromisedneverlandcard.png', video: 'https://www.youtube.com/embed/5llQ56toiPs', title: 'The Promised Neverland', episodes: '23 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYVD2K1WY/the-promised-neverland', genre: 'Thriller', seasons: '2 Seasons' },
        { src: 'Feature/tokyoghoulcard.png', video: 'https://www.youtube.com/embed/vGuQeQsoRgU', title: 'Tokyo Ghoul', episodes: '50 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6NV7Z50Y/tokyo-ghoul', genre: 'Thriller', seasons: '4 Seasons' },
        { src: 'Feature/tomodachicard.png', video: 'https://www.youtube.com/embed/y-hPQ0-orMM', title: 'Tomodachi Game', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GJ0H7QX0Z/tomodachi-game', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/parasytecard.png', video: 'https://www.youtube.com/embed/xWtUMR1BveU', title: 'Parasyte', episodes: '24 Episodes', crunchyrollLink: 'https://crunchyroll.com/series/G6K53VGGY/parasyte--the-maxim-', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/deathparadecard.png', video: 'https://www.youtube.com/embed/8ziUXV6t0ow', title: 'Death Parade', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6GGXKNE6/death-parade', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/detectiveconancard.png', video: 'https://www.youtube.com/embed/mz3b6Ym8s6s', title: 'Detective Conan', episodes: '1,056 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6JQVM3ER/case-closed-detective-conan', genre: 'Thriller', seasons: '2 Seasons' },
        { src: 'Feature/kabanericard.png', video: 'https://www.youtube.com/embed/lQ9VjFBqfH8', title: 'Kabaneri', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR24GX896/kabaneri-of-the-iron-fortress', genre: 'Thriller', seasons: '2 Seasons' },
        { src: 'Feature/inspectrecard.png', video: 'https://www.youtube.com/embed/l9QsM6PeTV4', title: 'In/Spectre', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYZJEEQGR/inspectre', genre: 'Thriller', seasons: '2 Seasons' },
        { src: 'Feature/deadmanwonderlandcard.png', video: 'https://www.youtube.com/embed/0OjJiQ_tB6k', title: 'Deadman Wonderland', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRX02EZ06/deadman-wonderland', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/roncard.png', video: 'https://www.youtube.com/embed/f8eyItevwLI', title: "Ron Kamonohashi's...", episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN903/ron-kamonohashis-forbidden-deductions', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/anotherrcard.png', video: 'https://www.youtube.com/embed/N2iSnFwt9do', title: 'Another', episodes: '12 Episodes', crunchyrollLink: 'https://crunchyroll.com/series/GR09X52WR/another', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/gleipnircard.png', video: 'https://www.youtube.com/embed/QzQ1sDFUJiA', title: 'Gleipnir', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G9VHN9P7W/gleipnir', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/detectivecard.png', video: 'https://www.youtube.com/embed/N2iSnFwt9do', title: 'The Detective Is...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G24H1N334/the-detective-is-already-dead', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/eggcard.png', video: 'https://www.youtube.com/embed/zJ4yP7Icclc', title: 'WONDER EGG...', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM372Z/wonder-egg-priority', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/rokkacard.png', video: 'https://www.youtube.com/embed/KLOtrSOeO10', title: 'Rokka', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRVNEXKXY/rokka--braves-of-the-six-flowers-', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/battlecard.png', video: 'https://www.youtube.com/embed/hWnSZnkjZa4', title: 'Battle Game...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G8DHV7DG7/battle-game-in-5-seconds', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/puellacard.png', video: 'https://www.youtube.com/embed/XLzlHZTfGeI', title: 'Puella Magi...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRDQK39GY/puella-magi-madoka-magica', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/classroomcard.png', video: 'https://www.youtube.com/embed/iYsx6w5PNno', title: 'Classroom of...', episodes: '38 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRVN8MNQY/classroom-of-the-elite', genre: 'Thriller', seasons: '3 Seasons' },
        { src: 'Feature/loveofcard.png', video: 'https://www.youtube.com/embed/QOe5sSs5fmI', title: 'Love of Kill', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G0XHWM0XW/love-of-kill', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/steinscard.png', video: 'https://www.youtube.com/embed/MKfTpK2U9Z4', title: 'Steins;Gate 0', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYWE7W5GY/steinsgate', genre: 'Thriller', seasons: '2 Seasons' },
        { src: 'Feature/millionairecard.png', video: 'https://www.youtube.com/embed/an6QA92h_5o', title: 'The Millionaire Detective', episodes: '11 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GP5HJ855D/the-millionaire-detective---balance-unlimited', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/dancecard.png', video: 'https://www.youtube.com/embed/fp6qRTvCTuw', title: 'Dance in the...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6QWGNN76/dance-in-the-vampire-bund', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/abandonedcard.png', video: 'https://www.youtube.com/embed/bWM32ukSlTY', title: 'To the Abandoned...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRW459Z8Y/to-the-abandoned-sacred-beasts', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/pandoracard.png', video: 'https://www.youtube.com/embed/9Psc_hBkOoc', title: 'PandoraHearts', episodes: '25 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR751Q2ZY/pandorahearts', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/darwincard.png', video: 'https://www.youtube.com/embed/_cLxzQoNVpo', title: "Darwin's Game", episodes: '11 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G61X24PZ6/darwins-game', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/gibiatecard.png', video: 'https://www.youtube.com/embed/rU6HjgMIIBs', title: 'GIBIATE', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR3K2EXXR/gibiate', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/phantomcard.png', video: 'https://www.youtube.com/embed/-NfKJZvT_64', title: 'Phantom in the...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G63KVZV46/phantom-in-the-twilight', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/jokercard.png', video: 'https://www.youtube.com/embed/9uzrn5QzNWc', title: 'JOKER GAME', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8VXP2JY/joker-game', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/schoolcard.png', video: 'https://www.youtube.com/embed/ZG1Q6N5L-fo', title: 'School Days', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G62P4MG76/school-days', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/gankutsuoucard.png', video: 'https://www.youtube.com/embed/nCCHjKzPzTY', title: 'Gankutsuou', episodes: '24 Episodes', crunchyrollLink: 'https://crunchyroll.com/series/G6MG10376/gankutsuou', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/moriartycard.png', video: 'https://www.youtube.com/embed/zDX2dfLqhjo', title: 'Moriarty the Patriot', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM379D/moriarty-the-patriot', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/junjicard.png', video: 'https://www.youtube.com/embed/sV0LIpvJ97s', title: 'Junji Ito Collection', episodes: '13 Episodes', crunchyrollLink: 'https://crunchyroll.com/series/G68V4NDJ6/junji-ito-collection', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/kingscard.png', video: 'https://www.youtube.com/embed/VDT9gIVGwK4', title: "King's Game", episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8V73KJY/kings-game', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/invadedcard.png', video: 'https://www.youtube.com/embed/nc7Y0BvEYQk', title: 'ID: INVADED', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G79H230GE/id-invaded', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/bakecard.png', video: 'https://www.youtube.com/embed/PugZi9QKL64', title: 'Bakemonogatari', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G69PXP1EY/bakemonogatari', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/totalcard.png', video: 'https://www.youtube.com/embed/maAC_u1kpaU', title: 'Total Eclipse', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8VDPKGY/total-eclipse', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/bigcard.png', video: 'https://www.youtube.com/embed/FVOdep-vEjU', title: 'BIG ORDER', episodes: '10 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6VNEV0QR/big-order', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/gardencard.png', video: 'https://www.youtube.com/embed/JSTMtdv119c', title: 'The Garden of Sinners', episodes: '10 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6DK07N7R/the-garden-of-sinners', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/evilcard.png', video: 'https://www.youtube.com/embed/z2ggBRm97GA', title: 'EVIL OR LIVE', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6E5098GY/evil-or-live', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/chaoscard.png', video: 'https://www.youtube.com/embed/NRquuySnm68', title: 'CHAOS;CHILD', episodes: '14 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR497ZW36/chaoschild', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/p4card.png', video: 'https://www.youtube.com/embed/PnvAj2XyL-k', title: 'Persona4', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR9P3GND6/persona4-the-golden-animation', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/accacard.png', video: 'https://www.youtube.com/embed/_lSK9EYLCP4', title: 'ACCA', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR5V95N8R/acca-13-territory-inspection-dept', genre: 'Thriller', seasons: '2 Seasons' },
        { src: 'Feature/gacard.png', video: 'https://www.youtube.com/embed/NG0Sfkm1D9U', title: 'Ga-Rei-Zero', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6ZXZD93R/ga-rei-zero', genre: 'Thriller', seasons: '1 Seasons' },
        { src: 'Feature/strangecard.png', video: 'https://www.youtube.com/embed/aAZ6kSyUf-E', title: 'Strange+', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRGGVKZWR/strange', genre: 'Thriller', seasons: '2 Seasons' }, 
        //Thriller
        //Adventure        
        { src: 'Feature/fairytailcard.png', video: 'https://www.youtube.com/embed/mAAKPx-ndAg', title: 'Fairy Tail', episodes: '328 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6DQDD3WR/fairy-tail', genre: 'Adventure', seasons: '3 Seasons' },
        { src: 'Feature/drstonecard.png', video: 'https://www.youtube.com/embed/S6OmSIxSj14', title: 'Dr. Stone', episodes: '35 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYEXQKJG6/dr-stone', genre: 'Adventure', seasons: '4 Seasons' },
        { src: 'Feature/frierencard.png', video: 'https://www.youtube.com/embed/pqUZaKn7flw', title: 'Frieren', episodes: '28 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XQX4/frieren-beyond-journeys-end', genre: 'Adventure', seasons: '1 Seasons' },
        { src: 'Feature/yuyucard.png', video: 'https://www.youtube.com/embed/bGc1Na8mlw0', title: 'Yuyu Hakusho', episodes: '112 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR9PKENW6/yu-yu-hakusho', genre: 'Adventure', seasons: '3 Seasons' },
        { src: 'Feature/fullmetalcard.png', video: 'https://www.youtube.com/embed/kx0nBaS_q50', title: 'Full Metal Alchemist', episodes: '94 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRGGPG93R/fullmetal-alchemist-brotherhood', genre: 'Adventure', seasons: '1 Seasons' },
        { src: 'Feature/goldenkamuycard.png', video: 'https://www.youtube.com/embed/Qqy7MCK4GeI', title: 'Golden Kamuy', episodes: '49 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8DWQN5Y/golden-kamuy', genre: 'Adventure', seasons: '1 Seasons' },
        { src: 'Feature/goldenwindcard.png', video: 'https://www.youtube.com/embed/Ubve8INYEws', title: 'Golden Wind', episodes: '158 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYP8DP1MY/jojos-bizarre-adventure', genre: 'Adventure', seasons: '6 Seasons' },
        { src: 'Feature/hxhcard.png', video: 'https://www.youtube.com/embed/d6kBeJjTGnY', title: 'Hunter X Hunter', episodes: '148 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY3VKX1MR/hunter-x-hunter', genre: 'Adventure', seasons: '1 Seasons' },
        { src: 'Feature/somalicard.png', video: 'https://www.youtube.com/embed/Xfw57amXb8Q', title: 'Somali', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G60X5KMPR/somali-and-the-forest-spirit', genre: 'Adventure', seasons: '1 Seasons' },
        { src: 'Feature/onepiececard.png', video: 'https://www.youtube.com/embed/TbHtbzAnZJ4', title: 'One Piece', episodes: '1,110 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece', genre: 'Adventure', seasons: '25 Seasons' },
        { src: 'Feature/marksmancard.png', video: 'https://www.youtube.com/embed/u6Pm0tDeGQQ', title: 'Lord Marksman', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYWEZN1NY/lord-marksman-and-vanadis', genre: 'Adventure', seasons: '1 Seasons' },
        { src: 'Feature/chroniclecard.png', video: 'https://www.youtube.com/embed/wcwHx5NTJFo', title: 'Chain Chronicle', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8VQJM0Y/chain-chronicle---the-light-of-haecceitas', genre: 'Adventure', seasons: '2 Seasons' },
        { src: 'Feature/mydaughtercard.png', video: 'https://www.youtube.com/embed/hnhdx8TQ4UU', title: 'My Daughter Left', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G5PHNM9M5/my-daughter-left-the-nest-and-returned-an-s-rank-adventurer', genre: 'Adventure', seasons: '1 Seasons' },
        { src: 'Feature/stabbercard.png', video: 'https://www.youtube.com/embed/1m9S8wQ3SlE', title: 'Sorcerous Stabber Orphen', episodes: '49 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GJ0H7QXDW/sorcerous-stabber-orphen', genre: 'Adventure', seasons: '1 Seasons' },
        { src: 'Feature/magicard.png', video: 'https://www.youtube.com/embed/2E7o26G1T0c', title: 'Magi', episodes: '50 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY09XN14Y/magi', genre: 'Adventure', seasons: '2 Seasons' },
        { src: 'Feature/borutocard.png', video: 'https://www.youtube.com/embed/nQeIObeB--8', title: 'BORUTO: NEXT GENERATIONS', episodes: '293 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR75Q020Y/boruto-naruto-next-generations', genre: 'Adventure', seasons: '1 Seasons'  },
        { src: 'Feature/undeadcard.png', video: 'https://www.youtube.com/embed/iaYgDqydDoI', title: 'The Unwanted Undead Featurer', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GW4HM7WZQ/the-unwanted-undead-adventurer', genre: 'Adventure', seasons: '1 Seasons'  },
        { src: 'Feature/twincard.png', video: 'https://www.youtube.com/embed/Kt7a6ms1LmA', title: 'Twin Star Exorcists', episodes: '50 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G63VM084Y/twin-star-exorcists', genre: 'Adventure', seasons: '1 Seasons'  },
        { src: 'Feature/narutooldcard.png', video: 'https://www.youtube.com/embed/-G9BqkgZXRA', title: 'Naruto', episodes: '220 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY9PJ5KWR/naruto', genre: 'Adventure', seasons: '9 Seasons'  },
        { src: 'Feature/demonkingcard.png', video: 'https://www.youtube.com/embed/9qJyDlZst8c', title: 'The Misfit of Demon King Academy', episodes: '36 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY243NN0R/the-misfit-of-demon-king-academy', genre: 'Adventure', seasons: '2 Seasons' },
        { src: 'Feature/togcard.png', video: 'https://www.youtube.com/embed/RNyClma6awo', title: 'Tower of God', episodes: '14 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6J0G49DR/tower-of-god', genre: 'Adventure', seasons: '2 Seasons'  },
        { src: 'Feature/goblincard.png', video: 'https://www.youtube.com/embed/7qnhoB_cHSg', title: 'GOBLIN SLAYER', episodes: '26 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6VDMN306/goblin-slayer', genre: 'Adventure', seasons: '3 Seasons'  },
        { src: 'Feature/ancientcard.png', video: 'https://www.youtube.com/embed/bNNaZdtGZVc', title: 'The Ancient Magus\'Bride', episodes: '54 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRZXQJJ8Y/the-ancient-magus-bride', genre: 'Adventure', seasons: '4 Seasons'  },
        { src: 'Feature/triguncard.png', video: 'https://www.youtube.com/embed/AzZYXqUdp5o', title: 'Trigun Stampede', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM3PK5/trigun-stampede', genre: 'Adventure', seasons: '2 Seasons'  },
        { src: 'Feature/orientcard.png', video: 'https://www.youtube.com/embed/L4W_Eo6HU30', title: 'Orient', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GVDHX8PMM/orient', genre: 'Adventure', seasons: '1 Seasons'  },
        { src: 'Feature/shinobicard.png', video: 'https://www.youtube.com/embed/URyzSJM-_HE', title: 'Shinobi no Ittoki', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G5PHNM7KG/shinobi-no-ittoki', genre: 'Adventure', seasons: '1 Seasons'  },
        { src: 'Feature/digimoncard.png', video: 'https://www.youtube.com/embed/fmfR2nR_RRY', title: 'Digimon Feature', episodes: '67 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYEX24PV6/digimon-adventure-2020', genre: 'Adventure', seasons: '1 Seasons'  },
        { src: 'Feature/questcard.png', video: 'https://www.youtube.com/embed/RrwbuwhIwbA', title: 'Dragon Quest', episodes: '101 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYXM79M56/dragon-quest-the-adventure', genre: 'Adventure', seasons: '1 Seasons'  },
        { src: 'Feature/torikocard.png', video: 'https://www.youtube.com/embed/YZNDrITMpbw', title: 'Toriko', episodes: '146 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRE5MNM06/toriko', genre: 'Adventure', seasons: '1 Seasons' },
        { src: 'Feature/radiantcard.png', video: 'https://www.youtube.com/embed/qZwtUu3p1zg', title: 'RADIANT', episodes: '42 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6W4MEZ0R/radiant', genre: 'Adventure', seasons: '2 Seasons' },
        { src: 'Feature/sabikuicard.png', video: 'https://www.youtube.com/embed/1k7o4ywm6Is', title: 'SABIKUI BISCO', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G79H23V24/sabikui-bisco', genre: 'Adventure', seasons: '1 Seasons' },
        { src: 'Feature/edencard.png', video: 'https://www.youtube.com/embed/1Ykbdi94frI', title: 'EDENS ZERO', episodes: '26 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G79H23XJJ/edens-zero', genre: 'Adventure', seasons: '2 Seasons' },
        { src: 'Feature/idatencard.png', video: 'https://www.youtube.com/embed/q3GbjO2NXFw', title: 'Idaten Deities', episodes: '11 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G8DHV7DJ7/the-idaten-deities-know', genre: 'Adventure', seasons: '1 Seasons' },
        { src: 'Feature/fenacard.png', video: 'https://www.youtube.com/embed/QTtXMqgZRpg', title: 'Fena: Pirate Princess', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GZJH3DPM1/fena-pirate-princess', genre: 'Adventure', seasons: '1 Seasons' },
        { src: 'Feature/jormungandcard.png', video: 'https://www.youtube.com/embed/jubovSaFDec', title: 'Jormungand', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRMGWEM3R/jormungand', genre: 'Adventure', seasons: '1 Seasons' },
        { src: 'Feature/revengercard.png', video: 'https://www.youtube.com/embed/8mNZABPDT-A', title: 'Revenger', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G8DHV7425/revenger', genre: 'Adventure', seasons: '1 Seasons' },
        { src: 'Feature/sakugancard.png', video: 'https://www.youtube.com/embed/YBZCuDWjA9A', title: 'SAKUGAN', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GP5HJ800Z/sakugan', genre: 'Adventure', seasons: '1 Seasons' },
        { src: 'Feature/slimecard.png', video: 'https://www.youtube.com/embed/uOzwqb74K34', title: 'Reincarnated as A Slime', episodes: '77 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYZJ43JMR/that-time-i-got-reincar', genre: 'Adventure', seasons: '6 Seasons' },
        { src: 'Feature/tsukimichicard.png', video: 'https://www.youtube.com/embed/Q7IUIZix_yw', title: 'Tsukimichi', episodes: '37 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GZJH3D719/tsukimichi--moonlit-fan', genre: 'Adventure', seasons: '2 Seasons' },
        { src: 'Feature/mushokucard.png', video: 'https://www.youtube.com/embed/k5VxfJpzy1Q', title: 'Mushoku Tensei', episodes: '49 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G24H1N3MP/mushoku-tensei-jobless-', genre: 'Adventure', seasons: '2 Seasons' },
        { src: 'Feature/shieldherocard.png', video: 'https://www.youtube.com/embed/rKnyi3TRznA', title: 'Shield Hero', episodes: '50 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6W4QKX0R/the-rising-of-the-shiel', genre: 'Adventure', seasons: '3 Seasons' },
        { src: 'Feature/loghorizoncard.png', video: 'https://www.youtube.com/embed/IG1VhJ75r8k', title: 'Log Horizon', episodes: '62 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRVNMG93Y/log-horizon', genre: 'Adventure', seasons: '3 Seasons' },
        { src: 'Feature/saocard.png', video: 'https://www.youtube.com/embed/6ohYYtxfDCg', title: 'Sword Art Online', episodes: '107 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR49G9VP6/sword-art-online', genre: 'Adventure', seasons: '8 Seasons' },
        { src: 'Feature/campcard.png', video: 'https://www.youtube.com/embed/vpH42sJ8t9c', title: 'Laid-Back Camp', episodes: '44 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRWEW95KR/laid-back-camp', genre: 'Adventure', seasons: '5 Seasons' },
        { src: 'Feature/solocard.png', video: 'https://www.youtube.com/embed/bssSj4cKsrI', title: 'Solo Leveling', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZEJ0K/solo-leveling', genre: 'Adventure', seasons: '1 Seasons' },
        { src: 'Feature/Aotcard.png', video: 'https://www.youtube.com/embed/n4Nj6Y_SNYI', title: 'Attack On Titan', episodes: '94 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan', genre: 'Adventure', seasons: '5 Seasons' },
        { src: 'Feature/shangrilacard.png', video: 'https://www.youtube.com/embed/rsTbPKiGQdo', title: 'Shangri-La Frontier', episodes: '25 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G79H23Z8P/shangri-la-frontier', genre: 'Adventure', seasons: '1 Seasons' },
        { src: 'Feature/vinlandcard.png', video: 'https://www.youtube.com/embed/f8JrZ7Q_p-8', title: 'Vinland Saga', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3WKK0/vinland-saga', genre: 'Adventure', seasons: '2 Seasons' },
        { src: 'Feature/dragoncard.png', video: 'https://www.youtube.com/embed/2Vej889SS6s', title: 'Dragon Ball Super', episodes: '131 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR19V7816/dragon-ball-super', genre: 'Adventure', seasons: '1 Seasons'  },
        { src: 'Feature/bluecard.png', video: 'https://www.youtube.com/embed/hwnpiByHi20', title: 'Blue Exorcist', episodes: '49 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G649PJ0JY/blue-exorcist', genre: 'Adventure', seasons: '3 Seasons'  } ,        
        //Adventure
        //Sports
        { src: 'Feature/haikyucard.png', video: 'https://www.youtube.com/embed/KhZG9Uw7PxM', title: 'Haikyu!!', episodes: '85 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8VM8MWY/haikyu', genre: 'Sports', seasons: '7 Seasons' },
        { src: 'Feature/yuricard.png', video: 'https://www.youtube.com/embed/KuhLOnIszok', title: 'Yuri on Ice', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY2PEJ0MY/yuri-on-ice', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/ippocard.png', video: 'https://www.youtube.com/embed/a94NcwNgPdo?start=1', title: 'Hajime No Ippo', episodes: '127 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GW4HM7N7X/hajime-no-ippo-the-fighting', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/kurokobasketcard.png', video: 'https://www.youtube.com/embed/1KLvA6FMNiE', title: 'Kurokos Basketball', episodes: '83 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G62P48X56/kurokos-basketball', genre: 'Sports', seasons: '5 Seasons' },
        { src: 'Feature/princeoftenniscard.png', video: 'https://www.youtube.com/embed/H0aHXo8q85g', title: 'The Prince of Tennis', episodes: '178 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G79H23V91/the-prince-of-tennis', genre: 'Sports', seasons: '2 Seasons' },
        { src: 'Feature/runwiththewindcard.png', video: 'https://www.youtube.com/embed/hECoG4DhFVQ', title: 'Run With the Wind', episodes: '23 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G68DM2316/run-with-the-wind', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/pedalcard.png', video: 'https://www.youtube.com/embed/4pwc916s8J0', title: 'Yowamushi Pedal', episodes: '112 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRGGVKP4R/yowamushi-pedal', genre: 'Sports', seasons: '5 Seasons' },
        { src: 'Feature/slamdunkcard.png', video: 'https://www.youtube.com/embed/CbK6Yy4f4zY', title: 'Slam Dunk', episodes: '101 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G69PJJM3Y/slam-dunk', genre: 'Sports', seasons: '3 Seasons' },
        { src: 'Feature/freedivecard.png', video: 'https://www.youtube.com/embed/iLUZd5e_9vs', title: 'Free', episodes: '37 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRDQV2VWY/free---iwatobi-swim-club', genre: 'Sports', seasons: '8 Seasons' },
        { src: 'Feature/aoashicard.jpg', video: 'https://www.youtube.com/embed/UdKoCImaUeQ', title: 'Aoashi', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G4PH0WX5J/aoashi', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/bluelockcard.jpg', video: 'https://www.youtube.com/embed/IVsII3dLbWc?start=1', title: 'Blue Lock', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G4PH0WEKE/blue-lock', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/megaloboxcard.jpg', video: 'https://www.youtube.com/embed/gVxLZityaR0', title: 'MEGALOBOX', episodes: '26 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR4PVJ1WY/megalobox', genre: 'Sports', seasons: '2 Seasons' },
        { src: 'Feature/sk8card.jpg', video: 'https://www.youtube.com/embed/vuoYi-1rCA4', title: 'SK8 the Infinity', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G5PHNM434/sk8-the-infinity', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/eyeshieldcard.jpg', video: 'https://www.youtube.com/embed/IYgnjsihha4', title: 'Eyeshield', episodes: '145 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRE5KGN36/eyeshield-21', genre: 'Sports', seasons: '3 Seasons' },
        { src: 'Feature/ahirunosoracard.jpg', video: 'https://www.youtube.com/embed/rsqxACPa8EU', title: 'Ahiru no Sora', episodes: '50 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6NVGNJGY/ahiru-no-sora', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/captaincard.png', video: 'https://www.youtube.com/embed/K6zQ1qs2hLY', title: 'Captain Tsubasa', episodes: '39 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G4PH0WJDQ/captain-tsubasa-junior', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/daycard.png', video: 'https://www.youtube.com/embed/VKavtkIZXoI', title: 'DAYS', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYX040PKR/days', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/mfghostcard.png', video: 'https://www.youtube.com/embed/zNWZjjkKfXs', title: 'MF GHOST', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3W2W7/mf-ghost', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/hinomarucard.png', video: 'https://www.youtube.com/embed/Gxq9uR6EMd0', title: 'Hinomaru Sumo', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G60X7D34R/hinomaru-sumo', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/tsurunecard.png', video: 'https://www.youtube.com/embed/6w_GwGdk8_0', title: 'Tsurune', episodes: '14 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRDKVP34Y/tsurune', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/birdiecard.png', video: 'https://www.youtube.com/embed/EgmBeG0Yyl8', title: 'Birdie Wing', episodes: '25 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN714/birdie-wing--golf-girls', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/overtakecard.png', video: 'https://www.youtube.com/embed/x9H2uJxOREs', title: 'OVERTAKE!', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G9VHN9Q4N/overtake', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/243card.png', video: 'https://www.youtube.com/embed/5utDbhnMF0s', title: '2.43 Volleyball Team', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJVEZ1/243-seiin-high-school-volleyball', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/loveallplaycard.png', video: 'https://www.youtube.com/embed/PMHRDK2qjS4', title: 'Love All Play', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GKEH2G4MW/love-all-play', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/burningkabaddicard.png', video: 'https://www.youtube.com/embed/CeUcyCPcDa4', title: 'Burning Kabaddi', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G9VHN9W5J/burning-kabaddi', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/pingpongcard.png', video: 'https://www.youtube.com/embed/ItlDaDfLBn8', title: 'Ping Pong', episodes: '11 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRJQV0N3Y/ping-pong-the-animation', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/iwakakerucard.png', video: 'https://www.youtube.com/embed/T8Skpo5daFI', title: 'Iwakakeru -Sport Climbing Girls-', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRJK7WV4Y/iwakakeru--sport-climbing-girls', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/tamayomicard.png', video: 'https://www.youtube.com/embed/BohDWS5YWdo', title: 'TAMAYOMI: The Baseball Girls', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM39XE/tamayomi-the-baseball-girls', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/2ndcard.png', video: 'https://www.youtube.com/embed/tk4rmNvDgLI', title: 'MAJOR 2nd', episodes: '52 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6P5WVEQ6/major-2nd', genre: 'Sports', seasons: '2 Seasons' },
        { src: 'Feature/puraorecard.png', video: 'https://www.youtube.com/embed/1hBHRibhTjc', title: 'PuraOre! Pride of Orange', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G3KHEV77Z/puraore-pride-of-orange', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/hanebadocard.png', video: 'https://www.youtube.com/embed/GoHQ1ARlm4I', title: 'HANEBADO!', episodes: '25 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRZJXKN86/hanebado', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/wavecard.png', video: 'https://www.youtube.com/embed/hdtr-LAywcU', title: 'Wave, Listen to Me!', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZE1PX/wave--lets-go-surfing', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/cleanfreakcard.png', video: 'https://www.youtube.com/embed/pTtBxVeaqjo', title: 'Clean Freak! Aoyama kun', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYNQZQ3XY/clean-freak-aoyama-kun', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/backflipcard.png', video: 'https://www.youtube.com/embed/tsELGZjOwhw', title: 'Backflip!!', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM3NEV/backflip', genre: 'Sports', seasons: '2 Seasons' },
        { src: 'Feature/starsaligncard.png', video: 'https://www.youtube.com/embed/opgXY7fqSEw', title: 'Stars Align', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM3983/stars-align', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/kemonomichicard.png', video: 'https://www.youtube.com/embed/YaSMOrWpYrM', title: 'Kemono Michi: Rise Up', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G8DHV7EPX/kemono-michi-rise-up', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/salarymansclubcard.png', video: 'https://www.youtube.com/embed/s74Cvn86dEk', title: 'Salaryman\'s Club', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G9VHN9P99/salarymans-club', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/skateleadingstarscard.png', video: 'https://www.youtube.com/embed/t9rzegGBBi0', title: 'Skate-Leading Stars', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G9VHN971K/skate-leading-stars', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/shootgoalcard.png', video: 'https://www.youtube.com/embed/vTCYrqTuoVU', title: 'Shoot! Goal to the Future', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GVDHX8JZ2/shoot-goal-to-the-future', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/re-maincard.png', video: 'https://www.youtube.com/embed/HvZ7xtjYMSk', title: 'RE-MAIN', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3WKZ3/re-main', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/farewellmydearcard.png', video: 'https://www.youtube.com/embed/kim1S3ySNqs', title: 'Farewell, My Dear Cramer', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZE431/farewell-my-dear-cramer', genre: 'Sports', seasons: '2 Seasons' },
        { src: 'Feature/tigermaskwcard.png', video: 'https://www.youtube.com/embed/JdIexLN-R0Q', title: 'Tiger Mask W', episodes: '38 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8VJJ0GY/tiger-mask-w', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/extremeheartscard.png', video: 'https://www.youtube.com/embed/sp3qRgn2pEc', title: 'Extreme Hearts', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G3KHEVQQG/extreme-hearts', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/twocarcard.png', video: 'https://www.youtube.com/embed/7IIevQEOXZM', title: 'TWOCAR', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY2PQNPMY/twocar', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/sorairoutilitycard.png', video: 'https://www.youtube.com/embed/zvuJ-D1W_bU', title: 'Sorairo Utility', episodes: '1 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XDJM/sorairo-utility', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/futsalboyscard.png', video: 'https://www.youtube.com/embed/3CbQaVZwNMM', title: 'Futsal Boys!!!!', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G24H1NJE2/futsal-boys', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/fanfarecard.png', video: 'https://www.youtube.com/embed/6izny1r6HYU', title: 'Fanfare of Adolescence', episodes: '11 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GMEHME4QD/fanfare-of-adolescence', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/gurazenicard.png', video: 'https://www.youtube.com/embed/oyXkrLEBkc8', title: 'Gurazeni: Money Pitch', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRVDWZZ4R/gurazeni-money-pitch', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/howheavyaredumbbellscard.png', video: 'https://www.youtube.com/embed/2YPtn01c66M', title: 'How Heavy Are the Dumbbells You Lift?', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GP5HJ80VJ/how-heavy-are-the-dumbbells-you-lift', genre: 'Sports', seasons: '1 Seasons' },
        { src: 'Feature/chihayafurucard.png', video: 'https://www.youtube.com/embed/yEflqf1U9lA', title: 'Chihayafuru', episodes: '75 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYGG57V3Y/chihayafuru', genre: 'Sports', seasons: '3 Seasons' },
        //Sports
        //Comedy
        { src: 'Feature/bucchigiricard.png', video: 'https://www.youtube.com/embed/Kw6JkejW_Hw', title: 'BUCCHIGIRI?!', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G5PHNM985/bucchigiri', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/buddycard.png', video: 'https://www.youtube.com/embed/Oqxm1mn917g', title: 'Buddy Daddies', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5X3DE/buddy-daddies', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/combatantscard.png', video: 'https://www.youtube.com/embed/-uJdqz-fBl8', title: 'Combatants Will...', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GQWH0M98E/combatants-will-be-dispatched', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/ghostcard.png', video: 'https://www.youtube.com/embed/kOi5SpwDQR4', title: 'Ghost Stories', episodes: '20 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6MGP0K46/ghost-stories', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/gintamacard.png', video: 'https://www.youtube.com/embed/Eh43PgDfSxU', title: 'Gintama', episodes: '328 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYQ4MKDZ6/gintama', genre: 'Comedy', seasons: '8 Seasons' },
        { src: 'Feature/grandbluecard.png', video: 'https://www.youtube.com/embed/YILULCpNg9U', title: 'Grand Blue', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR097JN7R/grand-blue', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/gurrencard.png', video: 'https://www.youtube.com/embed/rAQylCHv8Cw', title: 'Gurren Lagann', episodes: '27 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR097JN7R/gurren-lagann', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/konosubacard.png', video: 'https://www.youtube.com/embed/N1AO7k2o78g', title: 'Konosuba', episodes: '20 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYE5K3GQR/konosuba--gods-blessing-on-this-wonderful-world', genre: 'Comedy', seasons: '4 Seasons' },
        { src: 'Feature/mashlecard.png', video: 'https://www.youtube.com/embed/_ce5_P1Hj5A', title: 'Mashle', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZEP8W/mashle-magic-and-muscles', genre: 'Comedy', seasons: '2 Seasons' },
        { src: 'Feature/mobcard.png', video: 'https://www.youtube.com/embed/nTze7vAdRpM', title: 'Mob Psycho 100', episodes: '39 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY190DKQR/mob-psycho-100', genre: 'Comedy', seasons: '4 Seasons' },
        { src: 'Feature/nichijoucard.png', video: 'https://www.youtube.com/embed/0AEV-8d_vbg', title: 'Nichijou', episodes: '26 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR24PVM76/nichijou---my-ordinary-life', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/pickupcard.png', video: 'https://www.youtube.com/embed/Nk23ix2xgTg', title: 'Is It Wrong to Try...', episodes: '37 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6DQN9KGR/is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon', genre: 'Comedy', seasons: '2 Seasons' },
        { src: 'Feature/robocard.png', video: 'https://www.youtube.com/embed/M0X4J1jpApw', title: 'ME & ROBOCO', episodes: '20 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GKEH2G031/me--roboco', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/spacedandycard.png', video: 'https://www.youtube.com/embed/S4qW86moTys', title: 'Space Dandy', episodes: '26 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G63K4W296/space-dandy', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/spyxfamilycard.png', video: 'https://www.youtube.com/embed/6sosTNRw_uQ', title: 'Spy x Family', episodes: '37 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G4PH0WXVJ/spy-x-family', genre: 'Comedy', seasons: '2 Seasons' },
        { src: 'Feature/butlercard.png', video: 'https://www.youtube.com/embed/S8j5iEklHyI', title: 'Black Butler', episodes: '65 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYQ43P3E6/black-butler', genre: 'Comedy', seasons: '6 Seasons' },
        { src: 'Feature/campcard.png', video: 'https://www.youtube.com/embed/vpH42sJ8t9c', title: 'Laid-Back Camp', episodes: '44 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRWEW95KR/laid-back-camp', genre: 'Comedy', seasons: '5 Seasons' },
        { src: 'Feature/blackclovercard.png', video: 'https://www.youtube.com/embed/vUjAxk1qYzQ', title: 'Black Clover', episodes: '171 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRE50KV36/black-clover', genre: 'Comedy', seasons: '4 Seasons' },
        { src: 'Feature/datecard.png', video: 'https://www.youtube.com/embed/AytCKBRQJu0', title: 'Date A Live', episodes: '60 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GZJH3DJ8E/date-a-live', genre: 'Comedy', seasons: '7 Seasons' },
        { src: 'Feature/kingcard.png', video: 'https://www.youtube.com/embed/fPj-SXsUbcU', title: 'The Daily Life of...', episodes: '51 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GZJH3DJ8E/the-daily-life-of-the-immortal-king', genre: 'Comedy', seasons: '4 Seasons' },
        { src: 'Feature/bluecard.png', video: 'https://www.youtube.com/embed/hwnpiByHi20', title: 'Blue Exorcist', episodes: '49 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G649PJ0JY/blue-exorcist', genre: 'Comedy', seasons: '3 Seasons' },
        { src: 'Feature/fairytailcard.png', video: 'https://www.youtube.com/embed/mAAKPx-ndAg', title: 'Fairy Tail', episodes: '329 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6DQDD3WR/fairy-tail', genre: 'Comedy', seasons: '3 Seasons' },
        { src: 'Feature/drstonecard.png', video: 'https://www.youtube.com/embed/S6OmSIxSj14', title: 'Dr.Stone', episodes: '59 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYEXQKJG6/dr-stone', genre: 'Comedy', seasons: '4 Seasons' },
        { src: 'Feature/hxhcard.png', video: 'https://www.youtube.com/embed/d6kBeJjTGnY', title: 'Hunter x Hunter', episodes: '148 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY3VKX1MR/hunter-x-hunter', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/irumacard.png', video: 'https://www.youtube.com/embed/kkeuJt0DE7g', title: 'Iruma-kun', episodes: '65 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6NVG970Y/welcome-to-demon-school-iruma-kun', genre: 'Comedy', seasons: '3 Seasons' },
        { src: 'Feature/clericcard.png', video: 'https://www.youtube.com/embed/susqUMviH_E', title: 'The Great Cleric', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XQ24/the-great-cleric', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/toradoracard.png', video: 'https://www.youtube.com/embed/ya570uUgQNc', title: 'Toradora!', episodes: '25 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6P8PXJW6/toradora', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/zombiecard.png', video: 'https://www.youtube.com/embed/O3VO4zinUOI', title: 'Zombie Land Saga', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRJ0K7X5Y/zombie-land-saga', genre: 'Comedy', seasons: '2 Seasons' },
        { src: 'Feature/mylittlecard.png', video: 'https://www.youtube.com/embed/SlD-8h96pDw', title: 'My little Monster', episodes: '13 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6MG8P1W6/my-little-monster', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/kamikatsucard.png', video: 'https://www.youtube.com/embed/MD_q7xYb-Xs', title: 'KamiKatsu', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKNP4J/kamikatsu-working-', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/attorneycard.png', video: 'https://www.youtube.com/embed/O-tfGuZShKQ', title: 'Ace Attorney', episodes: '47 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYE5K0XVR/ace-attorney', genre: 'Comedy', seasons: '2 Seasons' },
        { src: 'Feature/aharencard.png', video: 'https://www.youtube.com/embed/F7bGTibgcjM', title: 'Aharen-san', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN72N/aharen-san-wa-haka', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/cellcard.png', video: 'https://www.youtube.com/embed/HMXWvvjAJek', title: 'Cells at Work!', episodes: '22 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR3KVPQER/cells-at-work', genre: 'Comedy', seasons: '2 Seasons' },
        { src: 'Feature/tsugumomocard.png', video: 'https://www.youtube.com/embed/ptCRrKccB0E', title: 'Tsugumomo', episodes: '25 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G675QE8JR/tsugumomo', genre: 'Comedy', seasons: '3 Seasons' },
        { src: 'Feature/blackcard.png', video: 'https://www.youtube.com/embed/x39JYXYmQ90', title: 'The Dungeon of Black Company', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GP5HJ85WM/the-dungeon-of-black', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/tyrantcard.png', video: 'https://www.youtube.com/embed/ixAK3zJpbwE', title: 'Love Tyrant', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6NQ59GG6/love-tyrant', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/hinamatsuricard.png', video: 'https://www.youtube.com/embed/1oTxGJcx04Q', title: 'Hinamatsuri', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR79PWJ16/hinamatsuri', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/beelzebubcard.png', video: 'https://www.youtube.com/embed/5lyYR7StfrQ', title: 'Beelzebub', episodes: '60 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6GG5KQ86/beelzebub', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/tiscard.png', video: 'https://www.youtube.com/embed/--EXveSl_0k', title: 'Tis Time for Torture, Princess', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJV0KV/tis-time-for-torture', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/desertcard.png', video: 'https://www.youtube.com/embed/XMCqw1vxMnY', title: 'Desert Punk', episodes: '24 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR9P7MP06/desert-punk', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/bakemonogataricard.png', video: 'https://www.youtube.com/embed/PugZi9QKL64', title: 'Bakemonogatari', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G69PXP1EY/bakemonogatari', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/osomatsucard.png', video: 'https://www.youtube.com/embed/_imsKXx0Stk', title: 'Mr. Osomatsu', episodes: '84 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYQ4Q3DP6/mr-osomatsu', genre: 'Comedy', seasons: '4 Seasons' },
        { src: 'Feature/highschoolcard.png', video: 'https://www.youtube.com/embed/BsQj0RYzW98', title: 'Daily Lives of High School Boys', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6X0K0N7Y/daily-lives-of-high', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/mierukocard.png', video: 'https://www.youtube.com/embed/oW2dO_T-9jA', title: 'Mieruko-chan', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3WK52/mieruko-chan', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/hiddencard.png', video: 'https://www.youtube.com/embed/LAuF6RZYTc0', title: 'The Hidden Dungeon Only I Can Enter', episodes: '12 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G3KHEV5QQ/the-hidden-dungeon', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/tonikawacard.png', video: 'https://www.youtube.com/embed/3M7w-ROU62U', title: 'Tonikawa: Over the Moon for You', episodes: '31 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRWMGGQ86/tonikawa-over-the-', genre: 'Comedy', seasons: '3 Seasons' },
        { src: 'Feature/godofhighschoolcard.png', video: 'https://www.youtube.com/embed/oqjwUfprNAk', title: 'The God of High School', episodes: '14 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRVD0ZDQR/the-god-of-high-sc', genre: 'Comedy', seasons: '1 Seasons' },
        { src: 'Feature/dragoncard.png', video: 'https://www.youtube.com/embed/okBHQWnYImg', title: 'Miss Kobayashi\'s Dragon Maid', episodes: '43 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6497Z43Y/miss-kobayashis-dr', genre: 'Comedy', seasons: '3 Seasons' },
        { src: 'Feature/bungocard.png', video: 'https://www.youtube.com/embed/pYDv2ZR25GE', title: 'Bungo Stray Dogs', episodes: '62 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR5VXQ8PR/bungo-stray-dogs', genre: 'Comedy', seasons: '6 Seasons' },
        { src: 'Feature/fruitsbasketcard.png', video: 'https://www.youtube.com/embed/g5MDFMukmUI', title: 'Fruits Basket', episodes: '64 Episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6ZJMGEXY/fruits-basket', genre: 'Comedy', seasons: '4 Seasons' },
        //Comedy
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
        { src: 'mha.png', video: 'https://www.youtube.com/embed/LqJQqcDQxBg', title: 'My Hero Academia', episodes: '138 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia', genre: 'Action' },
        { src: 'fireforce.png', video: 'https://www.youtube.com/embed/fzM43HZ6oeg', title: 'Fire Force', episodes: '48 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYQWNXPZY/fire-force', genre: 'Action' },
        { src: 'bungo.png', video: 'https://www.youtube.com/embed/YUH1mfV3IEU', title: 'Bungo Stray Dogs', episodes: '62 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR5VXQ8PR/bungo-stray-dogs', genre: 'Action' },
        { src: 'jjk.png', video: 'https://www.youtube.com/embed/pkKu9hLT-t8', title: 'Jujutsu Kaisen', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen' },
        { src: 'akame.png', video: 'https://www.youtube.com/embed/NIeKMKwON0U', title: 'Akame Ga Kill', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/', genre: 'Action' },
        { src: 'AOT.png', video: 'https://www.youtube.com/embed/n4Nj6Y_SNYI', title: 'Attack On Titan', episodes: '99 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan', genre: 'Action'  },
        { src: 'demonslayer.png', video: 'https://www.youtube.com/embed/Sl2k7bfBeCw', title: 'Demon Slayer', episodes: '26 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba', genre: 'Action' },
        { src: 'fate.png', video: 'https://www.youtube.com/embed/nfzKXkL_i54', title: 'Fate Stay Night', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8V11X7Y/fatestay-night-unlimited-blade-works', genre: 'Action' },
        { src: 'godofhighschool.png', video: 'https://www.youtube.com/embed/oqjwUfprNAk', title: 'God of High School', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRVD0ZDQR/the-god-of-high-school', genre: 'Action' },
        { src: 'opm.png', video: 'https://www.youtube.com/embed/YUH1mfV3IEU', title: 'One Punch Man', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/', genre: 'Action' },
        { src: 'kenichi.png', video: 'https://www.youtube.com/embed/4xDehi5Qjqs', title: 'KenIchi', episodes: '50 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3W859/kenichi-the-mightiest-disciple', genre: 'Action' },
        { src: 'kindom.png', video: 'https://www.youtube.com/embed/bYudboNENqs', title: 'Kindom', episodes: '79 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRWE89KMR/kingdom', genre: 'Action' },
        { src: 'hinomaru.png', video: 'https://www.youtube.com/embed/Gxq9uR6EMd0', title: 'Hinomaru Sumo', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G60X7D34R/hinomaru-sumo', genre: 'Action' },
        { src: 'takt.png', video: 'https://www.youtube.com/embed/mv_SJoJY7sA', title: 'takt op.Destiny', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJVXX2/takt-opdestiny', genre: 'Action' },
        { src: 'akudama.png', video: 'https://www.youtube.com/embed/H2vRwrLyzQM', title: 'Akudama Drive', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GKEH2G440/akudama-drive', genre: 'Action' },
        { src: 'peach.png', video: 'https://www.youtube.com/embed/7vtl3NGuG1c', title: 'Peach Boy Riverside', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XM84/peach-boy-riverside', genre: 'Action' },
        { src: 'tenjho.png', video: 'https://www.youtube.com/embed/BM-dTZY9HI0', title: 'Tenjho Tenge', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR5VXM03R/tenjho-tenge', genre: 'Action' },
        { src: 'mushibugyo.png', video: 'https://www.youtube.com/embed/uv7dT2VSpp8', title: 'Mushibugyo', episodes: '26 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G65VJVG56/mushibugyo', genre: 'Action' },
        { src: 'monsterstrike.png', video: 'https://www.youtube.com/embed/Yz-57Anl-Os', title: 'Monster Strike', episodes: '51 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G619JM99Y/monster-strike', genre: 'Action' },
        { src: 'shangrila.png', video: 'https://www.youtube.com/embed/rsTbPKiGQdo', title: 'Shangri-La Frontier', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G79H23Z8P/shangri-la-frontier', genre: 'Action' },
        { src: 'solo.png', video: 'https://www.youtube.com/embed/bssSj4cKsrI', title: 'Solo Leveling', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZEJ0K/solo-leveling', genre: 'Action' },
        { src: 'revengers.png', video: 'https://www.youtube.com/embed/idlLFNNpZiI', title: 'Tokyo Revengers', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G3KHEVMN1/tokyo-revengers', genre: 'Action' },
        { src: 'metallic.png', video: 'https://www.youtube.com/embed/yv8eVL4xBI4', title: 'Metallic Rouge', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G24H1NWMJ/metallic-rouge', genre: 'Action' },
        { src: 'deadmount.png', video: 'https://www.youtube.com/embed/_BDDj_4nmNg', title: 'Dead Mount Death Play', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G3KHEV04J/dead-mount-death-play', genre: 'Action' },
        { src: 'gluttony.png', video: 'https://www.youtube.com/embed/f3FwcHciZZ0', title: 'Berserk of Gluttony', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJV05V/berserk-of-gluttony', genre: 'Action' },
        { src: 'dragon.png', video: 'https://www.youtube.com/embed/2Vej889SS6s', title: 'Dragon Ball Super', episodes: '131 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR19V7816/dragon-ball-super', genre: 'Action' },
        { src: 'blood.png', video: 'https://www.youtube.com/embed/aMe0J7c8uOU', title: 'Blood Blockade Battlefront', episodes: '25 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRWEQEZER/blood-blockade-battlefront', genre: 'Action' },
        { src: 'nier.png', video: 'https://www.youtube.com/embed/eIMZYgb85xg', title: 'NieR:Automata Ver1.1a', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKNPW1/nierautomata-ver11a', genre: 'Action' },
        { src: 'killlakill.png', video: 'https://www.youtube.com/embed/B98NY8Hfo7I', title: 'Kill La Kill', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GY8VM43GY/kill-la-kill', genre: 'Action' },
        { src: 'berserk.png', video: 'https://www.youtube.com/embed/0MIw4xzxcTU', title: 'Berserk', episodes: '25 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYX04955R/berserk', genre: 'Action' },
        { src: 'iceblade.png', video: 'https://www.youtube.com/embed/l1hx7s7Ywcs', title: 'The Iceblade Sorcerer', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZEP21/the-iceblade-sorcerer-shall-rule-the-world', genre: 'Action' },
        { src: 'plunderer.png', video: 'https://www.youtube.com/embed/L1Y9r8psTmo', title: 'Plunderer', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN70Z/plunderer', genre: 'Action' },
        { src: 'irregular.png', video: 'https://www.youtube.com/embed/U-gkwdGooDU', title: 'The Irregular', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRMGDGZVR/the-irregular-at-magic-high-school', genre: 'Action' },
        { src: 'vinland.png', video: 'https://www.youtube.com/embed/f8JrZ7Q_p-8', title: 'Vinland Saga', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3WKK0/vinland-saga', genre: 'Action' },
        { src: 'trigger.png', video: 'https://www.youtube.com/embed/pqc0AS1nFlA', title: 'World Trigger', episodes: '99 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GR757DMKY/world-trigger', genre: 'Action' },
        { src: 'trigun.png', video: 'https://www.youtube.com/embed/bJVyIXeUznY', title: 'Trigun', episodes: '27 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYP58QMMY/trigun', genre: 'Action' },
        { src: 'freezing.png', video: 'https://www.youtube.com/embed/V5NefFZiaQc', title: 'Freezing', episodes: '24 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRDQE71GY/freezing', genre: 'Action' },
        { src: 'butler.png', video: 'https://www.youtube.com/embed/S8j5iEklHyI', title: 'Black Butler', episodes: '58 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYQ43P3E6/black-butler', genre: 'Action' },
        { src: 'date.png', video: 'https://www.youtube.com/embed/4CA7RDDhz2Q', title: 'Date A Live', episodes: '58 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYEX5E1G6/date-a-live', genre: 'Action' },
        { src: 'assassination.png', video: 'https://www.youtube.com/embed/kgNkGohA20k', title: 'Assassination Classroom', episodes: '47 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GRE59JGX6/assassination-classroom', genre: 'Action' },
        { src: 'wistoria.png', video: 'https://www.youtube.com/embed/Br9na3MPEh8', title: 'Wistoria', episodes: '3 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GW4HM7WK9/wistoria-wand-and-sword' },
        { src: 'soul.png', video: 'https://www.youtube.com/embed/ac-ir1b1p-k', title: 'Soul Eater', episodes: '51 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GYX0ZW80R/soul-eater', genre: 'Action' },
        { src: '86.png', video: 'https://www.youtube.com/embed/VSdS29SDvn4', title: '86 EIGHTY-SIX', episodes: '23 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GVDHX8DM5/86-eighty-six', genre: 'Action' },
        { src: 'healing.png', video: 'https://www.youtube.com/embed/UkPRnHQJrws', title: 'The Wrong Way...', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G0XHWM1EK/the-wrong-way-to-use-healing-magic', genre: 'Action' },
        { src: 'wind.png', video: 'https://www.youtube.com/embed/62r_G9bEPlU', title: 'WIND BREAKER', episodes: '13 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G3KHEVDPE/wind-breaker', genre: 'Action' }, 
        { src: 'viral.png', video: 'https://www.youtube.com/embed/J6BdqP4lOkE', title: 'Viral Hit', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GJ0H7QGME/viral-hit', genre: 'Action' }, 
        { src: 'tower.png', video: 'https://www.youtube.com/embed/RNyClma6awo', title: 'Tower of God', episodes: '16 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6J0G49DR/tower-of-god', genre: 'Action' }, 
        { src: 'elusivesamurai.png', video: 'https://www.youtube.com/embed/O4AqQNg1MI0', title: 'The Elusive Samurai', episodes: '3 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GQWH0M19X/the-elusive-samurai', genre: 'Action' }, 
        { src: 'kaijuno8.png', video: 'https://www.youtube.com/embed/JwF7bhvnCxI', title: 'Kaiju No. 8', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XQ7D/kaiju-no-8', genre: 'Action' },
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
{ src: 'aharen.png', video: 'https://www.youtube.com/embed/Rd4usifUuEY', title: 'Aharen-san', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN72N/aharen-san-wa-hakarenai' },
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
{ src: 'master.png', video: 'https://www.youtube.com/embed/mVd2HX5oVRk', title: 'The Master of...', episodes: '12 episodes', crunchyrollLink: 'https://www.crunchyroll.com/series/G6NVQ59XY/the-master-of-ragnarok--blesser-of-einherjar' },
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


// Recently added section
document.addEventListener('DOMContentLoaded', function() {
    const videoIframe = document.getElementById('video-iframe');
    const videoOverlay = document.getElementById('video-overlay');
    const crunchyrollButton = document.getElementById('crunchyroll-button');

    const videoLinks = {
        'fairy-tail-card': {
            video: 'https://www.youtube.com/embed/E1a5MRYIGUk',
            crunchyroll: 'https://www.crunchyroll.com/series/GG5H5XQED/fairy-tail-100-years-quest'
        },
        'wistoria-card': {
            video: 'https://www.youtube.com/embed/Br9na3MPEh8',
            crunchyroll: 'https://www.crunchyroll.com/series/GR9PKENW6/wistoria'
        },
        'elusive-samurai-card': {
            video: 'https://www.youtube.com/embed/O4AqQNg1MI0',
            crunchyroll: 'https://www.crunchyroll.com/series/GQWH0M19X/the-elusive-samurai'
        },
        'kaiju-no-8-card': {
            video: 'https://www.youtube.com/embed/JwF7bhvnCxI',
            crunchyroll: 'https://www.crunchyroll.com/series/GG5H5XQ7D/kaiju-no-8'
        }
    };

    function playVideo(videoUrl, crunchyrollUrl) {
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

            // Set Crunchyroll button link and display
            if (crunchyrollButton) {
                crunchyrollButton.href = crunchyrollUrl;
                crunchyrollButton.style.display = 'block'; // Show button
            }
        } else {
            videoIframe.style.display = 'none';
            if (crunchyrollButton) {
                crunchyrollButton.style.display = 'none'; // Hide button
            }
        }
    }

    document.querySelectorAll('.image-card').forEach(card => {
        card.addEventListener('click', function() {
            const links = videoLinks[card.id];
            if (links) {
                playVideo(links.video, links.crunchyroll);
            }
        });
    });

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
            { src: 'Feature/jjkcard.png', video: 'https://www.youtube.com/embed/pkKu9hLT-t8', title: 'Jujutsu Kaisen', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen', episode: '48 Episodes', season: '3 Seasons', genre: 'Action' },
            { src: 'Feature/kaijuno8Card.png', video: 'https://www.youtube.com/embed/JwF7bhvnCxI', title: 'Kaiju No 8', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XQ7D/kaiju-no-8', episode: '12 Episodes', season: '1 Seasons', genre: 'Action' },
            { src: 'Feature/fairytail100card.png', video: 'https://www.youtube.com/embed/E1a5MRYIGUk', title: 'Fairy Tail 100 Years Quest', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XQED/fairy-tail-100-years-quest', episode: '332 Episodes', season: '4 Seasons', genre: 'Action' },
            { src: 'Feature/wistoriacard.png', video: 'https://www.youtube.com/embed/Br9na3MPEh8', title: 'Wistoria', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GW4HM7WK9/wistoria-wand-and-sword', episode: '3 Episodes', season: '1 Seasons', genre: 'Action' },
            { src: 'Feature/elusivesamuraicard.png', video: 'https://www.youtube.com/embed/O4AqQNg1MI0', title: 'Elusive Samurai', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GQWH0M19X/the-elusive-samurai', episode: '3 Episodes', season: '1 Seasons', genre: 'Action' },
            { src: 'Feature/mhacard.png', video: 'https://www.youtube.com/embed/LqJQqcDQxBg', title: 'My Hero Academia', episode: '138 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia', genre: 'Action', season: '5 Seasons' },
            { src: 'Feature/fireforcecard.png', video: 'https://www.youtube.com/embed/fzM43HZ6oeg', title: 'Fire Force', episode: '48 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYQWNXPZY/fire-force', genre: 'Action', season: '2 Seasons' },
            { src: 'Feature/bungocard.png', video: 'https://www.youtube.com/embed/YUH1mfV3IEU', title: 'Bungo Stray Dogs', episode: '62 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR5VXQ8PR/bungo-stray-dogs', genre: 'Action', season: '5 Seasons' },
            { src: 'Feature/akamecard.png', video: 'https://www.youtube.com/embed/NIeKMKwON0U', title: 'Akame Ga Kill', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/', genre: 'Action', season: '1 Seasons' },
            { src: 'Feature/AOTcard.png', video: 'https://www.youtube.com/embed/n4Nj6Y_SNYI', title: 'Attack On Titan', episode: '99 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan', genre: 'Action', season: '4 Seasons'  },
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
            //Isekai
            { src: 'Feature/mushokucard.png', video: 'https://www.youtube.com/embed/k5VxfJpzy1Q', title: 'Mushoku Tensei', episode: '23 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G24H1N3MP/mushoku-tensei-jobless-reincarnation', genre: 'Isekai', season: '2 Seasons' },
            { src: 'Feature/nogamenolifecard.png', video: 'https://www.youtube.com/embed/ZgWgnSG9PB0', title: 'No Game No Life', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/overlordcard.png', video: 'https://www.youtube.com/embed/uhlBqFj9kDw', title: 'OverLord', episode: '52 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G69PZ5PDY/overlord', genre: 'Isekai', season: '5 Seasons' },
            { src: 'Feature/rezerocard.png', video: 'https://www.youtube.com/embed/lXs3yIc_2CU', title: 'Re:Zero', episode: '50 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/', genre: 'Isekai', season: '4 Seasons' },
            { src: 'Feature/sagaoftanyacard.png', video: 'https://www.youtube.com/embed/V8Gx2_sHMRI', title: 'Saga of Tanya', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR9P57W96/saga-of-tanya-the-evil', genre: 'Isekai', season: '3 Seasons' },
            { src: 'Feature/saocard.png', video: 'https://www.youtube.com/embed/6ohYYtxfDCg', title: 'Sword Art Online', episode: '96 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR49G9VP6/sword-art-online', genre: 'Isekai', season: '8 Seasons' },
            { src: 'Feature/shieldherocard.png', video: 'https://www.youtube.com/embed/rKnyi3TRznA', title: 'Shield Hero', episode: '38 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6W4QKX0R/the-rising-of-the-shield-hero', genre: 'Isekai', season: '3 Seasons' },
            { src: 'Feature/slimecard.png', video: 'https://www.youtube.com/embed/uOzwqb74K34', title: 'Reincarnated as A Slime', episode: '48 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYZJ43JMR/that-time-i-got-reincarnated-as-a-slime', genre: 'Isekai', season: '6 Seasons' },
            { src: 'Feature/tsukimichicard.png', video: 'https://www.youtube.com/embed/Q7IUIZix_yw', title: 'Tsukimichi', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GZJH3D719/tsukimichi--moonlit-fantasy-', genre: 'Isekai', season: '2 Seasons' },
            { src: 'Feature/konosubacard.png', video: 'https://www.youtube.com/embed/5h4rQY9bpgE', title: 'Konosuba', episode: '20 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYE5K3GQR/konosuba--gods-blessing-on-this-wonderful-world', genre: 'Isekai', season: '4 Seasons' },
            { src: 'Feature/devilisaparttimercard.png', video: 'https://www.youtube.com/embed/9eCFxxQ4WE0', title: 'Devil is a Part Timer', episode: '26 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR75Z5KKY/the-devil-is-a-part-timer', genre: 'Isekai', season: '2 Seasons' },
            { src: 'Feature/loghorizoncard.png', video: 'https://www.youtube.com/embed/IG1VhJ75r8k', title: 'Log Horizon', episode: '62 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRVNMG93Y/log-horizon', genre: 'Isekai', season: '3 Seasons' },
            { src: 'Feature/blacksummonercard.png', video: 'https://www.youtube.com/embed/m3W8sZhn3-o', title: 'Black Summoner', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GVDHX8JJE/black-summoner', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/spidercard.png', video: 'https://www.youtube.com/embed/geMv8Lwk2sM', title: 'So What im a Spider', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G79H23G0D/so-im-a-spider-so-what', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/vendingmachinecard.png', video: 'https://www.youtube.com/embed/mMOzW_UEdvg', title: 'Reborn as A Vending Machine', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GVDHX8504/reborn-as-a-vending-machine-i-now-wander-the-dungeon', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/yourmomcard.png', video: 'https://www.youtube.com/embed/8qoBfi8REs0', title: 'Do You Love Your...', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6J0EEP0R/do-you-love-your-mom-and-her-two-hit-multi-target-attacks', genre: 'Isekai', season: '13 Seasons' },
            { src: 'Feature/demonlordcard.png', video: 'https://www.youtube.com/embed/V0gQ4N6Y4bI', title: 'Demon Lord, Retry!', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM37KD/demon-lord-retry', genre: 'Isekai', season: '2 Seasons' },
            { src: 'Feature/summoncard.png', video: 'https://www.youtube.com/embed/hodocFdl5O8', title: 'How Not to Summon a Demon Lord', episode: '22 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYZJXWWGR/how-not-to-summon-a-demon-lord', genre: 'Isekai', season: '2 Seasons' },
            { src: 'Feature/restaurantcard.png', video: 'https://www.youtube.com/embed/j_4JaXWk1a4', title: 'Restaurant to Another World', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR49493P6/restaurant-to-another-world', genre: 'Isekai', season: '2 Seasons' },
            { src: 'Feature/anothercard.png', video: 'https://www.youtube.com/embed/A1ll0D9J6II', title: 'In Another World...', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYQ4ZWV46/in-another-world-with-my-smartphone', genre: 'Isekai', season: '2 Seasons' },
            { src: 'Feature/knightcard.png', video: 'https://www.youtube.com/embed/vR9N0c_SFAY', title: 'Knights & Magic', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYX08020R/knights--magic', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/realistcard.png', video: 'https://www.youtube.com/embed/M_pWteehKzM', title: 'How a Realist...', episode: '26 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJV3MV/how-a-realist-hero-rebuilt-the-kingdom', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/millioncard.png', video: 'https://www.youtube.com/embed/U26Up23GGDk', title: 'Im Standing on a Million Lives', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6Q9GGE26/im-standing-on-a-million-lives', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/gracecard.png', video: 'https://www.youtube.com/embed/ylms3zzyfuA', title: 'By the Grace of the Gods', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GP5HJ85ED/by-the-grace-of-the-gods', genre: 'Isekai', season: '2 Seasons' },
            { src: 'Feature/assassincard.png', video: 'https://www.youtube.com/embed/2Poci60rWzg', title: 'The Worlds Finest...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GMEHME55K/the-worlds-finest-assassin-gets-reincarnated-in-another-world-as-an-aristocrat', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/cheatcard.png', video: 'https://www.youtube.com/embed/NH_lYSh38N8', title: 'Isekai Cheat...', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY79GJX1R/isekai-cheat-magician', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/ascendancecard.png', video: 'https://www.youtube.com/embed/Wo28IopG2WE', title: 'Ascendance of a Bookworm', episode: '36 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6793XKZY/ascendance-of-a-bookworm', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/deathcard.png', video: 'https://www.youtube.com/embed/L4VW38PLuOc', title: 'Death March to...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6K50XJ7Y/death-march-to-the-parallel-world-rhapsody', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/wisecard.png', video: 'https://www.youtube.com/embed/gy-78Y-chds', title: 'Wise Mans Grandchild', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G63K95846/wise-mans-grandchild', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/seireicard.png', video: 'https://www.youtube.com/embed/KS7dinNk_z4', title: 'Seirei Gensouki', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G0XHWM380/seirei-gensouki-spirit-chronicles', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/grimgarcard.png', video: 'https://www.youtube.com/embed/aR0UcWq_JrY', title: 'Grimgar, Ashes and Illusions', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRVNX917Y/grimgar-ashes-and-illusions', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/ambitioncard.png', video: 'https://www.youtube.com/embed/_Q-qoxLfk48', title: 'The Ambition...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6JQK7D5R/the-ambition-of-oda-nobuna', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/conceptioncard.png', video: 'https://www.youtube.com/embed/8jUGg1yjmLU', title: 'Conception', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR1XQ92VR/conception', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/mastercard.png', video: 'https://www.youtube.com/embed/mVd2HX5oVRk', title: 'The Master of Ragnarok...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6NVQ59XY/the-master-of-ragnarok--blesser-of-einherjar', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/highcard.png', video: 'https://www.youtube.com/embed/QSFXJzpEpqs', title: 'High School Prodigies...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYXJKGDN6/high-school-prodigies-have-it-easy-even-in-another-world', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/sweetcard.png', video: 'https://www.youtube.com/embed/uPYEALVBhI8', title: 'Sweet Reincarnation', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GJ0H7QG2G/sweet-reincarnation', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/reincarnationcard.png', video: 'https://www.youtube.com/embed/NNrCwPAj1IY', title: 'The Reincarnation of...', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJVWXG/the-reincarnation-of-the-strongest-exorcist-in-another-world', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/didntcard.png', video: 'https://www.youtube.com/embed/39XpskL3jic', title: 'Didnt I Say to...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G679305JY/didnt-i-say-to-make-my-abilities-average-in-the-next-life', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/irumacard.png', video: 'https://www.youtube.com/embed/kkeuJt0DE7g', title: 'Welcome to Demon...', episode: '65 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3W2PK/chillin-in-another-world-with-level-2-super-cheat-powers', genre: 'Isekai', season: '3 Seasons' },
            { src: 'Feature/chillincard.png', video: 'https://www.youtube.com/embed/IwxaZRkXdps', title: 'Chillin in Another...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3W2PK/chillin-in-another-world-with-level-2-super-cheat-powers', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/skeletoncard.png', video: 'https://www.youtube.com/embed/dPzd8VNbQQI', title: 'Skeleton Knight...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G8DHV7WJP/skeleton-knight-in-another-world', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/drugcard.png', video: 'https://www.youtube.com/embed/reOfMXg3kqs', title: 'Drug Store in...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZEN80/drug-store-in-another-world---the-slow-life-of-a-cheat-pharmacist', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/endridecard.png', video: 'https://www.youtube.com/embed/4yzMnwxt3yQ', title: 'Endride', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G649D0KPY/endride', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/campfirecard.png', video: 'https://www.youtube.com/embed/JaxjIDezSBQ', title: 'Campfire Cooking in...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5X3EE/campfire-cooking-in-another-world-with-my-absurd-skill', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/saintcard.png', video: 'https://www.youtube.com/embed/JwsnFH4XRsU', title: 'The Saints Magic...', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJV3P3/the-saints-magic-power-is-omnipotent', genre: 'Isekai', season: '2 Seasons' },
            { src: 'Feature/meijicard.png', video: 'https://www.youtube.com/embed/F1LDCFKTbqU', title: 'Meiji Tokyo Renka', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR4PD7WQY/meiji-tokyo-renka', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/collectioncard.png', video: 'https://www.youtube.com/embed/kUcgIqI0_kE', title: 'Sengoku Collection', episode: '26 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR3VW7XM6/sengoku-collection-parallel-world-samurai', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/sengokucard.png', video: 'https://www.youtube.com/embed/fAYhdawxFwc', title: 'SENGOKU NIGHT BLOOD', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G65VGXVQ6/sengoku-night-blood', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/problemcard.png', video: 'https://www.youtube.com/embed/qQpOcHsMUnA', title: 'Problem Children...', episode: '10 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6Q49G21R/problem-children-are-coming-from-another-world-arent-they', genre: 'Isekai', season: '1 Seasons' },
            { src: 'Feature/tobecard.png', video: 'https://www.youtube.com/embed/z2WARBz4QXc', title: 'To Be Heroine', episode: '7 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G63KVV3E6/to-be-heroine', genre: 'Isekai', season: '1 Seasons' },
            //Isekai
            //Romance
            { src: 'Feature/dukecard.png', video: 'https://www.youtube.com/embed/55T_YNvgBbE', title: 'The Duke of Death', episode: '36 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G79H23V0G/the-duke-of-death-and-his-maid', genre: 'Romance', season: '3 Seasons' },
            { src: 'Feature/asigncard.png', video: 'https://www.youtube.com/embed/v50CI8LVwEY', title: 'A Sign of Affection', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3W2V7/a-sign-of-affection', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/dressupcard.png', video: 'https://www.youtube.com/embed/8oveGY6h6T8', title: 'My Dress-Up Darling', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GQWH0M9N8/my-dress-up-darling', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/nagatorocard.png', video: 'https://www.youtube.com/embed/6dVQ93xBYUg', title: 'NAGATORO', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GQWH0M455/dont-toy-with-me-miss-nagatoro', genre: 'Romance', season: '2 Seasons' },
            { src: 'Feature/tonikawacard.png', video: 'https://www.youtube.com/embed/97wksuHdnF4', title: 'TONIKAWA', episode: '31 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRWMGGQ86/tonikawa-over-the-moon-for-you', genre: 'Romance', season: '3 Seasons' },
            { src: 'Feature/girlfriendcard.png', video: 'https://www.youtube.com/embed/1foV8Fh0WRc', title: 'Girlfriend Girlfriend', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3WP97/girlfriend-girlfriend', genre: 'Romance', season: '2 Seasons' },
            { src: 'Feature/cuckooscard.png', video: 'https://www.youtube.com/embed/4dhHnE_Jsbo', title: 'A Couple of Cuckoos', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM39MP/a-couple-of-cuckoos', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/quintupletscard.png', video: 'https://www.youtube.com/embed/ILDps6CfIwI', title: 'Quintessential Quintuplets', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY4PD7Z06/the-quintessential-quintuplets', genre: 'Romance', season: '2 Seasons' },
            { src: 'Feature/morethancard.png', video: 'https://www.youtube.com/embed/rL60dbSWgtE', title: 'More than a Married Couple', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GJ0H7Q5N3/more-than-a-married-couple-but-not-lovers', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/bunnygirlcard.png', video: 'https://www.youtube.com/embed/tGJTrM9RphQ', title: 'Bunny Girl Senpai', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYW4MG9G6/rascal-does-not-dream-of-bunny-girl-senpai', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/loveaftercard.png', video: 'https://www.youtube.com/embed/t_LOPSpeYvE', title: 'Love After World Domination', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3WG78/love-after-world-domination', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/masamunecard.png', video: 'https://www.youtube.com/embed/dJSjZnKDbHk', title: 'Masamune-kuns Revenge', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYX02P3MR/masamune-kuns-revenge', genre: 'Romance', season: '2 Seasons' },
            { src: 'Feature/mylittlecard.png', video: 'https://www.youtube.com/embed/SlD-8h96pDw', title: 'My Little Monster', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6MG8P1W6/my-little-monster', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/worldgodcard.png', video: 'https://www.youtube.com/embed/OdBmj4TWqzk', title: 'The World God Only Knows', episode: '36 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR9PV5MD6/the-world-god-only-knows', genre: 'Romance', season: '3 Seasons' },
            { src: 'Feature/yamadakuncard.png', video: 'https://www.youtube.com/embed/iwyufFdfO80', title: 'Yamada-kun', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G63VMKVQY/yamada-kun-and-the-seven-witches', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/horimiyacard.png', video: 'https://www.youtube.com/embed/e4RCugyx5No', title: 'Horimiya', episode: '26 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G9VHN9P43/horimiya', genre: 'Romance', season: '2 Seasons' },
            { src: 'Feature/timeloopcard.png', video: 'https://www.youtube.com/embed/aPSmBt6GeqA', title: '7th Time Loop', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G4PH0WJGQ/7th-time-loop-the-villainess-enjoys-a-carefree-life-married-to-her-worst-enemy', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/theangelcard.png', video: 'https://www.youtube.com/embed/twfLsWdXcZI', title: 'The Angel Next Door', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G9VHN91DJ/the-angel-next-door-spoils-me-rotten', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/shikimoricard.png', video: 'https://www.youtube.com/embed/utyXdk4G0-w', title: 'Shikimori\'s Not Just a Cutie', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN7M4/shikimoris-not-just-a-cutie', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/villainesscard.png', video: 'https://www.youtube.com/embed/5cfNLZqPBiM', title: 'I\'m the Villainess...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5X0JK/im-the-villainess-so-im-taming-the-final-boss', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/orangecard.png', video: 'https://www.youtube.com/embed/G9CzaN3WyKs', title: 'Orange', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRVNXW75Y/orange', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/stepmomcard.png', video: 'https://www.youtube.com/embed/W4C2ye5mK9g', title: 'My Stepmom\'s...', episode: '26 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G0XHWM44M/my-stepmoms-daughter-is-my-ex', genre: 'Romance', season: '2 Seasons' },
            { src: 'Feature/sciencecard.png', video: 'https://www.youtube.com/embed/4vJ33PVcsMM', title: 'Science Fell in Love...', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6P5MMXV6/science-fell-in-love-so-i-tried-to-prove-it', genre: 'Romance', season: '2 Seasons' },
            { src: 'Feature/ourdatingcard.png', video: 'https://www.youtube.com/embed/5Z824-bOhZA', title: 'Our Dating Story...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G5PHNM9G5/our-dating-story-the-experienced-you-and-the-inexperienced-me', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/lv999card.png', video: 'https://www.youtube.com/embed/Mk8gEBzunD8', title: 'My Love Story...', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKNPQ7/my-love-story-with-yamada-kun-at-lv999', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/100card.png', video: 'https://www.youtube.com/embed/ls2VNcSifi4', title: 'The 100 Girlfriends...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN933/the-100-girlfriends-who-really-really-really-really-really-love-you', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/mywifecard.png', video: 'https://www.youtube.com/embed/slxnDYn0dPY', title: 'My Wife is the...', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYP8XN95Y/my-wife-is-the-student-council-president', genre: 'Romance', season: '2 Seasons' },
            { src: 'Feature/aharencard.png', video: 'https://www.youtube.com/embed/Rd4usifUuEY', title: 'Aharen-san wa Hakarenai', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN72N/aharen-san-wa-hakarenai', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/kisshimcard.png', video: 'https://www.youtube.com/embed/d6Eh-y9BnUg', title: 'Kiss Him, Not Me', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G65VXM1P6/kiss-him-not-me', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/bokubencard.png', video: 'https://www.youtube.com/embed/qFSK5XI7QyM', title: 'BOKUBEN: We Never Learn', episode: '26 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR8DN8XDR/we-never-learn-bokuben', genre: 'Romance', season: '2 Seasons' },
            { src: 'Feature/mylovecard.png', video: 'https://www.youtube.com/embed/GdB0LsAceGE', title: 'MY love STORY!!', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6MGPGZ86/my-love--story', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/tsuredurecard.png', video: 'https://www.youtube.com/embed/VUCFNbrVtiM', title: 'Tsuredure Children', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY2P9PZPY/tsuredure-children', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/annoyingcard.png', video: 'https://www.youtube.com/embed/TxDxGA4i758', title: 'My Senpai Is Annoying', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GP5HJ815K/my-senpai-is-annoying', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/domesticcard.png', video: 'https://www.youtube.com/embed/A8dh2392QsQ', title: 'Domestic Girlfriend', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G679D84KY/domestic-girlfriend', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/kaguyacard.png', video: 'https://www.youtube.com/embed/S6p_PjK7naQ', title: 'Love Is War', episode: '41 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRJ0J828Y/kaguya-sama-love-is-war', genre: 'Romance', season: '3 Seasons' },
            { src: 'Feature/galcard.png', video: 'https://www.youtube.com/embed/LexsadMYp5A?start=11', title: 'My First Girlfriend Is a Gal', episode: '10 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G675N15MR/my-first-girlfriend-is-a-gal', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/tyrantcard.png', video: 'https://www.youtube.com/embed/7lVHNZK6Fn4', title: 'Love Tyrant', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6NQ59GG6/love-tyrant', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/hensukicard.png', video: 'https://www.youtube.com/embed/a1BxLBr_O88', title: 'Hensuki', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GQWH0MX4W/hensuki---are-you-willing-to-fall-in-love-with-a-pervert-as-long-as-shes-a-cutie', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/engagecard.png', video: 'https://www.youtube.com/embed/Qsauwn7RnS4', title: 'Engage Kiss', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GJ0H7Q8J0/engage-kiss', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/remakecard.png', video: 'https://www.youtube.com/embed/cFAx8fMWqpM', title: 'Remake Our Life!', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GKEH2GZX9/remake-our-life', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/oresukicard.png', video: 'https://www.youtube.com/embed/Pt3MqwiSyKY', title: 'ORESUKI', episode: '15 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY8DP4JDY/oresuki-are-you-the-only-one-who-loves-me', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/cocktailcard.png', video: 'https://www.youtube.com/embed/vvMNeq4AW1k', title: 'Love is Like a Cocktail', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6P8QX856/love-is-like-a-cocktail', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/rokudocard.png', video: 'https://www.youtube.com/embed/pGJOnJRpAIo', title: 'Rokudo\'s Bad Girls', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GW4HM75QW/rokudos-bad-girls', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/karakaicard.png', video: 'https://www.youtube.com/embed/jfckVPkj-Ok', title: 'KARAKAI JOZU...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6X0P133Y/karakai-jozu-no-takagi-san', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/dagashicard.png', video: 'https://www.youtube.com/embed/NK82zttzfh8', title: 'Dagashi Kashi', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYDQN15K6/dagashi-kashi', genre: 'Romance', season: '2 Seasons' },
            { src: 'Feature/arakawacard.png', video: 'https://www.youtube.com/embed/sqeoy8k6sco', title: 'Arakawa Under the Bridge', episode: '26 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRP8PGDWR/arakawa-under-the-bridge', genre: 'Romance', season: '2 Seasons' },
            { src: 'Feature/asteroidcard.png', video: 'https://www.youtube.com/embed/ogIQ3d1w8Rs', title: 'Asteroid in Love', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRMEJX3VY/asteroid-in-love', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/netsuzoucard.png', video: 'https://www.youtube.com/embed/E6y5q55Q2rU', title: 'Netsuzou Trap -NTR-', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G609E9EW6/netsuzou-trap--ntr-', genre: 'Romance', season: '1 Seasons' },
            { src: 'Feature/chihayafurucard.png', video: 'https://www.youtube.com/embed/yEflqf1U9lA', title: 'Chihayafuru', episode: '26 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYGG57V3Y/chihayafuru', genre: 'Romance', season: '2 Seasons' },
            { src: 'Feature/galaxycard.png', video: 'https://www.youtube.com/embed/Y4fOhmP1050', title: 'A Galaxy Next Door', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM3PZW/a-galaxy-next-door', genre: 'Romance', season: '1 Seasons' },      
            //Romance
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
            //Adventure
            { src: 'Feature/fairytailcard.png', video: 'https://www.youtube.com/embed/mAAKPx-ndAg', title: 'Fairy Tail', episode: '328 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6DQDD3WR/fairy-tail', genre: 'Adventure', season: '3 Seasons' },
            { src: 'Feature/drstonecard.png', video: 'https://www.youtube.com/embed/S6OmSIxSj14', title: 'Dr. Stone', episode: '35 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYEXQKJG6/dr-stone', genre: 'Adventure', season: '4 Seasons' },
            { src: 'Feature/frierencard.png', video: 'https://www.youtube.com/embed/pqUZaKn7flw', title: 'Frieren', episode: '28 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XQX4/frieren-beyond-journeys-end', genre: 'Adventure', season: '1 Seasons' },
            { src: 'Feature/yuyucard.png', video: 'https://www.youtube.com/embed/bGc1Na8mlw0', title: 'Yuyu Hakusho', episode: '112 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR9PKENW6/yu-yu-hakusho', genre: 'Adventure', season: '3 Seasons' },
            { src: 'Feature/fullmetalcard.png', video: 'https://www.youtube.com/embed/kx0nBaS_q50', title: 'Full Metal Alchemist', episode: '94 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRGGPG93R/fullmetal-alchemist-brotherhood', genre: 'Adventure', season: '1 Seasons' },
            { src: 'Feature/goldenkamuycard.png', video: 'https://www.youtube.com/embed/Qqy7MCK4GeI', title: 'Golden Kamuy', episode: '49 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY8DWQN5Y/golden-kamuy', genre: 'Adventure', season: '1 Seasons' },
            { src: 'Feature/goldenwindcard.png', video: 'https://www.youtube.com/embed/Ubve8INYEws', title: 'Golden Wind', episode: '158 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYP8DP1MY/jojos-bizarre-adventure', genre: 'Adventure', season: '6 Seasons' },
            { src: 'Feature/hxhcard.png', video: 'https://www.youtube.com/embed/d6kBeJjTGnY', title: 'Hunter X Hunter', episode: '148 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY3VKX1MR/hunter-x-hunter', genre: 'Adventure', season: '1 Seasons' },
            { src: 'Feature/somalicard.png', video: 'https://www.youtube.com/embed/Xfw57amXb8Q', title: 'Somali', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G60X5KMPR/somali-and-the-forest-spirit', genre: 'Adventure', season: '1 Seasons' },
            { src: 'Feature/onepiececard.png', video: 'https://www.youtube.com/embed/TbHtbzAnZJ4', title: 'One Piece', episode: '1,110 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece', genre: 'Adventure', season: '25 Seasons' },
            { src: 'Feature/marksmancard.png', video: 'https://www.youtube.com/embed/u6Pm0tDeGQQ', title: 'Lord Marksman', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYWEZN1NY/lord-marksman-and-vanadis', genre: 'Adventure', season: '1 Seasons' },
            { src: 'Feature/chroniclecard.png', video: 'https://www.youtube.com/embed/wcwHx5NTJFo', title: 'Chain Chronicle', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY8VQJM0Y/chain-chronicle---the-light-of-haecceitas', genre: 'Adventure', season: '2 Seasons' },
            { src: 'Feature/mydaughtercard.png', video: 'https://www.youtube.com/embed/hnhdx8TQ4UU', title: 'My Daughter Left', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G5PHNM9M5/my-daughter-left-the-nest-and-returned-an-s-rank-adventurer', genre: 'Adventure', season: '1 Seasons' },
            { src: 'Feature/stabbercard.png', video: 'https://www.youtube.com/embed/1m9S8wQ3SlE', title: 'Sorcerous Stabber Orphen', episode: '49 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GJ0H7QXDW/sorcerous-stabber-orphen', genre: 'Adventure', season: '1 Seasons' },
            { src: 'Feature/magicard.png', video: 'https://www.youtube.com/embed/2E7o26G1T0c', title: 'Magi', episode: '50 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY09XN14Y/magi', genre: 'Adventure', season: '2 Seasons' },
            { src: 'Feature/borutocard.png', video: 'https://www.youtube.com/embed/nQeIObeB--8', title: 'BORUTO: NEXT GENERATIONS', episode: '293 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR75Q020Y/boruto-naruto-next-generations', genre: 'Adventure', season: '1 Seasons'  },
            { src: 'Feature/undeadcard.png', video: 'https://www.youtube.com/embed/iaYgDqydDoI', title: 'The Unwanted Undead Featurer', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GW4HM7WZQ/the-unwanted-undead-adventurer', genre: 'Adventure', season: '1 Seasons'  },
            { src: 'Feature/twincard.png', video: 'https://www.youtube.com/embed/Kt7a6ms1LmA', title: 'Twin Star Exorcists', episode: '50 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G63VM084Y/twin-star-exorcists', genre: 'Adventure', season: '1 Seasons'  },
            { src: 'Feature/narutooldcard.png', video: 'https://www.youtube.com/embed/-G9BqkgZXRA', title: 'Naruto', episode: '220 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY9PJ5KWR/naruto', genre: 'Adventure', season: '9 Seasons'  },
            { src: 'Feature/demonkingcard.png', video: 'https://www.youtube.com/embed/9qJyDlZst8c', title: 'The Misfit of Demon King Academy', episode: '36 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY243NN0R/the-misfit-of-demon-king-academy', genre: 'Adventure', season: '2 Seasons' },
            { src: 'Feature/togcard.png', video: 'https://www.youtube.com/embed/RNyClma6awo', title: 'Tower of God', episode: '14 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6J0G49DR/tower-of-god', genre: 'Adventure', season: '2 Seasons'  },
            { src: 'Feature/goblincard.png', video: 'https://www.youtube.com/embed/7qnhoB_cHSg', title: 'GOBLIN SLAYER', episode: '26 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6VDMN306/goblin-slayer', genre: 'Adventure', season: '3 Seasons'  },
            { src: 'Feature/ancientcard.png', video: 'https://www.youtube.com/embed/bNNaZdtGZVc', title: 'The Ancient Magus\'Bride', episode: '54 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRZXQJJ8Y/the-ancient-magus-bride', genre: 'Adventure', season: '4 Seasons'  },
            { src: 'Feature/triguncard.png', video: 'https://www.youtube.com/embed/AzZYXqUdp5o', title: 'Trigun Stampede', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GXJHM3PK5/trigun-stampede', genre: 'Adventure', season: '2 Seasons'  },
            { src: 'Feature/orientcard.png', video: 'https://www.youtube.com/embed/L4W_Eo6HU30', title: 'Orient', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GVDHX8PMM/orient', genre: 'Adventure', season: '1 Seasons'  },
            { src: 'Feature/shinobicard.png', video: 'https://www.youtube.com/embed/URyzSJM-_HE', title: 'Shinobi no Ittoki', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G5PHNM7KG/shinobi-no-ittoki', genre: 'Adventure', season: '1 Seasons'  },
            { src: 'Feature/digimoncard.png', video: 'https://www.youtube.com/embed/fmfR2nR_RRY', title: 'Digimon Feature', episode: '67 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYEX24PV6/digimon-adventure-2020', genre: 'Adventure', season: '1 Seasons'  },
            { src: 'Feature/questcard.png', video: 'https://www.youtube.com/embed/RrwbuwhIwbA', title: 'Dragon Quest', episode: '101 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYXM79M56/dragon-quest-the-adventure', genre: 'Adventure', season: '1 Seasons'  },
            { src: 'Feature/torikocard.png', video: 'https://www.youtube.com/embed/YZNDrITMpbw', title: 'Toriko', episode: '146 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRE5MNM06/toriko', genre: 'Adventure', season: '1 Seasons' },
            { src: 'Feature/radiantcard.png', video: 'https://www.youtube.com/embed/qZwtUu3p1zg', title: 'RADIANT', episode: '42 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6W4MEZ0R/radiant', genre: 'Adventure', season: '2 Seasons' },
            { src: 'Feature/sabikuicard.png', video: 'https://www.youtube.com/embed/1k7o4ywm6Is', title: 'SABIKUI BISCO', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G79H23V24/sabikui-bisco', genre: 'Adventure', season: '1 Seasons' },
            { src: 'Feature/edencard.png', video: 'https://www.youtube.com/embed/1Ykbdi94frI', title: 'EDENS ZERO', episode: '26 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G79H23XJJ/edens-zero', genre: 'Adventure', season: '2 Seasons' },
            { src: 'Feature/idatencard.png', video: 'https://www.youtube.com/embed/q3GbjO2NXFw', title: 'Idaten Deities', episode: '11 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G8DHV7DJ7/the-idaten-deities-know', genre: 'Adventure', season: '1 Seasons' },
            { src: 'Feature/fenacard.png', video: 'https://www.youtube.com/embed/QTtXMqgZRpg', title: 'Fena: Pirate Princess', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GZJH3DPM1/fena-pirate-princess', genre: 'Adventure', season: '1 Seasons' },
            { src: 'Feature/jormungandcard.png', video: 'https://www.youtube.com/embed/jubovSaFDec', title: 'Jormungand', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRMGWEM3R/jormungand', genre: 'Adventure', season: '1 Seasons' },
            { src: 'Feature/revengercard.png', video: 'https://www.youtube.com/embed/8mNZABPDT-A', title: 'Revenger', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G8DHV7425/revenger', genre: 'Adventure', season: '1 Seasons' },
            { src: 'Feature/sakugancard.png', video: 'https://www.youtube.com/embed/YBZCuDWjA9A', title: 'SAKUGAN', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GP5HJ800Z/sakugan', genre: 'Adventure', season: '1 Seasons' },
            { src: 'Feature/slimecard.png', video: 'https://www.youtube.com/embed/uOzwqb74K34', title: 'Reincarnated as A Slime', episode: '77 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYZJ43JMR/that-time-i-got-reincar', genre: 'Adventure', season: '6 Seasons' },
            { src: 'Feature/tsukimichicard.png', video: 'https://www.youtube.com/embed/Q7IUIZix_yw', title: 'Tsukimichi', episode: '37 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GZJH3D719/tsukimichi--moonlit-fan', genre: 'Adventure', season: '2 Seasons' },
            { src: 'Feature/mushokucard.png', video: 'https://www.youtube.com/embed/k5VxfJpzy1Q', title: 'Mushoku Tensei', episode: '49 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G24H1N3MP/mushoku-tensei-jobless-', genre: 'Adventure', season: '2 Seasons' },
            { src: 'Feature/shieldherocard.png', video: 'https://www.youtube.com/embed/rKnyi3TRznA', title: 'Shield Hero', episode: '50 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6W4QKX0R/the-rising-of-the-shiel', genre: 'Adventure', season: '3 Seasons' },
            { src: 'Feature/loghorizoncard.png', video: 'https://www.youtube.com/embed/IG1VhJ75r8k', title: 'Log Horizon', episode: '62 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRVNMG93Y/log-horizon', genre: 'Adventure', season: '3 Seasons' },
            { src: 'Feature/saocard.png', video: 'https://www.youtube.com/embed/6ohYYtxfDCg', title: 'Sword Art Online', episode: '107 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR49G9VP6/sword-art-online', genre: 'Adventure', season: '8 Seasons' },
            { src: 'Feature/campcard.png', video: 'https://www.youtube.com/embed/vpH42sJ8t9c', title: 'Laid-Back Camp', episode: '44 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRWEW95KR/laid-back-camp', genre: 'Adventure', season: '5 Seasons' },
            { src: 'Feature/solocard.png', video: 'https://www.youtube.com/embed/bssSj4cKsrI', title: 'Solo Leveling', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZEJ0K/solo-leveling', genre: 'Adventure', season: '1 Seasons' },
            { src: 'Feature/Aotcard.png', video: 'https://www.youtube.com/embed/n4Nj6Y_SNYI', title: 'Attack On Titan', episode: '94 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan', genre: 'Adventure', season: '5 Seasons' },
            { src: 'Feature/shangrilacard.png', video: 'https://www.youtube.com/embed/rsTbPKiGQdo', title: 'Shangri-La Frontier', episode: '25 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G79H23Z8P/shangri-la-frontier', genre: 'Adventure', season: '1 Seasons' },
            { src: 'Feature/vinlandcard.png', video: 'https://www.youtube.com/embed/f8JrZ7Q_p-8', title: 'Vinland Saga', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3WKK0/vinland-saga', genre: 'Adventure', season: '2 Seasons' },
            { src: 'Feature/dragoncard.png', video: 'https://www.youtube.com/embed/2Vej889SS6s', title: 'Dragon Ball Super', episode: '131 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR19V7816/dragon-ball-super', genre: 'Adventure', season: '1 Seasons'  },
            { src: 'Feature/bluecard.png', video: 'https://www.youtube.com/embed/hwnpiByHi20', title: 'Blue Exorcist', episode: '49 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G649PJ0JY/blue-exorcist', genre: 'Adventure', season: '3 Seasons'  } ,   
            //Adventure
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
            { src: 'Feature/243card.png', video: 'https://www.youtube.com/embed/5utDbhnMF0s', title: '2.43 Volleyball Team', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJVEZ1/243-seiin-high-school-volleyball', genre: 'Sports', season: '1 Seasons' },
            { src: 'Feature/loveallplaycard.png', video: 'https://www.youtube.com/embed/PMHRDK2qjS4', title: 'Love All Play', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GKEH2G4MW/love-all-play', genre: 'Sports', season: '1 Seasons' },
            { src: 'Feature/burningkabaddicard.png', video: 'https://www.youtube.com/embed/CeUcyCPcDa4', title: 'Burning Kabaddi', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G9VHN9W5J/burning-kabaddi', genre: 'Sports', season: '1 Seasons' },
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
            //Comedy
            { src: 'Feature/bucchigiricard.png', video: 'https://www.youtube.com/embed/Kw6JkejW_Hw', title: 'BUCCHIGIRI?!', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G5PHNM985/bucchigiri', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/buddycard.png', video: 'https://www.youtube.com/embed/Oqxm1mn917g', title: 'Buddy Daddies', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5X3DE/buddy-daddies', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/combatantscard.png', video: 'https://www.youtube.com/embed/-uJdqz-fBl8', title: 'Combatants Will...', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GQWH0M98E/combatants-will-be-dispatched', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/ghostcard.png', video: 'https://www.youtube.com/embed/kOi5SpwDQR4', title: 'Ghost Stories', episode: '20 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6MGP0K46/ghost-stories', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/gintamacard.png', video: 'https://www.youtube.com/embed/Eh43PgDfSxU', title: 'Gintama', episode: '328 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYQ4MKDZ6/gintama', genre: 'Comedy', season: '8 Seasons' },
            { src: 'Feature/grandbluecard.png', video: 'https://www.youtube.com/embed/YILULCpNg9U', title: 'Grand Blue', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR097JN7R/grand-blue', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/gurrencard.png', video: 'https://www.youtube.com/embed/rAQylCHv8Cw', title: 'Gurren Lagann', episode: '27 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR097JN7R/gurren-lagann', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/konosubacard.png', video: 'https://www.youtube.com/embed/N1AO7k2o78g', title: 'Konosuba', episode: '20 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYE5K3GQR/konosuba--gods-blessing-on-this-wonderful-world', genre: 'Comedy', season: '4 Seasons' },
            { src: 'Feature/mashlecard.png', video: 'https://www.youtube.com/embed/_ce5_P1Hj5A', title: 'Mashle', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GDKHZEP8W/mashle-magic-and-muscles', genre: 'Comedy', season: '2 Seasons' },
            { src: 'Feature/mobcard.png', video: 'https://www.youtube.com/embed/nTze7vAdRpM', title: 'Mob Psycho 100', episode: '39 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY190DKQR/mob-psycho-100', genre: 'Comedy', season: '4 Seasons' },
            { src: 'Feature/nichijoucard.png', video: 'https://www.youtube.com/embed/0AEV-8d_vbg', title: 'Nichijou', episode: '26 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR24PVM76/nichijou---my-ordinary-life', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/pickupcard.png', video: 'https://www.youtube.com/embed/Nk23ix2xgTg', title: 'Is It Wrong to Try...', episode: '37 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6DQN9KGR/is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon', genre: 'Comedy', season: '2 Seasons' },
            { src: 'Feature/robocard.png', video: 'https://www.youtube.com/embed/M0X4J1jpApw', title: 'ME & ROBOCO', episode: '20 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GKEH2G031/me--roboco', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/spacedandycard.png', video: 'https://www.youtube.com/embed/S4qW86moTys', title: 'Space Dandy', episode: '26 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G63K4W296/space-dandy', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/spyxfamilycard.png', video: 'https://www.youtube.com/embed/6sosTNRw_uQ', title: 'Spy x Family', episode: '37 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G4PH0WXVJ/spy-x-family', genre: 'Comedy', season: '2 Seasons' },
            { src: 'Feature/butlercard.png', video: 'https://www.youtube.com/embed/S8j5iEklHyI', title: 'Black Butler', episode: '65 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYQ43P3E6/black-butler', genre: 'Comedy', season: '6 Seasons' },
            { src: 'Feature/campcard.png', video: 'https://www.youtube.com/embed/vpH42sJ8t9c', title: 'Laid-Back Camp', episode: '44 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRWEW95KR/laid-back-camp', genre: 'Comedy', season: '5 Seasons' },
            { src: 'Feature/blackclovercard.png', video: 'https://www.youtube.com/embed/vUjAxk1qYzQ', title: 'Black Clover', episode: '171 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRE50KV36/black-clover', genre: 'Comedy', season: '4 Seasons' },
            { src: 'Feature/datecard.png', video: 'https://www.youtube.com/embed/AytCKBRQJu0', title: 'Date A Live', episode: '60 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GZJH3DJ8E/date-a-live', genre: 'Comedy', season: '7 Seasons' },
            { src: 'Feature/kingcard.png', video: 'https://www.youtube.com/embed/fPj-SXsUbcU', title: 'The Daily Life of...', episode: '51 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GZJH3DJ8E/the-daily-life-of-the-immortal-king', genre: 'Comedy', season: '4 Seasons' },
            { src: 'Feature/bluecard.png', video: 'https://www.youtube.com/embed/hwnpiByHi20', title: 'Blue Exorcist', episode: '49 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G649PJ0JY/blue-exorcist', genre: 'Comedy', season: '3 Seasons' },
            { src: 'Feature/fairytailcard.png', video: 'https://www.youtube.com/embed/mAAKPx-ndAg', title: 'Fairy Tail', episode: '329 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6DQDD3WR/fairy-tail', genre: 'Comedy', season: '3 Seasons' },
            { src: 'Feature/drstonecard.png', video: 'https://www.youtube.com/embed/S6OmSIxSj14', title: 'Dr.Stone', episode: '59 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYEXQKJG6/dr-stone', genre: 'Comedy', season: '4 Seasons' },
            { src: 'Feature/hxhcard.png', video: 'https://www.youtube.com/embed/d6kBeJjTGnY', title: 'Hunter x Hunter', episode: '148 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GY3VKX1MR/hunter-x-hunter', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/irumacard.png', video: 'https://www.youtube.com/embed/kkeuJt0DE7g', title: 'Iruma-kun', episode: '65 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6NVG970Y/welcome-to-demon-school-iruma-kun', genre: 'Comedy', season: '3 Seasons' },
            { src: 'Feature/clericcard.png', video: 'https://www.youtube.com/embed/susqUMviH_E', title: 'The Great Cleric', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GG5H5XQ24/the-great-cleric', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/toradoracard.png', video: 'https://www.youtube.com/embed/ya570uUgQNc', title: 'Toradora!', episode: '25 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6P8PXJW6/toradora', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/zombiecard.png', video: 'https://www.youtube.com/embed/O3VO4zinUOI', title: 'Zombie Land Saga', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRJ0K7X5Y/zombie-land-saga', genre: 'Comedy', season: '2 Seasons' },
            { src: 'Feature/mylittlecard.png', video: 'https://www.youtube.com/embed/SlD-8h96pDw', title: 'My little Monster', episode: '13 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6MG8P1W6/my-little-monster', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/kamikatsucard.png', video: 'https://www.youtube.com/embed/MD_q7xYb-Xs', title: 'KamiKatsu', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKNP4J/kamikatsu-working-', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/attorneycard.png', video: 'https://www.youtube.com/embed/O-tfGuZShKQ', title: 'Ace Attorney', episode: '47 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYE5K0XVR/ace-attorney', genre: 'Comedy', season: '2 Seasons' },
            { src: 'Feature/aharencard.png', video: 'https://www.youtube.com/embed/F7bGTibgcjM', title: 'Aharen-san', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GNVHKN72N/aharen-san-wa-haka', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/cellcard.png', video: 'https://www.youtube.com/embed/HMXWvvjAJek', title: 'Cells at Work!', episode: '22 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR3KVPQER/cells-at-work', genre: 'Comedy', season: '2 Seasons' },
            { src: 'Feature/tsugumomocard.png', video: 'https://www.youtube.com/embed/ptCRrKccB0E', title: 'Tsugumomo', episode: '25 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G675QE8JR/tsugumomo', genre: 'Comedy', season: '3 Seasons' },
            { src: 'Feature/blackcard.png', video: 'https://www.youtube.com/embed/x39JYXYmQ90', title: 'The Dungeon of Black Company', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GP5HJ85WM/the-dungeon-of-black', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/tyrantcard.png', video: 'https://www.youtube.com/embed/ixAK3zJpbwE', title: 'Love Tyrant', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6NQ59GG6/love-tyrant', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/hinamatsuricard.png', video: 'https://www.youtube.com/embed/1oTxGJcx04Q', title: 'Hinamatsuri', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR79PWJ16/hinamatsuri', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/beelzebubcard.png', video: 'https://www.youtube.com/embed/5lyYR7StfrQ', title: 'Beelzebub', episode: '60 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6GG5KQ86/beelzebub', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/tiscard.png', video: 'https://www.youtube.com/embed/--EXveSl_0k', title: 'Tis Time for Torture, Princess', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G1XHJV0KV/tis-time-for-torture', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/desertcard.png', video: 'https://www.youtube.com/embed/XMCqw1vxMnY', title: 'Desert Punk', episode: '24 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR9P7MP06/desert-punk', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/bakemonogataricard.png', video: 'https://www.youtube.com/embed/PugZi9QKL64', title: 'Bakemonogatari', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G69PXP1EY/bakemonogatari', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/osomatsucard.png', video: 'https://www.youtube.com/embed/_imsKXx0Stk', title: 'Mr. Osomatsu', episode: '84 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GYQ4Q3DP6/mr-osomatsu', genre: 'Comedy', season: '4 Seasons' },
            { src: 'Feature/highschoolcard.png', video: 'https://www.youtube.com/embed/BsQj0RYzW98', title: 'Daily Lives of High School Boys', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6X0K0N7Y/daily-lives-of-high', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/mierukocard.png', video: 'https://www.youtube.com/embed/oW2dO_T-9jA', title: 'Mieruko-chan', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GEXH3WK52/mieruko-chan', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/hiddencard.png', video: 'https://www.youtube.com/embed/LAuF6RZYTc0', title: 'The Hidden Dungeon Only I Can Enter', episode: '12 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G3KHEV5QQ/the-hidden-dungeon', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/tonikawacard.png', video: 'https://www.youtube.com/embed/3M7w-ROU62U', title: 'Tonikawa: Over the Moon for You', episode: '31 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRWMGGQ86/tonikawa-over-the-', genre: 'Comedy', season: '3 Seasons' },
            { src: 'Feature/godofhighschoolcard.png', video: 'https://www.youtube.com/embed/oqjwUfprNAk', title: 'The God of High School', episode: '14 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GRVD0ZDQR/the-god-of-high-sc', genre: 'Comedy', season: '1 Seasons' },
            { src: 'Feature/dragoncard.png', video: 'https://www.youtube.com/embed/okBHQWnYImg', title: 'Miss Kobayashi\'s Dragon Maid', episode: '43 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6497Z43Y/miss-kobayashis-dr', genre: 'Comedy', season: '3 Seasons' },
            { src: 'Feature/bungocard.png', video: 'https://www.youtube.com/embed/pYDv2ZR25GE', title: 'Bungo Stray Dogs', episode: '62 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/GR5VXQ8PR/bungo-stray-dogs', genre: 'Comedy', season: '6 Seasons' },
            { src: 'Feature/fruitsbasketcard.png', video: 'https://www.youtube.com/embed/g5MDFMukmUI', title: 'Fruits Basket', episode: '64 Episodes', rollcrunchyrollLink: 'https://www.crunchyroll.com/series/G6ZJMGEXY/fruits-basket', genre: 'Comedy', season: '4 Seasons' }
            //Comedy
        ];
    
        let rollCurrentVideoUrl = '';
        let rollCurrentCrunchyrollLink = '';
    
        rollSpan.addEventListener("click", function() {
            const selectedImages = [];
            while (selectedImages.length < 5) {
                const randomIndex = Math.floor(Math.random() * images.length);
                const selectedImage = images[randomIndex];
                if (!selectedImages.includes(selectedImage)) {
                    selectedImages.push(selectedImage);
                }
            }
    
            rollImage.src = selectedImages[0].src;
            rollImage1.src = selectedImages[1].src;
            rollImage2.src = selectedImages[2].src;
            rollImage3.src = selectedImages[3].src;
            rollImage4.src = selectedImages[4].src;
            rollTitle.textContent = selectedImages[0].title;
            rollGenre.textContent = selectedImages[0].genre;
            rollSeason.textContent = selectedImages[0].season;
            rollEpisode.textContent = selectedImages[0].episode;
            rollCrunchyrollButton1.href = selectedImages[0].rollcrunchyrollLink; 
            rollCrunchyrollButton2.href = selectedImages[0].rollcrunchyrollLink;
            popupBox.style.display = "block";
            overlay.style.display = "block";
    
            rollCurrentVideoUrl = selectedImages[0].video;
            rollCurrentCrunchyrollLink = selectedImages[0].rollcrunchyrollLink;
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