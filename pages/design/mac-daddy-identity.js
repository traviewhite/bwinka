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
        <Image src={macHeader} unsized alt="Mac Daddy" />
      </div>

      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate' variants={stagger} className="design_head">

        <motion.div variants={fadeIn} className="project_overview">
          <h4>PROJECT OVERVIEW</h4>
          <h1>Mac Daddy's Identity<br/>& User Interface Design</h1>
          <hr/>
          <p>
            This restaurant concept was an undergrad project that I decided to give a little facelift. Mac-and-cheese might be one of my favorite comfort foods, and I was trying to imagine if I could have a restaurant down the street from my house– what would I want it to be like?
            New and fun? Yep. A little bit of an edge? Probably. Would there be cute illustrations of food I wanna eat everywhere? Absolutely. 
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
        {macSlide.map((imgSrc, index) => (
          <Image src={imgSrc} key={index} unsized />
        ))}
      </div>

      <div className="design_sub">
        <h2>Desktop Website Design</h2>
      </div>
      <div className="showcase_imgwrap">
        <Image src="https://res.cloudinary.com/bwinka/image/upload/v1602703789/design/mac_daddy/2020-Mac-Daddys-Web-Mockups_qn0nss.png" alt="Mac Daddy Website Mockup" unsized/>
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