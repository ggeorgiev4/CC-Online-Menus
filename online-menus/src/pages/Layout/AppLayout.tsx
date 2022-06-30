import { ReactNode } from 'react';
import { Content, Layout } from 'react-mdl';
import { Outlet } from 'react-router-dom';
import { AppHeader } from '../../components/AppHeader/AppHeader';
import './styles.scss';

export const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Layout fixedHeader>
                <AppHeader />
                <Content className="app-content">
                    <Outlet />
                    {children}
                </Content>
            </Layout>
        </>
    );
};
