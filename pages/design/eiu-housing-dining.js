import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { SlideshowEIU, SlideshowEIU2, SlideshowEIU3 } from '../../components/Slideshow'

const EIUhousing = () => (
  <>
    <Head>
      <title>EIU Housing & Dining Services</title>
    </Head>
    
    <Layout>
      <div className="design_head">
        <h1>EIU Housing & Dining</h1>
        <p>During my MA program at Eastern Illinois University, I had an assistantship with EIU Housing and Dining Services where I was in charge of creating brochures, postcards, posters, and various other print pieces for prospective students and students living on and off campus. I also supervised a team of design and marketing assistants.</p>
      </div>
      <div className="slide_wrapper">
        <SlideshowEIU /> 
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

      <div className="page_nav_btn">
        <Link href="/design/personal-brand-identity">
          <p>prev one</p>
        </Link>
        <Link href="/design/mac-daddy-identity">
          <p>next one</p>
        </Link>
      </div>
    </Layout>
  </>
)

export default EIUhousing