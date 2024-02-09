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


export default function About() {

  const router = useRouter();
  const { message } = router.query;

  return (
    <Layout title="About Me - Ok.Lesedi">

    <EddyAbout />
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

   <section className="section">
       <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-4 mt-4">
               <div className="text-center p-8">
                     <Image
                           src={lesedi1.src}
                           width={500}
                           height={500}
                           className="rounded mb-4"
                           alt="responsive"
                           ></Image>
               </div>
               <div className="text-center p-8">
               <Image
                     src={lesedi2.src}
                     width={500}
                     height={500}
                     className="rounded mb-4"
                     alt="responsive"
                     ></Image>
               </div>
               <div className="text-center p-8">
               <Image
                     src={lesedi3.src}
                     width={500}
                     height={500}
                     className="rounded mb-4"
                     alt="responsive"
                     ></Image>
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
