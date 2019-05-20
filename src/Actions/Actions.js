
export const REQUEST_RESTAURANTS = 'REQUEST_RESTAURANTS';
export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';

export const RECEIVED_RESTAURANTS_FAILED = 'RECEIVED_RESTAURANTS_FAILED';

function receivedRestaurantsFailed(e){
    return {
        type: RECEIVED_RESTAURANTS_FAILD,
        error: e,
    };
}
function receiveRestaurants(json) {
    return {
        type: RECEIVE_RESTAURANTS,
        items: json,
        receivedAt: Date.now(),
    };
}

export function fetchRestaurants() {
    return (dispatch, getState) => {
        if (getState().isFetching)
            return;
        dispatch({type: REQUEST_RESTAURANTS});
        fetch('http://localhost:3000/restaurants/')
            .then(response => response.json())
            .then(json => dispatch(receiveRestaurants(json)))
            .catch(error => dispatch(receivedRestaurantsFailed(error)))
    };
}

