import React from 'react';

// import testimonials data
import { jobData } from '../data';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../slider.css';

// import required modules
import { Pagination } from 'swiper';

const TestimonialSlider = () => {
  return (
    <Swiper
      slidesPerView={'auto'}
      centeredSlides={true}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='mySwiper'
    >
      {jobData.map((slide, index) => {
        // destructure slide
        const { slug, image, exerpt, price,  jobAddress,faculty, name, delay } = slide;
        return (
       <a href={`/accomodations/${slug}`}>
          // slide
          <SwiperSlide
            key={index}
            className='bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl'
          >
          <div className='flex gap-x-3  items-center'>
            {/* avatar image */}
            <img src={image}  alt={name} />
            {/* text */}
            <div>
              <div className='text-lg text-primary font-bold'>{name}</div>
              <div className='mb-4 font-semibold text-accent-primary'>
                {faculty}
              </div>
              <p className='max-w-[340px]'>{exerpt}</p>
              <div className='flex gap-x-2  mt-2 text-orange'>
                <BsStarFill />
                <p className='max-w-[340px]'>{jobAddress}</p>
              </div>
              <div className='flex items-center justify-between mt-2 mb-2 lg:mb-0'>
                {/* stars */}
                <div className='flex gap-x-2 text-orange'>
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                </div>
                <a className='font-medium' href={`/accomodations/${slug}`}>
                  R{price}
                </a>
              </div>
            </div>
          </div>
          </SwiperSlide>
        </a>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
