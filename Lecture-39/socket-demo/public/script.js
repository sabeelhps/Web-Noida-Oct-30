const btn = document.getElementById('btn');
const inp = document.getElementById('inp');
const list = document.getElementById('list');


const socket = io();



btn.addEventListener('click', () => {
    const inputMsg = inp.value;
    socket.emit('send-msg', {
        msg: inputMsg
    });
});


socket.on('recived-msg', (data) => {
    const msg = data.msg;
    const li = document.createElement('li');
    li.innerText = `${data.id} said ${data.msg}`;
    list.append(li);
})









