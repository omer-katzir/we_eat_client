import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import restaurantsReducer  from 'reducers/Reducers';
import backgroundImage  from 'restaurant_image.jpg';
import RestaurantsContainer from 'containers/RestaurantsContainer';

import style from './App.module.scss';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ restaurants: restaurantsReducer });

const store = createStore(rootReducer, { restaurants:
  restaurantsReducer.defaultStatus },
  composeEnhancers(applyMiddleware(thunk))
);

function App() {

  return (

    <Provider store={store}>
      <div className={style.app}>
        <header>
          <img src={ backgroundImage }
               alt='we_eat_main_image'/>
          <h1 >
            We Eat
          </h1>
        </header>
        <RestaurantsContainer />
      </div>
    </Provider>
  );
}


export default App;
