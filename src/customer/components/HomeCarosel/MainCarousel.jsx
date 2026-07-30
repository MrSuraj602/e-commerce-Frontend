
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

const Carousel = AliceCarousel?.default?.default ?? AliceCarousel?.default ?? AliceCarousel;


const MainCarousel = () => {
    const items = mainCarouselData.map((item) => (
            <img
                className=' cursor-pointer '
                role='presentation'
                src={item.image}
                alt=''
            />
      
    ));

    return (
        <Carousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={2000}
            infinite
        />
    );
};

export default MainCarousel;