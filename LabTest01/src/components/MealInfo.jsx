import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const MealInfo = () => {
    const navigate = useNavigate()
    const {idMeal} = useParams()
    const [status, setStatus] = useState(false)
    const [item, setItem] = useState(null)

    useEffect( () => {
        const FindItem = async () => {
            setStatus(true)
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
                const data = await response.json()

                setItem(data.meals[0] || null)
                console.log(data.meals[0])
            } catch (error) {
                console.log("Failed to load item", error)
                setItem(null)
            } finally {
                setStatus(false)
            }
        }
        FindItem() // calling to run when useEffect runs
    }, [idMeal])

  return (
    <main>
        <button onClick = {() => {navigate(-1)}} className="btn btn-success" type="button">Back</button>
        {
            status ? (
                <p>Loading details...</p>
            ) : !item ? (
                <p>Details not found! Please try again.</p>
            ) : (
                <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div key = {item.idMeal} className="col">
                            <div className="card h-100">
                                <img src={item.strMealThumb} className="card-img-top" alt={item.strMeal}/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.strMeal}</h5>
                                    <p className="card-text"><b>Origin: </b>{item.strArea}, {item.strCountry}</p>
                                    <p className="card-text"><b>Recipe: </b>{item.strInstructions}</p>
                                </div>
                            </div>
                        </div>
                </div>
            )
        }

    </main>
  )
}

export default MealInfo