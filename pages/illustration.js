import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'

const imageStyle1 = { backgroundImage: `url(${"https://res.cloudinary.com/bwinka/image/upload/v1602613659/design/btn_covers/calendar2020btn_z11cwx.png"})` }
const imageStyle2 = { backgroundImage: `url(${""})` }
const imageStyle3 = { backgroundImage: `url(${""})` }

const Illustration = () => (
  <>
    <Head>
      <title>Brooke Winka</title>
    </Head>
    
    <Layout>
      <main>
        <div className="showcase">
          <Link href="/illustration/2020-anniversary-calendar">
            <div style={imageStyle1} className="item" ><h2>2020<br/>ANNIVERSARY<br/>CALENDAR</h2></div>
          </Link>
          <Link href="/illustration/ancient-village">
            <div style={imageStyle2} className="item"><h2>THE TALE OF AN<br/>ANCIENT VILLAGE<br/><p>CHILDREN'S BOOK</p></h2></div>
          </Link>
          <Link href="/illustration/illustration-gallery">
            <div style={imageStyle3} className="item"><h2>ILLUSTRATION<br/>GALLERY</h2></div>
          </Link>
        </div>
      </main>
    </Layout>
  </>
)

export default Illustration
