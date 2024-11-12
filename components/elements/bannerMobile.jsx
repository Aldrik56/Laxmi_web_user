import React, { useState,useEffect } from 'react';
import Link from 'next/link'

// herlper
// import Axios from '../../helpers/axiosConfig'
import axios from 'axios';

const BannerMobile = ({t}) => {
    const [data,setData] = useState({})

    useEffect(() => {
        axios.get(`/api/home/banner`)
        .then(response => {
            const {data,status} = response.data
            if(status){
                setData(data)
            }
        })
        .catch(error => {
            return {
                status : false,
                message : error.message
            }
        })      
    },[]); 

    return (
        <>
        {
            data.image ?
            <div 
                style={{
                    backgroundImage : `url(${data.image})`
                }}
                className="col-12 banner banner-mobile d-flex align-items-end justify-content-center">
                <div className="content">
                    <div className="text text-center text-white d-flex justify-content-center">
                        <div>
                            <div className="d-flex justify-content-center">
                                <p className="title">{data.text && data.text.title}</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <p className="desc-banner">{data.text && data.text.desc}</p>
                            </div>
                            <Link href='/products/suits'>
                                <a className="btn btn-light px-5 pb-0">{t("DISCOVER IT")}</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> : null
        }
        </  >
    )    
}


export default BannerMobile ;

