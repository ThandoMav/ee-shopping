import React from 'react';
import iimage from '../assets/img/about.png';
const About = () => {
  return (
<>

<section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="features">
            <div className="container lg mx-auto">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Features</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-[30px]">

                  <div className="group relative lg:px-6 mt-4 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <i data-feather="hexagon" className="h-28 w-28 fill-indigo-600/5 mx-auto rotate-[30deg]"></i>
                            <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-indigo-600 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                <i className="uil uil-adjust-circle"></i>
                            </div>
                        </div>

                        <div className="mt-6">
                            <a href="/" className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">Grow Your Business</a>
                            <p className="text-slate-400 transition duration-500 ease-in-out mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                        </div>
                    </div>

                    <div className="group relative lg:px-6 mt-4 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <i data-feather="hexagon" className="h-28 w-28 fill-indigo-600/5 mx-auto rotate-[30deg]"></i>
                            <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-indigo-600 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                <i className="uil uil-circuit"></i>
                            </div>
                        </div>

                        <div className="mt-6">
                            <a href="/" className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">Drive More Sales</a>
                            <p className="text-slate-400 transition duration-500 ease-in-out mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                        </div>
                    </div>


                    <div className="group relative lg:px-6 mt-4 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <i data-feather="hexagon" className="h-28 w-28 fill-indigo-600/5 mx-auto rotate-[30deg]"></i>
                            <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-indigo-600 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                <i className="uil uil-fire"></i>
                            </div>
                        </div>

                        <div className="mt-6">
                            <a href="/" className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">Handled By Expert</a>
                            <p className="text-slate-400 transition duration-500 ease-in-out mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container md:mt-24 mt-16">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
                    <div className="relative">
                        <div className="md:mr-10">
                            <img src={iimage} className="rounded-lg shadow-md dark:shadow-gray-800" alt="" />
                        </div>
                        <div className="absolute -bottom-10 right-0 p-6 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 md:w-80 w-60">
                            <h5 className="text-lg font-semibold mb-3">Helpcenter Software</h5>
                            <p className="text-slate-400">If the distribution of letters and 'words' is random</p>
                            <div className="flex justify-between mt-3 mb-2">
                                <span className="text-slate-400">Work in progress</span>
                                <span className="text-slate-400">84%</span>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                <div className="bg-indigo-600 h-[6px] rounded-full" style="width: 84%"></div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:ml-8 mt-8 md:mt-0">
                        <h4 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Manage all your tasks <br/> on this one plateform</h4>
                        <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>

                        <div className="mt-4">
                            <a href="page-aboutus.html" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Find Out More <i className="uil uil-angle-right-b align-middle"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container md:mt-24 mt-16">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="relative order-1 md:order-2">
                        <img src={iimage} className="rounded-lg shadow-md dark:shadow-gray-800" alt="" />
                    </div>

                    <div className="lg:mr-8 order-2 md:order-1">
                        <h4 className="mb-4 text-2xl leading-normal font-medium">Get Notified About Importent Email</h4>
                        <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                        <ul className="list-none text-slate-400 mt-4">
                            <li className="mb-1 flex"><i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-1 flex"><i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Our Talented & Experienced Marketing Agency</li>
                            <li className="mb-1 flex"><i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Create your own skin to match your brand</li>
                        </ul>

                        <div className="mt-4">
                            <a href="page-aboutus.html" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Find Out More <i className="uil uil-angle-right-b align-middle"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    <section classNameName=" py-14" id="home">
        <div classNameName="container mx-auto">
            <div classNameName="lg:flex justify-center">
                <div classNameName="lg:w-2/3 mx-2">
                    <div classNameName="text-center">
                        <h1 classNameName="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-10">
                            Let's keep in touch.
                        </h1>
                        <p classNameName="text-base text-gray-400">Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Proin gravida nibh vel velit auctor Aenean sollicitudin, adipisicing elit sed lorem quis bibendum auctor.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                    <div className="md:flex md:flex-row lg:justify-start lg:flex-col lg:text-left md:justify-between">
                        <div className="mb-6">
                            <h1 className=" text-base font-medium mb-2">Email Address</h1>
                            <a className="text-gray-400 text-sm font-medium" href="mailto:support.yourdomain@email.com">support.yourdomain@email.com</a>
                        </div>

                        <div className="mb-6">
                            <h1 className=" text-base font-medium mb-2">Telephone</h1>
                            <a  className="text-gray-400 text-sm font-medium" href="tel:+(123) 456-7890">+(123) 456-7890</a>
                        </div>

                        <div className="mb-6">
                            <h1 className=" text-base font-medium mb-2">Address</h1>
                            <h1 className="text-gray-400 text-sm">09 Design Street, Downtown Victoria, Australia</h1>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2">

                    <form method="post" name="myForm" id="myForm">
                        <p id="error-msg"></p>
                        <div id="simple-msg"></div>
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input type="text" name="name" id="name" className="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3" placeholder="Your Name" />

                                <input type="email" className="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3" id="email" name="email" placeholder="Your Email" />
                            </div>

                            <input type="text" name="subject" id="subject" placeholder="Subject" className="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3" />

                            <textarea className="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3" placeholder="Your Message" name="comments" id="comments" rows="3" spellcheck="false"></textarea>

                            <div className="text-right">
                                <input type="submit" id="submit" name="send" className="py-4 px-6 rounded-full uppercase cursor-pointer text-sm transition-all bg-slate-800 hover:bg-black text-white" value="Send Message" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <section className="relative md:py-24 py-16 ">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Business Consulting Services</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div className="group relative">
                        <div className="relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
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

        <div className="bg-[#f1f1f1] pt-[50px] pb-[30px]">
        <div className="wraper">
          <div className="grid grid-cols-12 gap-3">
              <div className="col-span-4 md:col-span-6 sm:col-span-12 mb-5">
                  <div className="bg-white flex items-center sm:mx-[30px] col:mx-0">
                       <div className="bg-[#c0b596] h-[100px] col:h-[80px] col:w-[80px] w-[100px] text-center px-[18px] col:p-0">
                           <i className="fi flaticon-lawyer text-[60px] col:text-[50px] col:leading-[55px] text-white"></i>
                       </div>
                       <div className="pl-[24px]">
                           <span className="text-[#ada282] text-[16px] font-normal">Book Your</span>
                           <h3 className="text-[#333] text-[27px] col:text-[22px] font-medium">Appointment</h3>
                       </div>
                  </div>
              </div>
              <div className="col-span-4 md:col-span-6 sm:col-span-12 mb-5">
                  <div className="bg-white flex items-center sm:mx-[30px] col:mx-0">
                       <div className="bg-[#c0b596] h-[100px] col:h-[80px] col:w-[80px] w-[100px] text-center px-[18px] col:p-0">
                           <i className="fi flaticon-scale text-[60px] col:text-[50px] col:leading-[55px] text-white"></i>
                       </div>
                       <div className="pl-[24px]">
                           <span className="text-[#ada282] text-[16px] font-normal">Get Free</span>
                           <h3 className="text-[#333] text-[27px] col:text-[22px] font-medium">Expert Advice</h3>
                       </div>
                  </div>
              </div>
              <div className="col-span-4 md:col-span-6 sm:col-span-12 mb-5">
                  <div className="bg-white flex items-center sm:mx-[30px] col:mx-0">
                       <div className="bg-[#c0b596] h-[100px] col:h-[80px] col:w-[80px] w-[100px] text-center px-[18px] col:p-0">
                           <i className="fi flaticon-network text-[60px] col:text-[50px] col:leading-[55px] text-white"></i>
                       </div>
                       <div className="pl-[24px]">
                           <span className="text-[#ada282] text-[16px] font-normal">You Can Easily</span>
                           <h3 className="text-[#333] text-[27px] col:text-[22px] font-medium">Join Our Team</h3>
                       </div>
                  </div>
              </div>
          </div>

        </div>
      </div>


      <section className="pt-[120px] pb-[100px] md:pt-[90px] md:pb-[50px]">
         <div className="wraper">
             <div className="grid grid-cols-12 items-center gap-3">
                  <div className="col-span-6 md:col-span-12">
                      <div className="relative mb-[20px]">
                          <div className=" relative max-w-[520px] before:absolute before:bg-[#c0b596] before:w-full before:h-full before:content-[''] before:-z-10 before:left-[-20px] before:top-[-20px] ">
                            <img className="w-full" src={iimage} alt="ye" />
                          </div>
                      </div>
                  </div>
                  <div className="col-span-6 md:col-span-12">
                      <div className="mb-[20px]">
                          <h2 className="text-[#282e3f] text-[32px]">About Us</h2>
                          <p className="text-[#666] text-[15px] leading-[28px] mb-[30px]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at ,</p>
                          <p className="text-[#666] text-[15px] leading-[28px] mb-[30px]"> and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum</p>
                          <div className="mb-[50px] col:mb-[20px]">
                              <a href="about.html" className="bg-[#c0b596] cursor-pointer text-[16px] font-semibold text-white px-[38px] py-[10px]  capitalize inline-block mt-[6px] transition ease-in-out duration-300 hover:bg-[#d4c291]
                              col:mb-[5px] col:mt-[15px] col:text-[15px] col:px-[18px] col:py-[8px]
                              ">More About Us..</a>
                          </div>
                          <div className="signature">
                              <img  src={iimage} alt="" />
                          </div>
                      </div>
                  </div>
             </div>
         </div>
      </section>


      <section className="bg-[#f5f5f5] pt-[95px] pb-[70px]">
        <div className="wraper">
           <div className="col-span-12 text-center">
              <div className="mb-[60px]">
                  <span className="text-[16px] text-[#ada282]">Area Of Practice</span>
                  <h2 className=" text-[36px] md:text-[26px] font-medium text-[#333] pb-[20px] relative before:absolute before:content-[''] before:left-[50%] before:bottom-0 before:transform before:-translate-x-1/2 before:w-[60px] before:h-[3px] before:bg-[#c0b596]">How Can We Help You</h2>
              </div>
           </div>
          <div className="grid grid-cols-12 gap-3">
              <div className="col-span-4 md:col-span-6 sm:col-span-12 mb-5">
                  <div className="group flex sm:mx-[80px] col:mx-0">
                      <div className="h-[80px] w-[80px]">
                          <div className="h-[80px] w-[80px] leading-[75px] border border-[rgba(192, 181, 150, .5)] rounded-[50%] text-center">
                              <i className="fi flaticon-parents  text-[50px] col:text-[40px] col:leading-[45px] transition-all text-[#c0b596] group-hover:text-[#999]"></i>
                          </div>
                      </div>
                      <div className="pl-[24px]">
                          <h3 className="text-[#373737] text-[24px] col:text-[20px] font-medium pb-[10px] relative mb-[10px]
                          before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[30px] before:h-[2px] before:bg-[#c0b596]">Family Law</h3>
                          <p className="text-[#777] text-[16px] font-normal">It is a long established fact that a reader will be distracted by the readable content of</p>
                       </div>
                 </div>
              </div>
              <div className="col-span-4 md:col-span-6 sm:col-span-12 mb-5">
                  <div className="group flex sm:mx-[80px] col:mx-0">
                      <div className="h-[80px] w-[80px]">
                          <div className="h-[80px] w-[80px] leading-[75px] border border-[rgba(192, 181, 150, .5)] rounded-[50%] text-center ">
                              <i className="fi flaticon-wounded  text-[50px] col:text-[30px] transition-all text-[#c0b596] group-hover:text-[#999]"></i>
                          </div>
                      </div>
                      <div className="pl-[24px]">
                          <h3 className="text-[#373737] text-[24px] col:text-[20px] font-medium pb-[10px] relative mb-[10px]
                          before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[30px] before:h-[2px] before:bg-[#c0b596]">Personal Injury</h3>
                          <p className="text-[#777] text-[16px] font-normal">It is a long established fact that a reader will be distracted by the readable content of</p>
                       </div>
                 </div>
              </div>
              <div className="col-span-4 md:col-span-6 sm:col-span-12 mb-5">
                  <div className="group flex sm:mx-[80px] col:mx-0">
                      <div className="h-[80px] w-[80px]">
                          <div className="h-[80px] w-[80px] leading-[75px] border border-[rgba(192, 181, 150, .5)] rounded-[50%] text-center ">
                              <i className="fi flaticon-employee  text-[50px] col:text-[30px] transition-all text-[#c0b596] group-hover:text-[#999]"></i>
                          </div>
                      </div>
                      <div className="pl-[24px]">
                          <h3 className="text-[#373737] text-[24px] col:text-[20px] font-medium pb-[10px] relative mb-[10px]
                          before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[30px] before:h-[2px] before:bg-[#c0b596]">Business Law</h3>
                          <p className="text-[#777] text-[16px] font-normal">It is a long established fact that a reader will be distracted by the readable content of</p>
                       </div>
                 </div>
              </div>
              <div className="col-span-4 md:col-span-6 sm:col-span-12 mb-5">
                  <div className="group flex sm:mx-[80px] col:mx-0">
                      <div className="h-[80px] w-[80px]">
                          <div className="h-[80px] w-[80px] leading-[75px] border border-[rgba(192, 181, 150, .5)] rounded-[50%] text-center ">
                              <i className="fi flaticon-thief  text-[50px] col:text-[30px] transition-all text-[#c0b596] group-hover:text-[#999]"></i>
                          </div>
                      </div>
                      <div className="pl-[24px]">
                          <h3 className="text-[#373737] text-[24px] col:text-[20px] font-medium pb-[10px] relative mb-[10px]
                          before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[30px] before:h-[2px] before:bg-[#c0b596]">Criminal Law</h3>
                          <p className="text-[#777] text-[16px] font-normal">It is a long established fact that a reader will be distracted by the readable content of</p>
                       </div>
                 </div>
              </div>
              <div className="col-span-4 md:col-span-6 sm:col-span-12 mb-5">
                  <div className="group flex sm:mx-[80px] col:mx-0">
                      <div className="h-[80px] w-[80px]">
                          <div className="h-[80px] w-[80px] leading-[75px] border border-[rgba(192, 181, 150, .5)] rounded-[50%] text-center ">
                              <i className="fi flaticon-university-graduate-hat  text-[50px] col:text-[30px] transition-all text-[#c0b596] group-hover:text-[#999]"></i>
                          </div>
                      </div>
                      <div className="pl-[24px]">
                          <h3 className="text-[#373737] text-[24px] col:text-[20px] font-medium pb-[10px] relative mb-[10px]
                          before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[30px] before:h-[2px] before:bg-[#c0b596]">Education Law</h3>
                          <p className="text-[#777] text-[16px] font-normal">It is a long established fact that a reader will be distracted by the readable content of</p>
                       </div>
                 </div>
              </div>
              <div className="col-span-4 md:col-span-6 sm:col-span-12 mb-5">
                  <div className="group flex sm:mx-[80px] col:mx-0">
                      <div className="h-[80px] w-[80px]">
                          <div className="h-[80px] w-[80px] leading-[75px] border border-[rgba(192, 181, 150, .5)] rounded-[50%] text-center ">
                              <i className="fi flaticon-house  text-[50px] col:text-[30px] transition-all text-[#c0b596] group-hover:text-[#999]"></i>
                          </div>
                      </div>
                      <div className="pl-[24px]">
                          <h3 className="text-[#373737] text-[24px] col:text-[20px] font-medium pb-[10px] relative mb-[10px]
                          before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[30px] before:h-[2px] before:bg-[#c0b596]">Real Estate Law</h3>
                          <p className="text-[#777] text-[16px] font-normal">It is a long established fact that a reader will be distracted by the readable content of</p>
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

                         <section className="realtive md:py-24 py-16">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="sticky top-20">
                            <ul className="flex-column text-center p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                <li role="presentation">
                                    <button className="px-4 py-2 text-base font-semibold rounded-md w-full hover:text-indigo-600 transition-all duration-500 ease-in-out" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Private Office</button>
                                </li>
                                <li role="presentation">
                                    <button className="px-4 py-2 text-base font-semibold rounded-md w-full mt-3 transition-all duration-500 ease-in-out" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dedicated Office</button>
                                </li>
                                <li role="presentation">
                                    <button className="px-4 py-2 text-base font-semibold rounded-md w-full mt-3 transition-all duration-500 ease-in-out" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Kitchen Space</button>
                                </li>
                                <li role="presentation">
                                    <button className="px-4 py-2 text-base font-semibold rounded-md w-full mt-3 transition-all duration-500 ease-in-out" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Meeting Rooms</button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                            <div className="" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <img src={iimage} className="shadow rounded-md" alt="" />
                                <div className="mt-6">
                                    <h5 className="text-lg font-semibold mb-4">Private Office</h5>
                                    <p className="text-slate-400 mb-2">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.</p>
                                    <a href="/" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <i className="uil uil-arrow-right align-middle"></i></a>
                                </div>
                            </div>
                            <div className="hidden " id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                <img src={iimage} className="shadow rounded-md" alt="" />
                                <div className="mt-6">
                                    <h5 className="text-lg font-semibold mb-4">Dedicated Office</h5>
                                    <p className="text-slate-400 mb-2">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.</p>
                                    <a href="/" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <i className="uil uil-arrow-right align-middle"></i></a>
                                </div>
                            </div>
                            <div className="hidden " id="settings" role="tabpanel" aria-labelledby="settings-tab">
                                <img src={iimage} className="shadow rounded-md" alt="" />
                                <div className="mt-6">
                                    <h5 className="text-lg font-semibold mb-4">Kitchen Space</h5>
                                    <p className="text-slate-400 mb-2">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.</p>
                                    <a href="/" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <i className="uil uil-arrow-right align-middle"></i></a>
                                </div>
                            </div>
                            <div className="hidden " id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                                <img src={iimage} className="shadow rounded-md" alt="" />
                                <div className="mt-6">
                                    <h5 className="text-lg font-semibold mb-4">Meeting Rooms</h5>
                                    <p className="text-slate-400 mb-2">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.</p>
                                    <a href="/" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <i className="uil uil-arrow-right align-middle"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>

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

          <section className="section py-10">
        <div className="container mx-auto">
            <div className="flex">
                <div className="lg:w-9/12 flex">
                    <div>
                        <h4
                            className="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 underline decoration-blue-400 underline-offset-4 mb-10">
                            News and Stories
                        </h4>

                        <h4 className="text-base font-light text-gray-400">Aenean sollicitudin, lorem quis bibendum auctor,
                            nisi elit consequat ipsum, nec
                            sagittis sem nibh id elit. Proin gravida nibh vel velit auctor Aenean sollicitudin,
                            adipisicing elit sed lorem
                            quis bibendum auctor.</h4>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                <div className="col-span-2">
                    <div className="prose max-w-full">

                        <article>

                            <div>
                                <a href="/"><img src={iimage} alt="" className="rounded" /></a>
                            </div>

                            <div>
                                <h2><a href="/">Beautiful Day With Friends In
                                        Paris</a></h2>
                                <div className="flex space-x-6">
                                    <div><i className="icofont-ui-calendar"></i> Mar 03, 2020</div>
                                    <div><i className="icofont-tags"></i> <a href="/">Branding</a>, <a href="/">Design</a>
                                    </div>
                                    <div><i className="icofont-comment"></i> <a href="/">3 Comments</a></div>
                                </div>
                            </div>

                            <div>
                                <p>Whether an identity or campaign, we make your brand visible, relevant and effective
                                    by placing
                                    the
                                    digital at the center of its ecosystem, without underestimating the power of
                                    traditional media.
                                    Whether an identity or campaign, we make your brand visible.</p>
                            </div>

                            <a href="/">Read More <i className="mdi mdi-arrow-right"></i></a>

                        </article>

                    </div>

                    <div className="flex mt-6">
                        <a href="/"
                            className="flex items-centzer justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white border rounded cursor-not-allowed">
                            <i className="icofont-rounded-left"></i>
                        </a>

                        <a href="/"
                            className="hidden px-4 py-2 mx-1 transition-colors duration-200 transform border rounded sm:inline bg-gray-600 text-white">
                            1
                        </a>

                        <a href="/"
                            className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white border rounded sm:inline hover:bg-gray-600 hover:text-white">
                            2
                        </a>

                        <a href="/"
                            className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white border rounded sm:inline hover:bg-gray-600 hover:text-white">
                            3
                        </a>

                        <a href="/"
                            className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white border rounded sm:inline hover:bg-gray-600 hover:text-white">
                            4
                        </a>

                        <a href="/"
                            className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white border rounded sm:inline hover:bg-gray-600 hover:text-white">
                            5
                        </a>

                        <a href="/"
                            className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white border rounded hover:bg-gray-600 hover:text-white">
                            <i className="icofont-rounded-right"></i>
                        </a>
                    </div>

                </div>

                <div className="lg:ml-8 ml-0 mt-8">

                  <div className="flex bg-transparent border items-center pr-4 mb-10">
                        <input type="search"
                            className="border-0 focus:border-0 focus:ring-0 text-black bg-transparent w-full"
                            placeholder="Search" />
                        <button type="submit" className="text-xl text-black">
                            <span className="icofont-search-1"></span>
                        </button>
                    </div>

                    <aside className="mb-10">
                        <div className="text-base font-medium">Categories</div>
                        <div className="relative flex items-center my-5">
                            <div className="h-px bg-gray-200 w-full absolute rounded-l-full"></div>
                            <div className="h-px bg-blue-700 w-8 absolute rounded-full"></div>
                        </div>
                        <div className="space-y-5">
                            <div><a href="/">Journey</a> (40)</div>
                            <div><a href="/">Photography</a> (08)</div>
                            <div><a href="/">Lifestyle</a> (11)</div>
                            <div><a href="/">Food &amp; Drinks</a> (21)</div>
                        </div>
                    </aside>

                  <aside className="mb-10">
                        <div className="text-base font-medium">Popular Posts</div>
                        <div className="relative flex items-center my-5">
                            <div className="h-px bg-gray-200 w-full absolute rounded-l-full"></div>
                            <div className="h-px bg-blue-700 w-8 absolute rounded-full"></div>
                        </div>
                        <div>
                            <div className="flex border-b mb-4 pb-4">
                                <div className="w-16">
                                    <a href="/"><img src={iimage} alt="" /></a>
                                </div>
                                <div className="mt-0.5 ml-4">
                                    <a href="/">Beautiful Day With Friends..</a>
                                    <span>Feb 15, 2020</span>
                                </div>
                            </div>

                            <div className="flex border-b mb-4 pb-4">
                                <div className="w-16">
                                    <a href="/"><img src={iimage} alt="" /></a>
                                </div>
                                <div className="mt-0.5 ml-4">
                                    <a href="/">Nature valley with cooling..</a>
                                    <span>Feb 10, 2020</span>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="w-16">
                                    <a href="/"><img src={iimage} alt="" /></a>
                                </div>
                                <div className="mt-0.5 ml-4">
                                    <a href="/">15 Best Healthy and Easy Salad..</a>
                                    <span>Feb 8, 2020</span>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <aside className="mb-10">
                        <div className="text-base font-medium">Text Widget</div>
                        <div className="relative flex items-center my-5">
                            <div className="h-px bg-gray-200 w-full absolute rounded-l-full"></div>
                            <div className="h-px bg-blue-700 w-8 absolute rounded-full"></div>
                        </div>

                        <p className="text-muted text-widget-des">Exercitation photo booth stumptown tote bag Banksy,
                            elit small
                            batch
                            freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips
                            proident chillwave
                            deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade
                            swag. </p>

                    </aside>

                      <aside className="mb-10">
                        <div className="text-base font-medium">Archives</div>
                        <div className="relative flex items-center my-5">
                            <div className="h-px bg-gray-200 w-full absolute rounded-l-full"></div>
                            <div className="h-px bg-blue-700 w-8 absolute rounded-full"></div>
                        </div>

                        <div className="space-y-5">
                            <div><a href="/">March 2020</a> (40)</div>
                            <div><a href="/">April 2020</a> (08)</div>
                            <div><a href="/">May 2020</a> (11)</div>
                            <div><a href="/">Feb 2020</a> (21)</div>
                        </div>

                    </aside>

                    <aside className="mb-10">
                        <div className="text-base font-medium">Tags</div>
                        <div className="relative flex items-center my-5">
                            <div className="h-px bg-gray-200 w-full absolute rounded-l-full"></div>
                            <div className="h-px bg-blue-700 w-8 absolute rounded-full"></div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <a className="px-2 py-1.5 bg-gray-100 text-[10px] hover:bg-blue-500 hover:text-white uppercase rounded-sm"
                                href="/">logo</a>
                            <a className="px-2 py-1.5 bg-gray-100 text-[10px] hover:bg-blue-500 hover:text-white uppercase rounded-sm"
                                href="/">business</a>
                            <a className="px-2 py-1.5 bg-gray-100 text-[10px] hover:bg-blue-500 hover:text-white uppercase rounded-sm"
                                href="/">corporate</a>
                            <a className="px-2 py-1.5 bg-gray-100 text-[10px] hover:bg-blue-500 hover:text-white uppercase rounded-sm"
                                href="/">e-commerce</a>
                            <a className="px-2 py-1.5 bg-gray-100 text-[10px] hover:bg-blue-500 hover:text-white uppercase rounded-sm"
                                href="/">agency</a>
                            <a className="px-2 py-1.5 bg-gray-100 text-[10px] hover:bg-blue-500 hover:text-white uppercase rounded-sm"
                                href="/">responsive</a>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </section>

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
