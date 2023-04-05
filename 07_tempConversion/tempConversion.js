const convertToCelsius = function(fahrenheitExternal) {
  var celsius;

  celsius = (fahrenheitExternal - 32) * .5556;
  return parseFloat(celsius.toFixed(1));
  
};

const convertToFahrenheit = function(celsiusExternal) {
  var  fahrenheit ;
  fahrenheit = (celsiusExternal *  1.8) + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
