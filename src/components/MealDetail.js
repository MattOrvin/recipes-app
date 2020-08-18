import React, {useState, useEffect} from 'react';

function MealDetail( {match}){

    useEffect(()=> {
        fetchMealInfo()
    }, [])

    const [mealInfo, setMealInfo] = useState({})

    const fetchMealInfo = async () => {
        const fetchMealInfo = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.meal}`)
        const mealInfo = await fetchMealInfo.json()
        setMealInfo(mealInfo.meals[0])
        console.log(mealInfo.meals[0])
    }

    // Consider making ingredients into their own child component with mealInfo passed down as props

    return(
        <div>
            <h3>{mealInfo.strMeal}</h3>
            <img src={mealInfo.strMealThumb} height="500" width="500"/>
            <br />
            <br />
            <button onClick={() => console.log(mealInfo.strMeal, mealInfo.idMeal, mealInfo.strMealThumb)}>Save</button>
            <br />
            {/* The onClick above will be a fetch post of the meal name and picture to our rails backend */}
            <p>{mealInfo.strMeasure1} {mealInfo.strIngredient1}</p>
            <p>{mealInfo.strMeasure2} {mealInfo.strIngredient2}</p>
            <p>{mealInfo.strMeasure3} {mealInfo.strIngredient3}</p>
            <p>{mealInfo.strMeasure4} {mealInfo.strIngredient4}</p>
            <p>{mealInfo.strMeasure5} {mealInfo.strIngredient5}</p>
            <p>{mealInfo.strMeasure6} {mealInfo.strIngredient6}</p>
            <p>{mealInfo.strMeasure7} {mealInfo.strIngredient7}</p>
            <p>{mealInfo.strMeasure8} {mealInfo.strIngredient8}</p>
            <p>{mealInfo.strMeasure9} {mealInfo.strIngredient9}</p>
            <p>{mealInfo.strMeasure10} {mealInfo.strIngredient10}</p>
            <p>{mealInfo.strMeasure11} {mealInfo.strIngredient11}</p>
            <p>{mealInfo.strMeasure12} {mealInfo.strIngredient12}</p>
            <p>{mealInfo.strMeasure13} {mealInfo.strIngredient13}</p>
            <p>{mealInfo.strMeasure14} {mealInfo.strIngredient14}</p>
            <p>{mealInfo.strMeasure15} {mealInfo.strIngredient15}</p>
            <p>{mealInfo.strMeasure16} {mealInfo.strIngredient16}</p>
            <p>{mealInfo.strMeasure17} {mealInfo.strIngredient17}</p>
            <p>{mealInfo.strMeasure18} {mealInfo.strIngredient18}</p>
            <p>{mealInfo.strMeasure19} {mealInfo.strIngredient19}</p>
            <p>{mealInfo.strMeasure20} {mealInfo.strIngredient20}</p>
            <p>{mealInfo.strInstructions}</p>
        </div>
    )
}

export default MealDetail