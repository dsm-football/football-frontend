import axios from "axios";

export const getWeather = (url: string) => {
  axios
    .get(url)
    .then((response: any) => {
      console.log(response);
    })
    .catch((e) => {
      console.error(e);
    });
};
