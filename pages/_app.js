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
import Footer from '../components/shared/footer/footerDefault2';
import Chat from '../components/shared/chat';
import ChatHome from '../components/shared/chat/chatHome';

function MyApp({ router, Component, pageProps }) {
  const pathName = router.pathname
  return (
        <Layout>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              {
                !pathName.includes('custom') ? 
                <Header /> : null
              }
              <Component {...pageProps} />
              {
                pathName === '/' ? 
                <ChatHome /> : <Chat />
              }
              {
                !pathName.includes('login') && !pathName.includes('custom') ? 
                <Footer /> : null
              }
            </PersistGate>      
          </Provider>
        </Layout>            
  ) 
}

export default withRouter(MyApp)
