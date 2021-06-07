import React, { useState,useEffect } from 'react';

import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router'

// helper
import Axios from '../../../helpers/axiosConfig'

// elements
import BreadCrumb from '../../../components/elements/breadcrumb'

// partials
import ProductDetailDescription from '../../../components/partials/product/modules/productDetailDescription'
import ImageGallery from '../../../components/partials/product/modules/imageGallery'

// elements
import Product from '../../../components/elements/product/productHome';
import Heading from '../../../components/elements/heading';

const ProductsDetail = () => {
    const {t} = useTranslation("product")
    const router = useRouter()
    const { category,id } = router.query

    const [data,setData] = useState(null)
    const [error,setError] = useState(null)

    useEffect(() => {
        Axios.get(`/products/${id}`)
        .then(response => {
            const {data,status,message} = response.data
            if(status){
                setData(data)
            }else{
                setError(message)
            }
        })
        .catch(error => {
            setError(error.message)
        })      
    },[]);

    const pathBreadCumb = [{
        'path' : '/products',
        'name' : `${t("Products")}`
    },{
        'path' : `/products/${category}`,
        'name' : t(category)
    },{
        'path' : `/products/${category}/${id}`,
        'name' : `${data && data.product.title}`
    }]

    return (
        <>
            {
                data ?
                <>
                    <div className="product-detail">
                        <div className="container-fluid px-5">
                            <BreadCrumb path={pathBreadCumb} />
                        </div>
                        <section className="row px-5 mx-0">
                            <ImageGallery t={t} data={data.product.images} />
                            <div className="col-12 col-md-7 desc">
                                <ProductDetailDescription 
                                    t={t} 
                                    data={data.product} />
                            </div>
                        </section>
                    </div>    
                    <Heading title={t("Related Products")} />  
                    <div className="row mx-0 px-0">
                    {
                        data.related_product.map((data,index) => (
                            <Product 
                                t={t}
                                data={data}
                                index={index}
                                key={index}
                            />
                        ))
                    }                
                    </div>
                </>
                :
                error ?
                <p className="text-center">{error}</p> : 
                <div className="loader mt-5"></div>

            }  
        </>
    )
}

export default ProductsDetail