import React from 'react';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsStarFill, BsStarHalf, BsFillAlarmFill, BsFillCalendarDateFill, BsFillPinMapFill, BsFillTagsFill } from 'react-icons/bs';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import moment from 'moment';

// import required modules
import { Pagination } from 'swiper';

const JobSlider = ({jobs}) => {
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
      {jobs.map((slide, index) => {
        // destructure slide
        const { slug, image, price, createdAt,location ,faculty,closingDate , name } = slide;
        return (
          // slide
          <SwiperSlide
            key={slug}
            className='bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl'
          >
          <div className='flex gap-x-3  items-center'>
            {/* avatar image */}
            <img
              src={image}
              alt={name}
              />
            {/* text */}
            <div>
            <a className='font-medium' href={`/job/${slug}`}>
              <div className='text-lg text-primary font-bold'>{name}</div>
            </a>
              <p className='max-w-[340px]'>Faculty:{faculty}</p>
              <div className='flex gap-x-2  mt-2 text-orange'>
                <BsFillPinMapFill />
                <p className='max-w-[340px]'>{location}</p>
              </div>
              <div className='flex gap-x-2  mt-2 text-orange'>
                <BsFillAlarmFill />
                <p className='max-w-[340px]'>PostedAt: {moment(createdAt).format('MMM DD, YYYY')}</p>
              </div>
              <div className='flex gap-x-2  mt-2 text-orange'>
                <BsFillCalendarDateFill />
                <p className='max-w-[340px]'>Closing Date:{closingDate} </p>
              </div>
              <div className='flex items-center justify-between mt-2 mb-2 lg:mb-0'>
                {/* stars */}
                <div className='flex gap-x-2 text-orange'>

                </div>
                <a className='font-medium' href={`/job/${slug}`}>
                  Expected Salary: R{price}
                </a>
              </div>
            </div>
          </div>
          </SwiperSlide>

        );
      })}
    </Swiper>
  );
};

export default JobSlider;
