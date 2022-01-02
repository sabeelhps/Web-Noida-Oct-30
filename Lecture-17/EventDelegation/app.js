const btn = document.querySelector('#btn');
const list = document.querySelector('#list');
const inp = document.querySelector('#inp');
const lis = document.querySelectorAll('li');
const ul = document.querySelector('ul');



btn.addEventListener('click', function () {
    const todoText = inp.value;
    const li = document.createElement('li');
    li.innerText = todoText;
    list.append(li);
    inp.value = "";
});

// BAD PRACTICE 

// for (let li of lis) {
//     li.addEventListener('click', function () {
//         this.remove();
//     })
// }


// GOOD PRACTICE USING EVENT DELEGATION

ul.addEventListener('click', function (e) {
    if (e.target.nodeName === "BUTTON") {
        e.target.parentElement.remove();
    }
})

