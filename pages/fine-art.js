import Head from 'next/head'
import Layout from '../components/Layout'
import { FineArt } from '../components/Gallery'

const mainstyle = { overflow: `hidden` };

const fineArt = () => (
  <>
    <Head>
      <title>Brooke Winka</title>
    </Head>
    
    <Layout>
      <main style={mainstyle}>
        <div className="gallerywrapper">
          <FineArt />
        </div>          
      </main>
    </Layout>
  </>
)
  
export default fineArt;