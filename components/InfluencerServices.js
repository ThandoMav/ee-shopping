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
                               We provide a absolute list of Superior digital services.
                           </h1>
                           <p className="text-base text-gray-400">We create digital assets and we're focused on Web Technologies and Design,
                               based on London, United Kingdom. We build creative & professional themes.</p>
                       </div>
                   </div>
               </div>
           </div>
       </section>


       <section className="section py-10">
           <div className="container mx-auto">
               <div className="grid lg:grid-cols-3 gap-8">
                   <div>
                       <div className="p-5">
                           <div className="text-5xl text-blue-500">
                               <i className="pe-7s-leaf"></i>
                           </div>
                           <h4 className="uppercase text-base my-3">Branding</h4>

                           <p className="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                       </div>
                   </div>

                   <div>
                       <div className="p-5">
                           <div className="text-5xl text-blue-500">
                               <i className="pe-7s-helm"></i>
                           </div>
                           <h4 className="uppercase text-base my-3">Highly customizable</h4>

                           <p className="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                       </div>
                   </div>

                   <div>
                       <div className="p-5">
                           <div className="text-5xl text-blue-500">
                               <i className="pe-7s-airplay"></i>
                           </div>
                           <h4 className="uppercase text-base my-3">Responsive design</h4>

                           <p className="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                       </div>
                   </div>

                   <div>
                       <div className="p-5">
                           <div className="text-5xl text-blue-500">
                               <i className="pe-7s-coffee"></i>
                           </div>
                           <h4 className="uppercase text-base my-3">User Experience</h4>

                           <p className="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                       </div>
                   </div>

                   <div>
                       <div className="p-5">
                           <div className="text-5xl text-blue-500">
                               <i className="pe-7s-rocket"></i>
                           </div>
                           <h4 className="uppercase text-base my-3">Optimised for Speed</h4>

                           <p className="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                       </div>
                   </div>

                   <div>
                       <div className="p-5">
                           <div className="text-5xl text-blue-500">
                               <i className="pe-7s-headphones"></i>
                           </div>
                           <h4 className="uppercase text-base my-3">Dedicated support</h4>

                           <p className="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                       </div>
                   </div>
               </div>
           </div>
       </section>

       <section className="section py-10">
           <div className="container mx-auto">
               <div className="flex">
                   <div className="w-full flex justify-center">
                       <div className="text-4xl text-black border-b-[3px] border-black">Our Clients.</div>
                   </div>
               </div>
               <div className="grid lg:grid-cols-4 gap-10 mt-16">
                       <div>
                           <img src={iimage} className="opacity-70 hover:opacity-100 transition-all mx-auto block" alt="client-logo" />
                       </div>
                       <div>
                           <img src={iimage} className="opacity-70 hover:opacity-100 transition-all mx-auto block" alt="client-logo" />
                       </div>
                       <div>
                          <img src={iimage} className="opacity-70 hover:opacity-100 transition-all mx-auto block" alt="client-logo" />
                       </div>
                       <div>
                          <img src={iimage} className="opacity-70 hover:opacity-100 transition-all mx-auto block" alt="client-logo" />
                      </div>
                   </div>
           </div>
       </section>
    </>
  );
};

export default About;
