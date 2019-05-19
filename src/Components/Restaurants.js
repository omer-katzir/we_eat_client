import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List/index'
import ListItem from '@material-ui/core/ListItem/index';
import Restaurant from './Restaurant.js';


class Restaurants extends Component {
    render() {
        const restaurants = this.props.restaurants;
        console.log(restaurants);
        return (
            <List>
                {restaurants.map(restaurant =>
                    <ListItem key={restaurant.id} alignItems='flex-start'>
                        <Restaurant restaurant={restaurant}/>
                    </ListItem>
                )}
            </List>
        )
    }
}

Restaurants.propTypes = {
    restaurants: PropTypes.array.isRequired
};

export default Restaurants;
