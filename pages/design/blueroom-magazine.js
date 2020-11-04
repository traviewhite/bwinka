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
        <Image src={blueroomHeader} unsized alt="BLUEROOM" />
      </div>

      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate' variants={stagger} className="design_head">
        
        <motion.div variants={fadeIn} className="project_overview">
          <h4>PROJECT OVERVIEW</h4>
          <h1>BLUEROOM Magazine</h1>
          <hr/>
          <p>
            I served as the Vice President, Social Media Coordinator, and Co-Editor of the 2018-2019 Blue Room Magazine Team after serving as a member of the 2017-2018 team. Blue Room Magazine is a student-run art magazine that operates out of the Doudna Fine Arts Center at Eastern Illinois University.
          </p>
          <p>
            Blue Room’s goal is to feature student artists attending EIU, give student designers out of the classroom design experience, and to give the rest of campus a look at what’s going on inside of the Art Department.  During this year, I oversaw the creative direction and physical production of the magazine as well as created social media graphics and managed all social media accounts.
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
        {blueroomSlide.map((imgSrc, index) => (
          <Image src={imgSrc} key={index} unsized />
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