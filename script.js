const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navbar');

menu.addEventListener('click', () =>{
    nav.classList.toggle('active');
})

//dark and light theme

const theme = document.querySelector('.theme-toggle');
const body = document.body;
const themeIcon = document.querySelector('.theme-toggle i');

theme.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if(body.classList.contains('light-mode')){
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    else{
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
})