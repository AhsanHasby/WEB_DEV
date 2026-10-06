import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const MealItem = () => {
  const {strCategory} = useParams()
  const navigate = useNavigate()
  const [status, setStatus] = useState(false)
  const [meals, setMeals] = useState([])

  useEffect(() => {
    setStatus(true)
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(strCategory)}`)
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals || [])
        setStatus(false)
        console.log(meals)
      })
      .catch(() => {
        setMeals([])
        setStatus(false)
      })

  }, [strCategory])

  return (
    <main>
      <button onClick={() => navigate(-1)} type="button" className="m-1 p-2 btn btn-success">Back</button>
      {
        status ? (
          <p>Loading items...</p>
        ) : meals.length === 0 ? (
          <p>No items available, try again later.</p>
        ) : (
          <div className="row row-cols-1 row-cols-md-3 g-3">
            {meals.map((curMeal) => (
              <div key = {curMeal.idMeal} className="card">
                <img src={curMeal.strMealThumb} className="card-img-top" alt={curMeal.strMeal}/>
                <div className="card-body">
                  <h5 className="card-title">{curMeal.strMeal}</h5>
                    <button onClick={() => {navigate(`/meals/${curMeal.idMeal}`)}} type="button" className="btn btn-outline-info">View details</button>
                </div>
              </div>
            ))}
          </div>
        )
      }
    </main>
  )
}

export default MealItem