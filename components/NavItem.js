import { motion } from "framer-motion";

const variants = {
  open: {
    display: 'block',
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    display: 'none',
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const NavItem = () => {
  const style = { color: `pink` };
  return (
    <motion.li
      variants={variants}
      whileTap={{ scale: 0.95 }}
    >
        <div style={style}>piss
        </div>
    </motion.li>
  );
};
export default NavItem