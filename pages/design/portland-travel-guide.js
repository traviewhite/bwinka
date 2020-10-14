import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { SlideshowPortland } from '../../components/Slideshow'

const PortlandTravel = () => (
  <>
    <Head>
      <title>Portland Travel Guide</title>
    </Head>
    
    <Layout>
      <div className="design_head">
        <h1>Portland, Oregon Travel Guide</h1>
        <p>A typographic concept for a travel guide to the Rose City.</p>
      </div>
      <div className="slide_wrapper">
        <SlideshowPortland /> 
      </div>

      <div className="page_nav_btn">
        <Link href="/design/blueroom-magazine">
          <p>prev one</p>
        </Link>
        <Link href="/design/posters-lettering">
          <p>next one</p>
        </Link>
      </div>
    </Layout>
  </>
)

export default PortlandTravel