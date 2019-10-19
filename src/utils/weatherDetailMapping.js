export const buildCustomArray = ({ list }) => {
  const mappedForecast = list.map(forecast => {
    return {
      date: forecast.dt_txt.substr(0, 10),
      time: forecast.dt_txt.substr(11),
      temp: forecast.main.temp,
      temp_min: forecast.main.temp_min,
      temp_max: forecast.main.temp_max,
      humidity: forecast.main.humidity,
      condition: forecast.weather[0].description,
      icon: forecast.weather[0].icon,
      windDegree: forecast.wind.deg,
      windSpeed: forecast.wind.speed
    };
  });
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const mapped5DaysForecast = mappedForecast.reduce((mappedObj, forecast) => {
    if (!mappedObj[forecast.date]) {
      const forecastObj = {};
      mappedObj[forecast.date] = {};
      mappedObj[forecast.date]["forecast3hours"] = [forecast];
      mappedObj[forecast.date]["day"] = `${forecast.date}, ${
        days[new Date(forecast.date).getDay()]
      }`;
      mappedObj[forecast.date]["dayName"] = days[
        new Date(forecast.date).getDay()
      ].substr(0, 3);
      mappedObj[forecast.date]["wind"] = forecast.windSpeed;
      mappedObj[forecast.date]["condition"] = forecast.condition;
      mappedObj[forecast.date]["icon"] = forecast.icon;
      mappedObj[forecast.date]["temp_min"] = forecast.temp_min;
      mappedObj[forecast.date]["temp_max"] = forecast.temp_max;
      mappedObj[forecast.date]["humidity"] = forecast.humidity;
    } else {
      mappedObj[forecast.date]["forecast3hours"].push(forecast);
      mappedObj[forecast.date]["temp_min"] = Math.min(
        mappedObj[forecast.date]["temp_min"],
        forecast.temp_min
      );
      mappedObj[forecast.date]["temp_max"] = Math.max(
        mappedObj[forecast.date]["temp_max"],
        forecast.temp_max
      );
    }
    return mappedObj;
  }, {});

  return [...Object.values(mapped5DaysForecast)];
};
