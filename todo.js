const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = document.querySelector("js-toDoInput"), //input창에 입력된 것을 받아오는 것과 같다고 보면 됨
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";  //얘는 왜??뭐라해야하지..자주 쓰는 그런거니까 그냥 딱..

let toDos = [];  //할 일 목록 배열 생성

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode.parentNode; //그 버튼 자체가 아닌 내용을 지워야하는 거니까!!(li)
    toDoList.removeChild(li);  //html 즉 화면 상에서만 삭제됨. 실제 local storage에서도 삭제되어야 새로고침했을 때도 삭제됨.
    const cleanToDos = toDos.filter(function(toDo) {  //local storage에서 삭제하기 위해
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));  //object를 string으로 바꿔줌(local storage에는 javascript의 data를 저장할 수 없기 때문.string만 저장 가능.)
}

function paintToDo(text) {
    /*
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    delBtn.addEventListener("click",deleteToDo);
    const newId = toDos.length + 1;
    span.innerText = text
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
    */

    /* 내가 추가로 작성한 부분 */
    const li = document.createElement("li");

    const div = document.createElement("div");
    div.className = 'toDoView';
    
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("class", "toggle");

    const label = document.createElement("label");
    label.innerText = text;


    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.className = 'delBtn';
    delBtn.addEventListener("click", deleteToDo);
    const newId = toDos.length + 1

    div.appendChild(input);
    div.appendChild(label);
    div.appendChild(delBtn);
    li.appendChild(div);

    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = document.querySelector(".js-toDoInput").value;
    paintToDo(currentValue);
    document.querySelector(".js-toDoInput").value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);  //enter 누르면 submit됨
}

init()