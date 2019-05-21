import React from 'react';
import style from './App.css';
import { Provider} from 'react-redux';
import {createStore, applyMiddleware, compose } from 'redux';
import { restaurantsReducer } from './reducers/Reducers.js';
import bkgImage  from './restaurant_image.jpg';
import RestaurantsList from './containers/RestaurantsList.js'
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(restaurantsReducer, {
  isFetching: false,
  items: [],
  error: undefined,
  lastUpdate: undefined,
},
  composeEnhancers(applyMiddleware(thunk))
);

function App() {
  return (
      <Provider store={store}>
    <div className={style.App}>
      <header className="App-header">
        <img src={ bkgImage }
             className="header-image"
             alt='we_eat_main_image'/>
      </header>
      <RestaurantsList />
    </div>
      </Provider>
  );
}


export default App;
