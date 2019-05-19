import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles/index"
import Card from "@material-ui/core/Card/index";
import CardContent from "@material-ui/core/CardContent/index";
import Typography from "@material-ui/core/Typography/index";
import Divider from "@material-ui/core/Divider/index";
import Rating from 'material-ui-rating';
import Tooltip from '@material-ui/core/Tooltip/index';

const CuisineIconCode = {'american': 65, 'asian': 46, 'bakery': 80,
                        'fast_food': 87, 'steak': 51, 'sushi': 73, 'vegetarian': 36};

const cardStyle =
    {
        card: {
            minWidth: 500,
        }
    };
const tooltipStyle =
    {
        tooltip: {
            color: 0xFF0000,
            //padding: '4px 8px',
            fontSize: 15,

        },
    };


const TooltipLarge = withStyles(tooltipStyle)(Tooltip);
const CardCustom = withStyles(cardStyle)(Card);

const Restaurant = ({restaurant}) => (
    <TooltipLarge placement='right-start'
        title={
        <div>
            id: {restaurant.id} <br/>
            name: {restaurant.name} <br/>
            rating: {restaurant.rating.toFixed(1)}<br/>
            {restaurant.address ? ('address: ' + restaurant.address) : ''}
            {restaurant.accept10bis ? 'accepts 10bis' : ''}
        </div>
    }>
    <CardCustom  className={restaurant.name + 'Card'} raised={true}>
        <CardContent>
            <Typography gutterBottom variant='h5' component='h2' style={{'color':'#86cfff'}}>
                                <span style={{'fontFamily':'CuisinesFont', 'fontSize':'150%', 'color':'#c06931'}}>
                                    {String.fromCharCode(CuisineIconCode[restaurant.cuisine.toString().toLowerCase()])} </span>{restaurant.name}
            </Typography>
            <Divider />
            <div>
                    <span>{ restaurant.cuisine }</span><Rating value={restaurant.rating} max={3.0}  />
            </div>
        </CardContent>
    </CardCustom>
    </TooltipLarge>

);

Restaurant.propTypes = {
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

export default Restaurant;