import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from '../pages/Layout/AppLayout';
import { NoPage } from '../pages/NoPage/NoPage';
import { Home } from '../pages/Home/Home';
import { RestaurantPage } from '../pages/RestaurantPage/RestaurantPage';

export const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <AppLayout>
                    <Routes>
                        <Route path="*" element={<NoPage />} />
                        <Route index element={<Home />} />
                        <Route path="restaurant/:id" element={<RestaurantPage />} />
                    </Routes>
                </AppLayout>
            </BrowserRouter>
        </>
    );
};
