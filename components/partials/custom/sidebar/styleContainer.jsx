import Image from 'next/image'
import { useRouter } from 'next/router'
import Slide from 'react-reveal/Slide';

import React, { useState,useEffect } from 'react';

// elements
import {ArrowLeft} from '../../../elements/icon'
import Icon from '../../../elements/icon/custom'


// data
import {
    BlazerListStyle,
    ShirtListStyle,
    TrouserListStyle,
    VestListStyle,
    BatikListStyle} from './dataSidebar'


const StyleContainer = ({t}) => {

    const router = useRouter()
    const { category } = router.query
    const [list,setList] = useState([])
    const [openStyle,setOpenStyle] = useState(false)
    const [subCategory,setSubCategory] = useState({})


    useEffect(() => {
        switch(category) {               
            case 'vests':
                setList(VestListStyle)
                break ;      
            case 'batiks':
                setList(BatikListStyle)
                break ;      
            case 'shirts':
                setList(ShirtListStyle)
                break ;  
            case 'trousers':
                setList(TrouserListStyle)
                break ;       
            case 'blazer':
                setList(BlazerListStyle)
                break ;                                    
            default:
                return false        
        } 
    },[category]);
    return (
        <div className="style-container">
                <Slide left when={openStyle} duration={500} >
                <div className={`row ${openStyle ? '' : 'd-none'}`}>
                    <div className="col-4 me-0 pe-0 d-flex flex-column align-items-center mini-category">
                    {
                            category !== "suits" ?
                            list.map((data,index) => (
                                <div
                                    onClick={() => {
                                        setSubCategory({
                                            id : data.id,
                                            title : data.title
                                        })
                                    }} 
                                    key={index}                              
                                    className="sub-category-item w-100 text-pointer">
                                    <div className="d-flex justify-content-center">
                                        <Icon
                                            color={subCategory.title === data.title ? '#1E1E22' : '#757575'}
                                            category={category}                                        
                                            icon={data.image} />
                                    </div>
                                    <p className={`title text-center ${subCategory.title === data.title ? 'text-primary fw-bold' : ''}`}>{t(data.title)}</p>                                    
                                </div>
                            )):
                            <>
                                <div className="sub-category-item w-100 text-pointer">
                                    <p className={`title text-center fw-bold`}>{t("common:blazer")}</p>                                    
                                </div>                                                
                                {
                                    BlazerListStyle.map((data,index) => (
                                        <div
                                            onClick={() => {
                                                setSubCategory({
                                                    id : data.id,
                                                    title : data.title
                                                })
                                            }} 
                                            key={index}                              
                                            className="sub-category-item w-100 text-pointer">
                                            <div className="d-flex justify-content-center">
                                                <Icon
                                                    color={subCategory.title === data.title ? '#1E1E22' : '#757575'}
                                                    category="blazer"                                        
                                                    icon={data.image} />
                                            </div>
                                            <p className={`title text-center ${subCategory.title === data.title ? 'text-primary fw-bold' : ''}`}>{t(data.title)}</p>                                    
                                        </div>
                                    ))                                
                                }
                                <div className="sub-category-item w-100 text-pointer">
                                    <p className={`title text-center fw-bold`}>{t("common:trousers")}</p>                                    
                                </div>                                                
                                {
                                    TrouserListStyle.map((data,index) => (
                                        <div
                                            onClick={() => {
                                                setSubCategory({
                                                    id : data.id,
                                                    title : data.title
                                                })
                                            }} 
                                            key={index}                              
                                            className="sub-category-item w-100 text-pointer">
                                            <div className="d-flex justify-content-center">
                                                <Icon
                                                    color={subCategory.title === data.title ? '#1E1E22' : '#757575'}
                                                    category="trousers"                                        
                                                    icon={data.image} />
                                            </div>
                                            <p className={`title text-center ${subCategory.title === data.title ? 'text-primary fw-bold' : ''}`}>{t(data.title)}</p>                                    
                                        </div>
                                    ))                                
                                }        
                                <div className="sub-category-item w-100 text-pointer">
                                    <p className={`title text-center fw-bold`}>{t("common:vests")}</p>                                    
                                </div>                                                
                                {
                                    VestListStyle.map((data,index) => (
                                        <div
                                            onClick={() => {
                                                setSubCategory({
                                                    id : data.id,
                                                    title : data.title
                                                })
                                            }} 
                                            key={index}                              
                                            className="sub-category-item w-100 text-pointer">
                                            <div className="d-flex justify-content-center">
                                                <Icon
                                                    color={subCategory.title === data.title ? '#1E1E22' : '#757575'}
                                                    category="vests"                                        
                                                    icon={data.image} />
                                            </div>
                                            <p className={`title text-center ${subCategory.title === data.title ? 'text-primary fw-bold' : ''}`}>{t(data.title)}</p>                                    
                                        </div>
                                    ))                                
                                }                                                             
                            </>
                        }                        
                    </div>
                    <div className="col-8 list-mini-category">
                        <div className="header d-flex justify-content-between align-items-center">
                            <p>{t(subCategory.title)}</p>
                            <span
                                className="text-pointer" 
                                onClick={() => setOpenStyle(false)} >                                   
                                <ArrowLeft />
                            </span>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12 col-lg-6 d-flex flex-column align-items-center">
                                <Image
                                    width={80}
                                    height={80}
                                    src="/img/custom/subCategory1.svg" 
                                    alt="laxmi" />   
                                <p>Long</p> 
                            </div>
                            <div className="col-12 col-lg-6 d-flex flex-column align-items-center">
                                <Image
                                    width={80}
                                    height={80}
                                    src="/img/custom/subCategory2.svg" 
                                    alt="laxmi" />   
                                <p>Short</p> 
                            </div>
                        </div>                        
                    </div>
                </div> 
                </Slide>
                <div className="icon-style-list mt-2 pb-4">
                    <div className="row ">
                        {
                            category !== "suits" ?
                            list.map((data,index) => (
                                <div
                                    onClick={() => {
                                        setSubCategory({
                                            id : data.id,
                                            title : data.title
                                        })
                                        setOpenStyle(true)
                                    }} 
                                    key={index} 
                                    className="col-12 icon-style-item d-flex align-items-center text-pointer">
                                    <div className="img-container">
                                        <Icon
                                            category={category}
                                            icon={data.image}  />
                                    </div>
                                    <h6 className="title mb-0">{t(data.title)}</h6>  
                                </div>
                            )) :
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Jacket
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            {
                                                BlazerListStyle.map((data,index) => (
                                                    <div
                                                        onClick={() => {
                                                            setSubCategory({
                                                                id : data.id,
                                                                title : data.title
                                                            })
                                                            setOpenStyle(true)
                                                        }} 
                                                        key={index} 
                                                        className="col-12 icon-style-item d-flex align-items-center text-pointer">
                                                        <div className="img-container">
                                                            <Icon
                                                                category="blazer"
                                                                icon={data.image}  />
                                                        </div>
                                                        <h6 className="title mb-0">{t(data.title)}</h6>  
                                                    </div>
                                                ))                                                 
                                            }                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Trouser
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        {
                                            TrouserListStyle.map((data,index) => (
                                                <div
                                                    onClick={() => {
                                                        setSubCategory({
                                                            id : data.id,
                                                            title : data.title
                                                        })
                                                        setOpenStyle(true)
                                                    }} 
                                                    key={index} 
                                                    className="col-12 icon-style-item d-flex align-items-center text-pointer">
                                                    <div className="img-container">
                                                        <Icon
                                                            category="trousers"
                                                            icon={data.image}  />
                                                    </div>
                                                    <h6 className="title mb-0">{t(data.title)}</h6>  
                                                </div>
                                            ))                                                 
                                        }                                             </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Vest
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        {
                                            VestListStyle.map((data,index) => (
                                                <div
                                                    onClick={() => {
                                                        setSubCategory({
                                                            id : data.id,
                                                            title : data.title
                                                        })
                                                        setOpenStyle(true)
                                                    }} 
                                                    key={index} 
                                                    className="col-12 icon-style-item d-flex align-items-center text-pointer">
                                                    <div className="img-container">
                                                        <Icon
                                                            category="vests"
                                                            icon={data.image}  />
                                                    </div>
                                                    <h6 className="title mb-0">{t(data.title)}</h6>  
                                                </div>
                                            ))                                                 
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                        }
                    </div>
                </div>
        </div>
    )
}

export default StyleContainer