"use strict";

var canvas = undefined;
var canvasContext = undefined;


function start() {
    mainLoop();
}

document.addEventListener("DOMContentLoaded", start);

function calculate(){
    const input = document.getElementById("weight");
    const inputValue = input.value;

    //weight is measured by weight * ratio of the planet to Earth gravity
    const sunWeight = (2707/100) * inputValue;
    const mercuryWeight = (38/100) * inputValue;
    const venusWeight = (91/100) * inputValue;
    const moonWeight = (16.6/100) * inputValue;
    const marsWeight = (38/100) * inputValue;
    const jupiterWeight = (234/100) * inputValue;
    const saturnWeight = (106/100) * inputValue;
    const uranusWeight = (92/100) * inputValue;
    const neptuneWeight = (119/100) * inputValue;
    const plutoWeight = (6/100) * inputValue;


    alert(
    "Your weight on the sun is " + sunWeight + " pounds."  
    + "\n" +"Your weight on the moon is " + moonWeight + " pounds." 
    + "\n" + "Your weight on Mercury is " + mercuryWeight + " pounds." 
    + "\n" +"Your weight on Venus is " + venusWeight + " pounds." 
    + "\n" +"Your weight on Mars is " + marsWeight + " pounds." 
    + "\n" +"Your weight on Jupiter is " + jupiterWeight + " pounds."
    + "\n" +"Your weight on Saturn is " + saturnWeight + " pounds."
    + "\n" +"Your weight on Uranus is " + uranusWeight + " pounds."
    + "\n" + "Your weight on Neptune is " + neptuneWeight + " pounds."
    + "\n" +"Your weight on Pluto is " + plutoWeight + " pounds.");
}

function mainLoop() {
    //draw the background image on our canvas
    canvas = document.getElementById("mycanvas");
    canvasContext = canvas.getContext("2d");
    const img = document.getElementById("planet-bg");
    canvasContext.drawImage(img, 0, 0, canvas.width, canvas.height);
  
    window.setTimeout(mainLoop, 1000 / 60);
    // ^ call the function mainLoop every (1,000/60 = 16.6 milliseconds in this case)
}
  