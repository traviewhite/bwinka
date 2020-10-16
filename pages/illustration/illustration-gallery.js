import Head from 'next/head'
import Link from 'next/link'
import Layout, { PageNavNext, PageNavPrev } from '../../components/Layout'
import { motion } from 'framer-motion'
import { SlideshowIllustration } from '../../components/Slideshow'

const PosterLettering = () => (
  <>
    <Head>
      <title>Illustration Gallery</title>
    </Head>
    
    <Layout>
      <div className="design_head2">
        <h1>Illustration Gallery</h1>
      </div>
      <div className="slide_wrapper">
        <SlideshowIllustration /> 
      </div>

      <div className="page_nav_btn">
        <Link href="/illustration/ancient-village">
          <p>{PageNavPrev}</p>
        </Link>
        <Link href="/illustration/anniversary-calendar">
          <p>{PageNavNext}</p>
        </Link>
      </div>
    </Layout>
  </>
)

export default PosterLettering
