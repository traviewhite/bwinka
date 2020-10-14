import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { SlideshowPosters } from '../../components/Slideshow'

const PosterLettering = () => (
  <>
    <Head>
      <title>Posters & Lettering</title>
    </Head>
    
    <Layout>
      <div className="design_head">
        <h1>Posters & Lettering</h1>
        <p>A non-traditional approach to a yearly calendar that celebrates a random anniversary every month. </p>
      </div>
      <div className="slide_wrapper">
        <SlideshowPosters /> 
      </div>

      <div className="page_nav_btn">
        <Link href="/design/portland-travel-guide">
          <p>prev one</p>
        </Link>
        <Link href="/design/personal-brand-identity">
          <p>next one</p>
        </Link>
      </div>
    </Layout>
  </>
)

export default PosterLettering
