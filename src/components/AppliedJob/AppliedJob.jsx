import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewJob from '../ReviewJob/ReviewJob';
import './AppliedJob.css'

const AppliedJob = () => {
    const jobs = useLoaderData();
    // console.log(jobs)
    return (
        <div className=''>
          
            <div className='review-container'>
                {
                   jobs.map(job=> <ReviewJob 
                    
                    key={job.id}
                    job={job}
                   
                   ></ReviewJob>)
                }
            </div>

        </div>
    );
};

export default AppliedJob;