import React from 'react'
import { useState } from 'react'
import MealCategories from './MealCategories'

const MainPage = () => {

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)

    const getCategories = () => {
        setLoading(true)
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then((response) => response.json())
        .then((data) => {
            setLoading(false)
            setCategories(data.categories)
        })
    }

    return (
    <div>
        <div className="">
            <h1>Welcome, What you wanna eat ?</h1>
            <button onClick={getCategories}>Fetch Categories</button>
        </div>
        <div>
            {loading ? (
                <p>Loading categories...</p>
            ) : (
                <MealCategories detail = {categories} />
            )}
        </div>
    </div>
  )
}

export default MainPage