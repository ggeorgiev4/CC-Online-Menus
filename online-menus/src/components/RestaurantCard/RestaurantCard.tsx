import { Card, CardTitle, CardActions, CardMenu, IconButton } from 'react-mdl';
import { useNavigate } from 'react-router-dom';
import { getColor } from '../../helpers/ColorGenerator';
import { Restaurant } from '../../models/restaurant.model';
import './styles.scss';

export const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
    const navigate = useNavigate();

    return (
        <Card
            className="restaurant-card"
            shadow={0}
            style={{
                margin: 'auto',
            }}
            onClick={() => navigate(`/restaurant/${restaurant.id}`)}
        >
            <CardTitle
                expand
                style={{
                    background: `url(${restaurant.logo}) center / cover`,
                }}
            ></CardTitle>
            <CardActions
                style={{ height: '52px', padding: '16px', backgroundColor: `${getColor()}` }}
            >
                {restaurant.name}
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
                <IconButton className="restaurant-card-favorite-icon" name="favorite" />
            </CardMenu>
        </Card>
    );
};
