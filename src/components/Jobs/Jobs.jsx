import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';

const Jobs = () => {
    const data = useLoaderData()
    // console.log(data)
    
    const dynamic =useParams();
     const dynamicId = dynamic.jobId;
    //  console.log(dynamicId)

    // const jobs = useLoaderData();
    // console.log(jobs);
   
    const jobDetails = data.find(job=>job.id ==dynamicId);
    // console.log(jobDetails)

    
    // const {id,logo ,companyName ,jobName,location,salary,remoteOrOnsite ,fullTimeOrPartTime ,jobDescription ,educationalRequirements ,experience} = jobDetails
    
    for(const id in jobDetails){

      
        }

    return (
        <div className=''>

        </div>
    );
};

export default Jobs;