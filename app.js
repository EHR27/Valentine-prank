const blueButton = document.getElementById('yes-btn');
const redButton = document.getElementById('no-btn');
let clickCount = 0;

const texts = [
    "Are you sure?",
    "Wanna think again?",
    "I'm asking again.",
    "Don't rush, please think it again",
    "Do you want me to support Masha?",
    "Think about it, you don't open the beer with your teeth",
    "Do you have a tiguere there?"
];

redButton.addEventListener('click', () => {
    if (clickCount < texts.length) {
        redButton.textContent = texts[clickCount];
    }
    clickCount++;

    if (clickCount === 8) {
        redButton.remove();
        blueButton.textContent = "Yes, I do. <3";
    }else{
        const currentSize = window.getComputedStyle(blueButton).getPropertyValue('font-size');
        const newSize = parseFloat(currentSize) * 1.5;
        blueButton.style.fontSize = newSize + 'px';
    }
});

blueButton.addEventListener('click', () => {
    blueButton.innerHTML = "I knew it <3";
    redButton.remove();
    blueButton.style.fontSize = "3em";
})