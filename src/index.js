import './style.css';
import * as DOM from './modules/dom';
import * as weather from './modules/weather'

DOM.inputListener();

const defaultCity = 'Honolulu';

DOM.displayToday(defaultCity);