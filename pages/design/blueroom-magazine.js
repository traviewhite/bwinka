import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { PageNavNext, PageNavPrev } from '../../components/Layout'
import { motion } from 'framer-motion'
import { fadeIn, fadeInLeft, stagger } from '../../components/MotionA'
import { blueroomHeader, blueroomSlide } from '../../components/image_data'

const BlueroomMag = () => (
  <>
    <Head>
      <title>BLUEROOM Magazine</title>
      <script src="https://res.cloudinary.com/bwinka/raw/upload/v1604523949/dragscroll_dsqotx.js" />
    </Head>
    
    <Layout>
      <div className="showcase_header">
        <img src={blueroomHeader} unsized alt="BLUEROOM" />
      </div>

      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate' variants={stagger} className="design_head">
        
        <motion.div variants={fadeIn} className="project_overview">
          <h4>PROJECT OVERVIEW</h4>
          <h1>BLUEROOM Magazine</h1>
          <hr/>
          <p>
            A student-run art magazine that features student artists attending EIU, gives student designers out of the classroom design experience and grants the rest of EIU a look at what’s going on inside of the Art Department. 
            During the 2018-2019 school year, I oversaw the creative direction and physical production of the magazine as well as created social media graphics and managed social media accounts. 
          </p>
        </motion.div>

        <motion.div variants={fadeInLeft} className="deliverable_overview">
          <h4>DELIVERABLES</h4>
          <div className="delv_sect"> 
            <section>
              <h5>
                Print<br/>
                Layout<br/>
                Social Media<br/>
                Copy Editor<br/>
              </h5>
            </section>
          </div>
        </motion.div>

      </motion.div>

      <hr/>
      
      <div className="slide dragscroll">
        {blueroomSlide.map((imgSrc, index) => (
          <img src={imgSrc} key={index} unsized />
        ))}
      </div>

      <div className="page_nav_btn">
        <Link href="/design/mac-daddy-identity">
          <p>{PageNavPrev}</p>
        </Link>
        <Link href="/design/portland-travel-guide">
          <p>{PageNavNext}</p>
        </Link>
      </div>
    </Layout>
  </>
);

export default BlueroomMag