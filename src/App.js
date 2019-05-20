import React from 'react';
import './App.css';
import { Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import restaurants from './Reducers/Reducers.js';
import bkgImage  from './restaurant_image.jpg';
import RestaurantsList from './Containers/RestaurantsList.js'

const store = createStore(restaurants,
    applyMiddleware(thunkMiddleware)) ;

function App() {
  return (
      <Provider store={store}>
    <div className="App">
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
//apiRoot='http://localhost:3000/restaurants'/>