import React from 'react'
import { motion } from 'framer-motion'

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#5c6161"
    strokeLinecap="round"
    {...props}
  />
)

export const HamToggle = ({ toggle }) => (
  <button onClick={toggle}>
    <svg width="30" height="28" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5", stroke: "#5c6161" },
          open: { d: "M 3 16.5 L 17 2.5", stroke: "#F8F1E6" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346", stroke: "#5c6161" },
          open: { d: "M 3 2.5 L 17 16.346", stroke: "#F8F1E6" }
        }}
      />
    </svg>
  </button>
)

export default HamToggle