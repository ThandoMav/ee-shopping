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
                               We provide a absolute list of Superior digital services.
                           </h1>
                           <p class="text-base text-gray-400">We create digital assets and we're focused on Web Technologies and Design,
                               based on London, United Kingdom. We build creative & professional themes.</p>
                       </div>
                   </div>
               </div>
           </div>
       </section>


       <section class="section py-10">
           <div class="container mx-auto">
               <div class="grid lg:grid-cols-3 gap-8">
                   <div>
                       <div class="p-5">
                           <div class="text-5xl text-blue-500">
                               <i class="pe-7s-leaf"></i>
                           </div>
                           <h4 class="uppercase text-base my-3">Branding</h4>

                           <p class="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                       </div>
                   </div>

                   <div>
                       <div class="p-5">
                           <div class="text-5xl text-blue-500">
                               <i class="pe-7s-helm"></i>
                           </div>
                           <h4 class="uppercase text-base my-3">Highly customizable</h4>

                           <p class="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                       </div>
                   </div>

                   <div>
                       <div class="p-5">
                           <div class="text-5xl text-blue-500">
                               <i class="pe-7s-airplay"></i>
                           </div>
                           <h4 class="uppercase text-base my-3">Responsive design</h4>

                           <p class="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                       </div>
                   </div>

                   <div>
                       <div class="p-5">
                           <div class="text-5xl text-blue-500">
                               <i class="pe-7s-coffee"></i>
                           </div>
                           <h4 class="uppercase text-base my-3">User Experience</h4>

                           <p class="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                       </div>
                   </div>

                   <div>
                       <div class="p-5">
                           <div class="text-5xl text-blue-500">
                               <i class="pe-7s-rocket"></i>
                           </div>
                           <h4 class="uppercase text-base my-3">Optimised for Speed</h4>

                           <p class="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                       </div>
                   </div>

                   <div>
                       <div class="p-5">
                           <div class="text-5xl text-blue-500">
                               <i class="pe-7s-headphones"></i>
                           </div>
                           <h4 class="uppercase text-base my-3">Dedicated support</h4>

                           <p class="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                       </div>
                   </div>
               </div>
           </div>
       </section>

       <section class="section py-10">
           <div class="container mx-auto">
               <div class="flex">
                   <div class="w-full flex justify-center">
                       <div class="text-4xl text-black border-b-[3px] border-black">Our Clients.</div>
                   </div>
               </div>
               <div class="grid lg:grid-cols-4 gap-10 mt-16">
                       <div>
                           <img src={iimage} class="opacity-70 hover:opacity-100 transition-all mx-auto block" alt="client-logo" />
                       </div>
                       <div>
                           <img src={iimage} class="opacity-70 hover:opacity-100 transition-all mx-auto block" alt="client-logo" />
                       </div>
                       <div>
                          <img src={iimage} class="opacity-70 hover:opacity-100 transition-all mx-auto block" alt="client-logo" />
                       </div>
                       <div>
                          <img src={iimage} class="opacity-70 hover:opacity-100 transition-all mx-auto block" alt="client-logo" />
                      </div>
                   </div>
           </div>
       </section>
    </>
  );
};

export default About;
