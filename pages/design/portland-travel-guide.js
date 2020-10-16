import Head from 'next/head'
import Link from 'next/link'
import Layout, { PageNavNext, PageNavPrev } from '../../components/Layout'
import { motion } from 'framer-motion'
import { SlideshowPortland } from '../../components/Slideshow'

const PortlandTravel = () => (
  <>
    <Head>
      <title>Portland Travel Guide</title>
    </Head>
    
    <Layout>
      <div className="design_head">
        <h1>Portland, Oregon<br/>Travel Guide</h1>
        <p>
          This was a design project I worked on during my undergrad where I was challenged to create a Travel Guide without relying on imagery.  I chose to work with blues to embody the hazy nature of the port city, while personalized lettering offers a little extra personality. This stylish booklet dodges the over-saturated promotional pictures and directs the reader straight to the places that make this city the unique place that it is.
        </p>
      </div>
      <div className="slide_wrapper">
        <SlideshowPortland /> 
      </div>

      <div className="page_nav_btn">
        <Link href="/design/blueroom-magazine">
          <p>{PageNavPrev}</p>
        </Link>
        <Link href="/design/posters-lettering">
          <p>{PageNavNext}</p>
        </Link>
      </div>
    </Layout>
  </>
)

export default PortlandTravel