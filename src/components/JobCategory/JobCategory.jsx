import React from 'react';
const JobCategory = ({jobCategory}) => {
    // console.log(jobCategory)
    const { image, jobType, jobsAvailable } = jobCategory
    console.log(image);
    return (
        <div className="card w-96 lg:w-72 bg-base-200 shadow-xl mr-4">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl " />
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title">{jobType}</h2>
          <p>{jobsAvailable}</p>
        </div>
      </div>

    );
};

export default JobCategory;