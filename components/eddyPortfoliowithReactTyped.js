import React from 'react';
import iimage from '../assets/img/about.png';
// import data
import Typed from 'react-typed'

import { about } from '../data';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import Faq from '../components/Faq';

const About = () => {
  // destructure about data
  const { title, subtitle1, subtitle2, icon, link } = about;
  return (
    <>
    <section className="relative md:py-64 py-36 items-center  bg-center bg-no-repeat">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 justify-center text-center">
              <div className="">
                <h1
                  className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5"
                >
                  All-in-one SEO
                  <span
                    className="typewrite bg-gradient-to-r from-red-600 to-indigo-600 text-transparent bg-clip-text"
                    data-period="2000"
                    data-type='[ "Plugin", "Website", "Toolkit", "Agency" ]'
                  >
                  <Typed
                    className="typewrite bg-gradient-to-r from-red-600 to-indigo-600 text-transparent bg-clip-text"
                    strings={[
                     'Web Design',
                     'Web Development',
                     'Facebook Ads SMM',
                     'Google Adwords',
                    ]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                  /> "react-typed": "^1.2.0",
                    <span className="wrap"></span>
                  </span>
                </h1>
                <p className="text-slate-400 text-lg max-w-xl mx-auto">
                  A
                  <span className="text-black dark:text-white font-semibold"
                    >Product Designer</span
                  >
                  and
                  <span className="text-black dark:text-white font-semibold"
                    >Visual Developer</span
                  >
                  in NY. We specialize in UI/UX Design, Responsive Web Design, and
                  Visual Development.
                </p>

                <div className="mt-6">
                  <a
                    href="contact-one.html"
                    className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"
                    ><i className="uil uil-envelope"></i> Contact Us</a
                  >
                </div>
              </div>
            </div>
          </div>
    </section>


        <div className="relative">
          <div
            className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden text-white dark:text-slate-900"
          >
            <svg
              className="w-full h-auto"
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <section className="relative md:pb-24 pb-16">
          <div className="container mx-auto">
            <div className="md:flex justify-center">
              <div className="lg:w-3/4 md:w-full relative -mt-16">
                <div
                  className="p-6 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800"
                >
                  <div className="md:flex justify-center">
                    <div className="md:w-1/3">
                      <div className="text-center">
                        <h6 className="text-slate-400 mb-0">External Backlinks</h6>
                        <h2 className="mb-0 text-4xl mt-3 font-bold">
                          <span className="counter-value" data-target="2021">1990</span
                          >K+
                        </h2>
                      </div>
                    </div>

                    <div className="md:w-1/3 mt-8 md:mt-0">
                      <div className="text-center">
                        <h6 className="text-slate-400 mb-0">Pages Crawled Daily</h6>
                        <h2 className="mb-0 text-4xl mt-3 font-bold">
                          <span className="counter-value" data-target="210">2</span>B+
                        </h2>
                      </div>
                    </div>

                    <div className="md:w-1/3 mt-8 md:mt-0">
                      <div className="text-center">
                        <h6 className="text-slate-400 mb-0">Domain Indexed</h6>
                        <h2 className="mb-0 text-4xl mt-3 font-bold">
                          <span className="counter-value" data-target="18">1</span>M+
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>


          <div className="container mx-auto md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
              <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
                Services
              </h6>
              <h3
                className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold bg-gradient-to-r from-red-600 to-indigo-600 text-transparent bg-clip-text"
              >
                We are SEO Professionals
              </h3>

              <p className="text-slate-400 max-w-xl mx-auto">
                Your content is an integral part of your SEO efforts and online
                marketing strategy
              </p>
            </div>


            <div
              className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]"
            >
              <div
                className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 transition duration-500 rounded-2xl mt-6"
              >
                <div
                  className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800"
                >
                  <i className="uil uil-arrow"></i>
                </div>

                <div className="content mt-7">
                  <a
                    href="page-services.html"
                    className="title h5 text-lg font-medium hover:text-indigo-600"
                    >SEO</a
                  >
                  <p className="text-slate-400 mt-3">
                    The phrasal sequence of the is now so that many campaign and
                    benefit
                  </p>

                  <div className="mt-5">
                    <a
                      href="page-services.html"
                      className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                      >Read More <i className="uil uil-arrow-right"></i
                    ></a>
                  </div>
                </div>
              </div>

              <div
                className="p-6 shadow-xl shadow-gray-100 dark:shadow-gray-800 transition duration-500 rounded-2xl mt-6"
              >
                <div
                  className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800"
                >
                  <i className="uil uil-pen"></i>
                </div>

                <div className="content mt-7">
                  <a
                    href="page-services.html"
                    className="title h5 text-lg font-medium hover:text-indigo-600"
                    >Content Marketing</a
                  >
                  <p className="text-slate-400 mt-3">
                    The phrasal sequence of the is now so that many campaign and
                    benefit
                  </p>

                  <div className="mt-5">
                    <a
                      href="page-services.html"
                      className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                      >Read More <i className="uil uil-arrow-right"></i
                    ></a>
                  </div>
                </div>
              </div>

              <div
                className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 transition duration-500 rounded-2xl mt-6"
              >
                <div
                  className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800"
                >
                  <i className="uil uil-circle-layer"></i>
                </div>

                <div className="content mt-7">
                  <a
                    href="page-services.html"
                    className="title h5 text-lg font-medium hover:text-indigo-600"
                    >Branding</a
                  >
                  <p className="text-slate-400 mt-3">
                    The phrasal sequence of the is now so that many campaign and
                    benefit
                  </p>

                  <div className="mt-5">
                    <a
                      href="page-services.html"
                      className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                      >Read More <i className="uil uil-arrow-right"></i
                    ></a>
                  </div>
                </div>
              </div>

              <div
                className="p-6 shadow-xl shadow-gray-100 dark:shadow-gray-800 transition duration-500 rounded-2xl mt-6"
              >
                <div
                  className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800"
                >
                  <i className="uil uil-chart-line"></i>
                </div>

                <div className="content mt-7">
                  <a
                    href="page-services.html"
                    className="title h5 text-lg font-medium hover:text-indigo-600"
                    >Analytics</a
                  >
                  <p className="text-slate-400 mt-3">
                    The phrasal sequence of the is now so that many campaign and
                    benefit
                  </p>

                  <div className="mt-5">
                    <a
                      href="page-services.html"
                      className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                      >Read More <i className="uil uil-arrow-right"></i
                    ></a>
                  </div>
                </div>
              </div>

              <div
                className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 transition duration-500 rounded-2xl mt-6"
              >
                <div
                  className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800"
                >
                  <i className="uil uil-users-alt"></i>
                </div>

                <div className="content mt-7">
                  <a
                    href="page-services.html"
                    className="title h5 text-lg font-medium hover:text-indigo-600"
                    >Management</a
                  >
                  <p className="text-slate-400 mt-3">
                    The phrasal sequence of the is now so that many campaign and
                    benefit
                  </p>

                  <div className="mt-5">
                    <a
                      href="page-services.html"
                      className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                      >Read More <i className="uil uil-arrow-right"></i
                    ></a>
                  </div>
                </div>
              </div>

              <div
                className="p-6 shadow-xl shadow-gray-100 dark:shadow-gray-800 transition duration-500 rounded-2xl mt-6"
              >
                <div
                  className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800"
                >
                  <i className="uil uil-comments"></i>
                </div>

                <div className="content mt-7">
                  <a
                    href="page-services.html"
                    className="title h5 text-lg font-medium hover:text-indigo-600"
                    >Email Marketing</a
                  >
                  <p className="text-slate-400 mt-3">
                    The phrasal sequence of the is now so that many campaign and
                    benefit
                  </p>

                  <div className="mt-5">
                    <a
                      href="page-services.html"
                      className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                      >Read More <i className="uil uil-arrow-right"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>

        <section className="realtive md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 pb-8 text-center">
              <h3
                className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold"
              >
                A Performance-driven Marketing Agency
              </h3>

              <p className="text-slate-400 max-w-xl mx-auto">
                We offer flexible and comprehensive online marketing plans and
                strategies so you can take advantage of our full spectrum of
                marketing services.
              </p>
            </div>


            <div
              className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px] text-center"
            >
              <div className="lg:col-span-12 md:col-span flex justify-center">
                <div className="sticky top-20">
                  <ul
                    className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md"
                    id="myTab"
                    data-tabs-toggle="#myTabContent"
                    role="tablist"
                  >
                    <li role="presentation">
                      <button
                        className="px-4 py-2 text-left text-base font-semibold rounded-md w-full hover:text-indigo-600 transition-all duration-500 ease-in-out"
                        id="profile-tab"
                        data-tabs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="true"
                      >
                        <span className="block">Step 1</span>
                        <span className="text-xl mt-2 block">SEO Audit</span>
                        <span className="block mt-2"
                          >We offer flexible and comprehensive online marketing
                          plans</span
                        >
                      </button>
                    </li>
                    <li role="presentation">
                      <button
                        className="px-4 py-2 text-left text-base font-semibold rounded-md w-full mt-6 transition-all duration-500 ease-in-out"
                        id="dashboard-tab"
                        data-tabs-target="#dashboard"
                        type="button"
                        role="tab"
                        aria-controls="dashboard"
                        aria-selected="false"
                      >
                        <span className="block">Step 2</span>
                        <span className="text-xl mt-2 block">Project Execution</span>
                        <span className="block mt-2"
                          >We offer flexible and comprehensive online marketing
                          plans</span
                        >
                      </button>
                    </li>
                    <li role="presentation">
                      <button
                        className="px-4 py-2 text-left text-base font-semibold rounded-md w-full mt-6 transition-all duration-500 ease-in-out"
                        id="settings-tab"
                        data-tabs-target="#settings"
                        type="button"
                        role="tab"
                        aria-controls="settings"
                        aria-selected="false"
                      >
                        <span className="block">Step 3</span>
                        <span className="text-xl mt-2 block">Results & Reporting</span>
                        <span className="block mt-2"
                          >We offer flexible and comprehensive online marketing
                          plans</span
                        >
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </section>

        <section className="realtive md:py-24 py-16">
          <div className="container mx-auto md:mt-24 mt-16">
            <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
              <div className="lg:col-span-8 md:col-span-6 md:text-left text-center">
                <h6 className="text-indigo-600 font-semibold mb-2">Portfolio</h6>
                <h3
                  className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold"
                >
                  Our Digital Product
                </h3>
                <p className="text-slate-400 max-w-xl">
                  Start working with Techwind that can provide everything you need
                  to generate awareness, drive traffic, connect.
                </p>
              </div>

              <div
                className="lg:col-span-4 md:col-span-6 md:text-right hidden md:block"
              >
                <a
                  href="#"
                  className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                  >See More <i className="uil uil-arrow-right align-middle"></i
                ></a>
              </div>
            </div>


            <div className="sm:flex mt-4" id="grid">
              <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
                <div className="">
                  <div className="relative">
                    <div
                      className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30"
                    >
                      <img
                        src={iimage}
                        className="rounded-t-md shadow"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="pt-4 px-3">
                    <h5 className="mb-1 font-semibold text-lg">
                      <a
                        href="https://1.envato.market/techwind"
                        target="_blank"
                        className="hover:text-indigo-600 transition-all duration-500 ease-in-out"
                        >Techwind Personal Portfolio</a
                      >
                    </h5>
                    <span className="text-slate-400">Creative</span>
                  </div>
                </div>
              </div>


              <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
                <div className="">
                  <div className="relative">
                    <div
                      className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-emerald-600/5 dark:bg-emerald-600/30"
                    >
                      <img
                        src={iimage}
                        className="rounded-t-md shadow"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="pt-4 px-3">
                    <h5 className="mb-1 font-semibold text-lg">
                      <a
                        href="https://1.envato.market/techwind"
                        target="_blank"
                        className="hover:text-emerald-600 transition-all duration-500 ease-in-out"
                        >Techwind Minimal Portfolio</a
                      >
                    </h5>
                    <span className="text-slate-400">Minimal</span>
                  </div>
                </div>
              </div>


              <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
                <div className="">
                  <div className="relative">
                    <div
                      className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-red-600/5 dark:bg-red-600/30"
                    >
                      <img
                        src={iimage}
                        className="rounded-t-md shadow"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="pt-4 px-3">
                    <h5 className="mb-1 font-semibold text-lg">
                      <a
                        href="https://1.envato.market/techwind"
                        target="_blank"
                        className="hover:text-red-600 transition-all duration-500 ease-in-out"
                        >Techwind NFT Market</a
                      >
                    </h5>
                    <span className="text-slate-400">Crypto</span>
                  </div>
                </div>
              </div>


              <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
                <div className="">
                  <div className="relative">
                    <div
                      className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-sky-600/5 dark:bg-sky-600/30"
                    >
                      <img
                        src={iimage}
                        className="rounded-t-md shadow"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="pt-4 px-3">
                    <h5 className="mb-1 font-semibold text-lg">
                      <a
                        href="https://1.envato.market/techwind"
                        target="_blank"
                        className="hover:text-sky-600 transition-all duration-500 ease-in-out"
                        >Techwind Portfolio</a
                      >
                    </h5>
                    <span className="text-slate-400">Portfolio</span>
                  </div>
                </div>
              </div>


              <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
                <div className="">
                  <div className="relative">
                    <div
                      className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-amber-600/5 dark:bg-amber-600/30"
                    >
                      <img
                        src={iimage}
                        className="rounded-t-md shadow"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="pt-4 px-3">
                    <h5 className="mb-1 font-semibold text-lg">
                      <a
                        href="https://1.envato.market/techwind"
                        target="_blank"
                        className="hover:text-amber-600 transition-all duration-500 ease-in-out"
                        >Techwind Constuction</a
                      >
                    </h5>
                    <span className="text-slate-400">Corporate</span>
                  </div>
                </div>
              </div>


              <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
                <div className="">
                  <div className="relative">
                    <div
                      className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30"
                    >
                      <img
                        src={iimage}
                        className="rounded-t-md shadow"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="pt-4 px-3">
                    <h5 className="mb-1 font-semibold text-lg">
                      <a
                        href="https://1.envato.market/techwind"
                        target="_blank"
                        className="hover:text-indigo-600 transition-all duration-500 ease-in-out"
                        >Techwind SEO</a
                      >
                    </h5>
                    <span className="text-slate-400">SEO</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
              <div className="md:col-span-12 text-center">
                <a
                  href="#"
                  className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                  >See More <i className="uil uil-arrow-right align-middle"></i
                ></a>
              </div>
            </div>

          </div>

          <div className="container mx-auto md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
              <h3
                className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold"
              >
                Loved by businesses worldwide
              </h3>

              <p className="text-slate-400 max-w-xl mx-auto">
                Start working with Tailwind CSS that can provide everything you need
                to generate awareness, drive traffic, connect.
              </p>
            </div>


            <div
              className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]"
            >
              <ul className="space-y-8">
                <li className="rounded-lg shadow-lg dark:shadow-gray-800 p-6">
                  <div
                    className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800"
                  >
                    <img
                      src={iimage}
                      className="h-16 w-16 rounded-full shadow dark:shadow-gray-800"
                      alt=""
                    />

                    <div className="pl-4">
                      <a
                        href="/"
                        className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                        >Thomas Israel</a
                      >
                      <p className="text-slate-400">C.E.O</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-slate-400">
                      I didn't know a thing about icon design until I read this
                      book. Now I can create any icon I need in no time. Great
                      resource!
                    </p>
                    <ul className="list-none mb-0 text-amber-400 mt-2">
                      <li className="inline"><i className="mdi mdi-star"></i></li>
                      <li className="inline"><i className="mdi mdi-star"></i></li>
                      <li className="inline"><i className="mdi mdi-star"></i></li>
                      <li className="inline"><i className="mdi mdi-star"></i></li>
                      <li className="inline"><i className="mdi mdi-star"></i></li>
                    </ul>
                  </div>
                </li>
              </ul>

              <ul className="space-y-8 hidden sm:block">
                <li className="rounded-lg shadow-lg dark:shadow-gray-800 p-6">
                  <div
                    className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800"
                  >
                    <img
                      src={iimage}
                      className="h-16 w-16 rounded-full shadow dark:shadow-gray-800"
                      alt=""
                    />

                    <div className="pl-4">
                      <a
                        href="/"
                        className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                        >Jill Webb</a
                      >
                      <p className="text-slate-400">C.E.O</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-slate-400">
                      I'm trying to get a hold of someone in support, I'm in a lot
                      of trouble right now and they are saying it has something to
                      do with my books. Please get back to me right away.
                    </p>
                    <ul className="list-none mb-0 text-amber-400 mt-2">
                      <li className="inline"><i className="mdi mdi-star"></i></li>
                      <li className="inline"><i className="mdi mdi-star"></i></li>
                      <li className="inline"><i className="mdi mdi-star"></i></li>
                      <li className="inline"><i className="mdi mdi-star"></i></li>
                      <li className="inline"><i className="mdi mdi-star"></i></li>
                    </ul>
                  </div>
                </li>
              </ul>

              <ul className="space-y-8 hidden lg:block">
                <li className="rounded-lg shadow-lg dark:shadow-gray-800 p-6">
                  <div
                    className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800"
                  >
                    <img
                      src={iimage}
                      className="h-16 w-16 rounded-full shadow dark:shadow-gray-800"
                      alt=""
                    />

                    <div className="pl-4">
                      <a
                        href="/"
                        className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                        >Janisha Doll</a
                      >
                      <p className="text-slate-400">C.E.O</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-slate-400">
                      This is the fourth email I've sent to your support team. I am
                      literally being held in jail for tax fraud. Please answer your
                      damn emails, this is important.
                    </p>
                    <ul className="list-none mb-0 text-amber-400 mt-2">
                      <li className="inline"><i className="mdi mdi-star"></i></li>
                      <li className="inline"><i className="mdi mdi-star"></i></li>
                      <li className="inline"><i className="mdi mdi-star"></i></li>
                      <li className="inline"><i className="mdi mdi-star"></i></li>
                      <li className="inline"><i className="mdi mdi-star"></i></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="container mx-auto md:mt-24 mt-16">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center">
              <div className="md:col-span-6">
                <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
                  Blogs
                </h6>
                <h3
                  className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold"
                >
                  Reads Our Latest <br />
                  News & Blog
                </h3>
              </div>

              <div className="md:col-span-6">
                <p className="text-slate-400 max-w-xl">
                  Start working with Techwind that can provide everything you need
                  to generate awareness, drive traffic, connect.
                </p>
              </div>
            </div>


            <div
              className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]"
            >
              <div
                className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden"
              >
                <img src={iimage} alt="gfhff" />

                <div className="content p-6">
                  <a
                    href="blog-detail.html"
                    className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                    >Design your apps in your own way</a
                  >
                  <p className="text-slate-400 mt-3">
                    The phrasal sequence of the is now so that many campaign and
                    benefit
                  </p>

                  <div className="mt-4">
                    <a
                      href="blog-detail.html"
                      className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                      >Read More <i className="uil uil-arrow-right"></i
                    ></a>
                  </div>
                </div>
              </div>

              <div
                className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden"
              >
                <img src={iimage} alt="uhg" />

                <div className="content p-6">
                  <a
                    href="blog-detail.html"
                    className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                    >How apps is changing the IT world</a
                  >
                  <p className="text-slate-400 mt-3">
                    The phrasal sequence of the is now so that many campaign and
                    benefit
                  </p>

                  <div className="mt-4">
                    <a
                      href="blog-detail.html"
                      className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                      >Read More <i className="uil uil-arrow-right"></i
                    ></a>
                  </div>
                </div>
              </div>

              <div
                className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden"
              >
                <img src={iimage} alt="" />

                <div className="content p-6">
                  <a
                    href="blog-detail.html"
                    className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                    >Smartest Applications for Business</a
                  >
                  <p className="text-slate-400 mt-3">
                    The phrasal sequence of the is now so that many campaign and
                    benefit
                  </p>

                  <div className="mt-4">
                    <a
                      href="blog-detail.html"
                      className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                      >Read More <i className="uil uil-arrow-right"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>

          </div>


          <div className="container mx-auto md:mt-24 mt-16">
            <div className="grid grid-cols-1 text-center">
              <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
                Contact us
              </h6>
              <h3
                className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold"
              >
                Have Question ? Get in touch!
              </h3>

              <p className="text-slate-400 max-w-xl mx-auto">
                Start working with Techwind that can provide everything you need to
                generate awareness, drive traffic, connect.
              </p>

              <div className="mt-6">
                <a
                  href="contact-one.html"
                  className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2 mt-2"
                  ><i className="uil uil-phone"></i> Contact Me</a
                >
              </div>
            </div>

          </div>

        </section>


    </>
  );
};

export default About;
