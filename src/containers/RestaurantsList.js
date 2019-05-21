import React,{ Component } from 'react';
import '../Styles.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchRestaurants} from '../actions/Actions';
import Button from '@material-ui/core/Button';
import GridView from '../components/GridView.js';

class RestaurantsList extends Component{

    componentDidMount() {
       this.props.getRestaurants();
    }

    render(){
        const { restaurants, isFetching, lastUpdate, error } = this.props;
        return(
            <div className='Restaurants-list'>
                <p>
                    {!isFetching &&
                    (<Button variant='contained'
                             size='small'
                             color='primary'
                             onClick={() => this.props.getRestaurants()}>
                        Refresh
                    </Button>)}
                    {error && (<span>{error.message}</span>)}
                    {lastUpdate && !error && (<span>Last updated at {new Date(lastUpdate).toLocaleTimeString()}</span>)}
                </p>
                <GridView restaurants={restaurants}/>
            </div>

        )
    }

}

RestaurantsList.propTypes = {
    restaurants: PropTypes.array.isRequired,
    isFetching: PropTypes.bool,
    lastUpdated: PropTypes.number,
    error: PropTypes.object,
    getRestaurants: PropTypes.func.isRequired,
};

const mapStateToProps= state => {
    const {items: restaurants, isFetching, lastUpdate, error} = state;

    return {
        restaurants,
        isFetching,
        lastUpdate,
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
