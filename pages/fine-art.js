import Head from 'next/head'
import Layout from '../components/Layout'
import { FineArt } from '../components/Gallery'

const mainstyle = { overflow: `hidden` };

const fineArt = () => (
  <>
    <Head>
      <title>Fine Art | Brooke Winka</title>
    </Head>
    
    <Layout>
        <div style={mainstyle} className="gallerywrapper">
          <FineArt />
        </div>
    </Layout>
  </>
)
  
export default fineArt