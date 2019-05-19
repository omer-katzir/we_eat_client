import React from 'react';
import './App.css';
import { Provider} from 'react-redux';
import RestaurantsList from './Containers/RestaurantsList.js';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './Reducers/Reducers.js'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware)) ;

function App() {
  return (
      <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={ require('./restaurant_image.jpg') }
             className="header-image"
             alt='we_eat_main_image' width='1024' height='215'/>
      </header>
         <RestaurantsList  />
    </div>
      </Provider>
  );
}

export default App;
//apiRoot='http://localhost:3000/restaurants'/>