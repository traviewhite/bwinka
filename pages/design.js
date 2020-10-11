import Head from 'next/head'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Example from '../components/Example'

import "../styles/test.module.scss"

const Design = () => (
    <>
      <Head>
        <title>Brooke Winka</title>
      </Head>
      
      <Layout>
        <main>
          <div className="gallery">
            <Example />
            <div className="item2"><h2>PERSONAL<br/>IDENTITY<br/>DESIGN</h2></div>
            <div hidden className="scrolltag"><p>SCROLL DOWN ▶️</p></div>
            <div className="item2"><h2>EIU HOUSING<br/>& DINING SERVICES</h2></div>
            
            <div className="item2"><h2>EIU HOUSING<br/>& DINING SERVICES</h2></div>
            
            <div className="item2"><h2>EIU HOUSING<br/>& DINING SERVICES</h2></div>
            
            <div className="item2"><h2>EIU HOUSING<br/>& DINING SERVICES</h2></div>
            
          </div>
        </main>
      </Layout>
    </>
  );

  export default Design;
