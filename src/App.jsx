import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from './components/Footer';
import Header from './components/Header'
import Recipes from './components/Recipes'
import Form from './components/Form'
import NotFound from './components/NotFoundPage'



const App = () => {
  const APP_ID = "d113dfd7";
  const APP_KEY = "a419de6a4769cc5bde096a63176424ad";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() => {

    getRecipes();
  }, [query]);



  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    const data = await response.json();
    data.hits.pop()
    setRecipes(data.hits);
  };


  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    
  };


  return (
    <div className="">
      <Header />
      <div className="container">

        <Form search={search} updateSearch={updateSearch} getSearch={getSearch} />

        {recipes.length === 0 ? (<NotFound />) : (
          <div className="recipes">
            {recipes && recipes.map((recipe, index) => (
              <Recipes
                key={index}
                tittle={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                healthLabels={recipe.recipe.healthLabels}
                ingredients={recipe.recipe.ingredients}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );

};
export default App;
