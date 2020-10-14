import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { Slideshow } from '../../components/Slideshow'

const EIUhousing = () => (
  <>
    <Head>
      <title>Personal Brand Identity</title>
    </Head>
    
    <Layout>
      <div className="design_head">
        <h1>EIU Housing & Dining</h1>
        <p>During my MA program at Eastern Illinois University, I had an assistantship with EIU Housing and Dining Services where I was in charge of creating brochures, postcards, posters, and various other print pieces for prospective students and students living on and off campus. I also supervised a team of design and marketing assistants.</p>
      </div>
      <div className="slide_wrapper">
        <Slideshow /> 
      </div>
      <div className="design_head">
        <h1>Brooke Winka Design</h1>
        <p>During my MA program at Eastern Illinois University, I had an assistantship with EIU Housing and Dining Services where I was in charge of creating brochures, postcards, posters for prospective students and students living on and off campus.</p>
      </div>
      <div className="slide_wrapper">
        <Slideshow /> 
      </div>

      <div className="next_page_btn">
        <p>next one</p>
      </div>
    </Layout>
  </>
)

export default EIUhousing;
