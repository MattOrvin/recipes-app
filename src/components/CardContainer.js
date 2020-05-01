import React from 'react'
import CategoryCard from './CategoryCard'
import SearchBar from './SearchBar'

class CardContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipeCategories: [],
            currentCategory: ""
        }
    }
   
    componentDidMount(){
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(resp => resp.json())
            .then(categoryData => {
                    this.setState({recipeCategories: categoryData.categories})
                }
            )
    }

    handleClick = (key) => {
        this.setState({
            recipeCategories: [],
            currentCategory: key
        })
        
        // the state will be updated with recipeCategories being reset to only the currentCategory
        // the state will have a currentCategory key which will then be updated with whatever was clicked on
        // onClick is going to have another fetch to the api with all of the recipes for that category
        // that data will get returned and be used to populate cards which show previews of the recipes
        // users can then click on those cards to see more detail
    }

    render(){
        return(
            <div>
                <SearchBar />
                {this.state.recipeCategories.map(category => (
                        <CategoryCard 
                            key={category.idCategory} 
                            category={category.strCategory} 
                            handleClick={() => this.handleClick(category.strCategory)}/>
                ))}
                {this.state.currentCategory !== null ? <h3>{this.state.currentCategory} recipes</h3> : null}
            </div>
            )
        }
}

export default CardContainer

