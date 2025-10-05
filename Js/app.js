

let todoList = [];
let inprogressList = [];
let closedList = [];


const getTodoName = () =>{
    let todoName = document.getElementById("create-todo").value;
    return todoName;
}

const createTodo = () => {
    let todoName = getTodoName();
    todoList.push(todoName);
}


