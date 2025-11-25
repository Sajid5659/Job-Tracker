import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

const CompanyDetails = () => {
    const { id } = useParams();
    const companyId = parseInt(id);
    const data = useLoaderData();
    const singleCompany = data.find(company => company.id == companyId);
    // console.log(singleCompany);
    
    const [modalJob, setModalJob] = useState(null);

    const handleApply =()=>{
        return window.open(singleCompany.website, "_blank")
    }
    
    const { name, logo, location, jobs } = singleCompany;
    return (
        <div className='mx-auto text-center p-20 '>
            <div className='flex justify-center items-center p-5 gap-5 border bg-amber-100 my-10'>
                <img className='rounded-full w-[100px]' src={logo} alt="" />
                <h1 className='text-3xl font-bold mb-5'>{name}</h1>
            </div>
            <p className='text-xl font-semibold mb-10'>Location : {location}</p>
            <div className=''>
                <h1 className='font-semibold text-2xl mb-4 text-blue-700'>Available Jobs :</h1>
                <div className='flex flex-col gap-6 bg-gray-200 p-5 '>
                    {
                        jobs.map(job => (
                            <div className='p-5 bg-gradient-to-b from-blue-50 via-white to-blue-100 rounded-2xl shadow-xl font-bold text-lg  flex flex-col items-center justify-center' key={job.id}>
                                <h1 className='my-2'>Job Title : {job.title}</h1>
                                <p className='my-2'>Time Range : {job.jobType}</p>
                                <p className='my-2'>Salary : {job.salary}</p>
                                <button onClick={() => setModalJob(job)} className='my-2 btn btn-primary'>Show Details</button>
                            </div>
                        ))
                    }
                </div>
            </div>
            {modalJob && (
                <div className="fixed inset-0   flex justify-center items-center z-100">
                    <div className="bg-gray-200 p-6 rounded-xl w-[400px] shadow-xl border">
                        <h2 className="text-2xl font-bold mb-5">{modalJob.title}</h2>
                        <p className="mb-5"> {modalJob.description}</p>
                        <p className="mb-5 bg-white p-3">Requirements :  {modalJob.requirements}</p>
                        <div className='bg-white py-3'>
                            <p className="mb-2">Type: {modalJob.jobType}</p>
                        <p className="mb-2">Salary: {modalJob.salary}</p>
                        <p className="mb-5">Location: {location}</p>
                        </div>
                        <button onClick={() => handleApply()} 
                            className="btn btn-neutral w-full mt-4"
                            
                        >
                            Apply
                        </button>

                        <button 
                            className="btn btn-error w-full mt-4"
                            onClick={() => setModalJob(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <Link to='/' className='btn btn-accent my-5 text-black border border-black'>Back to Home</Link>
        </div>
    );
};

export default CompanyDetails;