import React,{ Component } from 'react';
import '../styles.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchRestaurants} from '../actions/Actions';
import Button from '@material-ui/core/Button';
import RestaurantsList from '../components/RestaurantsList.jsx';

class RestaurantsContainer extends Component{

    componentDidMount() {
       this.props.getRestaurants();
    }

    render(){
        const { isFetching, lastUpdate, error } = this.props;
        return(
            <div className='restaurants-list'>
                    {!isFetching &&
                    (<Button variant='contained'
                             size='small'
                             color='primary'
                             onClick={() => this.props.getRestaurants()}>
                        Refresh
                    </Button>)}
                    {error && (<span>{error.message}</span>)}
                    {lastUpdate && !error && (<span>Last updated at {new Date(lastUpdate).toLocaleTimeString()}</span>)}
                <RestaurantsList />
            </div>

        )
    }

}

RestaurantsContainer.propTypes = {
    isFetching: PropTypes.bool,
    lastUpdated: PropTypes.number,
    error: PropTypes.object,
    getRestaurants: PropTypes.func.isRequired,
};

const mapStateToProps= state => {
    const { isFetching, lastUpdate, error} = state.restaurants;

    return {
        isFetching,
        lastUpdate,
        error,
    }
};

const mapDispatchToProps = {
    getRestaurants: fetchRestaurants,
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
