import React from 'react'
import { NavLink } from 'react-router-dom'

const MealCategories = ({detail = []}) => {

    return (
    <main>
        <article className="menu-bar">
            {detail.map((curItem) => (
                <div key = {curItem.idCategory}>
                    <div className="category-item">
                        <img src={curItem.strCategoryThumb} alt={curItem.strCategory} />
                    </div>
                    <NavLink to={`/category/${curItem.strCategory}`}>
                        <button>{curItem.strCategory}</button>
                    </NavLink>
                </div>
            ))}
        </article>  
    </main>
  )
}

export default MealCategories