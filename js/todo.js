const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function delTodo(event) {
    let li = event.target.parentElement;
    if (event.target.tagName === "I") {
      li = event.target.parentElement.parentElement;
    }
    li.parentElement.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");

    const normalDiv = document.createElement("div");

    const div = document.createElement("div");
    div.setAttribute('class','divSpace');

    button.innerHTML = "<i class='fas fa-times-circle'></i>";
    button.addEventListener("click", delTodo);
    
    li.appendChild(span);
    li.appendChild(button);
    div.appendChild(li);
    toDoList.appendChild(div);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
      text:newTodo,
      id:Date.now(),
    }

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const getTodo = localStorage.getItem(TODOS_KEY);

if (getTodo != null){
  const parsedToDos = JSON.parse(getTodo);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); 
} 