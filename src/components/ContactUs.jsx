import dividerImg from '../assets/divider.png';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_xn6noln', 'template_l1rjz9l', form.current, 'uYaOXrDbW27PhhQVP')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };

    return (
        <div id='contact' className="max-w-6xl mx-auto px-5 my-10 md:my-20">
            <section className="dark:bg-gray-100 dark:text-gray-900">
                <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:gap-20">
                    <div className="">
                        <h1 className="text-4xl font-bold">Let&rsquo;s link up</h1>
                        <img src={dividerImg} alt="" />
                        <p className="py-5">Currently exploring new opportunities, I welcome your messages. Whether you have questions or just want to say hello, rest assured, I&rsquo;ll prioritize responding promptly!</p>
                        <div className="space-y-4">
                           
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-[#d94ce0] ">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>+8801882105799</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-[#d94ce0] ">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>fatemachowdhury318@gmail.com</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-[#d94ce0] ">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Fatickchari, Chattogram, Bangladesh</span>
                            </p>
                        </div>
                    </div>
                    <form  ref={form} onSubmit={sendEmail} noValidate="" className="flex flex-col space-y-6 mt-10 md:mt-0 md:pl-6">
                        <label className="block">
                            <span className="mb-1">Full name</span>
                            <input name="from_name" type="text" placeholder="Full name" className="outline-none border p-3 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Email address</span>
                            <input name="from_email" type="email" placeholder="Email" className="outline-none border p-3 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Message</span>
                            <textarea name="message" rows="3" placeholder="Message" className="outline-none border p-3 block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" ></textarea>
                        </label>

                        <button type='submit' className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out shadow-xl group hover:ring-1 hover:ring-purple-500">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                            <span className="relative text-white">Submit</span>
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;