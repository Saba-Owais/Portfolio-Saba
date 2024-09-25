let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section =document.querySelectorAll('section');
let navlinks = document = document.querySelectorAll('header nava');

window.onscroll=() =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top <offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+ id +']').classList.add
                ('active')
            })

        }
    })

}


menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const whiteThemeButton = document.getElementById('white-theme');
const blackThemeButton = document.getElementById('black-theme');
const blueThemeButton = document.getElementById('blue-theme');
const greenThemeButton = document.getElementById('green-theme');
const purpleThemeButton = document.getElementById('purple-theme');
const orangeThemeButton = document.getElementById('orange-theme');

whiteThemeButton.addEventListener('click', () => {
    applyTheme('white');
});

blackThemeButton.addEventListener('click', () => {
    applyTheme('black');
});

blueThemeButton.addEventListener('click', () => {
    applyTheme('blue');
});

greenThemeButton.addEventListener('click', () => {
    applyTheme('green');
});

purpleThemeButton.addEventListener('click', () => {
    applyTheme('purple');
});

orangeThemeButton.addEventListener('click', () => {
    applyTheme('orange');
});

function applyTheme(theme) {
    // Remove existing theme classes
    document.body.classList.remove('white', 'black', 'blue', 'green', 'purple', 'orange');
    // Apply the selected theme class
    document.body.classList.add(theme);
    // Save the selected theme preference
    localStorage.setItem('selectedTheme', theme);
}

// Retrieve the selected theme preference from local storage (if available) and apply it
const selectedTheme = localStorage.getItem('selectedTheme');
if (selectedTheme) {
    applyTheme(selectedTheme);
}