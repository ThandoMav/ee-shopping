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



           <section className="relative md:py-24 py-16">
                <div className="container mx-auto md:mt-24 mt-16">
                      <div className="grid grid-cols-1 pb-8 text-center">
                          <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Key Features</h3>

                          <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                      </div>

                      <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] mt-8">
                          <div className="lg:col-span-4 md:col-span-6">
                              <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                  <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                      <i data-feather="monitor" className="h-5 w-5 rotate-45"></i>
                                  </div>
                                  <div className="flex-1">
                                      <h4 className="mb-0 text-lg font-medium">Fully Responsive</h4>
                                  </div>
                              </div>
                          </div>

                          <div className="lg:col-span-4 md:col-span-6">
                              <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                  <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                      <i data-feather="heart" className="h-5 w-5 rotate-45"></i>
                                  </div>
                                  <div className="flex-1">
                                      <h4 className="mb-0 text-lg font-medium">Browser Compatibility</h4>
                                  </div>
                              </div>
                          </div>

                          <div className="lg:col-span-4 md:col-span-6">
                              <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                  <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                      <i data-feather="eye" className="h-5 w-5 rotate-45"></i>
                                  </div>
                                  <div className="flex-1">
                                      <h4 className="mb-0 text-lg font-medium">Retina Ready</h4>
                                  </div>
                              </div>
                          </div>

                          <div className="lg:col-span-4 md:col-span-6">
                              <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                  <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                      <i data-feather="layout" className="h-5 w-5 rotate-45"></i>
                                  </div>
                                  <div className="flex-1">
                                      <h4 className="mb-0 text-lg font-medium">Based On Tailwindcss 3</h4>
                                  </div>
                              </div>
                          </div>

                          <div className="lg:col-span-4 md:col-span-6">
                              <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                  <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                      <i data-feather="feather" className="h-5 w-5 rotate-45"></i>
                                  </div>
                                  <div className="flex-1">
                                      <h4 className="mb-0 text-lg font-medium">Feather Icons</h4>
                                  </div>
                              </div>
                          </div>

                          <div className="lg:col-span-4 md:col-span-6">
                              <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                  <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                      <i data-feather="code" className="h-5 w-5 rotate-45"></i>
                                  </div>
                                  <div className="flex-1">
                                      <h4 className="mb-0 text-lg font-medium">Built With SASS</h4>
                                  </div>
                              </div>
                          </div>

                          <div className="lg:col-span-4 md:col-span-6">
                              <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                  <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                      <i data-feather="user-check" className="h-5 w-5 rotate-45"></i>
                                  </div>
                                  <div className="flex-1">
                                      <h4 className="mb-0 text-lg font-medium">W3c Valid Code</h4>
                                  </div>
                              </div>
                          </div>

                          <div className="lg:col-span-4 md:col-span-6">
                              <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                  <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                      <i data-feather="globe" className="h-5 w-5 rotate-45"></i>
                                  </div>
                                  <div className="flex-1">
                                      <h4 className="mb-0 text-lg font-medium">Browsers Compatible</h4>
                                  </div>
                              </div>
                          </div>

                          <div className="lg:col-span-4 md:col-span-6">
                              <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                  <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                                      <i data-feather="settings" className="h-5 w-5 rotate-45"></i>
                                  </div>
                                  <div className="flex-1">
                                      <h4 className="mb-0 text-lg font-medium">Easy to customize</h4>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="grid grid-cols-1 justify-center">
                          <div className="mt-6 text-center">
                              <a href="/" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <i className="uil uil-angle-right-b align-middle"></i></a>
                          </div>
                      </div>
                  </div>

                  <div className="container mt-16 mx-auto">
                <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                    <div className="lg:col-span-8 md:col-span-6 md:text-left text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Featured News Post</h3>
                        <p className="text-slate-400 max-w-xl">Search your future opportunity with our categories</p>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6 md:text-right hidden md:block">
                        <a href="/" className="btn btn-link text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">All Categories <i className="uil uil-arrow-right align-middle"></i></a>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    <div className="lg:col-span-8 md:col-span-6">
                        <div className="grid grid-cols-1 gap-[30px]">
                            <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                                <div className="lg:flex relative">
                                    <div className="relative md:shrink-0">
                                        <img className="h-full w-full object-cover lg:w-52 lg:h-56" src={iimage} alt="" />
                                    </div>
                                    <div className="p-6 flex flex-col lg:h-56 justify-center">
                                        <a href="blog-detail.html" className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">Take a break through the countryside</a>
                                        <div className="my-auto">
                                            <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                        </div>

                                        <div className="mt-4">
                                            <a href="blog-detail.html" className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                                <div className="lg:flex relative">
                                    <div className="relative md:shrink-0">
                                        <img className="h-full w-full object-cover lg:w-52 lg:h-56" src={iimage} alt="" />
                                    </div>
                                    <div className="p-6 flex flex-col lg:h-56 justify-center">
                                        <a href="blog-detail.html" className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">These 10 sea destinations are surprises</a>
                                        <div className="my-auto">
                                            <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                        </div>

                                        <div className="mt-4">
                                            <a href="blog-detail.html" className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                                <div className="lg:flex relative">
                                    <div className="relative md:shrink-0">
                                        <img className="h-full w-full object-cover lg:w-52 lg:h-56" src={iimage} alt="" />
                                    </div>
                                    <div className="p-6 flex flex-col lg:h-56 justify-center">
                                        <a href="blog-detail.html" className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">A photographer perfect day in Colorado</a>
                                        <div className="my-auto">
                                            <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                        </div>

                                        <div className="mt-4">
                                            <a href="blog-detail.html" className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                                <div className="lg:flex relative">
                                    <div className="relative md:shrink-0">
                                        <img className="h-full w-full object-cover lg:w-52 lg:h-56" src={iimage} alt="" />
                                    </div>
                                    <div className="p-6 flex flex-col lg:h-56 justify-center">
                                        <a href="blog-detail.html" className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">This is the world most beautiful beach</a>
                                        <div className="my-auto">
                                            <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                        </div>

                                        <div className="mt-4">
                                            <a href="blog-detail.html" className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                                <div className="lg:flex relative">
                                    <div className="relative md:shrink-0">
                                        <img className="h-full w-full object-cover lg:w-52 lg:h-56" src={iimage} alt="" />
                                    </div>
                                    <div className="p-6 flex flex-col lg:h-56 justify-center">
                                        <a href="blog-detail.html" className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">Travel will change you for the better</a>
                                        <div className="my-auto">
                                            <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                        </div>

                                        <div className="mt-4">
                                            <a href="blog-detail.html" className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                                <div className="lg:flex relative">
                                    <div className="relative md:shrink-0">
                                        <img className="h-full w-full object-cover lg:w-52 lg:h-56" src={iimage} alt="" />
                                    </div>
                                    <div className="p-6 flex flex-col lg:h-56 justify-center">
                                        <a href="blog-detail.html" className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">Greek beyond Athene: Where to go next</a>
                                        <div className="my-auto">
                                            <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                        </div>

                                        <div className="mt-4">
                                            <a href="blog-detail.html" className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                                <div className="lg:flex relative">
                                    <div className="relative md:shrink-0">
                                        <img className="h-full w-full object-cover lg:w-52 lg:h-56" src={iimage} alt="" />
                                    </div>
                                    <div className="p-6 flex flex-col lg:h-56 justify-center">
                                        <a href="blog-detail.html" className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">This mountain will make you reborn</a>
                                        <div className="my-auto">
                                            <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                        </div>

                                        <div className="mt-4">
                                            <a href="blog-detail.html" className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 sticky md:col-span-6">
                        <div className="sticky fixed top-20">
                            <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">Recent post</h5>
                            <div className="flex items-center mt-8">
                                <img src={iimage} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                <div className="ml-3">
                                    <a href="/" className="font-semibold hover:text-indigo-600">Consultant Business</a>
                                    <p className="text-sm text-slate-400">1st May 2022</p>
                                </div>
                            </div>

                            <div className="flex items-center mt-4">
                                <img src={iimage} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                <div className="ml-3">
                                    <a href="/" className="font-semibold hover:text-indigo-600">Grow Your Business</a>
                                    <p className="text-sm text-slate-400">1st May 2022</p>
                                </div>
                            </div>

                            <div className="flex items-center mt-4">
                                <img src={iimage} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                <div className="ml-3">
                                    <a href="/" className="font-semibold hover:text-indigo-600">Look On The Glorious Balance</a>
                                    <p className="text-sm text-slate-400">1st May 2022</p>
                                </div>
                            </div>

                            <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Social sites</h5>
                            <ul className="list-none text-center mt-8">
                                <li className="inline"><a href="/" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><i data-feather="facebook" className="h-4 w-4"></i></a></li>
                                <li className="inline"><a href="/" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><i data-feather="instagram" className="h-4 w-4"></i></a></li>
                                <li className="inline"><a href="/" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><i data-feather="twitter" className="h-4 w-4"></i></a></li>
                                <li className="inline"><a href="/" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><i data-feather="linkedin" className="h-4 w-4"></i></a></li>
                                <li className="inline"><a href="/" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><i data-feather="github" className="h-4 w-4"></i></a></li>
                                <li className="inline"><a href="/" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><i data-feather="youtube" className="h-4 w-4"></i></a></li>
                                <li className="inline"><a href="/" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><i data-feather="gitlab" className="h-4 w-4"></i></a></li>
                            </ul>

                            <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Tagscloud</h5>
                            <ul className="list-none text-center mt-8">
                                <li className="inline-block m-2"><a href="/" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Business</a></li>
                                <li className="inline-block m-2"><a href="/" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Finance</a></li>
                                <li className="inline-block m-2"><a href="/" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Marketing</a></li>
                                <li className="inline-block m-2"><a href="/" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Fashion</a></li>
                                <li className="inline-block m-2"><a href="/" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Bride</a></li>
                                <li className="inline-block m-2"><a href="/" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Lifestyle</a></li>
                                <li className="inline-block m-2"><a href="/" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Travel</a></li>
                                <li className="inline-block m-2"><a href="/" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Beauty</a></li>
                                <li className="inline-block m-2"><a href="/" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Video</a></li>
                                <li className="inline-block m-2"><a href="/" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Audio</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </section>


             <div className="container mx-auto md:mt-24 mt-16">
                             <div className="grid grid-cols-1 pb-8 text-center">
                                 <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Recent Posts</h3>
                                 <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                             </div>

                             <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                                 <div className="flex items-center">
                                     <img src={iimage} className="lg:h-20 h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                     <div className="ml-3">
                                         <a href="/" className="font-semibold hover:text-indigo-600">Consultant Business</a>
                                         <p className="text-sm text-slate-400 mt-1">1st May 2022</p>
                                     </div>
                                 </div>

                                 <div className="flex items-center">
                                     <img src={iimage} className="lg:h-20 h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                     <div className="ml-3">
                                         <a href="/" className="font-semibold hover:text-indigo-600">Grow Your Business</a>
                                         <p className="text-sm text-slate-400 mt-1">1st May 2022</p>
                                     </div>
                                 </div>

                                 <div className="flex items-center">
                                     <img src={iimage} className="lg:h-20 h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                     <div className="ml-3">
                                         <a href="/" className="font-semibold hover:text-indigo-600">Look On The Glorious Balance</a>
                                         <p className="text-sm text-slate-400 mt-1">1st May 2022</p>
                                     </div>
                                 </div>

                                 <div className="flex items-center">
                                     <img src={iimage} className="lg:h-20 h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                     <div className="ml-3">
                                         <a href="/" className="font-semibold hover:text-indigo-600">5 incredible city to travel in Italy</a>
                                         <p className="text-sm text-slate-400 mt-1">1st May 2022</p>
                                     </div>
                                 </div>

                                 <div className="flex items-center">
                                     <img src={iimage} className="lg:h-20 h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                     <div className="ml-3">
                                         <a href="/" className="font-semibold hover:text-indigo-600">25 essentials for your travel backpack</a>
                                         <p className="text-sm text-slate-400 mt-1">1st May 2022</p>
                                     </div>
                                 </div>

                                 <div className="flex items-center">
                                     <img src={iimage} className="lg:h-20 h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                     <div className="ml-3">
                                         <a href="/" className="font-semibold hover:text-indigo-600">Amazing destination in Portugal</a>
                                         <p className="text-sm text-slate-400 mt-1">1st May 2022</p>
                                     </div>
                                 </div>

                                 <div className="flex items-center">
                                     <img src={iimage} className="lg:h-20 h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                     <div className="ml-3">
                                         <a href="/" className="font-semibold hover:text-indigo-600">Free solo travel across North Europe</a>
                                         <p className="text-sm text-slate-400 mt-1">1st May 2022</p>
                                     </div>
                                 </div>

                                 <div className="flex items-center">
                                     <img src={iimage} className="lg:h-20 h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                     <div className="ml-3">
                                         <a href="/" className="font-semibold hover:text-indigo-600">Explorer completes historic lakes</a>
                                         <p className="text-sm text-slate-400 mt-1">1st May 2022</p>
                                     </div>
                                 </div>

                                 <div className="flex items-center">
                                     <img src={iimage} className="lg:h-20 h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                     <div className="ml-3">
                                         <a href="/" className="font-semibold hover:text-indigo-600">Dont miss these amazing side trips</a>
                                         <p className="text-sm text-slate-400 mt-1">1st May 2022</p>
                                     </div>
                                 </div>
                             </div>
              </div>


            <div className="container mx-auto lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Featured Properties</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div className="group rounded-md bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-800 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                        <div className="relative">
                            <img src={iimage} alt="" />

                            <div className="absolute top-6 right-6">
                                <a href="/" className="btn btn-icon text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600"><i className="mdi mdi-heart"></i></a>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="pb-6">
                                <a href="property-detail.html" className="text-lg hover:text-indigo-600 font-medium ease-in-out duration-500">10765 Hillshire Ave, Baton Rouge, LA 70810, USA</a>
                            </div>

                            <ul className="py-6 border-y border-gray-100 dark:border-gray-800 flex items-center list-none">
                                <li className="flex items-center mr-4">
                                    <i className="uil uil-compress-arrows text-2xl mr-2 text-indigo-600"></i>
                                    <span>8000sqf</span>
                                </li>

                                <li className="flex items-center mr-4">
                                    <i className="uil uil-bed-double text-2xl mr-2 text-indigo-600"></i>
                                    <span>4 Beds</span>
                                </li>

                                <li className="flex items-center">
                                    <i className="uil uil-bath text-2xl mr-2 text-indigo-600"></i>
                                    <span>4 Baths</span>
                                </li>
                            </ul>

                            <ul className="pt-6 flex justify-between items-center list-none">
                                <li>
                                    <span className="text-slate-400">Price</span>
                                    <p className="text-lg font-medium">$5000</p>
                                </li>

                                <li>
                                    <span className="text-slate-400">Rating</span>
                                    <ul className="text-lg font-medium text-amber-400 list-none">
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline text-black dark:text-white">5.0(30)</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                <div className="md:flex justify-center text-center mt-6">
                    <div className="md:w-full">
                        <a href="property-listing.html" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">View More Properties <i className="uil uil-arrow-right ml-1"></i></a>
                    </div>
                </div>
            </div>
          </div>

    </>
  );
};

export default About;
