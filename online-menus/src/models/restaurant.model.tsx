import { MenuCategory } from './menu-category.model';

export interface Restaurant {
    name: string;
    logo: string;
    slogan: string;
    id: number;
    menu: Array<MenuCategory>;
}
