import React, { useState,useEffect } from 'react';
import Link from 'next/link'

// elements
import {Input,Unit} from '../../elements/form';

const ChangeDetail = ({t,setPath}) => {
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
        <div className="col-12 col-lg-9 mt-4">
            <div className="content">
                <h4 className="fw-bold">{t('Account')}</h4>
                <div className="row">
                    <div className="col-2">
                        {t('Email')}
                    </div>
                    <div className="col-1">
                        :
                    </div>
                    <div className="col-9">
                        example@mail.com
                    </div>
                </div>
                <form>
                    <div className="col-12 col-lg-5">
                        <Input 
                            id="name"
                            type="text"
                            error={error.name}
                            label={t("Name")}
                            onChange={handleChange}
                        />                       
                        <Input 
                            id="Telephone"
                            type="text"
                            error={error.telephone}
                            label={t("Telephone")}
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
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <Link href="/changeemail">
                                    <a className="btn btn-light w-100 py-2 mt-4">
                                        {t("Change")} {t("Password")}
                                    </a>                
                                </Link>
                            </div>
                            <div className="col-12 col-lg-6">
                                <button 
                                    disabled={isLoading}
                                    className="btn btn-primary w-100 py-2 ">
                                        {t("Save")}                                     
                                </button>                
                            </div>
                        </div>
                    </div>                    
                </form>
            </div>
        </div>        
    )
}

export default ChangeDetail ;