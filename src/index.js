import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faCompass } from '@fortawesome/free-solid-svg-icons/faCompass';
import { faGamepad } from '@fortawesome/free-solid-svg-icons/faGamepad';
import { faHandshake } from '@fortawesome/free-solid-svg-icons/faHandshake';
import { faRedo } from '@fortawesome/free-solid-svg-icons/faRedo';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons/faUserAstronaut';
import { faUserNinja } from '@fortawesome/free-solid-svg-icons/faUserNinja';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
  faCheck,
  faCompass,
  faGamepad,
  faHandshake,
  faRedo,
  faUserAstronaut,
  faUserNinja
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
