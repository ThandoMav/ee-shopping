import React from 'react';
import iimage from '../assets/img/about.png';

const About = () => {
  return (
    <>
    <section class="relative md:py-60 py-36 bg-right ">
            <div class="absolute inset-0 bg-slate-900/70"></div>
            <div class="container mx-auto">
                <div class="grid grid-cols-1 items-center mt-10">
                    <span class="text-white/80 font-semibold mb-4 text-lg">Turn Your Skills And Expertise Into A Successful Business</span>
                    <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Grow your business <br /> with focus & clarity.</h4>
                    <p class="text-white/60 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                    <div class="mt-8">
                        <a href="#" class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Learn More <i class="uil uil-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-6 border-t border-b border-gray-100 dark:border-gray-700">
            <div class="container mx-auto">
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
        </section>


        <section class="relative md:py-24 py-16">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Business Consulting Services</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div class="group relative">
                        <div class="relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                            <img src={iimage} class="" alt="" />
                            <div class="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                        </div>

                        <div class="mt-6">
                            <a href="#" class="text-xl font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Profitable Marketing</a>

                            <p class="text-slate-400 mt-4">We develop digital strategies, products and services appreciated by clients.</p>

                            <div class="mt-4">
                                <a href="#" class="hover:text-indigo-600 duration-500 ease-in-out font-semibold"><span class="hidden group-hover:inline-block">Read More</span> <i class="uil uil-arrow-right align-middle text-lg"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="group relative">
                        <div class="relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                            <img src={iimage} class="" alt="" />
                            <div class="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                        </div>

                        <div class="mt-6">
                            <a href="#" class="text-xl font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">SEO Specialists</a>

                            <p class="text-slate-400 mt-4">We develop digital strategies, products and services appreciated by clients.</p>

                            <div class="mt-4">
                                <a href="#" class="hover:text-indigo-600 duration-500 ease-in-out font-semibold"><span class="hidden group-hover:inline-block">Read More</span> <i class="uil uil-arrow-right align-middle text-lg"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="group relative">
                        <div class="relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                            <img src={iimage} class="" alt="" />
                            <div class="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                        </div>

                        <div class="mt-6">
                            <a href="#" class="text-xl font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Audience Analysis</a>

                            <p class="text-slate-400 mt-4">We develop digital strategies, products and services appreciated by clients.</p>

                            <div class="mt-4">
                                <a href="#" class="hover:text-indigo-600 duration-500 ease-in-out font-semibold"><span class="hidden group-hover:inline-block">Read More</span> <i class="uil uil-arrow-right align-middle text-lg"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative bg-gray-50 dark:bg-slate-800 md:py-24 py-16">
            <div class="container mx-auto">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div class="lg:col-span-5 md:col-span-6">
                        <div class="grid grid-cols-12 gap-6 items-center">
                            <div class="col-span-6">
                                <div class="grid grid-cols-1 gap-6">
                                    <img src={iimage} class="shadow rounded-md" alt="" />
                                    <img src={iimage} class="shadow rounded-md" alt="" />
                                </div>
                            </div>

                            <div class="col-span-6">
                                <div class="grid grid-cols-1 gap-6">
                                    <img src={iimage} class="shadow rounded-md" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-7 md:col-span-6">
                        <div class="lg:ml-5">
                            <div class="flex mb-4">
                                <span class="text-indigo-600 text-2xl font-bold mb-0"><span class="counter-value text-6xl font-bold" data-target="15">1</span>+</span>
                                <span class="self-end font-semibold ml-2">Years <br /> Experience</span>
                            </div>

                            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Business and technology <br /> consulting for growth</h3>

                            <p class="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content.</p>

                            <div class="mt-6">
                                <a href="contact-one.html" class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-2"><i class="uil uil-airplay"></i> Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mx-auto mt-16">
                <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                    <div class="group px-6 py-8 hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 duration-500 ease-in-out border-b-[3px] border-transparent hover:border-indigo-600">
                        <i data-feather="codesandbox" class="h-10 w-10 stroke-1 text-indigo-600"></i>

                        <div class="content mt-6">
                            <a href="page-services.html" class="title h5 text-xl font-semibold hover:text-indigo-600">User Friendly</a>
                            <p class="text-slate-400 mt-4">The phrasal sequence of the is now so that many campaign and benefit</p>

                            <div class="mt-5">
                                <a href="page-services.html" class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Learn More <i class="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="group px-6 py-8 hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 duration-500 ease-in-out border-b-[3px] border-transparent hover:border-indigo-600">
                        <i data-feather="send" class="h-10 w-10 stroke-1 text-indigo-600"></i>

                        <div class="content mt-6">
                            <a href="page-services.html" class="title h5 text-xl font-semibold hover:text-indigo-600">Super Fast</a>
                            <p class="text-slate-400 mt-4">The phrasal sequence of the is now so that many campaign and benefit</p>

                            <div class="mt-5">
                                <a href="page-services.html" class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Learn More <i class="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="group px-6 py-8 hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 duration-500 ease-in-out border-b-[3px] border-transparent hover:border-indigo-600">
                        <i data-feather="star" class="h-10 w-10 stroke-1 text-indigo-600"></i>

                        <div class="content mt-6">
                            <a href="page-services.html" class="title h5 text-xl font-semibold hover:text-indigo-600">Insightful Analytics</a>
                            <p class="text-slate-400 mt-4">The phrasal sequence of the is now so that many campaign and benefit</p>

                            <div class="mt-5">
                                <a href="page-services.html" class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Learn More <i class="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="group px-6 py-8 hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 duration-500 ease-in-out border-b-[3px] border-transparent hover:border-indigo-600">
                        <i data-feather="bookmark" class="h-10 w-10 stroke-1 text-indigo-600"></i>

                        <div class="content mt-6">
                            <a href="page-services.html" class="title h5 text-xl font-semibold hover:text-indigo-600">Highly Rated</a>
                            <p class="text-slate-400 mt-4">The phrasal sequence of the is now so that many campaign and benefit</p>

                            <div class="mt-5">
                                <a href="page-services.html" class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Learn More <i class="uil uil-arrow-right"></i></a>
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
                        <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Digital Product</h3>
                        <p class="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div class="lg:col-span-4 md:col-span-6 md:text-right hidden md:block">
                        <a href="#" class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <i class="uil uil-arrow-right align-middle"></i></a>
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
                                <h5 class="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" class="hover:text-indigo-600 transition-all duration-500 ease-in-out">Techwind Personal Portfolio</a></h5>
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
                                <h5 class="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" class="hover:text-emerald-600 transition-all duration-500 ease-in-out">Techwind Minimal Portfolio</a></h5>
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
                                <h5 class="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" class="hover:text-red-600 transition-all duration-500 ease-in-out">Techwind NFT Market</a></h5>
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
                                <h5 class="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" class="hover:text-sky-600 transition-all duration-500 ease-in-out">Techwind Portfolio</a></h5>
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
                                <h5 class="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" class="hover:text-amber-600 transition-all duration-500 ease-in-out">Techwind Constuction</a></h5>
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
                                <h5 class="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" class="hover:text-indigo-600 transition-all duration-500 ease-in-out">Techwind SEO</a></h5>
                                <span class="text-slate-400">SEO</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                    <div class="md:col-span-12 text-center">
                        <a href="#" class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <i class="uil uil-arrow-right align-middle"></i></a>
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
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Management Team</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    <div class="lg:col-span-3 md:col-span-6">
                        <div class="group text-center">
                            <div class="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                <img src={iimage} class="" alt="" />
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                <ul class="list-none absolute right-0 left-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                    <li class="inline"><a href="#" class="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="facebook" class="h-4 w-4"></i></a></li>
                                    <li class="inline"><a href="#" class="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="instagram" class="h-4 w-4"></i></a></li>
                                    <li class="inline"><a href="#" class="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="linkedin" class="h-4 w-4"></i></a></li>
                                </ul>
                            </div>

                            <div class="content mt-3">
                                <a href="#" class="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Jack John</a>
                                <p class="text-slate-400">Designer</p>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-3 md:col-span-6">
                        <div class="group text-center">
                            <div class="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                <img src={iimage} class="" alt="" />
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                <ul class="list-none absolute right-0 left-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                    <li class="inline"><a href="#" class="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="facebook" class="h-4 w-4"></i></a></li>
                                    <li class="inline"><a href="#" class="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="instagram" class="h-4 w-4"></i></a></li>
                                    <li class="inline"><a href="#" class="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="linkedin" class="h-4 w-4"></i></a></li>
                                </ul>
                            </div>

                            <div class="content mt-3">
                                <a href="#" class="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Krista John</a>
                                <p class="text-slate-400">Designer</p>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-3 md:col-span-6">
                        <div class="group text-center">
                            <div class="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                <img src={iimage} class="" alt="" />
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                <ul class="list-none absolute right-0 left-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                    <li class="inline"><a href="#" class="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="facebook" class="h-4 w-4"></i></a></li>
                                    <li class="inline"><a href="#" class="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="instagram" class="h-4 w-4"></i></a></li>
                                    <li class="inline"><a href="#" class="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="linkedin" class="h-4 w-4"></i></a></li>
                                </ul>
                            </div>

                            <div class="content mt-3">
                                <a href="#" class="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Roger Jackson</a>
                                <p class="text-slate-400">Designer</p>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-3 md:col-span-6">
                        <div class="group text-center">
                            <div class="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                <img src={iimage} class="" alt="" />
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                <ul class="list-none absolute right-0 left-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                    <li class="inline"><a href="#" class="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="facebook" class="h-4 w-4"></i></a></li>
                                    <li class="inline"><a href="#" class="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="instagram" class="h-4 w-4"></i></a></li>
                                    <li class="inline"><a href="#" class="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="linkedin" class="h-4 w-4"></i></a></li>
                                </ul>
                            </div>

                            <div class="content mt-3">
                                <a href="#" class="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Johnny English</a>
                                <p class="text-slate-400">Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mx-auto md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Blog Or News</h3>

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
