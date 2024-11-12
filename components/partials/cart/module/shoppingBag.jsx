import Link from 'next/link'

import {MeasuringTape} from '../../../elements/icon'

const ShoppingBag = ({t}) => {
    return (
        <div className="shopping-bag">
            <div className="container pt-4">
                <p className="head">{t("Detail Shopping Bag")}</p>
                <div className="product">
                    <div className="d-flex flex-row justify-content-between">
                        <p className="title">Tailored Shirt</p>
                        <p className="title">$ 1000000</p>
                    </div>
                    <div className="sub-product d-flex flex-row justify-content-between">
                        <p className="title">Tailored Shirt</p>
                        <p className="title">$ 0,00</p>
                    </div>
                    <div className="sub-product d-flex flex-row justify-content-between">
                        <p className="title">Tailored Shirt</p>
                        <p className="title">$ 0,00</p>
                    </div>

                </div>
                <div className="product">
                    <div className="d-flex flex-row justify-content-between">
                        <p className="title">Tailored Shirt</p>
                        <p className="title">$ 0,00</p>
                    </div>
                    <div className="sub-product d-flex flex-row justify-content-between">
                        <p className="title">Tailored Shirt</p>
                        <p className="title">$ 0,00</p>
                    </div>
                    <div className="sub-product d-flex flex-row justify-content-between">
                        <p className="title">Tailored Shirt</p>
                        <p className="title">$ 0,00</p>
                    </div>

                </div>                
            </div>
            <hr />
            <div className="total-price">
                <div className="container">
                    <div className="d-flex flex-row justify-content-between">
                        <p className="title">Tailored Shirt</p>
                        <p className="title">$ 0,00</p>
                    </div>   
                    <Link href="/products/cart/order" >  
                    <a className="btn btn-primary btn-lg w-100"><MeasuringTape /><span className="ml-4">{t("Measurements")}</span></a>                               
                    </Link>  
                </div>
            </div>
        </div>
    )
}

export default  ShoppingBag;