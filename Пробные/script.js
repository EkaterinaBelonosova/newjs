//let arr =['plum.png','oran.jpg','apple.bmp'];

//console.log(arr[1]);

//alert("hello");

let money = + prompt("Ваш бюджет на месяц?", "25");
    console.log(money);
let time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
    console.log(time);
let vopr1 = prompt("Введите обязательную статью расходов в этом месяце", " "),
    vopr2 = prompt("Во сколько обойдется?", " "),
    vopr3 = prompt("Введите обязательную статью расходов в этом месяце", " "),
    vopr4 = prompt("Во сколько обойдется?", " ");

let arr={vopr1 : vopr2};
let appData = {
    cost:money,
    timeData:time,
    expenses:arr,
    optionalExpenses:{},
    income:[],
    savings:false
};
    console.log(appData);
    
    alert("Бюджет на 1 день "+ money/30);
   