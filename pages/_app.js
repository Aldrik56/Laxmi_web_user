import '../styles/index.css'
import { withRouter } from 'next/router'

// Layout
import Layout from '../components/layouts/layout';

// Shared
import Header from '../components/shared/header/headerDefault';
import Footer from '../components/shared/footer/footerDefault';


function MyApp({ router, Component, pageProps }) {
  const pathName = router.pathname
  return (
  <Layout>
    <Header />
    <Component {...pageProps} />
    {
      !pathName.includes('login') ? 
      <Footer /> : null
    }
  </Layout>
  ) 
}

export default withRouter(MyApp)
