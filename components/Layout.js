import Head from '../components/Head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useScript from '../components/useScript'

export const PageNavNext = ('Next Project')
export const PageNavPrev = ('Previous Project')

const Layout = ({ children })  => {

  useScript('https://res.cloudinary.com/bwinka/raw/upload/v1604523949/dragscroll_dsqotx.js');

  return (
    <>
      <Head />
      <div className="container">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout