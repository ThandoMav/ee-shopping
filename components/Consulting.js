import React from 'react';
import iimage from '../assets/img/about.png';

const About = () => {
  return (
    <>
    <section className="relative md:py-60 py-36 bg-right ">
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 items-center mt-10">
                    <span className="text-white/80 font-semibold mb-4 text-lg">Turn Your Skills And Expertise Into A Successful Business</span>
                    <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Grow your business <br /> with focus & clarity.</h4>
                    <p className="text-white/60 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                    <div className="mt-8">
                        <a href="/" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Learn More <i className="uil uil-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-6 border-t border-b border-gray-100 dark:border-gray-700">
            <div className="container mx-auto">
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
        </section>


        <section className="relative md:py-24 py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Business Consulting Services</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div className="group relative">
                        <div className="relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                            <img src={iimage} className="" alt="" />
                            <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                        </div>

                        <div className="mt-6">
                            <a href="/" className="text-xl font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Profitable Marketing</a>

                            <p className="text-slate-400 mt-4">We develop digital strategies, products and services appreciated by clients.</p>

                            <div className="mt-4">
                                <a href="/" className="hover:text-indigo-600 duration-500 ease-in-out font-semibold"><span className="hidden group-hover:inline-block">Read More</span> <i className="uil uil-arrow-right align-middle text-lg"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                            <img src={iimage} className="" alt="" />
                            <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                        </div>

                        <div className="mt-6">
                            <a href="/" className="text-xl font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">SEO Specialists</a>

                            <p className="text-slate-400 mt-4">We develop digital strategies, products and services appreciated by clients.</p>

                            <div className="mt-4">
                                <a href="/" className="hover:text-indigo-600 duration-500 ease-in-out font-semibold"><span className="hidden group-hover:inline-block">Read More</span> <i className="uil uil-arrow-right align-middle text-lg"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                            <img src={iimage} className="" alt="" />
                            <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                        </div>

                        <div className="mt-6">
                            <a href="/" className="text-xl font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Audience Analysis</a>

                            <p className="text-slate-400 mt-4">We develop digital strategies, products and services appreciated by clients.</p>

                            <div className="mt-4">
                                <a href="/" className="hover:text-indigo-600 duration-500 ease-in-out font-semibold"><span className="hidden group-hover:inline-block">Read More</span> <i className="uil uil-arrow-right align-middle text-lg"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative bg-gray-50 dark:bg-slate-800 md:py-24 py-16">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="grid grid-cols-12 gap-6 items-center">
                            <div className="col-span-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <img src={iimage} className="shadow rounded-md" alt="" />
                                    <img src={iimage} className="shadow rounded-md" alt="" />
                                </div>
                            </div>

                            <div className="col-span-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <img src={iimage} className="shadow rounded-md" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="lg:ml-5">
                            <div className="flex mb-4">
                                <span className="text-indigo-600 text-2xl font-bold mb-0"><span className="counter-value text-6xl font-bold" data-target="15">1</span>+</span>
                                <span className="self-end font-semibold ml-2">Years <br /> Experience</span>
                            </div>

                            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Business and technology <br /> consulting for growth</h3>

                            <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content.</p>

                            <div className="mt-6">
                                <a href="contact-one.html" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-2"><i className="uil uil-airplay"></i> Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-16">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                    <div className="group px-6 py-8 hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 duration-500 ease-in-out border-b-[3px] border-transparent hover:border-indigo-600">
                        <i data-feather="codesandbox" className="h-10 w-10 stroke-1 text-indigo-600"></i>

                        <div className="content mt-6">
                            <a href="page-services.html" className="title h5 text-xl font-semibold hover:text-indigo-600">User Friendly</a>
                            <p className="text-slate-400 mt-4">The phrasal sequence of the is now so that many campaign and benefit</p>

                            <div className="mt-5">
                                <a href="page-services.html" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Learn More <i className="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="group px-6 py-8 hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 duration-500 ease-in-out border-b-[3px] border-transparent hover:border-indigo-600">
                        <i data-feather="send" className="h-10 w-10 stroke-1 text-indigo-600"></i>

                        <div className="content mt-6">
                            <a href="page-services.html" className="title h5 text-xl font-semibold hover:text-indigo-600">Super Fast</a>
                            <p className="text-slate-400 mt-4">The phrasal sequence of the is now so that many campaign and benefit</p>

                            <div className="mt-5">
                                <a href="page-services.html" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Learn More <i className="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="group px-6 py-8 hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 duration-500 ease-in-out border-b-[3px] border-transparent hover:border-indigo-600">
                        <i data-feather="star" className="h-10 w-10 stroke-1 text-indigo-600"></i>

                        <div className="content mt-6">
                            <a href="page-services.html" className="title h5 text-xl font-semibold hover:text-indigo-600">Insightful Analytics</a>
                            <p className="text-slate-400 mt-4">The phrasal sequence of the is now so that many campaign and benefit</p>

                            <div className="mt-5">
                                <a href="page-services.html" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Learn More <i className="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="group px-6 py-8 hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 duration-500 ease-in-out border-b-[3px] border-transparent hover:border-indigo-600">
                        <i data-feather="bookmark" className="h-10 w-10 stroke-1 text-indigo-600"></i>

                        <div className="content mt-6">
                            <a href="page-services.html" className="title h5 text-xl font-semibold hover:text-indigo-600">Highly Rated</a>
                            <p className="text-slate-400 mt-4">The phrasal sequence of the is now so that many campaign and benefit</p>

                            <div className="mt-5">
                                <a href="page-services.html" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Learn More <i className="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="relative mx-auto md:py-24 py-16">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                    <div className="lg:col-span-8 md:col-span-6 md:text-left text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Digital Product</h3>
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
                                <h5 className="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" className="hover:text-indigo-600 transition-all duration-500 ease-in-out">Techwind Personal Portfolio</a></h5>
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
                                <h5 className="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" className="hover:text-emerald-600 transition-all duration-500 ease-in-out">Techwind Minimal Portfolio</a></h5>
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
                                <h5 className="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" className="hover:text-red-600 transition-all duration-500 ease-in-out">Techwind NFT Market</a></h5>
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
                                <h5 className="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" className="hover:text-sky-600 transition-all duration-500 ease-in-out">Techwind Portfolio</a></h5>
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
                                <h5 className="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" className="hover:text-amber-600 transition-all duration-500 ease-in-out">Techwind Constuction</a></h5>
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
                                <h5 className="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind" target="_blank" className="hover:text-indigo-600 transition-all duration-500 ease-in-out">Techwind SEO</a></h5>
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
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">Trusted by more than 10K users</h3>

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


            <div className="container mx-auto md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Management Team</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    <div className="lg:col-span-3 md:col-span-6">
                        <div className="group text-center">
                            <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                <img src={iimage} className="" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                <ul className="list-none absolute right-0 left-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                    <li className="inline"><a href="/" className="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="facebook" className="h-4 w-4"></i></a></li>
                                    <li className="inline"><a href="/" className="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="instagram" className="h-4 w-4"></i></a></li>
                                    <li className="inline"><a href="/" className="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="linkedin" className="h-4 w-4"></i></a></li>
                                </ul>
                            </div>

                            <div className="content mt-3">
                                <a href="/" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Jack John</a>
                                <p className="text-slate-400">Designer</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 md:col-span-6">
                        <div className="group text-center">
                            <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                <img src={iimage} className="" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                <ul className="list-none absolute right-0 left-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                    <li className="inline"><a href="/" className="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="facebook" className="h-4 w-4"></i></a></li>
                                    <li className="inline"><a href="/" className="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="instagram" className="h-4 w-4"></i></a></li>
                                    <li className="inline"><a href="/" className="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="linkedin" className="h-4 w-4"></i></a></li>
                                </ul>
                            </div>

                            <div className="content mt-3">
                                <a href="/" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Krista John</a>
                                <p className="text-slate-400">Designer</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 md:col-span-6">
                        <div className="group text-center">
                            <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                <img src={iimage} className="" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                <ul className="list-none absolute right-0 left-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                    <li className="inline"><a href="/" className="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="facebook" className="h-4 w-4"></i></a></li>
                                    <li className="inline"><a href="/" className="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="instagram" className="h-4 w-4"></i></a></li>
                                    <li className="inline"><a href="/" className="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="linkedin" className="h-4 w-4"></i></a></li>
                                </ul>
                            </div>

                            <div className="content mt-3">
                                <a href="/" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Roger Jackson</a>
                                <p className="text-slate-400">Designer</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 md:col-span-6">
                        <div className="group text-center">
                            <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                <img src={iimage} className="" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                <ul className="list-none absolute right-0 left-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                    <li className="inline"><a href="/" className="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="facebook" className="h-4 w-4"></i></a></li>
                                    <li className="inline"><a href="/" className="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="instagram" className="h-4 w-4"></i></a></li>
                                    <li className="inline"><a href="/" className="btn btn-icon btn-sm rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="linkedin" className="h-4 w-4"></i></a></li>
                                </ul>
                            </div>

                            <div className="content mt-3">
                                <a href="/" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Johnny English</a>
                                <p className="text-slate-400">Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Blog Or News</h3>

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
