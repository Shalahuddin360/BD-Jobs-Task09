import React from 'react';
import "./Job.css"
import { Link } from 'react-router-dom';
const Job = ({job}) => {
    // console.log(job)
    const {id,logo ,companyName ,jobName,location,salary,remoteOrOnsite ,fullTimeOrPartTime
    } = job
    return (

        <div >
          <div className='job-circular'>
          <img src={logo} alt="" />
            <h3>Name :{jobName}</h3>
            <p><small> company:{companyName}</small></p>
            <div className=''>
                <button>{remoteOrOnsite}</button>
                <button>{fullTimeOrPartTime}</button>
            </div>
            <div className=''>
                <p>{location}</p>
                <p>{salary}</p>
            </div>
            <p><Link to={`/job/${id}`} >View Details</Link></p>
          </div>
        </div>
    );
};

export default Job;