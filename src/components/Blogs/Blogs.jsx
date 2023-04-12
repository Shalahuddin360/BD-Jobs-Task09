import React from 'react';

const Blogs = () => {
    return (
  <div className='px-12 w-72 md:w-9/12 mx-auto'>
        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">

        <div className="collapse-title text-xl font-medium">
            <h2> Question: When we should use context API ? </h2>
        </div>

        <div className="collapse-content">
        <p>Answer: Context API is used to share state or data between components in a tree hierarchy without having to pass props down manually at every level. Context API can be used as User authentication whee we can pass though user information to components.</p>
        </div>
        
        </div>

        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">

        <div className="collapse-title text-xl font-medium">
            <h2> Question: What is custom hook? </h2>
        </div>

        <div className="collapse-content">
        <p>Answer: Custom hooks are reusable functions which can be used to add uniqueness to the react application. To use those "use" needed to be used as prefix of the name of the custom hooks.</p>
        </div>

        </div>
        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">

        <div className="collapse-title text-xl font-medium">
        <h2>Question: What is useRef?</h2>
        </div>

        <div className="collapse-content">
        <p>Answer: useRef can be showed as reference of the object. This property can be assigned any value and will persist between renders. It doesn't trigger the component by using.</p>
        </div>

        </div>
        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">

        <div className="collapse-title text-xl font-medium">
        <h2>Question: What is custom hook?</h2>
        </div>

        <div className="collapse-content">
        <p>Answer: Usememo can be reffered as a memory. It is used to memorize the result of a function so that it on;y re-render the results when one of its dependencies changes.</p>
        </div>

        </div>
   </div>
    );
};

export default Blogs;