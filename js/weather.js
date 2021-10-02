const API_KEY = "5c11994460e6d81e647f36098153e351";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weatherIcon = document.querySelector(".weatherIcon");
        const weather = document.querySelector(".weatherText span:first-child");
        const city = document.querySelector(".weatherText span:last-child");

        weatherData = data.weather[0].main;
        wIcon = data.weather[0].icon;
        weather.innerText = `${data.main.temp}℃`;
        weatherIcon.innerHTML = `<img src='img/wicon/${wIcon}.png'/>`;
        city.innerText = `/ ${data.name}`;
    });
}

function onGeoErr(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);