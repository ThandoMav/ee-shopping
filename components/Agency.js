import React from 'react';
import iimage from '../assets/img/about.png';
const About = () => {
  return (
    <>
    <section className="relative table w-full py-36 lg:py-44">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="md:col-span-6">
                        <div className="md:mr-6">
                            <p className="text-indigo-600 text-lg font-medium mb-4">We are a very dedicated team</p>
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">We are a full-service digital agency</h4>
                            <p className="text-slate-400 text-lg max-w-xl">We collaborate with people, teams, and businesses to develop design systems, strategies, and processes to do a better creative work everyday.</p>

                            <div className="mt-6">
                                <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" className="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"><i data-feather="video" className="h-4 w-4"></i></a><span className="font-semibold ml-2 align-middle">Watch Now</span>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="grid grid-cols-12 gap-4 items-center">
                            <div className="col-span-5">
                                <div className="grid grid-cols-1 gap-4">
                                    <img src={iimage} className="shadow rounded-lg" alt="" />

                                    <div className="ml-auto">
                                        <div className="w-28 h-28 bg-indigo-600/10 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-7">
                                <div className="grid grid-cols-1 gap-4">
                                    <img src={iimage} className="shadow rounded-lg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Services</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[30px]">
                    <div className="text-center md:px-6">
                        <div className="w-28 h-28 bg-indigo-600/5 text-indigo-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i className="uil uil-airplay"></i>
                        </div>

                        <div className="content mt-7">
                            <a href="page-services.html" className="title h5 text-lg font-medium hover:text-indigo-600">Digital Marketing</a>
                            <p className="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>

                    <div className="text-center md:px-6">
                        <div className="w-28 h-28 bg-red-600/5 text-red-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i className="uil uil-presentation-play"></i>
                        </div>

                        <div className="content mt-7">
                            <a href="/" className="title h5 text-lg font-medium hover:text-red-600">Video Production</a>
                            <p className="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>

                    <div className="text-center md:px-6">
                        <div className="w-28 h-28 bg-emerald-600/5 text-emerald-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i className="uil uil-mobile-android"></i>
                        </div>

                        <div className="content mt-7">
                            <a href="/" className="title h5 text-lg font-medium hover:text-emerald-600">Web & Mobile</a>
                            <p className="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>

                    <div className="text-center md:px-6">
                        <div className="w-28 h-28 bg-amber-600/5 text-amber-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i className="uil uil-crop-alt"></i>
                        </div>

                        <div className="content mt-7">
                            <a href="/" className="title h5 text-lg font-medium hover:text-amber-600">UX / UI Design</a>
                            <p className="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-6">
                        <div className="grid grid-cols-12 gap-4 items-center">
                            <div className="col-span-7">
                                <div className="grid grid-cols-1 gap-4">
                                    <img src={iimage} className="shadow rounded-lg" alt="" />
                                </div>
                            </div>

                            <div className="col-span-5">
                                <div className="grid grid-cols-1 gap-4">
                                    <img src={iimage} className="shadow rounded-lg" alt="" />

                                    <div className="w-28 h-28 bg-indigo-600/10 rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="md:ml-6">
                            <p className="text-indigo-600 text-lg font-medium mb-4">Web and mobile development</p>
                            <h4 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Analyze your entire market <br /> pricing & stock availability</h4>
                            <p className="text-slate-400 max-w-xl">We collaborate with people, teams, and businesses to develop design systems, strategies, and processes to do a better creative work everyday.</p>

                            <div className="mt-6">
                                <a href="/" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact Us</a>
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
