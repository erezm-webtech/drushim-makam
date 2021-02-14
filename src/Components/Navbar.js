import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <ul>
            <Link to={`/`} className="link">
             <li>Home</li>
             </Link>
            </ul>
        </div>
    )
}

export default Navbar