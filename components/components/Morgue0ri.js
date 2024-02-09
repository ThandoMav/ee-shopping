import React from 'react';
import iimage from '../assets/img/about.png';
const About = () => {
  return (
    <>
    <section class="relative table w-full md:py-44 py-36">
             <div class="absolute inset-0 bg-indigo-600/5"></div>
             <div class="container mx-auto">
                 <div class="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                     <div class="md:col-span-7">
                         <div class="md:mr-6">
                             <span class="text-indigo-600 font-medium">Techwind Marketing</span>
                             <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Increase Your Business <br /> With Techwind</h4>
                             <p class="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                             <div class="subcribe-form mt-6 mb-3">
                                 <form class="relative max-w-xl">
                                     <input type="email" id="subcribe" name="email" class="pt-4 pr-40 pb-4 pl-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800" placeholder="Your Email Address :" />
                                     <button type="submit" class="btn absolute top-[2px] right-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full">Try it for free <i class="uil uil-arrow-right"></i></button>
                                 </form>
                             </div>

                             <span class="text-slate-400 font-medium">Looking for help? <a href="#" class="text-indigo-600">Get in touch with us</a></span>
                         </div>
                     </div>

                     <div class="md:col-span-5">
                         <div class="relative">
                             <img src={iimage} alt="" />
                             <div class="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center">
                                 <a href="#!" data-type="youtube" data-id="yba7hPeTSjk"
                                     class="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600">
                                     <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                 </a>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </section>

         <section class="py-10 bg-indigo-600">
             <div class="container mx-auto">
                 <div class="grid grid-cols-2 md:grid-cols-4">
                     <div class="counter-box relative text-center">
                         <h3 class="font-extrabold lg:text-[72px] text-[50px] text-white opacity-10"><span class="counter-value" data-target="3452">3000</span>+</h3>
                         <span class="counter-head font-semibold text-xl text-white absolute top-2/4 left-0 right-0">Investment Projects</span>
                     </div>

                     <div class="counter-box relative text-center">
                         <h3 class="font-extrabold lg:text-[72px] text-[50px] text-white opacity-10"><span class="counter-value" data-target="15">1</span>+</h3>
                         <span class="counter-head font-semibold text-xl text-white absolute top-2/4 left-0 right-0">Years of Experience</span>
                     </div>

                     <div class="counter-box relative text-center">
                         <h3 class="font-extrabold lg:text-[72px] text-[50px] text-white opacity-10"><span class="counter-value" data-target="54">5</span></h3>
                         <span class="counter-head font-semibold text-xl text-white absolute top-2/4 left-0 right-0">Offices in the World</span>
                     </div>

                     <div class="counter-box relative text-center">
                         <h3 class="font-extrabold lg:text-[72px] text-[50px] text-white opacity-10"><span class="counter-value" data-target="247">12</span>+</h3>
                         <span class="counter-head font-semibold text-xl text-white absolute top-2/4 left-0 right-0">Successful Cases</span>
                     </div>
                 </div>
             </div>
         </section>

         <section class="relative md:py-24 py-16">
             <div class="container mx-auto">
                 <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px] relative">
                     <div class="lg:col-span-8 md:col-span-12">
                         <div class="grid grid-cols-1 pb-8">
                             <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Instant Smart Solutions <br /> With Techwind</h3>

                             <p class="text-slate-400 max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                         </div>

                         <div class="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                             <div class="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                 <i data-feather="codesandbox" class="h-12 w-12 stroke-1 text-indigo-600"></i>

                                 <div class="content mt-7">
                                     <a href="page-services.html" class="title h5 text-lg font-medium hover:text-indigo-600">User Friendly</a>
                                     <p class="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                     <div class="mt-5">
                                         <a href="page-services.html" class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right"></i></a>
                                     </div>
                                 </div>
                             </div>

                             <div class="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                 <i data-feather="send" class="h-12 w-12 stroke-1 text-indigo-600"></i>

                                 <div class="content mt-7">
                                     <a href="page-services.html" class="title h5 text-lg font-medium hover:text-indigo-600">Super Fast</a>
                                     <p class="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                     <div class="mt-5">
                                         <a href="page-services.html" class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right"></i></a>
                                     </div>
                                 </div>
                             </div>

                             <div class="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                 <i data-feather="star" class="h-12 w-12 stroke-1 text-indigo-600"></i>

                                 <div class="content mt-7">
                                     <a href="page-services.html" class="title h5 text-lg font-medium hover:text-indigo-600">Insightful Analytics</a>
                                     <p class="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                     <div class="mt-5">
                                         <a href="page-services.html" class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right"></i></a>
                                     </div>
                                 </div>
                             </div>

                             <div class="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                 <i data-feather="bookmark" class="h-12 w-12 stroke-1 text-indigo-600"></i>

                                 <div class="content mt-7">
                                     <a href="page-services.html" class="title h5 text-lg font-medium hover:text-indigo-600">Highly Rated</a>
                                     <p class="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                     <div class="mt-5">
                                         <a href="page-services.html" class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right"></i></a>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>

                     <div class="lg:col-span-4 md:col-span-12">
                         <div class="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-[30px]">
                             <div class="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                 <i data-feather="users" class="h-12 w-12 stroke-1 text-indigo-600"></i>

                                 <div class="content mt-7">
                                     <a href="page-services.html" class="title h5 text-lg font-medium hover:text-indigo-600">User Forum Forum</a>
                                     <p class="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                     <div class="mt-5">
                                         <a href="page-services.html" class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right"></i></a>
                                     </div>
                                 </div>
                             </div>

                             <div class="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                 <i data-feather="message-circle" class="h-12 w-12 stroke-1 text-indigo-600"></i>

                                 <div class="content mt-7">
                                     <a href="page-services.html" class="title h5 text-lg font-medium hover:text-indigo-600">24/7 Support</a>
                                     <p class="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                     <div class="mt-5">
                                         <a href="page-services.html" class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right"></i></a>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>

                     <div class="overflow-hidden after:content-[''] after:absolute after:h-40 after:w-40 after:bg-red-600/5 after:top-2/4 after:left-0 after:-z-1 after:rounded-3xl after:animate-[spin_10s_linear_infinite]"></div>
                     <div class="overflow-hidden after:content-[''] after:absolute after:h-[512px] after:w-[512px] after:bg-indigo-600/5 after:top-1/4 after:right-0 after:-z-1 after:rounded-full"></div>
                 </div>
             </div>

             <div class="container mx-auto md:mt-24 mt-16">
                 <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                     <div class="md:col-span-6">
                         <div class="lg:mr-8">
                             <img src={iimage} alt="" />
                         </div>
                     </div>

                     <div class="md:col-span-6 mt-8 md:mt-0">
                         <div class="lg:ml-5">
                             <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">Fast & Effective</h6>
                             <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Powerful Digitalization <br /> With Techwind</h3>

                             <p class="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                             <a href="#" class="btn bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-full">Get Started</a>
                         </div>
                     </div>
                 </div>
             </div>

             <div class="container mx-auto md:mt-24 mt-16">
                 <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                     <div class="md:col-span-6 order-1 md:order-2">
                         <div class="lg:ml-8">
                             <img src={iimage} alt=""/>
                         </div>
                     </div>

                     <div class="md:col-span-6 mt-8 md:mt-0 order2 md:order-1">
                         <div class="lg:ml-5">
                             <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">Easy To Track</h6>
                             <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Techwind Marketing <br/> Analytics For All Expenses</h3>

                             <p class="text-slate-400 max-w-xl">You can combine all the Techwind templates into a single one, you can take a component from the Application theme and use it in the Website.</p>

                             <ul class="list-none text-slate-400 my-6">
                                 <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Digital Marketing Solutions for Tomorrow</li>
                                 <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Our Talented & Experienced Marketing Agency</li>
                                 <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Create your own skin to match your brand</li>
                             </ul>

                             <a href="#" class="btn bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-full">Get Started</a>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
    </>
  );
};

export default About;
