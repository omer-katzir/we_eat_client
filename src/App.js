import React from 'react';
import style from './App.css';
import { Provider} from 'react-redux';
import {createStore} from 'redux';
import { restaurantsReducer } from './reducers/Reducers.js';
import bkgImage  from './restaurant_image.jpg';
import RestaurantsList from './containers/RestaurantsList.js'
import { devToolsEnhancer } from 'redux-devtools-extension';


const store = createStore(restaurantsReducer, {
  isFetching: false,
  items: [],
  error: undefined,
  lastUpdate: undefined,
},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
