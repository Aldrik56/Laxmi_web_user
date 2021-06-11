import React, { useState,useEffect } from 'react';

// elements
import {Phone,Email,LocationOn} from '../../../elements/icon'
import {Input,TextArea} from '../../../elements/form';
import Heading from '../../../elements/heading'

// helper
import Axios from '../../../../helpers/axiosConfig'

const ContactUsContainer = ({t}) => {
    const [form,setForm] = useState({})
    const [isSubmited,setIsSubmited] = useState(false)
    const [error,setError] = useState({})
    const [isLoading,setIsLoading] = useState(false)

    // handle
    const handleSubmit = e => {
        e.preventDefault()
        setIsLoading(true)
        if(form.name){
            if(form.email){
                if(form.email.includes("@")){
                        if(form.subject){
                            if(form.message){
                                if(form.message.length <= 500){
                                    Axios.post(`/web_info/contact_us`,form)
                                    .then(response => {
                                        const {data,status,message} = response.data
                                        if(status){
                                            window.scrollTo(0, 0)
                                            setIsSubmited(true)
                                            setIsLoading(false)   
                                            setError({}) 
                                        }else{
                                            setError({
                                                name : message
                                            })
                                            setIsLoading(false)                                            
                                        }
                                    })
                                    .catch(error => {
                                        setError({
                                            name : error.message
                                        })
                                        setIsLoading(false)  
                                    }) 
                                }else{
                                    setError({
                                        message : `${t("common:wrong format")}`
                                    })
                                    setIsLoading(false)    
                                }
                            }else{
                                setError({
                                    message : `${t("common:cannot be empty")}`
                                })
                                setIsLoading(false)
                            }                                            
                        }else{
                            setError({
                                subject : `${t("common:cannot be empty")}`
                            })
                            setIsLoading(false)
                        }                                                           
                }else{
                    setError({
                        email : `${t("common:wrong format")}`
                    })
                    setIsLoading(false)
                }
            }else{
                setError({
                    email : `Email ${t("common:cannot be empty")}`
                })
                setIsLoading(false)
            }                
        }else{
            setError({
                name : `${t("common:cannot be empty")}`
            })
            setIsLoading(false)
        }         
    }
    const handleChange = e => {
        const {value,id} = e.target
        setForm({
            ...form,
            [id] : value
        })
    }
    const handleBack = () => {
        setIsSubmited(false)
    }
    return (
        <div className="container-fluid">
            {
                isSubmited ?
                <div className="submited">
                    <Heading title={t('Thank You')} />
                    <p className="sub-heading text-center">{t('You message has been sent')}. {t('Click return button to')} <br /> {t('return to the Previous page')} </p>
                    <div className="d-flex justify-content-center">
                        <button
                            onClick={() => handleBack()} 
                            className="btn btn-primary btn-lg py-3">{t('Return')}</button>
                    </div>
                </div> :
                <>
                    <Heading title={t("navbar:Contact Us")} />
                    <p className="sub-heading text-center">
                        {t('We will help you immediately')}
                    </p>             
                    <section className="d-flex justify-content-center container-fluid px-5">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <p className="title">{t('Contact Information')}</p>
                                <div className="desc row mt-5">
                                    <div className="col-1">
                                        <Phone />
                                    </div>
                                    <div className="col-9 d-flex align-items-center">
                                        <p className="mb-0"> +6221 3848250</p>
                                    </div>
                                </div>
                                <div className="desc row">
                                    <div className="col-1">
                                        <Email />
                                    </div>
                                    <div className="col-9 d-flex align-items-center">
                                        <p className="mb-0"> sales@laxmitailors.com</p>
                                    </div>
                                </div>
                                <div className="desc row">
                                    <div className="col-1">
                                        <LocationOn />
                                    </div>
                                    <div className="col-9 d-flex align-items-center">
                                        <p className="mb-0">Jl. Pecenongan No.17b, RT.2/RW.3, Kb. Klp., Kecamatan  Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10120</p>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63459.453161419915!2d106.69977207707791!3d-6.235257320218861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f151eeb7ee9b%3A0xdf2ef1c704599d73!2sLaxmi%20Tailors%20Pacific%20Place!5e0!3m2!1sen!2sid!4v1622712003045!5m2!1sen!2sid" 
                                        width="100%" 
                                        height="257" 
                                        style={{border:0}} 
                                        allowfullscreen="" 
                                        loading="lazy"></iframe>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 d-flex justify-content-center">
                                <form onSubmit={handleSubmit}>
                                    <Input 
                                        id="name"
                                        type="text"
                                        error={error.name}
                                        label={t("Name")}
                                        onChange={handleChange}
                                    />                          
                                    <Input 
                                        id="email"
                                        type="email"
                                        error={error.email}
                                        label={t("Email")}
                                        onChange={handleChange}
                                    />  
                                    <Input 
                                        id="subject"
                                        type="text"
                                        error={error.subject}
                                        label={t("Subject")}
                                        onChange={handleChange}
                                    />                  
                                    <TextArea 
                                        id="message"
                                        type="text"
                                        value={form.message}
                                        error={error.message}
                                        label={t("Message")}
                                        onChange={handleChange}
                                    />     
                                    <button 
                                        disabled={isLoading}
                                        type="submit" 
                                        className="btn btn-primary py-3 w-100">{isLoading ? 'Loading' : t("Send")}</button> 
                                </form>                        
                            </div>
                        </div>                     
                    </section>
                </>
            }
        </div>
    )
}

export default ContactUsContainer ;