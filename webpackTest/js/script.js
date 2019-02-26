//window.addEventListener('load')//после того, как все загрузится на страницу, запускать наш скрипт
window.addEventListener('DOMContentLoaded', function() {    //запускать скрипт после того, как запустилась структура(DOM)
    'use strict'; //перевести код в режим полного соответствия современному стандарту

    let tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js'),
        modal = require('./parts/modal.js'),
        form = require('./parts/form.js'),
        slider = require('./parts/slider.js'),
        calc = require('./parts/calc.js');


    tabs();
    timer();
    modal();
    form();
    slider();
    calc();
});