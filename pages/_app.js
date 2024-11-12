import '../styles/index.css'
import { withRouter } from 'next/router'
import {
  BrowserView,
  MobileView
} from "react-device-detect";

// REDUX
import { Provider } from 'react-redux'
import {store,persistor} from '../stores/store'

// REDUX-PERSIST
import { PersistGate } from 'redux-persist/integration/react'

// elements
import {ChatBubble} from '../components/elements/icon';

// Layout
import Layout from '../components/layouts/layout';

// Shared
import Header from '../components/shared/header/headerDefault';
import HeaderMobileDefault from '../components/shared/header/headerMobileDefault';
import Footer from '../components/shared/footer/footerDefault2';
import Chat from '../components/shared/chat';
import ChatHome from '../components/shared/chat/chatHome';

function MyApp({ router, Component, pageProps }) {
  const pathName = router.pathname
  return (
        <Layout>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <BrowserView>
              {/* {
                !pathName.includes('custom') ? 
                <Header /> : null
              } */}
              <Header />
              </BrowserView>
              <MobileView>
                <HeaderMobileDefault />
              </MobileView>

                {/* Rendered Page */}
                <Component {...pageProps} />
                <ChatBubble />
                <MobileView>
                  <span className="chat">
                    <ChatBubble />
                  </span>
                </MobileView>
              <BrowserView>
              {
                pathName === '/' ? 
                <ChatHome /> : <Chat />
              }
              {
                !pathName.includes('login') && !pathName.includes('custom') ? 
                <Footer /> : null
              }
              </BrowserView>
            </PersistGate>      
          </Provider>
        </Layout>            
  ) 
}

export default withRouter(MyApp)
