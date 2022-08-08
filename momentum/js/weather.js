const API_KEY = "1099e967b8fccfb8cee81c2a0f63df6f";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span");
        const temperature = document.querySelector("#weather ul li:first-child")
        const city = document.querySelector("#weather ul li:last-child");
        let condition = data.weather[0].main;
        city.innerText = data.name;
        switch(condition){
            case "Thunderstorm":
                condition = "💥"
            break;
            case "Drizzle":
                condition = "⚡️"
            break;
            case "Rain":
                condition = "🌧"
            break;
            case "Snow":
                condition = "❄️"
            break;
            case "Clear":
                condition = "☀️"
            break;
            case "Clouds":
                condition = "☁️"
            break;
            default:
                condition = "🌫"
            break;
        }
        weather.innerText = condition;
        temperature.innerText = `${Math.round(data.main.temp)} ℃`
    });
}

function onGeoError() {
    // alert("cant find you. No weather for you. ");
    // return false;
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);