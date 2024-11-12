import React, { useState,useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

// elements
import {Stock,Favorite,FavoriteBorder} from '../icon'

// helpers
import NumberFormat from '../../../helpers/numberFormat'

const Product = ({t,data}) => {
    const [isCart,setIsCart] = useState(data.is_cart)

    return(
        <>
            <div className="product-home col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                <div className="mt-5 d-flex flex-column">
                    <div className="container-img">
                        {
                            data.is_new ?
                            <div className="label-container">
                                <h1>{t('common:New')}</h1>
                            </div>: null
                        }                        

                        {/* <div className="cart-container" onClick={() => setIsCart(!isCart)}>
                            {
                                isCart ?
                                <Favorite />
                                 :
                                <FavoriteBorder />
                            }
                        </div> */}
                        <Image
                            width={332}
                            height={430} 
                            src={data.image} 
                            alt="laxmi" />
                        <div className="stock d-flex align-items-center justify-content-center">
                            <span><Stock /></span> <h1> {t("common:Stock")} : {data.stocks}</h1>
                        </div>                              
                    </div>
                    <Link href={`/products/${data.category}/${data._id}`}>
                        <p className="title">{data.title}</p>
                    </Link>
                    <p className="desc">{data.currency} {NumberFormat(data.price)}</p>                     
                </div>
            </div>
        </>
    )
}

export default Product;