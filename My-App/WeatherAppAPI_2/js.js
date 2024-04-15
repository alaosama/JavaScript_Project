let currCity = "London";
let units = "metric";

let city = document.querySelector(".weather__city");
let datetime = document.querySelector(".weather__datetime");
let weather__forecast = document.querySelector(".weather__forecast");
let weather__temperature = document.querySelector(".weather__temperature");
let weather__icon = document.querySelector(".weather__icon");
let weather__minmax = document.querySelector(".weather__minmax");
let weather__realfeel = document.querySelector(".weather__realfeel");
let weather__humidity = document.querySelector(".weather__humidity");
let weather__wind = document.querySelector(".weather__wind");
let weather__pressure = document.querySelector(".weather__pressure");

// Search

document.querySelector("weather__search").addEventListener('submit', e => {
    let search = document.querySelector("weather__searchform");

    // prevent default action
    e.preventDefault();

    // change current city
    currCity = search.value;

    // get weather forecast
    getWeather();

    // clear form
    search.value = "";
})

// units
document.querySelector(".weather_unit_celsius").addEventListener('click', () => {
    if(units !== "metric") {
        // Change to metric
        units = "metric"

        // get weather forecast
        getWeather()
    }
})
document.querySelector(".weather_unit_farenheit").addEventListener('click', () => {
    if(units !== "imperial"){
        // Change to imperial
        units = "imperial";

        // Get weather forecast
        getWeather()
    }
})

function convertTimeStamp(timestamp, timezone){
    const convertTimezone = timezone / 3600; // Convert Seconds To Hours

    const date = new Date(timestamp * 1000);

    const options = {
        weekday: "Long",
        day: "humeric",
        month: "Long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeEone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}$(Math.abs(convertTimezone))`,
        hour12: true,
    }
    
    return date.toLocaleDateString("en-US", options)
}
