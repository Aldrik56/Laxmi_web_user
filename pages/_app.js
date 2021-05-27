import '../styles/index.css'
import { withRouter } from 'next/router'

// REDUX
import { Provider } from 'react-redux'
import {store,persistor} from '../stores/store'

// REDUX-PERSIST
import { PersistGate } from 'redux-persist/integration/react'

// Layout
import Layout from '../components/layouts/layout';

// Shared
import Header from '../components/shared/header/headerDefault';
import Footer from '../components/shared/footer/footerDefault';


function MyApp({ router, Component, pageProps }) {
  const pathName = router.pathname
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Header />
          <Component {...pageProps} />
          {
            !pathName.includes('login') ? 
            <Footer /> : null
          }
        </Layout>            
      </PersistGate>      
    </Provider>

  ) 
}

export default withRouter(MyApp)
