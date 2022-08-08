const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("div span input"); 
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function doneToDo(e){
    const doneThings = e.target.parentNode.childNodes[0];
    doneThings.style["text-decoration"] = "line-through purple";
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const div = document.createElement("div");
    div.innerText = "✔️";
    div.addEventListener("click" , doneToDo);
    const button = document.createElement("button");
    button.innerText = "🗑";
    button.addEventListener("click" , deleteToDo );
    li.appendChild(span);
    li.appendChild(div);
    li.appendChild(button);
    toDoList.appendChild(li);

}

function handleToDoSubmit(event) {
    if(toDos.length > 9){
        alert("최대 10개까지 등록가능합니다.");
        return false;
    }else{
        event.preventDefault();
        const newTodo = toDoInput.value;
        toDoInput.value = "";
        const newTodoObj = {
            text:newTodo,
            id: Date.now(),
        }
        toDos.push(newTodoObj);
        paintToDo(newTodoObj);
        saveToDos();
    }
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null ){
    toDos = JSON.parse(savedToDos);
    toDos.forEach(paintToDo);
}

