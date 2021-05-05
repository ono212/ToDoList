/*
const bbungInfo = {
  name:"bbungchi",
  age:25,
  gender:"Female",
  isCute:true,
  job:"백수",
  favFood:["잡채","치킨","엽떡"],
  favMovies:[
    {
      name:"말할 수 없는 비밀", isDomestic:false
    },
    {
      name:"조제",isDomestic:true
    }
  ]
}

console.log(bbungInfo.favFood[1]);
console.log(bbungInfo.favMovies[0].name);

function sayHi(rose, tulip) {
  console.log("안녕", rose, "! 너는", tulip, "살이구나!");
  console.log(`Hello ${rose} you are ${tulip} years old`);
}

sayHi("정민",25);

const calculator = {
  plus: function(a,b){
    return a+b;
  },
  minus:function(a,b){
    return a-b;
  },
  multiple:function(a,b){
    return a*b;
  },
  division:function(a,b){
    return a/b;
  },
  square:function(a,b){
    return a**b;
  }
}

const plus = calculator.plus(2,3);
console.log(plus);

const minus = calculator.minus(2,3);
console.log(minus);

const multiple = calculator.multiple(2,3);
console.log(multiple);

const division = calculator.division(2,3);
console.log(division);

const square = calculator.square(2,4);
console.log(square);
*/
/*
const title = document.querySelector("#title");  //getElementById는 오직 id로만 객체를 생성할 수 있지만 querySelector는 id와 class둘 다로 객체를 생성할 수 있어 편리 / #은 id, .은 class
title.innerHTML = "JS로 바꿔보자!";
//title.style.color = "purple";
document.title = "I own you now";
//console.dir(title);

/*
function handleResize() {
    console.log("조절했다.");
}
window.addEventListener("resize", handleResize)  //handleResize()와의 차이
*/

/*
function handleClick() {
    title.style.color = "red";
}

title.addEventListener("click", handleClick);  //근데 딱 최초 한 번만 됨.
*/

/*
if(10==10){  // ===도 됨
    console.log("z");
}
else
    console.log("zz");
*/

/*
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}
*/

/*
const CLICKED_CLASS = "clicked";

function handleClick() {
    //const currentClass = title.className;
    
    /*
    if (currentClass !== CLICKED_CLASS) {
        title.className = CLICKED_CLASS;
    }
    else {
        title.className = "";
    }
    */ //=> 포인터가 사라지는 문제 발생
   
    /*
   if (currentClass !== CLICKED_CLASS) {
        title.classList.add(CLICKED_CLASS); //계속 추가해주는 게 아니라 이 문자열을 가지고 있는지 확인한 후 있으면 추가안함
    }
    else {
        title.classList.remove(CLICKED_CLASS);
    }
    */ //=> 한번만 수행되는 문제가 발생

    /*
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(hasClass) {
        title.classList.remove(CLICKED_CLASS);
    }
    else {
        title.classList.add(CLICKED_CLASS);
    }*/

    //더 간략화하면 이렇게 할 수 있음
    //title.classList.toggle(CLICKED_CLASS);
//}
/*
function init() {
    /*
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
    */
    /*title.addEventListener("click", handleClick);
}

init();
*/

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
/*
  if (hours > 12) {
    clockTitle.innerText = `PM ${hours}:${minutes >= 10 ? minutes : `0${minutes}`}:${seconds >= 10 ? seconds : `0${seconds}`}`;
  }
  else {
    clockTitle.innerText = `AM ${hours >= 10 ? hours : `0${hours}`}:${minutes >= 10 ? minutes : `0${minutes}`}:${seconds >= 10 ? seconds : `0${seconds}`}`;
  }
  */
  clockTitle.innerText = `${hours >= 10 ? hours : `0${hours}`}:${minutes >= 10 ? minutes : `0${minutes}`}:${seconds >= 10 ? seconds : `0${seconds}`}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();