import React, { useContext, useState } from 'react';
import './App.css';
import { getRestaurants } from './helpers/database';
import { Restaurant } from './models/restaurant.model';
import { AppRoutes } from './routing/AppRoutes';

interface IRestaurantsContext {
    restaurants: Array<Restaurant>;
}

export const RestaurantsContext = React.createContext<{
    restaurants: Array<Restaurant>;
    setRestaurantsData: (data: IRestaurantsContext) => void;
}>({
    restaurants: getRestaurants(),
    setRestaurantsData: (data: IRestaurantsContext) => {},
});

function App() {
    const [restaurantsData, setRestaurantsData] = useState<IRestaurantsContext>({
        restaurants: useContext(RestaurantsContext).restaurants,
    });

    const context = { ...restaurantsData, setRestaurantsData };

    return (
        <RestaurantsContext.Provider value={context}>
            <div className="app">
                <AppRoutes />
            </div>
        </RestaurantsContext.Provider>
    );
}

export default App;
