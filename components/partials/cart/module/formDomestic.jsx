import React, { useState } from 'react';

// elements
import {Input,TextAreaNoLimit,Select} from '../../../elements/form';

const Domestic = ({t}) => {
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
                    label={t("common:Email")}
                    onChange={handleChange}
                />      
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Input 
                            id="name"
                            type="text"
                            error={error.name}
                            label={t("common:Name")}
                            onChange={handleChange}
                        />                                         
                    </div>
                    <div className="col-12 col-md-6">
                        <Input 
                            id="telephone"
                            type="text"
                            error={error.telephone}
                            label={t("common:Telephone")}
                            onChange={handleChange}
                        />                                         
                    </div>                                    
                </div>
                <TextAreaNoLimit 
                    id="address"
                    type="text"
                    value={form.address}
                    error={error.address}
                    label={t("common:Address")}
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
                            id="province"
                            placeholder={t("common:Select Province")}
                            value={form.province}
                            error={error.province}
                            label={t("common:Province")}
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
                            id="city"
                            placeholder={t("common:Select City")}
                            value={form.city}
                            error={error.city}
                            label={t("common:City")}
                            onChange={handleChange}
                        />                                      
                    </div>                                    
                </div>                 
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
                            id="district"
                            placeholder={t("common:Select District")}
                            value={form.district}
                            error={error.district}
                            label={t("common:District")}
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
                            placeholder={t("common:Select Zip Code")}
                            value={form.zip}
                            error={error.zip}
                            label={t("common:Zip")}
                            onChange={handleChange}
                        />                                      
                    </div>                                    
                </div>                                                    
                <TextAreaNoLimit 
                    id="detail"
                    type="text"
                    value={form.detail}
                    error={error.detail}
                    label={t("common:Detail")}
                    onChange={handleChange}
                />                            
            </div>
        </div>        
    )
}

export default Domestic