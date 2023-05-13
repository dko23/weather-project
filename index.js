const inputElement = document.getElementById('city-input');
const submit = document.getElementById("submit");
const description = document.getElementById("des");
const city = document.getElementById("city");
const temperature = document.getElementById("temp");
const weatherImage = document.getElementById('weather-image')
const time=document.getElementById('time')

const place = inputElement.value;
submit.addEventListener("click", find)

function displayData(data) {
  city.textContent = `${data.name}` 
  temperature.textContent = `${data.main.temp} °C`
  description.textContent = `${data.weather[0].description}`
  const condition = data.weather[0].main.toLowerCase();
  const conditionToImage = {
    "clear": "https://openweathermap.org/img/wn/01d.png",
    "clouds": "https://openweathermap.org/img/wn/03d.png",
    "rain": "https://openweathermap.org/img/wn/09d.png",
    "thunderstorm": "https://openweathermap.org/img/wn/11d.png",
    "snow": "https://openweathermap.org/img/wn/13d.png",
    "mist": "https://openweathermap.org/img/wn/50d.png",
    'clear sky':"https://openweathermap.org/img/wn/01n.png"
  };
  weatherImage.src = conditionToImage[condition];
 
}

async function find() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputElement.value}&appid=020deefe8e3cbefe0cb25d0f18947a29&units=metric`);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    displayData(data)
    const now = new Date();
    const date = now.toDateString();
    time.textContent = date;

  } else {
    alert('Invalid input. Please try again.');
  }
}





// `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=020deefe8e3cbefe0cb25d0f18947a29&units=metric`
// https://api.openweathermap.org/data/2.5/weather?q=Kumasi&appid=020deefe8e3cbefe0cb25d0f18947a29&units=metric





// let result = document.getElementById("result");
// let searchBtn = document.getElementById("search-btn");
// let cityRef = document.getElementById("city");

// //Function to fetch weather details from api and display them
// let getWeather = () => {
//   let cityValue = cityRef.value;
//   //If input field is empty
//   if (cityValue.length == 0) {
//     result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
//   }
//   //If input field is NOT empty
//   else {
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
//     //Clear the input field
//     cityRef.value = "";
//     fetch(url)
//       .then((resp) => resp.json())
//       //If city name is valid
//       .then((data) => {
//         console.log(data);
//         console.log(data.weather[0].icon);
//         console.log(data.weather[0].main);
//         console.log(data.weather[0].description);
//         console.log(data.name);
//         console.log(data.main.temp_min);
//         console.log(data.main.temp_max);
//         result.innerHTML = `
//         <h2>${data.name}</h2>
//         <h4 class="weather">${data.weather[0].main}</h4>
//         <h4 class="desc">${data.weather[0].description}</h4>
//         <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
//         <h1>${data.main.temp} &#176;</h1>
//         <div class="temp-container">
//             <div>
//                 <h4 class="title">min</h4>
//                 <h4 class="temp">${data.main.temp_min}&#176;</h4>
//             </div>
//             <div>
//                 <h4 class="title">max</h4>
//                 <h4 class="temp">${data.main.temp_max}&#176;</h4>
//             </div>
//         </div>
//         `;
//       })
//       //If city name is NOT valid
//       .catch(() => {
//         result.innerHTML = `<h3 class="msg">City not found</h3>`;
//       });
//   }
// };
// searchBtn.addEventListener("click", getWeather);
// window.addEventListener("load", getWeather);





///////////////////Not Bad/////////////////////////////////
// async function find() {
//   try {
//     const reposnse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputElement.value}&appid=020deefe8e3cbefe0cb25d0f18947a29&units=metric`)
//   const data = await reposnse.json();
//   console.log (data)
//   } catch (error) {
//     alert(error);
//   }
// }
//////////////////////////////////////////////
// function find() {
//   fetch("https://api.openweathermap.org/data/2.5/weather?q=${`place`}&appid=020deefe8e3cbefe0cb25d0f18947a29&units=metric")
//   .then(response => response.json())
//   .then(displayData)
//   .catch(err => alert('error'));

// }