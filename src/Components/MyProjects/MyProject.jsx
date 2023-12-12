import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";



const MyProject = () => {
    const [doctors,setDoctors] = useState([])

    useEffect(()=>{
        fetch('/projectdata.json')
        .then(res => res.json())
        .then(data =>{
            setDoctors(data)
        })
    },[])
    
    return (
        <div>
            <div className='text-center pt-36'>
                <p className="text-3xl font-bold">
                    Check My
                    <span className="relative inline-block mx-1 text-4xl font-extrabold text-blue-500 stroke-current">
                        Projects
                        <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none">
                            <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" ></path>
                        </svg>
                    </span>

                </p>
                <div className="grid grid-cols-2 gap-2 m-40">
                    {
                        doctors.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyProject;