import React, { useState,useEffect } from 'react';

import {RemovedRedEye} from '../elements/icon';

export const Input = ({
        id,
        value,
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
                            value={value}
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
                        value={value}
                        placeholder={label} />
                    <span className="text-danger">{error}</span>                  
                </div>        
            }
        </>
    )    
}

export const Search = ({
    id,
    placeholder,
    label,
    onChange,
    type,
    error}) => {
return (
    <div className="form-group">
        <div className="position-relative">
            <input 
                onChange={onChange}
                type="search"
                className={`form-control mt-2 `} 
                id={id} 
                placeholder={label} />                        
            <span className="text-danger">{error}</span>                  
        </div>
    </div>    
)    
}

export const TextArea = ({
    id,
    placeholder,
    label,
    onChange,
    type,
    value,
    error}) => {
return (
    <div className="form-group">
        <label htmlFor={id} className={`${error ? 'text-danger' : ''}`}>{label}</label>
        <textarea  
            rows="4"            
            onChange={onChange}
            type="search"
            className={`form-control text-area mt-2 `} 
            id={id} 
            placeholder={label} />        
        <div className="d-flex flex-column">
            <span className="text-danger">{error}</span>   
            <span>{value ? value.length : 0}/500</span>                                         
        </div>                
    </div>    
)    
}

export const TextAreaNoLimit = ({
    id,
    placeholder,
    label,
    onChange,
    type,
    value,
    error}) => {
return (
    <div className="form-group">
        <label htmlFor={id} className={`${error ? 'text-danger' : ''}`}>{label}</label>
        <textarea  
            rows="2"            
            onChange={onChange}
            type="search"
            className={`form-control text-area mt-2 `} 
            id={id} 
            placeholder={label} />        
        <div className="d-flex flex-column">
            <span className="text-danger">{error}</span>   
        </div>                
    </div>    
)    
}

export const InputChat = ({
    id,
    placeholder,
    label,
    onChange,
    onKeyUp,
    type,
    value,
    error}) => {
return (
    <div className="form-group">
        <textarea  
            rows="2"     
            onKeyUp={onKeyUp}       
            onChange={onChange}
            type="text"
            className={`form-control text-area-chat mt-2 `} 
            id={id} 
            placeholder={label} />        
        <div className="d-flex flex-column">
            <span className="text-danger">{error}</span>   
        </div>                
    </div>    
)    
}

export const Unit = ({
    id,
    unit,
    placeholder,
    label,
    onChange,
    type,
    error}) => {
return (
    <div className="form-group">
        <label htmlFor={id} className={`${error ? 'text-danger' : ''}`}>{label}</label>
        <div className="position-relative">
            <input 
                onChange={onChange}
                type="text"
                className={`form-control mt-2 `} 
                id={id} 
                placeholder={label} />                 
            <span className="unit">
                {unit}
            </span>                         
            <span className="text-danger">{error}</span>                  
        </div>
    </div>    
)    
}

export const Select = ({
    id,
    options,
    placeholder,
    label,
    onChange,
    error}) => {
return (
    <div className="form-group">
        <label htmlFor={id} className={`${error ? 'text-danger' : ''}`}>{label}</label>
        <select 
            className="form-select" 
            aria-label="Default select example">
            <option selected>{placeholder}</option>
            {
                options.map((data,index) => (
                    <option 
                        value={data.value} 
                        key={index}>{data.name}</option>
                ))
            }
        </select>                          
        <span className="text-danger">{error}</span>                  
    </div>    
)    
}