

// function fun() {
    
//     var x = 100;

//     function innerFun() {
//         x++;
//         console.log(x);
//     }

//     return innerFun;
// }

// var f = fun();

// f();
// f();
// f();
// f();
// f();


function authenticate() {
    
    let username = 'max';
    let password = '1234';

    function login(inputName, inputPass) {
        
        if (inputName === username && inputPass === password) {
            console.log('Welcome to the home page');
        } else {
            console.log('Wrong Credentials');
        }

    }

    return login;
}


const userLoginFunc = authenticate();

userLoginFunc('max', '12345');

