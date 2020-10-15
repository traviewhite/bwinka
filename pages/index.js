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
          <h1>
            Hi, I'm Brooke Winka!<br/>
            I'm a Graphic Designer<br/>
            and Illustrator.
          </h1>
          <p>TAKE A LOOK AROUND!</p>
        </div>
      </main>
      
    </Layout>
  )
}

export default Home