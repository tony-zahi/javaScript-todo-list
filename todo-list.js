/*  Algorithm:
    1. loop through the array
    2. create some HTML code for each todo 
    3. put the HTML on web page  
*/


let todoListArray = [];

// Load todoListArray from localStorage if exists
if(localStorage.getItem('todoListArray')) {
    todoListArray = JSON.parse(localStorage.getItem('todoListArray'));
    renderTodoList(); // Render the todo list if there are items in localStorage
}

function renderTodoList() {
    let TodoListHTML = '';
    for (let i = 0; i < todoListArray.length; i++) {
        const todoObject = todoListArray[i];
        const { name, date } = todoObject;
        const html = `
            <div>${name}</div> 
            <div>${date}</div> 
            <button class="delete-todo-btn" onclick="
                todoListArray.splice(${i}, 1);
                saveTodoList(); // Save the updated todo list after deletion
                renderTodoList();
            ">delete</button>
        `;
        TodoListHTML += html;
        document.querySelector('.todo-result').innerHTML = TodoListHTML;
    }
}

function addToTodo() {
    const inputElement = document.querySelector('.input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.date-input');
    const date = dateInputElement.value;

    todoListArray.push({ name, date });
    saveTodoList(); // Save the updated todo list after addition
    renderTodoList();
    inputElement.value = '';
}

function saveTodoList() {
    localStorage.setItem('todoListArray', JSON.stringify(todoListArray));
}


function pressEnter() {
    if(event.key === 'Enter'){
        addToTodo()
    }
}