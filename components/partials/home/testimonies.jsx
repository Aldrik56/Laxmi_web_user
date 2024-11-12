import React, { useState,useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

// helper
// import Axios from '../../../helpers/axiosConfig'

// elements
import Heading from '../../elements/heading'
import Rating from '../webInformation/testimonies/module/rating'
import axios from 'axios';

const Testimonies = ({t}) => {
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)

    useEffect(() => {
        axios.get(`/api/home/testimonies`)
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
        <div className="testimonies pt-5 px-4">
            <Heading title={t('Customer Reviews')} />
                <div className="container-fluid">
                {
                    data ? 
                    data.length ?
                    <div className="d-flex justify-content-between testimoni-scroll">
                    {
                        data.map((data,index) => (
                            <div key={index} className="testimoni-item">
                                <div className="d-flex justify-content-center">
                                    <div className="img-container">
                                        <Image
                                            className="rounded-circle"
                                            layout="fill"
                                            objectFit="cover"
                                            src={data.image} 
                                            alt="laxmi" />                            
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="desc">" {data.description} "</p>
                                    <p className="name">{data.name},{data.country}</p>
                                </div>                                    
                                <div className="d-flex justify-content-center">
                                    <Rating data={data.star} />
                                </div>
                            </div>
                        ))
                    }                    
                    </div> : 
                    <p className="text-center">{t('common:There are no testimoni yet')}</p>                    
                    :
                    error ?
                    <p className="text-center">{error}</p> : 
                    <div className="loader"></div>
                }  
                <div className="d-flex justify-content-center mt-5">
                    <div className="d-flex justify-content-center">
                        <Link href='/testimonies'>
                            <a className="btn btn-primary btn-lg py-3">{t('SEE ALL REVIEWS')}</a>
                        </Link>
                    </div>
                </div>
                </div>            
        </div>
    )
}

export default Testimonies ;