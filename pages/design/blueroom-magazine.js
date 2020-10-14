import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { SlideshowBlueroom } from '../../components/Slideshow'

const BlueroomMag = () => (
  <>
    <Head>
      <title>BLUEROOM Magazine</title>
    </Head>
    
    <Layout>
      <div className="design_head">
        <h1>BLUEROOM Magazine</h1>
        <p>A non-traditional approach to a yearly calendar that celebrates a random anniversary every month.</p>
      </div>
      <div className="slide_wrapper">
        <SlideshowBlueroom /> 
      </div>

      <div className="page_nav_btn">
        <Link href="/design/mac-daddy-identity">
          <p>prev one</p>
        </Link>
        <Link href="/design/portland-travel-guide">
          <p>next one</p>
        </Link>
      </div>
    </Layout>
  </>
)

export default BlueroomMag