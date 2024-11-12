import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

// elements
import Heading from '../../components/elements/heading';
import SomeProduct from '../../components/partials/home/someProduct';
import Testimonies from '../../components/partials/home/testimonies';

const ProductList = () => {
    const {t} = useTranslation("home")
    const router = useRouter()
    const { category } = router.query

    return(
        <div className="product-portal">
            <section className="container-fluid px-5">
                <div className="row">
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                        <Image
                            width={227}
                            height={590}
                            src="/img/portal_custom/model.png" 
                            alt="laxmi" />                        
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column align-items-center ">
                        <p className="title">{t("product:custom")} {t(`product:${category}`)}</p>
                        <div className="d-flex d-flex align-items-center">
                            <div className="price">
                                <p>From</p>
                                <p>$0,00</p>
                            </div>
                            <div>
                                <Link href={`/custom/${category}`} >
                                    <a className="btn btn-primary rounded-pill px-5 py-2">
                                        {t(`common:DESIGN YOUR`)} {t(`product:${category}`)}
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <p className="sub-title">{t("product:Made to Measure")} {t(`product:${category}`)}</p>
                        <p>Choose a custom dress shirt designed by you. Make a statement with a made to measure shirt perfect for any occasions, whether it's business or casual we will tailor the perfect men's dress shirt for you. Buy the best custom dress shirt online.</p>
                        <p className="sub-title">{t("Our Clients")}</p>
                    </div>                
                </div>
                <Heading title={t('How It Works')} />
                <div className="d-flex justify-content-center my-4">
                    <iframe 
                        width="667" 
                        height="426" 
                        src="https://www.youtube.com/embed/xaLtcjKBwz4">
                    </iframe>                                    
                </div>   
                <SomeProduct t={t} />   
                <Testimonies t={t} />          
            </section>
        </div>
    )
}

export default ProductList ;