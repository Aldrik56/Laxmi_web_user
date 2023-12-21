import React, { useState,useEffect } from 'react';
import Image from 'next/image'

// helper
// import Axios from '../../../helpers/axiosConfig'

// elements
import Heading from '../../elements/heading'
import axios from 'axios';

const Clients = ({t}) => {
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)

    useEffect(() => {
        axios.get(`/api/home/our_client`)
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
        <div className="clients pt-5 px-4">
            <Heading title={t('Our Clients')} />
                <div className="container-fluid">
                {
                    data ? 
                    data.length ?
                    <div className="d-flex justify-content-center clients-scroll">
                    {
                        data.map((data,index) => (
                            <div key={index} className="clients-item">
                                <div className="d-flex justify-content-center">
                                    <div className="img-container">
                                        <Image
                                            layout="fill"
                                            objectFit="contain"
                                            // width={190}
                                            // height={38}
                                            src={data.image} 
                                            alt="laxmi" />                            
                                    </div>
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
                </div>            
        </div>
    )
}

export default Clients ;