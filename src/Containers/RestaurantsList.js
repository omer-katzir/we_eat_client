import React,{ Component } from 'react';
import '../Styles.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchRestaurants, REQUEST_RESTAURANTS} from '../Actions/Actions';
import Button from '@material-ui/core/Button';
import GridView from '../Components/GridView.js';

class RestaurantsList extends Component{

    componentDidMount() {
       this.props.getRestaurants();
    }

    render(){
        const { restaurants, isFetching, lastUpdated, error } = this.props;
        return(
            <div className='Restaurants-list'>
                <p>
                    { lastUpdated && (
                        <span>
                            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
                        </span>
                    ) }
                    { !isFetching && (
                        <Button variant='contained'
                                size='small'
                                color='primary'
                                onClick={() => this.props.getRestaurants()}>
                            Refresh
                        </Button>
                    )}
                    {
                        error && (
                            <span>
                                {error.message}
                            </span>
                        )
                    }
                </p>
                <GridView restaurants={restaurants}/>
            </div>

        )
    }

}

RestaurantsList.propTypes = {
    restaurants: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    error: PropTypes.object,
    getRestaurants: PropTypes.func.isRequired,
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
        getRestaurants: () => {
            if(ownProps.isFetching)
                return;
           fetchRestaurants(dispatch);
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList);
