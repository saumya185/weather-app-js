const apikey = "e0c36e52a619cd061b9c646854844d45"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 

const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) { 
    const response = await fetch(apiUrl + city + `&appid=${apikey}`); 
    var data = await response.json(); 
    console.log(data); 
    document.querySelector(".city").innerHTML = data.name; 
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"; 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; 
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "mist.png";
    } else {
        weatherIcon.src = "weather.png"; // Default icon
    }
}
searchBtn.addEventListener("click", () => { 
    checkWeather(searchbox.value); 
});