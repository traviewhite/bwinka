import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { fadeIn, fadeInLeft, stagger } from '../components/MotionA'

const imageStyleBrand = { backgroundImage: `url(${"https://res.cloudinary.com/bwinka/image/upload/v1604518831/design/btn_covers/personal_btn_new_l2hjug.png"})` };
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
        <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate' variants={stagger} className="showcase">
          <Link href="/design/personal-brand-identity">
            <motion.div variants={fadeIn} style={imageStyleBrand} className="item" >
              <motion.h2 variants={fadeInLeft}>PERSONAL<br/>IDENTITY<br/>DESIGN</motion.h2>
            </motion.div>
          </Link>
          <Link href="/design/eiu-housing-dining">
            <motion.div variants={fadeIn} style={imageStyleEIU} className="item">
              <motion.h2 variants={fadeInLeft}>EIU HOUSING<br/>& DINING SERVICES</motion.h2>
            </motion.div>
          </Link>
          <Link href="/design/mac-daddy-identity">
            <motion.div variants={fadeIn} style={imageStyleMacDad} className="item">
              <motion.h2 variants={fadeInLeft}>MAC DADDY'S<br/>IDENTITY + USER<br/>INTERFACE</motion.h2>
            </motion.div>
          </Link>
          <Link href="/design/blueroom-magazine">
            <motion.div variants={fadeIn} style={imageStyleBlueroom} className="item">
              <motion.h2 variants={fadeInLeft}>BLUEROOM<br/>MAGAZINE</motion.h2>
            </motion.div>
          </Link>
          <Link href="/design/portland-travel-guide">
            <motion.div variants={fadeIn} style={imageStylePortland} className="item">
              <motion.h2 variants={fadeInLeft}>PORTLAND, OREGON<br/>TRAVEL GUIDE</motion.h2>
            </motion.div>
          </Link>
          <Link href="/design/posters-lettering">
            <motion.div variants={fadeIn} style={imageStylePosters} className="item">
              <motion.h2 variants={fadeInLeft}>POSTERS +<br/>LETTERING</motion.h2>
            </motion.div>
          </Link>
        </motion.div>
      </main>
    </Layout>
  </>
);

export default Design
