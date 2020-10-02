# Weather App 🌦 (React Frontend) 

This app shows the weather of any desired location obtaining data from [WeatherApp API](https://github.com/silvergraphs/weatherapp-api).

The app shows:

- Temperature
- Pressure
- Humidity
- Maximum temperature
- Minimum temperature
- Location Map

Temperature data is shown in Metrics units (Celcius).

## Installation 🛠

Clone the repository, install dependencies, and create the `config.js` file (see Configuration section).

```
git clone https://github.com/silvergraphs/weatherapp-front.git
npm install
```

## Configuration 🔧

This app works by default with [Weather App API](https://github.com/silvergraphs/weatherapp-api) but you can change the API Url in the config.js file, it can work with [OpenWeatherMap](https://openweathermap.org/).

Also this app needs the Google API Key for Map component displaying.

You need to create the `config.js` file and edit.

```js
const config = {
  baseURL: "", // Leave blank to use WeatherApp API, or put OpenWeatherMap API URL here
  gmapsKey: "YOUR_API_KEY", // Google JavaScript API Key
};

export default config;
```

You may obtain the API key here:

- [Google Developer Console](https://console.developers.google.com/)

## Usage 🖱

For development

```
npm start
```

For production

```
npm run build
```

## Used Libraries 📂

I only used `react-google-maps` for Google Map component adapted to React.
