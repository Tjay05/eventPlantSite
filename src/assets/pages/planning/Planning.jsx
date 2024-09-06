import React, { useState, useRef, useEffect } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
SwiperCore.use([Autoplay, Navigation]);

// Social Icons

import { useNavigate } from 'react-router-dom';

const PlanWrap = () => {
  // Image Imports
  const event1 = 'https://res.cloudinary.com/dolfampoa/image/upload/v1725468709/Diamond%20Dreams/IMG-20240904-WA0002_ayv4hx.jpg';
  const event2 = 'https://res.cloudinary.com/dolfampoa/image/upload/v1725468710/Diamond%20Dreams/IMG-20240904-WA0001_zr2x64.jpg';
  const event3 = 'https://res.cloudinary.com/dolfampoa/image/upload/v1725468709/Diamond%20Dreams/IMG-20240904-WA0004_ivfwzz.jpg';
  const event4 = 'https://res.cloudinary.com/dolfampoa/image/upload/v1725468709/Diamond%20Dreams/IMG-20240904-WA0003_hxueg5.jpg';
  const event5 = 'https://res.cloudinary.com/dolfampoa/image/upload/v1725468704/Diamond%20Dreams/IMG-20240904-WA0005_jisbqz.jpg';
  const event6 = 'https://res.cloudinary.com/dolfampoa/image/upload/v1725468704/Diamond%20Dreams/IMG-20240904-WA0006_asm23d.jpg';
  const event7 = 'https://res.cloudinary.com/dolfampoa/image/upload/v1725468703/Diamond%20Dreams/IMG-20240904-WA0007_klgtyn.jpg';

  const [collection, setCollection] = useState([
    { id: 1, image: event1 },
    { id: 2, image: event2 },
    { id: 3, image: event3 },
    { id: 4, image: event4 },
    { id: 5, image: event5 },
    { id: 6, image: event6 },
    { id: 7, image: event7 },
  ]);

  const handleSlide1Change = (direction, swiperRef) => {
    const activeIndex = swiperRef.current.swiper.activeIndex;
    let newIndex = activeIndex;

    if (direction === 'next') {
      newIndex = (newIndex + 1) % collection.length;
    } else if (direction === 'prev') {
      newIndex = (newIndex - 1 + collection.length) % collection.length;
    }

    swiperRef.current.swiper.slideTo(newIndex, 500, false); 
  };
  const collectionSwiperRef = useRef(null);

  const history = useNavigate();

  return (
    <div className='container'>
      <section>
        <h2>Elevate Your Celebration With Our Event Planning Services</h2>
        <p>
          At Usuji World, we specialize in curating magical and seamless wedding experiences. Our dedicated team of experienced planners is committed to bringing your dream celebration to life, ensuring every detail reflects your unique love story.
        </p>
      </section>
      <section>
        <h2>Our Approach</h2>
        <ul>
          <li>
            <b>Personalized Consultation:</b>
            <p>
              We begin by understanding your vision, preferences, and aspirations, tailoring our services to your individual needs.
            </p>
          </li>
          <li>
            <b>Meticulous Planning:</b>
            <p>
              From venue selection to décor, logistics, and vendor coordination, we meticulously plan every aspect of your event.
            </p>
          </li>
          <li>
            <b>Creative Design:</b>
            <p>
              Our innovative approach and eye for design guarantee a celebration that radiates elegance and sophistication.
            </p>
          </li>
          <li>
            <b>Attention to Detail:</b>
            <p>
              We believe in perfection. No detail is too small; we ensure a flawless and memorable event.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Services Offered</h2>
        <ul>
          <li>
            <b>Full-Service Planning:</b>
            <p>
              Comprehensive support from inception to execution, covering every aspect of your wedding day.
            </p>
          </li>
          <li>
            <b>Partial Planning:</b>
            <p>
              Assistance with specific elements or coordination during specific phases of your planning journey.
            </p>
          </li>
          <li>
            <b>Day-of Coordination:</b>
            <p>
              Ensuring your celebration runs smoothly on the big day, allowing you to savor every moment stress-free.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Why Us</h2>
        <ul>
          <li>
            <b>Experience:</b>
            <p>
              Years of expertise in orchestrating weddings, ensuring a stress-free planning process.
            </p>
          </li>
          <li>
            <b>Vendor Network:</b>
            <p>
              Strong relationships with top-tier vendors, ensuring quality and reliability in every service provided.
            </p>
          </li>
          <li>
            <b>Passion for Perfection:</b>
            <p>
              Our passion lies in creating moments that last a lifetime, leaving you and your guests enchanted.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Some Events We Featured In</h2>
        <div className='collectionSwiper'>
          <Swiper
            ref={collectionSwiperRef}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
          >
            {collection.map((collect) => (
              <SwiperSlide key={collect.id}>
                <img src={collect.image} alt={collect.title} />
                <p>{collect.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-button-prev" onClick={() => handleSlide1Change('prev', collectionSwiperRef)}></button>
          <button className="swiper-button-next" onClick={() => handleSlide1Change('next', collectionSwiperRef)}></button>
        </div>
      </section>
    </div>
  );
}
 
export default PlanWrap;