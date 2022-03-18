import Layout from '../comps/Layout';
import '../styles/globals.css';

import '@fortawesome/fontawesome-free/css/all.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />

    </Layout>
  )
}

export default MyApp
