export function setCurrentCity(city){
  localStorage.setItem('currentCity', city);
}

export function getCurrentCity(){
  return localStorage.getItem('currentCity');
}

export function setUnit(unit){
  localStorage.setItem('unit', unit);
}

export function getUnit(){
  return localStorage.getItem('unit');
}