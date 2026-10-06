import React from 'react'
import MealDB from './components/MainPage'
import { Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import MealCategories from './components/MealCategories'
import MealItems from './components/MealItems'
import MealInfo from './components/MealInfo'
import PageNotFound from './components/PageNotFound'

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path = '/' element = {<MainPage />}/>
        <Route path = '/category' element = {<MealCategories />} />
        <Route path = '/category/:strCategory' element = {<MealItems />} />
        <Route path = '/meal/:idMeal' element = {<MealInfo />}/>
        <Route path = '*' element = {<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App