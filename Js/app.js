let todoList = [];
let inProgressList = [];
let closedList = [];

const getTodoName = () =>{
    let todoName = document.getElementById("create-todo").value;
    return todoName;
}

const createTodo = () => {
    let todoName = getTodoName();

    if (todoName !== ""){
        todoList.push(todoName);
    }

    updateStatus();
}

const showTodo = () => {

    const todoArea = document.getElementById("todo-cards");
    todoArea.innerHTML = todoList
        .map(todo => `<div class= "card">${todo}
            <button type="button" class="change-status" onclick="addInProgress('${todo}')">...</button>
            </div>`)
        .join('');

        const todoCount = document.getElementById("todo-count");
    if (todoList.length > 0){
        
        todoCount.innerHTML = todoList.length;
    }
    else{
        todoCount.innerHTML = "0";
    }
}

const showInProgress = () => {

    const inProgressArea = document.getElementById("inprogress-cards");
    inProgressArea.innerHTML = inProgressList
        .map(inProgress => `<div class="card">${inProgress}
            <button type="button" class="change-status" onclick="addClosed('${inProgress}')">...</button>
            </div>`)
        .join('');

        const inProgressCount = document.getElementById("inprogress-count");
    if (inProgressList.length > 0){
        inProgressCount.innerHTML = inProgressList.length;
    }
    else{
        inProgressCount.innerHTML = "0";
    }
}

const showClosed = () => {

    const closedArea = document.getElementById("closed-cards");
    closedArea.innerHTML = closedList
        .map(closed => `<div class="card">${closed}
            <button type="button" class="change-status" onclick="removeTodo('${closed}')">...</button>
            </div>`)
        .join('');

        const closedCount = document.getElementById("closed-count");
    if (closedList.length > 0){
        closedCount.innerHTML = closedList.length;
    }
    else{
        closedCount.innerHTML = "0";
    }
}

const resetInput = () => {
    document.getElementById("create-todo").value = "";
}

const updateStatus = () => {
    showTodo();
    showInProgress();
    showClosed();

    resetInput();
}


const addInProgress = (item) => {
    todoList = todoList.filter(todo =>todo !== item);
    inProgressList.push(item);

    updateStatus();
}

const addClosed = (item) => {
    inProgressList = inProgressList.filter(todo => todo !== item);
    closedList.push(item);

    updateStatus();
}

const removeTodo = (item) => {
    closedList = closedList.filter(todo => todo !== item);

    updateStatus(); 
}
