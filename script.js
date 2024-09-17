const nodes = document.querySelectorAll('.node');
let currentIndex = 0;

function showNode(index) {
    nodes.forEach((node, i) => {
        node.classList.toggle('active', i === index);
    });
}

showNode(currentIndex);

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % nodes.length;
    showNode(currentIndex);
});

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + nodes.length) % nodes.length;
    showNode(currentIndex);
});
