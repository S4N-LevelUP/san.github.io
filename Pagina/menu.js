(function(){
    const openButton = document.querySelector('.seccion_menu');
    const menu = document.querySelector('.seccion_link');
    const closeMenu = document.querySelector('.seccion_close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('seccion_link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('seccion_link--show');
    });
})()

