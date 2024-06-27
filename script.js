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
    // Remove the class 'box-3' from the current box
    boxes[currentIndex].classList.remove('box-3');

    // Update the index
    currentIndex = (currentIndex + 1) % boxes.length;

    // Add the class 'box-3' to the new current box
    boxes[currentIndex].classList.add('box-3');

    // Change the background image
    document.body.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
});
