import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { SlideshowCalendar } from '../../components/Slideshow'

const PosterLettering = () => (
  <>
    <Head>
      <title>2020 Illustrated Anniversary Calendar</title>
    </Head>
    
    <Layout>
      <div className="design_head">
        <h1>2020 Illustrated<br/>Anniversary Calendar</h1>
        <p>A non-traditional approach to a yearly calendar that celebrates a random anniversary every month.</p>
      </div>
      <div className="slide_wrapper">
        <SlideshowCalendar /> 
      </div>

      <div className="page_nav_btn">
        <Link href="/illustration/illustration-gallery">
          <p>prev one</p>
        </Link>
        <Link href="/illustration/ancient-village">
          <p>next one</p>
        </Link>
      </div>
    </Layout>
  </>
)

export default PosterLettering