const modeBtn = document.querySelector('#mode-btn');
const modeText = document.querySelector('#mode-text');
const modeIcon = document.querySelector('#mode-icon');
const body = document.body;
const profileContainer = document.querySelector('.profile-container');
const pinkBgDivs = document.querySelectorAll('.pink-bg');
const grayTexts = document.querySelectorAll('.gray-text');
const country = document.querySelector('.country');
const seeMoreBtn = document.querySelector('.see-more-btn');

let darkMode = false;

modeBtn.addEventListener('click', () => {
    if (darkMode == false) {
        darkModeActions();
        darkMode = true;
    } 
    else {
        lightModeActions();
        darkMode = false;
    }
});


const darkModeActions = () => {
    modeText.innerHTML = 'Light';
    modeText.style.color = '#ffffff';
    modeIcon.src = './images/sun.svg';
    body.style.backgroundColor = '#1d1d1d';
    profileContainer.style.backgroundColor = '#20000a';
    pinkBgDivs.forEach((div) => {
        div.style.backgroundColor = '#360010';
    });
    grayTexts.forEach((text) => {
        text.style.color = '#ffffff';
    });
    country.style.color = '#bcbcbc';
    seeMoreBtn.backgroundColor = '#62021e';
}


function lightModeActions() {
    modeText.innerHTML = 'Dark';
    modeText.style.color = '#000000';
    modeIcon.src = './images/moon.svg';
    body.style.backgroundColor = '#ffffff';
    profileContainer.style.backgroundColor = '#FF8CAF';
    pinkBgDivs.forEach((div) => {
        div.style.backgroundColor = '#DC3A6A';
    });
    grayTexts.forEach((text) => {
        text.style.color = '#383838';
    });
    country.style.color = '#545454';
    seeMoreBtn.backgroundColor = '#A41A43';
}