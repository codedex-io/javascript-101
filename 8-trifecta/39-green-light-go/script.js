// Green Light Go! 🚦
// Codédex

let lightIndex = 0;

function changeLight() {
  const redLight = document.getElementById("red");
  const yellowLight = document.getElementById("yellow");
  const greenLight = document.getElementById("green");

  if (lightIndex === 0) {
    redLight.style.backgroundColor = "#ff0000";
    yellowLight.style.backgroundColor = "";
    greenLight.style.backgroundColor = "";
  } else if (lightIndex === 1) {
    yellowLight.style.backgroundColor = "#ffff00";
    redLight.style.backgroundColor = "";
    greenLight.style.backgroundColor = "";
  } else {
    greenLight.style.backgroundColor = "#00ff00";
    redLight.style.backgroundColor = "";
    yellowLight.style.backgroundColor = "";
  }

  lightIndex = (lightIndex + 1) % 3;
}