const modeSwitch = document.getElementById('mode-switch');
const image = document.getElementById('image');
const body = document.body;

const lightModeImg = './assets/teacup_light.jpg';
const darkModeImg = './assets/teacup_dark.jpg';

// mode switch button
modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        // if in dark mode icon changes and tea cup image updates to dark mode image
        modeSwitch.textContent = '☕';
            image.src = darkModeImg;
    } else {
        modeSwitch.textContent = '🫖';
            image.src = lightModeImg;
    }
});