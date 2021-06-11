import React, { useState } from 'react';

// elements
import {Input,TextAreaNoLimit,Select} from '../../../elements/form';

const OverSeas = ({t}) => {
    const [form,setForm] = useState({})
    const [error,setError] = useState({})
    
    
    const handleChange = e => {
        const {value,id} = e.target
        setForm({
            ...form,
            [id] : value
        })
    }      
    return (
        <div className=" d-flex justify-content-center">
            <div className="col-12 col-lg-8">
                <Input 
                    id="email"
                    type="email"
                    error={error.email}
                    label={t("Email")}
                    onChange={handleChange}
                />      
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Input 
                            id="name"
                            type="text"
                            error={error.name}
                            label={t("Name")}
                            onChange={handleChange}
                        />                                         
                    </div>
                    <div className="col-12 col-md-6">
                        <Input 
                            id="telephone"
                            type="text"
                            error={error.telephone}
                            label={t("Telephone")}
                            onChange={handleChange}
                        />                                         
                    </div>                                    
                </div>
                <TextAreaNoLimit 
                    id="address"
                    type="text"
                    value={form.address}
                    error={error.address}
                    label={t("Address")}
                    onChange={handleChange}
                />
                <Select 
                    options={[
                        {
                            "name" : "Indonesia",
                            "value" : "1"
                        },
                        {
                            "name" : "Inggris",
                            "value" : "2"
                        },

                    ]}
                    id="countries"
                    placeholder="Pilih Negara"
                    value={form.countries}
                    error={error.countries}
                    label={t("Address")}
                    onChange={handleChange}
                />     
                <div className="row">
                    <div className="col-12 col-md-6">
                    <Select 
                        options={[
                            {
                                "name" : "Indonesia",
                                "value" : "1"
                            },
                            {
                                "name" : "Inggris",
                                "value" : "2"
                            },

                        ]}
                        id="city"
                        placeholder="Select City"
                        value={form.city}
                        error={error.city}
                        label={t("Address")}
                        onChange={handleChange}
                    />                                      
                </div>
                    <div className="col-12 col-md-6">
                        <Select 
                            options={[
                                {
                                    "name" : "Indonesia",
                                    "value" : "1"
                                },
                                {
                                    "name" : "Inggris",
                                    "value" : "2"
                                },

                            ]}
                            id="zip"
                            placeholder="Select Zip Code"
                            value={form.zip}
                            error={error.zip}
                            label={t("Address")}
                            onChange={handleChange}
                        />                                      
                    </div>                                    
                </div>                                                    
                <TextAreaNoLimit 
                    id="detail"
                    type="text"
                    value={form.detail}
                    error={error.detail}
                    label={t("Detail")}
                    onChange={handleChange}
                />                            
            </div>
        </div>        
    )
}

export default OverSeas