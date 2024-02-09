import React from 'react';
import iimage from '../assets/img/about.png';
import tecno from '../assets/tecno.png';
import factorie from '../assets/factorie.png';
import lesedi from '../assets/lesedi.jpg';
import lesedi1 from '../assets/lesedi1.jpg';
import lesedi2 from '../assets/lesedi2.jpg';
import lesedi3 from '../assets/lesedi3.jpg';
import lesediBanner from '../assets/lesediBanner.jpg';
import amstel from '../assets/amstel.jpg';
import eskort from '../assets/eskort.jpg';
import voda from '../assets/voda.jpg';
import jb from '../assets/jb.jpg';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

const About = ({products, posts}) => {
  return (
    <>
    <section className="relative table w-full pt-28 lg:pt-36">
              <div className="container mx-auto">
                  <div className="grid grid-cols-1 mt-10 text-center">
                      <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl bg-gradient-to-r from-red-600 to-indigo-600 text-transparent bg-clip-text mb-5">Building <br /> digital products, brands, <br /> and experience.</h4>
                      <p className="text-slate-400 text-lg max-w-xl mx-auto">A <span className="text-black dark:text-white font-semibold">Product Designer</span> and <span className="text-black dark:text-white font-semibold">Visual Developer</span> in NY. We specialize in UI/UX Design, Responsive Web Design, and Visual Development.</p>

                      <div className="mt-6 flex justify-center">
                          <a href="contact-one.html" className="btn btn-sm btn-primary bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><i className="uil uil-envelope"></i> Contact Us</a>
                      </div>
                  </div>
              </div>
          </section>

          <section className="relative md:py-24 py-16">
              <div className="container mx-auto">
                  <div className="grid grid-cols-1 items-center gap-[30px]">
                       <div className="filters-group-wrap text-center">
                          <div className="filters-group">
                              <ul className="mb-0 list-none container-filter filter-options">
                                  <li className="inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500 active" data-group="all">All</li>
                                  <li className="inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500" data-group="branding">Branding</li>
                                  <li className="inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500" data-group="designing">Designing</li>
                                  <li className="inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500" data-group="photography">Photography</li>
                                  <li className="inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500" data-group="development">Development</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="container-fluid relative mt-8 mx-auto">
                  <div id="grid" className="md:flex justify-center">
                      <div className="lg:w-1/5 md:w-1/3 p-1 picture-item" data-groups='["branding"]'>
                          <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                              <a href="assets/images/portfolio/10.jpg" className="lightbox transition-all duration-500 group-hover:scale-105" title="">
                              <Image
                                  src={lesedi.src}
                                  width={500}
                                  height={500}
                                  className="rounded-md"
                                  alt="responsive"
                                ></Image></a>
                              <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-800">
                                  <a href="portfolio-detail-two.html" className="hover:text-indigo-600 text-lg transition duration-500 font-medium">Iphone mockup</a>
                                  <h6 className="text-slate-400">Branding</h6>
                              </div>
                          </div>
                      </div>

                      <div className="lg:w-1/5 md:w-1/3 p-1 picture-item" data-groups='["designing"]'>
                          <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                              <a href="assets/images/portfolio/2.jpg" className="lightbox transition-all duration-500 group-hover:scale-105" title="">
                                <Image
                                      src={lesedi.src}
                                      width={500}
                                      height={500}
                                      className="shadow rounded-lg"
                                      alt="responsive"
                                    ></Image>
                              </a>
                              <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-800">
                                  <a href="portfolio-detail-two.html" className="hover:text-indigo-600 text-lg transition duration-500 font-medium">Iphone mockup</a>
                                  <h6 className="text-slate-400">Branding</h6>
                              </div>
                          </div>
                      </div>

                      <div className="lg:w-1/5 md:w-1/3 p-1 picture-item" data-groups='["photography"]'>
                          <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                              <a href="/" className="lightbox transition-all duration-500 group-hover:scale-105" title="">
                              <Image
                                    src={lesedi.src}
                                    width={500}
                                    height={500}
                                    className="shadow rounded-lg"
                                    alt="responsive"
                                  ></Image>
                              </a>
                              <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-800">
                                  <a href="portfolio-detail-two.html" className="hover:text-indigo-600 text-lg transition duration-500 font-medium">Iphone mockup</a>
                                  <h6 className="text-slate-400">Branding</h6>
                              </div>
                          </div>
                      </div>

                      <div className="lg:w-1/5 md:w-1/3 p-1 picture-item" data-groups='["branding"]'>
                          <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                          <a href="assets/images/portfolio/2.jpg" className="lightbox transition-all duration-500 group-hover:scale-105" title="">
                            <Image
                                  src={lesedi.src}
                                  width={500}
                                  height={500}
                                  className="shadow rounded-lg"
                                  alt="responsive"
                                ></Image>
                          </a>
                              <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-800">
                                  <a href="portfolio-detail-two.html" className="hover:text-indigo-600 text-lg transition duration-500 font-medium">Iphone mockup</a>
                                  <h6 className="text-slate-400">Branding</h6>
                              </div>
                          </div>
                      </div>

                  </div>

                  <div className="flex justify-center mt-8">
                      <a href="/" className="btn btn-sm btn-primary bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full">See More</a>
                  </div>
              </div>

              <div className="container md:mt-24 mt-16 mx-auto">
                  <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                      <div className="lg:col-span-6">
                          <div className="lg:mr-8">
                          <Image
                              src={lesedi.src}
                              width={500}
                              height={500}
                              alt="responsive"
                            ></Image>
                          </div>
                      </div>
                      <div className="lg:col-span-6 mt-8 md:mt-0">
                          <div className="grid grid-cols-1 gap-[30px]">
                              <div className="group flex items-center relative overflow-hidden p-6 rounded-md shadow dark:shadow-gray-800 bg-gray-50 dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out">
                                  <span className="text-indigo-600 group-hover:text-white text-5xl font-semibold transition-all duration-500 ease-in-out">
                                      <BsStarFill className="alig" /><i className="uil uil-swatchbook"></i>
                                  </span>
                                  <div className="flex-1 ml-3">
                                      <h5 className="group-hover:text-white text-xl font-semibold transition-all duration-500 ease-in-out">Enhance Security</h5>
                                      <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-2">There are many variations of passages of Lorem Ipsum available</p>
                                  </div>
                                  <div className="absolute left-1 top-5 text-dark/[0.03] dark:text-white/[0.03] text-8xl group-hover:text-white/[0.04] transition-all duration-500 ease-in-out">
                                      <BsStarFill className="alddle" /><i className="uil uil-swatchbook"></i>
                                  </div>
                              </div>

                              <div className="group flex items-center relative overflow-hidden p-6 rounded-md shadow dark:shadow-gray-800 bg-gray-50 dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out">
                                  <span className="text-indigo-600 group-hover:text-white text-5xl font-semibold transition-all duration-500 ease-in-out">
                                      <BsStarFill className="alile" /><i className="uil uil-tachometer-fast-alt"></i>
                                  </span>
                                  <div className="flex-1 ml-3">
                                      <h5 className="group-hover:text-white text-xl font-semibold transition-all duration-500 ease-in-out">High Performance</h5>
                                      <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-2">There are many variations of passages of Lorem Ipsum available</p>
                                  </div>
                                  <div className="absolute left-1 top-5 text-dark/[0.03] dark:text-white/[0.03] text-8xl group-hover:text-white/[0.04] transition-all duration-500 ease-in-out">
                                      <BsStarFill className="alidle" /><i className="uil uil-tachometer-fast-alt"></i>
                                  </div>
                              </div>

                              <div className="group flex items-center relative overflow-hidden p-6 rounded-md shadow dark:shadow-gray-800 bg-gray-50 dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out">
                                  <span className="text-indigo-600 group-hover:text-white text-5xl font-semibold transition-all duration-500 ease-in-out">
                                      <BsStarFill className="alddle" /><i className="uil uil-user-check"></i>
                                  </span>
                                  <div className="flex-1 ml-3">
                                      <h5 className="group-hover:text-white text-xl font-semibold transition-all duration-500 ease-in-out">Unbeatable Support</h5>
                                      <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-2">There are many variations of passages of Lorem Ipsum available</p>
                                  </div>
                                  <div className="absolute left-1 top-5 text-dark/[0.03] dark:text-white/[0.03] text-8xl group-hover:text-white/[0.04] transition-all duration-500 ease-in-out">
                                      <BsStarFill className="alddle" /><i className="uil uil-user-check"></i>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="container md:mt-24 mt-16 mx-auto">
                  <div className="grid grid-cols-1 text-center">
                      <span className="text-slate-400 mb-4">Available for freelance projects</span>
                      <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Do you have designing project? <br /> Let's talk.</h3>

                      <div className="mt-6 flex justify-center">
                          <a href="contact-one.html" className="btn btn-sm btn-primary bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><i className="uil uil-phone"></i> Contact us</a>
                      </div>
                  </div>
              </div>
          </section>

          <section className="relative mx-auto md:py-24 py-16">
          <div className="container mx-auto md:mt-24 mt-16">
              <div className="grid grid-cols-1 pb-8 text-center">
                  <div className="w-full flex justify-center">
                      <div className="text-4xl text-black border-b-[3px] border-black mb-4">Stories & Tips</div>
                  </div>
                  <p className="text-slate-400 max-w-xl mx-auto">Stay informed and inspired with Lesedi's captivating blog</p>
              </div>
              <div>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                  {posts.map((post) => (

                    <div key={post.slug}>
                        <div className="p-6 mb-6 border border-gray-100 transition duration-500 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                            <a href={`/post/${post.slug}`} className="absolute opacity-0 top-0 end-0 start-0-0 bottom-0"></a>
                            <div className="relative mb-4 rounded-lg">
                                <Image
                                            src={post.image}
                                            width={500}
                                            height={500}
                                            className="h-52 rounded-lg w-full object-cover transition-transform duration-500 transform group-hover:scale-105"
                                            alt="responsive"
                                            ></Image>
                                <a className="flex justify-center items-center bg-purple-500 bg-opacity-80 z-10 absolute top-0 start-0-0 w-full h-full text-white rounded-lg opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100" href={`/post/${post.slug}`} target="_blank" rel="noopener noreferrer">
                                    Read article <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="flex justify-between items-center w-full pb-4 mb-auto">
                                <div className="flex items-center">

                                    <div className="flex flex-1">
                                        <div className="bcfbg">
                                            <p className="text-sm font-semibold">Lesedi</p>
                                            <p className="text-sm text-gray-500">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <div className="text-sm flex items-center text-gray-500">
                                        6 min <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <h3 className="font-medium text-xl leading-8">
                                <a href={`/post/${post.slug}`} className="block relative group-hover:text-purple-500 transition-colors duration-200">
                                    {post.name}
                                </a>
                            </h3>
                        </div>
                    </div>

                  ))}

                  </div>
              </div>

          </div>
          </section>
    </>
  );
};

export default About;
