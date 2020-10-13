import Head from 'next/head'
import Layout from '../components/Layout'
import { Gallery } from '../components/Gallery'

const mainstyle = { overflow: `hidden` };

export const Illustration = () => (
    <>
      <Head>
        <title>Brooke Winka</title>
      </Head>
      
      <Layout>
        <main style={mainstyle}>
          <div className="gallerywrapper">
            <Gallery />
          </div>          
        </main>
      </Layout>
    </>
)
export default Illustration
