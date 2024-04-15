"use strict";

var canvas = undefined;
var canvasContext = undefined;
var canvas2 = undefined;
var canvasContext2 = undefined;

function start() {
  canvas = document.getElementById("myChart");
  canvasContext = canvas.getContext("2d");
  canvas2 = document.getElementById("myChart2");
  canvasContext2 = canvas2.getContext("2d");
  mainLoop();
}

document.addEventListener("DOMContentLoaded", start);

// Horizontal Bar chart
function draw() {
  new Chart(document.getElementById("myChart"), {
    type: "bar",
    data: {
      labels: ["Brooklyn", "Bronx", "Queens", "Manhattan", "Staten Island"],
      datasets: [
        {
          label: "(Millions)",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#ff7600",
            "#E00101",
          ],
          data: [2.6, 1.3, 2.1, 1.6, 0.5],
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Population of NYC Boroughs in 2024",
        },
      },
      indexAxis: "y",
    },
  });

  //Doughnut Chart
  new Chart(document.getElementById("myChart2"), {
    type: "doughnut",
    data: {
      labels: [
        "Blue",
        "Pink",
        "Black",
        "Red",
        "Purple",
        "Green",
        "Orange",
        "Brown",
        "Indigo",
        "Yellow",
      ],
      datasets: [
        {
          label: "Estimated People",
          data: [300, 900, 100, 800, 200, 130, 700, 620, 100, 350],
          backgroundColor: [
            "lightblue",
            "pink",
            "black",
            "red",
            "purple",
            "green",
            "#F8873B",
            "#5B3E32",
            "indigo",
            "#F7D974",
          ],
          hoverOffset: 4,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Survey of Top 10 Favorite Colors",
        },
      },
    },
  });
}

function mainLoop() {
  draw();
  window.setTimeout(mainLoop, 1000 / 60);
}
