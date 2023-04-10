import React from 'react';
import './JobCategory.css'
const JobCategory = ({jobCategory}) => {
    // console.log(jobCategory)
    const {image ,jobType,jobsAvailable} = jobCategory
    console.log(image);
    return (
        <div>
                 <div className="skill">
                        <img className='img' src={image} alt="" />
                        <p className="skill-title">{jobType}</p>
                        <p className="skill-description">{jobsAvailable}</p>
                 </div>
        </div>
    );
};

export default JobCategory;