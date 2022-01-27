const btn_menu = document.getElementById('button_menu');

const mobile_nav = document.getElementById('mobile_nav');

btn_menu.addEventListener('click', () => {
    mobile_nav.classList.toggle('header__nav_close');
    mobile_nav.classList.toggle('header__nav_open');

})