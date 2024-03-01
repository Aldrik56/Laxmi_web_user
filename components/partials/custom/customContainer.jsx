import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Slide from 'react-reveal/Slide';


// elements
import { ChevronRight, CheckCircleOutline } from '../../elements/icon'
import { ArrowLeft } from '../../elements/icon'

// sidebar
import FabricContainer from './sidebar/fabricContainer'
import { FabricList } from './sidebar/dataFabric'
import StyleContainer from './sidebar/styleContainer'
import AccentContainer from './sidebar/accentContainer'
import {
    BlazerListStyle,
    ShirtListStyle,
    TrouserListStyle,
    VestListStyle,
    BatikListStyle,
    BlazerAccentSubCategory,
    VestAccentSubCategory,
    ShirtAccentSubCategory,
    BlazerListAccent,
    ShirtListAccent,
    VestListAccent,
    BatikListAccent
} from './sidebar/dataSidebar'
import Icon from '../../elements/icon/custom'

import ModelContainer from './modelContainer'
import DetailContainer from './detailContainer'
import axios from 'axios'



const CustomContainer = ({ t }) => {
    const initialValue = {
        id: 1,
        title: "Collar",
        list: []
    }
    const [styleSelect, setStyleSelect] = useState({})
    const [sidebar, setSidebar] = useState(1)
    const [fabricList, setFabricList] = useState([])
    const [fabricSelect, setFabricSelect] = useState({})
    const [price, setPrice] = useState(30)
    const [sleeve, setSleeve] = useState(3)
    const [collar, setCollar] = useState(4)
    const [pocket, setPocket] = useState(0)
    const [placket, setPlacket] = useState(5)
    const [list, setList] = useState([])
    const [listAccent, setListAccent] = useState([])
    const [openStyle, setOpenStyle] = useState(false)
    const [subCategory, setSubCategory] = useState(initialValue)
    const router = useRouter()
    const { category } = router.query
    // const colorList = [
    //     {
    //         name: "Black",
    //         code: "#323232",
    //     },
    //     {
    //         name: "Navy",
    //         code: "#1d2541",
    //     },
    //     {
    //         name: "Red",
    //         code: "#b40808",
    //     },
    // ]

    useEffect(() => {
        switch (category) {
            case 'vests':
                setList(VestListStyle)
                setListAccent(VestListAccent)
                break;
            case 'batiks':
                setList(BatikListStyle)
                setListAccent(BatikListAccent)
                break;
            case 'shirts':
                setList(ShirtListStyle)
                setListAccent(ShirtListAccent)
                break;
            case 'trousers':
                setList(TrouserListStyle)
                break;
            case 'blazer':
                setList(BlazerListStyle)
                setListAccent(BlazerListAccent)
                break;
        }
    }, [category]);

    useEffect(async () => {
        try {
            var response = await axios.get("/api/fabric/list");
            console.log(response);
            const { status, message } = response.data
            if (status) {
                const { data } = response.data
                setFabricList(data)
            } else {
                setFabricList([])
            }
        } catch (e) {
            setFabricList([])
        }
    }, [])

    useEffect(() => {
        console.log(styleSelect.price);
        setPrice(0)
        switch (styleSelect.title) {
            case "Collar":
                setCollar(styleSelect.price)
                break;
            case "Sleeve":
                setSleeve(styleSelect.price)
                break;
            case "Chest Pocket":
                setPocket(styleSelect.price)
                break;
            case "Placket":
                setPlacket(styleSelect.price)
                break;
            default:
                break;
        }
        setPrice(fabricSelect.price + collar + sleeve + pocket + placket)
    }, [styleSelect, fabricSelect])


    // const changeSubCategory = async () => { 
    //     try {
    //         var response = await axios.get("/api/custom/list_sub_style");
    //     } catch (e) {

    //     }
    // }




    const StepSidebar = () => {
        switch (sidebar) {
            case 1:
                // return <FabricContainer t={t} onClick={(v) => setFabricSelect(v)} />
                return (
                    <div className="fabric-container">
                        <p className="title mb-0">{t("Select")} {t("Fabrics")}</p>
                        <p className="total mb-0">Total {t("Fabrics")} : {FabricList.length}</p>
                        <div className="fabric-list mt-2">
                            <div className="row ">
                                {
                                    FabricList.map((data, index) => (
                                        <div key={index} onClick={() => setFabricSelect(data)} className="mx-0 col-xl-4 col-lg-6 col-12 fabric-item text-pointer">
                                            <div className="img-container">
                                                {
                                                    data.isNew ?
                                                        <div className="new">
                                                            {t("common:New")}
                                                        </div> : null
                                                }
                                                <Image
                                                    layout="fill"
                                                    objectFit="cover"
                                                    src={data.image}
                                                    alt="laxmi" />
                                                <div className="price d-flex align-items-center w-100">
                                                    <h1> $ {data.price}.0</h1>
                                                </div>
                                            </div>
                                            <h6 className="title mb-0">{data.title}</h6>
                                            <p className="category mb-0">{data.category}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )
            case 2:
                // return <StyleContainer t={t} onClick={(v) => setStyleSelect(v)} />
                return (
                    <div className="style-container" >
                        <Slide left when={openStyle} duration={500} >
                            <div className={`row ${openStyle ? '' : 'd-none'}`}>
                                <div className="col-4 me-0 pe-0 d-flex flex-column align-items-center mini-category">
                                    {
                                        category !== "suits" ?
                                            list.map((data, index) => (
                                                <div
                                                    onClick={() => {
                                                        setSubCategory({
                                                            id: data.id,
                                                            title: data.title,
                                                            list: data.list_category,
                                                            other_list: data.other_category,
                                                            // list_color: data.list_color,
                                                        })
                                                    }}
                                                    // onClick={() => changeSubCategory(data)}
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
                                            )) :
                                            <>
                                                <div className="sub-category-item w-100 text-pointer">
                                                    <p className={`title text-center fw-bold`}>{t("common:blazer")}</p>
                                                </div>
                                                {
                                                    BlazerListStyle.map((data, index) => (
                                                        <div
                                                            onClick={() => {
                                                                setSubCategory({
                                                                    id: data.id,
                                                                    title: data.title
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
                                                    TrouserListStyle.map((data, index) => (
                                                        <div
                                                            onClick={() => {
                                                                setSubCategory({
                                                                    id: data.id,
                                                                    title: data.title
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
                                                    VestListStyle.map((data, index) => (
                                                        <div
                                                            onClick={() => {
                                                                setSubCategory({
                                                                    id: data.id,
                                                                    title: data.title
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
                                            onClick={() => setOpenStyle(false)}  >
                                            <ArrowLeft />
                                        </span>
                                    </div>
                                    <div className="row mt-4">
                                        <>
                                            {
                                                subCategory.list && subCategory.list?.map((v) => (
                                                    <div onClick={() =>
                                                        setStyleSelect({
                                                            type: "primary",
                                                            title: subCategory.title,
                                                            category: v.name,
                                                            price: v.price,
                                                        })
                                                    } className="col-12 col-lg-6 d-flex flex-column align-items-center">
                                                        {/* {
                                                         styleSelect.category === v.name && (
                                                            <CheckCircleOutline
                                                                width={20}
                                                                height={20}
                                                                color={"grey"}
                                                            />
                                                        )
                                                    } */}
                                                        <Image
                                                            width={65}
                                                            height={80}
                                                            src={v.image}
                                                            alt="laxmi" />
                                                        <p>{v.name}</p>
                                                    </div>

                                                ))

                                            }
                                            {
                                                subCategory.other_list && (
                                                    <p>{t("How are you going to wear this shirt?")}</p>
                                                )
                                            }
                                            {
                                                subCategory.other_list && subCategory.other_list?.map((v) => (
                                                    <>
                                                        <div onClick={() =>
                                                            setStyleSelect({
                                                                type: "secondary",
                                                                title: subCategory.title,
                                                                category: v.name,
                                                                price: v.price,
                                                            })
                                                        } className="col-12 col-lg-6 d-flex flex-column align-items-center">
                                                            {/* {
                                                         styleSelect.category === v.name && (
                                                            <CheckCircleOutline
                                                                width={20}
                                                                height={20}
                                                                color={"grey"}
                                                            />
                                                        )
                                                    } */}
                                                            <Image
                                                                width={65}
                                                                height={80}
                                                                src={v.image}
                                                                alt="laxmi" />
                                                            <p>{v.name}</p>
                                                        </div>
                                                    </>

                                                ))
                                            }
                                        </>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <div className={`icon-style-list mt-2 pb-4 ${!openStyle ? '' : 'd-none'}`}>
                            <div className={`row`}>
                                {
                                    category !== "suits" ?
                                        list.map((data, index) => (
                                            <div
                                                onClick={() => {
                                                    setSubCategory({
                                                        id: data.id,
                                                        title: data.title,
                                                        list: data.list_category,
                                                        other_list: data.other_category,
                                                    })
                                                    setOpenStyle(true)
                                                }}
                                                key={index}
                                                className="col-12 icon-style-item d-flex align-items-center text-pointer">
                                                <div className="img-container">
                                                    <Icon
                                                        category={category}
                                                        icon={data.image} />
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
                                                            BlazerListStyle.map((data, index) => (
                                                                <div
                                                                    onClick={() => {
                                                                        setSubCategory({
                                                                            id: data.id,
                                                                            title: data.title
                                                                        })
                                                                        setOpenStyle(true)
                                                                    }}
                                                                    key={index}
                                                                    className="col-12 icon-style-item d-flex align-items-center text-pointer">
                                                                    <div className="img-container">
                                                                        <Icon
                                                                            category="blazer"
                                                                            icon={data.image} />
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
                                                            TrouserListStyle.map((data, index) => (
                                                                <div
                                                                    onClick={() => {
                                                                        setSubCategory({
                                                                            id: data.id,
                                                                            title: data.title
                                                                        })
                                                                        setOpenStyle(true)
                                                                    }}
                                                                    key={index}
                                                                    className="col-12 icon-style-item d-flex align-items-center text-pointer">
                                                                    <div className="img-container">
                                                                        <Icon
                                                                            category="trousers"
                                                                            icon={data.image} />
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
                                                            VestListStyle.map((data, index) => (
                                                                <div
                                                                    onClick={() => {
                                                                        setSubCategory({
                                                                            id: data.id,
                                                                            title: data.title
                                                                        })
                                                                        setOpenStyle(true)
                                                                    }}
                                                                    key={index}
                                                                    className="col-12 icon-style-item d-flex align-items-center text-pointer">
                                                                    <div className="img-container">
                                                                        <Icon
                                                                            category="vests"
                                                                            icon={data.image} />
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
            case 3:
                return <AccentContainer t={t} />
                // return (
                //     <div className="style-container">
                //         <Slide left when={openStyle} duration={500} >
                //             <div className={`row ${openStyle ? '' : 'd-none'}`}>
                //                 <div className="col-4 me-0 pe-0 d-flex flex-column align-items-center mini-category">
                //                     {
                //                         category !== "suits" ?
                //                             listAccent.map((data, index) => (
                //                                 <div
                //                                     onClick={() => {
                //                                         console.log(data);
                //                                         setSubCategory({
                //                                             id: data.id,
                //                                             title: data.title,
                //                                             list: data.list_category,
                //                                             list_color: data.list_color,
                //                                         })
                //                                     }}
                //                                     // onClick={() => changeSubCategory(data)}
                //                                     key={index}
                //                                     className="sub-category-item w-100 text-pointer">
                //                                     <div className="d-flex justify-content-center">
                //                                         <Icon
                //                                             color={subCategory.title === data.title ? '#1E1E22' : '#757575'}
                //                                             category={category}
                //                                             icon={data.image} />
                //                                     </div>
                //                                     <p className={`title text-center ${subCategory.title === data.title ? 'text-primary fw-bold' : ''}`}>{t(data.title)}</p>
                //                                 </div>
                //                             )) :
                //                             <>
                //                                 <div className="sub-category-item w-100 text-pointer">
                //                                     <p className={`title text-center fw-bold`}>{t("common:blazer")}</p>
                //                                 </div>
                //                                 {
                //                                     BlazerListAccent.map((data, index) => (
                //                                         <div
                //                                             onClick={() => {
                //                                                 setSubCategory({
                //                                                     id: data.id,
                //                                                     title: data.title
                //                                                 })
                //                                             }}
                //                                             key={index}
                //                                             className="sub-category-item w-100 text-pointer">
                //                                             <div className="d-flex justify-content-center">
                //                                                 <Icon
                //                                                     color={subCategory.title === data.title ? '#1E1E22' : '#757575'}
                //                                                     category="blazer"
                //                                                     icon={data.image} />
                //                                             </div>
                //                                             <p className={`title text-center ${subCategory.title === data.title ? 'text-primary fw-bold' : ''}`}>{t(data.title)}</p>
                //                                         </div>
                //                                     ))
                //                                 }

                //                                 <div className="sub-category-item w-100 text-pointer">
                //                                     <p className={`title text-center fw-bold`}>{t("common:vests")}</p>
                //                                 </div>
                //                                 {
                //                                     VestListAccent.map((data, index) => (
                //                                         <div
                //                                             onClick={() => {
                //                                                 setSubCategory({
                //                                                     id: data.id,
                //                                                     title: data.title
                //                                                 })
                //                                             }}
                //                                             key={index}
                //                                             className="sub-category-item w-100 text-pointer">
                //                                             <div className="d-flex justify-content-center">
                //                                                 <Icon
                //                                                     color={subCategory.title === data.title ? '#1E1E22' : '#757575'}
                //                                                     category="vests"
                //                                                     icon={data.image} />
                //                                             </div>
                //                                             <p className={`title text-center ${subCategory.title === data.title ? 'text-primary fw-bold' : ''}`}>{t(data.title)}</p>
                //                                         </div>
                //                                     ))
                //                                 }
                //                             </>
                //                     }
                //                 </div>
                //                 <div className="col-8 list-mini-category">
                //                     <div className="header d-flex justify-content-between align-items-center">
                //                         <p>{t(subCategory.title)}</p>
                //                         <span
                //                             className="text-pointer"
                //                             onClick={() => setOpenStyle(false)}  >
                //                             <ArrowLeft />
                //                         </span>
                //                     </div>
                //                     <div className="row mt-4">
                //                         {
                //                             subCategory.list && subCategory.list?.map((v) => (
                //                                 <div onClick={() => {
                //                                     setStyleSelect({
                //                                         title: subCategory.title,
                //                                         category: v.name,
                //                                         price: v.price,
                //                                         type: "primary",
                //                                         // color: styleSelect.color ?? "Black"
                //                                     })

                //                                 }
                //                                 } className="col-12 col-lg-6 d-flex flex-column align-items-center">
                //                                     {/* {
                //                                          styleSelect.category === v.name && (
                //                                             <CheckCircleOutline
                //                                                 width={20}
                //                                                 height={20}
                //                                                 color={"grey"}
                //                                             />
                //                                         )
                //                                     } */}
                //                                     <Image
                //                                         width={65}
                //                                         height={80}
                //                                         src={v.image}
                //                                         alt="laxmi" />
                //                                     <p>{v.name}</p>
                //                                 </div>

                //                             ))
                //                         }
                //                         {
                //                             subCategory.list_color && (
                //                                 <p>{t("Custom Color")}</p>
                //                             )
                //                         }
                //                         {
                //                             <div className="row">
                //                                 {
                //                                     subCategory.list_color && subCategory.list_color?.map((v, index) => (
                //                                         <div onClick={() => {
                //                                             setStyleSelect({
                //                                                 title: subCategory.title,
                //                                                 category: v.name,
                //                                                 price: v.price,
                //                                                 type: "color",
                //                                             })
                //                                         }} key={index} className="col-6 col-md-4 col-lg-2 my-2">
                //                                             <div style={{
                //                                                 backgroundColor: v.code
                //                                             }} className="color-item text-pointer"></div>
                //                                         </div>
                //                                     ))
                //                                 }
                //                             </div>
                //                         }
                //                         {/* {

                //                             (subCategory.title.includes("Contrasted Collar") ||
                //                                 subCategory.title.includes("Customize Cuffs") ||
                //                                 subCategory.title.includes("Buttons")) && (
                //                                 <>
                //                                     <div className="header d-flex justify-content-between align-items-center">
                //                                         <p>{t("Custom Color")}</p>
                //                                     </div>
                //                                     <div className="row">
                //                                         {
                //                                             colorList.map((data, index) => (
                //                                                 <div onClick={() => {
                //                                                     setStyleSelect({
                //                                                         ...styleSelect,
                //                                                         color: data.name,
                //                                                     })
                //                                                 }} key={index} className="col-6 col-md-4 col-lg-2 my-2">
                //                                                     <div style={{
                //                                                         backgroundColor: data.code
                //                                                     }} className="color-item text-pointer"></div>
                //                                                 </div>
                //                                             ))
                //                                         }
                //                                     </div>
                //                                 </>
                //                             )
                //                         } */}
                //                     </div>
                //                 </div>
                //             </div>
                //         </Slide>
                //         <div className={`icon-style-list mt-2 pb-4 ${!openStyle ? '' : 'd-none'}`}>
                //             <div className="row ">
                //                 {
                //                     category !== "suits" ?
                //                         listAccent.map((data, index) => (
                //                             <div
                //                                 onClick={() => {
                //                                     setSubCategory({
                //                                         id: data.id,
                //                                         title: data.title,
                //                                         list: data.list_category,
                //                                         list_color: data.list_color,
                //                                     })
                //                                     setOpenStyle(true)
                //                                 }}
                //                                 key={index}
                //                                 className="col-12 icon-style-item d-flex align-items-center text-pointer">
                //                                 <div className="img-container">
                //                                     <Icon
                //                                         category={category}
                //                                         icon={data.image} />
                //                                 </div>
                //                                 <h6 className="title mb-0">{t(data.title)}</h6>
                //                             </div>
                //                         )) :
                //                         <div className="accordion" id="accordionExample">
                //                             <div className="accordion-item">
                //                                 <h2 className="accordion-header" id="headingOne">
                //                                     <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                //                                         Jacket
                //                                     </button>
                //                                 </h2>
                //                                 <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                //                                     <div className="accordion-body">
                //                                         {
                //                                             BlazerListStyle.map((data, index) => (
                //                                                 <div
                //                                                     onClick={() => {
                //                                                         setSubCategory({
                //                                                             id: data.id,
                //                                                             title: data.title
                //                                                         })
                //                                                         setOpenStyle(true)
                //                                                     }}
                //                                                     key={index}
                //                                                     className="col-12 icon-style-item d-flex align-items-center text-pointer">
                //                                                     <div className="img-container">
                //                                                         <Icon
                //                                                             category="blazer"
                //                                                             icon={data.image} />
                //                                                     </div>
                //                                                     <h6 className="title mb-0">{t(data.title)}</h6>
                //                                                 </div>
                //                                             ))
                //                                         }
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                             <div className="accordion-item">
                //                                 <h2 className="accordion-header" id="headingTwo">
                //                                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                //                                         Trouser
                //                                     </button>
                //                                 </h2>
                //                                 <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                //                                     <div className="accordion-body">
                //                                         {
                //                                             TrouserListStyle.map((data, index) => (
                //                                                 <div
                //                                                     onClick={() => {
                //                                                         setSubCategory({
                //                                                             id: data.id,
                //                                                             title: data.title
                //                                                         })
                //                                                         setOpenStyle(true)
                //                                                     }}
                //                                                     key={index}
                //                                                     className="col-12 icon-style-item d-flex align-items-center text-pointer">
                //                                                     <div className="img-container">
                //                                                         <Icon
                //                                                             category="trousers"
                //                                                             icon={data.image} />
                //                                                     </div>
                //                                                     <h6 className="title mb-0">{t(data.title)}</h6>
                //                                                 </div>
                //                                             ))
                //                                         }                                             </div>
                //                                 </div>
                //                             </div>
                //                             <div className="accordion-item">
                //                                 <h2 className="accordion-header" id="headingThree">
                //                                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                //                                         Vest
                //                                     </button>
                //                                 </h2>
                //                                 <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                //                                     <div className="accordion-body">
                //                                         {
                //                                             VestListStyle.map((data, index) => (
                //                                                 <div
                //                                                     onClick={() => {
                //                                                         setSubCategory({
                //                                                             id: data.id,
                //                                                             title: data.title
                //                                                         })
                //                                                         setOpenStyle(true)
                //                                                     }}
                //                                                     key={index}
                //                                                     className="col-12 icon-style-item d-flex align-items-center text-pointer">
                //                                                     <div className="img-container">
                //                                                         <Icon
                //                                                             category="vests"
                //                                                             icon={data.image} />
                //                                                     </div>
                //                                                     <h6 className="title mb-0">{t(data.title)}</h6>
                //                                                 </div>
                //                                             ))
                //                                         }
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                         </div>
                //                 }
                //             </div>
                //         </div>
                //     </div>
                // )
            default:
                return <p>Page Not Found</p>
        }
    }

    return (
        <div className="container-fluid custom">
            <div className="position-relative w-100 d-flex justify-content-center align-items-center nav">

                <div className="stepper mt-4 d-flex flex-row">
                    <p
                        onClick={() => setSidebar(1)}
                        className={`${sidebar === 1 ? 'active' : ''} text-pointer`}>{t("Fabrics")}</p>
                    <ChevronRight />
                    <p
                        onClick={() => {
                            setOpenStyle(false)
                            setSidebar(2)
                        }}
                        className={`${sidebar === 2 ? 'active' : ''} text-pointer`}>{t("Style")}</p>
                    {
                        category !== "trousers" ?
                            <>
                                <ChevronRight />
                                <p
                                    onClick={() => {
                                        setOpenStyle(false)
                                        setSidebar(3)
                                    }}
                                    className={`${sidebar === 3 ? 'active' : ''} text-pointer`}>{t("Accents")}</p>
                            </> : null
                    }
                </div>
            </div>
            <hr className="hr-stepper w-100 mb-0" />
            <div className="row">
                <div className="col-4">
                    <StepSidebar />
                </div>
                <div className="col-5 d-flex justify-content-center">
                    <ModelContainer t={t} fabricSelect={fabricSelect} styleSelect={styleSelect} category={category.toLowerCase()} />
                </div>
                <div className="col-3">
                    <DetailContainer
                        category={category}
                        sidebar={sidebar}
                        price={price}
                        setSidebar={setSidebar}
                        t={t} />
                </div>
            </div>
        </div>
    )
    // return (<></>);
}

export default CustomContainer;