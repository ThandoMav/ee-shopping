import React from 'react';
import iimage from '../assets/img/about.png';
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
                <div className="flex justify-center">
                    <div className="w-full filters-group-wrap mb-3">
                        <div className="flex justify-center mb-5">
                            <ul className="filter-options flex flex-wrap gap-4 justify-center">
                                <li className="active" data-group="all"><a href="javascript:void(0)">All</a></li>
                                <li data-group="android"><a href="javascript:void(0)">Android</a></li>
                                <li data-group="mockup"><a href="javascript:void(0)">Mockup</a></li>
                                <li data-group="personal"><a href="javascript:void(0)">Web</a></li>
                                <li data-group="design"><a href="javascript:void(0)">Design</a></li>
                            </ul>
                        </div>
                    </div>

                </div>


                <div id="grid" className="md:flex justify-center">
                    <div className="md:w-1/3 p-3 picture-item" data-groups='["mockup"]'>
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

                    <div className="md:w-1/3 p-3 picture-item" data-groups='["mockup"]'>
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
                    <a href="work.html" className="py-4 px-7 rounded text-sm font-medium bg-blue-500 text-white">More Works <i className="mdi mdi-arrow-right ms-1"></i></a>
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
                            </div>
                            <h4 className="uppercase text-base my-3">Branding</h4>

                            <p className="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                        </div>
                    </div>

                    <div>
                        <div className="p-5">
                            <div className="text-5xl text-blue-500">
                                <i className="pe-7s-helm"></i>
                            </div>
                            <h4 className="uppercase text-base my-3">Highly customizable</h4>

                            <p className="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                        </div>
                    </div>

                    <div>
                        <div className="p-5">
                            <div className="text-5xl text-blue-500">
                                <i className="pe-7s-airplay"></i>
                            </div>
                            <h4 className="uppercase text-base my-3">Responsive design</h4>

                            <p className="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  );
};

export default About;
