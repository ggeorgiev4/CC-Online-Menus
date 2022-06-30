import { Drawer, Header } from 'react-mdl';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

export const AppHeader = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header>
                <span
                    className="header-title"
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    Online Menu
                </span>
            </Header>
            <Drawer>
                <span
                    className="header-title header-title-drawer"
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    Online Menu
                </span>
            </Drawer>
        </>
    );
};
