import React from 'react'

function Recipes() {
  return (
    <div class="container p-20 mx-auto ">
      <h1 class="text-2xl pb-12 leading-relaxed font-semibold underline underline-offset-8 text-orange-700">
        Find some recipes that will use your backyard hens eggs:
      </h1>
      <ul class="text-xl">
        <li>
          <a
            href="https://thestayathomechef.com/how-to-boil-eggs/"
            target="_blank"
            rel="noreferrer"
            class="md:hover:text-green-700 hover:underline"
          >
            How to Boil an Egg
          </a>
        </li>
        <li>
          <a
            href="https://www.delish.com/cooking/recipe-ideas/a23499380/how-to-fry-an-egg/"
            target="_blank"
            rel="noreferrer"
            class="md:hover:text-green-700 hover:underline"
          >
            How to Fry an Egg
          </a>
        </li>
        <li>
          <a
            href="https://www.bbcgoodfood.com/recipes/basic-omelette"
            target="_blank"
            rel="noreferrer"
            class="md:hover:text-green-700 hover:underline"
          >
            Basic Omelette Recipe
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Recipes
