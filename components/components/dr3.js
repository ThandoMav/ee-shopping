import React from 'react';
import iimage from '../assets/img/about.png';
// import data
import { about } from '../data';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const About = () => {
  // destructure about data
  const { title, subtitle1, subtitle2, icon, link } = about;
  return (
    <>
    <section class="relative table w-full py-36 lg:py-44">
            <div class="container mx-auto">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div class="md:col-span-6">
                        <div class="md:mr-6">
                            <p class="text-indigo-600 text-lg font-medium mb-4">We are a very dedicated team</p>
                            <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">We are a full-service digital agency</h4>
                            <p class="text-slate-400 text-lg max-w-xl">We collaborate with people, teams, and businesses to develop design systems, strategies, and processes to do a better creative work everyday.</p>

                            <div class="mt-6">
                              <button class='btn btn-primary btn-lg btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox'>Make Appointment</button>
                            </div>
                        </div>
                    </div>

                    <div class="md:col-span-6">
                        <div class="grid grid-cols-12 gap-4 items-center">
                            <div class="col-span-5">
                                <div class="grid grid-cols-1 gap-4">
                                    <img src={iimage} class="shadow rounded-lg" alt="" />

                                    <div class="ml-auto">
                                        <div class="w-28 h-28 bg-indigo-600/10 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-span-7">
                                <div class="grid grid-cols-1 gap-4">
                                    <img src={iimage} class="shadow rounded-lg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="relative md:py-24 py-16">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 justify-center">
                    <div class="relative z-2 transition-all duration-500 ease-in-out sm:-mt-[200px] -mt-[140px] m-0">
                        <div class="relative bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md overflow-hidden">
                            <div class="grid lg:grid-cols-12 grid-cols-1">
                                <div class="lg:col-span-4 order-1 lg:order-2 bg-indigo-600">
                                    <div class="p-[30px] lg:text-left text-center">
                                        <span class="text-xl text-white/75">Our proud</span>
                                        <h4 class="text-2xl font-semibold text-white my-3">25 years of undefeated success</h4>
                                        <p class="text-white/75 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                        <div class="mt-6">
                                            <a href="/" class="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md btn btn-primary btn-lg">About us</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="lg:col-span-8 order-2 lg:order-1">
                                    <div class="grid md:grid-cols-2 grid-cols-1 p-[30px] gap-[30px]">

                                        <div class="group flex transition-all duration-500 ease-in-out">
                                            <div class="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                                                <i class="uil uil-ruler-combined"></i>
                                                <BsStarFill/>
                                            </div>
                                            <div class="flex-1 ml-4">
                                                <h4 class="mb-0 text-lg font-medium">Project Planning</h4>
                                                <p class="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                                            </div>
                                        </div>


                                        <div class="group flex transition-all duration-500 ease-in-out">
                                            <div class="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                                                <i class="uil uil-constructor"></i>
                                                <BsStarFill/>
                                            </div>
                                            <div class="flex-1 ml-4">
                                                <h4 class="mb-0 text-lg font-medium">Qualified Specialists</h4>
                                                <p class="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                                            </div>
                                        </div>


                                        <div class="group flex transition-all duration-500 ease-in-out">
                                            <div class="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                                                <i class="uil uil-no-entry"></i>
                                                <BsStarFill/>
                                            </div>
                                            <div class="flex-1 ml-4">
                                                <h4 class="mb-0 text-lg font-medium">Constant Maintenance</h4>
                                                <p class="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                                            </div>
                                        </div>


                                        <div class="group flex transition-all duration-500 ease-in-out">
                                            <div class="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                                                <i class="uil uil-cog"></i>
                                                <BsStarFill/>
                                            </div>
                                            <div class="flex-1 ml-4">
                                                <h4 class="mb-0 text-lg font-medium">Warranty Service</h4>
                                                <p class="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="relative md:py-24 py-16">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 pb-8 text-center">

                    <div
                      className='section-title-group-dr justify-center'
                      data-aos='fade-up'
                      data-aos-delay='10'
                    >
                      <img src={icon} alt='' />
                      <h2 className='h2 section-title'>
                        {title} <span className='text-primary-200'>.</span>
                      </h2>
                    </div>
                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[30px]">
                    <div class="text-center md:px-6">
                        <div class="w-28 h-28 bg-indigo-600/5 text-indigo-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i class="uil uil-airplay"></i>
                            <BsStarFill/>
                        </div>

                        <div class="content mt-7">
                            <a href="page-services.html" class="title h5 text-lg font-medium hover:text-indigo-600">Digital Marketing</a>
                            <p class="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>

                    <div class="text-center md:px-6">
                        <div class="w-28 h-28 bg-red-600/5 text-red-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i class="uil uil-presentation-play"></i>
                            <BsStarFill/>
                        </div>

                        <div class="content mt-7">
                            <a href="/" class="title h5 text-lg font-medium hover:text-red-600">Video Production</a>
                            <p class="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>

                    <div class="text-center md:px-6">
                        <div class="w-28 h-28 bg-emerald-600/5 text-emerald-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i class="uil uil-mobile-android"></i>
                            <BsStarFill/>
                        </div>

                        <div class="content mt-7">
                            <a href="/" class="title h5 text-lg font-medium hover:text-emerald-600">Web & Mobile</a>
                            <p class="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>

                    <div class="text-center md:px-6">
                        <div class="w-28 h-28 bg-amber-600/5 text-amber-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i class="uil uil-crop-alt"></i>
                            <BsStarFill/>
                        </div>

                        <div class="content mt-7">
                            <a href="/" class="title h5 text-lg font-medium hover:text-amber-600">UX / UI Design</a>
                            <p class="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="relative md:py-24 py-16">
            <div class="container mx-auto md:mt-24 mt-16">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div class="md:col-span-6">
                        <div class="grid grid-cols-12 gap-4 items-center">
                            <div class="col-span-7">
                                <div class="grid grid-cols-1 gap-4">
                                    <img src={iimage} class="shadow rounded-lg" alt="" />
                                </div>
                            </div>

                            <div class="col-span-5">
                                <div class="grid grid-cols-1 gap-4">
                                    <img src={iimage} class="shadow rounded-lg" alt="" />

                                    <div class="w-28 h-28 bg-indigo-600/10 rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="md:col-span-6">
                        <div class="md:ml-6">
                            <p class="text-indigo-600 text-lg font-medium mb-4">Web and mobile development</p>
                            <h4 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Analyze your entire market <br /> pricing & stock availability</h4>
                            <p class="text-slate-400 max-w-xl">We collaborate with people, teams, and businesses to develop design systems, strategies, and processes to do a better creative work everyday.</p>

                            <div class="mt-6">
                                <a href="/" class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md btn btn-primary btn-lg">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative mx-auto md:py-24 py-16">
            <div class="container mx-auto">
                <div class="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                    <div class="lg:col-span-8 md:col-span-6 md:text-left text-center">
                        <div
                          className='section-title-group-dr justify-start'
                        >
                          <img src={icon} alt='' />
                          <h2 className='h2 section-title'>
                            {title} <span className='text-primary-200'>.</span>
                          </h2>
                        </div>
                        <p class="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div class="lg:col-span-4 md:col-span-6 md:text-right hidden md:block">
                        <a href="/" class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <i class="uil uil-arrow-right align-middle"></i></a>
                    </div>
                </div>

                <div class="sm:flex mt-4" id="grid">
                    <div class="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
                        <div class="">
                            <div class="relative">
                                <div class="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
                                    <img src={iimage} class="rounded-t-md shadow" alt="" />
                                </div>
                            </div>

                            <div class="pt-4 px-3">
                                <h5 class="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" rel="noreferrer" class="hover:text-indigo-600 transition-all duration-500 ease-in-out">Techwind Personal Portfolio</a></h5>
                                <span class="text-slate-400">Creative</span>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
                        <div class="">
                            <div class="relative">
                                <div class="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-emerald-600/5 dark:bg-emerald-600/30">
                                    <img src={iimage} class="rounded-t-md shadow" alt="" />
                                </div>
                            </div>

                            <div class="pt-4 px-3">
                                <h5 class="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" rel="noreferrer" class="hover:text-emerald-600 transition-all duration-500 ease-in-out">Techwind Minimal Portfolio</a></h5>
                                <span class="text-slate-400">Minimal</span>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
                        <div class="">
                            <div class="relative">
                                <div class="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-red-600/5 dark:bg-red-600/30">
                                  <img src={iimage} class="rounded-t-md shadow" alt="" />
                               </div>
                            </div>

                            <div class="pt-4 px-3">
                                <h5 class="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" rel="noreferrer" class="hover:text-red-600 transition-all duration-500 ease-in-out">Techwind NFT Market</a></h5>
                                <span class="text-slate-400">Crypto</span>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
                        <div class="">
                            <div class="relative">
                                <div class="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-sky-600/5 dark:bg-sky-600/30">
                                      <img src={iimage} class="rounded-t-md shadow" alt="" />
                                </div>
                            </div>

                            <div class="pt-4 px-3">
                                <h5 class="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" rel="noreferrer" class="hover:text-sky-600 transition-all duration-500 ease-in-out">Techwind Portfolio</a></h5>
                                <span class="text-slate-400">Portfolio</span>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
                        <div class="">
                            <div class="relative">
                                <div class="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-amber-600/5 dark:bg-amber-600/30">
                                  <img src={iimage} class="rounded-t-md shadow" alt="" />
                              </div>
                            </div>

                            <div class="pt-4 px-3">
                                <h5 class="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" rel="noreferrer" class="hover:text-amber-600 transition-all duration-500 ease-in-out">Techwind Constuction</a></h5>
                                <span class="text-slate-400">Corporate</span>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
                        <div class="">
                            <div class="relative">
                                <div class="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
                                    <img src={iimage} class="rounded-t-md shadow" alt="" />
                                </div>
                            </div>

                            <div class="pt-4 px-3">
                                <h5 class="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" rel="noreferrer" class="hover:text-indigo-600 transition-all duration-500 ease-in-out">Techwind SEO</a></h5>
                                <span class="text-slate-400">SEO</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                    <div class="md:col-span-12 text-center">
                        <a href="/" class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <i class="uil uil-arrow-right align-middle"></i></a>
                    </div>
                </div>
            </div>

            <div class="container mx-auto lg:mt-24 mt-16 lg:pt-24 pt-16">
                <div class="absolute inset-0 opacity-25 dark:opacity-50  bg-no-repeat bg-center"></div>
                <div class="relative grid grid-cols-1 pb-8 text-center z-1">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">Trusted by more than 10K users</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
                    <div class="counter-box text-center">
                        <h1 class="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><span class="counter-value" data-target="1548">1010</span>+</h1>
                        <h5 class="counter-head text-lg font-medium">Properties Sell</h5>
                    </div>

                    <div class="counter-box text-center">
                        <h1 class="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><span class="counter-value" data-target="25">2</span>+</h1>
                        <h5 class="counter-head text-lg font-medium">Award Gained</h5>
                    </div>

                    <div class="counter-box text-center">
                        <h1 class="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><span class="counter-value" data-target="9">0</span>+</h1>
                        <h5 class="counter-head text-lg font-medium">Years Experience</h5>
                    </div>
                </div>
            </div>

            <div class="container mx-auto md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                  <div
                      className='section-title-group-dr justify-center'
                      data-aos='fade-up'
                      data-aos-delay='10'
                    >
                      <img src={icon} alt='' />
                      <h2 className='h2 section-title'>
                        {title} <span className='text-primary-200'>.</span>
                      </h2>
                    </div>
                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                    <div class="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                        <img src={iimage} alt="" />

                        <div class="content p-6">
                            <a href="blog-detail.html" class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">Design your apps in your own way</a>
                            <p class="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                            <div class="mt-4">
                                <a href="blog-detail.html" class="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                        <img src={iimage} alt="" />

                        <div class="content p-6">
                            <a href="blog-detail.html" class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">How apps is changing the IT world</a>
                            <p class="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                            <div class="mt-4">
                                <a href="blog-detail.html" class="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                        <img src={iimage} alt="" />

                        <div class="content p-6">
                            <a href="blog-detail.html" class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">Smartest Applications for Business</a>
                            <p class="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                            <div class="mt-4">
                                <a href="blog-detail.html" class="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default About;
