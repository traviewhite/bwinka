import Head from 'next/head'
import Link from 'next/link'
import Layout, { PageNavNext, PageNavPrev } from '../../components/Layout'
import { motion } from 'framer-motion'
import { SlideshowBwinka } from '../../components/Slideshow'

const PersonalBrand = () => (
    <>
      <Head>
        <title>Personal Brand Identity</title>
      </Head>
      
      <Layout>
        <div className="design_head">
          <h1>Brooke Winka Design</h1>
          <p>This branding package is not too serious without compromising clarity or composure. I wanted my brand to be lighthearted, laid-back, simple, clean, and caring. Relaxing and stable forest green is paired with an energizing yellow-green, balancing one another out and giving off some serious playful, earthy, and chill vibes. A fun winking icon plays off of my last name and invites the viewer to get in touch– and maybe even make a new friend!</p>
        </div>
        <div className="slide_wrapper">
          <SlideshowBwinka /> 
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
