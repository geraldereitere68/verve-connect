/* 
Filename: complex_code.js
Description: This code demonstrates a complex implementation of a weather application using AJAX and API calls.
*/

// Define global variables
const API_KEY = 'your_api_key_here';
const cities = ['London', 'New York', 'Tokyo', 'Sydney'];
let weatherData = [];

// Function to perform AJAX request and fetch weather data for a city
function fetchWeather(city) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Error fetching weather data');
        }
      }
    };
    xhr.send();
  });
}

// Fetch weather data for all cities
async function fetchWeatherData() {
  try {
    for (const city of cities) {
      const data = await fetchWeather(city);
      weatherData.push(data);
    }
    displayWeatherData();
  } catch (error) {
    console.error(error);
  }
}

// Function to display weather data on the webpage
function displayWeatherData() {
  const container = document.getElementById('weather-container');
  for (const data of weatherData) {
    const cityContainer = document.createElement('div');
    cityContainer.className = 'city-container';

    const cityName = document.createElement('h2');
    cityName.textContent = data.location.name;

    const temperature = document.createElement('p');
    temperature.textContent = `Temperature: ${data.current.temp_c}°C`;

    const weatherCondition = document.createElement('p');
    weatherCondition.textContent = `Condition: ${data.current.condition.text}`;

    cityContainer.appendChild(cityName);
    cityContainer.appendChild(temperature);
    cityContainer.appendChild(weatherCondition);
    container.appendChild(cityContainer);
  }
}

// Initialize the application
fetchWeatherData();