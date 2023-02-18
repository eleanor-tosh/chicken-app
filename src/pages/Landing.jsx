import React from 'react'

function Landing() {
  return (
    <div class="grid h-screen place-items-center">
      <div class="relative">
        <a href="/inputs">
          <img
            class="max-w-screen-xl hover:opacity-70"
            alt="eggs"
            src="/images/eggs.jpg"
          />
          <div class="absolute text-2xl text-gray-300 bottom-20 left-1/2 -translate-x-1/2">
            <p>Click to enter</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Landing
