import React from 'react'

function CategoryCard(props){
    
    return(
        <div className="card">
            <h3>{props.category}</h3>
        </div>
    )
}


export default CategoryCard