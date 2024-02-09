import React from 'react';
import iimage from '../assets/img/about.png';
const About = () => {
  return (
    <>
    <section class="relative table w-full py-36 lg:py-64 bg-no-repeat bg-center">
            <div class="absolute inset-0 bg-black opacity-75"></div>
            <div class="container mx-auto">
                <div class="grid grid-cols-1 mt-10">
                    <img src={iimage} alt="" />

                    <h1 class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6 mt-3">Meet The <br/> Best Doctor</h1>
                    <p class="text-white/60 text-lg max-w-xl">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>

                    <div class="mt-8">
                        <a href="#" class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Make Appointment</a>

                        <p class="text-white/60 text-base mt-2">T&C apply. Please read <a href="#" class="text-white">Terms and Conditions <i class="uil uil-arrow-right"></i></a></p>
                    </div>
                </div>
            </div>
        </section>
        <div class="relative">
            <div class="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg class="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>


        <section class="relative md:py-24 py-16">
            <div class="container mx-auto">
                <div class="flex justify-center">
                    <div class="relative z-2 transition-all duration-500 ease-in-out sm:-mt-[200px] -mt-[140px] m-0 lg:w-10/12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md p-6">
                        <div class="grid md:grid-cols-3 grid-cols-1 gap-[24px]">
                            <div class="">
                                <div
                                    class="w-16 h-16 bg-indigo-600/5 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                                    <i class="uil uil-clinic-medical"></i>
                                </div>

                                <div class="content mt-6">
                                    <h5 class="text-lg font-medium">Emergency Cases</h5>
                                    <p class="text-slate-400 mt-3">This is required when, for example, the is not yet available. Dummy text is also known as 'fill text'.</p>

                                    <div class="mt-5">
                                        <a href="#"
                                            class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read
                                            More <i class="uil uil-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>


                            <div class="">
                                <div
                                    class="w-16 h-16 bg-indigo-600/5 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                                    <i class="uil uil-medkit"></i>
                                </div>

                                <div class="content mt-6">
                                    <h5 class="text-lg font-medium">Doctors Timetable</h5>
                                    <p class="text-slate-400 mt-3">This is required when, for example, the is not yet available. Dummy text is also known as 'fill text'.</p>

                                    <div class="mt-5">
                                        <a href="#"
                                            class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read
                                            More <i class="uil uil-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>


                            <div class="">
                                <div
                                    class="w-16 h-16 bg-indigo-600/5 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                                    <i class="uil uil-clock"></i>
                                </div>

                                <div class="content mt-6">
                                    <h5 class="text-lg font-medium">Opening Hours</h5>
                                    <ul class="list-none mt-3">
                                        <li class="flex justify-between">
                                            <p class="text-slate-400">Monday - Friday</p>
                                            <p class="text-indigo-600">8.00 - 20.00</p>
                                        </li>
                                        <li class="flex justify-between">
                                            <p class="text-slate-400">Saturday</p>
                                            <p class="text-indigo-600">8.00 - 18.00</p>
                                        </li>
                                        <li class="flex justify-between">
                                            <p class="text-slate-400">Sunday</p>
                                            <p class="text-indigo-600">8.00 - 14.00</p>
                                        </li>
                                    </ul>

                                    <div class="mt-5">
                                        <a href="#"
                                            class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read
                                            More <i class="uil uil-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="container md:mt-24 mt-16 mx-auto">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div class="md:col-span-5">
                        <div class="relative">
                            <img src={iimage} class="rounded-md" alt="" />
                            <div class="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center">
                                <a href="#!" data-type="youtube" data-id="yba7hPeTSjk"
                                    class="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600">
                                    <i class="mdi mdi-play inline-flex items-center justify-center text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="md:col-span-7">
                        <div class="lg:ml-4">
                            <h4 class="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">About Our Treatments</h4>
                            <p class="text-slate-400 max-w-xl">Great doctor if you need your family member to get effective immediate assistance, examination, emergency treatment or a simple consultation. Thank you.</p>
                            <p class="text-slate-400 max-w-xl mt-3">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.</p>
                            <a href="#" class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-3">Read More <i class="mdi mdi-chevron-right align-middle"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container md:mt-24 mt-16 mx-auto">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Medical Services</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[30px]">
                    <div class="text-center md:px-6">
                        <div class="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i class="uil uil-eye"></i>
                        </div>

                        <div class="content mt-7">
                            <a href="page-services.html" class="title h5 text-lg font-medium hover:text-indigo-600">Eye Care</a>
                            <p class="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>

                    <div class="text-center md:px-6">
                        <div class="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i class="uil uil-syringe"></i>
                        </div>

                        <div class="content mt-7">
                            <a href="page-services.html" class="title h5 text-lg font-medium hover:text-indigo-600">Psychotherapy</a>
                            <p class="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>

                    <div class="text-center md:px-6">
                        <div class="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i class="uil uil-thermometer"></i>
                        </div>

                        <div class="content mt-7">
                            <a href="page-services.html" class="title h5 text-lg font-medium hover:text-indigo-600">Primary Care</a>
                            <p class="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>

                    <div class="text-center md:px-6">
                        <div class="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i class="uil uil-tablets"></i>
                        </div>

                        <div class="content mt-7">
                            <a href="page-services.html" class="title h5 text-lg font-medium hover:text-indigo-600">Dental Care</a>
                            <p class="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>

                    <div class="text-center md:px-6">
                        <div class="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i class="uil uil-microscope"></i>
                        </div>

                        <div class="content mt-7">
                            <a href="page-services.html" class="title h5 text-lg font-medium hover:text-indigo-600">Orthopedic</a>
                            <p class="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>

                    <div class="text-center md:px-6">
                        <div class="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i class="uil uil-heart-rate"></i>
                        </div>

                        <div class="content mt-7">
                            <a href="page-services.html" class="title h5 text-lg font-medium hover:text-indigo-600">Cardiology</a>
                            <p class="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>

                    <div class="text-center md:px-6">
                        <div class="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i class="uil uil-hospital"></i>
                        </div>

                        <div class="content mt-7">
                            <a href="page-services.html" class="title h5 text-lg font-medium hover:text-indigo-600">Gynecology</a>
                            <p class="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>

                    <div class="text-center md:px-6">
                        <div class="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i class="uil uil-band-aid"></i>
                        </div>

                        <div class="content mt-7">
                            <a href="page-services.html" class="title h5 text-lg font-medium hover:text-indigo-600">Neurology</a>
                            <p class="text-slate-400 mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default About;
