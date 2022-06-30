import Carousel from 'better-react-carousel';
import { Cell, Grid } from 'react-mdl';
import { MenuItem } from '../../models/menu-item.model';
import './styles.scss';

export const MenuItemView = ({ menuItem }: { menuItem?: MenuItem }) => {
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.carousel');
    });
    return (
        <Grid className="menu-item-view">
            <Cell col={12}> {menuItem?.description}</Cell>
            <Cell
                col={6}
                phone={12}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Carousel cols={1} rows={1} loop style={{ maxWidth: '400px' }}>
                    {menuItem?.pictures.map((picture, key) => (
                        <Carousel.Item key={key} style={{ textAlign: 'center' }}>
                            <img
                                width="100%"
                                style={{ maxWidth: '400px', margin: '0 auto' }}
                                src={picture.replaceAll('200', '400')}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Cell>
            <Cell col={6} phone={12}>
                <p className="ingredients">
                    <b>Ingredients:</b> /
                    {menuItem?.ingredients.map((ingredient: string, key) => (
                        <span className="ingredient" key={key}>
                            {ingredient}
                            {key < menuItem?.ingredients.length - 1 && ', '}
                        </span>
                    ))}
                    /
                </p>
                {menuItem?.allergens.length ? (
                    <p className="allergens mdl-color-text--red-A400">
                        <b>allergens:</b> /
                        {menuItem?.allergens.map((ingredient: string, key) => (
                            <span className="ingredient" key={key}>
                                {ingredient}
                                {key < menuItem?.allergens.length - 1 && ', '}
                            </span>
                        ))}
                        /
                    </p>
                ) : (
                    <></>
                )}
            </Cell>
        </Grid>
    );
};
