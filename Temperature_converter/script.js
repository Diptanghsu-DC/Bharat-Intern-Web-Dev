function convertTemperature(type) {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = document.getElementById("fahrenheit").value;
    var kelvin = document.getElementById("kelvin").value;

    if (type === "celsius") {
      if (celsius !== "") {
        fahrenheit = (parseFloat(celsius) * 9 / 5) + 32;
        kelvin = parseFloat(celsius) + 273.15;
      } else {
        fahrenheit = "";
        kelvin = "";
      }
    } else if (type === "fahrenheit") {
      if (fahrenheit !== "") {
        celsius = (parseFloat(fahrenheit) - 32) * 5 / 9;
        kelvin = (parseFloat(fahrenheit) + 459.67) * 5 / 9;
      } else {
        celsius = "";
        kelvin = "";
      }
    } else if (type === "kelvin") {
      if (kelvin !== "") {
        celsius = parseFloat(kelvin) - 273.15;
        fahrenheit = (parseFloat(kelvin) * 9 / 5) - 459.67;
      } else {
        celsius = "";
        fahrenheit = "";
      }
    }

    document.getElementById("celsius").value = celsius;
    document.getElementById("fahrenheit").value = fahrenheit;
    document.getElementById("kelvin").value = kelvin;

    document.getElementById("celsiusOutput").textContent = celsius !== "" ? celsius + " °C" : "";
    document.getElementById("fahrenheitOutput").textContent = fahrenheit !== "" ? fahrenheit + " °F" : "";
    document.getElementById("kelvinOutput").textContent = kelvin !== "" ? kelvin + " K" : "";
  }