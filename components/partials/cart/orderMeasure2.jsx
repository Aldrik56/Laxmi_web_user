import React, { useState,useEffect } from 'react';
import {ChevronRight} from '../../elements/icon'
import Image from 'next/image'

const OrderMeasure2 = ({t,setStep}) => {
    const [form,setForm] = useState({})
    const [error,setError] = useState({})
    const [isLoading,setIsLoading] = useState(false)

    const handleChange = e => {
        const {value,id} = e.target
        setForm({
            ...form,
            [id] : value
        })
    }    
    return (
        <div className="container-fluid measure2">
            <div className="w-100 d-flex justify-content-center align-items-center">
                <div className="stepper d-flex flex-row">
                    <p className="active">{t("Measurements")}</p>
                    <ChevronRight />
                    <p>{t("Checkout")}</p>
                    <ChevronRight />
                    <p>{t("Payment")}</p>
                </div>
            </div>
            <hr className="hr-stepper w-100" />
            <form onSubmit={() => setStep(3)}>
                <div className="d-flex justify-content-center">
                    <div className="col-12 col-xl-6 ">
                    <div className="row d-flex justify-content-center data">
                        <div className="col-12 col-md-3 mt-2 d-flex align-items-center justify-content-center border-right">
                            <div>
                                <p className="title">{t("Name")}:</p>
                                <p className="value">Jhon Doe</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 mt-2 d-flex align-items-center justify-content-center border-right">
                            <div>
                                <p className="title">{t("Height")} :</p>
                                <p className="value">174 cm</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 mt-2 d-flex align-items-center justify-content-center border-right">
                            <div>
                                <p className="title">{t("Weight")} :</p>
                                <p className="value">67 kg</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 mt-2 d-flex align-items-center justify-content-center border-right">
                            <div>
                                <p className="title">{t("Age")} :</p>
                                <p className="value">23</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 mt-2 d-flex align-items-center justify-content-center">
                            <p className="action">{t("Edit")}<br /> {t("Height")}/{t("Weight")}</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-6 col-lg-2 order-1 order-lg-0 d-flex justify-content-center align-items-center">
                            <div className="option text-end">
                                <p className="title">{t("Shoulder")}</p>
                                <p className="item">{t("Straight")}</p>
                                <p className="item">{t("Normal")}</p>
                                <p className="item">{t("Stooped")}</p>
                                <p className="title">{t("Abdomen")}</p>
                                <p className="item">{t("Thin")}</p>
                                <p className="item">{t("Normal")}</p>
                                <p className="item">{t("Large")}</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8 order-0 order-lg-1 d-flex justify-content-center">
                            <div className="d-flex flex-row">
                                <div className="img-body-front">
                                    <Image
                                        layout="fill"
                                        objectFit="cover"
                                        src="/img/cart/body_front.png" 
                                        alt="laxmi" />
                                </div>
                                <div className="img-body-side">
                                <Image
                                    layout="fill"
                                    objectFit="cover"
                                    src="/img/cart/body_side.png" 
                                    alt="laxmi" />                                
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2 order-2 d-flex justify-content-center align-items-center">
                            <div className="option ">
                                <p className="title">{t("Chest")}</p>
                                <p className="item">{t("Strong")}</p>
                                <p className="item">{t("Normal")}</p>
                                <p className="item">{t("Corpulent")}</p>
                                <p className="title">{t("Stance")}</p>
                                <p className="item">{t("Straight")}</p>
                                <p className="item">{t("Normal")}</p>
                                <p className="item">{t("Curved")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center row">
                        <div className="col-12 col-md-4">
                            <button 
                                disabled={isLoading}
                                onClick={() => setStep(1)}
                                className="btn btn-light py-2 px-5 me-3 w-100">{t("BACK")}</button>                                    
                        </div>
                        <div className="col-12 col-md-4">
                            <button 
                                disabled={isLoading}
                                type="submit" 
                                className="btn btn-primary py-2 px-5 w-100">{isLoading ? 'Loading' : t("NEXT")}</button>                
                        </div>
                    </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default OrderMeasure2 ;