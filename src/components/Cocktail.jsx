import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({name, image, info, glass, id}) => {
    return (
    <div className="cocktail-card">
        <div className="card-img">
            <img src={image} alt={name} />
        </div>
        <div className='card-info'>
            <h3> {name} </h3>
            <h4> {glass} </h4>
            <p> {info} </p>
            <Link to={`/cocktail/${id}`}>
                <button className='btn btn-details' >
                    details
                </button>
            </Link>
        </div>
    </div>
    )
}

export default Cocktail
