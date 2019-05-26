import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import Restaurant from "components/Restaurant";

const styles = () => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: '#DDDDDD',
    },
    gridList: {
        width: '50%',
        height: 600,
    },
});

const RestaurantsList = props => {
    const { classes, restaurants } = props;

    return (
      <div>
          <GridList cellHeight={180} className={classes.gridList}>
              {restaurants.map(restaurant => (
                <GridListTile key={restaurant.id} cols={1 + restaurant.rating * 0.03}>
                    <Restaurant restaurant={restaurant}/>
                </GridListTile>
              ))}
          </GridList>
      </div>
    );
};

RestaurantsList.propTypes = {
    classes: PropTypes.object.isRequired,
    restaurants: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    restaurants: state.restaurants.items,
});

export default connect(mapStateToProps)(withStyles(styles)(RestaurantsList));
