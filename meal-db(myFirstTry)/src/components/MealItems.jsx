import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const MealItems = () => {

    const {strCategory} = useParams()
    const navigate = useNavigate()
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false)

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
    <main>
      <button onClick={() => navigate(`/`)}>
        Back
      </button>
      <h2>{strCategory} Dishes</h2>
      {loading ? (
        <p>Loading Food...</p>
      ): meals.length === 0 ? (
        <p>No food items available, try again later.</p>
      ) : (
        <div>
          {meals.map((meal) => (
            <article key = {meal.idMeal} onClick={() => navigate(`/meal/${meal.idMeal}`)}>
              <div>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
              </div>
              <p>{meal.strMeal}</p>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}

export default MealItems