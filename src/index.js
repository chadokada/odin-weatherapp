import './style.css';
import * as DOM from './modules/dom';
import * as weather from './modules/weather';
import * as utils from './modules/utils';


const defaultCity = 'Honolulu';

async function loadWeather(city, unit='f'){
  try {
    const weatherData = await weather.getWeatherData(city, unit);
    DOM.displayCurrentWeather(weatherData, unit);
    DOM.displayWeeklyWeather(weatherData.daily, unit);
    DOM.displayCityName(utils.toTitleCase(city));
    const imgUrl = await weather.getBackground(city);
    DOM.setBackgroundImage(imgUrl);
  } catch (error) {
    console.log(error);
  }

}

function inputListener(){
  const cityInput = document.querySelector('#city-input');

  cityInput.addEventListener('keypress', (event) => {
    if (event.key == 'Enter' && cityInput.value != ''){
      loadWeather(cityInput.value)
      cityInput.value = '';
    }
  });
}

inputListener();
loadWeather(defaultCity);

