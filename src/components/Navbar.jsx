import React from 'react'

function Navbar() {
  return (
    <div>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-7 ">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" class="flex items-center">
            <img
              src="/images/eggs.jpg"
              class="h-20 mr-3 sm:h-20"
              alt="Chicken Logo"
            />
            <span class="self-center text-3xl font-semibold whitespace-nowrap">
              Scrambled
            </span>
          </a>

          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
              <li>
                <a
                  href="/"
                  class="block py-2 pl-3 pr-4 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/inputs"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0"
                >
                  Calculator
                </a>
              </li>

              <li>
                <a
                  href="/record"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0"
                >
                  Record
                </a>
              </li>
              <li>
                <a
                  href="/hens"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0"
                >
                  My Hens
                </a>
              </li>
              <li>
                <a
                  href="/tips"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0"
                >
                  Tips
                </a>
              </li>
              <li>
                <a
                  href="/recipes"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0"
                >
                  Recipes
                </a>
              </li>
              <li>
                <button class="bg-orange-400 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded-full">
                  Sign-in
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
