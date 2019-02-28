class SomeAvg{
    avg(a){
        return a+9;
    }
    merge(a,b){
        return{
            ...a,
            ...b
        }
    }
   
}

export default new SomeAvg();
