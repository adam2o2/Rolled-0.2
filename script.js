const boxes = document.querySelectorAll('.bottom-boxes > div');
const backgrounds = [
    'Background/blackcloverBack.png',
    'Background/demonslayerBack.png',
    'Background/onepieceBack.png',
    'Background/fireforceBack.png',
    'Background/kaijuno8Back.png'
];
let currentIndex = 2;

document.getElementById('nextBtn').addEventListener('click', () => {
    const container = document.querySelector('.bottom-boxes');
    const firstBox = container.firstElementChild;

    // Move the first box to the end
    container.appendChild(firstBox);

    // Update the background image
    currentIndex = (currentIndex + 1) % backgrounds.length;
    document.body.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
});
