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
    income:[],
    savings:true
};
   
console.log(appData);


function chooseExpenses(){   //расходы
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
}

chooseExpenses();

    

 function detectDayBudget(){ //бюджет на 1 день
    appData.moneyDay = (appData.cost/30).toFixed(); 
    //округляет значение, в скобках указать до какого значения после запятой, но преобразуют в строковую переменную
    alert("Бюджет на 1 день: "+ appData.moneyDay);
 }
 
 detectDayBudget();
 
 function detectLevel (){ //уровень достатка
    if(appData.moneyDay<100){
        console.log("Минимальный уровнь достатка");
    }else if(appData.moneyDay >100 && appData.moneyDay < 2000){
        console.log("Средний уровень достатка");
    }else if(appData.moneyDay > 2000){
        console.log("Высокий уровень достатка");
    }else{
        console.log("Error");
    }
 }
   
 detectLevel();

    

let save,persent;

function checkSavings(){ //есть ли сбережения
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
}   
checkSavings();

let costOpt;
function chooseOptExpenses(){  //необязательные расходы
    for (i=1; i<4; i++){
        costOpt = prompt("Статья необязательных расходов?");
        while(costOpt==null || costOpt == ""){
            costOpt = prompt("Статья необязательных расходов?");
        }
        
        appData.optionalExpenses[i]=costOpt;
    }
}

chooseOptExpenses();