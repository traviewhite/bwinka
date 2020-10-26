import Layout from '../components/Layout'
import Head from 'next/head'

function Home () {
  return (
    <Layout>
      <Head>
          <title>Brooke Winka</title>
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