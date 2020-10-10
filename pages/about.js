import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

const About = () => (
    <>
      <Head>
        <title>Brooke Winka</title>
      </Head>
      
      <Layout>
        <main>

          <div className="aboutwrapper">
            <img src="../brooke_and_maggie.png" alt="Brooke Winka and Maggie the dog"/>
            <div className="description">
              <h2>
                <span>Hello!</span><br></br>
                My name is Brooke Winka.
              </h2>

              <p>I’m a 23 year old designer currently living in Illinois. I got my BFA in Graphic Design from Eastern Illinois University. I went on at EIU to get my MA in Fine Arts with a focus in painting.</p>
              <p>Personally, I love a lot of things– like most people. Some that stand out: My dogs, the outdoors, mushroom ravioli, yoga, scary novels, my bullet journal, and being present in this incredible life we find ourselves in!</p>
              <p>Wanna make something together? Wanna be friends? Regardless, I can’t wait to hear from you!</p>
              <div className="emailbtn">
                <a>EMAIL ME BITCH</a>
              </div>
            </div>

          </div>
          
          <div className="socials">
            <Link href="/">
              <a>
                🤷‍♂️
              </a>
            </Link>
            <Link href="/">
              <a>
                🙅‍♂️
              </a>
            </Link>
            <Link href="/">
              <a>
                🤷‍♀️
              </a>
            </Link>
            <Link href="/">
              <a>
                🏋️‍♂️
              </a>
            </Link>
            <Link href="/">
              <a>
                🧀
              </a>
            </Link>
          </div>
          
        </main>
      </Layout>
    </>
  )
export default About
