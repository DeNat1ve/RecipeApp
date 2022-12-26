import React, { useEffect, useState } from "react";
import Recipe from "../components/recipe/Recipe";
import RecipeView from "../components/recipeView/RecipeView";
import axios from "axios"


const RecipeList = () => {

    const sendRequest = async () => {
        const response = await axios.get("https://localhost:7211/api/Recipe/GetAllRecipes")
        const newRecipes = response.data
        setRecipes([...newRecipes])
    }

    useEffect(() => { sendRequest() }, [])

    const [recipes, setRecipes] = useState([])

    return (
        <div className="App">
            <RecipeView >
                {recipes.map((recipe, i) =>
                    <Recipe key={i} recipe={recipe} />
                )}
            </RecipeView>
        </div>
    );
}
export default RecipeList;