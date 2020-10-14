import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
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
          <p>During my MA program at Eastern Illinois University, I had an assistantship with EIU Housing and Dining Services where I was in charge of creating brochures, postcards, posters for prospective students and students living on and off campus.</p>
          <p>I wanted my brand to reflect the principles that are fundamental to my design philosophy : clarity, personality,</p>
        </div>
        <div className="slide_wrapper">
          <SlideshowBwinka /> 
        </div>
        
        <div className="page_nav_btn">
        <Link href="/design/posters-lettering">
          <p>prev one</p>
        </Link>
        <Link href="/design/eiu-housing-dining">
          <p>next one</p>
        </Link>
      </div>
      </Layout>
    </>
  );

  export default PersonalBrand;
