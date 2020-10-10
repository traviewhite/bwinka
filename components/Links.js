import { motion } from 'framer-motion'
import Link from 'next/link'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const totherightyougo = { marginLeft: `auto` };

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
      <Link href="/ux-ui">
        <a>UX/UI</a>
      </Link>
    </motion.li>
    
    <motion.li variants={variants}  style={totherightyougo}>
      <Link href="/about">
          <a className="aboutbtn">About/Contact</a>
      </Link>
    </motion.li>
  </>
)

export default Links