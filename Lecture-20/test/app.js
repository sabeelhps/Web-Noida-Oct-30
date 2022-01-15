

const btn = document.getElementById('btn');

function add() {
    console.log('Inside Add')
}

const sum = function () {
    console.log('Inside Sum')
}


btn.addEventListener('click', sum);
