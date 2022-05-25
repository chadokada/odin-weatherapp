/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData)
/* harmony export */ });


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

async function getWeatherData(city, temp='f'){ //rename more
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






/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5tYWluLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjhDOztBQUU5QztBQUNBO0FBQ0EsK0NBQStDLEtBQUs7QUFDcEQ7QUFDQSw2Q0FBNkMsYUFBYTtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLEtBQUs7QUFDZDtBQUNBLCtDQUErQyxhQUFhO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVLE9BQU8sVUFBVSxTQUFTLEtBQUs7QUFDcEQ7QUFDQTtBQUNBOztBQUVPLCtDQUErQztBQUN0RDtBQUNBO0FBQ0EsMkNBQTJDLGFBQWE7QUFDeEQ7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4td2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7Zm9ybWF0LCBmcm9tVW5peFRpbWV9IGZyb20gJ2RhdGUtZm5zJztcblxuYXN5bmMgZnVuY3Rpb24gZ2V0QmFja2dyb3VuZChjaXR5KXtcbiAgY29uc3Qgc2VhcmNoUXVlcnkgPSBgaHR0cHM6Ly9waXhhYmF5LmNvbS9hcGkvP2tleT1gK1xuICAgIGAyNzUzNDU1MS1mNGJiOTVkMjMwOWUxN2RhNWU4MzdhMGJmJmArYHE9JHtjaXR5fWArYCZpbWFnZV90eXBlPXBob3RvYCtcbiAgICBgJm9yaWVudGF0aW9uPWhvcml6b250YWwmbWluX3dpZHRoPTcwNTJgO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHNlYXJjaFF1ZXJ5LCB7bW9kZTogJ2NvcnMnfSk7XG4gIC8vYWRkIGVycm9yIGhhbmRsaW5nXG4gIFxuICBjb25zdCBpbWdEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGNvbnN0IGJhY2tncm91bmRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2dyb3VuZC1pbWcnKTtcbiAgYmFja2dyb3VuZEltZy5zcmMgPSBpbWdEYXRhLmhpdHNbMF0ubGFyZ2VJbWFnZVVSTDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXMoY2l0eSl7XG4gIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2ArXG4gICAgYHE9JHtjaXR5fSZhcHBpZD1kZjdlZmY2MDMwMGZlZDAyMDY4NjI2YWM0ZGVjNTMyOGA7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzZWFyY2hRdWVyeSwge21vZGU6ICdjb3JzJ30pOyAgXG4gICAgaWYocmVzcG9uc2Uub2spe1xuICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gd2VhdGhlckRhdGEuY29vcmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3BvbnNlLnN0YXR1cyA9PSA0MDQgPyBjb25zb2xlLmxvZygnQ2l0eSBub3QgZm91bmQnKTpcbiAgICAgICAgY29uc29sZS5sb2coJ1NvbWUgb3RoZXIgZXJyb3IgaGFwcGVuZWQuLi4nKTtcbiAgICB9XG4gIH0gY2F0Y2goZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VW5pdHModGVtcCl7XG4gIGxldCB1bml0O1xuICBpZiAodGVtcC50b0xvd2VyQ2FzZSgpID09ICdmJykge1xuICAgIHVuaXQgPSAnaW1wZXJpYWwnO1xuICB9IGVsc2UgaWYgKHRlbXAudG9Mb3dlckNhc2UoKSA9PSAnYycpIHtcbiAgICB1bml0ID0gJ21ldHJpYyc7XG4gIH1cbiAgcmV0dXJuIHVuaXQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0Q2FsbChjaXR5LCB0ZW1wPSdmJyl7XG4gIGNvbnN0IGNvb3JkID0gYXdhaXQgZ2V0Q29vcmRpbmF0ZXMoY2l0eSk7XG4gIGNvbnN0IHVuaXQgPSBnZXRVbml0cyh0ZW1wKTtcbiAgY29uc3QgYXBpQ2FsbCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9gK1xuICAgIGBsYXQ9JHtjb29yZC5sYXR9Jmxvbj0ke2Nvb3JkLmxvbn0mdW5pdHM9JHt1bml0fSZleGNsdWRlPWhvdXJseSxtaW51dGVseWArXG4gICAgYCZhcHBpZD1gK2BkZjdlZmY2MDMwMGZlZDAyMDY4NjI2YWM0ZGVjNTMyOGA7XG4gIHJldHVybiBhcGlDYWxsO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoY2l0eSwgdGVtcD0nZicpeyAvL3JlbmFtZSBtb3JlXG4gIHRyeSB7XG4gICAgY29uc3QgYXBpQ2FsbCA9IGF3YWl0IGdldEZvcmVjYXN0Q2FsbChjaXR5LCB0ZW1wKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaUNhbGwsIHttb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAvL2NvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTsgLy9kZWxldGUgd2hlbiBkb25lXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9IGNhdGNoKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9