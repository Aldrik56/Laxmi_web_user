import Image from 'next/image'
import {ChevronRight,Edit,ClipBoard} from '../../elements/icon'

const Payment = ({t,setStep}) => {
    return (
        <div className="container-fluid payment">
            <div className="w-100 d-flex justify-content-center align-items-center">
                <div className="stepper d-flex flex-row">
                    <p>{t("Measurements")}</p>
                    <ChevronRight />
                    <p>{t("Checkout")}</p>
                    <ChevronRight />
                    <p  className="active">{t("Payment")}</p>
                </div>
            </div>   
            <hr className="hr-stepper w-100" />
            <div className="d-flex justify-content-center mt-4">
                <div className="col-12 col-lg-10">
                    <div className="card py-3">
                        <div className="row d-flex justiy-content-between">
                            <div className="col-6 d-flex align-items-center">
                                <p className="total-product mb-0 fw-bold">{t("Total  Product Price")}</p>
                            </div>
                            <div className="col-6 d-flex d-flex align-items-center justify-content-end">
                                <p className="mb-0 fw-bold">$ 0,00</p>
                            </div>
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
                                <p className="value">Transfer Manual</p>
                            </div>
                            <div className="col-12 col-lg-2 d-flex align-items-end">
                                <p className="action"><Edit />{t("Edit")} </p>
                            </div>
                        </div>
                    </div>   
                    <div className="card mt-4">
                        <div className="row rek-info d-flex justify-content-between">
                            <div className="col-12 col-lg-8">
                                <p className="title">{t("Account Number")}</p>
                                <p className="desc mb-0">Laxmi Tailor</p>
                                <p className="rek-number">1304567890</p>
                            </div>
                            <div className="col-12 col-lg-2 d-flex align-items-end">
                                <p className="action"><ClipBoard /> {t("Edit")}</p>
                            </div>
                        </div>
                    </div>   
                    <div className="card mt-4 px-0">
                        <p className="title px-5">Payment instructions</p>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    ATM Transfer
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    iBanking Transfer
                                </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    mBanking Transfer
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                        </div>                        
                    </div>                                          
                    <div className="row d-flex justify-content-center mt-5">
                        <div className="col-12 col-lg-3 mt-2">
                            <button
                                onClick={() => setStep(1)}
                                className="btn btn-light py-2 px-5 me-4 w-100">{t("Cancel Order")}</button>                
                        </div>
                        <div className="col-12 col-lg-3 mt-2">
                            <button
                                onClick={() => setStep(5)}
                                className="btn btn-primary py-2 px-5 w-100">{t("Already Paid")}</button>                                            
                        </div>
                    </div>
                </div>
            </div>           
        </div>            
    )
}

export default Payment ;