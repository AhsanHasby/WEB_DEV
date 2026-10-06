import React, { useState } from 'react'
import MealCategory from './MealCategory'

const MainPage = () => {
    const [status, setStatus] = useState(false)
    const [category, setCategory] = useState([])

    const getCategories = async () => {
        setStatus(true)
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        const data = await response.json()

        setCategory(data.categories)
        console.log(data)
        setStatus(false)
    }

  return (
    <main>
        <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
            <h5 className="card-title">Ahsan Food Canteen</h5>
            <p className="card-text">Click to see our menu:</p>
            <button href="#" className="btn btn-primary" onClick={getCategories}>Category</button>
        </div>
        </div>

        {
            status ? (
                <p>wait a second...</p>
            ):(
                <MealCategory category = {category}/>
            )
        }

    </main>
  )
}

export default MainPage