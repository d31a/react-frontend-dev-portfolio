import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

/* GLOBAL VARIABLES */

window.$primaryResume = 'en-uk';
window.$secondaryResume = 'en-us';
window.$primaryResumeIconId = 'primary-res-icon';
window.$secondaryResumeIconId = 'secondary-res-icon';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
