import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import CounterPage from './pages/counter/CounterPage.jsx'
import { counterReducer } from './pages/counter/reducer.js'

const rootReducer = combineReducers({
  counter: counterReducer
});

const store = createStore(rootReducer, undefined, composeWithDevTools());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <CounterPage/>
    </Provider>
  </StrictMode>,
)
