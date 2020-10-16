import Head from 'next/head'
import Link from 'next/link'
import Layout, { PageNavNext, PageNavPrev } from '../../components/Layout'
import { motion } from 'framer-motion'
import { SlideshowPosters } from '../../components/Slideshow'

const PosterLettering = () => (
  <>
    <Head>
      <title>Posters & Lettering</title>
    </Head>
    
    <Layout>
      <div className="design_head2">
        <h1>Posters & Lettering</h1>
      </div>
      <div className="slide_wrapper">
        <SlideshowPosters /> 
      </div>

      <div className="page_nav_btn">
        <Link href="/design/portland-travel-guide">
          <p>{PageNavPrev}</p>
        </Link>
        <Link href="/design/personal-brand-identity">
          <p>{PageNavNext}</p>
        </Link>
      </div>
    </Layout>
  </>
)

export default PosterLettering
