import { motion } from 'framer-motion'
import Link from 'next/link'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, duration: 0.1, velocity: -100, ease: "easeIn" }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, ease: "easeOut" }
    }
  }
}

//const totherightyougo = { marginLeft: `auto` };

const Links = () => (
  <>
    <motion.li variants={variants}>
      <Link href="/design">
        <a>Design</a>
      </Link>
    </motion.li>

    <motion.li variants={variants}>
      <Link href="/illustration">
        <a>Illustration</a>
      </Link>
    </motion.li>

    <motion.li variants={variants}>
      <Link href="/fine-art">
        <a>Fine Art</a>
      </Link>
    </motion.li>
    
    <motion.li variants={variants}>
      <Link href="/about">
          <a className="aboutbtn">About</a>
      </Link>
    </motion.li>
  </>
)

export default Links