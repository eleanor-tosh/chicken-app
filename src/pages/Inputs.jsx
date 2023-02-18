import React from 'react'
import { motion } from 'framer-motion'

function Inputs() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      class="grid h-screen place-items-center"
    >
      <h1>There will be a form here</h1>
    </motion.div>
  )
}

export default Inputs
