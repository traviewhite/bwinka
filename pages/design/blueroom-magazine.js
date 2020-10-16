import Head from 'next/head'
import Link from 'next/link'
import Layout, { PageNavNext, PageNavPrev } from '../../components/Layout'
import { motion } from 'framer-motion'
import { SlideshowBlueroom } from '../../components/Slideshow'

const BlueroomMag = () => (
  <>
    <Head>
      <title>BLUEROOM Magazine</title>
    </Head>
    
    <Layout>
      <div className="design_head">
        <h1>BLUEROOM Magazine</h1>
        <p>
          I served as the Vice President, Social Media Coordinator, and Co-Editor of the 2018-2019 Blue Room Magazine Team after serving as a member of the 2017-2018 team. Blue Room Magazine is a student-run art magazine that operates out of the Doudna Fine Arts Center at Eastern Illinois University.
        </p>
        <p>
          Blue Room’s goal is to feature student artists attending EIU, give student designers out of the classroom design experience, and to give the rest of campus a look at what’s going on inside of the Art Department.  During this year, I oversaw the creative direction and physical production of the magazine as well as created social media graphics and managed all social media accounts.
        </p>
      </div>
      <div className="slide_wrapper">
        <SlideshowBlueroom /> 
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
)

export default BlueroomMag