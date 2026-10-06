import React from 'react'
import { useState } from 'react'
import MealCategory from './MealCategory'

const MainPage = () => {
  const [status, setStatus] = useState(false)
  const [category, setCategory] = useState([])

  const getCategory = async () => {
    setStatus(true)
    
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    const data = await response.json()
    
    setCategory(data.categories)
    setStatus(false)
    console.log(data)
  }

  return (
    <div className="card">
      <div className="card-header">
        Welcome!
      </div>
      <div className="card-body">
        <h5 className="card-title">Food Corner</h5>
        <p className="card-text">Click to see food categories</p>
        <button className="btn btn-primary" onClick={getCategory}>Load categories</button>
      </div>
      {
        status ? (
          <p>Loading Categories...</p>
        ) : (
          <MealCategory category ={category}/>
        )
      }

    </div>
  )
}

export default MainPage