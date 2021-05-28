import React, { useState,useEffect } from 'react';

import {RemovedRedEye} from '../elements/icon';

export const Input = ({
        id,
        placeholder,
        label,
        onChange,
        type,
        error}) => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    return (
        <>
            {
                type === "password" ?
                <div className="form-group">
                    <label htmlFor={id} className={`${error ? 'text-danger' : ''}`}>{label}</label>
                    <div className="position-relative">
                        <input 
                            onChange={onChange}
                            type={`${isShowPassword ? 'text' : 'password'}`} 
                            className={`form-control mt-2 ${error ? 'form-control-danger' : ''}`} 
                            id={id} 
                            placeholder={label} />
                        <span className="icon-toggle" onClick={() => setIsShowPassword(!isShowPassword)}>
                            <RemovedRedEye />
                        </span>                              
                        <span className="text-danger">{error}</span>                  
                    </div>
                </div>    
                :
                <div className="form-group">
                    <label htmlFor={id} className={`${error ? 'text-danger' : ''}`}>{label}</label>
                    <input 
                        onChange={onChange}
                        type={type}
                        className={`form-control mt-2 ${error ? 'form-control-danger' : ''}`} 
                        id={id} 
                        placeholder={label} />
                    <span className="text-danger">{error}</span>                  
                </div>        
            }
        </>
    )    
}

