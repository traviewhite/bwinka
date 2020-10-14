import Head from '../components/Head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({ children })  => {
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



  