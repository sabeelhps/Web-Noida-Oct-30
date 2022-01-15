$('button').click(function () {
    console.log('Clicked')
});

$('h1').dblclick(function () {
    console.log('Double Clicked');
})

$('input').keypress(function (e) {
    if (e.which === 13) {
        console.log($(this).val());
        console.log('You Pressed the Enter Key');
    }
  
});

$('button').mouseenter(function () { 
    $(this).addClass('btn');
});


$('button').mouseleave(function () { 
    $(this).removeClass('btn');
});
