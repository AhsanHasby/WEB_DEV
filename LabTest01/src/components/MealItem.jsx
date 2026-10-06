import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const MealItem = () => {
    const navigate = useNavigate()
    const {strCategory} = useParams()
    const [status, setStatus] = useState(false)
    const [meals, setMeals] = useState([])

    useEffect( () => {
        const FindMeal = async () => {
            setStatus(true)
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)
                const data = await response.json()

                setMeals(data.meals || [])
                console.log(data.meals)
            } catch (error) {
                console.log("Failed to load meals", error)
                setMeals([])
            } finally {
                setStatus(false)
            }
        }
        FindMeal() // calling to run when useEffect runs
    }, [strCategory])

  return (
    <main>
        <button onClick = {() => {navigate(-1)}} className="btn btn-success" type="button">Back</button>
        {
            status ? (
                <p>Searching for food...</p>
            ) : (
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {meals.map((curr) => ( 
                        <div key = {curr.idMeal} className="col">
                            <div className="card h-100">
                                <img src={curr.strMealThumb} className="card-img-top" alt={curr.strMeal}/>
                                <div className="card-body">
                                    <h5 className="card-title">{curr.strMeal}</h5>
                                    <button onClick={() => {navigate(`/item/${curr.idMeal}`)}} className="card-text">See Details</button>
                                </div>
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