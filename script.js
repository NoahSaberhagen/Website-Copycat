function toggleMenu(){
    const hiddenMenu = document.querySelector('#hidden-menu');
    const checkMenuClass = hiddenMenu.getAttribute('class');

    if (checkMenuClass == 'menu-off'){
        hiddenMenu.setAttribute('class', 'menu-on');
    }
    else {
        hiddenMenu.setAttribute('class', 'menu-off');
    }
}
