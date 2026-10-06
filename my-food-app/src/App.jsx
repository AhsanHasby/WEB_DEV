import React from 'react'
import { Routes, Route } from "react-router-dom"
import MainPage from "./components/MainPage"
import MealCategory from "./components/MealCategory"
import MealItem from "./components/MealItem"
import MealInfo from "./components/MealInfo"
import PageNotFound from "./components/PageNotFound"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<MainPage/>}></Route>
        <Route path="/category" element={<MealCategory/>}></Route>
        <Route path="/category/:strCategory" element={<MealItem/>}></Route>
        <Route path="/meals/:idMeal" element={<MealInfo/>}></Route>
        
      </Routes>
    </div>
  )
}

export default App