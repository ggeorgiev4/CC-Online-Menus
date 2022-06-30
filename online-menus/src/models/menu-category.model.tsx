import { MenuCategoryLabel } from './menu-category-label.enum';
import { MenuItem } from './menu-item.model';

export interface MenuCategory {
    categoryName: string;
    label: MenuCategoryLabel;
    id: number;
    menuItems: Array<MenuItem>;
}
