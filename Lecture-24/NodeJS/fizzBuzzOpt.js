
// Most Optimised
function fizzBuzzOpt(n){

    let count3=1;
    let count5=1;

    for(let i=1;i<=n;i++){
        let str="";
        if(count3===3){
            str+='fizz';
            count3=0;
        }
        if(count5===5){
            str+='buzz'
            count5=0;
        }
        if(str===""){
            str+=i;
        }
        count3++;
        count5++;

        console.log(str);
    }
}



fizzBuzzOpt(20);