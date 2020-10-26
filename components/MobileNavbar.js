import { motion } from 'framer-motion'
import Links from '../components/Links'

const menuvariants = {
  open: {
    display: 'block',
    //opacity: 1,
    overflow: 'no-scroll',
    backgroundColor: '#5c6161',
    borderRadius: '8px',
  },
  closed: {
    display: 'none',
    //opacity: 0,
  }
}
const ulvariants = {
  open: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 }
  },
  closed: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 }
  }
}

const MobileNav = () => (
  <motion.div variants={menuvariants} className="mobilenavbar">
    <motion.ul variants={ulvariants}>
      <Links />
    </motion.ul>
  </motion.div>
)

export default MobileNav