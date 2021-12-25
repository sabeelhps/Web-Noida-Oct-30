const image = document.querySelector('img');

image.style.height = '250px';
image.style.width = '350px';


let isTrue = false;

setInterval(() => {
    
    if (isTrue) {
       image.setAttribute('src','https://images.unsplash.com/photo-1486140525285-12e658d9ac0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60')
    } else {
       image.setAttribute('src','https://images.unsplash.com/photo-1481047874621-0ed2ab52598e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')
    }

    isTrue = !isTrue;

}, 2000);