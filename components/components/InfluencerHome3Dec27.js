import React from 'react';
import iimage from '../assets/img/about.png';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

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
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container mx-auto">

                <div id="grid" class="md:flex justify-center">
                    <div class="md:w-1/3 p-3 picture-item">
                        <div class="relative block overflow-hidden rounded group transition-all duration-500">
                            <img src={iimage}
                                class="rounded transition-all duration-500 group-hover:scale-105" alt="work-image" />
                            <a href="javascript:void(0)"
                                class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
                                <div>
                                    <p class="text-sm text-gray-400">Media, Icons</p>
                                    <h6 class="text-base text-black font-medium">Open Imagination</h6>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="md:w-1/3 p-3 picture-item">
                        <div class="relative block overflow-hidden rounded group transition-all duration-500">
                            <img src={iimage}
                                class="rounded transition-all duration-500 group-hover:scale-105" alt="work-image" />
                            <a href="javascript:void(0)"
                                class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
                                <div>
                                    <p class="text-sm text-gray-400">Illustrations, Graphics</p>
                                    <h6 class="text-base text-black font-medium">Shake It!</h6>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>

                <div class="flex justify-center mt-8">
                    <a href="/about" class="py-4 px-7 rounded text-sm font-medium bg-blue-500 text-white">More About Me <i class="mdi mdi-arrow-right ms-1"></i></a>
                </div>
            </div>
        </section>

        <section class="section py-10">
            <div class="container mx-auto">
                <div class="grid lg:grid-cols-3 gap-8 text-center">
                    <div>
                        <div class="p-5">
                            <div class="text-5xl text-blue-500">
                                <i class="pe-7s-leaf"></i>
                                <BsStarFill/>
                            </div>
                            <h4 class="uppercase text-base my-3">Branding</h4>

                            <p class="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                        </div>
                    </div>

                    <div>
                        <div class="p-5">
                            <div class="text-5xl text-blue-500">
                                <i class="pe-7s-helm"></i>
                                <BsStarFill/>
                            </div>
                            <h4 class="uppercase text-base my-3">Highly customizable</h4>

                            <p class="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                        </div>
                    </div>

                    <div>
                        <div class="p-5">
                            <div class="text-5xl text-blue-500">
                                <i class="pe-7s-airplay"></i>
                                  <BsStarFill/>
                            </div>
                            <h4 class="uppercase text-base my-3">Responsive design</h4>

                            <p class="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative mx-auto md:py-24 py-16">
            <div class="container mx-auto">
                <div class="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                    <div class="lg:col-span-8 md:col-span-6 md:text-left text-center">
                        <div class="w-full flex justify-start">
                            <div class="text-4xl text-black border-b-[3px] border-black mb-4">My Shop</div>
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
                    <div class="w-full flex justify-center">
                        <div class="text-4xl text-black border-b-[3px] border-black mb-4">Trusted by more than 10K users</div>
                    </div>
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
            <div class="container mx-auto mt-16">
                <div class="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
                    <div class="mx-auto py-4">
                        <img src={iimage} class="h-6" alt="" />
                    </div>

                    <div class="mx-auto py-4">
                        <img src={iimage} class="h-6" alt="" />
                    </div>

                    <div class="mx-auto py-4">
                        <img src={iimage} class="h-6" alt="" />
                    </div>

                    <div class="mx-auto py-4">
                        <img src={iimage} class="h-6" alt="" />
                    </div>

                    <div class="mx-auto py-4">
                        <img src={iimage} class="h-6" alt="" />
                    </div>

                    <div class="mx-auto py-4">
                        <img src={iimage} class="h-6" alt="" />
                    </div>
                </div>
            </div>

            <div class="container mx-auto md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <div class="w-full flex justify-center">
                        <div class="text-4xl text-black border-b-[3px] border-black mb-4">Stories & Tips</div>
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
