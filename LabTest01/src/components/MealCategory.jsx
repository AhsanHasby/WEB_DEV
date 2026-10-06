import React from 'react'
import { NavLink } from 'react-router-dom'

const MealCategory = ({category = []}) => {
    
  return (
    <main>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {category.map((curr) => ( 
                <div key = {curr.idCategory} className="col">
                    <div className="card h-100">
                    <img src={curr.strCategoryThumb} className="card-img-top" alt={curr.strCategory}/>
                    <div className="card-body">
                        <h5 className="card-title">{curr.strCategory}</h5>
                        <NavLink to = {`/category/${curr.strCategory}`}>
                            <button className="card-text">Available Items</button>
                        </NavLink>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    </main>
  )
}

export default MealCategory