import React from 'react'
import { NavLink } from 'react-router-dom'

function MealCategories({ detail = [] }) {
    console.log(detail)
    
    return (
        <main className="mx-auto max-w-6xl p-6">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">Meal Categories</h2>

            {detail.length === 0 ? (
                <p className="text-center text-gray-600">
                    No categories available. Go Home and click Fetch Categories.
                </p>
            ) : (
                <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {detail.map((curItem) => (
                        <article
                            key={curItem.idCategory}
                            className="flex w-full flex-col items-center rounded-xl bg-white p-5 text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="flex h-52 w-full items-center justify-center overflow-hidden rounded-lg bg-gray-50 p-3">
                                <img
                                    src={curItem.strCategoryThumb}
                                    className="max-h-full max-w-full object-contain object-center"
                                    alt={curItem.strCategory}
                                />
                            </div>
                            <p className="mt-3 text-lg font-semibold text-gray-800">
                                {curItem.strCategory}
                            </p>
                            <NavLink to={`/category/${curItem.strCategory}`}><button className='rounded-lg text-white text-sm bg-amber-700 text-warp p-2'>Recipie</button></NavLink>
                        </article>
                    ))}
                </div>
            )}
        </main>
    )
}

export default MealCategories