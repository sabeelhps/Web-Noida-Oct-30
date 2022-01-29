


// function fizzBuzz(n){

//     for(let i=1;i<=n;i++){

//         if(i%3===0 && i%5===0){
//             console.log('fizzBuzz');
//         }
//         else if(i%3===0){
//             console.log('fizz');
//         }
//         else if(i%5===0){
//             console.log('buzz');
//         }
//         else{
//             console.log(i);
//         }
//     }
// }

// fizzBuzz(20);



function fizzBuzzOpt(n){

    let str;
    
    for(let i=1;i<=n;i++){

        str="";

        if(i%3===0){
            str+='fizz';
        }
        if(i%5===0){
            str+='buzz';
        }
        if(str===""){
            str+=i;
        }
        console.log(str);
    }
}

fizzBuzzOpt(20);
