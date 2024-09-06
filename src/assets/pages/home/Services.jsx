import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Image Imports
import decorPic from "../../images/masks.png";
import birthdayPic from "../../images/baloons.png";
import photographyPic from "../../images/photoSet.png";
import weddingPic from "../../images/couple.png";
import eventPic from "../../images/wineglass.png";
import cateringPic from "../../images/burgers.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const Services = () => {
  const [swiper, setSwiper] = useState();

  const handleSlideChange = (e) => {
    swiper.slideNext();
  };

  const handlePrevClick = () => {
    if (swiper && swiper.activeIndex > 0) {
      swiper.slidePrev();
    }
  };

  const [items, setItems] = useState([
    { id: 1, image: decorPic, title: "Event", description: "decoration" },
    {
      id: 2,
      image: photographyPic,
      title: "Event",
      description: "photography",
    },
    {
      id: 3,
      image: cateringPic,
      title: "Event",
      description: "catering service",
    },
    { id: 4, image: eventPic, title: "Event", description: "event planner" },
    {
      id: 5,
      image: weddingPic,
      title: "Event",
      description: "wedding planner",
    },
    {
      id: 6,
      image: birthdayPic,
      title: "Event",
      description: "birthday planner",
    },
  ]);

  return (
    <section id="Services">
      <h2>Our Services</h2>
      <article>
        <div className="container">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            onSwiper={(instance) => setSwiper(instance)}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="item-container">
                  <img src={item.image} alt={item.description} />
                  <div className="overlay">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </article>
    </section>
  );
};

export default Services;