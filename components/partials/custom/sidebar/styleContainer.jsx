import Image from 'next/image'
import { useRouter } from 'next/router'
import Slide from 'react-reveal/Slide';

import React, { useState, useEffect, useCallback } from 'react';

// elements
import { ArrowLeft } from '../../../elements/icon'
import Icon from '../../../elements/icon/custom'


const StyleContainer = (props) => {
    const [data, setData] = useState(props)
    const router = useRouter()
    const { category } = router.query
    const [subCategory, setSubCategory] = useState()
    useEffect(() => {
        if (props.styleSelected) {
            setSubCategory({
                id: props.styleSelected.id,
                title: props.styleSelected.title,
                list: props.styleSelected.list,
            })
        }
    }, [props.styleSelected])


    return (
        <>
            <div className="style-container" >
                {subCategory ? 
                    <Slide when={true} left duration={500} >
                    <div className={`row`}>
                        <div className="col-4 me-0 pe-0 d-flex flex-column align-items-center mini-category">
                            {
                                props.listStyle.map((data, index) => (
                                    <div
                                        onClick={() => {
                                            setSubCategory({
                                                id: data.id,
                                                title: data.title,
                                                list: data.list_category,
                                                other_list: data.other_category,
                                            })
                                        }}
                                        key={index}
                                        className={`sub-category-item w-100 text-pointer`}>
                                        <div className="d-flex justify-content-center">
                                            <Icon
                                                color={subCategory.title === data.title ? '#1E1E22' : '#757575'}
                                                category={category}
                                                icon={data.image} />
                                        </div>
                                        <p className={`title text-center ${props.subCategory?.title === data.title ? 'text-primary fw-bold' : ''}`}>{props.t(data.title)}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="col-8 list-mini-category">
                            <div className="header d-flex justify-content-between align-items-center">
                                <p>{props.t(subCategory.title)}</p>
                                <span
                                    className="text-pointer"
                                    onClick={() => props.onClickOpenStyle(false)}  >
                                    <ArrowLeft />
                                </span>
                            </div>
                            <div className="row mt-4">
                                <>
                                    {
                                        subCategory.list && subCategory.list?.map((v) => (
                                        
                                            <div
                                                onClick={() => props.onClick({
                                                    id: subCategory.id,
                                                    title: subCategory.title,
                                                    list: subCategory.list,
                                                    name: v.name,
                                                })}
                                                
                                                className='col-12 col-lg-6 d-flex flex-column align-items-center text-pointer '>
                                                <Image
                                                    width={65}
                                                    height={80}
                                                    src={v.image}
                                                    alt="laxmi" />
                                                <p>{v.name}</p>
                                            </div>
                                        ))
                                    }
                                </>
                            </div>
                        </div>
                    </div>
                </Slide>

                : 

                <div className={`icon-style-list mt-2 pb-4 ${!props.isOpenStyle ? '' : 'd-none'}`}>
                    <div className={`row`}>
                        {
                            props.listStyle.map((data, index) => (
                                <div
                                    onClick={() => {
                                        console.log(data.title)
                                        setSubCategory({
                                            id: data.id,
                                            title: data.title,
                                            list: data.list_category,
                                            other_list: data.other_category,
                                        });
                                    }}
                                    className='col-12 icon-style-item d-flex align-items-center text-pointer'>
                                    <div className="img-container">
                                        <Icon
                                            category={category}
                                            icon={data.image} />
                                    </div>
                                    <h6 className="title mb-0">{props.t(data.title)}</h6>
                                </div>
                            ))
                        }
                    </div>
                </div>

                }
                
            </div>
        </>
    )
}

export default StyleContainer