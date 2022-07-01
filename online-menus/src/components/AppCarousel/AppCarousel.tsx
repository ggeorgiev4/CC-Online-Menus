import Carousel from 'better-react-carousel';
import { useState } from 'react';
import { MenuItem } from '../../models/menu-item.model';

export const AppCarousel = ({
    data,
    pictureSize = 200,
}: {
    data: MenuItem;
    pictureSize?: number;
}) => {
    const [menuItem, setMenuItem] = useState<MenuItem>(data);

    return (
        <Carousel cols={1} rows={1} loop style={{ maxWidth: '400px' }}>
            {menuItem.pictures.map((picture, key) => (
                <Carousel.Item key={key} style={{ textAlign: 'center' }}>
                    <img
                        width="100%"
                        style={{ maxWidth: '400px', margin: '0 auto' }}
                        src={picture.replaceAll('200', pictureSize.toString())}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};
