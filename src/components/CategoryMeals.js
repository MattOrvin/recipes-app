import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

function CategoryMeals({ match }){
    
    useEffect(() => {
        fetchMeals();
    },[])

    const [meals, setMeals] = useState([]);

    const fetchMeals = async () => {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${match.params.id}`)
        const meals = await data.json()
        setMeals(meals.meals)
        console.log(meals.meals)
    }

    return(
        <div style={{textAlign: 'center'}}>
            <h1>{match.params.id} Recipes</h1>
            {meals !== null ? meals.map(meal => (
                // instead of just an h3, consider making a meal preview child component w/picture; pass state to props here
                <h3 key={meal.idMeal}>
                    <Link to={`/categories/${match.params.id}/${meal.idMeal}`}>{meal.strMeal}</Link>
                </h3>
            )) :<h3>No recipes found</h3>}
        </div>
    )
}

export default CategoryMeals