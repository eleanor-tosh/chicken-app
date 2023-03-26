import React from 'react'
import puns from '.././Data/puns.js'

function Landing() {
  let randomPun = puns[Math.floor(Math.random() * puns.length)]

  return (
    <div className="container grid grid-cols-2 mx-auto">
      <div className="p-20">
        <h1 className="text-5xl pb-12 leading-relaxed font-semibold text-orange-700">
          Welcome to <strong>Scrambled</strong>, your backyard chicken website.
        </h1>
        <p className="text-xl">
          Here you can calculate the cost of each egg that your hens produce,
          find out how much it might cost to set-up a backyard coop, record
          on-going expenses, track your hens, get some handy chicken raising
          tips and find some eggcellent recipes.
        </p>
        <br></br>
        <p className="text-xl italic text-orange-700">{randomPun}</p>
      </div>
      <div>
        <img src="/images/eggs.jpg" alt="Eggs" />
      </div>
    </div>
  )
}

export default Landing
