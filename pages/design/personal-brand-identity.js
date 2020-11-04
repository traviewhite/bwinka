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
        <Image src={bwinkaHeader} unsized alt="Brooke Winka Brand Identity" />
      </div>

      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate' variants={stagger} className="design_head">

        <motion.div variants={fadeIn} className="project_overview">
          <h4>PROJECT OVERVIEW</h4>
          <h1>Brooke Winka Design</h1>
          <hr/>
          <p>
            This branding package is not too serious without compromising clarity or composure. 
            I wanted my brand to be lighthearted, laid-back, simple, clean, and caring. 
            Relaxing and stable forest green is paired with an energizing yellow-green, balancing one another out and giving off some serious playful, earthy, and chill vibes. 
            A fun winking icon plays off of my last name and invites the viewer to get in touch– and maybe even make a new friend!
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
      {bwinkaSlide.map((imgSrc, index) => (
        <Image src={imgSrc} key={index} unsized />
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
