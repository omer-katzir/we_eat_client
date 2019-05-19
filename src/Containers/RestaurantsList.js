import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchRestaurants} from '../Actions/Actions';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Restaurant from "../Components/Restaurant";


class RestaurantsList extends Component{

    constructor(props){
        super(props);

    }
    componentDidMount() {
       this.props.getRestaurants();
    }

    render(){
        const { restaurants, isFetching, lastUpdated, error } = this.props;
        return(
            <div>
                <p>
                    { lastUpdated && (
                        <span>
                            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
                        </span>
                    ) }
                    { !isFetching && (
                        <button onClick={() => this.props.getRestaurants()}>Refresh</button>
                    )}
                    {
                        error && (
                            <span>
                                {error.message}
                            </span>
                        )
                    }
                </p>
                <List>
                    {restaurants.map(restaurant =>
                        <ListItem key={restaurant.id} alignItems='flex-start'>
                            <Restaurant restaurant={restaurant}/>
                        </ListItem>
                    )}
                </List>
            </div>

        )
    }

}

RestaurantsList.propTypes = {
    restaurants: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    error: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    const restaurants = state.items || [];
    const isFetching = state.isFetching ||  false;
    const lastUpdated = state.receivedAt;
    const error = state.error;

    return {
        restaurants,
        isFetching,
        lastUpdated,
        error,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getRestaurants: () => dispatch(fetchRestaurants()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList);
