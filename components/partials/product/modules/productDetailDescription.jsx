import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {AddShoppingCart,Edit} from '../../../elements/icon';

// helpers
import NumberFormat from '../../../../helpers/numberFormat'

const ProductDetailDescription = ({t,data,category}) => {
    const router = useRouter()
    function addToCart(){
        router.push({
            pathname: '/products/cart',
            query: { data: JSON.stringify(data) },
        });
    }
    return (
        <>
            <div className="d-flex justify-content-between">
                <div>
                    <p className="category">{data.category}</p>
                    <p className="title">{data.title}</p>
                </div>
                <div className="price">
                    <p className="title mb-0">{t("Price")}</p>
                    <p className="value">{data.currency} {NumberFormat(data.price)}</p>
                </div>                
            </div>
            <div className="d-flex flex-row justify-content-between button-container">
                <div className="d-flex align-items-end button-container">
                    {/* <Link href='/products/cart'>  */}
                        <a onClick = {()=>addToCart()}
                            disabled={data.stocks < 1}
                            className="btn btn-primary btn-lg ms-0"><AddShoppingCart /> {t("ADD TO CHART")}</a>
                    {/* </Link> */}
                    <Link href={`/custom/${category}`} >
                        <a 
                            disabled={data.stocks < 1}
                            className="btn btn-light btn-lg"><Edit /> {t("CUSTOMIZE")}</a>
                    </Link>
                </div>
            </div>            
            <div className="accordion" id="accordionDesctiption">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="descriptionAccordion">
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
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="descriptionAccordion" data-bs-parent="#accordionDesctiption">
                    <div className="accordion-body">
                        {data.description}
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="aboutAccordion">
                    <button 
                        className="accordion-button collapsed" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseTwo" 
                        aria-expanded="false" 
                        aria-controls="collapseTwo">
                        {t("About This Garment")}
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="aboutAccordion" data-bs-parent="#accordionDesctiption">
                        <div className="accordion-body">
                            {data.about_this_garment}                       
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="fabricAccordion">
                    <button 
                        className="accordion-button collapsed" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseThree" 
                        aria-expanded="false" 
                        aria-controls="collapseThree">
                        {t("Fabrics Detail & Care")}
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="fabricAccordion" data-bs-parent="#accordionDesctiption">
                    <div className="accordion-body">
                        <div className="row d-flex align-items-center">
                            <div className="col-2">
                                <Image
                                    width={104}
                                    height={106} 
                                    src={data.fabric_detail.file}
                                    alt="laxmi" />    
                            </div>
                            <div className="col-10">
                                <h5><span className="fw-bold">Perkins </span>, Merino Wool</h5>
                                <p className="mb-0">100% Wool</p>
                                <p className="mb-0">Premium, 230gr/m2, Year round, Light Grey</p>
                            </div>
                        </div>                   
                        <p>{data.fabric_detail.information.description}</p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="shippingAccordion">
                    <button 
                        className="accordion-button collapsed" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseFour" 
                        aria-expanded="false" 
                        aria-controls="collapseFour">
                        {t("Shipping Info")}
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="shippingAccordion" data-bs-parent="#accordionDesctiption">
                        <div className="accordion-body">
                            {data.description}                       
                        </div>
                    </div>
                </div>            
                <div className="accordion-item">
                    <h2 className="accordion-header" id="measureAccordion">
                    <button 
                        className="accordion-button collapsed" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseFive" 
                        aria-expanded="false" 
                        aria-controls="collapseFive">
                        {t("How To Get Measured")}
                    </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="measureAccordion" data-bs-parent="#accordionDesctiption">
                        <div className="accordion-body">
                            <p>{data.description}</p>     
                            <iframe 
                                width="357" 
                                height="230" 
                                src="https://www.youtube.com/embed/xaLtcjKBwz4">
                            </iframe>                                        
                        </div>
                    </div>
                </div>            
            
            </div>          
        </>
    )
}

export default ProductDetailDescription ;