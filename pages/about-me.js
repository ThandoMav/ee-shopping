import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/Layout';
import iimage from '../assets/img/about.png';
import Image from 'next/image';
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
import EddyAbout from '../components/eddyaboutPortfolio';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

export default function About() {

  const router = useRouter();
  const { message } = router.query;

  return (
    <Layout title="About Me - Ok.Lesedi">


    <section className="section py-14" id="home">
       <div className="container mx-auto">
           <div className="lg:flex justify-center">
               <div className="lg:w-2/3 mx-2">
                   <div className="text-center">
                       <h1 className="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-10">
                           Elevate Your Brand with Style and Influence
                       </h1>
                       <p className="text-base text-gray-400"> I'm Lesedi, your guide to a world where style meets substance, where influence intertwines with innovation. With an Honors degree in Bachelor of Arts, a vibrant Instagram community of 70,000, and a passion for transforming narratives, I offer a holistic approach to elevate your brand.</p>
                       <h4 className="text-black mt-8"> Shaping a future where your <span className=" border-b-[3px] border-black">brand</span> stands out.</h4>
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


   <section className="section py-10">
       <div className="container mx-auto">
           <div className="flex">
               <div className="w-full flex justify-center">
                   <div className="text-4xl text-black border-b-[3px] border-black">What is our cliesnts say?</div>
               </div>
           </div>
           <div className="flex justify-center">
               <div className="lg:w-2/3 text-center">
                   <div className="block justify-center mt-14">
                       <h1 className="text-4xl"><i className="pe-7s-chat"></i></h1>
                       <h4 className="font-light italic text-base"> "The consultation went beyond expectations, providing actionable steps to enhance my online presence."</h4>
                      <Image
                             src={iimage.src}
                             width={50}
                             height={50}
                             className="h-16 w-16 mx-auto rounded-full mt-4 mb-2.5"
                             alt="responsive"
                             ></Image>
                       <p>Eddy Mav Digital - Web Developer</p>
                   </div>
               </div>
           </div>
       </div>
   </section>


    </Layout>
  );
}
