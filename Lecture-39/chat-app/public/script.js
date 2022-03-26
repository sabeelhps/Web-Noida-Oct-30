const btn = document.getElementById('btn');
const inp = document.getElementById('inp');
const list = document.getElementById('list');
const loginBtn = document.getElementById('login-btn');
const user = document.getElementById('user');


const socket = io();


$('#chat').hide(); // hide the chat section in html


loginBtn.addEventListener('click', () => {
    
    $('#login').hide(); //as soon as user login hide the login section 
    $('#chat').show(); // and show the chat box

    const username = user.value;

    socket.emit('login', {
        username
    })
    
});



btn.addEventListener('click', () => {
    const inputMsg = inp.value;
    socket.emit('send-msg', {
        msg: inputMsg
    });
    inp.value = "";
});


socket.on('recived-msg', (data) => {
    const msg = data.msg;
    const li = document.createElement('li');
    li.innerText = `${data.username} : ${data.msg}`;
    li.setAttribute('class', 'list-group-item p-3 rounded-pill mb-3 shadow-sm');
    list.append(li);
})
