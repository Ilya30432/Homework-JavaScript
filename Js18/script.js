const wrapper = document.querySelector('.wrapper');
const img = document.querySelector('img');
fetch("http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
.then(response => response.json())
.then(weatherElem => { 
    const divElem = document.createElement('div');
    divElem.textContent = `Город: ${weatherElem.name}
     Температура:${weatherElem.main.temp}
     Давление:${weatherElem.main.pressure}
     Описание:${weatherElem.weather[0].description}
     Влажность:${weatherElem.main.humidity}
     Скорость:${weatherElem.wind.speed}
     Направление в градусах:${weatherElem.wind.deg}`
     const icon = weatherElem.weather[0].icon
     img.setAttribute('src',`http://openweathermap.org/img/w/${icon}.png`)
    wrapper.appendChild(divElem)
}
)