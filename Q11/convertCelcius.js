function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  let celsius = 25;
  let fahrenheit = celsiusToFahrenheit(celsius);
  
  console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
  