import React from 'react'
import { motion } from 'framer-motion'

function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      class="grid h-screen place-items-center"
    >
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
    </motion.div>
  )
}

export default Landing
