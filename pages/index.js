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
          <h1 className="">
            Hello, I'm Brooke Winka!<br></br>
            I love creating beautiful designs
            for people to enjoy.
          </h1>
          <p className="">
            I'm a Graphic Designer who adores illustration,<br></br>
            and is actively learing UX Design!
          </p>
        </div>
      </main>
      
    </Layout>
  )
}

export default Home