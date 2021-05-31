import Image from 'next/image'

// elements
import {Stock} from '../icon'

// helpers
import NumberFormat from '../../../helpers/numberFormat'

const Product = ({t,data}) => {
    return(
        <>
            <div className="product col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                <div className="mt-5 d-flex flex-column">
                    <div className="container-img">
                        <Image
                            width={332}
                            height={430} 
                            objectFit="fill"
                            src={data.image} 
                            alt="laxmi" />
                        <div className="stock d-flex align-items-center justify-content-center">
                            <span><Stock /></span> <h1> {t("common:Stock")} : 5</h1>
                        </div>                              
                    </div>
                    <p className="title">{data.title}</p>
                    <p className="desc">{data.currency} {NumberFormat(data.price)}</p>                     
                </div>
            </div>
        </>
    )
}

export default Product;