import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

function Error(){
    const {setSearchValue} = useGlobalContext();
    return(
        <div className='error-container' >
            <h3> You're already drunk and entered the WRONG URL!!! </h3>
            <Link to="/" onClick={() => {setSearchValue("a")}}>
                <button className='btn btn-error' > back home </button>
            </Link>
        </div>
    )
}

export default Error;