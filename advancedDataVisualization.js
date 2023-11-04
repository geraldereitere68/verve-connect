/*

Filename: advancedDataVisualization.js

This code demonstrates advanced data visualization using JavaScript.

*/

// Function to generate random data points
function generateDataPoint() {
  return Math.floor(Math.random() * 100);
}

// Array to store data points
let dataPoints = [];

// Generate 100 random data points
for (let i = 0; i < 100; i++) {
  dataPoints.push(generateDataPoint());
}

// Function to calculate average of data points
function calculateAverage() {
  let sum = 0;
  for (let i = 0; i < dataPoints.length; i++) {
    sum += dataPoints[i];
  }
  return sum / dataPoints.length;
}

// Calculate the average of data points
const average = calculateAverage();

// Function to calculate standard deviation of data points
function calculateStandardDeviation() {
  let sumOfDifferences = 0;
  for (let i = 0; i < dataPoints.length; i++) {
    sumOfDifferences += Math.pow(dataPoints[i] - average, 2);
  }
  return Math.sqrt(sumOfDifferences / dataPoints.length);
}

// Calculate the standard deviation of data points
const standardDeviation = calculateStandardDeviation();

// Function to create a bar chart
function createBarChart() {
  for (let i = 0; i < dataPoints.length; i++) {
    let bar = document.createElement("div");
    bar.style.height = dataPoints[i] + "px";
    bar.style.width = "20px";
    bar.style.backgroundColor = "blue";
    document.body.appendChild(bar);
  }
}

// Create a bar chart
createBarChart();

// Function to create a line chart
function createLineChart() {
  const canvas = document.createElement("canvas");
  canvas.width = dataPoints.length * 5;
  canvas.height = 300;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  ctx.strokeStyle = "red";
  ctx.lineWidth = 2;
  ctx.beginPath();

  for (let i = 0; i < dataPoints.length; i++) {
    ctx.lineTo(i * 5, canvas.height - dataPoints[i]);
  }

  ctx.stroke();
}

// Create a line chart
createLineChart();

// Function to create a scatter plot
function createScatterPlot() {
  const svgContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgContainer.setAttribute("width", "500");
  svgContainer.setAttribute("height", "500");
  document.body.appendChild(svgContainer);

  for (let i = 0; i < dataPoints.length; i++) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", i * 10);
    circle.setAttribute("cy", dataPoints[i]);
    circle.setAttribute("r", "5");
    circle.setAttribute("fill", "green");
    svgContainer.appendChild(circle);
  }
}

// Create a scatter plot
createScatterPlot();

// Function to create a pie chart
function createPieChart() {
  const svgContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgContainer.setAttribute("width", "500");
  svgContainer.setAttribute("height", "500");
  document.body.appendChild(svgContainer);

  let startAngle = 0;

  for (let i = 0; i < dataPoints.length; i++) {
    const sliceAngle = dataPoints[i] / dataPoints.length * 2 * Math.PI;

    const slice = document.createElementNS("http://www.w3.org/2000/svg", "path");
    slice.setAttribute(
      "d",
      `M250,250 L${250 + Math.cos(startAngle) * 200},${250 + Math.sin(startAngle) * 200} A200,200 0 ${sliceAngle > Math.PI ? "1" : "0"},1 ${250 + Math.cos(startAngle + sliceAngle) * 200},${250 + Math.sin(startAngle + sliceAngle) * 200} Z`
    );
    slice.setAttribute("fill", `hsl(${(i * 360) / dataPoints.length}, 100%, 50%)`);
    svgContainer.appendChild(slice);

    startAngle += sliceAngle;
  }
}

// Create a pie chart
createPieChart();