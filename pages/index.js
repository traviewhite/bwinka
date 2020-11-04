import Layout from '../components/Layout'
import Head from 'next/head'

function Home () {
  return (
    <Layout>
      <Head>
        <title>Brooke Winka</title>
        <script src="https://res.cloudinary.com/bwinka/raw/upload/v1604523949/dragscroll_dsqotx.js" />
      </Head>

      <main>
        <div className="homewrapper">
          <div className="home_logo" />
        </div>
      </main>
      
    </Layout>
  )
}

export default Home