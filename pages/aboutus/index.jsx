import React, { useState,useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';

import Image from 'next/image'

// helper
import Axios from '../../helpers/axiosConfig'

// elements
import BreadCrumb from '../../components/elements/breadcrumb'

// partials
import About from '../../components/partials/webInformation/about/about'
import OurVision from '../../components/partials/webInformation/about/ourVision'
import OurStory from '../../components/partials/webInformation/about/OurStory'
import Gallery from '../../components/partials/webInformation/about/gallery'

const AboutUs = ()=> {
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)

    const {t} = useTranslation("aboutus")

    useEffect(() => {
        Axios.get(`/web_info/about_us`)
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

    const pathBreadCumb = [
        {
            'path' : '/aboutus',
            'name' : `${t("About Us")}`
        }
    ]

    return (
        <div className="web-information">
            <section className="about-us row mx-0">
                <div className="bg-banner">                
                    <div className="container-fluid px-5 content-text">
                        <BreadCrumb path={pathBreadCumb} />
                        <h1 className="heading text-center">{t("About Us")}</h1>
                        <div className="d-flex justify-content-center">
                            <hr />
                        </div>
                    </div>
                    <Image
                        layout="fill"
                        src="/img/web_information/about_us_banner.png"
                        alt="laxmi" />    
                </div>
                {
                    data ? 
                    <div className="about-content mt-4 px-0">
                        <About t={t} data={data} />
                        <OurVision t={t} data={data} />
                        <OurStory t={t} data={data} />
                        <Gallery t={t} data={data} />
                    </div>
                    :
                    error ?
                    <p className="text-center text-dark mt-5">{error}</p> : 
                    <div className="loader"></div>
                }
            </section>
        </div>
    )
}

export default AboutUs