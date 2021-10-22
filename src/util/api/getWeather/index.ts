import axios from "axios";

export const getWeather = (lat: number, lon: number) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}.44&lon=${lon}&exclude=hourly,minutely,alerts&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
    .then((response: any) => {
      return response;
    })
    .catch((e) => {
      return e;
    });
};
