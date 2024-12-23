import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { thunk } from 'redux-thunk'
import {Provider} from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import CounterPage from './pages/counter/CounterPage.jsx'
import { counterReducer } from './pages/counter/reducer.js'

import './api/mock-server.js';

const rootReducer = combineReducers({
  counter: counterReducer
});

const store = createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(thunk)));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <CounterPage />
    </Provider>
  </StrictMode>
)
