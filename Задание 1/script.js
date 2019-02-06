//let arr =['plum.png','oran.jpg','apple.bmp'];

//console.log(arr[1]);

//alert("hello");

let money = +prompt("Ваш бюджет на месяц?", "25");
    console.log(money);
let time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
    console.log(time);

let appData = {
    cost:money,
    timeData:time,
    expenses:[],
    optionalExpenses:{},
    income:[],
    savings:false
};
    
   
    for(let i=0; i<2; i++) {
        let vopr1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
        vopr2 = prompt("Во сколько обойдется?", '');
        
        if ( (typeof(vopr1))=== 'string' && (typeof(vopr1)) != null && (typeof(vopr2)) != null &&
         vopr1 != '' && vopr2 !='' && vopr1.length < 50){
            console.log("done");
            appData.expenses[vopr1]=vopr2; //тоже самое appData.expenses.vopr1=vopr2; 
        }else{

        }
    };
    
    console.log(appData);

    appData.moneyDay = appData.cost/30;
    alert("Бюджет на 1 день: "+ appData.moneyDay);

    if(appData.moneyDay<100){
        console.log("Минимальный уровнь достатка");
    }else if(appData.moneyDay >100 && appData.moneyDay < 2000){
        console.log("Средний уровень достатка");
    }else if(appData.moneyDay > 2000){
        console.log("Высокий уровень достатка");
    }else{
        console.log("Error");
    }
   