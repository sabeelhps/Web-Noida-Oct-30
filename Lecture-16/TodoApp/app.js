const btn = document.getElementById('btn');
const inp = document.getElementById('inp');
const list = document.getElementById('list');


function addTodo(todoText) {
    const li = document.createElement('li');
    li.innerText = todoText;
    list.append(li);
}


btn.addEventListener('click', function () {
    const todoText = inp.value;
    addTodo(todoText);
    inp.value = '';
})