function form(){
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };
    
    let form = document.querySelector('.main-form'),
        formBootom = document.getElementById('form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'); //создаем див для передачи пользователю сообщения статуса    
        statusMessage.classList.add('status');
    
    function sendForm(elem){
        elem.addEventListener('submit', function(event) {//вещаем обработчик события именно на форму, а не на кнопку в форме, потому что нам нужно знать когда именно форма отправляется на сервер
            event.preventDefault(); //для того чтобы не обновлялась страница при нажатии на кнопку форму(обновление браузера)
            elem.appendChild(statusMessage);
    
            let formData = new FormData(elem); //с помощью объекта формдата получаем все что пользовтаель ответил  в форме
    
            
                function postData(data){
                    return new Promise(function(resolve,reject){
                        let request = new XMLHttpRequest();
                        request.open('POST', 'server.php');
                        //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
                        
                        //for json
                        request.setRequestHeader('Content-type', 'application/json; charset=uft-8');
                        //end for json
                        request.onreadystatechange = function(){ //чтобы отлеживать статусы отправлений
                            if(request.readyState<4){
                               resolve();
                            }else if(request.readyState === 4){
                                if(request.status == 200 && request.status < 300){
                                    resolve();
                                }
                                else{
                                    reject();
                                }
                            }
                        }
                        //for json
                    let obj ={};  //создем новый объект в который помещаем данные
    
                    data.forEach(function(value,key) { //с помощью метода forEach берем все данные из формдаты и помещаем в объект obj
                            obj[key] = value;
                        });
                    let json = JSON.stringify(obj); //превращаем в json формат
                    request.send(json); // отправляем на сервер
                    //end for json
                    //request.send(formData); //форм дата - это данные которые ввел пользователь 
                    })
                }
                
                function clearInput() {
                    for (let i=0; i<input.length; i++){
                        input[i].value='';
                    }  
                }
            
             
    
            postData(formData)
                .then(() =>  statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput)
        }); 
    }
    
    sendForm(form);
    sendForm(formBootom);
    
}

module.exports = form;