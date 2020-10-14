import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { SlideshowAncientVillage } from '../../components/Slideshow'

const AncientVillage = () => (
  <>
    <Head>
      <title>The Tale of an Ancient Village</title>
    </Head>
    
    <Layout>
      <div className="design_head">
        <h1>The Tale of an<br/>Ancient Village</h1>
        <p>.</p>
      </div>
      <div className="slide_wrapper">
        <SlideshowAncientVillage /> 
      </div>

      <div className="page_nav_btn">
        <Link href="/illustration/anniversary-calendar">
          <p>prev one</p>
        </Link>
        <Link href="/illustration/illustration-gallery">
          <p>next one</p>
        </Link>
      </div>
    </Layout>
  </>
)

export default AncientVillage
