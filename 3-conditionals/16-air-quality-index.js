// Air Quality Index 💨
// Codédex

const api = 45;

if (aqi >= 0 && aqi <= 33) {
  console.log("Very Good");
} else if (aqi >= 34 && aqi <= 66) {
  console.log("Good");
} else if (aqi >= 67 && aqi <= 99) {
  console.log("Fair");
} else if (aqi >= 100 && aqi <= 149) {
  console.log("Poor");
} else if (aqi >= 150 && aqi <= 200) {
  console.log("Very Poor");
} else if (aqi > 200) {
  console.log("Hazardous");
} else {
  console.log("Invalid reading");
}