import clearSrc from '../images/clear.png';
import atmosphereSrc from '../images/atmosphere.png';
import cloudsSrc from '../images/clouds.png';
import drizzleSrc from '../images/drizzle.png';
import rainSrc from '../images/rain.png';
import thunderstormSrc from '../images/thunderstorm.png';
import {format, fromUnixTime} from 'date-fns';


function getTempUnit(unit){
  let tempUnit;
  if (unit.toLowerCase() == 'imperial') {
    tempUnit = 'f';
  } else if (unit.toLowerCase() == 'metric') {
    tempUnit = 'c';
  }
  return tempUnit;
}

export function formatTemp(temp, unit = 'imperial'){
  // Returns temp rounded and as string
  const unitStr = '°' 
  const tempUnit = getTempUnit(unit).toUpperCase();

  return Math.round(temp).toString() + '°' + tempUnit;
}

export function formatPercent(number){
  // Rounds number to nearest integer and displays string as %
  return Math.round(number).toString() + '%';
}

export function formatWindSpeed(windSpeed, unit){
  let speedUnit = '';
  if (unit == 'imperial'){
    speedUnit = 'mph';
  } else if (unit == 'metric'){
    speedUnit = 'm/s';
  }
  return Math.round(windSpeed).toString() + ' ' + speedUnit;
}

export function getWeatherImgSrc(weather){
  const weatherImgs = {
    'clear' : clearSrc,
    'atmosphere' : atmosphereSrc,
    'clouds': cloudsSrc,
    'drizzle' : drizzleSrc,
    'rain' : rainSrc,
    'thunderstorm' : thunderstormSrc
  }

  return weatherImgs[weather.toLowerCase()];
}

export function unixToLongDate(unixDate){
  const date = fromUnixTime(unixDate);
  return format(date, 'PPPP p');
}

export function unixToMonthDate(unixDate){
  const date = fromUnixTime(unixDate);
  return format(date, 'MMM d');
}

export function unixToDay(unixDate){
  const date = fromUnixTime(unixDate);
  return format(date, 'EEEE');
}

export function toTitleCase(string){
  const strings = string.split(" ");
  let casedString = '';

  for (let i = 0; i < strings.length; i++){
    const str = strings[i]
    casedString = casedString + str[0].toUpperCase() + str.slice(1, str.length);
    i != strings.length - 1 ? casedString = casedString + ' ' : null
  }
  return casedString;
}

export function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
