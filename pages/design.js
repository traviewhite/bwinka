import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'

const imageStyle = { backgroundImage: `url(${"personalwebbutton.png"})` };
const imageStyle2 = { backgroundImage: `url(${"blueroom-button.png"})` };



const Design = () => (
    <>
      <Head>
        <title>Brooke Winka</title>
      </Head>
      
      <Layout>
        <main>
          <div className="gallery">
            <Link href="/design/personal-brand-identity">
              <div style={imageStyle} className="item" ><h2>PERSONAL<br/>IDENTITY<br/>DESIGN</h2></div>
            </Link>
            <Link href="/">
              <div className="item"><h2>EIU HOUSING<br/>& DINING SERVICES</h2></div>
            </Link>
            <Link href="/">
              <div className="item"><h2>MAC DADDY'S<br/>IDENTITY + USER<br/>INTERFACE</h2></div>
            </Link>
            <Link href="/">            
              <div className="item"><h2>2020<br/>ILLUSTRATED<br/>CALENDAR</h2></div>
            </Link>
            <Link href="/">
              <div style={imageStyle2} className="item"><h2>BLUEROOM<br/>MAGAZINE</h2></div>
            </Link>
            <Link href="/">
              <div className="item"><h2>PORTLAND, OREGON<br/>TRAVEL GUIDE</h2></div>
            </Link>
            <Link href="/">
              <div className="item"><h2>POSTERS +<br/>LETTERING</h2></div>
            </Link>
          </div>
        </main>
      </Layout>
    </>
  );

  export default Design;
