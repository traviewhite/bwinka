import * as React from 'react'
import { motion, useCycle } from "framer-motion"
import Link from 'next/link'
import Links from '../components/Links'
import HamToggle from '../components/HamToggle'
import MobileNavbar from '../components/MobileNavbar'
//import menuUrl from '../public/assets/x.svg'
//import SvgMenubg from '../components/SvgMenubg'

const back = {
  open: {
    opacity: 0.3,
    overflow: 'no-scroll',
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: '0px',
    bottom: '0px',
    right: '0px',
    left: '0px',
    display: 'block',
    backgroundColor: 'black',
    zIndex: 1,
    //filter: 'blur(10px)',
    transition: {
      opacity: {duration: 0.5}
      //filter: {duration: 0.1, tween: 10}
    }
  },
  closed: {
    opacity: 0,
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: '0px',
    bottom: '0px',
    right: '0px',
    left: '0px',
    display: 'none',
    backgroundColor: 'none',
    zIndex: 0,
    transition: {
      opacity: {duration: 0.4}
    }
  }
}

export const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  
  return (
    <>
      <nav>
        <div className="homebtn">
          <Link href="/">
            <a className="homebtnlogo">
              <img src="../assets/bw.svg" alt="Brooke Winka Logo"></img>
            </a>
          </Link>
        </div>
        
        <motion.div
          initial={ false }
          animate={ isOpen ? "open" : "closed" }
          onClick={() => { toggleOpen() }}
        >
          <HamToggle />
          <MobileNavbar />
        </motion.div>
      </nav>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"} 
        variants={back}
        onClick={() => { toggleOpen() }}
      />
    </>
  )
}

export default Navbar