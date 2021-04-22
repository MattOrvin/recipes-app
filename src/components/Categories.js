import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Categories(){
    
    useEffect(() => {
        fetchCategories();
    },[])

    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        const categories = await data.json()
        setCategories(categories.categories)
    }

    return(
        <div style={{textAlign: 'center'}}>
            <h1>Categories</h1>
            {categories.map(category => (
                <h3 key={category.idCategory}>
                    <Link to={`/categories/${category.strCategory}`}>{category.strCategory}</Link>
                </h3>
            ))}
        </div>
    )
}

export default Categories