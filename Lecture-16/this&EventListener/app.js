const buttons = document.querySelectorAll('button');

function makeRandomColor() {
    
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

for (let button of buttons) {
    button.addEventListener('click', function (){
       this.style.backgroundColor = makeRandomColor();
    })
}
