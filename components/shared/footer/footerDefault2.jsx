import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation';
import React, { useState,useEffect } from 'react';

// helper
import Axios from '../../../helpers/axiosConfig'

import swal from 'sweetalert';

const FooterDefault = () => {
    const [form,setForm] = useState({})    
    const [loading,setLoading] = useState(false)    
    const SocialMediaList = [
        {
            logo : '/img/footer/facebook.svg',
            url :  'https://www.facebook.com/'
        },
        {
            logo : '/img/footer/twitter.svg',
            url :  'https://twitter.com/'
        },
        {
            logo : '/img/footer/instagram.svg',
            url :  'https://www.instagram.com/laxmitailors/'
        },
        {
            logo : '/img/footer/youtube.svg',
            url :  'https://www.youtube.com/watch?v=xaLtcjKBwz4'
        }
    ]


    const {t} = useTranslation("footer")
    
    const handleSubmit = e => {
        setLoading(true)
        e.preventDefault()
        Axios
        .post('/web_info/subscribe',form)
        .then(response => {
            const {status,message} = response.data;
            if(status) {
                setLoading(false)
                swal(
                    `${t("Thank You")}`, 
                    `${t("Your subscription has been confirmed")}. ${t("You've been added to our list and will hear from us soon")}.`, "success")

            }else{
                setLoading(false)
                swal(
                    `${t("common:Failed")}`, 
                    `${message}`, "error")
            }
        })
        .catch(error => {
            setLoading(false)
            swal(
                `${t("common:Failed")}`, 
                `${error.message}`, "error")            
        })
    }    
    
    const handleChange = e => {
        const {value,id} = e.target

        setForm({
            ...form,
            [id] : value
        })
    }

    return(
        <footer>
            <div className="container-fluid px-5 pt-3 pb-5">
                <div className="row">
                    <div className="col-12 col-lg-8 mt-4">
                        <h5 className="text-center">ALL PRODUCTS</h5>
                        <div className="row mt-4">
                            <div className="col-12 col-lg-4">
                                <h6>Collection</h6>
                                <hr />
                                <p>Business Suits</p>
                                <p>3 Piece Suits</p>
                                <p>Wedding Suits 2021</p>
                                <p>New Suits Arrivals</p>
                                <p>Fall/Winter Suits</p>
                                <p>Stylish Suits</p>
                                <p>Party Suits</p>
                                <p>Broken Suits</p>
                                <hr />
                                <h6>CUSTOM SUIT</h6>
                            </div>
                            <div className="col-12 col-lg-4">
                                <h6>Category</h6>
                                <hr />
                                <p>Mandarin </p>
                                <p>Three Piece </p>
                                <p>Double Breasted </p>
                                <p>Unlined</p>
                                <p>Two Piece</p>
                                <h6 className="mt-2">Style</h6>
                                <hr />
                                <p>Double Breasted </p>
                                <p>Unlined</p>
                                <p>Two Piece</p>
                            </div>
                            <div className="col-12 col-lg-4">
                                <p>Product Gallery</p>
                                <p>About Us</p>
                                <p>Contact Us</p>
                                <p>FAQ</p>
                                <p>Terms & Conditions</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mt-4">
                    <h5>{t("NEWSLETTER")}</h5>
                        <p>{t("Subscribe for receiving the lastest update")}</p>
                        <div className="input-newsletter">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email">Email</label>
                                <div className="d-flex flex-row">
                                    <input 
                                        onChange={handleChange}                                    
                                        type="email" 
                                        className="form-control" 
                                        id="email" 
                                        placeholder="me@example.com"
                                        required />
                                    <button 
                                        disabled={loading}
                                        type="submit" 
                                        className="btn btn-primary">{loading ? 'Loading' :  t("Subcribe")}</button>                                                   
                                </div>                                
                            </form>
                        </div> 
                    <h5 className="mt-4">{t("VISIT US ON")}</h5>            
                        <div className="d-flex mt-2">
                            {
                                SocialMediaList.map((data,index) => (
                                    <div className="me-4 text-pointer" key={index}>
                                        <a 
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            href={data.url}>
                                            <Image
                                                width={24}
                                                height={24} 
                                                src={data.logo}
                                                alt="laxmi" />                                                                   
                                        </a>
                                    </div>    
                                ))
                            }
                        </div>                           
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterDefault ;