import axios from "axios";

let LatitudeLongitudeCityDic: any = {};
LatitudeLongitudeCityDic["서울"] = {
  latitude: 37.56667,
  longitude: 126.97806,
};
LatitudeLongitudeCityDic["부산"] = {
  latitude: 35.17944,
  longitude: 129.07556,
};
LatitudeLongitudeCityDic["대구"] = {
  latitude: 35.87222,
  longitude: 128.6025,
};
LatitudeLongitudeCityDic["인천"] = {
  latitude: 37.45639,
  longitude: 126.70528,
};
LatitudeLongitudeCityDic["광주"] = {
  latitude: 35.15972,
  longitude: 126.85306,
};
LatitudeLongitudeCityDic["대전"] = {
  latitude: 36.35111,
  longitude: 127.385,
};
LatitudeLongitudeCityDic["울산"] = {
  latitude: 35.53889,
  longitude: 129.31667,
};
LatitudeLongitudeCityDic["세종"] = {
  latitude: 36.4875,
  longitude: 127.28167,
};
LatitudeLongitudeCityDic["경기"] = {
  latitude: 37.567167,
  longitude: 127.190292,
};
LatitudeLongitudeCityDic["강원"] = {
  latitude: 37.555837,
  longitude: 128.209315,
};
LatitudeLongitudeCityDic["충북"] = {
  latitude: 36.628503,
  longitude: 127.929344,
};
LatitudeLongitudeCityDic["충남"] = {
  latitude: 36.557229,
  longitude: 126.779757,
};
LatitudeLongitudeCityDic["전북"] = {
  latitude: 35.716705,
  longitude: 127.144185,
};
LatitudeLongitudeCityDic["전남"] = {
  latitude: 34.8194,
  longitude: 126.893113,
};
LatitudeLongitudeCityDic["경북"] = {
  latitude: 36.248647,
  longitude: 128.664734,
};
LatitudeLongitudeCityDic["경남"] = {
  latitude: 35.259787,
  longitude: 128.664734,
};
LatitudeLongitudeCityDic["제주"] = {
  latitude: 33.364805,
  longitude: 126.542671,
};

export const getWeather = async (area: string) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${LatitudeLongitudeCityDic[area].latitude}&lon=${LatitudeLongitudeCityDic[area].longitude}&exclude=hourly,minutely,alerts&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=kr`
    );
    return response.data;
  } catch (e) {
    throw e;
  }
};
