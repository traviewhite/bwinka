import Layout from '../components/Layout'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout>
      <Head>
          <title>HOME Brooke Winka</title>
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