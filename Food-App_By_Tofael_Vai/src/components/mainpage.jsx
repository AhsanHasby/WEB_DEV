import React from 'react'
import { useState } from 'react'
import MealCategories from './mealcategories.jsx'

function MainPage() {
    const [categories, setCategories] = useState([])

    //This function fetches the categories from the API and sets the state with the response
    const getCategories = () => {
        const response = fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setCategories(data.categories);
        })
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-amber-100">
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-gray-800 py-3">Welcome to the Food App</h1>
                <button className="flex items-center justify-center p-2 bg-green-300 text-2xl text-white rounded-md hover:bg-green-400 cursor-pointer" onClick={getCategories}>
                    Fetch Categories
                </button>
            </div>
            <div>
                <MealCategories detail={categories} />
            </div>
        </div>
    )
}
export default MainPage