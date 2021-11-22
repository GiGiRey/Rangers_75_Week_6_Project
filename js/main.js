
// Set the form
const form = document.querySelector('#weatherDataForm')


// Get the data 

async function getData(city){
    let API_key = "bb77e8133e6749799c752a17cfba5853";
    let request = new Request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
    let result = await fetch(request);
    let response = await result.json();
    console.log(response)
    return response
}

// create Constants to hold DOM Elements
const DOM_Elements = {
    weather_list: '.weather-list',
}

// Creation of the Weather List HTML

const create_list = (id, name, temp, feels_like,iconmain, icon) => {
    const html = `<a href ="#"class="list-group-item list-group-item-action list-group-item-light"  id="${id}">${name} <li>${temp} </li><li>  ${feels_like}</li><li> ${main}</li><li>${icon}</li>`
    document.querySelector(DOM_Elements.weather_list).insertAdjacentHTML('beforeend', html)
}


const load_data = async (jsonData) => {
    const weather = await jsonData;
    console.log(jsonData);
    return jsonData 
}

// Function to Load Data and display HTML 

const nameDiv = document.getElementById("Name")
const tempDiv = document.getElementById("Temp")
const feelsDiv = document.getElementById("Feels_like")
const descDiv = document.getElementById("Desc")
const iconDiv = document.getElementById("Icon")


form.addEventListener('submit', async (event) =>{
    event.preventDefault();
    let city = event.path[0][0].value;
    let weatherData = await getData(city);
    console.log("from button click:", weatherData);
    // access specific bits
    console.log("Temp", weatherData)
    console.log("Desc", weatherData)
    tempDiv.innerHTML = kelvinToF(weatherData.main.temp)
    nameDiv.innerHTML = (weatherData.name)
    descDiv.innerHTML = (weatherData.weather[0].main)
    iconDiv.innerHTML = (weatherData.weather[0].icon)
    

    // ...etc
})

function kelvinToF(temp){
    return Math.round((temp - 273.15) * 9/5 + 32)
}

