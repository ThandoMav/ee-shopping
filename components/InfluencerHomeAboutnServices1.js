import React from 'react';
import iimage from '../assets/img/about.png';
const About = () => {
  return (
    <>
    <section className="relative bg-gray-50 dark:bg-slate-800 md:py-24 py-16">
        <div className="container mx-auto">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div className="lg:col-span-5 md:col-span-6">
                    <div className="grid grid-cols-12 gap-6 items-center">
                        <div className="col-span-6">
                            <div className="grid grid-cols-1 gap-6">
                                <img src={iimage}  className="shadow rounded-md" alt="" />
                                <img src={iimage}  className="shadow rounded-md" alt="" />
                     </div>
                        </div>

                        <div className="col-span-6">
                            <div className="grid grid-cols-1 gap-6">
                                <img src={iimage}  className="shadow rounded-md" alt="" />
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

                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Business and technology <br/> consulting for growth</h3>

                        <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content.</p>

                        <div className="mt-6">
                            <a href="contact-one.html" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-2"><i className="uil uil-airplay"></i> Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-16 mx-auto">
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
    </>
  );
};

export default About;
