import React from 'react';
import iimage from '../assets/img/about.png';
const About = () => {
  return (
    <>
    <section className="relative md:h-screen py-36 flex items-center bg-center overflow-hidden">
            <div className="absolute inset-0 bg-white/30 dark:bg-slate-900/60"></div>
            <div className="container relative z-1 mx-auto">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="lg:col-span-8 md:col-span-7 md:order-1 order-2">
                        <div className="md:mr-6">
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Start building <br /> your dream home</h4>
                            <p className="text-slate-900 dark:text-white/75 text-lg max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                            <div className="mt-6">
                                <a href="/" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact Us</a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 md:col-span-5 md:text-center md:order-2 order-1">
                        <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" className="lightbox lg:h-24 h-20 lg:w-24 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white hover:bg-indigo-600 text-indigo-600 hover:text-white duration-500 ease-in-out mx-auto">
                            <i className="mdi mdi-play inline-flex items-center justify-center text-3xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>


        <section className="relative md:py-24 py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 justify-center">
                    <div className="relative z-2 transition-all duration-500 ease-in-out sm:-mt-[200px] -mt-[140px] m-0">
                        <div className="relative bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md overflow-hidden">
                            <div className="grid lg:grid-cols-12 grid-cols-1">
                                <div className="lg:col-span-4 order-1 lg:order-2 bg-indigo-600">
                                    <div className="p-[30px] lg:text-left text-center">
                                        <span className="text-xl text-white/75">Our proud</span>
                                        <h4 className="text-2xl font-semibold text-white my-3">25 years of undefeated success</h4>
                                        <p className="text-white/75 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                        <div className="mt-6">
                                            <a href="/" className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md">About us</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-8 order-2 lg:order-1">
                                    <div className="grid md:grid-cols-2 grid-cols-1 p-[30px] gap-[30px]">

                                        <div className="group flex transition-all duration-500 ease-in-out">
                                            <div className="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                                                <i className="uil uil-ruler-combined"></i>
                                            </div>
                                            <div className="flex-1 ml-4">
                                                <h4 className="mb-0 text-lg font-medium">Project Planning</h4>
                                                <p className="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                                            </div>
                                        </div>


                                        <div className="group flex transition-all duration-500 ease-in-out">
                                            <div className="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                                                <i className="uil uil-constructor"></i>
                                            </div>
                                            <div className="flex-1 ml-4">
                                                <h4 className="mb-0 text-lg font-medium">Qualified Specialists</h4>
                                                <p className="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                                            </div>
                                        </div>


                                        <div className="group flex transition-all duration-500 ease-in-out">
                                            <div className="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                                                <i className="uil uil-no-entry"></i>
                                            </div>
                                            <div className="flex-1 ml-4">
                                                <h4 className="mb-0 text-lg font-medium">Constant Maintenance</h4>
                                                <p className="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                                            </div>
                                        </div>


                                        <div className="group flex transition-all duration-500 ease-in-out">
                                            <div className="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                                                <i className="uil uil-cog"></i>
                                            </div>
                                            <div className="flex-1 ml-4">
                                                <h4 className="mb-0 text-lg font-medium">Warranty Service</h4>
                                                <p className="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                                <a href="/" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Read More <i className="uil uil-angle-right-b align-middle"></i></a>
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

            <div className="container md:mt-24 mt-16 mx-auto">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Projects</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                        <a href="portfolio-detail-one.html"><img src={iimage} className="rounded-md shadow dark:shadow-gray-800" alt="" /></a>
                        <div className="content pt-3">
                            <h5 className="mb-1"><a href="portfolio-detail-one.html" className="hover:text-indigo-600 transition-all duration-500 font-semibold text-lg">Serenity Apartments</a></h5>
                            <h6 className="text-slate-400">Branding</h6>
                        </div>
                    </div>

                    <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                        <a href="portfolio-detail-one.html"><img src={iimage} className="rounded-md shadow dark:shadow-gray-800" alt="" /></a>
                        <div className="content pt-3">
                            <h5 className="mb-1"><a href="portfolio-detail-one.html" className="hover:text-indigo-600 transition-all duration-500 font-semibold text-lg">The Landscape House</a></h5>
                            <h6 className="text-slate-400">Mockup</h6>
                        </div>
                    </div>

                    <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                        <a href="portfolio-detail-one.html"><img src={iimage} className="rounded-md shadow dark:shadow-gray-800" alt=""/></a>
                        <div className="content pt-3">
                            <h5 className="mb-1"><a href="portfolio-detail-one.html" className="hover:text-indigo-600 transition-all duration-500 font-semibold text-lg">New Build Family Home</a></h5>
                            <h6 className="text-slate-400">Abstract</h6>
                        </div>
                    </div>

                    <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                        <a href="portfolio-detail-one.html"><img src={iimage} className="rounded-md shadow dark:shadow-gray-800" alt="" /></a>
                        <div className="content pt-3">
                            <h5 className="mb-1"><a href="portfolio-detail-one.html" className="hover:text-indigo-600 transition-all duration-500 font-semibold text-lg">Private and Social Apartments</a></h5>
                            <h6 className="text-slate-400">Books</h6>
                        </div>
                    </div>

                    <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                        <a href="portfolio-detail-one.html"><img src={iimage} className="rounded-md shadow dark:shadow-gray-800" alt="" /></a>
                        <div className="content pt-3">
                            <h5 className="mb-1"><a href="portfolio-detail-one.html" className="hover:text-indigo-600 transition-all duration-500 font-semibold text-lg">Apartment Complex</a></h5>
                            <h6 className="text-slate-400">V-card</h6>
                        </div>
                    </div>

                    <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                        <a href="portfolio-detail-one.html"><img src={iimage} className="rounded-md shadow dark:shadow-gray-800" alt="" /></a>
                        <div className="content pt-3">
                            <h5 className="mb-1"><a href="portfolio-detail-one.html" className="hover:text-indigo-600 transition-all duration-500 font-semibold text-lg">Construction Engineering</a></h5>
                            <h6 className="text-slate-400">Photography</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-20 w-full table relative bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="container relative mx-auto">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal text-white font-medium">Generating more value <br /> at every level and building a better world for everyone</h3>

                    <p className="text-white/80 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                    <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mt-10">
                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                    </a>
                </div>
            </div>
        </section>

        <section className="relative mx-auto md:py-24 py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h6 className="text-indigo-600 text-base mb-2">Our Minds</h6>
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Management Team</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    <div className="lg:col-span-3 md:col-span-6">
                        <div className="group text-center">
                            <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                <img src={iimage} alt="" />
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
                                <img src={iimage} alt="" />
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
                                <img src={iimage} alt="" />
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
                                <img src={iimage} alt="" />
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

            <div className="container md:mt-24 mt-16 mx-auto">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h6 className="text-indigo-600 text-base mb-2">Blog</h6>
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
