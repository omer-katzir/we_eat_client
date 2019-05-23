import React from 'react';
import style from './App.css';
import { Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers } from 'redux';
import restaurantsReducer  from './reducers/Reducers.js';
import bkgImage  from './restaurant_image.jpg';
import thunk from 'redux-thunk';
import RestaurantsContainer from './containers/RestaurantsContainer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({restaurants: restaurantsReducer});

const store = createStore(rootReducer, { restaurants:
  restaurantsReducer.defaultStatus} ,
  composeEnhancers(applyMiddleware(thunk))
);

function App() {
  return (
      <Provider store={store}>
    <div className={style.App} >
      <header className="App-header">
        <img src={ bkgImage }
             className="header-image"
             alt='we_eat_main_image'/>
      </header>
      <RestaurantsContainer />
    </div>
      </Provider>
  );
}


export default App;
