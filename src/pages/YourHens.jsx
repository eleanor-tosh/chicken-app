import React from 'react'

function YourHens() {
  return (
    <div class="container grid grid-cols-3 mx-auto mb-20 ">
      <div class="max-w-sm mb-10 bg-white border border-gray-200 rounded-lg shadow">
        <img class="rounded-t-lg" src="./images/barred-rock1.jpg" alt="" />
        <div class="p-5">
          <div class="flex">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-orange-700 justify-start">
              Name: Henny
            </h5>{' '}
            <a href="">
              <i class="fa fa-edit ml-3 hover:bg-orange-200 rounded text-orange-400"></i>
            </a>
          </div>

          <p class="mb-3 font-normal text-gray-700">
            <ul>
              <li>Age: 2 Years</li>
              <li>Breed: Barred Rock</li>
              <li>Colour: Black and White</li>
              <li>Identifying Feature: Bent toe on left foot</li>
              <li>Currently Laying? Yes</li>
              <li>Notes: Likes to hide in the far corner of the run</li>
            </ul>
          </p>
        </div>
      </div>

      <div class="max-w-sm mb-10 bg-white border border-gray-200 rounded-lg shadow">
        <img class="rounded-t-lg" src="./images/barred-rock2.jpg" alt="" />
        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-orange-700">
            Name: Summer
          </h5>
          <p class="mb-3 font-normal text-gray-700">
            <ul>
              <li>Age: 2 Years</li>
              <li>Breed: Barred Rock</li>
              <li>Colour: Black and White</li>
              <li>Identifying Feature: </li>
              <li>Currently Laying? Yes</li>
              <li>Notes: Really likes strawberries</li>
            </ul>
          </p>
          <div class="align-bottom">
            <button class="bg-orange-400 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded-full">
              Edit
            </button>
          </div>
        </div>
      </div>

      <div class="max-w-sm mb-10 bg-white border border-gray-200 rounded-lg shadow ">
        <img class="rounded-t-lg" src="./images/speckled-sussex1.jpg" alt="" />
        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-orange-700">
            Name: Eagle
          </h5>
          <p class="mb-3 font-normal text-gray-700">
            <ul>
              <li>Age: 2 Years</li>
              <li>Breed: Speckled Sussex</li>
              <li>Colour: Brown and White</li>
              <li>
                Identifying Feature: Has the most white of the speckled sussex
                hens
              </li>
              <li>Currently Laying? Yes</li>
              <li>Notes: The most friendly</li>
            </ul>
          </p>
          <button class="bg-orange-400 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded-full">
            Edit
          </button>
        </div>
      </div>

      <div class="max-w-sm mb-10 bg-white border border-gray-200 rounded-lg shadow">
        <img class="rounded-t-lg" src="./images/speckled-sussex2.jpg" alt="" />
        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-orange-700">
            Name: Dumb Brown
          </h5>
          <p class="mb-3 font-normal text-gray-700">
            <ul>
              <li>Age: 2 Years</li>
              <li>Breed: Speckled Sussex</li>
              <li>Colour: Brown and White</li>
              <li>Identifying Feature: Kind of a fluffy face</li>
              <li>Currently Laying? Yes</li>
              <li>Notes: Does dumb stuuff</li>
            </ul>
          </p>
          <button class="bg-orange-400 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded-full">
            Edit
          </button>
        </div>
      </div>

      <div class="max-w-sm mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src="./images/speckled-sussex3.jpg" alt="" />
        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-orange-700 dark:text-white">
            Name: Speck
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <ul>
              <li>Age: 2 Years</li>
              <li>Breed: Speckled Sussex</li>
              <li>Colour: Black and White</li>
              <li>Identifying Feature: Usually found in nest box</li>
              <li>Currently Laying? Yes</li>
              <li>
                Notes: Sits in the nest boxes a lot. Prone to going clucky
              </li>
            </ul>
          </p>
          <button class="bg-orange-400 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded-full">
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}

export default YourHens
