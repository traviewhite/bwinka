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
            Hello,<br/>
            I'm Brooke Winka!<br/>
          </h1>
          <p>I'm a Graphic Designer and Illustrator who loves creating designs for people to enjoy.</p>
        </div>
      </main>
      
    </Layout>
  )
}

export default Home