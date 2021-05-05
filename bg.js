//한 번에 로딩되도록 하기 위해
const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);

    if(imgNumber == 1) {  //2번 사진일 때 글씨색 변경.흰글자는 안보여서ㅠㅠ
        body.style.color = "black";

        const toDoForm = document.querySelector(".js-toDoForm"),
            toDoInput = toDoForm.querySelector("input"),
            form = document.querySelector(".js-form"),
            input = form.querySelector("input");

        toDoInput.classList.add("makeBlack");
        input.classList.add("makeBlack");

    }
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumer = genRandom();
    paintImage(randomNumer);
}

init();