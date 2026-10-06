import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function MealInfo() {
    const { idMeal } = useParams()
    const navigate = useNavigate()
    const [meal, setMeal] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(idMeal)}`)
            .then((response) => response.json())
            .then((data) => {
                setMeal(data.meals ? data.meals[0] : null)
                setLoading(false)
            })
            .catch(() => {
                setMeal(null)
                setLoading(false)
            })
    }, [idMeal])

    const ingredients = meal
        ? Array.from({ length: 20 }, (_, i) => i + 1)
              .map((i) => ({
                  ingredient: meal[`strIngredient${i}`],
                  measure: meal[`strMeasure${i}`],
              }))
              .filter((item) => item.ingredient && item.ingredient.trim())
        : []

    return (
        <main className="mx-auto max-w-4xl p-6">
            <button
                type="button"
                onClick={() => navigate(-1)}
                className="mb-5 cursor-pointer rounded-md bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
            >
                Back
            </button>

            {loading ? (
                <p className="text-center text-gray-600">Loading meal details...</p>
            ) : !meal ? (
                <p className="text-center text-gray-600">Meal not found.</p>
            ) : (
                <div className="rounded-xl bg-white p-6 shadow-md">
                    <div className="flex h-72 w-full items-center justify-center overflow-hidden rounded-lg bg-gray-50 p-3">
                        <img
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            className="max-h-full max-w-full object-contain object-center"
                        />
                    </div>

                    <h2 className="mt-4 text-center text-3xl font-bold text-gray-800">
                        {meal.strMeal}
                    </h2>
                    <p className="mt-1 text-center text-gray-600">
                        {meal.strCategory} · {meal.strArea}
                    </p>

                    <h3 className="mt-6 text-xl font-semibold text-gray-800">Ingredients</h3>
                    <ul className="mt-2 list-inside list-disc text-gray-700">
                        {ingredients.map((item, idx) => (
                            <li key={idx}>
                                {item.ingredient} - {item.measure}
                            </li>
                        ))}
                    </ul>

                    <h3 className="mt-6 text-xl font-semibold text-gray-800">Instructions</h3>
                    <p className="mt-2 whitespace-pre-line text-gray-700">{meal.strInstructions}</p>
                </div>
            )}
        </main>
    )
}

export default MealInfo
