import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './components/mainpage.jsx'
import MealCategories from './components/mealcategories.jsx'
import MealInfo from './components/mealinfo.jsx'
import MealItems from './components/mealItems.jsx'
function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/category" element={<MealCategories />} />
        <Route path="/category/:strCategory" element={<MealItems />} />
        <Route path="/meal/:idMeal" element={<MealInfo />} />
      </Routes>
    </>
  )
}

export default App
