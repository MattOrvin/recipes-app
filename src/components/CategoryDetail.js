import React, {useState, useEffect} from 'react'

function CategoryDetail({ match }){
    
    useEffect(() => {
        fetchCategory()
        console.log(match)
    },[])

    const [category, setCategory] = useState({});

    const fetchCategory = async () => {
        const fetchCategory = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${match.params.id}`)
        const category = await fetchCategory.json()
        setCategory(category.category)
        console.log(category)
    }

    return(
        <div>
            <h1>Category Detail</h1>

        </div>
    )
}

export default CategoryDetail