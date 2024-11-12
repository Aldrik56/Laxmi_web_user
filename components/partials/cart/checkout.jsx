import React, { useState,useEffect } from 'react';
import Image from 'next/image'
import {ChevronRight,Edit} from '../../elements/icon'

// module
import ModalAddress from './module/modalAddress'

// elements
import swal from 'sweetalert';

const Checkout = ({t,setStep}) => {
    const [dataCart,setDataCart] = useState(
        {
            productTitle : "Shirt",
            products : [
                {
                    image : '/img/cart/cart1.png',
                    title : "Tailored Shirt",
                    material : "Cotton",
                    ref : "Mayfield",
                    quantity : 1
                },
                {
                    image : '/img/cart/cart2.png',
                    title : "Folded Small",
                    material : "Cotton",
                    ref : "Mayfield",
                    quantity : 3
                }                
            ]

        }
    )
    const handleCoupon = () => {
        swal({
            title: "Coupon Code",
            text: 'Enter the coupon code in the following form',
            content: "input",
            buttons: {
                cancel : "Cancel",
                apply : "Apply"             
            },
        }).then((value) => {
        switch (value) {
            case "apply":
                swal(
                    "Applied Successfully",
                    "The coupon you entered has been successfully applied",
                    "success");
                break;
            default:
                swal.close()
            }
        })
    }
    

    return (
        <div className="container-fluid checkout">
            <div className="w-100 d-flex justify-content-center align-items-center">
                <div className="stepper d-flex flex-row">
                    <p>{t("Measurements")}</p>
                    <ChevronRight />
                    <p  className="active">{t("Checkout")}</p>
                    <ChevronRight />
                    <p>{t("Payment")}</p>
                </div>
            </div>     
            <hr className="hr-stepper w-100" />
            <div className="d-flex justify-content-center mt-4">
                <div className="col-12 col-lg-10">
                    <div className="card">
                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <p className="title">{t("Shipping Addres")}</p>
                                <p className="name">John Doe</p>
                                <p className="desc">(+1) 50858122</p>
                                <p className="desc">2020 Massachusetts Ave, NW Washington, DC 20036, United States Of America</p>
                            </div>
                            <div className="col-12 col-lg-2 d-flex align-items-end">
                                <p className="value">{t("Main Destination")}</p>
                            </div>
                            <div className="col-12 col-lg-2 d-flex align-items-end">
                                <p 
                                    data-bs-toggle="modal" 
                                    data-bs-target="#modalAddress"                                
                                    className="action"><Edit /> {t("Edit")}</p>
                            </div>
                        </div>
                    </div>     
                    <div className="card mt-4">
                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <p className="title">{t("Expedition Delivery")}</p>
                                <p className="name">JNE</p>
                                <p className="desc">Regular</p>
                                <p className="desc">{t("Estimated Time of Arrival")}5 Mei - 6 Mei</p>
                            </div>
                            <div className="col-12 col-lg-2 d-flex align-items-end">
                                <p className="value">$ 0,00</p>
                            </div>
                            <div className="col-12 col-lg-2 d-flex align-items-end">
                                <p className="action"><Edit /> {t("Edit")}</p>
                            </div>
                        </div>
                    </div>       
                    <div className="card mt-4 p-0">
                        <div className="table-responsive">
                            <table class="table align-middle">
                                <thead>
                                    <tr>
                                    <th scope="col">{t("Ordered Product")}</th>
                                    <th scope="col">{t("Amount")}</th>
                                    <th scope="col">{t("Price")}</th>
                                    </tr>
                                </thead>
                            <tbody>
                                {
                                    dataCart.products.map((data,index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className="d-flex flex-row">
                                                    <div className="img-container d-flex justify-content-center align-items-center">
                                                        <Image
                                                            width={82}
                                                            height={121} 
                                                            src={data.image}
                                                            alt="laxmi" />                                        
                                                    </div>
                                                    <div>
                                                        <p className="title">{data.title}</p>
                                                        <p>Cotton</p>
                                                        <p>ref : Mayfield</p>
                                                        <p>$ 0,00</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>1 {t("pcs")}</td>
                                            <td>$ 0,00</td>
                                        </tr>    
                                    ))
                                }
                                <tr className="total-price">
                                    <td colSpan="2">{t("Total Price")}</td>
                                    <td>$ 0,00</td>
                                </tr>
                            </tbody>
                            </table>  
                        </div>                      
                    </div>               
                    <div className="card mt-4 ">
                        <div className="row payment-method">
                            <div className="col-12 col-lg-8">
                                <p className="head mb-3">{t("Payment Method")}</p>
                                <div className="d-flex flex-row align-items-center">
                                    <div className="img-container">
                                        <Image
                                            layout="fill"
                                            objectFit="cover"
                                            src="/img/logo/bca.png" 
                                            alt="laxmi" />     
                                    </div>
                                    <div className="ms-4">
                                        <p className="title">Bank Central Asia</p>
                                        <p className="desc">Credit Card</p>
                                    </div>                               
                                </div>
                            </div>
                            <div className="col-12 col-lg-2 d-flex align-items-end">
                                <p className="value">{t("Transfer Manual")}</p>
                            </div>
                            <div className="col-12 col-lg-2 d-flex align-items-end">
                                <p className="action"><Edit /> {t("Edit")}</p>
                            </div>
                        </div>
                    </div>   
                    <div className="card mt-4 ">
                        <div className="row proceed">
                            <div className="col-12 col-lg-8">
                                <div className="">
                                    <p className="title">{t("Total Price")}</p>
                                    <div className="mt-4">
                                        <div className="w-100 d-flex justify-content-between">
                                            <p className="desc">{t("Shiping Price")}</p>
                                            <p className="desc">$0.00</p>
                                        </div>
                                        <div className="w-100 d-flex justify-content-between">
                                            <p className="desc">{t("Product Price")}</p>
                                            <p className="desc">$0.00</p>
                                        </div>
                                        <div className="w-100 d-flex justify-content-between">
                                            <p className="desc">{t("Discount Coupons")}</p>
                                            <p className="desc">$0.00</p>
                                        </div>
                                    </div>
                                    <div className="w-100 d-flex justify-content-between">
                                        <p className="total-price">{t("Total Price")}</p>
                                        <p className="total-price">$0.00</p>
                                    </div>

                                </div>                               
                            </div>
                            <div className="col-12 col-lg-4 mt-4 d-flex flex-column align-items-center">
                            <button 
                                onClick={() => handleCoupon()}
                                className="btn btn-light py-2 w-75">{t("Add Coupon Code")}</button>                
                            <button 
                                onClick={() => setStep(4)}
                                className="btn btn-primary py-2 w-75 mt-4">{t("Proceed To Pay")}</button>                                        
                            </div>
                        </div>
                    </div>                   
                </div>
            </div>  
            <ModalAddress t={t} />
        </div>
    )
}

export default Checkout ;