import { useRouter } from 'next/router'
import Image from 'next/image'
import Slide from 'react-reveal/Slide';

import React, { useState, useEffect } from 'react';

// elements
import Icon from '../../../elements/icon/custom'
import { ArrowLeft } from '../../../elements/icon'

// data
import {
    BlazerAccentSubCategory,
    VestAccentSubCategory,
    ShirtAccentSubCategory,
    BlazerListAccent,
    ShirtListAccent,
    VestListAccent,
    BatikListAccent
} from './dataSidebar'

import {
    FabricList
} from './dataFabric'

// module
import Monogram from './module/monogram'
import AccentSubCategoryFilter from './module/accentSubCategoryFilter'

const AccentContainer = ({ t }) => {
    const router = useRouter()
    const { category } = router.query
    const [list, setList] = useState([])
    const [openStyle, setOpenStyle] = useState(false)
    const [openFabric, setOpenFabric] = useState(false)
    const [openData, setOpenData] = useState(false)

    const [nameSubCategory, setNameSubCategory] = useState("")
    const [subCategory, setSubCategory] = useState({})

    useEffect(() => {
        switch (category) {
            case 'vests':
                setList(VestListAccent)
                break;
            case 'batiks':
                setList(BatikListAccent)
                break;
            case 'shirts':
                setList(ShirtListAccent)
                break;
            case 'blazer':
                setList(BlazerListAccent)
                break;
            default:
                return false
        }
    }, [category]);

    const SubCategory = () => {
        if (category === "shirts") {
            switch (subCategory.title) {
                case 'Embroidory':
                    return <Monogram t={t} category={category} />
                case 'Contrasted Collar':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={ShirtAccentSubCategory.ContrastedCollar} />
                case 'Customize Cuffs':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={ShirtAccentSubCategory.CustomizeCuffs} />
                case 'Threads':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={ShirtAccentSubCategory.Threads} />
                case 'Elbow Patches':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={ShirtAccentSubCategory.ElbowPatches} />
                case 'Buttons':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={ShirtAccentSubCategory.Buttons} />

                default:
                    return false
            }
        } else if (category === "batiks") {
            switch (subCategory.title) {
                case 'Embroidory':
                    return <Monogram t={t} category={category} />
                case 'Contrasted Collar':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={ShirtAccentSubCategory.ContrastedCollar} />
                case 'Customize Cuffs':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={ShirtAccentSubCategory.CustomizeCuffs} />
                case 'Threads':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={ShirtAccentSubCategory.Threads} />
                case 'Elbow Patches':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={ShirtAccentSubCategory.ElbowPatches} />
                case 'Buttons':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={ShirtAccentSubCategory.Buttons} />

                default:
                    return false
            }
        } else if (category === "vests") {
            switch (subCategory.title) {
                case 'Monogram':
                    return <Monogram t={t} category={category} />
                case 'Lining':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={VestAccentSubCategory.Lining} />
                case 'Back Lining':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={VestAccentSubCategory.Backlining} />
                case 'Buttons':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={VestAccentSubCategory.Buttons} />
                case 'Threads':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={VestAccentSubCategory.Threads} />

                default:
                    return false
            }
        } else if (category === "blazer") {
            switch (subCategory.title) {
                case 'Monogram':
                    return <Monogram t={t} category={category} />
                case 'Lining':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={BlazerAccentSubCategory.Lining} />
                case 'Lapels':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={BlazerAccentSubCategory.Lapels} />
                case 'Buttons':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={BlazerAccentSubCategory.Buttons} />
                case 'Threads':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={BlazerAccentSubCategory.Threads} />
                case 'Elbow Patches':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={BlazerAccentSubCategory.ElbowPatches} />
                case 'Neck Lining':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={BlazerAccentSubCategory.NeckLining} />

                default:
                    return false
            }
        } else {
            return false
        }
    }

    const SubCategorySuits = () => {
        if (nameSubCategory === "blazer") {
            switch (subCategory.title) {
                case 'Monogram':
                    return <Monogram t={t} category={category} />
                case 'Lining':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={BlazerAccentSubCategory.Lining} />
                case 'Lapels':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={BlazerAccentSubCategory.Lapels} />
                case 'Buttons':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={BlazerAccentSubCategory.Buttons} />
                case 'Threads':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={BlazerAccentSubCategory.Threads} />
                case 'Elbow Patches':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={BlazerAccentSubCategory.ElbowPatches} />
                case 'Neck Lining':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={BlazerAccentSubCategory.NeckLining} />

                default:
                    return false
            }
        } else {
            switch (subCategory.title) {
                case 'Monogram':
                    return <Monogram t={t} category={category} />
                case 'Lining':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={VestAccentSubCategory.Lining} />
                case 'Back Lining':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={VestAccentSubCategory.Backlining} />
                case 'Buttons':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={VestAccentSubCategory.Buttons} />
                case 'Threads':
                    return <AccentSubCategoryFilter
                        setOpenData={setOpenData}
                        setOpenFabric={setOpenFabric}
                        t={t}
                        data={VestAccentSubCategory.Threads} />

                default:
                    return false
            }
        }

    }
    return (
        <div className="style-container">
            <Slide left when={openStyle} duration={500}>
                <div className={`row sub-category ${openStyle ? '' : 'd-none'}`}>
                    <div className="col-4 me-0 pe-0 d-flex flex-column align-items-center mini-category">
                        {
                            category !== "suits" ?
                                list.map((data, index) => (
                                    <div
                                        onClick={() => {
                                            setOpenFabric(false)
                                            setOpenData(false)
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
                                                    setNameSubCategory("blazer")
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
                                                    setNameSubCategory("vests")
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
                    <Slide left when={openFabric} duration={500}>
                        <div className={`col-8 mx-0 px-0 open-fabric ${openFabric ? '' : 'd-none'}`}>
                            <div className="header d-flex justify-content-between align-items-center">
                                <p>Filter</p>
                                <span
                                    className="text-pointer"
                                    onClick={() => setOpenFabric(!openFabric)} >
                                    <ArrowLeft />
                                </span>
                            </div>
                            <div className="row mt-3 me-0 ps-3 scroll">
                                {
                                    FabricList.map((data, index) => (
                                        <div key={index} className="mx-0 col-lg-6 col-12 fabric-item text-pointer">
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
                                                    <h1> $ 0.00</h1>
                                                </div>
                                            </div>
                                            <h6 className="title mb-0 mt-0">{data.title}</h6>
                                            <p className="category mb-0">{data.category}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </Slide>
                    <div className="col-8 list-mini-category">
                        <div className="header d-flex justify-content-between align-items-center">
                            <p>{t(subCategory.title)}</p>
                            <span
                                className="text-pointer"
                                onClick={() => setOpenStyle(!openStyle)} >
                                <ArrowLeft />
                            </span>
                        </div>
                        {
                            category !== "suits" ?
                                <SubCategory /> : <SubCategorySuits />
                        }
                    </div>
                </div>
            </Slide>
            <div className="icon-style-list mt-2 pb-4">
                <div className="row ">
                    {
                        category !== "suits" ?
                            list.map((data, index) => (
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
                                                BlazerListAccent.map((data, index) => (
                                                    <div
                                                        onClick={() => {
                                                            setSubCategory({
                                                                id: data.id,
                                                                title: data.title
                                                            })
                                                            setNameSubCategory("blazer")
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
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Vest
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            {
                                                VestListAccent.map((data, index) => (
                                                    <div
                                                        onClick={() => {
                                                            setSubCategory({
                                                                id: data.id,
                                                                title: data.title
                                                            })
                                                            setNameSubCategory("vests")
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
}

export default AccentContainer