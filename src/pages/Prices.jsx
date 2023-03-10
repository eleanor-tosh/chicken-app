import React from 'react'

function Landing() {
  return (
    <div class="container mx-auto">
      <div class="p-20">
        <h1 class="text-2xl pb-12 leading-relaxed font-semibold underline underline-offset-8 text-orange-700">
          Calculating the price of an egg.
        </h1>
        <p class="text-xl">
          The current supermarket price displayed in the footer is the average
          price on one egg from a "dozen mixed grade". The rolling average
          displayed is the current price of an egg calculated from your user
          profile.
        </p>
        <br></br>
        <p>
          A further breakdown of supermarket egg prices by size and free-range
          status will follow.
        </p>
      </div>
    </div>
  )
}

export default Landing
