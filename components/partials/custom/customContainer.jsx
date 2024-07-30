import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Slide from 'react-reveal/Slide';
import _debounce from 'lodash/debounce';



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
import useHookCustom from './hookCustom';
const fontList = [
    // {
    //     fontFamily: "Mr Bedfort",
    //     type: "cursive"
    // },
    // {
    //     fontFamily: "Philosopher",
    //     type: "sans-serif"
    // },
    // {
    //     fontFamily: "Princess Sofia",
    //     type: "cursive"
    // },
    // {
    //     fontFamily: "Rakkas",
    //     type: "cursive"
    // },
    // {
    //     fontFamily: "Revalia",
    //     type: "cursive"
    // },
    {
        fontFamily: "Ananda Black",
        type: "sans-serif"
    },
    {
        fontFamily: "Curetro",
        type: "sans-serif"
    },
    {
        fontFamily: "Naliko Betah",
        type: "sans-serif"
    },
]

const colorList = [
    "#28568C",
    "#B4272C",
    "#F0EFEC",
]

const intialPosition = [
    "Chest",
    "Low",
    "Medium",
    "Cuff",
]



const CustomContainer = ({ t }) => {
    const initialValue = {
        id: 1,
        title: "Collar",
        list: []
    }
    const {
        openStyle,
        listStyle,
        fabricList,
        styleSelect,
        fabricSelect,
        dataStyle,
        isLoading,
        isLoadingFabric,
        setOpenStyle,
        setStyleSelect,
        setFabricSelect,
    } = useHookCustom();

    const [bordir, setBordir] = useState({})

    const [sidebar, setSidebar] = useState(1)
    const [listAccent, setListAccent] = useState([])
    const [subCategory, setSubCategory] = useState(initialValue)
    const router = useRouter()
    const debouncedHandleTyping = _debounce(handleTyping, 500);
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

    // useEffect(() => {
    //     switch (category) {
    //         case 'vests':
    //             setList(VestListStyle)
    //             setListAccent(VestListAccent)
    //             break;
    //         case 'batiks':
    //             setList(BatikListStyle)
    //             setListAccent(BatikListAccent)
    //             break;
    //         case 'shirts':
    //             setList(ShirtListStyle)
    //             setListAccent(ShirtListAccent)
    //             break;
    //         case 'trousers':
    //             setList(TrouserListStyle)
    //             break;
    //         case 'blazer':
    //             setList(BlazerListStyle)
    //             setListAccent(BlazerListAccent)
    //             break;
    //     }
    // }, [category]);

    // useEffect(async () => {
    //     try {
    //         var response = await axios.get("/api/fabric/list");
    //         console.log(response);
    //         const { status, message } = response.data
    //         if (status) {
    //             const { data } = response.data
    //             setFabricList(data)
    //         } else {
    //             setFabricList([])
    //         }
    //     } catch (e) {
    //         setFabricList([])
    //     }
    // }, [])

    // useEffect(() => {
    //     console.log(styleSelect.price);
    //     setPrice(0)
    //     switch (styleSelect.title) {
    //         case "Collar":
    //             setCollar(styleSelect.price)
    //             break;
    //         case "Sleeve":
    //             setSleeve(styleSelect.price)
    //             break;
    //         case "Chest Pocket":
    //             setPocket(styleSelect.price)
    //             break;
    //         case "Placket":
    //             setPlacket(styleSelect.price)
    //             break;
    //         default:
    //             break;
    //     }
    //     setPrice(fabricSelect?.price + collar + sleeve + pocket + placket)
    // }, [styleSelect, fabricSelect])



    function handleTyping(v) {
        setBordir(v)
        console.log(v);
    }

    // return (
    //     <div className="style-container" >
    //         <Slide left when={openStyle} duration={500} >
    //             <div className={`row ${openStyle ? '' : 'd-none'}`}>
    //                 <div className="col-4 me-0 pe-0 d-flex flex-column align-items-center mini-category">
    //                     {
    //                         category !== "suits" ?
    //                             list.map((data, index) => (
    //                                 <div
    //                                     onClick={() => {
    //                                         setSubCategory({
    //                                             id: data.id,
    //                                             title: data.title,
    //                                             list: data.list_category,
    //                                             other_list: data.other_category,
    //                                             // list_color: data.list_color,
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
    //                                     BlazerListStyle.map((data, index) => (
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
    //                                     <p className={`title text-center fw-bold`}>{t("common:trousers")}</p>
    //                                 </div>
    //                                 {
    //                                     TrouserListStyle.map((data, index) => (
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
    //                                                     category="trousers"
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
    //                                     VestListStyle.map((data, index) => (
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
    //                         <>
    //                             {
    //                                 subCategory.list && subCategory.list?.map((v) => (
    //                                     <div onClick={() =>
    //                                         setStyleSelect({
    //                                             type: "primary",
    //                                             title: subCategory.title,
    //                                             category: v.name,
    //                                             price: v.price,
    //                                         })
    //                                     } className="col-12 col-lg-6 d-flex flex-column align-items-center">
    //                                         {/* {
    //                                          styleSelect.category === v.name && (
    //                                             <CheckCircleOutline
    //                                                 width={20}
    //                                                 height={20}
    //                                                 color={"grey"}
    //                                             />
    //                                         )
    //                                     } */}
    //                                         <Image
    //                                             width={65}
    //                                             height={80}
    //                                             src={v.image}
    //                                             alt="laxmi" />
    //                                         <p>{v.name}</p>
    //                                     </div>
    //                                 ))
    //                             }
    //                             {
    //                                 subCategory.other_list && (
    //                                     <p>{t("How are you going to wear this shirt?")}</p>
    //                                 )
    //                             }
    //                             {
    //                                 subCategory.other_list && subCategory.other_list?.map((v) => (
    //                                     <>
    //                                         <div onClick={() =>
    //                                             setStyleSelect({
    //                                                 type: "secondary",
    //                                                 title: subCategory.title,
    //                                                 category: v.name,
    //                                                 price: v.price,
    //                                             })
    //                                         } className="col-12 col-lg-6 d-flex flex-column align-items-center">
    //                                             {/* {
    //                                          styleSelect.category === v.name && (
    //                                             <CheckCircleOutline
    //                                                 width={20}
    //                                                 height={20}
    //                                                 color={"grey"}
    //                                             />
    //                                         )
    //                                     } */}
    //                                             <Image
    //                                                 width={65}
    //                                                 height={80}
    //                                                 src={v.image}
    //                                                 alt="laxmi" />
    //                                             <p>{v.name}</p>
    //                                         </div>
    //                                     </>
    //                                 ))
    //                             }
    //                         </>
    //                     </div>
    //                 </div>
    //             </div>
    //         </Slide>
    //         <div className={`icon-style-list mt-2 pb-4 ${!openStyle ? '' : 'd-none'}`}>
    //             <div className={`row`}>
    //                 {
    //                     category !== "suits" ?
    //                         list.map((data, index) => (
    //                             <div
    //                                 onClick={() => {
    //                                     setSubCategory({
    //                                         id: data.id,
    //                                         title: data.title,
    //                                         list: data.list_category,
    //                                         other_list: data.other_category,
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
    const StepSidebar = () => {
        switch (sidebar) {
            case 1:
                return <FabricContainer
                    t={t}
                    list={fabricList}
                    listSelected={fabricSelect}
                    onClick={(v) => setFabricSelect(v)} />
            case 2:
                return <StyleContainer
                    t={t}
                    isOpenStyle={openStyle}
                    listStyle={listStyle}
                    styleSelected={styleSelect}
                    onClickOpenStyle={(v) => setOpenStyle(v)}
                    onClick={(v) => setStyleSelect(v)} />
            case 3:
                const [bordirs, setBordirs] = useState(bordir)
                // return <AccentContainer t={t} />
                return (
                    <div className="style-container">
                        <Slide left when={openStyle} duration={500} >
                            <div className={`row ${openStyle ? '' : 'd-none'}`}>
                                <div className="col-4 me-0 pe-0 d-flex flex-column align-items-center mini-category">
                                    {
                                        category !== "suits" ?
                                            listAccent.map((data, index) => (
                                                <div
                                                    onClick={() => {
                                                        console.log(data);
                                                        setSubCategory({
                                                            id: data.id,
                                                            title: data.title,
                                                            list: data.list_category,
                                                            list_color: data.list_color,
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
                                                    BlazerListAccent.map((data, index) => (
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
                                                    <p className={`title text-center fw-bold`}>{t("common:vests")}</p>
                                                </div>
                                                {
                                                    VestListAccent.map((data, index) => (
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
                                        {
                                            category === "shirts" && subCategory.title === "Embroidory" && (
                                                <>
                                                    <div className="col-12">
                                                        <input
                                                            className="form-control"
                                                            type="search"
                                                            maxLength={5}
                                                            value={bordirs.name}
                                                            onChange={(v) => {
                                                                const newBordir = { ...bordirs }
                                                                newBordir.name = v.target.value
                                                                newBordir.autoFocus = true
                                                                setBordirs(newBordir)
                                                                debouncedHandleTyping(newBordir);
                                                            }}
                                                            autoFocus={bordirs.autoFocus ?? true}
                                                            placeholder="Type your initials" />
                                                        <p className="mt-4 title-sub-accent">{t("Font")} : </p>
                                                    </div>
                                                    <div className="row">
                                                        {
                                                            fontList.map((data, index) => (
                                                                <div className="col-12 col-lg-6" key={index}
                                                                    onClick={() => {
                                                                        const newBordir = { ...bordirs }
                                                                        newBordir.font = data.fontFamily
                                                                        newBordir.autoFocus = false
                                                                        setBordirs(newBordir)
                                                                        debouncedHandleTyping(newBordir);
                                                                    }}
                                                                >
                                                                    <div className="form-check d-flex align-items-center">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="radio"
                                                                            style={{ width: 16, height: 16 }}
                                                                            checked={bordirs.font === data.fontFamily}
                                                                            name="MonogramCheckbox"
                                                                            id={`monogramItemCheck${index}`}
                                                                            value={bordirs.font} />
                                                                        <label
                                                                            style={{
                                                                                fontFamily: data.fontFamily
                                                                            }}
                                                                            className="form-check-label"
                                                                            for={`monogramItemCheck${index}`}>
                                                                            ABC
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                    <p className="mt-4 title-sub-accent">{t("Monogram Thread Color")} : </p>
                                                    <div className="row">
                                                        {
                                                            colorList.map((data, index) => (
                                                                <>
                                                                    <div key={index} className="col-6 col-md-4 col-lg-2 my-2"
                                                                        onClick={() => {
                                                                            const newBordir = { ...bordirs }
                                                                            newBordir.color = data
                                                                            newBordir.autoFocus = false
                                                                            setBordirs(newBordir)
                                                                            debouncedHandleTyping(newBordir);
                                                                        }} >
                                                                        <div style={{
                                                                            backgroundColor: data
                                                                        }} className="color-item text-pointer"></div>
                                                                        {
                                                                            bordirs.color && bordirs.color === data && (
                                                                                <div style={{
                                                                                    marginTop: 2,
                                                                                    height: 2,
                                                                                    backgroundColor: data
                                                                                }} className="color-item text-pointer"></div>
                                                                            )
                                                                        }
                                                                    </div>
                                                                </>
                                                            ))
                                                        }
                                                    </div>
                                                    <p className="mt-4 title-sub-accent">Initial Position : </p>
                                                    <div className="row">
                                                        {
                                                            intialPosition.map((data, index) => (
                                                                <div className="col-12" key={index}
                                                                    onClick={() => {
                                                                        const newBordir = { ...bordirs }
                                                                        newBordir.position = data
                                                                        newBordir.autoFocus = false
                                                                        setBordirs(newBordir)
                                                                        debouncedHandleTyping(newBordir);
                                                                    }}>
                                                                    <div className="form-check d-flex align-items-center">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="radio"
                                                                            style={{ width: 16, height: 16 }}
                                                                            name="InitialPositionCheckbox"
                                                                            id={`positionCheck${index}`}
                                                                            checked={bordirs.position === data}
                                                                            value={bordirs.position} />
                                                                        <label
                                                                            className="form-check-label"
                                                                            // style={{ fontSize: 12 }}
                                                                            for={`positionCheck${index}`}>
                                                                            {data}
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </>
                                            )
                                        }
                                        {
                                            subCategory.list && subCategory.list?.map((v) => (
                                                <div onClick={() => {
                                                    setStyleSelect({
                                                        title: subCategory.title,
                                                        category: v.name,
                                                        price: v.price,
                                                        type: "primary",
                                                        // color: styleSelect.color ?? "Black"
                                                    })

                                                }
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
                                            subCategory.list_color && (
                                                <p className="mt-4 title-sub-accent">{t("Custom Color")}</p>
                                            )
                                        }
                                        {
                                            <div className="row">
                                                {
                                                    subCategory.list_color && subCategory.list_color?.map((v, index) => (
                                                        <div onClick={() => {
                                                            setStyleSelect({
                                                                title: subCategory.title,
                                                                category: v.name,
                                                                price: v.price,
                                                                type: "color",
                                                            })
                                                        }} key={index} className="col-6 col-md-4 col-lg-2 my-2">
                                                            <div style={{
                                                                backgroundColor: v.code
                                                            }} className="color-item text-pointer"></div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        }
                                        {/* {

                                            (subCategory.title.includes("Contrasted Collar") ||
                                                subCategory.title.includes("Customize Cuffs") ||
                                                subCategory.title.includes("Buttons")) && (
                                                <>
                                                    <div className="header d-flex justify-content-between align-items-center">
                                                        <p>{t("Custom Color")}</p>
                                                    </div>
                                                    <div className="row">
                                                        {
                                                            colorList.map((data, index) => (
                                                                <div onClick={() => {
                                                                    setStyleSelect({
                                                                        ...styleSelect,
                                                                        color: data.name,
                                                                    })
                                                                }} key={index} className="col-6 col-md-4 col-lg-2 my-2">
                                                                    <div style={{
                                                                        backgroundColor: data.code
                                                                    }} className="color-item text-pointer"></div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </>
                                            )
                                        } */}
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <div className={`icon-style-list mt-2 pb-4 ${!openStyle ? '' : 'd-none'}`}>
                            <div className="row">
                                {
                                    category !== "suits" ?
                                        listAccent.map((data, index) => (
                                            <div
                                                onClick={() => {
                                                    setSubCategory({
                                                        id: data.id,
                                                        title: data.title,
                                                        list: data.list_category,
                                                        list_color: data.list_color,
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
                    <ModelContainer
                        t={t}
                        isLoading={isLoading}
                        isLoadingFabric={isLoadingFabric}
                        dataStyle={dataStyle} />
                </div>
                <div className="col-3">
                    <DetailContainer
                        category={category}
                        sidebar={sidebar}
                        price={0}
                        setSidebar={setSidebar}
                        t={t} />
                </div>
            </div>
        </div>
    )
    // return (<></>);
}

export default CustomContainer;