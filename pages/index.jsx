import useTranslation from 'next-translate/useTranslation';

// elements
import {ModalPromotion} from '../components/elements/modal'
import Banner from '../components/elements/banner'

// partials
import BannerSmall from '../components/partials/home/bannerSmall'
import HowItWorks from '../components/partials/home/howItWorks'
import SomeProduct from '../components/partials/home/someProduct'
import Testimonies from '../components/partials/home/testimonies'

export default function Home() {
  const {t} = useTranslation("home")

  return (
    <div className="home" >{console.log(document.cookie)}
        <Banner t={t}/>
        <BannerSmall t={t} />
        <HowItWorks t={t} />
        <SomeProduct t={t} />
        <Testimonies t={t} />
        {/* <SomeFabric t={t} /> */}
        <ModalPromotion />
    </div>
  )
}
