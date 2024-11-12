import React, { useState,useEffect } from 'react';
import {ChevronRight} from '../../elements/icon'

// elements
import {Input,Unit} from '../../elements/form';

const OrderMeasure = ({t,setStep}) => {
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
        <div className="container-fluid">
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
            <form onSubmit={() => setStep(2)}>
                <div className="d-flex justify-content-center">
                    <div className="col-12 col-lg-4">
                        <Input 
                            id="name"
                            type="text"
                            error={error.name}
                            label={t("Name")}
                            onChange={handleChange}
                        />   
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <Unit 
                                    unit="cm"
                                    id="height"
                                    type="text"
                                    error={error.height}
                                    label={t("Height")}
                                    onChange={handleChange}
                                />                         
                            </div>
                            <div className="col-12 col-lg-4">
                                <Unit 
                                    unit="kg"
                                    id="weight"
                                    type="text"
                                    error={error.height}
                                    label={t("Weight")}
                                    onChange={handleChange}
                                />                         
                            </div>
                            <div className="col-12 col-lg-4">
                                <Input 
                                    id="age"
                                    type="number"
                                    error={error.age}
                                    label={t("Age")}
                                    onChange={handleChange}
                                />                         
                            </div>                                                        
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="col-12 col-lg-6 ">
                        <p className="text-center">{t("The more accurate you give your height and weight, the better the system will help you take your measurements")}.</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button 
                        disabled={isLoading}
                        type="submit" 
                        className="btn btn-primary py-2 px-5">{isLoading ? 'Loading' : t("NEXT")}</button>                
                </div>
            </form>
        </div>
    )
}

export default OrderMeasure ;