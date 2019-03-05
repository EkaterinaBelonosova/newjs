function sayName(name) {
    let message = "My name" + name
    return message

}

let arr = [5,6,7,8,9];
let result = arr.reduce(function(sum,elem){
    return sum + elem;
})

let assert = require('chai').assert

describe("sayName", function (){
    it ("Получаем фразу с новым именем", function(){
        assert.typeOf(sayName('Alex'), 'string')
    });

});
describe("arr", function (){
    it ("Получаем сумму с новым числом", function(){
        assert.equal(result, 17)
    });

});