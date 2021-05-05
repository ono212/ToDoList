//유저의 location 좌표 정보를 읽어옴. (좌표=coordinate)
//API : 다른 서버로부터 손쉽게 데이터를 가져올 수 있는 수단(오직 데이터만!디자인X)

const weather = document.querySelector(".js-weather");

const API_KEY = "e6dcb026e008d79a6463ed5ed893c721";
const COORDS = 'coords';

function getWeather(lat, lon) {
    fetch(  //데이터를 얻는 방법 : fetch
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
        .then(function(response) {   //완전히 이해간 부분은 아님!!
            return response.json();
        })
        .then(function(json) {  //json데이터가 준비되면
            //console.log(json);
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `In ${place}, ${temperature}℃`
        });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,   //key와 value값이 같을 때는 이렇게 써주면 된다!!
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("위치 정보를 불러올 수 없습니다.");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }
    else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();