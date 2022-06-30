import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from 'react-mdl';
import { MenuItem } from '../../models/menu-item.model';
import { MenuItemView } from '../MenuItemView/MenuItemView';
import './styles.scss';

export const MenuItemDialog = ({
    open,
    menuItem,
    onClose,
}: {
    open: boolean;
    menuItem?: MenuItem;
    onClose: Function;
}) => {
    return (
        <Dialog open={open} className="app-dialog">
            <DialogTitle>
                {menuItem?.name} ({menuItem?.weight}g)
                <span style={{ float: 'right', color: 'rgb(255,23,68)' }}>${menuItem?.price}</span>
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
