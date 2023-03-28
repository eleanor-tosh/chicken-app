import React from 'react'
import recipes from '.././Data/recipe.js'

function Recipes() {
  return (
    <div className="container p-20 mx-auto ">
      <h1 className="text-2xl pb-12 leading-relaxed font-semibold underline underline-offset-8 text-orange-700">
        Some recipes that will use your backyard hens eggs:
      </h1>
      <div className="container grid grid-cols-2 mx-auto mb-20">
        {recipes?.map((recipe) => {
          return (
            <div className="mx-auto mb-10 w-11/12">
              <a
                href={recipe.link}
                target="_blank"
                className="flex flex-col mb-10 items-center bg-white border border-gray-200 rounded-lg shadow h-full md:flex-row md:max-w-xl hover:bg-gray-100"
                rel="noreferrer"
              >
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src={recipe.image}
                  alt="completed recipe"
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {recipe.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700">
                    {recipe.comment}
                  </p>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Recipes
