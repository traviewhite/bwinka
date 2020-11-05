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
        <img src={calendarHeader} unsized alt="Illustrated Anniversary Calendar" />
      </div>
      
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate' variants={stagger} className="design_head">

        <motion.div variants={fadeIn} className="project_overview">
          <h4>PROJECT OVERVIEW</h4>
          <h1>2020 Illustrated<br/>Anniversary Calendar</h1>
          <hr/>
          <p>
            A non-traditional approach to a yearly calendar that celebrates a random anniversary every month. By leaving a large area of empty space on each page, I invite the user to jot down notes any way they like. TBH, I really just wanted a cool calendar that celebrated the world’s most esteemed anniversaries, for example– Adam Sandler’s 54th birthday and the first sale of the ballpoint pen.
          </p>
        </motion.div>

        <motion.div variants={fadeInLeft} className="deliverable_overview">
          <h4>DELIVERABLES</h4>
          <div className="delv_sect"> 
            <section>
              <h5>
                Print<br/>
                Illustration<br/>
              </h5>
            </section>
          </div>
        </motion.div>
    
      </motion.div>

      <hr/>
      
      <div className="slide dragscroll">
        {calendarSlide.map((imgSrc, index) => (
          <img src={imgSrc} key={index} unsized />
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
