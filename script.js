const boxes = document.querySelectorAll('.bottom-boxes > div');
const backgrounds = [
    'Background/blackcloverBack.png',
    'Background/demonslayerBack.png',
    'Background/onepieceBack.png',
    'Background/fireforceBack.png',
    'Background/kaijuno8Back.png'
];
const logo = document.querySelector('.logo');
let currentIndex = 2; // Start with the middle box (index 2)

function updateDisplay() {
    // Show logo only for One Piece
    if (currentIndex === 2) {
        logo.style.display = 'block';
    } else {
        logo.style.display = 'none';
    }

    // Update the background image
    document.body.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
    const container = document.querySelector('.bottom-boxes');
    
    // Remove highlight class from the current middle box
    boxes[currentIndex].classList.remove('highlight');

    // Move the first box to the end
    const firstBox = container.firstElementChild;
    container.appendChild(firstBox);

    // Update the index, keeping the middle box in focus
    currentIndex = (currentIndex + 1) % boxes.length;

    // Add highlight class to the new middle box
    boxes[currentIndex].classList.add('highlight');

    // Update the display
    updateDisplay();
});

// Initialize the highlight for the middle box
boxes[currentIndex].classList.add('highlight');
updateDisplay();
