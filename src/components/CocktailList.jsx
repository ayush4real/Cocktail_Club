import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'
import Cocktail from './Cocktail'

const CocktailList = () => {
    const {cocktails, loading} = useGlobalContext();
    
    if(loading){
        return(
            <div className="loading-container">
                <Loading />
            </div>
        )
    }
    if(cocktails.length < 1){
        return(
        <h2 className='no-drinks-title' >
            no cocktails matched your search criteria
        </h2>
        )
    }
    return (
        <div className='cocktails-container' >
            <h2 className='cocktails-title' > cocktails </h2>
            <div className="cocktails-center">
                {
                    cocktails.map((item) => {
                        return(
                            <Cocktail key={item.id} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CocktailList
