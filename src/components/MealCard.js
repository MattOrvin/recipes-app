import React from 'react'

function MealCard(props){

    return(
        <div className="card" onClick={props.handleClick}>
            <h3>{props.category}</h3>
        </div>
    )
}

export default MealCard