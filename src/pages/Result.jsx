import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Result(props) {
  let egg = 0
  let dozen = 0
  let fday = 0
  let bday = 0
  let oday = 0
  let tday = 0
  let fchick = 0
  let bchick = 0
  let ochick = 0
  let tchick = 0

  // food calculations
  let f1day = props.inputData.food1freq / props.inputData.food1cost
  let f2day = props.inputData.food2freq / props.inputData.food2cost
  let f3day = props.inputData.food3freq / props.inputData.food3cost
  let f4day = props.inputData.food4freq / props.inputData.food4cost
  let f5day = props.inputData.food5freq / props.inputData.food5cost

  if (f1day > 0) {
    fday = fday + f1day
  }
  if (f2day > 0) {
    fday = fday + f2day
  }
  if (f3day > 0) {
    fday = fday + f3day
  }
  if (f4day > 0) {
    fday = fday + f4day
  }
  if (f5day > 0) {
    fday = fday + f5day
  }

  // bed calculation
  let b1day = props.inputData.bed1freq / props.inputData.bed1cost
  let b2day = props.inputData.bed2freq / props.inputData.bed2cost
  let b3day = props.inputData.bed3freq / props.inputData.bed3cost

  if (b1day > 0) {
    bday = bday + b1day
  }
  if (b2day > 0) {
    bday = bday + b2day
  }
  if (f3day > 0) {
    bday = bday + b3day
  }

  // other calculation
  let o1day = props.inputData.other1freq / props.inputData.other1cost
  let o2day = props.inputData.other2freq / props.inputData.other2cost

  if (o1day > 0) {
    oday = oday + o1day
  }
  if (o2day > 0) {
    oday = oday + o2day
  }

  // per chicken
  fchick = fday / props.inputData.hens
  bchick = bday / props.inputData.hens
  ochick = oday / props.inputData.hens

  // totals
  tday = fday + bday + oday
  tchick = fchick + bchick + ochick

  // eggs
  egg = (fday + bday + oday) / props.inputData.eggs
  dozen = egg * 12

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-hero bg-cover min-h-screen border-2"
    >
      <div className="bg-gray-50 shadow-xl w-3/4 mx-auto p-10 mb-20 rounded-lg mt-20 opacity-80">
        <h1 className="text-8xl font-bold text-center">Result</h1>
      </div>

      <div className="bg-gray-50 shadow-xl w-1/2 mx-auto p-10 mb-20 rounded-full mt-20 opacity-80">
        <h2 className="text-4xl font-bold text-center leading-relaxed p-4">
          It costs approx. ${egg.toFixed(2)} to produce each egg or $
          {dozen.toFixed(2)} for a dozen.
        </h2>
      </div>

      <div className="bg-gray-50 shadow-xl w-3/4 mx-auto p-10 mb-20 rounded-lg mt-20 opacity-80">
        <h1 className="text-2xl font-bold mb-10 text-center">
          A breakdown of your result.
        </h1>
        <div>
          <h2 className="text-xl font-bold underline mb-4">Total Per Day</h2>
          <div className="grid gap-6 mb-6 md:grid-cols-4">
            <div>Food = ${fday.toFixed(2)} per day.</div>
            <div>Bedding = ${bday.toFixed(2)} per day.</div>
            <div>Other = ${oday.toFixed(2)} per day.</div>
            <div>Total = ${tday.toFixed(2)} per day.</div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold underline">Per Chicken Per Day</h2>
          <p className="text-l italic mb-4">
            For ({props.inputData.hens} hens)
          </p>
          <div className="grid gap-6 mb-6 md:grid-cols-4">
            <div>Food = ${fchick.toFixed(2)} per chicken.</div>
            <div>Bedding = ${bchick.toFixed(2)} per chicken.</div>
            <div>Other = ${ochick.toFixed(2)} per chicken.</div>
            <div>Total = ${tchick.toFixed(2)} per chicken.</div>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-right text-slate-700">
          <Link to={`/`}>Start again </Link>
        </h1>
      </div>
    </motion.div>
  )
}

export default Result
