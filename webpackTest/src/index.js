//window.addEventListener('load')//после того, как все загрузится на страницу, запускать наш скрипт
/*import calc from './js/parts/calc.js';*/
window.addEventListener('DOMContentLoaded', function() {    //запускать скрипт после того, как запустилась структура(DOM)
    'use strict'; //перевести код в режим полного соответствия современному стандарту

    let tabs = require('./js/parts/tabs.js'),
        timer = require('./js/parts/timer.js'),
        modal = require('./js/parts/modal.js'),
        form = require('./js/parts/form.js'),
        calc = require('./js/parts/calc.js'),
        slider = require('./js/parts/slider.js');


    tabs();
    timer();
    modal();
    form();
    slider();
    calc();
    
});