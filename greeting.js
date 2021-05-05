const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();  //이벤트의 기본동작값을 막는다(enter를 누르면 어딘가로 제출되고 새로고침되는 기본동작값)
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);  //이름을 저장해야 새로고침했을 때도 불러올 수 있겠지?!
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);  //이름 입력하는 창 안보이게.
    greeting.classList.add(SHOWING_CN); //창 보이게.
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);  //불러오는 것.저장X
    if (currentUser === null) { //없으니까 이름이 뭔지 물어본다.
        askForName();
    }
    else {  //null이 아니면(=유저가 있는 경우) 이름을 색칠 
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();