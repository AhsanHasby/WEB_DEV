import React from 'react'
import {Routes, Route} from 'react-router-dom'
import MainPage from './components/MainPage'
import PageNotFound from './components/PageNotFound'
import MealCategory from './components/MealCategory'
import MealItem from './components/MealItem'
import MealInfo from './components/MealInfo'
import MealSearch from './components/MealSearch'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<MainPage/>}></Route>
        <Route path = "/category" element = {<MealCategory/>}></Route>
        <Route path = "/category/:strCategory" element = {<MealItem/>}></Route>
        <Route path = "/item/:idmeal" element = {<MealInfo/>}></Route>
        <Route path= "/letter" element = {<MealSearch />}></Route>
        <Route path = "/*" element = {<PageNotFound/>}></Route>
      </Routes>
    </div>
  )
}

export default App