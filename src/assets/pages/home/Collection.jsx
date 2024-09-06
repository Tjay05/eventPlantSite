import { useRef, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Collection Images
import gown from '../../images/gown.jpeg';
import books from '../../images/planning.jpeg';
import magazine from '../../images/Wedding Magazine Program and Timeline, Canva Template, Photo Program, Seating Chart, Fun Facts.jpeg';

const Collections = () => {
  const collectionSwiperRef = useRef(null);
  
  const [collections, setCollections] = useState([
    { id: 1, image: gown, title: 'Gowns' },
    { id: 2, image: books, title: 'Accessories' },
    { id: 3, image: magazine, title: 'Magazines' }
  ]);

  const handleSlideChange = (direction, swiperRef) => {
    const activeIndex = swiperRef.current.swiper.activeIndex;
    let newIndex = activeIndex;

    if (direction === 'next') {
      newIndex = (newIndex + 1) % collections.length;
    } else if (direction === 'prev') {
      newIndex = (newIndex - 1 + collections.length) % collections.length;
    }

    swiperRef.current.swiper.slideTo(newIndex, 500, false); 
  };

  return ( 
    <section className='OurColLect'>
      <div className="container">
        <h2>Our Collections</h2>
        <div className='collectionSwiper'>
          <Swiper
            ref={collectionSwiperRef}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
          >
            {collections.map((collection) => (
              <SwiperSlide key={collection.id}>
                <img src={collection.image} alt={collection.title} />
                <p>{collection.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-button-prev" onClick={() => handleSlideChange('prev', collectionSwiperRef)}></button>
          <button className="swiper-button-next" onClick={() => handleSlideChange('next', collectionSwiperRef)}></button>
        </div>
      </div>
    </section>
   );
}
 
export default Collections;