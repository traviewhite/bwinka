import Head from 'next/head'
import Link from 'next/link'
import Layout, { PageNavNext, PageNavPrev } from '../../components/Layout'
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
        <p>
          (WIP) This children’s book is a very special project I’m currently working on! A friend of mine welcomed his first little kiddo into the world recently. He asked his grandmother for a story of their village in Jamaica to pass down to his son, and I was so honored when he asked me to create the illustrations to accompany this amazing story. Stay tuned!
        </p>
      </div>
      <div className="slide_wrapper">
        <SlideshowAncientVillage /> 
      </div>

      <div className="page_nav_btn">
        <Link href="/illustration/anniversary-calendar">
          <p>{PageNavPrev}</p>
        </Link>
        <Link href="/illustration/illustration-gallery">
          <p>{PageNavNext}</p>
        </Link>
      </div>
    </Layout>
  </>
)

export default AncientVillage
