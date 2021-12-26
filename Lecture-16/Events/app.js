const btn = document.getElementById('btn');



btn.addEventListener('click', function cb() {
    console.log('Inside cb');
});





// function scream() {
//     console.log('SCREEEEAAAM!!!');
// }

// function shout() {
//     console.log('SHOUUTTTT!!!!');
// }

// btn.onclick = scream;
// btn.onclick = shout;

// btn.addEventListener('click', scream);
// btn.addEventListener('click', shout);




// ---------------------------------MOUSE EVENTS

const divs = document.querySelectorAll('div');


for (let div of divs) {
    div.addEventListener('mouseenter', function () {
        div.style.borderColor = 'orange';
        div.style.backgroundColor = 'lightgreen';
    })

    div.addEventListener('mouseleave', function () {
        div.style.borderColor = '';
        div.style.backgroundColor = '';
    })

}


// ----------------------keyboard Events 


const input = document.querySelector('input');

input.addEventListener('keypress', function (event) {

    if (event.key === 'Enter') {
        console.log(input.value);
        console.log('You pressed the enter key!')
    }
   
})

// ------------------------Form Event--------


const form = document.getElementById('form');


form.addEventListener('submit', function (e) {
    e.preventDefault(); //prevent the form from getting submitted by default
    console.log('Form Submitted');
})

