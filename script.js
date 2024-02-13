let inp = document.querySelector("input");
let btn = document.querySelector("Button");
let icon = document.querySelector(".icon");
let WeatherData = document.querySelector(".Weather");
let temparature = document.querySelector(".temp");
let discription = document.querySelector(".desc");


// 0e47ff1fe0fb0e706b2dd1934302337c
//  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//  https://openweathermap.org/img/wn/${iconCode}.png


btn.addEventListener("click", () => {
    let city = inp.value
    getWeatherData(city)
})
const getWeatherData = async (city) => {

    const reponce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`0e47ff1fe0fb0e706b2dd1934302337c`}`)
   const data =await reponce.json()

   console.log(data)

   const weatherIcon= data.weather[0].icon
   icon.innerHTML = `<img src=${`https://openweathermap.org/img/wn/${weatherIcon}.png`} alt="weather-image">`

   const cityName= data.name
   const countryName= data.sys.country
   WeatherData.innerHTML = `${cityName} , ${countryName}`

   const tempData = data.main.temp - 273
   temparature.innerHTML = `${tempData.toFixed(2)} °C`

   const weatherDesc = data.weather[0].description
   discription.innerHTML = `${weatherDesc}`



}