import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { PageNavNext, PageNavPrev } from '../../components/Layout'
import { motion } from 'framer-motion'
import { fadeIn, fadeInLeft, stagger } from '../../components/MotionA'
import { portlandHeader, portlandSlide } from '../../components/image_data'

const PortlandTravel = () => (
  <>
    <Head>
      <title>Portland Travel Guide</title>
      <script src="https://res.cloudinary.com/bwinka/raw/upload/v1604523949/dragscroll_dsqotx.js" />
    </Head>
    
    <Layout>
      <div className="showcase_header">
        <img src={portlandHeader} unsized alt="Portland Travel Guide" />
      </div>
      
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate' variants={stagger} className="design_head">

        <motion.div variants={fadeIn} className="project_overview">
          <h4>PROJECT OVERVIEW</h4>
          <h1>Portland, Oregon<br/>Travel Guide</h1>
          <hr/>
          <p>
            Another undergrad project where I was challenged to create a Travel Guide without relying on imagery.  The blues in this design embody the hazy nature of the port city, while personalized lettering offers a little extra personality. This stylish booklet dodges the over-saturated promotional pictures and directs the reader straight to the places that make this city the unique place that it is. 
          </p>
        </motion.div>

        <motion.div variants={fadeInLeft} className="deliverable_overview">
          <h4>DELIVERABLES</h4>
          <div className="delv_sect"> 
            <section>
              <h5>
                Print<br/>
                Lettering<br/>
              </h5>
            </section>
          </div>
        </motion.div>
    
      </motion.div>

      <hr/>
      
      <div className="slide dragscroll">
        {portlandSlide.map((imgSrc, index) => (
          <img src={imgSrc} key={index} unsized />
        ))}
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