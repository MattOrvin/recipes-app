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
            .then(categoryData => {
                    this.setState({recipeCategories: categoryData.categories})
                }
            )
    }

    handleClick = (event) => {
        event.preventDefault()
        console.log(event.target)
    }

    render(){
        return(
            <div>
                <SearchBar />
                {this.state.recipeCategories.map(category => (
                        <CategoryCard 
                            key={category.idCategory} 
                            category={category.strCategory} 
                            handleClick={this.handleClick}/>
                ))}
            </div>
            )
        }
}

export default CardContainer