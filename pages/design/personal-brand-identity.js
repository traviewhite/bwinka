import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { PageNavNext, PageNavPrev } from '../../components/Layout'
import { motion } from 'framer-motion'
import { fadeIn, fadeInLeft, stagger } from '../../components/MotionA'
import { bwinkaHeader, bwinkaSlide } from '../../components/image_data'

const PersonalBrand = () => (
  <>
    <Head>
      <title>Personal Brand Identity</title>
      <script src="https://res.cloudinary.com/bwinka/raw/upload/v1604523949/dragscroll_dsqotx.js" />
    </Head>
    
    <Layout>
      <div className="showcase_header">
        <img src={bwinkaHeader} unsized alt="Brooke Winka Brand Identity" />
      </div>

      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate' variants={stagger} className="design_head">

        <motion.div variants={fadeIn} className="project_overview">
          <h4>PROJECT OVERVIEW</h4>
          <h1>Brooke Winka Design</h1>
          <hr/>
          <p>
            Not too serious without compromising clarity or composure. 
            This branding package is lighthearted, clean, and caring. 
            A variety of youthful and active colors ensure that I have the freedom to explore color in my collateral and illustrations while still considering visual cohesion.
            I opted for a clean san-serif so attention wouldn’t be drawn away from my other projects when they are paired together.
          </p>
        </motion.div>

        <motion.div variants={fadeInLeft} className="deliverable_overview">
          <h4>DELIVERABLES</h4>
          <div className="delv_sect"> 
            <section>
              <h5>
                Branding<br/>
                Collateral<br/>
                Illustration<br/>
                Web Design<br/>
              </h5>
            </section>
          </div>
        </motion.div>

      </motion.div>

      <hr/>

      <div className="slide dragscroll">
      {bwinkaSlide.map((imgSrc, index) => (
        <img src={imgSrc} key={index} unsized />
      ))}
      </div>
      
      <div className="page_nav_btn">
      <Link href="/design/posters-lettering">
        <p>{PageNavPrev}</p>
      </Link>
      <Link href="/design/eiu-housing-dining">
        <p>{PageNavNext}</p>
      </Link>
    </div>
    </Layout>
  </>
);

export default PersonalBrand;
