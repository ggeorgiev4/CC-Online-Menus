import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from 'react-mdl';
import { MenuItem } from '../../models/menu-item.model';
import { MenuItemPrice } from '../MenuItemPrice/MenuItemPrice';
import { MenuItemView } from '../MenuItemView/MenuItemView';
import { MenuItemWeight } from '../MenuItemWeight/MenuItemWeight';
import './styles.scss';

export const MenuItemDialog = ({
    open,
    menuItem,
    onClose,
}: {
    open: boolean;
    menuItem: MenuItem;
    onClose: Function;
}) => {
    return (
        <Dialog open={open} className="app-dialog">
            <DialogTitle>
                {menuItem.name} <MenuItemWeight data={menuItem.weight} />
                <span style={{ float: 'right', color: 'rgb(255,23,68)' }}>
                    <MenuItemPrice data={menuItem.price}></MenuItemPrice>
                </span>
            </DialogTitle>
            <DialogContent>
                <MenuItemView menuItem={menuItem} />
            </DialogContent>
            <DialogActions>
                <Button type="button" onClick={() => onClose()}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};
