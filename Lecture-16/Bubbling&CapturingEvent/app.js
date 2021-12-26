const grandParent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');



grandParent.addEventListener('click', function (e) {
    console.log('Grand Parent');

   
},false)

parent.addEventListener('click', function (e) {
    console.log('Parent');
    e.stopPropagation();
},true)

child.addEventListener('click', function (e) {
    console.log('child');


    // e.stopPropagation();
},true)


