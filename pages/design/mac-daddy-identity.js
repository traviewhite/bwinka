import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { SlideshowMac } from '../../components/Slideshow'

const MacDaddy = () => (
  <>
    <Head>
      <title>Mac Daddy's Identity</title>
    </Head>
    
    <Layout>
      <div className="design_head">
        <h1>Mac Daddy's Identity<br/>& User Interface Design</h1>
        <p>This restaurant concept was an undergrad project that I decided to give a little facelift. Mac-and-cheese might be one of my favorite comfort foods, and I was trying to imagine if I could have a restaurant down the street from my house– what would I want it to be like?
        New and fun? Yep. A little bit of an edge? Probably. Would there be cute illustrations of food I wanna eat everywhere? Absolutely. 
        </p>
      </div>
      <div className="slide_wrapper">
        <SlideshowMac /> 
      </div>
      <div className="design_sub">
        <h2>Desktop Website Design</h2>
      </div>
      <div className="showcase_imgwrap">
        <img src="https://res.cloudinary.com/bwinka/image/upload/v1602703789/design/mac_daddy/2020-Mac-Daddys-Web-Mockups_qn0nss.png" alt="Mac Daddy Website Mockup" />
      </div>

      <div className="page_nav_btn">
        <Link href="/design/eiu-housing-dining">
          <p>prev one</p>
        </Link>
        <Link href="/design/blueroom-magazine">
          <p>next one</p>
        </Link>
      </div>
    </Layout>
  </>
)

export default MacDaddy