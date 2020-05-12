import React from 'react';
import './App.css';
import Header from './components/Header.js'
import CardContainer from './components/CardContainer.js'

function App() {
  return (
    <div>
      <Header />
      <CardContainer />
    </div>
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