import useTranslation from 'next-translate/useTranslation';
import {
  TabletView,
  BrowserView,
  MobileView
} from "react-device-detect";

// elements
import {ModalPromotion} from '../components/elements/modal'
import Banner from '../components/elements/banner'
import BannerMobile from '../components/elements/bannerMobile'

// partials
import BannerSmall from '../components/partials/home/bannerSmall'
import BannerSmallMobile from '../components/partials/home/bannerSmallMobile'
import HowItWorks from '../components/partials/home/howItWorks'
import SomeProduct from '../components/partials/home/someProduct'
import OutProduct from '../components/partials/home/ourProduct'
import OutProductMobile from '../components/partials/home/ourProductMobile'
import Testimonies from '../components/partials/home/testimonies'
import Clients from '../components/partials/home/clients'

export default function Home() {
  const {t} = useTranslation("home")

  return (
    <>
      <BrowserView>
        <div className="home" >
            <Banner t={t}/>
            <HowItWorks t={t} />
            {/* <SomeProduct t={t} /> */}
            <OutProduct t={t} />
            <BannerSmall t={t} />
            <Testimonies t={t} />
            <Clients t={t} />
            {/* <SomeFabric t={t} /> */}
            <ModalPromotion />
        </div>      
      </BrowserView>
      <MobileView>
        <div className="home" >
          <BannerMobile t={t}/>
          <OutProductMobile t={t} />
          <BannerSmallMobile t={t} />
          <Testimonies t={t} />
          <Clients t={t} />
        </div>
      </MobileView>
    </>
  )
}
