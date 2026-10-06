import React from 'react'
import { useState } from 'react'

const MealSearch = () => {
    const [status, setStatus] = useState(false)
    const [letter, setLetter] = useState("")
    const [meals, setMeals] = useState([])

    const findMeal = async () => {
        setStatus(true)
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        const data = await response.json()

        setMeals(data.meals)
        console.log(meals)
        setStatus(false)
    }

  return (
    <main>
        <div className="input-group mb-3">
        <input value = {letter} maxLength={1} onChange={(e) => setLetter(e.target.value)} type="text" className="form-control" placeholder="Enter first letter of the food" aria-label="Enter first letter of the food" aria-describedby="button-addon2"/>
        <button onClick = {findMeal} className="btn btn-outline-success" type="button" id="button-addon2">Search</button>
        </div>

        {
            status ? (
                <p>Searching for foods...</p>
            ) : (
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {meals.map((curr) => ( 
                        <div key = {curr.idMeal} className="col">
                            <div className="card h-100">
                            <img src={curr.strMealThumb} className="card-img-top" alt={curr.strMeal}/>
                            <div className="card-body">
                                <h5 className="card-title">{curr.strMeal}</h5>
                                <button className="card-text">Details</button>
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

export default MealSearch