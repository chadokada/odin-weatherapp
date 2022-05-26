import * as utils from './utils';
import {format, fromUnixTime} from 'date-fns';

export function displayCityName(cityName){
  const city = document.querySelector('.city');
  city.textContent = cityName; 
}

export function setBackgroundImage(imgUrl){
  const body = document.querySelector('body');
  body.style.backgroundImage = `url(${imgUrl})`
}

export function displayCurrentWeather(data, unit){
  
  //console.log(data)

  const currentDate = document.querySelector('.current-date');
  currentDate.textContent = utils.unixToLongDate(data.current['dt']);

  const currTemp = document.querySelector('.current-temp');
  currTemp.textContent = utils.formatTemp(data.current.temp, unit);

  const currConditions = document.querySelector('.current-conditions');
  const currImg = document.querySelector('.current-img');
  const weather = data.current.weather[0]['main'];
  currConditions.textContent = weather
  currImg.src = utils.getWeatherImgSrc(weather)

  const currHigh = document.querySelector('.current-high');
  currHigh.textContent = utils.formatTemp(data.daily[0].temp['max'], unit);

  const currLow = document.querySelector('.current-low');
  currLow.textContent = utils.formatTemp(data.daily[0].temp['min'], unit);

  const feelsLike = document.querySelector('.feels-like');
  feelsLike.textContent = utils.formatTemp(data.current.feels_like, unit);

  const precip = document.querySelector('.precipitation');
  precip.textContent = utils.formatPercent(data.daily[0].pop * 100);

  const humidity = document.querySelector('.humidity');
  humidity.textContent = utils.formatPercent(data.current.humidity);

  const wind = document.querySelector('.wind');
  wind.textContent = utils.formatWindSpeed(data.current.wind_speed, unit);

}

export function displayWeeklyWeather(data, unit){
  for (let i = 1; i < 8; i ++){
    const dayData = data[i];
    const day = document.querySelector(`#day${i}`);
    const dayDivs = day.children;
    dayDivs[0].src = utils.getWeatherImgSrc(dayData.weather[0]['main']);
    dayDivs[1].textContent = utils.unixToMonthDate(dayData['dt'])
    dayDivs[2].textContent = utils.unixToDay(dayData['dt'])
    dayDivs[3].textContent = utils.formatTemp(dayData.temp['max'], unit)
    dayDivs[4].textContent = utils.formatTemp(dayData.temp['min'], unit)
  }
}