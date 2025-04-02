let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item'); // Get all items
    let slide = document.querySelector('.slide'); 

    slide.appendChild(items[0]); // Move the first item to the end
});
prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item'); // Get all items
    let slide = document.querySelector('.slide'); 

    slide.prepend(items[items.length-1]); // Move the first item to the end
});
function shuffleCards() {
    let container = document.getElementById("cardContainer");
    let cards = Array.from(container.children);

    cards.sort(() => Math.random() - 0.5);

    container.innerHTML = "";
    cards.forEach(card => container.appendChild(card));
}