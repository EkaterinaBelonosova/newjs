let startBtn = document.getElementById('start');

let budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];

let expensesItem = document.getElementsByClassName('expenses-item');

let btnRaschet = document.getElementsByTagName('button')[2],
    btnOptionalexpenses = document.getElementsByTagName('button')[1],
    btnExpenses = document.getElementsByTagName('button')[0];

let optionalexpenses = document.querySelectorAll('.data .optionalexpenses-item');

let chooseIncome = document.querySelector('.choose-income'),
    savingsCheckbox = document.querySelector('#savings'), //для id ставим #
    chooseSum = document.querySelector('.choose-sum'),
    choosePersent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
    

console.log(savingsCheckbox);

/*if(appData.activbtn == true){
btnRasch
}else{

}*/

let money, time;

startBtn.addEventListener('click',function(){  //наша кнопка.метод обработчика событий(на каком событии запускать, и функция выполнения)
    
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");


    while(isNaN(money) || money=="" || money == null){ 
        //isNaN проверяет есть ли числовые значения в переменной, не пустали ли, не проставлено ли 0

        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.cost = money;
    appData.timeData = time;

    budgetValue.textContent=money.toFixed();//доход записывае в поле и округляем
    yearValue.value = new Date(Date.parse(time)).getFullYear();// переменная time будет обработанна Date.parse, а именно превратятся в кол-во милли секунд которые прошли с 01.01.1970, и миллисекунды используются для создания новой даты
    monthValue.value = new Date(Date.parse(time)).getMonth()+1; //+1 ставится по причине того, что месяцы могут начинаться с нуля
    dayValue.value = new Date(Date.parse(time)).getDate();
    btnExpenses.disabled = false;
    btnOptionalexpenses.disabled = false;
    btnRaschet.disabled = false;
});

function expMand(){  //расчет обязательных расходов 
    let sum=0;

    for(let i=0; i<expensesItem.length; i++) {
        let vopr1 = expensesItem[i].value, //в переменную vopr1 получится данные, котрые ввел пользоатель
            vopr2 = expensesItem[++i].value; // т.к. наши input идут на странице череидуясь (вопрос-значение), поэтому ++i
        
        if ( (typeof(vopr1))=== 'string' && (typeof(vopr1)) != null && (typeof(vopr2)) != null &&
         vopr1 != '' && vopr2 !='' && vopr1.length < 50){
            console.log("done");
            appData.expenses[vopr1]=vopr2; //тоже самое appData.expenses.vopr1=vopr2; 
            sum += +vopr2;
        }else{
        i--;
        }
        expensesValue.textContent=sum;
        
    }
    return sum;
};

btnExpenses.addEventListener('click', expMand);

btnOptionalexpenses.addEventListener('click', function(){
        for (let i=0; i < optionalexpenses.length; i++){
            let costOpt = optionalexpenses[i].value;           
            appData.optionalExpenses[i]=costOpt;
            optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }

});

btnRaschet.addEventListener('click', function(){
let sumMend = +expMand();
console.log(sumMend);
    if(appData.cost != undefined){       
    
        appData.moneyDay = ((appData.cost-sumMend)/30).toFixed();  //округляет значение, в скобках указать до какого значения после запятой, но преобразуют в строковую переменную
        daybudgetValue.textContent = appData.moneyDay;

        if(appData.moneyDay<100){
            levelValue.textContent="Минимальный уровнь достатка";
        }else if(appData.moneyDay >100 && appData.moneyDay < 2000){
            levelValue.textContent="Средний уровень достатка";
        }else if(appData.moneyDay > 2000){
            levelValue.textContent="Высокий уровень достатка";
        }else{
            levelValue.textContent="Error";
        }
    }else{
        daybudgetValue.textContent = "Error";
    }
});

chooseIncome.addEventListener('input',function(){
    let items = chooseIncome.value;
    appData.income=items.split(', '); //split нужен для того, чтобы считывать строку введенную пользователем и записывать значения в разные блоки массива определяя их разделение зяпятой
    incomeValue.textContent = appData.income;
});

savingsCheckbox.addEventListener('click' ,function(){
    if(appData.savings == false){
        appData.savings = true;
    }else{
        appData.savings = false;
    }
});

chooseSum.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +chooseSum.value,
            persent = +choosePersent.value;
        appData.monthIncome = sum/100/12*persent;
        appData.yearIncome = sum/100*persent;

        monthsavingsValue.textContent=appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent=appData.yearIncome.toFixed(1);
    }
});

choosePersent.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +chooseSum.value,
            persent = +choosePersent.value;
        appData.monthIncome = sum/100/12*persent;
        appData.yearIncome = sum/100*persent;

        monthsavingsValue.textContent=appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent=appData.yearIncome.toFixed(1);
        
    }
});

let appData = {
    cost:money,
    timeData:time,
    expenses:[],
    optionalExpenses:{},
    income:[],//доп доход
    savings: false
    
};
 
//appData.chooseIncome(); // вызов функции из объекта

/*for(let key in appData){
    console.log("Наша программа включает в себя данные: "+key+appData[key]);

}*/

//console.log(appData);   