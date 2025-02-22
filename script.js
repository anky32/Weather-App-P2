const apiKey = `fd7485def60c303e5aec0cf8880bcbcc`;
const city = "Preston";


async function fetchWeatherdata(city){
    try{
        
        const response = await fetch(`http://localhost/weather/index.php?q=${city}`);
        if(!response.ok){
            throw new Error("Unable to fetch weather data")
        }


    const result = await response.json();
    console.log(result); 
    // console.log(data.main.temp);
    // console.log(data.name);
    // console.log(data.wind.speed);
    // console.log(data.main.humidity);
    // console.log(data.main.pressure);
    updateWeatherUI(result);
} catch (error) {
    console.error(error);
}
}

const cityElement = document.querySelector(".City");
const temperature = document.querySelector(".temp");
const windSpeed = document.querySelector(".wind-speed");
const humidity = document.querySelector(".humidity");
const pressure = document.querySelector(".Pressure");

const descriptionText = document.querySelector('.description-text');
const date = document.querySelector(".date");
const descriptionIcon = document.querySelector(".descriptionI")

fetchWeatherdata("Preston");

function updateWeatherUI(data) {
    
    cityElement.textContent = data[0].city;
    temperature.textContent = `${Math.round(data[0].temperature)}°C`;
    windSpeed.textContent = `${data[0].wind}km/hr`;
    humidity.textContent = `${data[0].humidity}%`;
    pressure.textContent = `${data[0].pressure}atm`;
    descriptionText.textContent = data[0].weatherDescription;
    const currentDate = new Date();
    date.textContent = currentDate.toDateString();
    console.log

}
const formElement = document.querySelector(".search-form");
const inputElement = document.querySelector('.city-input')

formElement.addEventListener("submit",function(e){
    e.preventDefault();

    const city = inputElement.value;
    if(city !==""){
        fetchWeatherdata(city);
        inputElement.value = "";
    }

});
localStorage.setItem("City","Temperature","Windspped","Humidity","Pressure");
