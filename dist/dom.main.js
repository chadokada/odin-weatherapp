/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    `lat=${coord.lat}&lon=${coord.lon}&units=${unit}&exclude=hourly&appid=`+
    `df7eff60300fed02068626ac4dec5328`;
  return apiCall;
}

async function getWeatherData(city){ //rename more
  try {
    const apiCall = await getForecastCall(city);
    const response = await fetch(apiCall, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData); //delete when done
    return weatherData;
  } catch(error) {
    console.log(error);
  }
}







/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputListener": () => (/* binding */ inputListener)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/modules/weather.js");




function inputListener(){
  const cityInput = document.querySelector('#city-input');

  cityInput.addEventListener('keypress', (event) => {
    if (event.key == 'Enter'){
      getWeatherData(cityInput.value);
    }
  });
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7O0FBRTlDO0FBQ0E7QUFDQSwrQ0FBK0MsS0FBSztBQUNwRDtBQUNBLDZDQUE2QyxhQUFhO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsS0FBSztBQUNkO0FBQ0EsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVUsT0FBTyxVQUFVLFNBQVMsS0FBSztBQUNwRDtBQUNBO0FBQ0E7O0FBRU8scUNBQXFDO0FBQzVDO0FBQ0E7QUFDQSwyQ0FBMkMsYUFBYTtBQUN4RDtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztVQzdEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjZEOzs7O0FBSXREO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlcmFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4td2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyYXBwLy4vc3JjL21vZHVsZXMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Zm9ybWF0LCBmcm9tVW5peFRpbWV9IGZyb20gJ2RhdGUtZm5zJztcblxuYXN5bmMgZnVuY3Rpb24gZ2V0QmFja2dyb3VuZChjaXR5KXtcbiAgY29uc3Qgc2VhcmNoUXVlcnkgPSBgaHR0cHM6Ly9waXhhYmF5LmNvbS9hcGkvP2tleT1gK1xuICAgIGAyNzUzNDU1MS1mNGJiOTVkMjMwOWUxN2RhNWU4MzdhMGJmJmArYHE9JHtjaXR5fWArYCZpbWFnZV90eXBlPXBob3RvYCtcbiAgICBgJm9yaWVudGF0aW9uPWhvcml6b250YWwmbWluX3dpZHRoPTcwNTJgO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHNlYXJjaFF1ZXJ5LCB7bW9kZTogJ2NvcnMnfSk7XG4gIC8vYWRkIGVycm9yIGhhbmRsaW5nXG4gIFxuICBjb25zdCBpbWdEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGNvbnN0IGJhY2tncm91bmRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2dyb3VuZC1pbWcnKTtcbiAgYmFja2dyb3VuZEltZy5zcmMgPSBpbWdEYXRhLmhpdHNbMF0ubGFyZ2VJbWFnZVVSTDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXMoY2l0eSl7XG4gIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2ArXG4gICAgYHE9JHtjaXR5fSZhcHBpZD1kZjdlZmY2MDMwMGZlZDAyMDY4NjI2YWM0ZGVjNTMyOGA7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzZWFyY2hRdWVyeSwge21vZGU6ICdjb3JzJ30pOyAgXG4gICAgaWYocmVzcG9uc2Uub2spe1xuICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gd2VhdGhlckRhdGEuY29vcmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3BvbnNlLnN0YXR1cyA9PSA0MDQgPyBjb25zb2xlLmxvZygnQ2l0eSBub3QgZm91bmQnKTpcbiAgICAgICAgY29uc29sZS5sb2coJ1NvbWUgb3RoZXIgZXJyb3IgaGFwcGVuZWQuLi4nKTtcbiAgICB9XG4gIH0gY2F0Y2goZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VW5pdHModGVtcCl7XG4gIGxldCB1bml0O1xuICBpZiAodGVtcC50b0xvd2VyQ2FzZSgpID09ICdmJykge1xuICAgIHVuaXQgPSAnaW1wZXJpYWwnO1xuICB9IGVsc2UgaWYgKHRlbXAudG9Mb3dlckNhc2UoKSA9PSAnYycpIHtcbiAgICB1bml0ID0gJ21ldHJpYyc7XG4gIH1cbiAgcmV0dXJuIHVuaXQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0Q2FsbChjaXR5LCB0ZW1wPSdmJyl7XG4gIGNvbnN0IGNvb3JkID0gYXdhaXQgZ2V0Q29vcmRpbmF0ZXMoY2l0eSk7XG4gIGNvbnN0IHVuaXQgPSBnZXRVbml0cyh0ZW1wKTtcbiAgY29uc3QgYXBpQ2FsbCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9gK1xuICAgIGBsYXQ9JHtjb29yZC5sYXR9Jmxvbj0ke2Nvb3JkLmxvbn0mdW5pdHM9JHt1bml0fSZleGNsdWRlPWhvdXJseSZhcHBpZD1gK1xuICAgIGBkZjdlZmY2MDMwMGZlZDAyMDY4NjI2YWM0ZGVjNTMyOGA7XG4gIHJldHVybiBhcGlDYWxsO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoY2l0eSl7IC8vcmVuYW1lIG1vcmVcbiAgdHJ5IHtcbiAgICBjb25zdCBhcGlDYWxsID0gYXdhaXQgZ2V0Rm9yZWNhc3RDYWxsKGNpdHkpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpQ2FsbCwge21vZGU6ICdjb3JzJ30pO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTsgLy9kZWxldGUgd2hlbiBkb25lXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9IGNhdGNoKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cblxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2dldFdlZWtGb3JlY2FzdCwgZ2V0Q3VycmVudFdlYXRoZXJ9IGZyb20gJy4vd2VhdGhlcic7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gaW5wdXRMaXN0ZW5lcigpe1xuICBjb25zdCBjaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eS1pbnB1dCcpO1xuXG4gIGNpdHlJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJyl7XG4gICAgICBnZXRXZWF0aGVyRGF0YShjaXR5SW5wdXQudmFsdWUpO1xuICAgIH1cbiAgfSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9