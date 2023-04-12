import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { addToDb } from '../../utilities/fakedb';

const Jobs = () => {

    const [details, setDetails] = useState({})
    const data = useLoaderData()
    // console.log(data)

    const dynamic = useParams();
    const dynamicId = dynamic.jobId;
    const jobs = useLoaderData();
    // console.log(jobs);

    useEffect(() => {
        if (jobs) {
            const detailsJob = jobs.find(job => job.id === dynamicId)
            setDetails(detailsJob);

        }
    }, [])


    const { id, logo, companyName, jobName, location, salary, remoteOrOnsite, fullTimeOrPartTime, jobDescription, educationalRequirements, experience, jobDuties, email, phone } = details

    const handleAddToJob =()=>{
       addToDb(details.id)
    }

    return (
        <div className=''>

            <div class="grid grid-cols-1  md:grid-cols-2 gap-4 card lg:card-side bg-base-100 shadow-xl mx-12">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text"><span className='font-bold'>Job Description: </span> {jobDescription}</p>
                            <p className="card-text"><span className='font-bold'>Job Responsibility:</span> {jobDuties}</p>
                            <p className="card-text"><span className='font-bold'>Educational Requirements:</span>      {educationalRequirements}</p>
                            <p className="card-text"><span className='font-bold'>Experience:</span> {experience}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Job Details :</h5>
                            <p className="card-text"><span className='font-bold'>Salary:</span> <FontAwesomeIcon icon={faDollarSign} /> {salary} (Per Month) </p>
                            <p className="card-text"><span className='font-bold'>Job Title:</span> {jobName} (Per Month)</p>
                            <h5 className="card-title">Contact Information :</h5>
                            <p className="card-text"><span className='font-bold'>Phone:</span>{phone}</p>
                            <p className="card-text"><span className='font-bold'>Email:</span>{email} </p>
                            <p className="card-text"><span className='font-bold'> Address:</span> <FontAwesomeIcon icon={faLocationDot} /> <a href="#">{location}</a> </p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={()=>handleAddToJob(id)} >Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Jobs;