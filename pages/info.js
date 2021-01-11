import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { ClientName } from 'components/Layout'
import { client } from 'utils/contentfulPosts'
import { motion } from 'framer-motion'
import { fadeIn, fadeInLeft, stagger } from 'components/MotionA'
import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faInstagram, faDribbble, faLinkedin, faBehance, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

export default function Info({ info }) {
  return (
    <Layout>
      <Head>
        <title>Info | {ClientName}</title>
      </Head>

      <main>
        <motion.div
          exit={{ opacity: 0 }} initial='initial' animate='animate' variants={stagger}
          className="info-wrapper"
        >

          <motion.div variants={fadeIn}>
            <Image src={info.fields.image[0].url} alt={info.fields.alt} unsized/>
          </motion.div>

          <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate' variants={stagger} className="description">
            <motion.h2 variants={fadeIn}>{info.fields.title}</motion.h2>

            <motion.div className="info-paragraph" variants={fadeIn}>
              <ReactMarkdown source={info.fields.description} />
            </motion.div>
            
          </motion.div>

        </motion.div>

        <hr className="info-divide" />

        <div className="info-btn-wrapper">
          <div className="info-btn">
            <Link href="mailto:winkabrooke@gmail.com?Subject=Whats%20up!">
              <a>Email</a>
            </Link>
          </div>
          <div style={{cursor: 'default'}}>/</div>
          <div className="info-btn">
            <Link href={info.fields.resume[0].url}>
              <a>Resume</a>
            </Link>
          </div>
        </div>

        <motion.div
          exit={{ opacity: 0 }} initial='initial' animate='animate' variants={stagger}
          className="socials"
        >
          {info && info.fields.social.map((i) => 
            <Link href={i.item.link} key={i.item.link}>
              <motion.a variants={fadeIn} href={i.item.link} target="_blank">
                <FontAwesomeIcon icon={['fab', i.item.icon]} />
              </motion.a>
            </Link>
          )}
        </motion.div>
      </main>

    </Layout>
  )
}

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'about',
  })

  return {
    props: {
      info: await data.items[0] ?? null,
    },
    revalidate: 1,
  }
}