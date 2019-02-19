//window.addEventListener('load')//после того, как все загрузится на страницу, запускать наш скрипт
window.addEventListener('DOMContentLoaded', function() {    //запускать скрипт после того, как запустилась структура(DOM)
    'use strict'; //перевести код в режим полного соответствия современному стандарту

    let tab = document.querySelectorAll('.info-header-tab'), // выводим псевдоммассив наших табов(иконок меню)
        info = document.querySelector('.info-header'), //получаем родительский эл наших табов, (див в котором они находятся)
        tabContant = document.querySelectorAll('.info-tabcontent'); //псевдомассив табличек для вывода

    function hideTabContent(a){   //функция скрытия табов(передается номер блока)

        for(let i = a; i < tabContant.length; i++){  //цикл для 
            tabContant[i].classList.remove('show'); //удаление класса show
            tabContant[i].classList.add('hide');  //добавление класса add 
        }
    }

    hideTabContent(1); // при загрузки страницы чтобы всегда отображался на 0 блок про лечение, чтобы цикл скрытие начинался с 1

    function showTabContant(b){  //функция отражение таб блоков 
        if (tabContant[b].classList.contains('hide')) {//проверяем дейстительно ли эл hide скрыт
            tabContant[b].classList.remove('hide');//удаление класса hide
            tabContant[b].classList.add('show');//добавление класса show
    
        }
    }
    info.addEventListener('click' , function(event){ //для родителя, обработчик событий при клики, включается функция, в котрую передается событие 
        let target = event.target;//переменная таргет = это исходный элемент, на котором произошло событие, в процессе всплытия он неизменен

        if (target && target.classList.contains('info-header-tab')) { //если элемент и у нашего эл класс ....
            for( let i=0; i < tab.length; i++){ // i сравнивается с количеством переключателями табов(типа меню)
                if(target == tab[i]){ //если наша цель при нажатии равно табу с номером i
                    hideTabContent(0); //скрывается все элементы 
                    showTabContant(i); //показывается только таб с нужным номером
                    break;
                }
            }
        }
    });


    //Таймер

    let deadline = '2019-02-19';

    function getTimeRemaining(endtime){ //узнаем промежуток времени м/у дедлайн и текущей датой
        let t = Date.parse(endtime) - Date.parse(new Date()), //получение миллисекунд от конечной даты и текущей
            seconds = Math.floor((t/1000) % 60),  // перевод из миллисекунд в секунды
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
            
        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
            
        };

    }
        
    function setClock(id, endtime){ // функция создает различные переменные(берет со страницы)
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
        function updateClock() {  //получает разницу во времени и записываем данные
            let t = getTimeRemaining(endtime);
            if(t.hours<10){
                hours.textContent = '0'+t.hours;             
            }else{
                hours.textContent = t.hours;
            }
            if(t.minute<10){
                minutes.textContent = '0'+ t.minutes;
                
            }else{
                minutes.textContent = t.minutes;
            }
            if(t.seconds<10){
                seconds.textContent = '0'+ t.seconds;
                
            }else{
                seconds.textContent = t.seconds;
            }
            
            

            if(t.total <= 0){
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

            }
        }
    }    

    setClock('timer', deadline);

    //modal window

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
});