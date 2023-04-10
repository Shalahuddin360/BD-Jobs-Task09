import React from 'react';
import "./Job.css"
const Job = ({job}) => {
    console.log(job)
    const {logo ,companyName ,jobName,location,salary,remoteOrOnsite ,fullTimeOrPartTime
    } = job
    return (

        <div >
          <div className='job-circular'>
          <img src={logo} alt="" />
            <h3>{jobName}</h3>
            <p><small>{companyName}</small></p>
          </div>
        </div>
    );
};

export default Job;