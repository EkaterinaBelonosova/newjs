function modalWindow(){
    let more=document.querySelector('.more'),
        desbtn=document.querySelectorAll('.description-btn'),
        overlay = document.querySelector('.overlay'), //модальное окно
        close = document.querySelector('.popup-close');

    more.addEventListener('click' , function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';  //чтобы страница не крутилась
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';

    });
    for(let i=0; i<4; i++){
    desbtn[i].addEventListener('click' , function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';  //чтобы страница не крутилась
    });
    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        desbtn[i].classList.remove('more-splash');
        document.body.style.overflow = '';

    });
    }
    console.log(desbtn);

}

module.exports = modalWindow;