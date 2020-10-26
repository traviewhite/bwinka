import React from 'react'
import { motion } from 'framer-motion'

const Path = props => (
  <motion.path
    fill="#f7f5dd"
    {...props}
  />
)

export const HamToggle = ({ toggle }) => (
  <button onClick={toggle}>
    <svg width="8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.44 204.11">
      <Path 
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.2 }} 
        d="M0,35.34V0H8l9.68,19.85L27.35,0h8.09V35.34H28.79V10.19L20.1,28.1H15.38l-8.78-18V35.34Z"/>
      <Path 
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.2 }} 
        d="M9.46,76.19v9.73H33V92H2.41V55.1H33l-.41,6.08H9.46v9H29.08v6Z"
        />
      <Path 
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.2 }} 
        d="M3.05,146.22v-36.9H10.3l15.19,25v-25h6.89v36.9h-7.2l-15.24-25v25Z"/>
      <Path
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.2 }}  
        d="M3.31,189.11V166.6h7v22.51c0,6,2.17,8.87,7.35,8.87S25,195.14,25,189.11V166.6h7v22.51c0,10.19-4.25,15-14.42,15S3.31,199.3,3.31,189.11Z"/>
    </svg>
    
  </button>
)

export default HamToggle

{/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.07 56.13"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
  <path d="M14.61,0l9.52,12.06c2.48,3.13,4.55,6,6.75,9.16h.41c2.21-3.36,4.42-6.26,6.62-9.28L47.29,0H60.38L37.64,27.14l23.43,29H47.29L37.5,43.49c-2.62-3.25-4.83-6.38-7.17-9.74h-.28c-2.2,3.36-4.55,6.37-7,9.74L13.37,56.13H0L23.71,27.48,1.1,0Z"/>
</g></g></svg>*/}


{/*     <svg width="30" height="28" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5", stroke: "#006C66" },
          open: { d: "M 3 16.5 L 17 2.5", stroke: "#DBFFEB" }
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
          closed: { d: "M 2 16.346 L 20 16.346", stroke: "#006C66" },
          open: { d: "M 3 2.5 L 17 16.346", stroke: "#DBFFEB" }
        }}
      />
    </svg> */}