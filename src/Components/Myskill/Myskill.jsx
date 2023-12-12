import React from 'react';
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { motion } from 'framer-motion';
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaWordpress } from "react-icons/fa";




const Myskill = () => {
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
        <div>
            <div className='text-center pt-36'>
                <p className="text-3xl font-bold">
                    My
                    <span className="relative inline-block mx-1 text-4xl font-extrabold text-blue-500 stroke-current">
                        Skill
                        <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none">
                            <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" ></path>
                        </svg>
                    </span>

                </p>
            </div>
            <div className='justify-center gap-5 pt-20 lg:flex lg:flex-row'>
                <motion.div className="shadow-xl w-50 card bg-base-100 hover:border-blue-500"
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.figure className="px-10 pt-10" variants={iconVariants} whileHover="hover">
                        <FaHtml5 className='text-orange-600 text-9xl'></FaHtml5>
                    </motion.figure>
                    <div className="items-center text-center card-body">
                        <h2 className="card-title">HTML</h2>
                    </div>
                </motion.div>
                <motion.div className="shadow-xl w-50 card bg-base-100 hover:border-blue-500"
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.figure className="px-10 pt-10" variants={iconVariants} whileHover="hover">
                        <FaCss3Alt className='text-blue-600 text-9xl'></FaCss3Alt>
                    </motion.figure>
                    <div className="items-center text-center card-body">
                        <h2 className="card-title">CSS</h2>
                    </div>
                </motion.div>
                <motion.div className="shadow-xl w-50 card bg-base-100 hover:border-blue-500"
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.figure className="px-10 pt-10" variants={iconVariants} whileHover="hover">
                        <SiJavascript className='text-yellow-300 text-9xl'></SiJavascript>
                    </motion.figure>
                    <div className="items-center text-center card-body">
                        <h2 className="card-title">JavaScript</h2>
                    </div>
                </motion.div>
                <motion.div className="shadow-xl w-50 card bg-base-100 hover:border-blue-500"
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.figure className="px-10 pt-10" variants={iconVariants} whileHover="hover">
                        <FaBootstrap className='text-purple-800 text-9xl'></FaBootstrap>
                    </motion.figure>
                    <div className="items-center text-center card-body">
                        <h2 className="card-title">Bootstrap</h2>
                    </div>
                </motion.div>
                <motion.div className="shadow-xl w-50 card bg-base-100 hover:border-blue-500"
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.figure className="px-10 pt-10" variants={iconVariants} whileHover="hover">
                        <SiTailwindcss className='text-sky-400 text-9xl'></SiTailwindcss>
                    </motion.figure>
                    <div className="items-center text-center card-body">
                        <h2 className="card-title">Tailwind</h2>
                    </div>
                </motion.div>
                <motion.div className="shadow-xl w-50 card bg-base-100 hover:border-blue-500"
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.figure className="px-10 pt-10" variants={iconVariants} whileHover="hover">
                        <FaReact className='text-blue-400 text-9xl'></FaReact>
                    </motion.figure>
                    <div className="items-center text-center card-body">
                        <h2 className="card-title">React</h2>
                    </div>
                </motion.div>
            </div>
            <div className='justify-center gap-5 pt-20 lg:flex lg:flex-row'>
                <motion.div className="shadow-xl w-50 card bg-base-100 hover:border-blue-500"
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.figure className="px-10 pt-10" variants={iconVariants} whileHover="hover">
                        <FaNode className='text-green-600 text-9xl'></FaNode>
                    </motion.figure>
                    <div className="items-center text-center card-body">
                        <h2 className="card-title">Node js</h2>
                    </div>
                </motion.div>
                <motion.div className="shadow-xl w-50 card bg-base-100 hover:border-blue-500"
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.figure className="px-10 pt-10" variants={iconVariants} whileHover="hover">
                        <SiExpress className='text-blue-600 text-9xl'></SiExpress>
                    </motion.figure>
                    <div className="items-center text-center card-body">
                        <h2 className="card-title">Express js</h2>
                    </div>
                </motion.div>
                <motion.div className="shadow-xl w-50 card bg-base-100 hover:border-blue-500"
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.figure className="px-10 pt-10" variants={iconVariants} whileHover="hover">
                        <SiMongodb className='text-green-700 text-9xl'></SiMongodb>
                    </motion.figure>
                    <div className="items-center text-center card-body">
                        <h2 className="card-title">MongoDb</h2>
                    </div>
                </motion.div>
                <motion.div className="shadow-xl w-50 card bg-base-100 hover:border-blue-500"
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.figure className="px-10 pt-10" variants={iconVariants} whileHover="hover">
                        <IoLogoFirebase className='text-yellow-400 text-9xl'></IoLogoFirebase>
                    </motion.figure>
                    <div className="items-center text-center card-body">
                        <h2 className="card-title">FireBase</h2>
                    </div>
                </motion.div>
                <motion.div className="shadow-xl w-50 card bg-base-100 hover:border-blue-500"
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.figure className="px-10 pt-10" variants={iconVariants} whileHover="hover">
                        <FaWordpress className='text-sky-600 text-9xl'></FaWordpress>
                    </motion.figure>
                    <div className="items-center text-center card-body">
                        <h2 className="card-title">Wordpress</h2>
                    </div>
                </motion.div>
               
            </div>
        </div>
    );
};

export default Myskill;