let todoList = [];
let inProgressList = [];
let closedList = [];

//localStorage.clear();


const getTodo = () => {
    todoList = JSON.parse(localStorage.getItem("todo")) || [];
    inProgressList = JSON.parse(localStorage.getItem("inProgress")) || [];
    closedList = JSON.parse(localStorage.getItem("closed")) || [];

    updateStatus();
}



const getTodoName = () =>{
    let todoName = document.getElementById("create-todo").value;
    return todoName;
}

const createTodo = () => {
    let todoName = getTodoName();

    if (todoName !== ""){
        todoList.push(todoName);
        localStorage.setItem("todo",JSON.stringify(todoList));
        todoList = JSON.parse(localStorage.getItem("todo"));
    }

    updateStatus();
}


const showCards = (className, list, methodName) => {
    const area = document.getElementById(`${className}-cards`);
    area.innerHTML = list
        .map(todo => `<div class= "card">${todo}
            <button type="button" class="change-status" onclick="${methodName}('${todo}')">...</button>
            </div>`)
        .join('');
    
    const count = document.getElementById(`${className}-count`);

    count.innerHTML = list.length || "0";
}

const resetInput = () => {
    document.getElementById("create-todo").value = "";
}

const updateStatus = () => {

    showCards("todo", todoList, "addInProgress");
    showCards("inprogress", inProgressList, "addClosed");
    showCards("closed", closedList, "removeTodo");

    resetInput();
}


const changeStatus = (list1, list2, class1, class2, item, isRemoveTodo) => {
    if (isRemoveTodo){
        list1 = list1.filter(todo => todo !== item);
        localStorage.setItem(class1,JSON.stringify(list1));
        list1 = JSON.parse(localStorage.getItem(class1));
    }
    else{
        list1 = list1.filter(todo => todo !== item);
        localStorage.setItem(class1, JSON.stringify(list1));
        list2.push(item);
        localStorage.setItem(class2,JSON.stringify(list2));
        list2 = JSON.parse(localStorage.getItem(class2));
    }
}


const addInProgress = (item) => {

    changeStatus(todoList, inProgressList, "todo", "inProgress", item, false);
    getTodo();
}

const addClosed = (item) => {

    changeStatus(inProgressList, closedList, "inProgress", "closed", item, false);
    getTodo();
}

const removeTodo = (item) => {

    changeStatus(closedList,todoList, "closed", "todo", item, true);
    getTodo();
}

getTodo();