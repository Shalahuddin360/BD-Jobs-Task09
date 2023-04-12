import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewJob from '../ReviewJob/ReviewJob';
import './AppliedJob.css'
import { getShoppingCart } from '../../utilities/fakedb';
 
const AppliedJob = () => {
    const jobs = useLoaderData();
    // console.log(jobs)
const [getJobs , setGetJobs] = useState([])
  useEffect(()=>{
    console.log('jobs', jobs)
     const storeCart = getShoppingCart()
     const savedJob = [];
     // step 1 : get id
     for(const id in storeCart){
            //step 2 : get the job from jobs  by using id
            const addedJob = jobs.find(jb=>jb.id===id)
        
            if(addedJob){
            //step 3 : get or add quantity of the job
            const quantity = storeCart[id];
            addedJob.quantity = quantity
            // step 4 : add the addedJob to the saveJob
            savedJob.push(addedJob)

            }
      
         }
        // step :5  set the job
         setGetJobs(savedJob);

     } ,[jobs])
    return (
        <div className=''>
          
            <div className='review-container'>
             {/* jobs.map(job)  */}

                {
                   getJobs.map(getJob=> <ReviewJob 
                    
                    key={getJob.id}
                    getJob={getJob}
                   
                   ></ReviewJob>)
                }
            </div>

        </div>
    );
};

export default AppliedJob;