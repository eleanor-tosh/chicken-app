import React from 'react'

function Recipes() {
  return (
    <div class="container p-20 mx-auto ">
      <h1 class="text-2xl pb-12 leading-relaxed font-semibold underline underline-offset-8 text-orange-700">
        Some recipes that will use your backyard hens eggs:
      </h1>
      <div class="container grid grid-cols-2 mx-auto mb-20">
        <a
          href="https://thestayathomechef.com/how-to-boil-eggs/"
          target="_blank"
          class="flex flex-col mb-10 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          rel="noreferrer"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="./images/hardboiledegg.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Hard Boiled Egg
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A classic. Very versatile and eggcellent in salads. Only required
              water, eggs, a pot and heat.
            </p>
          </div>
        </a>

        <a
          href="https://www.delish.com/cooking/recipe-ideas/a23499380/how-to-fry-an-egg/"
          target="_blank"
          class="flex flex-col mb-10 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          rel="noreferrer"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="./images/friedegg.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Fried Egg
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Great on toast, part of breakfast, lunch, or even a light dinner.
            </p>
          </div>
        </a>

        <a
          href="https://www.bbcgoodfood.com/recipes/basic-omelette"
          target="_blank"
          class="flex flex-col mb-10 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          rel="noreferrer"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="./images/omelette.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Omelette
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              The earliest omelettes are believed to have originated in ancient
              Persia.
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Recipes
