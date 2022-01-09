const buttons = document.querySelectorAll('button');
const screen = document.querySelector('#screen');


for (const button of buttons) {
    button.addEventListener('click', function () {
        const buttonText = button.innerText.trim();
        // screen.value =screen.value+ buttonText;
        if (buttonText === 'x') {
            screen.value += '*';
        }
        else if (buttonText === 'C') {
            screen.value = "";
        }
        else if (buttonText === '=') {

            try {
                // if expression is not evaluated then catch block will be executed
                screen.value = eval(screen.value);
            }
            catch (error) {
                console.log(error.message);
                screen.value = 'Invalid Operation';
            }
     
        }
        else {

            if (screen.value === 'Invalid Operation') {
                screen.value = "";
                screen.value += buttonText;
            } else {
                screen.value += buttonText;
            }
        }
       
    });
}


document.addEventListener('keydown', function (e) {
    e.preventDefault();

    if (e.key === 'Enter') {
        try {
            // if expression is not evaluated then catch block will be executed
            screen.value = eval(screen.value);
        }
        catch (error) {
            console.log(error.message);
            screen.value = 'Invalid Operation';
        }
       
    }
})