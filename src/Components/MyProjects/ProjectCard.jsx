import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const { projectName, image,id } = project;

  return (
    <div className="card-container" data-aos="zoom-in">
      <div className="relative overflow-hidden group">
        {/* Image */}
        <img
          src={image}
          alt="Project Image"
          className="object-cover transition-transform transform group-hover:scale-110"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 transition bg-black opacity-0 group-hover:opacity-50"></div>

        {/* Card Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="z-10 text-center text-white transition opacity-0 group-hover:opacity-100">
            <h2 className="mb-4 text-3xl font-bold">{projectName}</h2>
            
            {/* You can customize the button and icon styling here */}
            <Link to={`/prjectDetails/${id}`}><button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700">
              <FaArrowCircleRight className='text-3xl' />
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
