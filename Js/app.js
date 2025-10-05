

let todoList = [];
let inProgressList = [];
let closedList = [];


const getTodoName = () =>{
    let todoName = document.getElementById("create-todo").value;
    return todoName;
}

const createTodo = () => {
    let todoName = getTodoName();
    todoList.push(todoName);

    updateStatus();
}

const showTodo = () => {

    const todoArea = document.getElementById("todo-cards");
    todoArea.innerHTML = todoList.map(todo => `<div class= "card">${todo}</div>`).join('');

    const todoCount = document.getElementById("todo-count");
    todoCount.innerHTML = todoList.length;
}

const showInProgress = () => {

    const inProgressArea = document.getElementById("inprogress-cards");
    inProgressArea.innerHTML = inProgressList.map(inProgress => `<div class="card">${inProgress}</div>`);

    const inProgressCount = document.getElementById("inprogress-count");
    inProgressCount.innerHTML = inProgressList.length;
}

const showClosed = () => {

    const closedArea = document.getElementById("closed-cards");
    inProgressArea.innerHTML = closedList.map(closed => `<div class="card">${closed}</div>`);

    const closedCount = document.getElementById("closed-count");
    closedCount.innerHTML = closedList.length;
}


const updateStatus = () => {
    showTodo();
    showInProgress();
    showClosed();
}

