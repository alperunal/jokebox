import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import configureStore from './store/index';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

const store = configureStore({});
axios.defaults.baseURL = 'https://official-joke-api.appspot.com';

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
