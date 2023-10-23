/* Filename: complex_web_app.js
   Content: Complex Web Application with multiple functionalities and interactivity */

// Global variables
var userName = "";
var userAge = 0;
var userCity = "";

// Function to gather user information
function getUserInfo() {
  // Prompt for user name
  userName = prompt("Please enter your name:");

  // Prompt for user age
  userAge = parseInt(prompt("Please enter your age:"));

  // Prompt for user city
  userCity = prompt("Please enter your city:");
}

// Function to validate user's age
function validateAge() {
  if (userAge < 18) {
    alert("You must be at least 18 years old to access this website.");
    return false;
  } else {
    return true;
  }
}

// Function to display welcome message
function displayWelcomeMessage() {
  document.write("Welcome, " + userName + "!");
}

// Function to display user's age in different time units
function displayAgeInTimeUnits() {
  var days = userAge * 365;
  var hours = days * 24;
  var minutes = hours * 60;
  var seconds = minutes * 60;

  document.write("<br><br>Your age in different time units:");
  document.write("<br>Days: " + days);
  document.write("<br>Hours: " + hours);
  document.write("<br>Minutes: " + minutes);
  document.write("<br>Seconds: " + seconds);
}

// Function to display user's city weather using an API
function displayWeather() {
  var apiUrl = "https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=" + userCity;

  // Fetch API data and display weather details
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      document.write("<br><br>Weather in " + userCity + ":");
      document.write("<br>Temperature: " + data.current.temp_c + "°C");
      document.write("<br>Condition: " + data.current.condition.text);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Main function
function main() {
  getUserInfo();
  if (validateAge()) {
    displayWelcomeMessage();
    displayAgeInTimeUnits();
    displayWeather();
  }
}

// Execute the main function
main();