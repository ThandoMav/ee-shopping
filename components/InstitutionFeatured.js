import React from 'react';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn, staggerContainer } from '../utils/variants';

const InstitutionFeatured = ({institutions}) => {
  // destructure menu data
  return (
    <section className='min-h-[780px]'>

    {/* section title */}
    <div className='text-center mb-12'>
      <h2
        className='h2 mb-1 lg:mb-[18px]'
        data-aos='fade-down'
        data-aos-delay='20'
      >
        Featured Institutions
      </h2>
      <p
        className='max-w-[480px] mx-auto'
        data-aos='fade-down'
        data-aos-delay='30'
      >
        Practice anywhere, anytime. Explore a new way to exercise and learn
        more about yourself. We are providing the best.
      </p>
    </div>
      {/* background */}
      <div className='h-[780px] bg-menu absolute w-full max-w-[1800px] -z-0'></div>
      {/* text */}

      {/* menu gallery */}
      <motion.div
        initial={{
          opacity: 0,
          y: 150,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'tween',
          delay: 0.2,
          duration: 1.6,
          ease: 'easeOut',
        }}
        className='relative '
      >
        <div className='container mx-auto'>
          <div className='min-h-[590px] z-30 mb-8 md:mb-4 xl:mb-16'>
            {/* grid */}
            <div className='grid grid-cols-1 lg:grid-cols-4 min-h-[590px]'>

              {institutions.map((item, index) => {
                // destructure item
                const { image, name, slug, } = item;
                return (
                  <div key={slug}>
                    <div className='flex flex-row lg:flex-col h-full'>
                      {/* image */}
                      {/* reverse order for the first image and the last one */}
                      <div
                        className={`w-[45%] md:w-auto ${
                          index === 1 || index === 3
                            ? 'lg:order-1'
                            : 'order-none'
                        } `}
                      >
                        <img src={image} alt='' />
                      </div>
                      {/* text */}
                      <div className='bg-[#fff3e4] flex-1 flex flex-col justify-center px-6 lg:p-12 lg:max-h-[250px] xl:max-h-max'>
                        <div className='text-center'>
                          <div className='text-xl font-semibold text-dark xl:text-2xl'>
                            {name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button className='btn mx-auto capitalize'>View</button>
        </div>
      </motion.div>
    </section>
  );
};

export default InstitutionFeatured;
