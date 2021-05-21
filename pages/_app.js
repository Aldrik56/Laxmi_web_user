import '../styles/index.css'

// Layout
import Layout from '../components/layouts/layout';

// Shared
import Header from '../components/shared/header/headerDefault';


function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Header />
    <Component {...pageProps} />
  </Layout>
  ) 
}

export default MyApp
