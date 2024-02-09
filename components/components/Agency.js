import React from 'react';
import iimage from '../assets/img/about.png';
const About = () => {
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
                                <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" class="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i data-feather="video" class="h-4 w-4"></i></a><span class="font-semibold ml-2 align-middle">Watch Now</span>
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
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Services</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[30px]">
                    <div class="text-center md:px-6">
                        <div class="w-28 h-28 bg-indigo-600/5 text-indigo-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i class="uil uil-airplay"></i>
                        </div>

                        <div class="content mt-7">
                            <a href="page-services.html" class="title h5 text-lg font-medium hover:text-indigo-600">Digital Marketing</a>
                            <p class="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>

                    <div class="text-center md:px-6">
                        <div class="w-28 h-28 bg-red-600/5 text-red-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i class="uil uil-presentation-play"></i>
                        </div>

                        <div class="content mt-7">
                            <a href="#" class="title h5 text-lg font-medium hover:text-red-600">Video Production</a>
                            <p class="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>

                    <div class="text-center md:px-6">
                        <div class="w-28 h-28 bg-emerald-600/5 text-emerald-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i class="uil uil-mobile-android"></i>
                        </div>

                        <div class="content mt-7">
                            <a href="#" class="title h5 text-lg font-medium hover:text-emerald-600">Web & Mobile</a>
                            <p class="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>

                    <div class="text-center md:px-6">
                        <div class="w-28 h-28 bg-amber-600/5 text-amber-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i class="uil uil-crop-alt"></i>
                        </div>

                        <div class="content mt-7">
                            <a href="#" class="title h5 text-lg font-medium hover:text-amber-600">UX / UI Design</a>
                            <p class="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>
                </div>
            </div>

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
                                <a href="#" class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact Us</a>
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
