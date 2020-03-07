import React from 'react';
import ReactDOM from 'react-dom';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faCompass } from '@fortawesome/free-solid-svg-icons/faCompass';
import { faHandshake } from '@fortawesome/free-solid-svg-icons/faHandshake';
import { faRedo } from '@fortawesome/free-solid-svg-icons/faRedo';
import { faTrophy } from '@fortawesome/free-solid-svg-icons/faTrophy';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons/faUserAstronaut';
import { faUserNinja } from '@fortawesome/free-solid-svg-icons/faUserNinja';
import { library } from '@fortawesome/fontawesome-svg-core';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

library.add(
  faCheck,
  faCompass,
  faHandshake,
  faRedo,
  faTrophy,
  faUserAstronaut,
  faUserNinja
);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
