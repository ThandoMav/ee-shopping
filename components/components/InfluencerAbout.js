import React from 'react';
import iimage from '../assets/img/about.png';
const About = () => {
  return (
   <>
   <section class="section py-14" id="home">
      <div class="container mx-auto">
          <div class="lg:flex justify-center">
              <div class="lg:w-2/3 mx-2">
                  <div class="text-center">
                      <h1 class="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-10">
                          Buckzo Is One Of Best Web Design & Development Company
                      </h1>
                      <p class="text-base text-gray-400">We create digital assets and we're focused on Web Technologies and Design,
                          based on London, United Kingdom. We build creative & professional themes.</p>
                      <h4 class="text-black mt-8"> A digital studio crafting <span class=" border-b-[3px] border-black">beautiful</span> experiences.</h4>
                  </div>
              </div>
          </div>
      </div>
  </section>


  <section class="section">
      <div class="container mx-auto">
          <div class="flex justify-center">
              <div class="w-full">
                  <img src={iimage} alt="about-img" class="border rounded p-1 bg-gray-50" />
              </div>
          </div>
      </div>
  </section>


  <section class="section py-10">
      <div class="container mx-auto">
          <div class="flex">
              <div class="w-full flex justify-center">
                  <div class="text-4xl text-black border-b-[3px] border-black">What is our cliesnts say?</div>
              </div>
          </div>
          <div class="flex justify-center">
              <div class="lg:w-2/3 text-center">
                  <div class="block justify-center mt-14">
                      <h1 class="text-4xl"><i class="pe-7s-chat"></i></h1>
                      <h4 class="font-light italic text-base"> "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less."</h4>
                      <img src={iimage} class="h-16 w-16 mx-auto rounded-full mt-4 mb-2.5" alt="testimonials-user" />
                      <p>Theme User - Web Designer</p>
                  </div>
              </div>
          </div>
      </div>
  </section>



  <section class="section py-10">
      <div class="container mx-auto">
          <div class="flex">
              <div class="w-full flex justify-center">
                  <div class="text-4xl text-black border-b-[3px] border-black">Meet the Team</div>
              </div>
          </div>
          <div class="grid lg:grid-cols-3 gap-4 mt-14">
              <div class="text-center p-8">
                    <img src={iimage} class="rounded mb-4" alt=""/>
                  <h4 class="text-lg font-medium mb-1">Johan De Jager</h4>
                  <h6 class="text-xs text-gray-400">CEO/Founder</h6>
              </div>
              <div class="text-center p-8">
                      <img src={iimage} class="rounded mb-4" alt=""/>
                  <h4 class="text-lg font-medium mb-1">Andrew Sparks</h4>
                  <h6 class="text-xs text-gray-400">CTO/Co-Founder</h6>
              </div>
              <div class="text-center p-8">
                  <img src={iimage} class="rounded mb-4" alt=""/>
                  <h4 class="text-lg font-medium mb-1">David Downs</h4>
                  <h6 class="text-xs text-gray-400">Web Designer</h6>
              </div>
          </div>
      </div>
  </section>
   </>
  );
};

export default About;
