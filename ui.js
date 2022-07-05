class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelslike = document.getElementById("w-feelslike");
    this.mintemp = document.getElementById("w-mintemp");
    this.maxtemp = document.getElementById("w-maxtemp");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = weather.main.temp;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.feelslike.textContent = `Feels Like: ${weather.main.feels_like}`;
    this.mintemp.textContent = `Min. Temp: ${weather.main.temp_min}`;
    this.maxtemp.textContent = `Max. Temp: ${weather.main.temp_max}`;
  }

  getDataList(cityList) {
    let output = "";
    cityList.forEach(function (city) {
      output += `<option value="${city.name}, ${city.country}">`;
    });

    document.getElementById("cityList").innerHTML = output;
  }
}
