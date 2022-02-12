

function refreshTodo() {
    
    $.get('/todos', function(data){
        console.log(data)
    })

}

refreshTodo();