//let arr =['plum.png','oran.jpg','apple.bmp'];

//console.log(arr[1]);

//alert("hello");
let money, time;
function start(){
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");


    while(isNaN(money) || money=="" || money == null){ 
        //isNaN проверяет есть ли числовые значения в переменной, не пустали ли, не проставлено ли 0

        money = +prompt("Ваш бюджет на месяц?", "");
    }
    
}

start();

let appData = {
    cost:money,
    timeData:time,
    expenses:[],
    optionalExpenses:{},
    income:[],//доп доход
    savings:true,
    chooseExpenses: function(){  //метод-функция у объекта   //расхода
        for(let i=0; i<2; i++) {
            let vopr1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
            vopr2 = prompt("Во сколько обойдется?", '');
            
            if ( (typeof(vopr1))=== 'string' && (typeof(vopr1)) != null && (typeof(vopr2)) != null &&
             vopr1 != '' && vopr2 !='' && vopr1.length < 50){
                console.log("done");
                appData.expenses[vopr1]=vopr2; //тоже самое appData.expenses.vopr1=vopr2; 
            }else{
            i--;
            }
        }
    },
    detectDayBudget: function(){ //бюджет на 1 день
        appData.moneyDay = (appData.cost/30).toFixed(); 
        //округляет значение, в скобках указать до какого значения после запятой, но преобразуют в строковую переменную
        alert("Бюджет на 1 день: "+ appData.moneyDay);
    },
    detectLevel: function (){ //уровень достатка
        if(appData.moneyDay<100){
            console.log("Минимальный уровнь достатка");
        }else if(appData.moneyDay >100 && appData.moneyDay < 2000){
            console.log("Средний уровень достатка");
        }else if(appData.moneyDay > 2000){
            console.log("Высокий уровень достатка");
        }else{
            console.log("Error");
        }
    },
    checkSavings: function(){ //есть ли сбережения
        let save,persent;
        if(appData.savings==true){
            while(isNaN(save) || save=="" || save == null){ 
                //isNaN проверяет есть ли числовые значения в переменной, не пустали ли, не проставлено ли 0
        
                 save = +prompt("Какова сумма накоплений?");
                 
            }
            while(isNaN(persent) || persent=="" || persent == null){ 
                //isNaN проверяет есть ли числовые значения в переменной, не пустали ли, не проставлено ли 0
        
                persent = +prompt("Под какой процент?");
            }
        
                  appData.monthIncome = save/100/12*persent;
                  alert("Доход в мeсяц с вашего депозита: " + appData.monthIncome);
          }
    },
    chooseOptExpenses: function(){ //необязательные расходы
        let costOpt;
        for (i=1; i<4; i++){
            costOpt = prompt("Статья необязательных расходов?");
            while(costOpt==null || costOpt == ""){
                costOpt = prompt("Статья необязательных расходов?");
            }
            
            appData.optionalExpenses[i]=costOpt;
        }
    },
    chooseIncome: function(){
        let items = prompt("Что принесет дполнительный доход (Перечислите через запятую)","");
        while(items=="" || items == null){
            let items = prompt("Что принесет дполнительный доход (Перечислите через запятую)","");

        }
        appData.income=items.split(', '); //split нужен для того, чтобы считывать строку введенную пользователем и записывать значения в разные блоки массива определяя их разделение зяпятой
        appData.income.push(prompt("Что то еще?"));
        appData.income.sort();
        appData.income.forEach(function (item,i){
            alert(i+1 + ': ' + "Способы доп. заработка: "  + item);
        });
        
    }
};
 
appData.chooseIncome(); // вызов функции из объекта

for(let key in appData){
    console.log("Наша программа включает в себя данные: "+key+appData[key]);

}

console.log(appData);   