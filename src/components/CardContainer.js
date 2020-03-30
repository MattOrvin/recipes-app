import React from 'react'
import RecipeCard from './RecipeCard'
import SearchBar from './SearchBar'

class CardContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipeCategories: []
        }
    }
   
    componentDidMount(){
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(resp => resp.json())
            .then(recipeData => {
                    this.setState({recipeCategories: recipeData})
                }
            )
    }
    
    // Goal: the user should be able to see a list of recipie categories


    render(){
        return(
            <div>
                <SearchBar />
                <RecipeCard name={"Bernie Sanders"}/>
            </div>
        )
    }
}


export default CardContainer