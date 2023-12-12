import React from 'react';

const Myeducation = () => {
    return (
        <div data-aos="zoom-out-up">
            <div className='text-center pt-36' data-aos="zoom-out-up">
                <p className="text-3xl font-bold">
                    My
                    <span className="relative inline-block mx-1 text-4xl font-extrabold text-blue-500 stroke-current">
                        Education
                        <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none">
                            <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" ></path>
                        </svg>
                    </span>

                </p>
            </div>
            <div className="container px-4 py-8 mx-auto">
    <div className="relative overflow-hidden wrap">
        <div className="absolute h-full border border-gray-700 border-2-2 border-opacity-20 left-1/2"></div>
        <div className="flex items-center justify-between w-full mb-8 right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 w-12 h-12 bg-gray-800 rounded-full shadow-xl">
                <h1 className="mx-auto text-lg font-semibold text-white">1</h1>
            </div>
            <div className="order-1 w-5/12 px-6 py-4 bg-gray-400 rounded-lg shadow-xl">
                <h3 className="mb-3 text-xl font-bold text-gray-800">Bachelor of psychology</h3>
                <p className="font-semibold leading-tight text-gray-700">Insitute: Daffodil University</p>
            </div>
        </div>
        <div className="flex items-center justify-between w-full mb-8 right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 w-12 h-12 bg-gray-800 rounded-full shadow-xl">
                <h1 className="mx-auto text-lg font-semibold text-white">2</h1>
            </div>
            <div className="order-1 w-5/12 px-6 py-4 bg-gray-400 rounded-lg shadow-xl">
                <h3 className="mb-3 text-xl font-bold text-gray-800">Complet Computer Diploma</h3>
                <p className="font-semibold leading-tight text-gray-700">Insitute: Desh Politechnic Institute</p>
            </div>
        </div>
        <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 w-12 h-12 bg-gray-800 rounded-full shadow-xl">
                <h1 className="mx-auto text-lg font-semibold text-white">3</h1>
            </div>
            <div className="order-1 w-5/12 px-6 py-4 bg-gray-400 rounded-lg shadow-xl">
                <h3 className="mb-3 text-xl font-bold text-gray-800">Higher secondary school certificate</h3>
                <p className="font-semibold leading-tight text-gray-700">Institue: Notre Dame Collage</p>
                <p className="leading-tight text-gray-700">Batch:16-17</p>
                <p className="leading-tight text-gray-700">Subject: Humanities</p>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default Myeducation;