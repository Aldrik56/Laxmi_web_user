import React, { useState,useEffect } from 'react';
import Link from 'next/link'

// helper
// import Axios from '../../../helpers/axiosConfig'

// elements
import Heading from '../../elements/heading'
import Product from '../../elements/product/productHome'
import axios from 'axios';

const SomeProduct = ({t}) => {
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)

    useEffect(() => {
        axios.get(`/api/home/products`)
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

    return(
        <div className="someProduct pt-5">
            <Heading title={t('Some Of Our Products')} />
            <div className="container-fluid">
                <div className="row">
                    {
                        data ? 
                        data.length ?
                        <>
                        {
                            data.map((data,index) => (
                                <Product key={index} t={t} data={data}/>
                            ))       
                        }
                        {/* <div className="d-flex justify-content-center mt-5">
                            <Link href='/products'>
                                <a className="btn btn-primary btn-lg py-3">{t('SEE ALL PRODUCT')}</a>
                            </Link>
                        </div>                          */}
                        </>
                        :
                        <p className="text-center">{t("common:There are no products yet")}</p> :
                        error ?
                        <p className="text-center">{error}</p> : 
                        <div className="loader"></div>
                    }
                </div>
            </div>
        </div>
    )
}

export default SomeProduct ;