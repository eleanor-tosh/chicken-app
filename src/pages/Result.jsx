import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Result(props) {
  console.log(props.inputData)

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
          It costs approx. $XX to produce each egg or $XX for a dozen.
        </h2>
      </div>

      <div className="bg-gray-50 shadow-xl w-3/4 mx-auto p-10 mb-20 rounded-lg mt-20 opacity-80">
        <h1 className="text-2xl font-bold mb-10 text-center">
          A breakdown of your result.
        </h1>
        <div>
          <h2 className="text-xl font-bold underline mb-4">Total Per Day</h2>
          <div className="grid gap-6 mb-6 md:grid-cols-3">
            <div>Food = $XX per day.</div>
            <div>Bedding = $XX per day.</div>
            <div>Other = $XX per day.</div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold underline mb-4">
            Per Chicken Per Day
          </h2>
          <div className="grid gap-6 mb-6 md:grid-cols-3">
            <div>Food = $XX per chicken.</div>
            <div>Bedding = $XX per chicken.</div>
            <div>Other = $XX per chicken.</div>
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
