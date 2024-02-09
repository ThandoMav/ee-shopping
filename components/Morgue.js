import React from 'react';
import iimage from '../assets/img/about.png';
const About = () => {
  return (
    <>
    <section className="relative table w-full md:py-44 py-36">
             <div className="absolute inset-0 bg-indigo-600/5"></div>
             <div className="container mx-auto">
                 <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                     <div className="md:col-span-7">
                         <div className="md:mr-6">
                             <span className="text-indigo-600 font-medium">Techwind Marketing</span>
                             <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Increase Your Business <br /> With Techwind</h4>
                             <p className="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                             <div className="subcribe-form mt-6 mb-3">
                                 <form className="relative max-w-xl">
                                     <input type="email" id="subcribe" name="email" className="pt-4 pr-40 pb-4 pl-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800" placeholder="Your Email Address :" />
                                     <button type="submit" className="btn absolute top-[2px] right-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full">Try it for free <i className="uil uil-arrow-right"></i></button>
                                 </form>
                             </div>

                             <span className="text-slate-400 font-medium">Looking for help? <a href="#" className="text-indigo-600">Get in touch with us</a></span>
                         </div>
                     </div>

                     <div className="md:col-span-5">
                         <div className="relative">
                             <img src={iimage} alt="" />
                             <div className="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center">
                                 <a href="#!" data-type="youtube" data-id="yba7hPeTSjk"
                                     className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600">
                                     <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                 </a>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </section>

         <section className="py-10 bg-indigo-600">
             <div className="container mx-auto">
                 <div className="grid grid-cols-2 md:grid-cols-4">
                     <div className="counter-box relative text-center">
                         <h3 className="font-extrabold lg:text-[72px] text-[50px] text-white opacity-10"><span className="counter-value" data-target="3452">3000</span>+</h3>
                         <span className="counter-head font-semibold text-xl text-white absolute top-2/4 left-0 right-0">Investment Projects</span>
                     </div>

                     <div className="counter-box relative text-center">
                         <h3 className="font-extrabold lg:text-[72px] text-[50px] text-white opacity-10"><span className="counter-value" data-target="15">1</span>+</h3>
                         <span className="counter-head font-semibold text-xl text-white absolute top-2/4 left-0 right-0">Years of Experience</span>
                     </div>

                     <div className="counter-box relative text-center">
                         <h3 className="font-extrabold lg:text-[72px] text-[50px] text-white opacity-10"><span className="counter-value" data-target="54">5</span></h3>
                         <span className="counter-head font-semibold text-xl text-white absolute top-2/4 left-0 right-0">Offices in the World</span>
                     </div>

                     <div className="counter-box relative text-center">
                         <h3 className="font-extrabold lg:text-[72px] text-[50px] text-white opacity-10"><span className="counter-value" data-target="247">12</span>+</h3>
                         <span className="counter-head font-semibold text-xl text-white absolute top-2/4 left-0 right-0">Successful Cases</span>
                     </div>
                 </div>
             </div>
         </section>

         <div className="container md:mt-24 mt-16 mx-auto">
             <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                 <div className="md:col-span-5">
                     <div className="relative">
                         <div className="pr-12">
                             <img src={iimage} className="rounded-md" alt="" />
                         </div>

                         <div className="absolute bottom-16 right-0">
                             <img src={iimage} className="rounded-md rounded-br-[30px] shadow-md w-56 h-56" alt="" />
                             <div className="absolute bottom-0 right-0 text-center">
                                 <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" className="lightbox h-14 w-14 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-indigo-600 text-white">
                                     <i className="mdi mdi-play inline-flex items-center justify-center text-xl"></i>
                                 </a>
                             </div>
                         </div>
                     </div>
                 </div>

                 <div className="md:col-span-7">
                     <div className="lg:ml-4">
                         <span className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full h-5">About Company</span>
                         <h4 className="mb-6 mt-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">World's largest and <br /> trusted construction company</h4>
                         <p className="text-slate-400 max-w-xl">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions.</p>
                         <div className="mt-6">
                             <a href="#" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Read More <i className="uil uil-angle-right-b align-middle"></i></a>
                         </div>

                         <div className="pt-6 mt-6 border-t dark:border-gray-700">
                             <div className="relative grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                                 <div className="counter-box">
                                     <h1 className="text-4xl font-bold mb-2"><span className="counter-value" data-target="1548">1010</span>+</h1>
                                     <h5 className="counter-head text-lg font-medium">Projects completed</h5>
                                 </div>

                                 <div className="counter-box">
                                     <h1 className="text-4xl font-bold mb-2"><span className="counter-value" data-target="25">2</span>+</h1>
                                     <h5 className="counter-head text-lg font-medium">Years of experience</h5>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>

         <section className="relative md:py-24 py-16">
             <div className="container mx-auto">
                 <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px] relative">
                     <div className="lg:col-span-8 md:col-span-12">
                         <div className="grid grid-cols-1 pb-8">
                             <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Instant Smart Solutions <br /> With Techwind</h3>

                             <p className="text-slate-400 max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                         </div>

                         <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                             <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                 <i data-feather="codesandbox" className="h-12 w-12 stroke-1 text-indigo-600"></i>

                                 <div className="content mt-7">
                                     <a href="page-services.html" className="title h5 text-lg font-medium hover:text-indigo-600">User Friendly</a>
                                     <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                     <div className="mt-5">
                                         <a href="page-services.html" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
                                     </div>
                                 </div>
                             </div>

                             <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                 <i data-feather="send" className="h-12 w-12 stroke-1 text-indigo-600"></i>

                                 <div className="content mt-7">
                                     <a href="page-services.html" className="title h5 text-lg font-medium hover:text-indigo-600">Super Fast</a>
                                     <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                     <div className="mt-5">
                                         <a href="page-services.html" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
                                     </div>
                                 </div>
                             </div>

                             <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                 <i data-feather="star" className="h-12 w-12 stroke-1 text-indigo-600"></i>

                                 <div className="content mt-7">
                                     <a href="page-services.html" className="title h5 text-lg font-medium hover:text-indigo-600">Insightful Analytics</a>
                                     <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                     <div className="mt-5">
                                         <a href="page-services.html" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
                                     </div>
                                 </div>
                             </div>

                             <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                 <i data-feather="bookmark" className="h-12 w-12 stroke-1 text-indigo-600"></i>

                                 <div className="content mt-7">
                                     <a href="page-services.html" className="title h5 text-lg font-medium hover:text-indigo-600">Highly Rated</a>
                                     <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                     <div className="mt-5">
                                         <a href="page-services.html" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>

                     <div className="lg:col-span-4 md:col-span-12">
                         <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-[30px]">
                             <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                 <i data-feather="users" className="h-12 w-12 stroke-1 text-indigo-600"></i>

                                 <div className="content mt-7">
                                     <a href="page-services.html" className="title h5 text-lg font-medium hover:text-indigo-600">User Forum Forum</a>
                                     <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                     <div className="mt-5">
                                         <a href="page-services.html" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
                                     </div>
                                 </div>
                             </div>

                             <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                                 <i data-feather="message-circle" className="h-12 w-12 stroke-1 text-indigo-600"></i>

                                 <div className="content mt-7">
                                     <a href="page-services.html" className="title h5 text-lg font-medium hover:text-indigo-600">24/7 Support</a>
                                     <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                     <div className="mt-5">
                                         <a href="page-services.html" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>

                     <div className="overflow-hidden after:content-[''] after:absolute after:h-40 after:w-40 after:bg-red-600/5 after:top-2/4 after:left-0 after:-z-1 after:rounded-3xl after:animate-[spin_10s_linear_infinite]"></div>
                     <div className="overflow-hidden after:content-[''] after:absolute after:h-[512px] after:w-[512px] after:bg-indigo-600/5 after:top-1/4 after:right-0 after:-z-1 after:rounded-full"></div>
                 </div>
             </div>

             <div className="container mx-auto md:mt-24 mt-16">
                 <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                     <div className="md:col-span-6">
                         <div className="lg:mr-8">
                             <img src={iimage} alt="" />
                         </div>
                     </div>

                     <div className="md:col-span-6 mt-8 md:mt-0">
                         <div className="lg:ml-5">
                             <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Fast & Effective</h6>
                             <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Powerful Digitalization <br /> With Techwind</h3>

                             <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                             <a href="#" className="btn bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-full">Get Started</a>
                         </div>
                     </div>
                 </div>
             </div>

             <div className="container mx-auto md:mt-24 mt-16">
                 <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                     <div className="md:col-span-6 order-1 md:order-2">
                         <div className="lg:ml-8">
                             <img src={iimage} alt=""/>
                         </div>
                     </div>

                     <div className="md:col-span-6 mt-8 md:mt-0 order2 md:order-1">
                         <div className="lg:ml-5">
                             <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Easy To Track</h6>
                             <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Techwind Marketing <br/> Analytics For All Expenses</h3>

                             <p className="text-slate-400 max-w-xl">You can combine all the Techwind templates into a single one, you can take a component from the Application theme and use it in the Website.</p>

                             <ul className="list-none text-slate-400 my-6">
                                 <li className="mb-1 flex"><i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Digital Marketing Solutions for Tomorrow</li>
                                 <li className="mb-1 flex"><i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Our Talented & Experienced Marketing Agency</li>
                                 <li className="mb-1 flex"><i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Create your own skin to match your brand</li>
                             </ul>

                             <a href="#" className="btn bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-full">Get Started</a>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
    </>
  );
};

export default About;
