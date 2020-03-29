import React, { Component } from 'react'
import RecipeCard from './RecipeCard'
import SearchBar from './SearchBar'

class CardContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            RecipeCategories: ""
        }
    }
   
    componentDidMount(){
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(response => response.json())
            .then(data => this.setState({
                    RecipeCategories: data
                })
            )
        console.log(this.state.RecipeCategories)
    }

    render(){
        return(
            <div>
                <p>Card Container</p>
                <SearchBar />
                <RecipeCard />
            </div>
        )
    }
}



export default CardContainer