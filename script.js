// FEATURE SCROLL
const row = document.querySelector('.features');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function scrollAmount() {
    return row.clientWidth * 0.8;   // scroll about one screen of cards at a time
}

prev.addEventListener('click', () => {
    row.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
});

next.addEventListener('click', () => {
    row.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
});

// hide the left arrow at the start and the right arrow at the end
function updateArrows() {
    prev.classList.toggle('hidden', row.scrollLeft <= 0);
    next.classList.toggle('hidden', row.scrollLeft + row.clientWidth >= row.scrollWidth - 1);
}

row.addEventListener('scroll', updateArrows);
window.addEventListener('resize', updateArrows);
updateArrows();

// FAQ CONTENT 
const items = document.querySelectorAll('.content');

    items.forEach(item => {
    item.querySelector('.question').addEventListener('click', () => {
                // close the others (remove this loop if you want several open at once)
    items.forEach(other => {
        if (other !== item) other.classList.remove('active');
                });
            item.classList.toggle('active');
    });
});

// AFTER FOOTER 
const afterText = document.getElementById('after-Text');
const moreBtn = document.getElementById('moreBtn');

moreBtn.addEventListener('click', () => {
    const open = afterText.classList.toggle('expanded');
    moreBtn.textContent = open ? 'FEWER DETAILS' : 'MORE DETAILS';
    moreBtn.setAttribute('aria-expanded', open);
});