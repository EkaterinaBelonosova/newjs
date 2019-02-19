//let arr =['plum.png','oran.jpg','apple.bmp'];

//console.log(arr[1]);

//alert("hello");

/*let money = + prompt("Ваш бюджет на месяц?", "25");
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
    
    alert("Бюджет на 1 день "+ money/30);*/


    //задание по текстовому документу
/*let age = document.getElementById('age');
 
console.log(age.value);
    class User {
        constructor(surname,name){
           this.surname=surname;
            //this.age=age;
            this.name=name;
            this.age=age.value;
        }
        showUser() {
            alert(`Пользователь  ${this.name}  ${this.surname} его возраст ${this.age}`)
        }
        
    }
    let ivan = new User('Ivan',"Petrov");
    ivan.showUser();
*/

//задание по текстовому документу
let div = document.createElement('div');

class options{
    constructor(height,width,bg,fontSize,textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize; 
        this.textAlign = textAlign;  
    }
    creatediv(text){
        document.body.appendChild(div);
        div.textContent=text;
        div.style.cssText=`height: ${this.height}px; 
        width: ${this.width}px; 
        background-color: ${this.bg};
        text-align: ${this.textAlign};
        font-size: ${this.fontSize}px`;
    }    
}
let newdiv = new options(1000,1000,'red',100,'right');
console.log(newdiv.creatediv('Привет'));    
   