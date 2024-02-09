import React from 'react';
import iimage from '../assets/img/about.png';
const About = () => {
  return (
   <>
   <section className="section py-14" id="home">
      <div className="container mx-auto">
          <div className="lg:flex justify-center">
              <div className="lg:w-2/3 mx-2">
                  <div className="text-center">
                      <h1 className="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-10">
                          Buckzo Is One Of Best Web Design & Development Company
                      </h1>
                      <p className="text-base text-gray-400">We create digital assets and we're focused on Web Technologies and Design,
                          based on London, United Kingdom. We build creative & professional themes.</p>
                      <h4 className="text-black mt-8"> A digital studio crafting <span className=" border-b-[3px] border-black">beautiful</span> experiences.</h4>
                  </div>
              </div>
          </div>
      </div>
  </section>


  <section className="section">
      <div className="container mx-auto">
          <div className="flex justify-center">
              <div className="w-full">
                  <img src={iimage} alt="about-img" className="border rounded p-1 bg-gray-50" />
              </div>
          </div>
      </div>
  </section>


  <section className="section py-10">
      <div className="container mx-auto">
          <div className="flex">
              <div className="w-full flex justify-center">
                  <div className="text-4xl text-black border-b-[3px] border-black">What is our cliesnts say?</div>
              </div>
          </div>
          <div className="flex justify-center">
              <div className="lg:w-2/3 text-center">
                  <div className="block justify-center mt-14">
                      <h1 className="text-4xl"><i className="pe-7s-chat"></i></h1>
                      <h4 className="font-light italic text-base"> "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less."</h4>
                      <img src={iimage} className="h-16 w-16 mx-auto rounded-full mt-4 mb-2.5" alt="testimonials-user" />
                      <p>Theme User - Web Designer</p>
                  </div>
              </div>
          </div>
      </div>
  </section>



  <section className="section py-10">
      <div className="container mx-auto">
          <div className="flex">
              <div className="w-full flex justify-center">
                  <div className="text-4xl text-black border-b-[3px] border-black">Meet the Team</div>
              </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 mt-14">
              <div className="text-center p-8">
                    <img src={iimage} className="rounded mb-4" alt=""/>
                  <h4 className="text-lg font-medium mb-1">Johan De Jager</h4>
                  <h6 className="text-xs text-gray-400">CEO/Founder</h6>
              </div>
              <div className="text-center p-8">
                      <img src={iimage} className="rounded mb-4" alt=""/>
                  <h4 className="text-lg font-medium mb-1">Andrew Sparks</h4>
                  <h6 className="text-xs text-gray-400">CTO/Co-Founder</h6>
              </div>
              <div className="text-center p-8">
                  <img src={iimage} className="rounded mb-4" alt=""/>
                  <h4 className="text-lg font-medium mb-1">David Downs</h4>
                  <h6 className="text-xs text-gray-400">Web Designer</h6>
              </div>
          </div>
      </div>
  </section>
   </>
  );
};

export default About;
