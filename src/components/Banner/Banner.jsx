import React, { useEffect, useState } from 'react';
import img from '../../assets/All Images/P3OLGJ1 copy 1.png'
import JobCategory from '../JobCategory/JobCategory';
import Jobs from '../Jobs/Jobs';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';
import { getShoppingCart } from '../../utilities/fakedb';


const Banner = () => {


    const [jobsCategory, setJobsCategory] = useState([]);
    // const[cart,setCart] =useState([]);

    useEffect(() => {
        fetch('/job_category.json')
            .then(res => res.json())
            .then(data => setJobsCategory(data))

    }, [])

    // console.log(jobsCategory)

    const jobs = useLoaderData();
    // console.log(jobs);
    /********************/
    /*   useEffect(() =>{
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
    }, [jobs]) */
    /********************/
    return (
        <div className='w-full mx-auto items-center'>
            <div className='container flex flex-col sm:flex-col mx-auto lg:flex-row items-center my-3  md:px-28  mt-7'>
                <div className='w-screen mx-auto'>
                    <h3 className='text-5xl font-bold'>One Step </h3>
                    <h1 className='text-3xl font-bold my-3'>Dream Job</h1>
                    <p className='text-2xl font-light'>Explore thousands of job opportunities with all the information you need. </p>
                    <button className='btn btn-primary mt-5'>Get Start</button>
                </div>

                <div  className='sm:w-96 md:w-full mx-auto'>
                    <img src={img} alt="" />
                </div>


            </div>

            <main className='container flex flex-col items-center px-6 mx-auto'>
                <section className='mt-7'>
                    <h3 className="text-center mb-6" >Job Category List</h3>
                    <p className="text-center mb-6">Explore thousands of job opportunities with all the information you need. Its your future .</p>

                  

                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  lg:  items-center gap-4 mx-auto">

                        {

                            jobsCategory.map(jobCategory => <JobCategory
                                key={jobCategory.id}
                                jobCategory={jobCategory}

                            ></JobCategory>
                            )}
                    </div>
                </section>

                <section>
                    {/* <Jobs></Jobs> */}
                    <h3 className="text-center font-bold text-4xl my-14" >Featured Jobs</h3>
                    <p className="text-center my-8 text-2xl">Explore thousands of job opportunities with all the information you need. Its your future .</p>

                    <div className='grid sm:grid-cols-1 md:grid-cols-2 items-center gap-4 mx-auto'>
                        {
                            jobs.map(job => <Job
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