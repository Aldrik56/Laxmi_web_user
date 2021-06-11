import Image from 'next/image'
import Link from 'next/link'
import {AddShoppingCart,Edit} from '../../../elements/icon';

// helpers
import NumberFormat from '../../../../helpers/numberFormat'

const ProductDetailDescription = ({t,data}) => {
    return (
        <>
            <p className="category">{data.category}</p>
            <p className="title">{data.title}</p>
            <div className="accordion" id="accordionDesctiption">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button 
                        className="accordion-button" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseOne" 
                        aria-expanded="true" 
                        aria-controls="collapseOne">
                        {t("Description")}
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionDesctiption">
                    <div className="accordion-body">
                        {data.description}
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button 
                        className="accordion-button collapsed" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseTwo" 
                        aria-expanded="false" 
                        aria-controls="collapseTwo">
                        {t("Size Chart")}
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionDesctiption">
                    <div className="accordion-body">
                        <Image
                            width={592}
                            height={296} 
                            src="/img/product_gallery/sizing.png"
                            alt="laxmi" />                       
                    </div>
                    </div>
                </div>
            </div> 
            <div className="d-flex flex-row justify-content-between button-container">
                <div className="price">
                    <p className="title">{t("Price")}</p>
                    <p className="value">{data.currency} {NumberFormat(data.price)}</p>
                </div>
                <div className="d-flex align-items-end button-container">
                    <Link href={'/products/cart'} > 
                        <a 
                            disabled={data.stocks < 1}
                            className="btn btn-primary btn-lg"><AddShoppingCart /> {t("ADD TO CHART")}</a>
                    </Link>
                    <Link href={'/products/cart'} >
                        <a 
                            disabled={data.stocks < 1}
                            className="btn btn-light btn-lg"><Edit /> {t("CUSTOMIZE")}</a>
                    </Link>
                </div>
            </div>         
        </>
    )
}

export default ProductDetailDescription ;