import { motion, useCycle } from "framer-motion"
import Link from 'next/link'
import HamToggle from '../components/HamToggle'
import MobileNavbar from '../components/MobileNavbar'
import Links from '../components/Links'



export const Navbar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    
    return (
        <>
            <nav>
                <div className="homebtn">
                        <Link href="/">
                            <a className="homebtnlogo">
                                <img src="../logo.png" alt="Brooke Winka Logo"></img>
                            </a>
                        </Link>
                </div>

                <motion.ul className="navbar">
                    <Links />
                </motion.ul>
                
                <motion.div
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                >
                    <div className="ham2">
                        <HamToggle toggle={() => toggleOpen()} />
                    </div>

                    <MobileNavbar />

                </motion.div>
                
            </nav>
        </>
    )
}

export default Navbar


