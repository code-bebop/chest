const form = document.querySelector(".js-toDoForm"),
    input = form.querySelector("input"),
    list = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos'

let toDos = [];

function deleteToDo() {
  const btn = event.target;
  const li = btn.parentNode;
  list.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  })
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDos(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  const span = document.createElement("span");
  span.innerHTML = text;
  const newId = toDos.length + 1;
  li.id = newId;
  li.appendChild(delBtn);
  li.appendChild(span);
  list.appendChild(li);
  const toDo = {
    text : text,
    id : newId
  };
  toDos.push(toDo);
  saveToDos();
}

function submitHandler() {
  event.preventDefault();
  const currentValue = input.value;
  paintToDos(currentValue);
  input.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  const parsedToDos = JSON.parse(loadedToDos);
  if(loadedToDos !== null) {
    parsedToDos.forEach(function (toDo) {
      paintToDos(toDo.text);
    })
  }
}

function init () {
  loadToDos();
  form.addEventListener('submit', submitHandler);
}

init()
