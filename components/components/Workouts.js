import React from 'react';

// import data
import { workoutsPosts } from '../data';

// import components
import WorkoutSlider from './WorkoutSlider';

const Workouts = () => {
  // destructure workouts data
  const { title, icon } = workoutsPosts;
  return (
    <section className='section'>
      {/* section title */}
      <div className='text-center mb-16 lg:mb-32'>
        <h2
          className='h2 mb-3 lg:mb-[18px]'
          data-aos='fade-down'
          data-aos-delay='20'
        >
          Featured Posts
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
      {/* slider */}
      <div data-aos='fade-up' data-aos-delay='30'>
        <WorkoutSlider />
      </div>
    </section>
  );
};

export default Workouts;
