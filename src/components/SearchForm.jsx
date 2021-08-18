import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
    const {setSearchValue} = useGlobalContext();
    const searchBox = React.useRef('')

    const searchCocktail = () => {
        setSearchValue(searchBox.current.value)
    }

    React.useEffect(() => {
        searchBox.current.focus()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='search-container' >
            <form className='search-form' onSubmit={handleSubmit} autoComplete="off" spellCheck="false">
                <div className="form-control">
                    <label htmlFor="name">Find your cocktail</label>
                </div>
                <input 
                    type="text" 
                    name="input"
                    id="name"
                    ref={searchBox}
                    className="input-box"
                    onChange={searchCocktail}
                 />
            </form>
        </div>
    )
}

export default SearchForm
