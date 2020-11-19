import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  './index.scss';
import {compose, createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { RootReducer } from './redux/reducer/reducer';
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from './redux/sagas';


const saga = createSagaMiddleware();


const store = createStore(RootReducer,compose(
  applyMiddleware(saga),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );

saga.run(sagaWatcher);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);
