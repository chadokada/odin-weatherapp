import {format, fromUnixTime} from 'date-fns';

async function getBackground(city){
  const searchQuery = `https://pixabay.com/api/?key=`+
    `27534551-f4bb95d2309e17da5e837a0bf&`+`q=${city}`+`&image_type=photo`+
    `&orientation=horizontal&min_width=7052`;
  const response = await fetch(searchQuery, {mode: 'cors'});
  //add error handling
  
  const imgData = await response.json();

  const backgroundImg = document.querySelector('.background-img');
  backgroundImg.src = imgData.hits[0].largeImageURL;
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
      response.status == 404 ? console.log('City not found'):
        console.log('Some other error happened...');
    }
  } catch(error) {
    console.log(error);
  }
}

function getUnits(temp){
  let unit;
  if (temp.toLowerCase() == 'f') {
    unit = 'imperial';
  } else if (temp.toLowerCase() == 'c') {
    unit = 'metric';
  }
  return unit;
}

async function getForecastCall(city, temp='f'){
  const coord = await getCoordinates(city);
  const unit = getUnits(temp);
  const apiCall = `https://api.openweathermap.org/data/2.5/onecall?`+
    `lat=${coord.lat}&lon=${coord.lon}&units=${unit}&exclude=hourly,minutely`+
    `&appid=`+`df7eff60300fed02068626ac4dec5328`;
  return apiCall;
}

export async function getWeatherData(city, temp='f'){ //rename more
  try {
    const apiCall = await getForecastCall(city, temp);
    const response = await fetch(apiCall, {mode: 'cors'});
    const weatherData = await response.json();
    //console.log(weatherData); //delete when done
    return weatherData;
  } catch(error) {
    console.log(error);
  }
}





