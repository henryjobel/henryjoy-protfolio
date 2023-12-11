import { AnimatePresence, motion } from 'framer-motion';
import bannerImage from '../../assets/WhatsApp_Image_2023-12-08_at_12.49.31_AM-removebg-preview (1).png'
import { useEffect, useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";






const Banner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <div>
            <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 md:grid-cols-2">
                        {/* text section */}
                        <div data-aos="fade-right">
                            <AnimatePresence >
                                {isVisible && (
                                    <motion.h2
                                        key="typing-text"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"
                                    >
                                        Hey 👋 I am{' '}
                                        <motion.span style={{ color: '#3498db' }}>
                                            Henry Joble
                                        </motion.span>
                                    </motion.h2>
                                )}
                            </AnimatePresence>

                            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                                amet sint. Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet.
                            </p>

                            <div>
                                <p className="mt-4 text-xl text-gray-600 md:mt-8">
                                    <span className="relative inline-block">
                                        <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                                        <span className="relative"> Have a question? </span>
                                    </span>
                                    <br className="block sm:hidden" />Ask me on
                                </p>
                                <div className='flex gap-2'>
                                    <a href="#"><FaLinkedin className='text-4xl text-blue-600'></FaLinkedin></a>
                                    <a href="#"><FaFacebook className='text-4xl text-sky-600'></FaFacebook></a>
                                    <a href="#"><CiInstagram className='text-4xl text-pink-800'></CiInstagram></a>
                                    <a href="#"><FaWhatsapp className='text-4xl text-green-600'></FaWhatsapp></a>
                                </div>
                            </div>
                        </div>
                        {/* image section */}
                        <div className="relative" data-aos="fade-left">
                            <motion.img
                                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                                alt=""
                            />
                            <motion.img
                                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                                src={bannerImage}
                                alt=""
                                animate={{
                                    y: [0, -10, 0],
                                    scale: [1, 1, 1], // Zoom effect
                                }}
                                transition={{
                                    duration: 3, // Increase duration for a slower effect
                                    ease: 'easeInOut',
                                    repeat: Infinity, // Infinite bouncing effect
                                    repeatType: 'reverse', // Reverse the animation on each repeat for bouncing effect
                                }}
                            />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;