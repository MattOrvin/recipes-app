import React from 'react'

function SearchBar(){
    return(
        <div>
            <form>
                <label>
                    Find a new recipe
                </label>
                <br />
                <input type="text"/>
                <br />
                <input type="submit" value="Search" />
                <br />
                <br />
            </form>
        </div>
    )
}


export default SearchBar