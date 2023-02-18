import React from 'react'
import { motion } from 'framer-motion'

function Result() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      class="grid h-screen place-items-center"
    >
      <h1>The result will be here</h1>
    </motion.div>
  )
}

export default Result
