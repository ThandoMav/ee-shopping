import React from 'react';

// import data
import { about } from '../data';

// import icons
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const About = () => {
  // destructure about data
  const { title, subtitle1, subtitle2, icon, link } = about;
  return (
    <section className='py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]'>
      <div className='container mx-auto px-[20px] lg:px-[135px]'>
        {/* section title */}

        <p
          className='md:text-body-md mb-12'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {subtitle1}
        </p>
        <p
          className='md:text-body-md mb-8'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          {subtitle2}
        </p>
      </div>
    </section>
  );
};

export default About;
