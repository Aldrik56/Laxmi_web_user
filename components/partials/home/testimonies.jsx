import React, { useState,useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

// helper
import Axios from '../../../helpers/axiosConfig'

// elements
import Heading from '../../elements/heading'
import {ChevronLeft,ChevronRight} from '../../elements/icon';

const Testimonies = ({t}) => {
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)

    useEffect(() => {
        Axios.get(`/home/testimonies`)
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
        <div className="testimonies pt-5">
            <Heading title={t('Customer Reviews')} />
                {
                    data ? 
                    data.length ?
                    <>
                    <div id="carouselTestimonies" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            {
                                data.map((data,index) => (
                                    <button 
                                        key={index}
                                        type="button" 
                                        data-bs-target="#carouselTestimonies" 
                                        data-bs-slide-to={index} 
                                        className={index === 0 ? 'active' : ''}
                                        aria-current="true" 
                                        aria-label="Slide 1"></button>
                                ))
                            }
                        </div>
                        <div className="carousel-inner">
                            <div className="container-fluid">
                                {
                                    data.map((data,index) => (
                                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                            <div className="quotes-mark-left">
                                                <Image
                                                    src="/img/icon/quotes-mark-left.svg"
                                                    alt="Laxmi"
                                                    width={87}
                                                    height={87}
                                                    />
                                            </div>
                                            <div className="quotes-mark-right">
                                                <Image
                                                    src="/img/icon/quotes-mark-right.svg"
                                                    alt="Laxmi"
                                                    width={87}
                                                    height={87}
                                                    />
                                            </div>
                                            <div className="row rectangle">
                                                <div className="col-12 col-lg-8 order-1 order-lg-0">
                                                    <p className="review">{data.description}</p>
                                                    <p className="name">- {data.name}</p>
                                                    <p className="job">{data.profession}</p>
                                                </div>
                                                <div className="col-12 col-lg-4 order-0 order-lg-1 container-img">
                                                <div className="customer-img">
                                                    <Image
                                                        layout="fill"
                                                        objectFit="cover"
                                                        src={data.image}
                                                        alt="laxmi"
                                                        className="rounded-circle" />
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselTestimonies" data-bs-slide="prev">
                            <ChevronLeft />
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselTestimonies" data-bs-slide="next">
                            <ChevronRight />
                        </button>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <Link href='/testimonies'>
                            <a className="btn btn-primary btn-lg py-3">{t('SEE ALL REVIEWS')}</a>
                        </Link>
                    </div>                    
                    </> : 
                    <p className="text-center">{t('common:There are no testimoni yet')}</p>                    
                    :
                    error ?
                    <p className="text-center">{error}</p> : 
                    <div className="loader"></div>
                }              
        </div>
    )
}

export default Testimonies ;