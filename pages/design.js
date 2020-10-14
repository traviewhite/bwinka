import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'

const imageStyleBrand = { backgroundImage: `url(${"https://res.cloudinary.com/bwinka/image/upload/v1602613659/design/btn_covers/personaldesignbtn_zgj9x4.png"})` };
const imageStyleEIU = { backgroundImage: `url(${"https://res.cloudinary.com/bwinka/image/upload/v1602613659/design/btn_covers/eiubtn_tjboqa.png"})` };
const imageStyleMacDad = { backgroundImage: `url(${"https://res.cloudinary.com/bwinka/image/upload/v1602613660/design/btn_covers/macdaddybtn_c2qxi2.png"})` };
const imageStyleBlueroom = { backgroundImage: `url(${"https://res.cloudinary.com/bwinka/image/upload/v1602613659/design/btn_covers/blueroombtn_weu4qi.png"})` };
const imageStylePortland = { backgroundImage: `url(${"https://res.cloudinary.com/bwinka/image/upload/v1602613659/design/btn_covers/portlandbtn_nv6dgx.png"})` };
const imageStylePosters = { backgroundImage: `url(${"https://res.cloudinary.com/bwinka/image/upload/v1602613660/design/btn_covers/posterbtn_vwtxzw.png"})` };

const Design = () => (
  <>
    <Head>
      <title>Design | Brooke Winka</title>
    </Head>

    <Layout>
      <main>
        <div className="showcase">
          <Link href="/design/personal-brand-identity">
            <div style={imageStyleBrand} className="item" ><h2>PERSONAL<br/>IDENTITY<br/>DESIGN</h2></div>
          </Link>
          <Link href="/design/eiu-housing-dining">
            <div style={imageStyleEIU} className="item"><h2>EIU HOUSING<br/>& DINING SERVICES</h2></div>
          </Link>
          <Link href="/design/mac-daddy-identity">
            <div style={imageStyleMacDad} className="item"><h2>MAC DADDY'S<br/>IDENTITY + USER<br/>INTERFACE</h2></div>
          </Link>
          <Link href="/design/blueroom-magazine">
            <div style={imageStyleBlueroom} className="item"><h2>BLUEROOM<br/>MAGAZINE</h2></div>
          </Link>
          <Link href="/design/portland-travel-guide">
            <div style={imageStylePortland} className="item"><h2>PORTLAND, OREGON<br/>TRAVEL GUIDE</h2></div>
          </Link>
          <Link href="/design/posters-lettering">
            <div style={imageStylePosters} className="item"><h2>POSTERS +<br/>LETTERING</h2></div>
          </Link>
        </div>
      </main>
    </Layout>
  </>
)

export default Design
