import Head from 'next/head'
import Layout, { ClientName } from 'components/Layout'
import GalleryGridIndex from 'components/GalleryGridIndex'
import { client } from 'utils/contentfulPosts'

export default function Home ({ post }) {
  return (
    <Layout>
      <Head>
        <title>{ClientName}</title>
      </Head>
      <main>
        <GalleryGridIndex post={post} />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'galleryPost',
  })

  return {
    props: {
      post: await data.items ?? null,
    },
    revalidate: 1,
  }
}