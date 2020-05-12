import React from 'react'

function MealCard(props){

    return(
        <div className="card" onClick={props.handleClick}>
            <h3>{props.name}</h3>
            <img src={props.pic} height="150" width="150"/>
        </div>
    )
}

export default MealCard