import React, { useState,useEffect } from 'react';

// herlper
// import Axios from '../../../../helpers/axiosConfig'
import axios from 'axios';


const SubCategory = ({t,params,handleSubCategory}) => {
    const [data,setData] = useState(null)
    useEffect(() => {
        axios.get(`/api/products/filter`)
        .then(response => {
            const {data,status} = response.data
            if(status){
                setData(data)
            }
        })
        .catch(error => {
            return {
                status : false,
                message : error.message
            }
        })      
    },[params]); 

    return (
        <div className="sub-category">
            {
                data ?
                <>
                    <p className="title">{t("COLLECTIONS")}</p>
                    {
                        data.collections.length && data.collections.map((data,index) => (
                            <p 
                                onClick={() => handleSubCategory(data,'collections')}
                                key={index} 
                                className={`sub-title mb-0 ${data._id == params.collections._id ? 'active' : ''}`}>{data.name}</p>   
                        ))
                    }  
                    {/* filter */}
                    {
                        params.sub_category || params.style || params.material || params.color || params.pattern || params.season || params.collections ?
                        <p className="title mt-4">{t("YOUR FILTER")}</p> : null
                    }
                    <p 
                        onClick={() => handleSubCategory('','sub_category')}
                        className={`sub-title mb-0 filter-item`}> {params.sub_category.name}</p>   
                    <p 
                        onClick={() => handleSubCategory('','style')}
                        className={`sub-title mb-0 filter-item`}> {params.style.name}</p>   
                    <p 
                        onClick={() => handleSubCategory('','material')}
                        className={`sub-title mb-0 filter-item`}> {params.material.name}</p>   
                    <p 
                        onClick={() => handleSubCategory('','color')}
                        className={`sub-title mb-0 filter-item`}> {params.color.name}</p>   
                    <p 
                        onClick={() => handleSubCategory('','pattern')}
                        className={`sub-title mb-0 filter-item`}> {params.pattern.name}</p>   
                    <p 
                        onClick={() => handleSubCategory('','season')}
                        className={`sub-title mb-0 filter-item`}> {params.season.name}</p>   
                    <p 
                        onClick={() => handleSubCategory('','collections')}
                        className={`sub-title mb-0 filter-item`}> {params.collections.name}</p>   

                    <div className="accordion mt-4" id="accordionSubCategory">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="categoryAccordion">
                            <button 
                                className="accordion-button" 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#collapseOne" 
                                aria-expanded="true" 
                                aria-controls="collapseOne">
                                {t("CATEGORY")}
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="categoryAccordion" data-bs-parent="#accordionSubCategory">
                                <div className="accordion-body">
                                {
                                    data.category.length && data.category.map((data,index) => (
                                        <p 
                                            onClick={() => handleSubCategory(data,'sub_category')}
                                            key={index} 
                                            className={`sub-title mb-0 ${data._id == params.sub_category._id ? 'active' : ''}`}>{data.name} ({data.count})</p>   
                                    ))
                                }                 
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="styleAccordion">
                            <button 
                                className="accordion-button collapsed" 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#collapseTwo" 
                                aria-expanded="false" 
                                aria-controls="collapseTwo">
                                {t("STYLE")}
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="styleAccordion" data-bs-parent="#accordionSubCategory">
                                <div className="accordion-body">
                                    {
                                        data.style.length && data.style.map((data,index) => (
                                            <p 
                                                onClick={() => handleSubCategory(data,'style')}
                                                key={index} 
                                                className={`sub-title mb-0 ${data._id == params.style._id  ? 'active' : ''}`}>{data.name} ({data.count})</p>   
                                        ))
                                    }                 
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="materialAccordion">
                            <button 
                                className="accordion-button collapsed" 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#collapseFour" 
                                aria-expanded="false" 
                                aria-controls="collapseFour">
                                {t("MATERIAL")}
                            </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="materialAccordion" data-bs-parent="#accordionSubCategory">
                                <div className="accordion-body">
                                    {
                                        data.material.length && data.material.map((data,index) => (
                                            <p 
                                                onClick={() => handleSubCategory(data,'material')}
                                                key={index} 
                                                className={`sub-title mb-0 ${data._id == params.material._id ? 'active' : ''}`}>{data.name} ({data.count})</p>   
                                        ))
                                    }                 
                                </div>
                            </div>
                        </div>                
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="colorAccordion">
                            <button 
                                className="accordion-button collapsed" 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#collapseFive" 
                                aria-expanded="false" 
                                aria-controls="collapseFive">
                                {t("COLOR")}
                            </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="colorAccordion" data-bs-parent="#accordionSubCategory">
                                <div className="accordion-body row">
                                    {
                                        data.color.length && data.color.map((data,index) => (
                                            <div
                                                onClick={() => handleSubCategory(data,'color')}
                                                style={{
                                                    backgroundColor : data.hex_color
                                                }}
                                                key={index} 
                                                className="color-container text-pointer m-1"></div>
                                        ))
                                    }     
                                                
                                </div>
                            </div>
                        </div>    
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="patternAccordion">
                            <button 
                                className="accordion-button collapsed" 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#collapseSix" 
                                aria-expanded="false" 
                                aria-controls="collapseSix">
                                {t("PATTERN")}
                            </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="patternAccordion" data-bs-parent="#accordionSubCategory">
                                <div className="accordion-body">
                                    {
                                        data.pattern.length && data.pattern.map((data,index) => (
                                            <p 
                                                onClick={() => handleSubCategory(data,'pattern')}
                                                key={index} 
                                                className={`sub-title mb-0 ${data._id == params.pattern._id ? 'active' : ''}`}>{data.name} ({data.count})</p>   
                                        ))
                                    }                 
                                </div>
                            </div>
                        </div>    
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="seasonAccordion">
                            <button 
                                className="accordion-button collapsed" 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#collapseSeven" 
                                aria-expanded="false" 
                                aria-controls="collapseSeven">
                                {t("SEASON")}
                            </button>
                            </h2>
                            <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="seasonAccordion" data-bs-parent="#accordionSubCategory">
                                <div className="accordion-body">
                                    {
                                        data.season.length && data.season.map((data,index) => (
                                            <p 
                                                onClick={() => handleSubCategory(data,'season')}
                                                key={index} 
                                                className={`sub-title mb-0 ${data._id == params.season._id ? 'active' : ''}`}>{data.name} ({data.count})</p>   
                                        ))
                                    }                 
                                </div>
                            </div>
                        </div>                                     
                    </div>             

                </>
                :
                <div className="loader"></div>
            }
        </div>
    )
}

export default SubCategory ;