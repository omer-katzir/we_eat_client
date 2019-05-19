import {REQUEST_RESTAURANTS} from "../Actions/Actions";
import {RECEIVE_RESTAURANTS} from "../Actions/Actions";
import {RECEIVED_RESTAURANTS_FAILD} from "../Actions/Actions";

function restaurants(
    state = {
        isFetching: false,
        items: [],
        error: null,
    },
    action) {
    switch(action.type){
        case REQUEST_RESTAURANTS:
            return Object.assign({}, state = {
                isFetching: true,
            });
        case RECEIVED_RESTAURANTS_FAILD:
            return Object.assign({}, state = {
                isFetching: false,
                error: action.error,
            });
        case RECEIVE_RESTAURANTS:
            return Object.assign({}, state = {
                isFetching: false,
                items: action.items,
                lastUpdate: action.receivedAt
            });
        default:
            return state;
    }
}

export default restaurants;