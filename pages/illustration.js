import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'

const imageStyleCalendar = { backgroundImage: `url(${"https://res.cloudinary.com/bwinka/image/upload/v1602613659/design/btn_covers/calendar2020btn_z11cwx.png"})` }
const imageStyleAncientTale = { backgroundImage: `url(${""})` }
const imageStyleIllustrationGallery = { backgroundImage: `url(${""})` }

const Illustration = () => (
  <>
    <Head>
      <title>Illustration | Brooke Winka</title>
    </Head>
    
    <Layout>
      <main>
        <div className="showcase">
          <Link href="/illustration/2020-anniversary-calendar">
            <div style={imageStyleCalendar} className="item" ><h2>2020<br/>ANNIVERSARY<br/>CALENDAR</h2></div>
          </Link>
          <Link href="/illustration/ancient-village">
            <div style={imageStyleAncientTale} className="item"><h2>THE TALE OF AN<br/>ANCIENT VILLAGE<br/><p>CHILDREN'S BOOK</p></h2></div>
          </Link>
          <Link href="/illustration/illustration-gallery">
            <div style={imageStyleIllustrationGallery} className="item"><h2>ILLUSTRATION<br/>GALLERY</h2></div>
          </Link>
        </div>
      </main>
    </Layout>
  </>
)

export default Illustration