import { Cell, Grid } from 'react-mdl';
import { MenuItem } from '../../models/menu-item.model';
import { Ingredients } from '../Ingredients/Ingredients';
import { Currency, MenuItemPrice } from '../MenuItemPrice/MenuItemPrice';
import { MenuItemWeight } from '../MenuItemWeight/MenuItemWeight';
import './styles.scss';

export const MenuItemRow = ({ data }: { data: MenuItem }) => {
    return (
        <>
            <div className="menu-item-row">
                {data.allergens.length > 0 && <span className="has-allergens">Has Allergens</span>}
                <Grid className="menu-item">
                    <Cell col={3} phone={12} className="img-wrapper">
                        <img className="menu-item-image" src={data.pictures[0]} alt="" />
                    </Cell>

                    <Cell col={9} phone={12}>
                        <h3 className="menu-item-name">
                            {data.name} <MenuItemWeight data={data.weight} />
                        </h3>

                        <Ingredients data={data.ingredients}></Ingredients>
                    </Cell>

                    <MenuItemPrice data={data.price}></MenuItemPrice>
                </Grid>
            </div>
        </>
    );
};
