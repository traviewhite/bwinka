import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { PageNavNext, PageNavPrev } from '../../components/Layout'
import { motion } from 'framer-motion'
import { fadeIn, fadeInLeft, stagger } from '../../components/MotionA'
import { villageHeader, ancientvillageSlide } from '../../components/image_data'

const AncientVillage = () => (
  <>
    <Head>
      <title>The Tale of an Ancient Village</title>
      <script src="https://res.cloudinary.com/bwinka/raw/upload/v1604523949/dragscroll_dsqotx.js" />
    </Head>
    
    <Layout>
      <div className="showcase_header">
        <img src={villageHeader} unsized alt="The Tale of an Ancient Village" />
      </div>

      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate' variants={stagger} className="design_head">

        <motion.div variants={fadeIn} className="project_overview">
          <h4>PROJECT OVERVIEW</h4>
          <h1>The Tale of an<br/>Ancient Village</h1>
          <hr/>
          <p>
            (WIP) A children’s book that happens to be a very special project I’m currently working on! A friend of mine welcomed his first little kiddo into the world recently. He asked his grandmother for a story of their village in Jamaica to pass down to his son, and I was so honored when he asked me to create the illustrations to accompany this amazing story. Stay tuned!
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
        {ancientvillageSlide.map((imgSrc, index) => (
          <img src={imgSrc} key={index} unsized />
        ))}
      </div>

      <div className="page_nav_btn">
        <Link href="/illustration/anniversary-calendar">
          <p>{PageNavPrev}</p>
        </Link>
        <Link href="/illustration/illustration-gallery">
          <p>{PageNavNext}</p>
        </Link>
      </div>
    </Layout>
  </>
)

export default AncientVillage
