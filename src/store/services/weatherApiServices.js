

export const fetchLocationsService = (place) => {
  return fetch(`https://api.openweathermap.org/data/2.5/find?q=${place}&type=like&sort=population&units=metric&cnt=7&appid=715ac60004286c422cbbbf1d407f9a12`)
      .then((response)=> response.json())
}

export const fetchForecastService = (id) => {
  return fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=715ac60004286c422cbbbf1d407f9a12`).then(res =>{
    return (res.json())})
}