import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const MealInfo = () => {
  
  const {idMeal} = useParams()
  const navigate = useNavigate()
  const [meal, setMeal] = useState(null)
  const [loading, setLoading] = useState(false)

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
  ? Array.from({ length: 20 }, (_, i) => i+1)
    .map((i) => ({
      ingredient : meal[`strIngredient${i}`], 
      measure: meal[`strMeasure${i}`],
    }))
    .filter((item) => item.ingredient && item.ingredient.trim())
    : []
  
  return (
    <main>
      <button onClick={() => navigate(-1)}>
        Back
      </button>
      {loading ? (
        <p>Loading meal details</p>
      ) : !meal ?(
        <p>Meal not found!</p>
      ) : (
        <div>
          <div>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
          <h2>{meal.strMeal}</h2>
          <p>{meal.strCategory} - {meal.strArea}</p>
          <h3>Ingredients</h3>
          <ul>
            {ingredients.map((item, idx) => (
              <li key = {idx}>
                {item.ingredient} - {item.measure}
              </li>
            ))}
          </ul>
          <h3>Instructions</h3>
          <p>{meal.strInstructions}</p>
        </div>
      )}
    </main>
  )
}

export default MealInfo