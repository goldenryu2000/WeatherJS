// Get weather js
const weather = new Weather("Mumbai", "IN");
// get ui js
const ui = new UI();
// call getweather when page loads
document.addEventListener("DOMContentLoaded", getWeather);

// Change Location event
document.getElementById("w-change-btn").addEventListener("click", () => {
  let values = document.getElementById("city").value;
  values = values.split(",");
  console.log(values);
  // change location
  weather.changeLocation(values[0], values[1]);

  // Get weather again
  getWeather();

  // close modal (using jquery)
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => ui.paint(results))
    .catch((err) => console.log(err));
}

const city = document.getElementById("city");
console.log(city);
city.addEventListener("keyup", (e) => {
  if (e.target.value !== "") {
    let input = e.target.value;
    weather.getCityList(input).then((cityList) => ui.getDataList(cityList));
  }
});
