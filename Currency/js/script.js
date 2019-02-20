
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {

    
    
    

    function sendjson(){
        let promise = new Promise(function(resolve,reject) {  
            let request = new XMLHttpRequest();

                request.open('GET', 'js/current.json');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                request.addEventListener('readystatechange',function() {
                    if (request.readyState === 4){
                        if(request.status == 200 && request.status < 300) {
                            let data = JSON.parse(request.response);  
                            resolve(data);     
                        }else {
                            reject();
                        }                                            
                    } 
            });
            request.send();
        });
        return promise;
    }

    sendjson()
            .then((data) =>  inputUsd.value = inputRub.value / data.usd)
            .catch(() => inputUsd.value = "Что-то пошло не так!")



});
