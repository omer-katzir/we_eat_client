import { handleActions } from 'redux-actions';
import { requestRestaurants, receiveRestaurants } from "../actions/Actions";

const restaurantsReducer = handleActions(
    {
        [requestRestaurants]: (state) => (
            {
                ...state,
                isFetching: true,
            }
        ),
        [receiveRestaurants]: (state, action) => (
            {
                ...state,
                isFetching: false,
                error: action.error? action.payload : undefined,
                items: action.error? [] : action.payload,
                lastUpdate: Date.now()
            }
        )
    },
    {
        isFetching: false,
        items: [],
        error: undefined,
        lastUpdate: undefined
    }
);

export default restaurantsReducer;