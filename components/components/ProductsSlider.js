import React from 'react';
// import data
import { workoutsPosts } from '../data';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../workoutSlider.css';

// import required modules
import { Navigation } from 'swiper';

const FeaturedProductSlider = ({products}) => {

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={32}
      navigation={true}
      // grabCursor={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
      className='workoutSlider'
    >
      {products.map((product, idx) => {
        // destructure program
        const { image, name, category,price, slug, exerpt } = product;
        return (
          <SwiperSlide
            className='max-w-[320px] max-h-[320px] relative bg-purple-200'
            key={slug}
          >
            <img className='w-full h-full object-cover' src={image} alt='' />
            <div className='absolute right-[20px] top-[20px] bg-white h-[26px] px-[14px] flex items-center justify-center rounded-[1px]'>
              <div className='font-primary font-semibold text-sm text-neutral-500'>
                {category}
              </div>
            </div>
            <div className='absolute left-[20px] bottom-[20px] bg-white h-[26px] px-[14px] flex items-center justify-center rounded-[1px]'>
              <div className='font-primary font-semibold text-sm text-neutral-500'>
                {name}
                {exerpt}
              </div>
            </div>
            <div className='absolute left-[20px] top-[20px] bg-white h-[26px] px-[14px] flex items-center justify-center rounded-[1px]'>
              <div className='font-primary font-semibold text-sm text-neutral-500'>
                {price}
              </div>
            </div>

          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default FeaturedProductSlider;
