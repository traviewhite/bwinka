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
        <p>A clean and fun illustrated design for a Restaurant Branding concept.</p>
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