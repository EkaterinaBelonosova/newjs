let getMenu = document.querySelector('.menu'),
    getpunktMenu= document.querySelectorAll('.menu-item');

    getMenu.insertBefore(getpunktMenu[1],getpunktMenu[3]); //как вариант заменить местами пункты меню

    /*добавление пятого пункта меню*/    
    let div = document.createElement('div');

        div.classList.add('menu-item');
        div.innerHTML="Пятый пункт";  
        getMenu.appendChild(div);    
    /*конец добавление пятого пункта меню*/ 

    /*добавление слова "подлинную"*/  
let addWord = document.getElementById('title');
    addWord.innerHTML = 'Мы продаем только подлинную технику Apple';
    /*добавление слова "подлинную"*/ 

    /*удаление рекламы"*/  
let delAdvertising = document.querySelector('.adv'),
    divcolumn = document.querySelectorAll('.column');
    divcolumn[1].removeChild(delAdvertising);
    /*удаление рекламы"*/  

    /*ответ в промпт"*/  
    let answerApple = prompt('Какое отношение к технике Apple', '');
        divprompt = document.getElementById('prompt');
        divprompt.textContent = answerApple;
    /*ответ в промпт"*/ 

    console.log(divprompt);
    