import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { fadeIn, fadeInLeft, stagger } from '../components/MotionA'

const imageStyleCalendar = { backgroundImage: `url(${"https://res.cloudinary.com/bwinka/image/upload/v1602613659/illustration/btn_covers/calendar2020btn_z11cwx.png"})` }
const imageStyleAncientTale = { backgroundImage: `url(${"https://res.cloudinary.com/bwinka/image/upload/v1602716295/illustration/btn_covers/ancient-village-btn_wsryvc.png"})` }
const imageStyleIllustrationGallery = { backgroundImage: `url(${"https://res.cloudinary.com/bwinka/image/upload/v1602806871/illustration/btn_covers/spin-btn_tzk2lj.gif"})` }

const Illustration = () => (
  <>
    <Head>
      <title>Illustration | Brooke Winka</title>
    </Head>
    
    <Layout>
      <main>
        <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate' variants={stagger} className="showcase">
          <Link href="/illustration/anniversary-calendar">
            <motion.div variants={fadeIn} style={imageStyleCalendar} className="item" >
              <motion.h2 variants={fadeInLeft}>2020<br/>ANNIVERSARY<br/>CALENDAR</motion.h2>
            </motion.div>
          </Link>
          <Link href="/illustration/ancient-village">
            <motion.div variants={fadeIn} style={imageStyleAncientTale} className="item">
              <motion.h2 variants={fadeInLeft}>THE TALE OF AN<br/>ANCIENT VILLAGE<br/><p>CHILDREN'S BOOK</p></motion.h2>
            </motion.div>
          </Link>
          <Link href="/illustration/illustration-gallery">
            <motion.div variants={fadeIn} style={imageStyleIllustrationGallery} className="item">
              <motion.h2 variants={fadeInLeft}>ILLUSTRATION<br/>GALLERY</motion.h2>
            </motion.div>
          </Link>
        </motion.div>
      </main>
    </Layout>
  </>
)

export default Illustration