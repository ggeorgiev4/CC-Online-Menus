import Carousel from 'better-react-carousel';
import { Cell, Grid } from 'react-mdl';
import { MenuItem } from '../../models/menu-item.model';
import { Allergens } from '../Allergens/Allergens';
import { AppCarousel } from '../AppCarousel/AppCarousel';
import { Ingredients } from '../Ingredients/Ingredients';
import './styles.scss';

export const MenuItemView = ({ menuItem }: { menuItem: MenuItem }) => {
    return (
        <Grid className="menu-item-view">
            <Cell col={12}> {menuItem.description}</Cell>
            <Cell col={6} phone={12} className="flex-center">
                <AppCarousel data={menuItem} pictureSize={400}></AppCarousel>
            </Cell>
            <Cell col={6} phone={12}>
                <Ingredients data={menuItem.ingredients}></Ingredients>
                {menuItem.allergens.length ? (
                    <Allergens data={menuItem.allergens}></Allergens>
                ) : (
                    <></>
                )}
            </Cell>
        </Grid>
    );
};
