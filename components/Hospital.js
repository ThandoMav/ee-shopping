import React from 'react';
import iimage from '../assets/img/about.png';
const About = () => {
  return (
    <>
    <section className="relative table w-full py-36 lg:py-64 bg-no-repeat bg-center">
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 mt-10">
                    <img src={iimage} alt="" />

                    <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6 mt-3">Meet The <br/> Best Doctor</h1>
                    <p className="text-white/60 text-lg max-w-xl">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>

                    <div className="mt-8">
                        <a href="/" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Make Appointment</a>

                        <p className="text-white/60 text-base mt-2">T&C apply. Please read <a href="/" className="text-white">Terms and Conditions <i className="uil uil-arrow-right"></i></a></p>
                    </div>
                </div>
            </div>
        </section>
        <div className="relative">
            <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>


        <section className="relative md:py-24 py-16">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="relative z-2 transition-all duration-500 ease-in-out sm:-mt-[200px] -mt-[140px] m-0 lg:w-10/12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md p-6">
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-[24px]">
                            <div className="">
                                <div
                                    className="w-16 h-16 bg-indigo-600/5 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                                    <i className="uil uil-clinic-medical"></i>
                                </div>

                                <div className="content mt-6">
                                    <h5 className="text-lg font-medium">Emergency Cases</h5>
                                    <p className="text-slate-400 mt-3">This is required when, for example, the is not yet available. Dummy text is also known as 'fill text'.</p>

                                    <div className="mt-5">
                                        <a href="/"
                                            className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read
                                            More <i className="uil uil-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>


                            <div className="">
                                <div
                                    className="w-16 h-16 bg-indigo-600/5 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                                    <i className="uil uil-medkit"></i>
                                </div>

                                <div className="content mt-6">
                                    <h5 className="text-lg font-medium">Doctors Timetable</h5>
                                    <p className="text-slate-400 mt-3">This is required when, for example, the is not yet available. Dummy text is also known as 'fill text'.</p>

                                    <div className="mt-5">
                                        <a href="/"
                                            className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read
                                            More <i className="uil uil-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>


                            <div className="">
                                <div
                                    className="w-16 h-16 bg-indigo-600/5 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                                    <i className="uil uil-clock"></i>
                                </div>

                                <div className="content mt-6">
                                    <h5 className="text-lg font-medium">Opening Hours</h5>
                                    <ul className="list-none mt-3">
                                        <li className="flex justify-between">
                                            <p className="text-slate-400">Monday - Friday</p>
                                            <p className="text-indigo-600">8.00 - 20.00</p>
                                        </li>
                                        <li className="flex justify-between">
                                            <p className="text-slate-400">Saturday</p>
                                            <p className="text-indigo-600">8.00 - 18.00</p>
                                        </li>
                                        <li className="flex justify-between">
                                            <p className="text-slate-400">Sunday</p>
                                            <p className="text-indigo-600">8.00 - 14.00</p>
                                        </li>
                                    </ul>

                                    <div className="mt-5">
                                        <a href="/"
                                            className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read
                                            More <i className="uil uil-arrow-right"></i></a>
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
                            <img src={iimage} className="rounded-md" alt="" />
                            <div className="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center">
                                <a href="#!" data-type="youtube" data-id="yba7hPeTSjk"
                                    className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-7">
                        <div className="lg:ml-4">
                            <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">About Our Treatments</h4>
                            <p className="text-slate-400 max-w-xl">Great doctor if you need your family member to get effective immediate assistance, examination, emergency treatment or a simple consultation. Thank you.</p>
                            <p className="text-slate-400 max-w-xl mt-3">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.</p>
                            <a href="/" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-3">Read More <i className="mdi mdi-chevron-right align-middle"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container md:mt-24 mt-16 mx-auto">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Medical Services</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[30px]">
                    <div className="text-center md:px-6">
                        <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i className="uil uil-eye"></i>
                        </div>

                        <div className="content mt-7">
                            <a href="page-services.html" className="title h5 text-lg font-medium hover:text-indigo-600">Eye Care</a>
                            <p className="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>

                    <div className="text-center md:px-6">
                        <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i className="uil uil-syringe"></i>
                        </div>

                        <div className="content mt-7">
                            <a href="page-services.html" className="title h5 text-lg font-medium hover:text-indigo-600">Psychotherapy</a>
                            <p className="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>

                    <div className="text-center md:px-6">
                        <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i className="uil uil-thermometer"></i>
                        </div>

                        <div className="content mt-7">
                            <a href="page-services.html" className="title h5 text-lg font-medium hover:text-indigo-600">Primary Care</a>
                            <p className="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>

                    <div className="text-center md:px-6">
                        <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i className="uil uil-tablets"></i>
                        </div>

                        <div className="content mt-7">
                            <a href="page-services.html" className="title h5 text-lg font-medium hover:text-indigo-600">Dental Care</a>
                            <p className="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>

                    <div className="text-center md:px-6">
                        <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i className="uil uil-microscope"></i>
                        </div>

                        <div className="content mt-7">
                            <a href="page-services.html" className="title h5 text-lg font-medium hover:text-indigo-600">Orthopedic</a>
                            <p className="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>

                    <div className="text-center md:px-6">
                        <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i className="uil uil-heart-rate"></i>
                        </div>

                        <div className="content mt-7">
                            <a href="page-services.html" className="title h5 text-lg font-medium hover:text-indigo-600">Cardiology</a>
                            <p className="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>

                    <div className="text-center md:px-6">
                        <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i className="uil uil-hospital"></i>
                        </div>

                        <div className="content mt-7">
                            <a href="page-services.html" className="title h5 text-lg font-medium hover:text-indigo-600">Gynecology</a>
                            <p className="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>

                    <div className="text-center md:px-6">
                        <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i className="uil uil-band-aid"></i>
                        </div>

                        <div className="content mt-7">
                            <a href="page-services.html" className="title h5 text-lg font-medium hover:text-indigo-600">Neurology</a>
                            <p className="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default About;
