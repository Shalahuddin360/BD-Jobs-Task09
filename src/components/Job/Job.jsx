import React from 'react';
import "./Job.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
const Job = ({job}) => {
    // console.log(job)
    const {id,logo ,companyName ,jobName,location,salary,remoteOrOnsite ,fullTimeOrPartTime
    } = job
    return (

        <div >
          <div className='job-circular'>
          <img src={logo} alt="" />
            <h3>{jobName}</h3>
            <p><small>{companyName}</small></p>
            <div className='job-info'>
                <button>{remoteOrOnsite}</button>
                <button>{fullTimeOrPartTime}</button>
            </div>
            <div className='job-details'>
                <p>
                <FontAwesomeIcon icon={faLocationDot} />
                  <a href="#">{location}</a>
                  </p>
                <p> salary:
                 <FontAwesomeIcon icon={faDollarSign} />
               {salary}</p>
            </div>
            <button className='btn-details'><Link to={`/job/${id}`} >View Details</Link></button>
          </div>
        </div>
    );
};

export default Job;