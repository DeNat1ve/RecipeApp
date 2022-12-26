import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header/Header";
import RecipeAddForm from "./pages/RecipeAddForm";
import RecipeList from "./pages/RecipeList";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/addrecipe" element={<RecipeAddForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
