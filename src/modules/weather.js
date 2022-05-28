import {format, fromUnixTime} from 'date-fns';
import { getRndInteger } from './utils';

export async function getBackground(city){
  const searchQuery = `https://pixabay.com/api/?key=`+
  `27534551-f4bb95d2309e17da5e837a0bf&`+`q=${city}+landmark`+`&image_type=photo`+
  `&orientation=horizontal`;

  const response = await fetch(searchQuery, {mode: 'cors'});
  //add error handling  
  const imgData = await response.json();
  const random = getRndInteger(0, imgData.hits.length)
  return imgData.hits[random].largeImageURL;

}

async function getCoordinates(city){
  const searchQuery = `https://api.openweathermap.org/data/2.5/weather?`+
    `q=${city}&appid=df7eff60300fed02068626ac4dec5328`;
  try {
    const response = await fetch(searchQuery, {mode: 'cors'});  
    if(response.ok){
      const weatherData = await response.json();
      return weatherData.coord;
    } else {
      response.status == 404 ? alert('City not found'):
        console.log('Some other error happened...');
    }
  } catch(error) {
    console.log(error);
  }
}

async function getForecastCall(city, unit='imperial'){
  const coord = await getCoordinates(city);
  const apiCall = `https://api.openweathermap.org/data/2.5/onecall?`+
    `lat=${coord.lat}&lon=${coord.lon}&units=${unit}&exclude=hourly,minutely`+
    `&appid=`+`df7eff60300fed02068626ac4dec5328`;
  return apiCall;
}

export async function getWeatherData(city, unit='imperial'){ //rename more
  try {
    const apiCall = await getForecastCall(city, unit);
    const response = await fetch(apiCall, {mode: 'cors'});
    const weatherData = await response.json();
    return weatherData;
  } catch(error) {
    console.log(error);
  }
}





