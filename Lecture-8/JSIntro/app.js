let luckyNum = 39;

// console.log(luckyNum);
// console.warn('This is a warning');
// console.error('This is a error');
// console.dir(luckyNum);

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

document.body.style.background=`rgb(${r}, ${g}, ${b})`