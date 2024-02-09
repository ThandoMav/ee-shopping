import React from 'react';

// import icons
import { MdEmail } from 'react-icons/md';

const Newsletter = () => {
  return (
    <section className='section section-sm lg:section-lg bg-green min-h-[320px]'>
      <div className='container mx-auto'>
        <div
          className='border-[8px] border-green-300 rounded-lg text-center pt-[70px] pb-12'
          data-aos='fade-up'
          data-aos-delay='300'
          data-aos-offset='300'
        >
          <h4
            className='text-[26px] text-white font-bold mb-[14px]'
            data-aos='fade-up'
            data-aos-delay='300'
            data-aos-offset='150'
          >
            Get A Quote
          </h4>
          <p
            className='text-green-200 mb-6'
            data-aos='fade-up'
            data-aos-delay='400'
            data-aos-offset='150'
          >
            Subscribe our newsletter for further updates about us
          </p>
          <div
            className=' flex justify-center'
            data-aos='fade-up'
            data-aos-delay='50'
            data-aos-offset='50'
          >
          <button className='btn btn-lg btn-primary text-white w-full lg:max-w-[180px]'>
            Get started
          </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;
