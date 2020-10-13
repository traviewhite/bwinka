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
            <img src="https://res.cloudinary.com/bwinka/image/upload/v1602541155/brooke_and_maggie_w7ust5.png" alt="Brooke Winka and Maggie the dog"/>
            <div className="description">
              <h2>
                <span>Hello!</span><br></br>
                My name is Brooke Winka.
              </h2>

              <p>I’m a 23 year old designer currently living in Illinois. I got my BFA in Graphic Design from Eastern Illinois University. I went on at EIU to get my MA in Fine Arts with a focus in painting.</p>
              <p>Personally, I love a lot of things– like most people. Some that stand out: My dogs, the outdoors, mushroom ravioli, yoga, scary novels, my bullet journal, and being present in this incredible life we find ourselves in!</p>
              <p>Wanna make something together? Wanna be friends? Regardless, I can’t wait to hear from you!</p>
              <div className="aboutbtnwrapper">
                <div className="aboutbtn">
                  <a href="mailto:winkabrooke@gmail.com?Subject=Whats%20up!">EMAIL ME</a>
                </div>
                <div className="aboutbtn">
                  <a href="#">PORTFOLIO</a>
                </div>
              </div>
            </div>

          </div>
          
          <div className="socials">
            <Link href="https://www.instagram.com/btwinka">
              <a>
                <img src="../icons/instagram.svg" />
              </a>
            </Link>
            <Link href="https://www.behance.net/winkabrook63b6">
              <a>
                <img style={{width: '29px'}} src="../icons/behance.svg" />
              </a>
            </Link>
            <Link href="https://dribbble.com/btwinka">
              <a>
               <img src="../icons/dribbble.svg" />
              </a>
            </Link>
            <Link href="https://linkedin.com/in/brooke-winka-972b191b6">
              <a>
                <img style={{width: '24px'}} src="../icons/linkedin.svg" />
              </a>
            </Link>
            <Link href="https://twitter.com/btwinka">
              <a>
                <img style={{width: '26px'}} src="../icons/twitter.svg" />
              </a>
            </Link>
          </div>
          
        </main>
      </Layout>
    </>
  )
export default About
