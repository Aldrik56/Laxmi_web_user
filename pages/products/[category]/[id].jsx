import React, { useState,useEffect } from 'react';

import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router'

// REDUX
import { connect } from 'react-redux'
import {fetcAction} from '../../../stores';


// helper
// import Axios from '../../../helpers/axiosConfig'

// elements
import BreadCrumb from '../../../components/elements/breadcrumb'

// partials
import ProductDetailDescription from '../../../components/partials/product/modules/productDetailDescription'
import ImageGallery from '../../../components/partials/product/modules/imageGallery'

// elements
import Product from '../../../components/elements/product/productHome';
import Heading from '../../../components/elements/heading';

// shared
import Testimonies from '../../../components/partials/home/testimonies';
import axios from 'axios';

const ProductsDetail = ({fetcAction,fetchResult}) => {
    const {t} = useTranslation("product")
    const router = useRouter()
    const { category,id } = router.query

    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [params,setParams] = useState({
        page : 1,
        per_page : 3,
        sort_by : 'hightolower'
    })

    useEffect(() => {
        fetcAction('/products',params)
    },[category]);

    useEffect(() => {
        axios.get(`/api/products/details/${id}`)
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
    },[id]);

    const pathBreadCumb = [{
        'path' : `/productportal/${category}`,
        'name' : `${t("Products")}`
    },{
        'path' : `/products/${category}`,
        'name' : t(category)
    },{
        'path' : `/products/${category}/${id}`,
        'name' : `${data && data.title}`
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
                            <ImageGallery id={id} t={t} data={data.images} />
                            <div className="col-12 col-md-7 desc">
                                <ProductDetailDescription 
                                    category={category}
                                    t={t} 
                                    data={data} />
                            </div>
                        </section>
                    </div>    
                    <Heading title={t("Related Products")} />  
                    <div className="row mx-0 px-0">
                    {
                        fetchResult.data ?
                        fetchResult.data.data.length ?
                        <>
                        {
                            fetchResult.data.data.map((data,index) => (
                                <Product 
                                    t={t}
                                    data={data}
                                    index={index}
                                    key={index}
                                />
                            ))
                        }                
                        </>                        
                        :
                        <p className="text-center">{t('common:There are no data yet')}</p> :        
                        fetchResult.error ?
                        <p className="text-center">{fetchResult.error}</p> :
                        <div className="loader"></div>                    

                    }
                    </div>
                </>
                :
                error ?
                <p className="text-center">{error}</p> : 
                <div className="loader mt-5"></div>

            }  
            <Testimonies t={t} />
        </>
    )
}

const mapStateToProps = state => {
    return {
      fetchResult: state.fetchList    
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetcAction: (url,params) => dispatch(fetcAction(url,params))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsDetail)
