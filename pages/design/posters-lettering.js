import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { PageNavNext, PageNavPrev } from '../../components/Layout'
import { motion } from 'framer-motion'
import { fadeIn, fadeInLeft, stagger } from '../../components/MotionA'
import { postersHeader, postersSlide } from '../../components/image_data'

const PosterLettering = () => (
  <>
    <Head>
      <title>Posters & Lettering</title>
      <script src="https://res.cloudinary.com/bwinka/raw/upload/v1604523949/dragscroll_dsqotx.js" />
    </Head>
    
    <Layout>
      <div className="showcase_header">
        <Image src={postersHeader} unsized alt="Posters and Lettering" />
      </div>

      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate' variants={stagger} className="design_head">

        <motion.div variants={fadeIn} className="project_overview">
          <h4>PROJECT OVERVIEW</h4>
          <h1>Posters & Lettering</h1>
          <hr/>
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
        {postersSlide.map((imgSrc, index) => (
          <Image src={imgSrc} key={index} unsized />
        ))}
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
