import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function MealItems() {
    const { strCategory } = useParams()
    const navigate = useNavigate()
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(strCategory)}`
        )
            .then((response) => response.json())
            .then((data) => {
                setMeals(data.meals || [])
                setLoading(false)
            })
            .catch(() => {
                setMeals([])
                setLoading(false)
            })
    }, [strCategory])

    return (
        <main className="mx-auto max-w-6xl p-6">
            <button
                type="button"
                onClick={() => navigate('/')}
                className="mb-5 cursor-pointer rounded-md bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
            >
                Back to Categories
            </button>

            <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
                {strCategory} Dishes
            </h2>

            {loading ? (
                <p className="text-center text-gray-600">Loading food items...</p>
            ) : meals.length === 0 ? (
                <p className="text-center text-gray-600">No food items found.</p>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {meals.map((meal) => (
                        <article
                            key={meal.idMeal}
                            onClick={() => navigate(`/meal/${meal.idMeal}`)}
                            className="flex cursor-pointer flex-col items-center rounded-xl bg-white p-5 text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="flex h-60 w-full items-center justify-center overflow-hidden rounded-lg bg-gray-50 p-2">
                                <img
                                    src={meal.strMealThumb}
                                    alt={meal.strMeal}
                                    className="max-h-full max-w-full object-contain object-center"
                                />
                            </div>

                            <p className="mt-3 text-lg font-semibold text-gray-800">
                                {meal.strMeal}
                            </p>
                        </article>
                    ))}
                </div>
            )}
        </main>
    )
}

export default MealItems