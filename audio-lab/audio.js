"use strict";

var button = document.getElementById("pause");
var x;

function playAudio(color) {
  switch (color) {
    case "pink":
    case "red":
    case "orange":
    case "yellow":
    case "green":
    case "blue":
      x = document.getElementById(color);
      if (x) {
        x.play();
      } else {
        console.log("No audio element found for color:", color);
      }
      break;
    default:
      console.log("No valid color chosen!");
  }
}

function pauseAudio() {
  if (x) {
    x.pause();
  }
}
