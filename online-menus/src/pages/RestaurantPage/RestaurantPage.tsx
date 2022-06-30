import { useEffect, useState } from 'react';
import { Cell, Grid, Tab, Tabs } from 'react-mdl';
import { useParams } from 'react-router-dom';
import { MenuItemRow } from '../../components/MenuItemRow/MenuItemRow';
import { GetRestaurant } from '../../helpers/database';
import { MenuCategoryLabel } from '../../models/menu-category-label.enum';
import { MenuCategory } from '../../models/menu-category.model';
import { MenuItem } from '../../models/menu-item.model';
import './styles.scss';

export const RestaurantPage = () => {
    const { id } = useParams();
    const restaurant = GetRestaurant(Number(id));
    const [activeTab, setActiveTab] = useState<number>(0);
    const [activeMenu, setActiveMenu] = useState<MenuCategory>(restaurant.menu[0]);

    const changeActiveMenu = (tabId: number) => {
        setActiveTab(tabId);
    };

    useEffect(() => {
        setActiveMenu(restaurant.menu[activeTab]);
    }, [activeTab]);

    return (
        <div className="restaurant-page">
            <Grid>
                <Cell col={3} phone={12}>
                    <img src={restaurant.logo} alt="" style={{ float: 'right' }} />
                </Cell>
                <Cell col={9} phone={12}>
                    <h1>{restaurant.name}</h1>
                    <h4>{restaurant.slogan}</h4>
                </Cell>
            </Grid>
            <Tabs activeTab={activeTab} onChange={(tabId) => changeActiveMenu(tabId)} ripple>
                {restaurant.menu.map((category: MenuCategory, key) => (
                    <Tab className="category-name" key={key}>
                        {category.categoryName}
                        <span
                            className={`category-label mdl-color--${
                                category.label === MenuCategoryLabel.FEATURED
                                    ? 'yellow'
                                    : category.label === MenuCategoryLabel.NEW
                                    ? 'green'
                                    : 'red'
                            }-700`}
                        >
                            {category.label}
                        </span>
                    </Tab>
                ))}
            </Tabs>
            <section>
                <div className="restaurant-category-menu">
                    {activeMenu.menuItems.map((menuItem: MenuItem, key) => (
                        <Cell col={12} shadow={1} key={key}>
                            <MenuItemRow data={menuItem} />
                        </Cell>
                    ))}
                </div>
            </section>
        </div>
    );
};
