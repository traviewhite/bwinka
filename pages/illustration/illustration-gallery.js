import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { SlideshowIllustration } from '../../components/Slideshow'

const PosterLettering = () => (
  <>
    <Head>
      <title>Illustration Gallery</title>
    </Head>
    
    <Layout>
      <div className="design_head">
        <h1>Illustration Gallery</h1>
        <p>Gallery of Illustrations</p>
      </div>
      <div className="slide_wrapper">
        <SlideshowIllustration /> 
      </div>

      <div className="page_nav_btn">
        <Link href="/illustration/ancient-village">
          <p>prev one</p>
        </Link>
        <Link href="/illustration/anniversary-calendar">
          <p>next one</p>
        </Link>
      </div>
    </Layout>
  </>
)

export default PosterLettering
