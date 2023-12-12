import React from 'react';
import { FaWordpress } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { motion } from 'framer-motion';

const MyService = () => {
    const iconVariants = {
        hover: {
            y: [-5, 5],
            transition: {
                yoyo: Infinity,
                duration: 0.5,
            },
        },
    };

    return (
        <div className='container mx-auto'>
            <div className='text-center pt-36'>
                <p className="text-3xl font-bold">
                    My
                    <span className="relative inline-block mx-1 text-4xl font-extrabold text-blue-500 stroke-current">
                        Service
                        <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none">
                            <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" ></path>
                        </svg>
                    </span>

                </p>
            </div>
            <div className='flex flex-row justify-center gap-5 pt-20'>
                <motion.div className="shadow-xl w-80 card bg-base-100 hover:border-blue-500"
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.figure className="px-10 pt-10" variants={iconVariants} whileHover="hover">
                        <FaWordpress className='text-blue-600 text-9xl'></FaWordpress>
                    </motion.figure>
                    <div className="items-center text-center card-body">
                        <h2 className="card-title">Wordpress Development</h2>
                        <p>Theme Development,Plugin Development,Custom Post Types and Taxonomies,Database Management</p>
                    </div>
                </motion.div>
                <motion.div className="shadow-xl w-80 card bg-base-100 hover:border-blue-500"
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.figure className="px-10 pt-10" variants={iconVariants} whileHover="hover">
                        <FaLaptopCode className='text-orange-600 text-9xl'></FaLaptopCode>
                    </motion.figure>
                    <div className="items-center card-body">
                        <h2 className="card-title">Front End Development</h2>
                        <p className='text-base font-semibold'>Creating Front End using HTML,CSS,JavaScript, React,Tailwind,Bootstrap any other CSS Framewroks</p>
                    </div>
                </motion.div>
                <motion.div className="shadow-xl w-80 card bg-base-100 hover:border-blue-500"
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.figure className="px-10 pt-10" variants={iconVariants} whileHover="hover">
                        <FaCode className='text-green-600 text-9xl'></FaCode>
                    </motion.figure>
                    <div className="items-center text-center card-body">
                        <h2 className=" card-title">Back End Development</h2>
                        <p className="font-semibold" >Create Back End server using Node JS, Express JS, Rest API, MongoDB,  Also I'm able to connectivity with database such as MongoDB</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default MyService;
