import React from 'react'

function Footer() {
  return (
    <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 ">
      <ul class="flex flex-wrap items-center m-auto mt-3 text-sm text-gray-500  sm:mt-0">
        <li>
          <a href="/Prices" class="hover:underline md:mr-6">
            Current supermarket price of eggs: $0.96 each.
          </a>
        </li>
        <li>
          <a href="/Prices" class="mr-4 hover:underline md:mr-6">
            Rolling average for your eggs: $1.09.
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
