import React from 'react'
import CategoryCard from './CategoryCard'
import SearchBar from './SearchBar'
// import BackButton from './BackButton'

class CardContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipeCategories: [],
            currentCategory: "",
            currentRecipes: ""
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

    handleClick = (categoryName) => {
        this.setState({
            recipeCategories: [],
            currentCategory: categoryName
        })
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({currentRecipes: data.meals})
            })
        // onClick is going to have another fetch to the api with all of the recipes for that category
        // that data will get returned and be used to populate cards which show previews of the recipes
        // users can then click on those cards to see more detail
    }

    // goBack = () => {
    //     console.log("go back")
    //     this.setState(prevState => ({
    //         recipeCategories: prevState.categories,
    //         currentCategory: prevState.currentCategory
    //     }))
    // }


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

// {this.state.currentCategory !== null ? <h3>{this.state.currentCategory} recipes</h3> : null}
// {this.state.currentCategory !== null ? <BackButton goBack={() => this.goBack()}/> : null}
