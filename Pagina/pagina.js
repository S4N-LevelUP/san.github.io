(function(){
    const sliders = [...document.querySelectorAll('.personalidad_cuerpo')];
    const buttonNext = document.querySelector('#siguiente');
    const buttonBefore = document.querySelector('#atras');
    
    let value;

    buttonNext.addEventListener('click', ()=>changePosition(1));
    buttonBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.personalidad_cuerpo--espetaculo').dataset.id);
        
        value = currentElement;
        value += change; //sumando o restando
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length: 1;
        }
        console.log(sliders.length)
        sliders [currentElement-1].classList.toggle('personalidad_cuerpo--espetaculo');
        sliders [value-1].classList.toggle('personalidad_cuerpo--espetaculo');
    }
})()
