import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

function Header(){
    return(
        <Navbar bg="dark" variant="dark">
            <nav>
            <h1 style={{color: 'teal'}}>Meal Guru</h1>
            <Link to="/">
                <h3 style={{color: 'white', float: 'absolute'}}>Home</h3>
            </Link>
            <Link to="/categories">
                <h3 style={{color: 'white'}}>Categories</h3>
            </Link>
            <Link to="/about">
                <h3 style={{color: 'white'}}>About</h3>
            </Link>
            </nav>
        </Navbar>
    )
}

export default Header