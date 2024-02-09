import React from 'react';
import iimage from '../assets/img/about.png';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

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
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container mx-auto">

                <div id="grid" className="md:flex justify-center">
                    <div className="md:w-1/3 p-3 picture-item">
                        <div className="relative block overflow-hidden rounded group transition-all duration-500">
                            <img src={iimage}
                                className="rounded transition-all duration-500 group-hover:scale-105" alt="work-image" />
                            <a href="javascript:void(0)"
                                className="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
                                <div>
                                    <p className="text-sm text-gray-400">Media, Icons</p>
                                    <h6 className="text-base text-black font-medium">Open Imagination</h6>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="md:w-1/3 p-3 picture-item">
                        <div className="relative block overflow-hidden rounded group transition-all duration-500">
                            <img src={iimage}
                                className="rounded transition-all duration-500 group-hover:scale-105" alt="work-image" />
                            <a href="javascript:void(0)"
                                className="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
                                <div>
                                    <p className="text-sm text-gray-400">Illustrations, Graphics</p>
                                    <h6 className="text-base text-black font-medium">Shake It!</h6>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="flex justify-center mt-8">
                    <a href="/about" className="py-4 px-7 rounded text-sm font-medium bg-blue-500 text-white">More About Me <i className="mdi mdi-arrow-right ms-1"></i></a>
                </div>
            </div>
        </section>

        <section className="section py-10">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-3 gap-8 text-center">
                    <div>
                        <div className="p-5">
                            <div className="text-5xl text-blue-500">
                                <i className="pe-7s-leaf"></i>
                                <BsStarFill/>
                            </div>
                            <h4 className="uppercase text-base my-3">Branding</h4>

                            <p className="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                        </div>
                    </div>

                    <div>
                        <div className="p-5">
                            <div className="text-5xl text-blue-500">
                                <i className="pe-7s-helm"></i>
                                <BsStarFill/>
                            </div>
                            <h4 className="uppercase text-base my-3">Highly customizable</h4>

                            <p className="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                        </div>
                    </div>

                    <div>
                        <div className="p-5">
                            <div className="text-5xl text-blue-500">
                                <i className="pe-7s-airplay"></i>
                                  <BsStarFill/>
                            </div>
                            <h4 className="uppercase text-base my-3">Responsive design</h4>

                            <p className="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative mx-auto md:py-24 py-16">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                    <div className="lg:col-span-8 md:col-span-6 md:text-left text-center">
                        <div className="w-full flex justify-start">
                            <div className="text-4xl text-black border-b-[3px] border-black mb-4">My Shop</div>
                        </div>
                        <p className="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6 md:text-right hidden md:block">
                        <a href="/" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <i className="uil uil-arrow-right align-middle"></i></a>
                    </div>
                </div>

                <div className="sm:flex mt-4" id="grid">
                    <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
                        <div className="">
                            <div className="relative">
                                <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
                                    <img src={iimage} className="rounded-t-md shadow" alt="" />
                                </div>
                            </div>

                            <div className="pt-4 px-3">
                                <h5 className="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-all duration-500 ease-in-out">Techwind Personal Portfolio</a></h5>
                                <span className="text-slate-400">Creative</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
                        <div className="">
                            <div className="relative">
                                <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-emerald-600/5 dark:bg-emerald-600/30">
                                    <img src={iimage} className="rounded-t-md shadow" alt="" />
                                </div>
                            </div>

                            <div className="pt-4 px-3">
                                <h5 className="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" rel="noreferrer" className="hover:text-emerald-600 transition-all duration-500 ease-in-out">Techwind Minimal Portfolio</a></h5>
                                <span className="text-slate-400">Minimal</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
                        <div className="">
                            <div className="relative">
                                <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-red-600/5 dark:bg-red-600/30">
                                  <img src={iimage} className="rounded-t-md shadow" alt="" />
                               </div>
                            </div>

                            <div className="pt-4 px-3">
                                <h5 className="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" rel="noreferrer" className="hover:text-red-600 transition-all duration-500 ease-in-out">Techwind NFT Market</a></h5>
                                <span className="text-slate-400">Crypto</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
                        <div className="">
                            <div className="relative">
                                <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-sky-600/5 dark:bg-sky-600/30">
                                      <img src={iimage} className="rounded-t-md shadow" alt="" />
                                </div>
                            </div>

                            <div className="pt-4 px-3">
                                <h5 className="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" rel="noreferrer" className="hover:text-sky-600 transition-all duration-500 ease-in-out">Techwind Portfolio</a></h5>
                                <span className="text-slate-400">Portfolio</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
                        <div className="">
                            <div className="relative">
                                <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-amber-600/5 dark:bg-amber-600/30">
                                  <img src={iimage} className="rounded-t-md shadow" alt="" />
                              </div>
                            </div>

                            <div className="pt-4 px-3">
                                <h5 className="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" rel="noreferrer" className="hover:text-amber-600 transition-all duration-500 ease-in-out">Techwind Constuction</a></h5>
                                <span className="text-slate-400">Corporate</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
                        <div className="">
                            <div className="relative">
                                <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
                                    <img src={iimage} className="rounded-t-md shadow" alt="" />
                                </div>
                            </div>

                            <div className="pt-4 px-3">
                                <h5 className="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-all duration-500 ease-in-out">Techwind SEO</a></h5>
                                <span className="text-slate-400">SEO</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                    <div className="md:col-span-12 text-center">
                        <a href="/" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <i className="uil uil-arrow-right align-middle"></i></a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto lg:mt-24 mt-16 lg:pt-24 pt-16">
                <div className="absolute inset-0 opacity-25 dark:opacity-50  bg-no-repeat bg-center"></div>
                <div className="relative grid grid-cols-1 pb-8 text-center z-1">
                    <div className="w-full flex justify-center">
                        <div className="text-4xl text-black border-b-[3px] border-black mb-4">Trusted by more than 10K users</div>
                    </div>
                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><span className="counter-value" data-target="1548">1010</span>+</h1>
                        <h5 className="counter-head text-lg font-medium">Properties Sell</h5>
                    </div>

                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><span className="counter-value" data-target="25">2</span>+</h1>
                        <h5 className="counter-head text-lg font-medium">Award Gained</h5>
                    </div>

                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><span className="counter-value" data-target="9">0</span>+</h1>
                        <h5 className="counter-head text-lg font-medium">Years Experience</h5>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-16">
                <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
                    <div className="mx-auto py-4">
                        <img src={iimage} className="h-6" alt="" />
                    </div>

                    <div className="mx-auto py-4">
                        <img src={iimage} className="h-6" alt="" />
                    </div>

                    <div className="mx-auto py-4">
                        <img src={iimage} className="h-6" alt="" />
                    </div>

                    <div className="mx-auto py-4">
                        <img src={iimage} className="h-6" alt="" />
                    </div>

                    <div className="mx-auto py-4">
                        <img src={iimage} className="h-6" alt="" />
                    </div>

                    <div className="mx-auto py-4">
                        <img src={iimage} className="h-6" alt="" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <div className="w-full flex justify-center">
                        <div className="text-4xl text-black border-b-[3px] border-black mb-4">Stories & Tips</div>
                    </div>
                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                    <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                        <img src={iimage} alt="" />

                        <div className="content p-6">
                            <a href="blog-detail.html" className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">Design your apps in your own way</a>
                            <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                            <div className="mt-4">
                                <a href="blog-detail.html" className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                        <img src={iimage} alt="" />

                        <div className="content p-6">
                            <a href="blog-detail.html" className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">How apps is changing the IT world</a>
                            <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                            <div className="mt-4">
                                <a href="blog-detail.html" className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                        <img src={iimage} alt="" />

                        <div className="content p-6">
                            <a href="blog-detail.html" className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">Smartest Applications for Business</a>
                            <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                            <div className="mt-4">
                                <a href="blog-detail.html" className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
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
