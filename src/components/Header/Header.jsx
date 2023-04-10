import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
  
            <h2>BD GOBS</h2>

             <div className='nav'>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/applied">Applied JOB</Link>
                <Link to="/blog">Blog</Link>
                <button>Star Applying</button>
             </div>
            

        </nav>
    );
};

export default Header;