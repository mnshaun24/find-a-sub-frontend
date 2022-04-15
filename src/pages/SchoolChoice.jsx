import React from 'react';
import { Link } from "react-router-dom";



function SchoolChoice() {
    return (
        <div className='schoolSub'>
            <h1>Go here if you are a school</h1>
            
           <h2> <Link to="/schoolhome">I am representing a school</Link> </h2>



        </div>
    );
}


export default SchoolChoice;