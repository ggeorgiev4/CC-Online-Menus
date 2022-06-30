import { useContext } from 'react';
import { Grid } from 'react-mdl';
import { RestaurantsContext } from '../../App';
import { RestaurantCard } from '../../components/RestaurantCard/RestaurantCard';
import { Restaurant } from '../../models/restaurant.model';
import './styles.scss';

export const Home = () => {
    const restaurants = useContext(RestaurantsContext).restaurants;

    return (
        <div className="home-wrapper">
            <Grid>
                {restaurants.map((restaurant: Restaurant, key) => (
                    <RestaurantCard data={restaurant} key={key} />
                ))}
            </Grid>
        </div>
    );
};
