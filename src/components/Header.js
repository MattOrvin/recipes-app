import React from 'react'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <div className="jumbotron">
            <h1>Meal Guru</h1>
            <Link to="/">
                <h3>Home</h3>
            </Link>
            <Link to="/categories">
                <h3>Categories</h3>
            </Link>
            <Link to="/about">
                <h3>About</h3>
            </Link>
        </div>
    )
}

export default Header