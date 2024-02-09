import React from 'react';
// import data

import { BsStarFill, BsStarHalf } from 'react-icons/bs';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import '../workoutSlider.css';

// import required modules
import { Navigation, Autoplay } from 'swiper';

const PostsFeaturedSlider = ({posts}) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={32}
      navigation={true}
      autoplay={{
        delay:2500,
        disableOnInteraction: false
      }}
      // grabCursor={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Autoplay,Navigation]}
      className='workoutSlider'
    >
      {posts.map((post, idx) => {
        // destructure program
        const { image, name, slug, category, postedAt } = post;
        return (
          <SwiperSlide
            className='max-w-[320px] mb-64 max-h-[320px] relative bg-purple-200'
            key={slug}
          >
            <a href={`/post/${slug}`}>
                <div
                  className='w-full max-w-[368px] px-[18px] pb-[26px] lg:px-[28px] lg:pb-[38px] bg-white hover:shadow-primary flex flex-col rounded-[14px] mx-auto transition'
                  data-aos='fade-up'
                  data-aos-delay='100'
                  key={slug}
                >
                  <div className='-mt-[38px] lg:-mt-12 mb-4 lg:mb-6'>
                    <img src={image}  alt={name} />
                  </div>
                  <div>
                    <h4 className='text-lg lg:text-xl font-semibold mb-2 lg:mb-4'>
                      {name}
                    </h4>
                    <h6 className='text-lg lg:text-xl font-semibold mb-2 lg:mb-4'>
                      R{category}
                    </h6>
                    <p>{category}</p>

                    <div className='flex mt-2 gap-x-2 text-orange'>
                      <BsStarFill />
                      <p>{category}</p>
                    </div>
                    <div className='flex mt-2 gap-x-2 text-orange'>
                      <BsStarFill />
                      <p>{postedAt}</p>
                    </div>
                  </div>
                  <div className='flex items-center justify-between mt-8 mb-2 lg:mb-0'>
                    {/* stars */}
                    <div className='flex gap-x-2 text-orange'>
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarHalf />
                    </div>
                    <a className='font-medium' href={`/post/${slug}`}>
                      {name}
                    </a>
                  </div>
                </div>
                </a>

          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PostsFeaturedSlider;
