import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { PageNavNext, PageNavPrev } from '../../components/Layout'
import { motion } from 'framer-motion'
import { fadeIn, fadeInLeft, stagger } from '../../components/MotionA'
import { eiuHeader, eiuSlide } from '../../components/image_data'
//import { SlideshowEIU, SlideshowEIU2, SlideshowEIU3 } from '../../components/Slideshow'

const EIUhousing = () => (
  <>
    <Head>
      <title>EIU Housing & Dining Services</title>
      <script src="https://res.cloudinary.com/bwinka/raw/upload/v1604523949/dragscroll_dsqotx.js" />
    </Head>
    
    <Layout>
      <div className="showcase_header">
        <img src={eiuHeader} unsized alt="EIU" />
      </div>

      <motion.div className="design_head" exit={{ opacity: 0 }} initial='initial' animate='animate' variants={stagger}>
        
        <motion.div variants={fadeIn} className="project_overview">
          <h4>PROJECT OVERVIEW</h4>
          <h1>EIU Housing & Dining</h1>
          <hr/>
          <p>
            Faithfully following the EIU Brand Guideline, this opportunity pushed me to learn to create unique designs that stood by themselves while still adhering to specific design instructions. 
            Working on the UHDS Marketing Team taught me so much about marketing and design– from printing principles to how to work with a group of people to launch a successful campaign. 
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
        {eiuSlide.map((imgSrc, index) => (
          <img src={imgSrc} key={index} unsized />
        ))}
      </div>

      {/*
      <div className="slide_wrapper">
      </div>
      <div className="design_sub">
        <h2>2020 Admissions Booklet</h2>
        <p>The 2020 Admissions Booklet was made in order to give incoming students all the general information about their housing and dining options in one print piece.</p>
      </div>
      <div className="slide_wrapper">
        <SlideshowEIU2 /> 
      </div>
      <div className="design_sub">
        <h2>Allergen Friendly Station</h2>
        <p>These promotions were placed next to the new Allergen Friendly Station in one of EIU’s dining centers. The color scheme uses the international ‘Allergen-Free’ color used to identify Allergen-Free cooking utensils. The Allergen Friendly Station icons and their guide are used on Nutrition Sheets throughout campus.</p>
      </div>
      <div className="slide_wrapper">
        <SlideshowEIU3 /> 
      </div>


        <img src='https://source.unsplash.com/random/1000x900' />
        <img src='https://source.unsplash.com/random/1000x600' />
        <img src='https://source.unsplash.com/random/900x600' />
        <img src='https://source.unsplash.com/random/700x600' />
        <img src='https://source.unsplash.com/random/800x600' />
        <img src='https://source.unsplash.com/random/400x600' />
        <img src='https://source.unsplash.com/random/1200x500' />
        <img src='https://source.unsplash.com/random/1000x700' />
        <img src='https://source.unsplash.com/random/1000x600' />
        <img src='https://source.unsplash.com/random/600x600' />

      */}
      
      <div className="page_nav_btn">
        <Link href="/design/personal-brand-identity">
          <p>{PageNavPrev}</p>
        </Link>
        <Link href="/design/mac-daddy-identity">
          <p>{PageNavNext}</p>
        </Link>
      </div>
    </Layout>
  </>
);

export default EIUhousing