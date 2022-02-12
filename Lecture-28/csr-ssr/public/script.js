

function refreshTodo() {
    
    $.get('/todos', function(data){
        for (let todo of data) {
            $('#list').append(`<li>${todo}</li>`);
        }
    })

}

refreshTodo();