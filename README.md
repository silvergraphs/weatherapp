# Weather App

This app shows the weather of an static ubication (London) from the OpenWeatherMap API.

The app shows:

- Temperature
- Pressure
- Humidity
- Maximum temperature
- Minimum temperature
- Location Map

Temperature data is shown in Metrics units (Celcius).

## Installation

Clone the repository, install dependencies, and change API keys in `credentials.js` (see Credentials section).

```
git clone https://github.com/silvergraphs/weatherapp.git
npm install
```

## Credentials

This app needs two API keys to work, OpenWeatherMap for weather data and Google Maps for map displaying.

You need to create the `credentials.js` file and add them.

```js
export default {
  appId: "YOUR_API_KEY", // OpenWeatherMap API Key
  googleApiKey: "YOUR_API_KEY", // Google JavaScript API Key
};
```

You may obtain the API keys here:

- [OpenWeatherMap](https://home.openweathermap.org/api_keys)
- [Google Developer Console](https://console.developers.google.com/)

## Usage

For development

```
npm start
```

For production

```
npm run build
```

## Used Libraries

I only used `react-google-maps` for Google Map component adapted to React.
