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
/* harmony export */   "displayToday": () => (/* binding */ displayToday),
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

async function displayToday(city){
  
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7O0FBRTlDO0FBQ0E7QUFDQSwrQ0FBK0MsS0FBSztBQUNwRDtBQUNBLDZDQUE2QyxhQUFhO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsS0FBSztBQUNkO0FBQ0EsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVUsT0FBTyxVQUFVLFNBQVMsS0FBSztBQUNwRDtBQUNBO0FBQ0E7O0FBRU8scUNBQXFDO0FBQzVDO0FBQ0E7QUFDQSwyQ0FBMkMsYUFBYTtBQUN4RDtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztVQzdEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ042RDs7OztBQUl0RDtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJhcHAvLi9zcmMvbW9kdWxlcy9kb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmb3JtYXQsIGZyb21Vbml4VGltZX0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRCYWNrZ3JvdW5kKGNpdHkpe1xuICBjb25zdCBzZWFyY2hRdWVyeSA9IGBodHRwczovL3BpeGFiYXkuY29tL2FwaS8/a2V5PWArXG4gICAgYDI3NTM0NTUxLWY0YmI5NWQyMzA5ZTE3ZGE1ZTgzN2EwYmYmYCtgcT0ke2NpdHl9YCtgJmltYWdlX3R5cGU9cGhvdG9gK1xuICAgIGAmb3JpZW50YXRpb249aG9yaXpvbnRhbCZtaW5fd2lkdGg9NzA1MmA7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goc2VhcmNoUXVlcnksIHttb2RlOiAnY29ycyd9KTtcbiAgLy9hZGQgZXJyb3IgaGFuZGxpbmdcbiAgXG4gIGNvbnN0IGltZ0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgY29uc3QgYmFja2dyb3VuZEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZ3JvdW5kLWltZycpO1xuICBiYWNrZ3JvdW5kSW1nLnNyYyA9IGltZ0RhdGEuaGl0c1swXS5sYXJnZUltYWdlVVJMO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyhjaXR5KXtcbiAgY29uc3Qgc2VhcmNoUXVlcnkgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/YCtcbiAgICBgcT0ke2NpdHl9JmFwcGlkPWRmN2VmZjYwMzAwZmVkMDIwNjg2MjZhYzRkZWM1MzI4YDtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHNlYXJjaFF1ZXJ5LCB7bW9kZTogJ2NvcnMnfSk7ICBcbiAgICBpZihyZXNwb25zZS5vayl7XG4gICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiB3ZWF0aGVyRGF0YS5jb29yZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzcG9uc2Uuc3RhdHVzID09IDQwNCA/IGNvbnNvbGUubG9nKCdDaXR5IG5vdCBmb3VuZCcpOlxuICAgICAgICBjb25zb2xlLmxvZygnU29tZSBvdGhlciBlcnJvciBoYXBwZW5lZC4uLicpO1xuICAgIH1cbiAgfSBjYXRjaChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRVbml0cyh0ZW1wKXtcbiAgbGV0IHVuaXQ7XG4gIGlmICh0ZW1wLnRvTG93ZXJDYXNlKCkgPT0gJ2YnKSB7XG4gICAgdW5pdCA9ICdpbXBlcmlhbCc7XG4gIH0gZWxzZSBpZiAodGVtcC50b0xvd2VyQ2FzZSgpID09ICdjJykge1xuICAgIHVuaXQgPSAnbWV0cmljJztcbiAgfVxuICByZXR1cm4gdW5pdDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3RDYWxsKGNpdHksIHRlbXA9J2YnKXtcbiAgY29uc3QgY29vcmQgPSBhd2FpdCBnZXRDb29yZGluYXRlcyhjaXR5KTtcbiAgY29uc3QgdW5pdCA9IGdldFVuaXRzKHRlbXApO1xuICBjb25zdCBhcGlDYWxsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2ArXG4gICAgYGxhdD0ke2Nvb3JkLmxhdH0mbG9uPSR7Y29vcmQubG9ufSZ1bml0cz0ke3VuaXR9JmV4Y2x1ZGU9aG91cmx5JmFwcGlkPWArXG4gICAgYGRmN2VmZjYwMzAwZmVkMDIwNjg2MjZhYzRkZWM1MzI4YDtcbiAgcmV0dXJuIGFwaUNhbGw7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShjaXR5KXsgLy9yZW5hbWUgbW9yZVxuICB0cnkge1xuICAgIGNvbnN0IGFwaUNhbGwgPSBhd2FpdCBnZXRGb3JlY2FzdENhbGwoY2l0eSk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlDYWxsLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpOyAvL2RlbGV0ZSB3aGVuIGRvbmVcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gIH0gY2F0Y2goZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7Z2V0V2Vla0ZvcmVjYXN0LCBnZXRDdXJyZW50V2VhdGhlcn0gZnJvbSAnLi93ZWF0aGVyJztcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnB1dExpc3RlbmVyKCl7XG4gIGNvbnN0IGNpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5LWlucHV0Jyk7XG5cbiAgY2l0eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInKXtcbiAgICAgIGdldFdlYXRoZXJEYXRhKGNpdHlJbnB1dC52YWx1ZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlUb2RheShjaXR5KXtcbiAgXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9