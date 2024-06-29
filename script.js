const boxes = document.querySelectorAll('.bottom-boxes > div');
const backgrounds = [
    'Background/blackcloverBack.png',
    'Background/demonslayerBack.png',
    'Background/onepieceBack.png',
    'Background/fireforceBack.png',
    'Background/kaijuno8Back.png'
];
let currentIndex = 0; // Initialize the currentIndex to the position of the initial highlighted image

document.getElementById('nextBtn').addEventListener('click', () => {
    const container = document.querySelector('.bottom-boxes');
    
    // Remove highlight class from the current middle box
    boxes[currentIndex].classList.remove('highlight');

    // Move the first box to the end
    const firstBox = container.firstElementChild;
    container.appendChild(firstBox);

    // Update the index
    currentIndex = (currentIndex + 1) % boxes.length;

    // Add highlight class to the new middle box
    boxes[currentIndex].classList.add('highlight');

    // Update the background image
    document.body.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
});

// Initialize the highlight for the middle box
boxes[currentIndex].classList.add('highlight');
