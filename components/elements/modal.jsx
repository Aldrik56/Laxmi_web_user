import React, { useState,useEffect } from 'react';
import {Close} from '../elements/icon'
import Image from 'next/image'

// herlper
// import Axios from '../../helpers/axiosConfig'
import axios from 'axios';

export const ModalPromotion = () => {
    const [banner,setBanner] = useState(null)

    useEffect(() => {
        axios.get(`/api/home/popup`)
        .then(response => {
            const {data,status} = response.data
            if(status){
                setBanner(data.image)
                const myModal = new bootstrap.Modal(document.getElementById('modalPromotion'))
                myModal.show()
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
        <div className="modal fade show" id="modalPromotion" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                {
                    banner && 
                        <Image
                        src={banner}
                        alt="Laxmi"
                        width={650}
                        height={550}
                    />                   
                }
                <span className="icon-close"  data-bs-dismiss="modal">
                    <Close />
                </span>
            </div>
            </div>
        </div>
    )    
}



