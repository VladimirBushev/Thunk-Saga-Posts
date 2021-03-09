import React from 'react';
import {render} from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import App from './App.jsx';
import { rootReducer } from './redux/rootReducer.js';
import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import { forbiddenWordsMiddleware } from './redux/middleware.js';
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './redux/sagas.js';

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(applyMiddleware(
  thunk, forbiddenWordsMiddleware, saga
),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)

render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
