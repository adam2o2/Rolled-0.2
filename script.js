document.getElementById('nextBtn').addEventListener('click', function() {
    const boxes = document.querySelectorAll('.bottom-boxes > div');
    const parent = boxes[0].parentNode;
    const firstBox = boxes[0];
    
    parent.appendChild(firstBox);
});
