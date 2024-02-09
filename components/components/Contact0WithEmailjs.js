import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import contact data
import { contactDataEmailjs } from '../data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';

const Contact = () => {
  // destructure contact data
  const { title, info, formEmailjs } = contactDataEmailjs;


  const formRef = useRef();
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
      const { target } = e;
      const { name, value } = target;

      setForm({
        ...form,
        [name]: value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);

      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "JavaScript Mastery",
            from_email: form.email,
            to_email: "sujata@jsmastery.pro",
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");

            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);

            alert("Ahh, something went wrong. Please try again.");
          }
        );
    };

  return (
    <section className='section text-center sm:p-x-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-y-16'>
          {/* text */}
          <motion.div
            variants={fadeIn('right')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className='flex-1'
          >
            {/* title */}
            <h2 className='h2 max-w-[490px]'>{title}</h2>
            {/* info items */}
            <div className='flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0'>
              {info.map((item, index) => {
                // destructure item
                const { title, subtitle, address, phone, email, link } = item;
                return (
                  // item
                  <div key={index}>
                    {/* title */}
                    <div className='font-primary uppercase font-medium text-xl mb-3'>
                      {title}
                    </div>
                    {/* subtitle */}
                    <div className='mb-6 text-[#333] leading-[187%] tracking-[0.02em]'>
                      {subtitle}
                    </div>
                    {/* address, phone & email */}
                    <div className='flex flex-col gap-y-3 mb-8'>
                      {/* address */}
                      <div className='flex items-center gap-[10px]'>
                        <div>{address.icon}</div>
                        <div className='font-medium'>{address.name}</div>
                      </div>
                      {/* phone */}
                      <div className='flex items-center gap-[10px]'>
                        <div>{phone.icon}</div>
                        <div className='font-medium'>{phone.number}</div>
                      </div>
                      {/* email */}
                      <div className='flex items-center gap-[10px]'>
                        <div>{email.icon}</div>
                        <div className='font-medium'>{email.address}</div>
                      </div>
                    </div>
                    {/* link */}
                    <a
                      className='font-medium border-b border-dark pb-[5px]'
                      href='#'
                    >
                      {link}
                    </a>
                  </div>
                );
              })}
            </div>
          </motion.div>
          {/* form */}
          <motion.div
            variants={fadeIn('left')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className='flex-1 xl:pl-[40px] flex justify-center items-center '
          >
            <form
               ref={formRef}
               onSubmit={handleSubmit}
               className='flex flex-col gap-y-10 w-full'>
              <input
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
                type='text'
                placeholder={formEmailjs.name}
                value={form.name}
                onChange={handleChange}
              />
              <input
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
                type='text'
                placeholder={formEmailjs.email}
                value={form.email}
                onChange={handleChange}
              />
              <input
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 xl:mb-[30px]'
                type='text'
                placeholder={formEmailjs.message}
                value={form.message}
                onChange={handleChange}
              />
              <button className='self-start btn btn-sm btn-primary'>
                {formEmailjs.btnText}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
