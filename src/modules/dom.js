import {getWeekForecast, getCurrentWeather} from './weather';



export function inputListener(){
  const cityInput = document.querySelector('#city-input');

  cityInput.addEventListener('keypress', (event) => {
    if (event.key == 'Enter'){
      getWeatherData(cityInput.value);
    }
  });
}