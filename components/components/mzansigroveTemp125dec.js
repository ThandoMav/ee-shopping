import React from 'react';
import iimage from '../assets/img/about.png';
const About = () => {
  return (
<>

        <section class="relative bg-gray-50 dark:bg-slate-800 md:py-24 py-16">
            <div class="container mx-auto">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div class="lg:col-span-5 md:col-span-6">
                        <div class="grid grid-cols-12 gap-6 items-center">
                            <div class="col-span-6">
                                <div class="grid grid-cols-1 gap-6">
                                    <img src={iimage}  class="shadow rounded-md" alt="" />
                                    <img src={iimage}  class="shadow rounded-md" alt="" />
                         </div>
                            </div>

                            <div class="col-span-6">
                                <div class="grid grid-cols-1 gap-6">
                                    <img src={iimage}  class="shadow rounded-md" alt="" />
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

                            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Business and technology <br/> consulting for growth</h3>

                            <p class="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content.</p>

                            <div class="mt-6">
                                <a href="contact-one.html" class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-2"><i class="uil uil-airplay"></i> Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-16 mx-auto">
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



           <section class="relative md:py-24 py-16">
                <div class="container mx-auto md:mt-24 mt-16">
                      <div class="grid grid-cols-1 pb-8 text-center">
                          <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Key Features</h3>

                          <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      </div>

                      <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px] mt-8">
                          <div class="lg:col-span-4 md:col-span-6">
                              <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                  <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                      <i data-feather="monitor" class="h-5 w-5 rotate-45"></i>
                                  </div>
                                  <div class="flex-1">
                                      <h4 class="mb-0 text-lg font-medium">Fully Responsive</h4>
                                  </div>
                              </div>
                          </div>

                          <div class="lg:col-span-4 md:col-span-6">
                              <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                  <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                      <i data-feather="heart" class="h-5 w-5 rotate-45"></i>
                                  </div>
                                  <div class="flex-1">
                                      <h4 class="mb-0 text-lg font-medium">Browser Compatibility</h4>
                                  </div>
                              </div>
                          </div>

                          <div class="lg:col-span-4 md:col-span-6">
                              <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                  <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                      <i data-feather="eye" class="h-5 w-5 rotate-45"></i>
                                  </div>
                                  <div class="flex-1">
                                      <h4 class="mb-0 text-lg font-medium">Retina Ready</h4>
                                  </div>
                              </div>
                          </div>

                          <div class="lg:col-span-4 md:col-span-6">
                              <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                  <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                      <i data-feather="layout" class="h-5 w-5 rotate-45"></i>
                                  </div>
                                  <div class="flex-1">
                                      <h4 class="mb-0 text-lg font-medium">Based On Tailwindcss 3</h4>
                                  </div>
                              </div>
                          </div>

                          <div class="lg:col-span-4 md:col-span-6">
                              <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                  <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                      <i data-feather="feather" class="h-5 w-5 rotate-45"></i>
                                  </div>
                                  <div class="flex-1">
                                      <h4 class="mb-0 text-lg font-medium">Feather Icons</h4>
                                  </div>
                              </div>
                          </div>

                          <div class="lg:col-span-4 md:col-span-6">
                              <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                  <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                      <i data-feather="code" class="h-5 w-5 rotate-45"></i>
                                  </div>
                                  <div class="flex-1">
                                      <h4 class="mb-0 text-lg font-medium">Built With SASS</h4>
                                  </div>
                              </div>
                          </div>

                          <div class="lg:col-span-4 md:col-span-6">
                              <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                  <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                      <i data-feather="user-check" class="h-5 w-5 rotate-45"></i>
                                  </div>
                                  <div class="flex-1">
                                      <h4 class="mb-0 text-lg font-medium">W3c Valid Code</h4>
                                  </div>
                              </div>
                          </div>

                          <div class="lg:col-span-4 md:col-span-6">
                              <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                  <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                      <i data-feather="globe" class="h-5 w-5 rotate-45"></i>
                                  </div>
                                  <div class="flex-1">
                                      <h4 class="mb-0 text-lg font-medium">Browsers Compatible</h4>
                                  </div>
                              </div>
                          </div>

                          <div class="lg:col-span-4 md:col-span-6">
                              <div class="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                  <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                      <i data-feather="settings" class="h-5 w-5 rotate-45"></i>
                                  </div>
                                  <div class="flex-1">
                                      <h4 class="mb-0 text-lg font-medium">Easy to customize</h4>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="grid grid-cols-1 justify-center">
                          <div class="mt-6 text-center">
                              <a href="#" class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <i class="uil uil-angle-right-b align-middle"></i></a>
                          </div>
                      </div>
                  </div>

                  <div class="container mt-16 mx-auto">
                <div class="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                    <div class="lg:col-span-8 md:col-span-6 md:text-left text-center">
                        <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Featured News Post</h3>
                        <p class="text-slate-400 max-w-xl">Search your future opportunity with our categories</p>
                    </div>

                    <div class="lg:col-span-4 md:col-span-6 md:text-right hidden md:block">
                        <a href="#" class="btn btn-link text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">All Categories <i class="uil uil-arrow-right align-middle"></i></a>
                    </div>
                </div>

                <div class="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    <div class="lg:col-span-8 md:col-span-6">
                        <div class="grid grid-cols-1 gap-[30px]">
                            <div class="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                                <div class="lg:flex relative">
                                    <div class="relative md:shrink-0">
                                        <img class="h-full w-full object-cover lg:w-52 lg:h-56" src={iimage} alt="" />
                                    </div>
                                    <div class="p-6 flex flex-col lg:h-56 justify-center">
                                        <a href="blog-detail.html" class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">Take a break through the countryside</a>
                                        <div class="my-auto">
                                            <p class="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                        </div>

                                        <div class="mt-4">
                                            <a href="blog-detail.html" class="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                                <div class="lg:flex relative">
                                    <div class="relative md:shrink-0">
                                        <img class="h-full w-full object-cover lg:w-52 lg:h-56" src={iimage} alt="" />
                                    </div>
                                    <div class="p-6 flex flex-col lg:h-56 justify-center">
                                        <a href="blog-detail.html" class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">These 10 sea destinations are surprises</a>
                                        <div class="my-auto">
                                            <p class="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                        </div>

                                        <div class="mt-4">
                                            <a href="blog-detail.html" class="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-4 sticky md:col-span-6">
                        <div class="sticky fixed top-20">
                            <h5 class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">Recent post</h5>
                            <div class="flex items-center mt-8">
                                <img src={iimage} class="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                <div class="ml-3">
                                    <a href="#" class="font-semibold hover:text-indigo-600">Consultant Business</a>
                                    <p class="text-sm text-slate-400">1st May 2022</p>
                                </div>
                            </div>

                            <div class="flex items-center mt-4">
                                <img src={iimage} class="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                <div class="ml-3">
                                    <a href="#" class="font-semibold hover:text-indigo-600">Grow Your Business</a>
                                    <p class="text-sm text-slate-400">1st May 2022</p>
                                </div>
                            </div>

                            <h5 class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Social sites</h5>
                            <ul class="list-none text-center mt-8">
                                <li class="inline"><a href="#" class="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><i data-feather="facebook" class="h-4 w-4"></i></a></li>
                            </ul>

                            <h5 class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Tagscloud</h5>
                            <ul class="list-none text-center mt-8">
                                <li class="inline-block m-2"><a href="#" class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Business</a></li>
                                <li class="inline-block m-2"><a href="#" class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Finance</a></li>
                                <li class="inline-block m-2"><a href="#" class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Marketing</a></li>
                                <li class="inline-block m-2"><a href="#" class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Fashion</a></li>
                                <li class="inline-block m-2"><a href="#" class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Bride</a></li>
                                <li class="inline-block m-2"><a href="#" class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Lifestyle</a></li>
                                <li class="inline-block m-2"><a href="#" class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Travel</a></li>
                                <li class="inline-block m-2"><a href="#" class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Beauty</a></li>
                                <li class="inline-block m-2"><a href="#" class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Video</a></li>
                                <li class="inline-block m-2"><a href="#" class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Audio</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </section>


    </>
  );
};

export default About;
