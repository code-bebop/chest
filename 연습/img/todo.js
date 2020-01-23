const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo () {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id); // 여기 이 li는 선택된 btn의 부모 li였던거다...
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // setItem 메소드로 localStorage에 저장. 단 localStorage는 string만 받아서 stringify 메소드로 string화 시켜준다.
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "X";
  delBtn.addEventListener('click', deleteToDo); // X버튼을 누르면 list가 삭제되게끔 click을 이벤트 트리거로 설정
  const span = document.createElement("span");
  span.innerText = text;  // HTML문서상에 toDoList라는 ul요소가 있다. 거기에 li로 넣을 요소들을 만들고, text도 그 안에 담는다.
  const newId = toDos.length + 1; // 몇 번째 리스트 요소인지 알 수 있게 ID값도 달아준다. li에도 달아주고 toDoObj에도 달아 줄 거다.
  li.id = newId;
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li); // ul안에 순서대로 담아주면 화면 상에 보이게 된다.
  const toDoObj = {
    text: text,
    id: newId
  }
  toDos.push(toDoObj); // 그리고 이를 객체화시켜 toDos 배열에 넣어 localStorage에 저장해둬야 한다.
  saveToDos(); // localStorage에 저장시킬 함수 호출.
}

function handleSubmit(event) {  // toDoForm이 submit 되었을 때
  event.preventDefault(); // 우선 preventDefault로 사용자가 submit했을 때 브라우저가 새로고침 되는 것을 막는다.
  const currentValue = toDoInput.value; // 그리고 사용자가 입력한 값을 currentValue 변수에 담는다.
  paintToDo(currentValue); // 그 값을 매개변수로 paintToDo를 실행시킨다.
  toDoInput.value = ""; // 그리고 toDoInput은 비운다.
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS); // 우선 LocalStorage로부터 toDos Key를 가진 value를 읽어옴
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);  // toDos Key를 가진 value가 있다면 불러와서 객체화 시킴, localStorage에 저장된 값들은 전부 string이니까
    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text); // 그리고 각각의 toDos에 대해 paintToDo 함수를 적용시킴. forEach를 쓰는 이유는 toDos는 배열이다.
    });
  }
}

function init() {
  loadToDos();  // 브라우저가 실행되면 먼저 loadToDos 함수를 실행
  toDoForm.addEventListener("submit", handleSubmit);  // toDoForm에 제출 이벤트 리스너도 설정
}

init();
