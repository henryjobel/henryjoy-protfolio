import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const bandsData = useLoaderData();
    const { id } = useParams();

    const selectedBand = bandsData.find(band => band.id === parseInt(id));

    if (!selectedBand) {
        return <div>Band not found</div>;
    }



    return (
        <div>
            <div className="min-h-screen hero">
                <div className="flex-col gap-10 m-20 hero-content lg:flex-row">
                    <img src={selectedBand.image}className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="pb-10 text-3xl font-bold">{selectedBand.projectName}</h1>
                        <p className='text-3xl'>Frature:</p>
                        <div className='text-lg font-semibold'>
                            <li>{selectedBand.features1}</li>
                            <li>{selectedBand.features2}</li>
                            <li>{selectedBand.features3}</li>
                            <li>{selectedBand.features4}</li>
                            <li>{selectedBand.features5}</li>
                        </div>
                        <h1 className='pt-6 text-3xl font-bold' >Using Technologis</h1>
                        <div>
                            <h1 className='pt-6 text-3xl'>Front-End</h1>
                            <p className="badge badge-primary badge-outline">{selectedBand.react}</p>
                            <p className="badge badge-primary badge-outline">{selectedBand.tailwind}</p>
                        </div>
                        <div>
                            <h1 className='text-3xl '>Back-End</h1>
                            <p className="badge badge-primary badge-outline">{selectedBand.node}</p>
                            <p className="badge badge-primary badge-outline">{selectedBand.expressJs}</p>
                            <p className="badge badge-primary badge-outline">{selectedBand.mongodb}</p>
                            <p className="badge badge-primary badge-outline">{selectedBand.restApi}</p>
                        </div>
                        <button className="btn btn-primary"><a href={selectedBand.websiteName}>Live Link</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;