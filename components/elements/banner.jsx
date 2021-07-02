import Image from 'next/image'
import React, { useState,useEffect } from 'react';

// herlper
import Axios from '../../helpers/axiosConfig'

const Banner = ({t}) => {
    const [data,setData] = useState({})

    useEffect(() => {
        Axios.get(`/home/banner`)
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
                className="col-12 banner d-flex align-items-center ">
                {/* <Image
                    layout="fill"
                    objectFit="cover"
                    src={data.image} 
                    alt="laxmi" />                     */}
                <div className="content">
                    <div className="text text-center text-white">
                        <p className="title">{data.text && data.text.title}</p>
                        <p className="desc-banner">{data.text && data.text.desc}</p>
                        <button 
                            type="button" 
                            className="btn btn-light px-5">{t("DISCOVER IT")}</button>
                    </div>
                </div>
            </div> : null
        }
        </  >
    )    
}


export default Banner ;

