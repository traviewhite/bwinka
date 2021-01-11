import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout, { ClientName } from 'components/Layout'
import { fadeIn, fadeInLeft, stagger } from 'components/MotionA'
import useScript from 'components/useScript'
import { motion } from 'framer-motion'
import { client } from 'utils/contentfulPosts'
import ProjectNav from 'components/ProjectNav'

export default function ProjectData({ post, list }) {
  useScript('https://res.cloudinary.com/bwinka/raw/upload/v1604523949/dragscroll_dsqotx.js')

  const router = useRouter()
  if (!router.isFallback && !post) {
    return <p className='error-404'>404!</p>
  }

  return (
    <Layout>
      {router.isFallback ? (
        <p className='loading'>Loading...</p>
      ) : (
        <>
          <Head>
            <title>{post.fields.title} | {ClientName}</title>
            <script src='https://res.cloudinary.com/bwinka/raw/upload/v1604523949/dragscroll_dsqotx.js' />
          </Head>

          <motion.div className='showcase-header'>
            <Image key={post.fields.image[0].url} src={post.fields.image[0].url} alt={post.fields.title} layout="fill" quality={100} unsized />
          </motion.div>

          <motion.div 
            exit={{ opacity: 0 }} initial='initial' animate='animate' variants={stagger} 
            className='project-head'
          >
            <motion.div
              variants={fadeIn} 
              className='project-overview'
            >
              <h4>PROJECT OVERVIEW</h4>
              <h1>{post.fields.title}</h1>
              <hr/>
              <p>{post.fields.description}</p>
            </motion.div>
          </motion.div>

          <hr/>

          <div className='slide dragscroll'>
            { Object.entries(post.fields.image).map((p) => 
              <Image key={p[1].url} src={p[1].url} alt={p.title} unsized />
            )}
          </div>
        </>
      )}
      <ProjectNav list={list} />
    </Layout>
  )
}

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: 'projectPost',
  })
  // console.log(data.items[0].fields.slug)
  return {
    paths: data.items.fields?.map(({ slug }) => `/projects/${slug}`) ?? [],
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: 'projectPost',
    'fields.slug': params.slug,
  })
  let dataOther = await client.getEntries({
    content_type: 'projectPost',
  })
  // console.log(`Building page: ${data.items[0].fields.slug}`)
  return {
    props: {
      post: await data.items[0] ?? null,
      list: await dataOther.items ?? null
    },
    revalidate: 1,
  }
}