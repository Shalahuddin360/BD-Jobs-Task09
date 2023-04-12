import React from 'react';
import './ReviewJob.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const ReviewJob = ({getJob}) => {
// console.log(job)
const{logo , companyName, remoteOrOnsite,fullTimeOrPartTime ,location , salary ,jobName} = getJob
    return (
        <div className='review-item bg-base-300 shadow-xl '>
           <img src={logo} alt="" />
           <div className='review-details'>
              <p className='job-title' >{jobName}</p>  
              <p><small>{companyName}</small></p>
              <div className='job-info'>
                <button>{remoteOrOnsite}</button> 
                <button>{fullTimeOrPartTime}</button>
              </div>
              <div className='job-details'>
                <p>  <FontAwesomeIcon className='location-icon' icon={faLocationDot}/><a href="#">{location}</a></p>
                <p>  <FontAwesomeIcon className='dollar-icon' icon={faDollarSign} /> {salary}</p>
              </div>
           </div>
           <Link to="/" className='btn-details flex justify-center items-center'>View Details</Link>
        </div>
    );
};

export default ReviewJob;