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


    // Form without promise
    /*let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        formBootom = document.getElementById('form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'); //создаем див для передачи пользователю сообщения статуса    
        statusMessage.classList.add('status');

    function sendForm(elem){
        elem.addEventListener('submit', function(event) {//вещаем обработчик события именно на форму, а не на кнопку в форме, потому что нам нужно знать когда именно форма отправляется на сервер
            event.preventDefault(); //для того чтобы не обновлялась страница при нажатии на кнопку форму(обновление браузера)
                elem.appendChild(statusMessage);

                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
                
                //for json
                request.setRequestHeader('Content-type', 'application/json; charset=uft-8');
                //end for json
                

                let formData = new FormData(elem); //с помощью объекта формдата получаем все что пользовтаель ответил  в форме

                //for json
                let obj ={};  //создем новый объект в который помещаем данные

                formData.forEach(function(value,key) { //с помощью метода forEach берем все данные из формдаты и помещаем в объект obj
                        obj[key] = value;
                    });
                let json = JSON.stringify(obj); //превращаем в json формат
                request.send(json); // отправляем на сервер
                //end for json
                //request.send(formData); //форм дата - это данные которые ввел пользователь 
                request.onreadystatechange = function(){ //чтобы отлеживать статусы отправлений
                    if(request.readyState<4){
                        statusMessage.innerHTML = message.loading;
                    }else if(request.readyState === 4){
                        if(request.status == 200 && request.status < 300){
                            statusMessage.innerHTML = message.success;
                        }
                        else{
                            console.log(request.status);
                            statusMessage.innerHTML = message.failure;
                        }
                    }
                }

                for (let i=0; i<input.length; i++){
                    input[i].value='';
                }  
        }); 
    }

    sendForm(form);
    sendForm(formBootom);
    */

    //form whis promise part 2
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };
    
    let form = document.querySelector('.main-form'),
        formBootom = document.getElementById('form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'); //создаем див для передачи пользователю сообщения статуса    
        statusMessage.classList.add('status');
    
    function sendForm(elem){
        elem.addEventListener('submit', function(event) {//вещаем обработчик события именно на форму, а не на кнопку в форме, потому что нам нужно знать когда именно форма отправляется на сервер
            event.preventDefault(); //для того чтобы не обновлялась страница при нажатии на кнопку форму(обновление браузера)
            elem.appendChild(statusMessage);
    
            let formData = new FormData(elem); //с помощью объекта формдата получаем все что пользовтаель ответил  в форме
    
            
                function postData(data){
                    return new Promise(function(resolve,reject){
                        let request = new XMLHttpRequest();
                        request.open('POST', 'server.php');
                        //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
                        
                        //for json
                        request.setRequestHeader('Content-type', 'application/json; charset=uft-8');
                        //end for json
                        request.onreadystatechange = function(){ //чтобы отлеживать статусы отправлений
                            if(request.readyState<4){
                               resolve();
                            }else if(request.readyState === 4){
                                if(request.status == 200 && request.status < 300){
                                    resolve();
                                }
                                else{
                                    reject();
                                }
                            }
                        }
                        //for json
                    let obj ={};  //создем новый объект в который помещаем данные
    
                    data.forEach(function(value,key) { //с помощью метода forEach берем все данные из формдаты и помещаем в объект obj
                            obj[key] = value;
                        });
                    let json = JSON.stringify(obj); //превращаем в json формат
                    request.send(json); // отправляем на сервер
                    //end for json
                    //request.send(formData); //форм дата - это данные которые ввел пользователь 
                    })
                }
                
                function clearInput() {
                    for (let i=0; i<input.length; i++){
                        input[i].value='';
                    }  
                }
            
             
    
            postData(formData)
                .then(() =>  statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput)
        }); 
    }
    
    sendForm(form);
    sendForm(formBootom);
    

    //slider

    let slideIndex = 1,  //переменная для переключения слайдов
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
    
    showSlides(slideIndex);
    
    function showSlides(n){
        if(n > slides.length){  //если номер слайда больше чем количесво слайдов
            slideIndex=1; //если слайды закончились, то мы возвращаемся к самому первому
        }
        if(n < 1){ //если листаем слайд назад, то возвращамся к последнему
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none'); //показываем слайд который нам нужен
        /*for (let i = 0; i < slides.length; i++){
            slides[i].style.display = 'none';
        }*/  //тоже самое что строка выше
        dots.forEach((item) => item.classList.remove('dot-active'));//у всех точек убираем класс activ

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
        }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
    });

    next.addEventListener('click', function(){
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event){
        for (let i=0; i < dots.length +1; i++){
            if(event.target.classList.contains('dot') && event.target == dots[i-1]){
                currentSlide(i);
            }
        }
    });

    //calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum =0,
        daysSum = 0,
        total = 0;
    
    totalValue.innerHTML=0;

    persons.addEventListener('change', function(){
        if(persons.value == ''){
            totalValue.innerHTML=0;
        }else{
            personsSum = +this.value;
            total = (daysSum + personsSum)*4000;

            if(restDays.value == ''){
                totalValue.innerHTML=0;
            }else{
                totalValue.innerHTML = total;
            }
        }
        
        
    });
    restDays.addEventListener('change', function(){
        if(restDays.value == ''){
            totalValue.innerHTML=0;
        }else{
            daysSum = +this.value;
            total = (daysSum + personsSum)*4000;

            if(persons.value == ''){
                totalValue.innerHTML=0;
            }else{
                totalValue.innerHTML = total;
            }
        }
    });

    place.addEventListener('change', function(){
        if(restDays.value == '' || persons.value == ''){
            totalValue.innerHTML=0;
        }else {
            let a = total; //если будут часто выбирать фильтры, и не создавать эту переменную, тогда тотал бы увеличивался постоянно
            totalValue.innerHTML = a * this.options[this.selectedIndex].value; //ччтобы подтягивалось именно текущее значение из value
        }
    });




});