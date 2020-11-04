import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { PageNavNext, PageNavPrev } from '../../components/Layout'
import { motion } from 'framer-motion'
import { fadeIn, fadeInLeft, stagger } from '../../components/MotionA'
import { calendarHeader, calendarSlide } from '../../components/image_data'

const AnniversaryCalendar = () => (
  <>
    <Head>
      <title>2020 Illustrated Anniversary Calendar</title>
      <script src="https://res.cloudinary.com/bwinka/raw/upload/v1604523949/dragscroll_dsqotx.js" />
    </Head>
    
    <Layout>
      <div className="showcase_header">
        <Image src={calendarHeader} unsized alt="Illustrated Anniversary Calendar" />
      </div>
      
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate' variants={stagger} className="design_head">

        <motion.div variants={fadeIn} className="project_overview">
          <h4>PROJECT OVERVIEW</h4>
          <h1>2020 Illustrated<br/>Anniversary Calendar</h1>
          <hr/>
          <p>
            This design is a non-traditional approach to a yearly calendar that celebrates a random anniversary every month. I was super interested in introducing a new type of interaction to the traditional calendar. By leaving a large area of empty space on each page, I invite the user to jot down notes any way they like. I also was super interested in celebrating cool anniversaries that I thought were notable, for example– Adam Sandler’s 54th birthday and the first sale of the ballpoint pen.
          </p>
        </motion.div>

        <motion.div variants={fadeInLeft} className="deliverable_overview">
          <h4>DELIVERABLES</h4>
          <div className="delv_sect"> 
            <section>
              <h5>
                Print
              </h5>
              <p>
                Flyers • Posters • Postcards • Hanging Signs • 
                Window Clings • Brochures
              </p>
            </section>
            <section>
              <h5>
                Digital
              </h5>
              <p>
                Social Media Posts • Email Headers • 
                Website Graphics • Interactive Forms
              </p>
            </section>
          </div>
        </motion.div>
    
      </motion.div>

      <hr/>
      
      <div className="slide dragscroll">
        {calendarSlide.map((imgSrc, index) => (
          <Image src={imgSrc} key={index} unsized />
        ))}
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

export default AnniversaryCalendar
