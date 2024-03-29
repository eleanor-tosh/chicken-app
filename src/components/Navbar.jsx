import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-7 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <img
              src="/images/eggs.jpg"
              className="h-20 mr-3 sm:h-20"
              alt="Chicken Logo"
            />
            <span className="self-center text-3xl font-semibold whitespace-nowrap">
              Scrambled
            </span>
          </a>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white bg-orange-400 rounded md:bg-transparent md:text-orange-400 md:p-0 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/inputs"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0"
                >
                  Calculator
                </a>
              </li>

              <li>
                <a
                  href="/record"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0"
                >
                  Record
                </a>
              </li>
              <li>
                <a
                  href="/hens"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0"
                >
                  My Hens
                </a>
              </li>

              <li>
                <a
                  href="/recipes"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0"
                >
                  Recipes
                </a>
              </li>
              <li>
                <button className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded-full">
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
