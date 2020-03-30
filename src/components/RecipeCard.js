import React from 'react'

function RecipeCard(props){
    return(
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">bernie@bernie2020.com</h6>
              <p className="card-text">Not me, us</p>
            </div>
        </div>
    )
}

export default RecipeCard