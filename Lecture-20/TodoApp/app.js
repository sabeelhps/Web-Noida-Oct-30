
// To Mark the li as completed
$('ul').on('click','li',function () {
    $(this).toggleClass('completed');
});

// Delete li when clicked on span
$('ul').on('click', 'span', function (event) {
    event.stopPropagation(); 
    console.log('span clicked');
    // console.log($(this).parent().text());
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    //to prevent event bubbling
});

// Add new todo in the todo list

$('#inp').keypress(function (event) {
    if (event.which === 13) {
        const todoText = $(this).val();

        if (todoText.trim().length === 0) {
            $('#inp').css('border', '3px solid red');
            $('h1').css('color', 'red');
            return;
        } 

        const li = `<li><span><i class="fas fa-trash-alt"></i></span> ${todoText}</li>`
        $('#list').append(li);
        $(this).val("");
    }

    if ($('#inp').val().trim().length > 0) {
        $('#inp').css('border', '1px solid gray');
        $('h1').css('color', 'white');
    }

});

$('#plus').click(function () { 
    $('#inp').fadeToggle(500);
 })