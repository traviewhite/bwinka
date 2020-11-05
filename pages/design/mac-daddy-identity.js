import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { PageNavNext, PageNavPrev } from '../../components/Layout'
import { motion } from 'framer-motion'
import { fadeIn, fadeInLeft, stagger } from '../../components/MotionA'
import { macHeader, macSlide } from '../../components/image_data'

const MacDaddy = () => (
  <>
    <Head>
      <title>Mac Daddy's Identity</title>
      <script src="https://res.cloudinary.com/bwinka/raw/upload/v1604523949/dragscroll_dsqotx.js" />
    </Head>
    
    <Layout>
      <div className="showcase_header">
        <img src={macHeader} unsized alt="Mac Daddy" />
      </div>

      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate' variants={stagger} className="design_head">

        <motion.div variants={fadeIn} className="project_overview">
          <h4>PROJECT OVERVIEW</h4>
          <h1>Mac Daddy's Identity<br/>& User Interface Design</h1>
          <hr/>
          <p>
            An undergrad project that I gave a little facelift post-grad. Delicious doodles and bright cheesy colors let you know this mac-and-cheese joint doesn’t try to be anything it’s not. Soft san-serifs are comforting and easy on the eyes, just like your fav comfort food.  
          </p>
        </motion.div>

        <motion.div variants={fadeInLeft} className="deliverable_overview">
          <h4>DELIVERABLES</h4>
          <div className="delv_sect"> 
            <section>
              <h5>
                Branding<br/>
                Packaging<br/>
                Illustration<br/>
                Web Design<br/>
              </h5>
            </section>
          </div>
        </motion.div>
    
      </motion.div>

      <hr/>
      
      <div className="slide dragscroll">
        {macSlide.map((imgSrc, index) => (
          <img src={imgSrc} key={index} unsized />
        ))}
      </div>

      <div className="design_sub">
        <h2>Desktop Website Design</h2>
      </div>
      <div className="showcase_imgwrap">
        <img src="https://res.cloudinary.com/bwinka/image/upload/v1602703789/design/mac_daddy/2020-Mac-Daddys-Web-Mockups_qn0nss.png" alt="Mac Daddy Website Mockup" unsized/>
      </div>

      <div className="page_nav_btn">
        <Link href="/design/eiu-housing-dining">
          <p>{PageNavPrev}</p>
        </Link>
        <Link href="/design/blueroom-magazine">
          <p>{PageNavNext}</p>
        </Link>
      </div>
    </Layout>
  </>
);

export default MacDaddy