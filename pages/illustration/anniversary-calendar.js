import Head from 'next/head'
import Link from 'next/link'
import Layout, { PageNavNext, PageNavPrev } from '../../components/Layout'
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
        <p>
          This design is a non-traditional approach to a yearly calendar that celebrates a random anniversary every month. I was super interested in introducing a new type of interaction to the traditional calendar. By leaving a large area of empty space on each page, I invite the user to jot down notes any way they like. I also was super interested in celebrating cool anniversaries that I thought were notable, for example– Adam Sandler’s 54th birthday and the first sale of the ballpoint pen.
        </p>
      </div>
      <div className="slide_wrapper">
        <SlideshowCalendar /> 
      </div>

      <div className="page_nav_btn">
        <Link href="/illustration/illustration-gallery">
          <p>{PageNavPrev}</p>
        </Link>
        <Link href="/illustration/ancient-village">
          <p>{PageNavNext}</p>
        </Link>
      </div>
    </Layout>
  </>
)

export default PosterLettering
