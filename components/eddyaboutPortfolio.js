import React from 'react';
import iimage from '../assets/img/about.png';
import lesedi1 from '../assets/lesedi.jpg';
// import data
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
//import Faq from '../components/Faq';

const About = () => {
  // destructure about data
  return (
    <>

    <section class="py-20 border-b">
            <div class="mx-10">
                <div class="lg:flex justify-center">
                    <div class="text-center">
                        <div class="text-center">
                            <h1 class="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-teal-400 to-green-600">
                            About Me </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    <section className="relative md:py-24 py-16">
   <div className="container mx-auto">
     <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
       <div className="lg:col-span-5 md:col-span-6">
         <div className="grid grid-cols-12 gap-6 items-center">
           <div className="col-span-6">
             <div className="grid grid-cols-1 gap-6">
               <img
                 src={lesedi1.src}
                 className="shadow rounded-md"
                 alt=""
               />
               <img
                src={lesedi1.src}
                className="shadow rounded-md"
                 alt=""
               />
             </div>
           </div>

           <div className="col-span-6">
             <div className="grid grid-cols-1 gap-6">
               <img
                 src={lesedi1.src}
                 className="shadow rounded-md"
                 alt=""
               />
             </div>
           </div>
         </div>
       </div>

       <div className="lg:col-span-7 md:col-span-6">
         <div className="lg:ml-5">
           <div className="flex mb-4">
             <span className="text-indigo-600 text-2xl font-bold mb-0"
               ><span
                 className="counter-value text-6xl font-bold"
                 data-target="15"
                 >1</span
               >+</span
             >
             <span className="self-end font-medium ml-2"
               >Years <br />
               Experience</span
             >
           </div>

           <h3
             className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold"
           >
             Who we are ?
           </h3>

           <p className="text-slate-400 max-w-xl">
             Start working with Tailwind CSS that can provide everything you
             need to generate awareness, drive traffic, connect. Dummy text
             is text that is used in the publishing industry or by web
             designers to occupy the space which will later be filled with
             'real' content.
           </p>

           <div className="mt-6 flex justify-start">
             <a
               href="contact-one.html"
               className="btn btn-sm btn-primary bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2 mt-2"
               >
               <BsStarFill/>
               <i className="uil uil-envelope"></i> Contact us</a
             >
           </div>
         </div>
       </div>
     </div>

   </div>

 </section>

 <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
   <div className="container mx-auto">
     <div className="grid grid-cols-1 pb-8 text-center">
       <h3
         className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold"
       >
         MY Skillsets
       </h3>

       <p className="text-slate-400 max-w-xl mx-auto">
         Start working with Tailwind CSS that can provide everything you need
         to generate awareness, drive traffic, connect.
       </p>
     </div>


     <div
       className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] mt-8"
     >
       <div
         className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900"
       >
         <div
           className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3"
         >
         <BsStarFill/>
           <i data-feather="monitor" className="h-5 w-5 rotate-45"></i>
         </div>
         <div className="flex-1">
           <h4 className="mb-0 text-lg font-medium">Fully Responsive</h4>
         </div>
       </div>

       <div
         className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900"
       >
         <div
           className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3"
         >
         <BsStarFill/>
           <i data-feather="heart" className="h-5 w-5 rotate-45"></i>
         </div>
         <div className="flex-1">
           <h4 className="mb-0 text-lg font-medium">Browser Compatibility</h4>
         </div>
       </div>

       <div
         className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900"
       >
         <div
           className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3"
         >
         <BsStarFill/>
           <i data-feather="eye" className="h-5 w-5 rotate-45"></i>
         </div>
         <div className="flex-1">
           <h4 className="mb-0 text-lg font-medium">Retina Ready</h4>
         </div>
       </div>

       <div
         className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900"
       >
         <div
           className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3"
         >
         <BsStarFill/>
           <i data-feather="layout" className="h-5 w-5 rotate-45"></i>
         </div>
         <div className="flex-1">
           <h4 className="mb-0 text-lg font-medium">Based On Tailwindcss 3</h4>
         </div>
       </div>

       <div
         className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900"
       >
         <div
           className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3"
         >
         <BsStarFill/>
           <i data-feather="feather" className="h-5 w-5 rotate-45"></i>
         </div>
         <div className="flex-1">
           <h4 className="mb-0 text-lg font-medium">Feather Icons</h4>
         </div>
       </div>

       <div
         className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900"
       >
         <div
           className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3"
         >
         <BsStarFill/>
           <i data-feather="code" className="h-5 w-5 rotate-45"></i>
         </div>
         <div className="flex-1">
           <h4 className="mb-0 text-lg font-medium">Built With SASS</h4>
         </div>
       </div>

       <div
         className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900"
       >
         <div
           className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3"
         >
         <BsStarFill/>
           <i data-feather="user-check" className="h-5 w-5 rotate-45"></i>
         </div>
         <div className="flex-1">
           <h4 className="mb-0 text-lg font-medium">W3c Valid Code</h4>
         </div>
       </div>

       <div
         className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900"
       >
         <div
           className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3"
         >
         <BsStarFill/>
           <i data-feather="globe" className="h-5 w-5 rotate-45"></i>
         </div>
         <div className="flex-1">
           <h4 className="mb-0 text-lg font-medium">Browsers Compatible</h4>
         </div>
       </div>

       <div
         className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900"
       >
         <div
           className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3"
         >
         <BsStarFill/>
           <i data-feather="settings" className="h-5 w-5 rotate-45"></i>
         </div>
         <div className="flex-1">
           <h4 className="mb-0 text-lg font-medium">Easy to customize</h4>
         </div>
       </div>
     </div>


     <div className="grid grid-cols-1 justify-center">
       <div className="mt-6 text-center flex justify-center">
         <a
           href="page-services.html"
           className="btn btn-sm btn-primary bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2 mt-2"
           >See More <BsStarFill/><i className="uil uil-arrow-right"></i
         ></a>
       </div>
     </div>
   </div>

 </section>
    </>
  );
};

export default About;
