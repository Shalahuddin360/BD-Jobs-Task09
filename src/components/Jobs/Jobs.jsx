import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Jobs = () => {

    const dynamic =useParams();
    console.log(dynamic.jobId);

    // const jobs = useLoaderData();
    // console.log(jobs);

    useEffect(()=>{
     fetch(`jobs.json/${dynamic.jobId}`)
     .then(res=>res.json())
     .then(data=>console.log(data))
    },[])

    return (
        <div>
           <h2>This is Job Details component</h2> 
        </div>
    );
};

export default Jobs;