import Carousel from 'better-react-carousel';

export const AppCarousel = ({
    pictures,
    pictureSize = 200,
}: {
    pictures: Array<string>;
    pictureSize?: number;
}) => {
    return (
        <Carousel cols={1} rows={1} loop style={{ maxWidth: '400px' }}>
            {pictures.map((picture, key) => (
                <Carousel.Item key={key} style={{ textAlign: 'center' }}>
                    <img
                        alt=""
                        width="100%"
                        style={{ maxWidth: '400px', margin: '0 auto' }}
                        src={picture.replaceAll('200', pictureSize.toString())}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};
