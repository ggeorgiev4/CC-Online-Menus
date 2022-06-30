import { Cell, Grid } from 'react-mdl';
import { MenuItem } from '../../models/menu-item.model';
import './styles.scss';

export const MenuItemRow = (props: { data: MenuItem }) => {
    const menuItem = props.data;
    return (
        <>
            <div className="menu-item-row">
                {menuItem.allergens.length > 0 && (
                    <span className="has-allergens">Has Allergens</span>
                )}
                <Grid className="menu-item">
                    <Cell col={3} phone={12} className="img-wrapper">
                        <img className="menu-item-image" src={menuItem.pictures[0]} alt="" />
                    </Cell>

                    <Cell col={9} phone={12}>
                        <h3 className="menu-item-name">
                            {menuItem.name} ({menuItem.weight}g)
                        </h3>

                        <p className="ingredients">
                            <b>Ingredients:</b> /
                            {menuItem.ingredients.map((ingredient: string, key) => (
                                <span className="ingredient" key={key}>
                                    {ingredient}
                                    {key < menuItem.ingredients.length - 1 && ', '}
                                </span>
                            ))}
                            /
                        </p>
                    </Cell>

                    <div className="price">${menuItem.price}</div>
                </Grid>
            </div>
        </>
    );
};
