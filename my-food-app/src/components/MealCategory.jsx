import React from 'react'
import { NavLink } from 'react-router-dom'

const MealCategory = ({category = []}) => {
  
  return (

    <main>
      <div className='row row-cols-1 row-cols-md-3 g-3 '>
        {category.map((curItem) => (
          <div key = {curItem.idCategory} className="card">
          <img src={curItem.strCategoryThumb} className="card-img-top" alt={curItem.strCategory}/>
            <div className="card-body">
              <h5 className="card-title">{curItem.strCategory}</h5>
              <NavLink to={`/category/${curItem.strCategory}`}>
                <button type="button" className="btn btn-outline-success">Available items</button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default MealCategory