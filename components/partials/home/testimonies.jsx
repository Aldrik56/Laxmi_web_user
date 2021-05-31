import React, { useState,useEffect } from 'react';
import Image from 'next/image'

// helper
import Axios from '../../../helpers/axiosConfig'

// elements
import Heading from '../../elements/heading'
import {ChevronLeft,ChevronRight} from '../../elements/icon';

const Testimonies = ({t}) => {
    const [data,setData] = useState(null)
    useEffect(() => {
        Axios.get(`/home/testimonies`)
        .then(response => {
            const {data,status} = response.data
            if(status){
                setData(data)
            }else{
                setData([])
            }
        })
        .catch(error => {
            setData([])
            return {
                status : false,
                message : error.message
            }
        })      
    },[data]);    
    
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
                                            <div className="rectangle"></div>
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
                                                        res
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
                        <button 
                            type="button" 
                            className="btn btn-primary btn-lg py-3">{t('SEE ALL REVIEWS')}</button>
                    </div>                    
                    </> : 
                    <p className="text-center">{t('common:There are no testimoni yet')}</p>                    
                    :
                    <p className="text-center">Loading</p>                    
                }              
        </div>
    )
}

export default Testimonies ;