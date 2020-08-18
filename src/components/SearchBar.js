import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function SearchBar(){
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState("/")

    useEffect(() => {
        fetchSearchResults()
    }, [query])

    const mealSearch = (event) => {
        setSearch(event.target.value)
    }

    const getSearch = (event) => {
        event.preventDefault()
        setQuery(search)
        setSearch("")
    }

    const fetchSearchResults = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        const data = await response.json()
        setRecipes(data.meals)
        console.log(data.meals)
    }

    return(
        <div>
            <form className="search-form" onSubmit={getSearch}>
                <input 
                    className="search-bar"
                    type="text"
                    placeholder="Find a new recipe"
                    value={search}
                    onChange={mealSearch}
                />
                <button className="searchButton" type="submit">Search</button>
                <br />
                <br />
            </form>
            {recipes !== null ? recipes.map(recipe => (
                <h3 key={recipe.idMeal}>
                    <Link to={`/categories/${recipe.strCategory}/${recipe.idMeal}`}>{recipe.strMeal}</Link>
                </h3>
            )): null}
        </div>
    )
}


export default SearchBar