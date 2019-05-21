import { createActions } from 'redux-actions'



export const REQUEST_RESTAURANTS = 'REQUEST_RESTAURANTS';
export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';


export const {requestRestaurants,
                receiveRestaurants} = createActions(
        REQUEST_RESTAURANTS,
        RECEIVE_RESTAURANTS
);



export function fetchRestaurants() {
    return function(dispatch) {
        dispatch(requestRestaurants());
        fetch('http://localhost:3000/restaurants/')
            .then(response => response.json())
            .then(json => dispatch(receiveRestaurants(json)))
            .catch(error => dispatch(receiveRestaurants(error)));
    }
}
