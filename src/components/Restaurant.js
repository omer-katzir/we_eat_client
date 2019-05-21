import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card/index';
import CardContent from '@material-ui/core/CardContent/index';
import Typography from '@material-ui/core/Typography/index';
import Divider from '@material-ui/core/Divider/index';
import Rating from 'material-ui-rating';
import Tooltip from '@material-ui/core/Tooltip/index';
import PinDrop from '@material-ui/icons/PinDrop.js'

const CUISINE_ICON_CODE = {'american': 65, 'asian': 46, 'bakery': 80,
                        'fast_food': 87, 'steak': 51, 'sushi': 73, 'vegetarian': 36};

const styles = theme => ({

    root:{
        fontSize: 30,
    },
    tooltip: {
        color: 'rgba(255, 255, 255, 0.8)',
        boxShadow: theme.shadows[5],
        fontSize: 11,
    },
    card: {
        minWidth: 500,
    },
    typography: {
        component: 'h2',
        color: '#86cfff',
    },
    icon: {
        fontFamily: 'CuisinesFont',
        fontSize: '150%',
        color: '#c06931'
    }
});



function Restaurant(props){
    const {classes, restaurant} = props;
    return (
        <Card className={classes.card} raised={true}>
            <CardContent>
                <Typography className={classes.typography}  gutterBottom variant={'h5'}><span className={classes.icon}>
                    {String.fromCharCode(CUISINE_ICON_CODE[restaurant.cuisine.toString().toLowerCase()])} </span>{
                    restaurant.name}
                    {restaurant.address &&(
                    <Tooltip classes={{tooltip: classes.tooltip}} title={restaurant.address}>
                            <PinDrop color='disabled' />
                    </Tooltip>
                    )}
                </Typography>
                <Divider/>
                <Typography>
                    {restaurant.cuisine}
                </Typography>
                <div>
                    <Rating value={restaurant.rating} max={3.0}/>
                    <Typography style={{fontSize: 10, textAlign: 'right'}}>
                            ({restaurant.rating.toFixed(1)})
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
}

Restaurant.propTypes = {
    classes: PropTypes.object.isRequired,
    restaurant: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        cuisine: PropTypes.string.isRequired, //oneOf(Cuisine).isRequired,
        rating: PropTypes.number,
        accept10bis: PropTypes.bool,
        max_delivery_time: PropTypes.number,
        address: PropTypes.string,
        longitude: PropTypes.number,
        latitude: PropTypes.number,
    }).isRequired,
};

export default withStyles(styles)(Restaurant);
