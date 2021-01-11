import GlobalHead from 'components/GlobalHead'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import useScript from 'components/useScript'

export const ClientName = 'Brooke Winka'

const Layout = ({ children })  => {
  useScript('https://res.cloudinary.com/bwinka/raw/upload/v1604523949/dragscroll_dsqotx.js')
  
  return (
    <>
      <GlobalHead />
      <div className="container">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout