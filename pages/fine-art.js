import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import { fineartSlide } from '../components/image_data'

const fineArt = () => (
  <>
    <Head>
      <title>Fine Art | Brooke Winka</title>
    </Head>
    
    <Layout>

      <div className="slide dragscroll">
        {fineartSlide.map((imgSrc, index) => (
          <img src={imgSrc} key={index} unsized />
        ))}
      </div>
        
    </Layout>
  </>
)
  
export default fineArt