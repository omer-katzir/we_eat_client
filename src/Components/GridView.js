import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import Restaurant from "./Restaurant";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: '#DDDDDD',
    },
    gridList: {
        width: 400,
        height: 600,
    },
});

function GridView(props) {
    const { classes, restaurants } = props;

    return (
        <div>
            <GridList cellHeight={180} className={classes.gridList}>
                {restaurants.map(restaurant => (
                    <GridListTile key={restaurant.id} cols={2}>
                        <Restaurant restaurant={restaurant}/>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

GridView.propTypes = {
    classes: PropTypes.object.isRequired,
    restaurants: PropTypes.array.isRequired
};

export default withStyles(styles)(GridView);