import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import Gallery from '../../components/Gallery'

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
          <img src="../Untitled_Artwork 4.png" />
        </div>
        <div className="next_page_btn">
          <p>next one</p>
        </div>
      </Layout>
    </>
  );

  export default PersonalBrand;
