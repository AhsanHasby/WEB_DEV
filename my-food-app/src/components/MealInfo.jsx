import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const MealInfo = () => {
  const {idMeal} = useParams()
  const navigate = useNavigate()
  const [status, setStatus] = useState(false)
  const [meal, setMeal] = useState(null)

  useEffect(() => {
    setStatus(true)
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(idMeal)}`)
      .then((response) => response.json())
      .then((data) => {
        setMeal(data.meals[0] || null)
        setStatus(false)
        console.log(meal)
      })
      .catch(() => {
        setMeal(null)
        setStatus(false)
      })
  }, [idMeal])
  
  
  return (
    <main>
      <button onClick={() => navigate(-1)} type="button" className="m-1 p-2 btn btn-success">Back</button>
      {
        status ? (
          <p>Loading...</p>
        ) : !meal ? (
          <p>Sorry! Please try again.</p>
        ) : (
          <div className="card mb-3">
            <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} style={{maxWidth: "300px"}}/>
            <div className="card-body">
              <h5 className="card-title"><b>{meal.strMeal}</b></h5>
              <p>
                <button type="button" className="btn btn-warning btn-sm">Country: </button>
                <i>  {meal.strCountry}</i>
              </p>
              <b>Ingredients: </b>
              <p className="card-text">{meal.strInstructions}</p>
            </div>
          </div>
        )
      }
    </main>
  )
}

export default MealInfo