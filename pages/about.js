import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

const About = () => (
  <>
    <Head>
      <title>About | Brooke Winka</title>
    </Head>
    
    <Layout>
      <main>
        <div className="aboutwrapper">
          <img src="/brooke_headshot.jpg" alt="Brooke Winka and Maggie the dog"/>
          <div className="description">
            <h2>
              I'm Brooke Winka!
            </h2>
            <p>
              I’m a 23 year old Graphic Designer and Illustrator. I got my BFA in Graphic Design from Eastern Illinois University. After that, I decided to spend a year to further explore my studio art and went on at EIU to get my MA in Fine Arts with a focus in oil painting.
            </p>
            <p>
              I love a lot of things– like most people. Some that stand out: My dogs, all the outdoors stuff (hiking, kayaking, camping), yoga, mushroom ravioli, scary novels, my bullet journal, and being as present as I can be in this incredible life we find ourselves in.
            </p>
            <div className="aboutbtnwrapper">
              <div className="aboutbtn">
                <a href="mailto:winkabrooke@gmail.com?Subject=Whats%20up!">EMAIL</a>
              </div>
              <div className="aboutbtn">
                <Link href="/2020_Brooke-Winka-Portfolio.pdf">
                  <a>PORTFOLIO</a>
                </Link>
              </div>
              <div className="aboutbtn">
                <Link href="/2020_Brooke-Winka-Design-CV-Interactive.pdf">
                  <a>CV</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="socials">
          <Link href="https://www.instagram.com/btwinka">
            <a target="_blank">
              <img src="../icons/instagram.svg" />
            </a>
          </Link>
          <Link href="https://www.behance.net/winkabrook63b6">
            <a target="_blank">
              <img style={{width: '29px'}} src="../icons/behance.svg" />
            </a>
          </Link>
          <Link href="https://dribbble.com/btwinka">
            <a target="_blank">
              <img src="../icons/dribbble.svg" />
            </a>
          </Link>
          <Link href="https://linkedin.com/in/btwinka">
            <a target="_blank">
              <img style={{width: '24px'}} src="../icons/linkedin.svg" />
            </a>
          </Link>
          <Link href="https://twitter.com/btwinka">
            <a target="_blank">
              <img style={{width: '26px'}} src="../icons/twitter.svg" />
            </a>
          </Link>
        </div>
      </main>
    </Layout>
  </>
)

export default About