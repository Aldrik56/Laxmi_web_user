import React, { useState, useEffect } from 'react';

import Link from 'next/link'
import Image from 'next/image'

// elements
import { Trash, MinButton, PlusButton } from '../../../elements/icon'
import Heading from '../../../elements/heading';

// helper
import NumberFormat from '../../../../helpers/numberFormat'

const Accordion = ({ t }) => {
    const [dataCart, setDataCart] = useState([
        {
            productTitle: "Shirt",
            products: [
                {
                    image: '/img/cart/cart1.png',
                    title: "Tailored Shirt",
                    material: "Cotton",
                    ref: "Mayfield",
                    quantity: 1
                },
                {
                    image: '/img/cart/cart1.png',
                    title: "Folded Small",
                    material: "Cotton",
                    ref: "Mayfield",
                    quantity: 3
                }
            ]

        },
        {
            productTitle: "Suits",
            products: [
                {
                    image: '/img/cart/cart2.png',
                    title: "Tailored Suit",
                    material: "Pure Wool",
                    ref: "Caldweel",
                    quantity: 5
                }
            ]
        }
    ])

    const handleQuantity = type => {
        alert(type)
    }
    return (
        <div className="accordion" >
            {
                dataCart.map((data, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id="headingOne">
                            <input
                                className="form-check-input form-check-input-accordion"
                                type="checkbox"
                                value=""
                                id={`flexCheckDefault${index}`} />
                            <div
                                className="accordion-button d-flex align-items-center"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-expanded="true"
                                aria-controls={`collapse${index}`}
                            >
                                <label className="form-check-label" >
                                    &nbsp;&nbsp;{data.productTitle}
                                </label>
                            </div>
                        </h2>
                        <div id={`collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} aria-labelledby="headingOne" >
                            <div className="accordion-body">
                                {
                                    data.products.map((dataProduct, indexDataProduct) => (
                                        <>
                                            <div className="accordion-body-item" key={indexDataProduct}>
                                                <div className="d-flex flex-row accordion-body-container">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        id={`flexCheckDefault`} />
                                                    <div className="row w-100">
                                                        <div className="col-12 col-sm-4 col-md-2">
                                                            <div className="img-container d-flex justify-content-center align-items-center">
                                                                <Image
                                                                    width={82}
                                                                    height={121}
                                                                    src={dataProduct.image}
                                                                    alt="laxmi" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-sm-8 col-md-3">
                                                            <div className="desc">
                                                                <p
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target={`#cartModalProdct${index}${indexDataProduct}`}
                                                                    className="title-product">{dataProduct.title}</p>
                                                                <div className="material-product">
                                                                    <p>{dataProduct.material}</p>
                                                                    <p>ref : {dataProduct.ref}</p>
                                                                    <Link href="/">
                                                                        <a className="modify">{t("Modify")}</a>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-sm-4 col-md-2 d-flex align-items-end">
                                                            <div className="price">
                                                                <p>$ {NumberFormat(100000)}</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-2 col-sm-4 col-md-2 d-flex justify-content-center align-items-end">
                                                            <div className="action d-flex flex-row">
                                                                <p className="cursor-pointer"><Trash /> <span className="text">{t("Remove")}</span>  </p>
                                                            </div>
                                                        </div>
                                                        <div className="col-10 col-sm-4 col-md-3 d-flex align-items-end">
                                                            <div className="action d-flex flex-row">
                                                                <p
                                                                    onClick={() => handleQuantity("min")}
                                                                    className="cursor-pointer action-button">
                                                                    <MinButton color={dataProduct.quantity < 2 ? "#A8A8A8" : "#1E1E22"} />
                                                                </p>
                                                                <p>{dataProduct.quantity}</p>
                                                                <p
                                                                    onClick={() => handleQuantity("plus")}
                                                                    className="cursor-pointer action-button"><PlusButton /> </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal  fade" id={`cartModalProdct${index}${indexDataProduct}`} tabindex="-1" aria-labelledby={`cartModalProdct${index}${indexDataProduct}Label`} aria-hidden="true">
                                                <div className="modal-dialog modal-xl">
                                                    <div className="modal-content p-4">
                                                        <Heading title="Order Details" />
                                                        <div className="row">
                                                            <div className="col-12 col-lg-2 mt-4">
                                                                <div className="img-container d-flex justify-content-center align-items-center">
                                                                    <Image
                                                                        width={82}
                                                                        height={121}
                                                                        src={dataProduct.image}
                                                                        alt="laxmi" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-lg-5 mt-4">
                                                                <p className="mb-0 title">{dataProduct.title}</p>
                                                                <div className="row mx-0 px-0">
                                                                    <div className="col-3 ps-0 ms-0">
                                                                        Sleeves
                                                                    </div>
                                                                    <div className="col-1">
                                                                        :
                                                                    </div>
                                                                    <div className="col-8">
                                                                        Long
                                                                    </div>
                                                                </div>
                                                                <div className="row mx-0 px-0">
                                                                    <div className="col-3 ps-0 ms-0">
                                                                        Fit
                                                                    </div>
                                                                    <div className="col-1">
                                                                        :
                                                                    </div>
                                                                    <div className="col-8">
                                                                        Slim Fit
                                                                    </div>
                                                                </div>
                                                                <div className="row mx-0 px-0">
                                                                    <div className="col-3 ps-0 ms-0">
                                                                        Shirt Collar
                                                                    </div>
                                                                    <div className="col-1">
                                                                        :
                                                                    </div>
                                                                    <div className="col-8">
                                                                        Collar Buttons
                                                                    </div>
                                                                </div>
                                                                <div className="row mx-0 px-0">
                                                                    <div className="col-3 ps-0 ms-0">
                                                                        Cuffs
                                                                    </div>
                                                                    <div className="col-1">
                                                                        :
                                                                    </div>
                                                                    <div className="col-8">
                                                                        Single cuff 1 button
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-lg-5 mt-4">
                                                                <div className="d-flex flex-row ">
                                                                    <Image
                                                                        width={130}
                                                                        height={96}
                                                                        src="/img/fabric/fabricMaterial.png"
                                                                        alt="laxmi" />
                                                                    <div className="desc-material w-100">
                                                                        <p className="mb-0 title">{dataProduct.ref}</p>
                                                                        <div className="row mx-0 px-0">
                                                                            <div className="col-2 ps-0 ms-0">
                                                                                Material
                                                                            </div>
                                                                            <div className="col-1">
                                                                                :
                                                                            </div>
                                                                            <div className="col-9 ps-0 mm-0">
                                                                                100% Cotton
                                                                            </div>
                                                                        </div>
                                                                        <div className="row mx-0 px-0">
                                                                            <div className="col-2 ps-0 ms-0">
                                                                                Season
                                                                            </div>
                                                                            <div className="col-1">
                                                                                :
                                                                            </div>
                                                                            <div className="col-9 ps-0 ms-0">
                                                                                Year Round
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Accordion;