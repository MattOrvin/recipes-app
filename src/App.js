import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home';
// import CardContainer from './components/CardContainer.js';
import About from './components/About.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Categories from './components/Categories';
import CategoryMeals from './components/CategoryMeals'
import MealDetail from './components/MealDetail'
// import SearchBar from './components/SearchBar'
import Pic from './components/Pic.js'

function App() {

  const [savedRecipes, setSavedRecipes] = useState([{id: "52952", name: "Beef Lo Mein", category: "Beef"}, {id:"52831", name:"Chicken Kaarage", category: "Chicken"}])
  // console.log(savedRecipes)

  // useEffect(() => {
  //   setSavedRecipes(["Beef Lo Mein", "Tandoori chicken"])
  // })

  return (
    <Router >
      <div>
        <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" render={()=> <About savedRecipes={savedRecipes} setSavedRecipes={setSavedRecipes}/>} />
            <Route path="/categories" exact component={Categories} />
            {/* <Route path="/search-results" component={} /> */}
            <Route path="/categories/:id" exact component={CategoryMeals} />
            {/* <Route path="/categories/:id/:meal" component={MealDetail} /> */}
            <Route path="/categories/:id/:meal" render={(props)=> <MealDetail savedRecipes={savedRecipes} setSavedRecipes={setSavedRecipes} {...props} />} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;

// General Plan
// 1. implement feature where when a user clicks on a category, they can see a selection of recipe cards from that category
// 2. the meal cards are previews of the recipes which will provide more information and the full recipe when clicked on
// 3. implement the search feature so that a user can search for a recipe that matches their criteria
// 4. create a save button on the recipe cards which allow a user to save recipes and access later (this will require backend work)
// 5. create a delete/unsave button to remove recipes 
// 6. styling along the way -- bootstrap/reactstrap