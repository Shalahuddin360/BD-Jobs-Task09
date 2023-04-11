import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';

const Jobs = () => {
    const [details,setDetails] = useState({})
    const data = useLoaderData()
    // console.log(data)
    
    const dynamic =useParams();
     const dynamicId = dynamic.jobId;

    //  console.log(typeof(dynamicId))


    const jobs = useLoaderData();
    // console.log(jobs);
    useEffect(()=>{
          if(jobs){
            const detailsJob =jobs.find(job=>job.id=== dynamicId)
            setDetails(detailsJob);

          }
    },[])
    
    // console.log(details);
   
    // const jobDetails = data.find(job=>job.id ==dynamicId);
    // console.log(jobDetails)

    
    // const {id,logo ,companyName ,jobName,location,salary,remoteOrOnsite ,fullTimeOrPartTime ,jobDescription ,educationalRequirements ,experience} = details
    
 

    return (
        <div className=''>
            <h2>{details.educationalRequirements}</h2>
        </div>
    );
};

export default Jobs;