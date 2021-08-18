import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

function Navbar(){
    const {setSearchValue} = useGlobalContext();
    return(
        <nav className='navbar' >
            <div className="nav-center">
                <Link to='/' onClick={() => {setSearchValue("a")}}>
                    <span className="nav-span1">The</span><span className="nav-span2">Cocktail.</span><span className="nav-span3">Club</span>
                </Link>
                <ul className='nav-links' >
                    <li>
                        <Link to="/" onClick={() => {setSearchValue("a")}} > Home </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => {setSearchValue("a")}} > About </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;