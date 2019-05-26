import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import RestaurantsList from 'components/RestaurantsList';
import { fetchRestaurants } from 'actions/Actions';

import style from './restaurantsContainer.module.scss';

class RestaurantsContainer extends Component {

    componentDidMount() {
       this.props.getRestaurants();
    }

    render(){

        const { isFetching, lastUpdate, error, getRestaurants } = this.props;
        return(
            <div className={style.restaurants}>
                    {!isFetching &&
                    (<Button variant='contained'
                             size='small'
                             color='primary'
                             onClick={() => getRestaurants()}>
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
    lastUpdate: PropTypes.number,
    error: PropTypes.object,
    getRestaurants: PropTypes.func.isRequired,
};

const mapStateToProps= state => {
    const { isFetching, lastUpdate, error } = state.restaurants;

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
