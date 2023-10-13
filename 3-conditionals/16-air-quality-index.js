// Air Quality Index 💨
// Codédex
'use strict'
//used the switch case instead of if else to make a cleaner code
const aqi = 45;
let airQuality;

switch (true) {
  case (aqi >= 0 && aqi <= 50):
    airQuality = "Good";
    break;
  case (aqi >= 51 && aqi <= 100):
    airQuality = "Moderate";
    break;
  case (aqi >= 101 && aqi <= 150):
    airQuality = "Unhealthy (Sensitive Groups)";
    break;
  case (aqi >= 151 && aqi <= 200):
    airQuality = "Unhealthy";
    break;
  case (aqi >= 201 && aqi <= 300):
    airQuality = "Very Unhealthy";
    break;
  default:
    airQuality = "Hazardous";
    break;
}

console.log(airQuality);
