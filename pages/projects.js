import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { ClientName } from 'components/Layout'
import { motion } from 'framer-motion'
import { fadeIn, fadeInLeft, stagger } from 'components/MotionA'
import { fetchEntriesProjectPost } from 'utils/contentfulPosts'

export default function Projects ({ post }) {
  const projectPost = post.map((p) => 
    <Link href="/projects/[slug]" as={`/projects/${p.fields.slug}`} key={p.sys.id}>
      <motion.li 
        id={p.fields.slug}
        className="item"
        variants={fadeIn}
      >
        <a>
          <Image src={p.fields.image[0].url} alt={p.fields.title} unsized layout="fill" />
        </a>
      </motion.li>
    </Link>
  )

  return (
    <>
      <Head>
        <title>Projects | {ClientName}</title>
      </Head>

      <Layout>
        <main>
          <motion.ul 
            exit={{ opacity: 0 }} initial='initial' animate='animate' variants={stagger} 
            className="showcase"
          >
            {projectPost}
          </motion.ul>
        </main>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  let data = await fetchEntriesProjectPost()

  return {
    props: {
      post: await data ?? null,
    },
    revalidate: 1,
  }
}