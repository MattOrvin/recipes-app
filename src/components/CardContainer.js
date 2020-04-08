import React from 'react'
import CategoryCard from './CategoryCard'
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
                {this.state.recipeCategories.forEach(category => (
                    <div className="card" key={this.state.recipeCategories.idCategory}>{category.strCategory}</div>
                ))}
            </div>
            )
        }
}

// {this.state.recipeCategories.map(category => (
//     <CategoryCard key={this.state.recipeCategories.idCategory}><h3>{category.strCategory}</h3></CategoryCard>
// )}

// key={this.state.recipeCategories.idCategory}
// category={this.state.recipeCategories.categories}/


export default CardContainer