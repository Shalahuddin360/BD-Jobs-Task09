import React, { useEffect, useState } from 'react';
import img from '../../assets/All Images/P3OLGJ1 copy 1.png'
import './Banner.css'
import JobCategory from '../JobCategory/JobCategory';
import Jobs from '../Jobs/Jobs';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';
import { getShoppingCart } from '../../utilities/fakedb';

const Banner = () => {


    const [jobsCategory,setJobsCategory]=useState([]);
    const[cart,setCart] =useState([])

    useEffect(()=>{
      fetch('job_category.json')
      .then(res=>res.json())
      .then(data=>setJobsCategory(data))

    } ,[])

    // console.log(jobsCategory)

    const jobs =useLoaderData();
    // console.log(jobs);
  /********************/ 
  useEffect(() =>{
    const storedCart = getShoppingCart()

    const savedCart = [];
    // step 1: get id of the addedProduct
    for(const id in storedCart){
        console.log(id);
        // step 2: get product from products state by using id
        const addedProduct = jobs.find(job => job.id === id)
        if(addedProduct){
            // step 3: add quantity
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            // step 4: add the added product to the saved cart
            savedCart.push(addedProduct);
        }
        // console.log('added Product', addedProduct)
    }
    // step 5: set the cart
    setCart(savedCart);
}, [jobs])
/********************/ 
    return (
        <div className='banner-container'>
            <div className='banner'>
                <div>
                    <h3 className='banner-subtitle'>Hi! I am </h3>
                    <h1 className='banner-title'>Shalahuddin</h1>
                    <p className='banner-description'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn-primary'>Get Start</button>
                </div>
                <img className='banner-img' src={img} alt="" />
            </div>
            <main>
                <section className='about-me-title'>
                <h3 className="about-me-header" >Job Categories</h3>
                    <p className="about-me-pera">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi exercitationem cupiditate rerum maiores tempora omnis. Explicabo placeat incidunt autem, provident quibusdam voluptas unde deserunt esse distinctio doloremque quae aut laboriosam, quis adipisci, ab officia mollitia. Qui consequatur soluta ut recusandae?</p>

               {/*  <!-- .skills-container>.skill*4>img+p.skill-title+p.skill-description>lorem15 --> */}

                <div className="skills-container">
                 
                 {jobsCategory.map(jobCategory=> <JobCategory
                  key={jobCategory.id}
                  jobCategory ={jobCategory}
                  
                  ></JobCategory>)}
                </div>
                </section>
             
                <section>
                 {/* <Jobs></Jobs> */}
                 <h3 className="about-me-header" >Job Categories</h3>
                    <p className="about-me-pera">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi exercitationem cupiditate rerum maiores tempora omnis. </p>
                    
                    <div className='jobs-container'>
                       {
                        jobs.map(job=><Job 
                            key={job.id}
                            job={job}
                            
                            ></Job>)
                       }
                    </div>
                </section>
            </main>

        </div>
    );
};

export default Banner;