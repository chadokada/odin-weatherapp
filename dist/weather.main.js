/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
const city = 'Honolulu';

async function getBackground(city){
  const searchQuery = `https://pixabay.com/api/?key=`+
    `27534551-f4bb95d2309e17da5e837a0bf&`+`q=${city}`+`&image_type=photo`+
    `&orientation=horizontal&min_width=7052`;
  const response = await fetch(searchQuery, {mode: 'cors'});
  const imgData = await response.json();
  console.log(imgData.hits[0].largeImageURL);

  const backgroundImg = document.querySelector('.background-img');
  backgroundImg.src = imgData.hits[0].largeImageURL;
}

getBackground(city);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBLCtDQUErQyxLQUFLO0FBQ3BEO0FBQ0EsNkNBQTZDLGFBQWE7QUFDMUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJhcHAvLi9zcmMvd2VhdGhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjaXR5ID0gJ0hvbm9sdWx1JztcblxuYXN5bmMgZnVuY3Rpb24gZ2V0QmFja2dyb3VuZChjaXR5KXtcbiAgY29uc3Qgc2VhcmNoUXVlcnkgPSBgaHR0cHM6Ly9waXhhYmF5LmNvbS9hcGkvP2tleT1gK1xuICAgIGAyNzUzNDU1MS1mNGJiOTVkMjMwOWUxN2RhNWU4MzdhMGJmJmArYHE9JHtjaXR5fWArYCZpbWFnZV90eXBlPXBob3RvYCtcbiAgICBgJm9yaWVudGF0aW9uPWhvcml6b250YWwmbWluX3dpZHRoPTcwNTJgO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHNlYXJjaFF1ZXJ5LCB7bW9kZTogJ2NvcnMnfSk7XG4gIGNvbnN0IGltZ0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKGltZ0RhdGEuaGl0c1swXS5sYXJnZUltYWdlVVJMKTtcblxuICBjb25zdCBiYWNrZ3JvdW5kSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQtaW1nJyk7XG4gIGJhY2tncm91bmRJbWcuc3JjID0gaW1nRGF0YS5oaXRzWzBdLmxhcmdlSW1hZ2VVUkw7XG59XG5cbmdldEJhY2tncm91bmQoY2l0eSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9