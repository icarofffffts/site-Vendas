const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');
const list = document.querySelector('.list');

let active = 0;
const total = items.length;
let timer;

function update(direction) {
    const currentItem = document.querySelector('.item.active');
    const currentDot = document.querySelector('.dot.active');

    if (currentItem) currentItem.classList.remove('active');
    if (currentDot) currentDot.classList.remove('active');

    if (direction > 0) {
        active = active + 1;
        if (active === total) {
            active = 0;
        }
    }
    else if (direction < 0) {
        active = active - 1;
        if (active < 0) {
            active = total - 1;
        }
    }

    items[active].classList.add('active');
    dots[active].classList.add('active');

    if (numberIndicator) {
        numberIndicator.textContent = String(active + 1).padStart(2, '0');
    }
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        update(1);
    }, 5000);
}

resetTimer();

prevButton.addEventListener('click', () => {
    update(-1);
    resetTimer();
});

nextButton.addEventListener('click', () => {
    update(1);
    resetTimer();
});