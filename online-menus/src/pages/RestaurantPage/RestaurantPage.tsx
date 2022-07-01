import { useEffect, useState } from 'react';
import { Cell, Grid, Tab, Tabs } from 'react-mdl';
import { useNavigate, useParams } from 'react-router-dom';
import { MenuItemDialog } from '../../components/AppDialog/MenuItemDialog';
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

    const navigate = useNavigate();
    const menus = restaurant?.menu ?? [];
    const [menu] = menus ?? [];

    const [activeMenu, setActiveMenu] = useState<MenuCategory>(menu);

    const [dialogOpened, setDialogOpened] = useState<boolean>(false);
    const [menuItem, setMenuItem] = useState<MenuItem>();
    const ColorMap = {
        [MenuCategoryLabel.FEATURED]: 'yellow',
        [MenuCategoryLabel.NEW]: 'green',
        [MenuCategoryLabel.PROMO]: 'red',
        default: 'red',
    };

    useEffect(() => {
        if (restaurant) {
            setActiveMenu(restaurant.menu[activeTab]);
        } else {
            navigate('/404');
        }
    }, [activeTab, restaurant?.menu]);

    const openMenuItem = (menuItem: MenuItem) => {
        setMenuItem(menuItem);
        setDialogOpened(true);
    };

    const changeActiveMenu = (tabId: number) => {
        setActiveTab(tabId);
    };

    return (
        <>
            {restaurant && (
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
                    <Tabs
                        activeTab={activeTab}
                        onChange={(tabId) => changeActiveMenu(tabId)}
                        ripple
                    >
                        {restaurant.menu.map((category: MenuCategory, key) => (
                            <Tab className="category-name" key={key}>
                                {category.categoryName}
                                <span
                                    className={`category-label mdl-color--${
                                        ColorMap[category.label] ?? ColorMap.default
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
                                <Cell
                                    col={12}
                                    shadow={1}
                                    key={key}
                                    onClick={() => openMenuItem(menuItem)}
                                >
                                    <MenuItemRow data={menuItem} />
                                </Cell>
                            ))}
                        </div>
                    </section>
                    {menuItem && (
                        <MenuItemDialog
                            open={dialogOpened ? true : false}
                            menuItem={menuItem}
                            onClose={() => setDialogOpened(false)}
                        />
                    )}
                </div>
            )}
        </>
    );
};
