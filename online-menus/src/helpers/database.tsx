import { useContext } from 'react';
import { RestaurantsContext } from '../App';
import { Restaurant } from '../models/restaurant.model';

export const getRestaurants = () => {
    const data = require('./db.json');
    return data.restaurants;
};

export const GetRestaurant = (id: number): Restaurant | undefined => {
    const { restaurants } = useContext(RestaurantsContext);
    return restaurants.find((r: Restaurant) => r.id === id);
};
