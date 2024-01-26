const convertToCelsius = function(tempF) {
  // (32°F − 32) × 5/9 = 0°C
  return Number.parseInt(((tempF - 32) * 5/9).toFixed(1));
};

const convertToFahrenheit = function(tempC) {
  return Number.parseInt(((5/9) * tempC + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
