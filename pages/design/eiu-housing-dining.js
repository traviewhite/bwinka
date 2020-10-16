import Head from 'next/head'
import Link from 'next/link'
import Layout, { PageNavNext, PageNavPrev } from '../../components/Layout'
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
        <p>I worked at EIU’s Housing and Dining Services as a Design Assistant before transitioning into a position as a Marketing Graduate Assistant during my MA Program. In the 2.5 years that I was there, I worked on various campaigns that encouraged students to live on campus and to get involved in their community.
        </p>
        <p>I created a range of print pieces including (but not exclusive to) flyers, brochures, postcards, posters, and booklets for prospective students and students living on and off-campus. I also supervised two Design Assistants. This opportunity taught me so much about marketing and design– from printing principles to how to work with a group of people to launch a successful campaign.
        </p>
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
          <p>{PageNavPrev}</p>
        </Link>
        <Link href="/design/mac-daddy-identity">
          <p>{PageNavNext}</p>
        </Link>
      </div>
    </Layout>
  </>
)

export default EIUhousing