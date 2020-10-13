import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'

const imageStyle = { backgroundImage: `url(${"https://res.cloudinary.com/bwinka/image/upload/v1602613659/design/btn_covers/personaldesignbtn_zgj9x4.png"})` };
const imageStyle2 = { backgroundImage: `url(${"https://res.cloudinary.com/bwinka/image/upload/v1602613659/design/btn_covers/eiubtn_tjboqa.png"})` };
const imageStyle3 = { backgroundImage: `url(${"https://res.cloudinary.com/bwinka/image/upload/v1602613660/design/btn_covers/macdaddybtn_c2qxi2.png"})` };
const imageStyle4 = { backgroundImage: `url(${"https://res.cloudinary.com/bwinka/image/upload/v1602613659/design/btn_covers/calendar2020btn_z11cwx.png"})` };
const imageStyle5 = { backgroundImage: `url(${"https://res.cloudinary.com/bwinka/image/upload/v1602613659/design/btn_covers/blueroombtn_weu4qi.png"})` };
const imageStyle6 = { backgroundImage: `url(${"https://res.cloudinary.com/bwinka/image/upload/v1602613659/design/btn_covers/portlandbtn_nv6dgx.png"})` };
const imageStyle7 = { backgroundImage: `url(${"https://res.cloudinary.com/bwinka/image/upload/v1602613660/design/btn_covers/posterbtn_vwtxzw.png"})` };



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
              <div style={imageStyle2} className="item"><h2>EIU HOUSING<br/>& DINING SERVICES</h2></div>
            </Link>
            <Link href="/">
              <div style={imageStyle3} className="item"><h2>MAC DADDY'S<br/>IDENTITY + USER<br/>INTERFACE</h2></div>
            </Link>
            <Link href="/">
              <div style={imageStyle5} className="item"><h2>BLUEROOM<br/>MAGAZINE</h2></div>
            </Link>
            <Link href="/">
              <div style={imageStyle6} className="item"><h2>PORTLAND, OREGON<br/>TRAVEL GUIDE</h2></div>
            </Link>
            <Link href="/">
              <div style={imageStyle7} className="item"><h2>POSTERS +<br/>LETTERING</h2></div>
            </Link>
          </div>
        </main>
      </Layout>
    </>
  );

  export default Design
