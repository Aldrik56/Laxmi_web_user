import React, { useState,useEffect } from 'react';
import Link from 'next/link'
import { ReactSmartScroller } from "react-smart-scroller";

// elements
import Heading from '../../elements/heading'
import ProductCategoryHome from '../../elements/product/productCategoryHome';

const OutProduct = ({t}) => {
    const CategoryList = [
        {
            title : t('product:suits'),
            image : '/img/product_gallery/suits.png',
            category : 'suits'
        },
        {
            title : t('product:vests'),
            image : '/img/product_gallery/vests.png',
            category : 'vests'
        },
        {
            title : t('product:batiks'),
            image : '/img/product_gallery/batik.png',
            category : 'batiks'
        },
        {
            title : t('product:shirts'),
            image : '/img/product_gallery/shirt.png',
            category : 'shirts'
        },
        {
            title : t('product:trousers'),
            image : '/img/product_gallery/trouser.png',
            category : 'trousers'
        }
        ,
        {
            title : t('product:blazer'),
            image : '/img/product_gallery/custom.png',
            category : 'blazer'
        }
    ]


    return(
        <div className="ourProduct pt-5">
            <Heading title={t('Some Of Our Products')} />
            <div className="container-fluid">
                <div className="d-flex justify-content-between">
                <ReactSmartScroller 
                    trackProps={{
                        display : 'none'
                    }}
                    draggable={true}>
                    {
                        CategoryList.map((data,index) => (
                            <ProductCategoryHome data={data} key={index} />                           
                        ))
                    }                
                </ReactSmartScroller>
                </div>
            </div>
        </div>
    )
}

export default OutProduct ;