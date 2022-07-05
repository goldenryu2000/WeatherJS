class Weather {
  constructor(city, state) {
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&appid=215be5cb34c252644dc6041eb9458b21`
    );
    const resData = await response.json();
    return resData;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }

  async getCityList(city) {
    const response =
      await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=215be5cb34c252644dc6041eb9458b21
        `);
    const resData = await response.json();
    console.log(resData);
    return resData;
  }
}
