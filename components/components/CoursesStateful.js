import React from 'react';

// import data
import { courses } from '../data';
// import icons
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const Courses = ({courses}) => {
  return (
    <section className='section-sm lg:section-lg sm:mb-30 mb-40'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='text-center mb-16 lg:mb-32'>
          <h2
            className='h2 mb-3 lg:mb-[18px]'
            data-aos='fade-down'
            data-aos-delay='200'
          >
            Popular Courses
          </h2>
          <p
            className='max-w-[480px] mx-auto'
            data-aos='fade-down'
            data-aos-delay='300'
          >
            Practice anywhere, anytime. Explore a new way to exercise and learn
            more about yourself. We are providing the best.
          </p>
        </div>
        {/* course list */}
        <div className='flex flex-col lg:flex-row lg:gap-x-[33px] gap-y-24 mb-7 lg:mb-14'>
          {posts.map((item, index) => {
            const { image, title, exerpt, link, delay, _id, slug } = item;
            return (
              <Link href={`/posts/${slug}`}>
              <div
                className='w-full max-w-[368px] px-[18px] pb-[26px] lg:px-[28px] lg:pb-[38px] bg-white hover:shadow-primary flex flex-col rounded-[14px] mx-auto transition'
                data-aos='fade-up'
                data-aos-delay={delay}
                key={_id}
              >
                <div className='-mt-[38px] lg:-mt-12 mb-4 lg:mb-6'>
                  <img src={image} alt={title} />
                </div>
                <div>
                  <h4 className='text-lg lg:text-xl font-semibold mb-2 lg:mb-4'>
                    {title}
                  </h4>
                  <p>{exerpt}</p>
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
                  <a className='font-medium' href={`/posts/${slug}`}>
                    {link}
                  </a>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
        <div className='flex justify-center'>
          <button
            className='btn btn-sm btn-orange'
            data-aos='fade-up'
            data-aos-delay='600'
          >
            Browse all
          </button>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps() {
  await db.connect();
  const posts = await Post.find().lean().limit(6);
  const courses = await Course.find().lean().limit(6);
  return {
    props: {
      posts: posts.map(db.convertDocToObj),
      courses: courses.map(db.convertDocToObj),
    },
  };
}

export default Courses;