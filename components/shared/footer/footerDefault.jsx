import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation';
import React, { useState,useEffect } from 'react';

// helper
import Axios from '../../../helpers/axiosConfig'

import swal from 'sweetalert';

const FooterDefault = () => {
    const [form,setForm] = useState({})    
    const [loading,setLoading] = useState(false)    

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
                    <div className="col-12 col-lg-3 mt-4">
                        <h5>PECENONGAN</h5>
                        <p>Jl. Pecenongan No 17B Jakarta Pusat 10120 Indonesia</p>
                        <p>{t("Phone")} : +6221 3848250, 3459326</p>
                        <p>Fax : +6221 38481566</p>
                        <p>Email: sales@laxmitailors.com</p>
                    </div>
                    <div className="col-12 col-lg-3 mt-4">
                        <h5>SENAYAN CITY MALL</h5>
                        <p>Jl. Asia Afrika Lot. 19 Unit 4/52 Jakarta Pusat 10270 Indonesia</p>
                        <p>{t("Phone")} : +6221 72781260, 72781261</p>
                        <p>Fax : +6221 72781262</p>
                        <p>Email: sales@laxmitailors.com </p>
                    </div>
                    <div className="col-12 col-lg-3 mt-4">
                        <h5>KEMANG</h5>
                        <p>Jln Kemang Raya No.6D Jakarta Selatan 12720 Indonesia</p>
                        <p>{t("Phone")} : +6221 7198789, 7198857</p>
                        <p>Fax : +6221 7198806</p>
                        <p>Email: sales@laxmitailors.com</p>
                    </div>
                    <div className="col-12 col-lg-3 mt-4">
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
                    </div>
                    <div className="col-12 col-lg-3 mt-4">
                        <h5>AEON MALL BSD CITY</h5>
                        <p>Jl. BSD Raya Utama, Lt. 1 Unit 1-42 Tangerang Indonesia</p>
                        <p>{t("Phone")} : +6221 22232822</p>
                        <p>Email: sales@laxmitailors.com</p>
                    </div>
                    <div className="col-12 col-lg-3 mt-4">
                        <h5>PACIFIC PLACE</h5>
                        <p>Jl. Jendral Sudirman Unit 2-65,66 Jakarta Selatan Indonesia</p>
                        <p>{t("Phone")} : +6221 5797314</p>
                        <p>Fax : +6221 57973142</p>
                        <p>Email: sales@laxmitailors.com</p>
                    </div>
                    <div className="col-12 col-lg-3 mt-4">
                        <div className="mb-3">
                            <Image
                                src="/img/footer.png"
                                alt="Laxmi"
                                width={119}
                                height={70}
                                />
                        </div>
                        <h5>PACIFIC PLACE</h5>
                        <p>Pondok Indah Mall 2, 2nd Floor Unit 241A Jakarta Selatan Indonesia</p>
                        <p>{t("Phone")} : +6221 75920426</p>
                        <p>Email: sales@theclassyfit.co.id</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterDefault ;