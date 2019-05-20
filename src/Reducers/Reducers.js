import * as ACTIONS from "../Actions/Actions"
function restaurants(
    state = {
        isFetching: false,
        items: [],
        error: null,
    },
    action) {
    switch(action.type){
        case ACTIONS.REQUEST_RESTAURANTS:
            return {
                isFetching: true,
            };
        case ACTIONS.RECEIVED_RESTAURANTS_FAILED:
            return{
                    isFetching: false,
                    error: action.error,
                 };
        case ACTIONS.RECEIVE_RESTAURANTS:
            return {
                isFetching: false,
                items: action.items,
                lastUpdate: action.lastUpdate
            };
        default:
            return state;
    }
}

export default restaurants;
