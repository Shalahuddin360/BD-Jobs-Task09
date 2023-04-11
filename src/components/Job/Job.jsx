import React from 'react';
import "./Job.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
const Job = ({ job }) => {
  // console.log(job)
  const { id, logo, companyName, jobName, location, salary, remoteOrOnsite, fullTimeOrPartTime
  } = job
  return (

    <div >
      {/* 
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
          
          */} 

      <div className="card w-100 mr-2 mb-4 glass bg-base-100 shadow-xl">
        <figure><img className='w-48' src={logo} alt="car!" /></figure>
        <div className="card-body">
          <h2 className="card-title text-center">{jobName}</h2>
          <p><small className='text-center'>{companyName}</small></p>
          <div className='flex justify-around items-center'>
            <button className='btn btn-outline'>{remoteOrOnsite}</button>
            <button className='btn btn-outline'>{fullTimeOrPartTime}</button>
          </div>
          <div className='flex justify-around items-center'>
            <p>
              <FontAwesomeIcon icon={faLocationDot} />
              <a href="#">{location}</a>
            </p>
            <p> salary:
              <FontAwesomeIcon icon={faDollarSign} />
              {salary}</p>
          </div>
          <div className="card-actions justify-center">
            <button className='btn btn-primary'><Link to={`/job/${id}`} >View Details</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;