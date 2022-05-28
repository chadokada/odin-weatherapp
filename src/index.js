import './style.css';
import * as DOM from './modules/dom';
import * as weather from './modules/weather';
import * as utils from './modules/utils';
import * as storage from './modules/storage';


function inputListener(){
  const cityInput = document.querySelector('#city-input');
  cityInput.addEventListener('keypress', (event) => {
    const unit = storage.getUnit();
    if (event.key == 'Enter' && cityInput.value != ''){
      DOM.loadWeather(cityInput.value, unit)
      DOM.setBackgroundImage(cityInput.value)
      cityInput.value = '';
    }
  });

  const searchEnter = document.querySelector('#search-enter');
  searchEnter.addEventListener('click', () => {
    const unit = storage.getUnit();
    if (cityInput.value != ''){
      DOM.loadWeather(cityInput.value, unit);
      DOM.setBackgroundImage(cityInput.value);
      cityInput.value = '';
    }
  })

  const imperial = document.querySelector('#imperial');
  imperial.addEventListener('click', (event) => {
    DOM.changeUnit(event);
    storage.setUnit('imperial');
  })

  const metric = document.querySelector('#metric');
  metric.addEventListener('click', (event) => {
    DOM.changeUnit(event);
    storage.setUnit('metric')
  })
}

function loadPage(){
  if (storage.getCurrentCity()  == null){
    const defaultCity = 'Honolulu';
    const defaultUnit = 'imperial';
    storage.setCurrentCity(defaultCity);
    storage.setUnit(defaultUnit);
    DOM.loadWeather(defaultCity, defaultUnit);
    DOM.setBackgroundImage(defaultCity);
    DOM.highlightCurrentUnit();
  } else {
    const currentCity = storage.getCurrentCity();
    const currentUnit = storage.getUnit();;
    DOM.loadWeather(currentCity, currentUnit);
    DOM.setBackgroundImage(currentCity);
    DOM.highlightCurrentUnit();
  }

  inputListener();
}

loadPage();