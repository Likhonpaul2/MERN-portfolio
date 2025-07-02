import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
// import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    // Uncomment and configure if using EmailJS
    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     emailjs.sendForm(
    //         'YOUR_SERVICE_ID',
    //         'YOUR_TEMPLATE_ID',
    //         form.current,
    //         'YOUR_USER_ID'
    //     )
    //     .then((result) => {
    //         alert('Message sent!');
    //     }, (error) => {
    //         alert('Failed to send message, please try again.');
    //     });
    // };

    return (
        <>
            <div id='contact'>
                <h2
                    className='text-xl my-[40px] text-black dark:text-dark-primary-text relative inline-block font-bold'
                    data-aos="fade-up"
                >
                    Contact
                    <span className="absolute left-0 -bottom-0.5 h-[0.5px] bg-black dark:bg-white transition-all duration-300 w-[50%]"></span>
                </h2>

                <div className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
                    
                    {/* Left Section */}
                    <div data-aos="fade-right">
                        <h2 className="text-xl md:text-2xl font-semibold mb-6">
                            Have a project in mind or just want to chat about tech? I’d love to hear from you!
                        </h2>

                        <div className="space-y-4 text-sm">
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-xl" />
                                <span>lp.emon.paul@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaGithub className="text-xl text-yellow-500" />
                                <a href="https://github.com/Likhonpaul2" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    github.com/Likhonpaul2
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaLinkedin className="text-xl text-red-400" />
                                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    linkedin.com/in/emonpaul
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Section */}
                    <form
                        ref={form}
                        // onSubmit={sendEmail}
                        className="space-y-4"
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your name"
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your email"
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your message"
                            rows="5"
                            className="w-full border border-gray-300 px-4 py-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-black  text-white py-2 rounded hover:bg-gray-900 transition-all dark:border dark:border-dark-border-color"
                        >
                            send message
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
