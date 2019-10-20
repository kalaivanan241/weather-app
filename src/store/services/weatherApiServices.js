import { url, units, key } from "./../../configs/config";

export const fetchLocationsService = place => {
  return fetch(
    `${url}/find?q=${place}&type=like&sort=population&units=${units}&cnt=7&appid=${key}`
  ).then(response => response.json());
};

export const fetchForecastService = id => {
  return fetch(`${url}/forecast?id=${id}&units=${units}&appid=${key}`).then(
    res => {
      return res.json();
    }
  );
};
