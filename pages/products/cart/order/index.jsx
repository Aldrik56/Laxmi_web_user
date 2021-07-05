import React, { useState,useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router'

// elements
import BreadCrumb from '../../../../components/elements/breadcrumb'
import Heading from '../../../../components/elements/heading';

// partials
import OrderMeasure from '../../../../components/partials/cart/orderMeasure'
import OrderMeasure2 from '../../../../components/partials/cart/orderMeasure2'
import Checkout from '../../../../components/partials/cart/checkout'
import Payment from '../../../../components/partials/cart/payment'
import Finish from '../../../../components/partials/cart/finish'

// layout
import withAuth from '../../../../components/layouts/withAuth';

const Order = () => {
    const {t} = useTranslation("cart")
    const router = useRouter()

    const [step,setStep] = useState(1)
    useEffect(() => {
        window.scrollTo(0,0)
    },[step]);
    const pathBreadCumb = [{
        'path' : '/products',
        'name' : `${t("Products")}`
    },{
        'path' : `/products/cart`,
        'name' : t("Cart")
    },{
        'path' : `/products/cart/order`,
        'name' : t("Processing Orders")
    }]

    const StepLayout = () => {
        switch(step) {
            case 1:
                return <OrderMeasure 
                    t={t} 
                    setStep={setStep} />
            case 2:
                return <OrderMeasure2 
                    t={t} 
                    setStep={setStep} />
            case 3:
                return <Checkout 
                    t={t} 
                    setStep={setStep} />             
            case 4:
                return <Payment 
                    t={t} 
                    setStep={setStep} />                 
            default:
                return <Finish 
                    t={t} 
                    setStep={setStep} />                
        }    
    }
    return (
        <div className="cart-proccess">
            <div className="container-fluid px-5">
                <BreadCrumb path={pathBreadCumb} />
                {
                    step !== 5 ?
                    <>
                        <Heading title={t("Processing Orders")} />
                        <p className="sub-heading text-center fw-bold">
                            {t("Please Follow the Steps")}
                        </p>
                    </> : null
                }
            </div>

            <section className="d-flex justify-content-center container-fluid">
                <StepLayout />
            </section>
        </div>
    )
}

export default withAuth(Order)