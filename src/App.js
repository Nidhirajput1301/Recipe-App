import React,{useEffect, useState} from 'react';
import Recipe from "./Recipe";
import './App.css';

const App = () => {
  const APP_ID = "230a1a44";
  const APP_KEY = "5615019369e93cf99075fabb585e9214	";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

 const getRecipes = async () => {
   const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
   const data = await response.json();
  console.log(data.hits);
  setRecipes(data.hits);

 }

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button 
        className="search-button" 
        type="submit" >
            Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe  
          key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image} />
      ))};
    </div>
  )
}

export default App;
