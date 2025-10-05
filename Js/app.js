

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

    showTodo();
}

const showTodo = () => {

    const todoArea = document.getElementById("todo-cards");
    todoArea.innerHTML = todoList.map(todo => `<div class= "card">${todo}</div>`).join('');

    const todoCount = document.getElementById("todo-count");
    todoCount.innerHTML = todoList.length;
}


