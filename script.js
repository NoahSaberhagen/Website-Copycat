function toggleMenu(){
    const hiddenMenu = document.querySelector('#hidden-menu');
    const checkMenuClass = hiddenMenu.getAttribute('class');
    const background = document.querySelector('.display');
    const body = document.querySelector('body');

    if (checkMenuClass == 'menu-off'){
        hiddenMenu.setAttribute('class', 'menu-on');
        background.setAttribute('style', 'opacity: 20%');
        body.setAttribute('style', 'background-color: white');
    }
    else {
        hiddenMenu.setAttribute('class', 'menu-off');
        background.setAttribute('style', 'opacity: 100%');
        body.setAttribute('style', 'background-color: #dfb8c0');
    }
}
