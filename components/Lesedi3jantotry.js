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
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

const About = ({products, posts}) => {
  return (
    <>
    <section className="section py-14" id="home">
            <div className="container mx-auto">
                <div className="lg:flex justify-center">
                    <div className="lg:w-2/3 mx-2">
                        <div className="text-center">
                            <h1 className="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-10">
                                 Welcome to Ok.Lesedi's World of Elegance and Expertise!
                            </h1>
                            <p className="text-base text-gray-400">

🌸 Elevate Your Brand with Style and Influence 🌸<br/>

Hello, lovely souls! I'm Lesedi Amanda Khoza, your go-to curator of captivating content and mastermind behind unforgettable events. With an Honors degree in Bachelor of Arts, I've turned my passion into a profession, creating a space where creativity, elegance, and influence converge. With a devoted community of 70,000 on Instagram, I am your bridge to a world where authenticity meets influence. My journey is rooted in the art of storytelling and bringing brands to life. Let's turn your vision into a captivating narrative that resonates with my engaged audience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className=" pb-10">
            <div className="container mx-auto 2xl:px-20">

                <div className="grid xl:grid-cols-2 grid-cols-1 gap-6 items-center">
                    <div>
                    <Image
                              src={lesedi.src}
                              width={500}
                              height={500}
                              className="md:h-[600px] rounded-2xl"
                              alt="responsive"
                              ></Image>
                    </div>

                    <div>
                        <div className="w-full flex justify-start">
                            <div className="text-4xl text-black border-b-[3px] border-black mb-4">My Special services</div>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 mb-5">Your brand's story is waiting to be told, and I'm here to be the storyteller it deserves.</p>

                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            <div className="bg-white rounded-xl shadow-xl p-10 dark:bg-neutral-800/70">
                                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 w-4 mx-auto text-white">
                                        <path fill="currentColor" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                                    </svg>
                                </div>

                                <h3 className="text-2xl font-semibold mt-5 mb-2">Advertising</h3>
                                <p className="text-gray-500 dark:text-gray-400">Immerse your brand in captivating stories that linger in the hearts of your audience.</p>
                            </div>

                            <div className="bg-white rounded-xl shadow-xl p-10 dark:bg-neutral-800/70">
                                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-4 w-4 mx-auto text-white">
                                        <path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold mt-5 mb-2">Event Hosting</h3>
                                <p className="text-gray-500 dark:text-gray-400">As your event host extraordinaire, I breathe life into your vision.</p>
                            </div>

                            <div className="bg-white rounded-xl shadow-xl p-10 dark:bg-neutral-800/70">
                                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 w-4 mx-auto text-white">
                                        <path fill="currentColor" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm192-96H320c17.7 0 32 14.3 32 32V320c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32z" />
                                    </svg>
                                </div>

                                <h3 className="text-2xl font-semibold mt-5 mb-2">Consultation</h3>
                                <p className="text-gray-500 dark:text-gray-400">Together, we'll unravel the intricacies of your brand, discuss tailored strategies, and explore innovative ideas.</p>
                            </div>

                            <div className="bg-white rounded-xl shadow-xl p-10 dark:bg-neutral-800/70">
                                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-4 w-4 mx-auto text-white">
                                        <path fill="currentColor" d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z" />
                                    </svg>
                                </div>

                                <h3 className="text-2xl font-semibold mt-5 mb-2">Influencer Marketing Workshops</h3>
                                <p className="text-gray-500 dark:text-gray-400">Unlock the secrets of influencer marketing with Lesedi's workshops.</p>
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
                        <div className="w-full flex justify-start">
                            <div className="text-4xl text-black border-b-[3px] border-black mb-4">My Shop</div>
                        </div>
                        <p className="text-slate-400 max-w-xl"> Explore a world of possibilities with Lesedi's digital products and curated clothing collections.</p>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6 md:text-right hidden md:block">
                        <a href="/search" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <i className="uil uil-arrow-right align-middle"></i></a>
                    </div>
                </div>

                <div className="sm:flex mt-4" id="grid">
                {products.map((product) => (
                  <Link key={product.slug} href={`/product/${product.slug}`}>
                    <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
                        <div className="uhkh">
                            <div className="relative">
                                <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
                                <Link href={`/product/${product.slug}`}>

                                  <Image
                                              src={product.image}
                                              width={500}
                                              height={500}
                                              className="rounded-t-md shadow"
                                              alt="responsive"
                                              ></Image>
                                </Link>

                                </div>
                            </div>

                            <div className="pt-4 px-3">
                                <h5 className="mb-1 font-semibold text-lg"><Link href={`/product/${product.slug}`} className="hover:text-indigo-600 transition-all duration-500 ease-in-out">{product.name}</Link><br/> <span className="text-slate-400">${product.price}</span></h5>
                                <button
                                  className="primary-button"
                                  type="button"
                                  onClick={() => addToCartHandler(product)}
                                >
                                  Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                    </Link>
                ))}
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                    <div className="md:col-span-12 text-center">
                        <a href="/search" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More <i className="uil uil-arrow-right align-middle"></i></a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto lg:mt-24 mt-16 lg:pt-24 pt-16">
                <div className="absolute inset-0 opacity-25 dark:opacity-50  bg-no-repeat bg-center"></div>
                <div className="relative grid grid-cols-1 pb-8 text-center z-1">
                    <div className="w-full flex justify-center">
                        <div className="text-4xl text-black border-b-[3px] border-black mb-4">Trusted by more than 70K Followers</div>
                    </div>
                    <p className="text-slate-400 max-w-xl mx-auto">Proud to have partnered with esteemed brands! Each collaboration is a testament to our shared commitment to excellence and innovation.</p>
                </div>

                <div className="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><span className="counter-value" data-target="1548">1010</span>+</h1>
                        <h5 className="counter-head text-lg font-medium">Product Sell</h5>
                    </div>

                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><span className="counter-value" data-target="25">2</span>+</h1>
                        <h5 className="counter-head text-lg font-medium">Award Gained</h5>
                    </div>

                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><span className="counter-value" data-target="9">5</span>+</h1>
                        <h5 className="counter-head text-lg font-medium">Years Experience</h5>
                    </div>
                </div>
            </div>
            <div className="container flex justify-center mx-auto mt-16">
                <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
                    <div className="mx-auto py-4">
                    <Image
                                src={amstel.src}
                                width={500}
                                height={500}
                                className="h-6"
                                alt="responsive"
                                ></Image>
                    </div>

                    <div className="mx-auto py-4">
                    <Image
                                src={voda.src}
                                width={500}
                                height={500}
                                className="h-6"
                                alt="responsive"
                                ></Image>
                    </div>

                    <div className="mx-auto py-4">
                    <Image
                                src={factorie.src}
                                width={500}
                                height={500}
                                className="h-6"
                                alt="responsive"
                                ></Image>
                    </div>

                    <div className="mx-auto py-4">
                    <Image
                                src={jb.src}
                                width={500}
                                height={500}
                                className="h-6"
                                alt="responsive"
                                ></Image>
                    </div>
                </div>
            </div>

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
