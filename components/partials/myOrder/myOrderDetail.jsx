import Image from 'next/image'

// elements
import {ArrowBackIos} from '../../elements/icon'

const MyOrderContainer = ({t,setPath}) => {
    const dataCart = [
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

    return (
        <div className="col-12 col-lg-9 mt-4">
            <div className="filter-nav">
                <div className="nav d-flex flex-row justify-content-between">
                    <p onClick={() => setPath(1)} className="back-nav text-pointer"><ArrowBackIos width={30} /> {t("common:Back")}</p>
                    <p className="order-number">{t("Order Number")} : 215080989999</p>            
                </div>
                <div className="d-flex justify-content-center py-4 order-progress">
                    <div>
                        <Image
                            width={705}
                            height={126} 
                            src="/img/myorder/order_progress_1.svg" 
                            alt="laxmi" /> 
                        <div className="d-flex justify-content-between">
                            <div className="text-center ">
                                <p>Order Paid</p>
                                <p>11-05-2021</p>
                            </div>
                            <div className="text-center ">
                                <p>Order Made</p>
                                <p>11-05-2021</p>
                            </div>
                            <div className="text-center ">
                                <p>Order Shipped</p>
                                <p>11-05-2021</p>
                            </div>
                            <div className="text-center ">
                                <p>Order Received</p>
                                <p>11-05-2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="card card-detail">
                    <div className="row">
                        <div className="col-12">
                            <p className="title">{t("Shipping Address")}</p>
                            <p className="name">John Doe</p>
                            <p className="desc">(+1) 50858122</p>
                            <p className="desc">2020 Massachusetts Ave, NW Washington, DC 20036, United States Of America</p>
                        </div>
                    </div>
                </div>              
            </div>
            <div className="mt-4">
                <div className="card card-detail track-card px-0">
                    <div className="row track-code mx-0">
                        <div className="col-12">
                            <p className="title">{t("Track Shipment")}</p>
                            <p className="name">Regular</p>
                            <p className="desc">JNE Express</p>
                            <p className="desc">JN1234567890</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between track-title">
                        <p>{t("Delivery Time")}</p>
                        <p>{t("Orders Sent")}</p>
                    </div>
                    <div className="row">
                        <div className="col-4 px-5 py-2">
                            <div className="time-info">
                                <p className="fw-bold mb-0">17.13 WIB</p>
                                <p className="mb-0">27 May 2021 </p>
                            </div>
                        </div>
                        <div className="col-2 d-flex flex-column">
                            <div className="position-relative d-flex justify-content-center">
                                <div className="line line-active"></div>
                                <div className="delivery">
                                    <Image
                                        width={20}
                                        height={54} 
                                        src="/img/myorder/delivery_active.svg" 
                                        alt="laxmi" /> 
                                </div>
                            </div>
                        </div>
                        <div className="col-6 px-5 py-2">
                            <div className="desc mt-4 desc-active">
                                <p>Deliveried to [Jhon | 27-05-2021 17.13 WIB s| TANGERANG]</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 px-5 py-2">
                            <div className="time-info">
                                <p className="fw-bold mb-0">17.13 WIB</p>
                                <p className="mb-0">27 May 2021 </p>
                            </div>
                        </div>
                        <div className="col-2 d-flex flex-column">
                            <div className="position-relative d-flex justify-content-center">
                                <div className="line line-unactive"></div>
                                <div className="delivery">
                                    <Image
                                        width={20}
                                        height={54} 
                                        src="/img/myorder/delivery_unactive.svg" 
                                        alt="laxmi" /> 
                                </div>
                            </div>
                        </div>
                        <div className="col-6 px-5 py-2">
                            <div className="desc mt-4 desc-unactive">
                                <p>With delivery courier [TANGERANG]</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 px-5 py-2">
                            <div className="time-info">
                                <p className="fw-bold mb-0">17.13 WIB</p>
                                <p className="mb-0">27 May 2021 </p>
                            </div>
                        </div>
                        <div className="col-2 d-flex flex-column">
                            <div className="position-relative d-flex justify-content-center">
                                <div className="line line-unactive"></div>
                                <div className="delivery">
                                    <Image
                                        width={20}
                                        height={54} 
                                        src="/img/myorder/delivery_unactive.svg" 
                                        alt="laxmi" /> 
                                </div>
                            </div>
                        </div>
                        <div className="col-6 px-5 py-2">
                            <div className="desc mt-4 desc-unactive">
                                <p>Received at Warehouse [TIGARAKSA, TANGERANG]</p>
                            </div>
                        </div>
                    </div>

                </div>              
            </div>
            <div className="mt-4">
                <div className="card card-detail track-card p-0">
                    <div className="table-responsive">
                        <table class="table align-middle">
                            <thead>
                                <tr>
                                <th scope="col">{t("Ordered Product")}</th>
                                <th scope="col">{t("Aditional")}</th>
                                <th scope="col">{t("Amount")}</th>
                                <th scope="col">{t("Price")}</th>
                                </tr>
                            </thead>
                        <tbody>
                            {
                                dataCart.map((data,index) => (
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
                                        <td className="text-center text-success">Additional Monogram <br /> (+ 0,00)</td>
                                        <td>1 pcs</td>
                                        <td>$ 0,00</td>
                                    </tr>    
                                ))
                            }
                        </tbody>
                        </table>  
                    </div>                      
                </div>
            </div>
            <div className="mt-4">
                <div className="card card-detail detail-total">
                    <p className="title">Total Price</p>
                    <div className="d-flex justify-content-between">
                        <p>{t("Shiping Price")}</p>
                        <p>$ 0,00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>{t("Product Price")}</p>
                        <p>$ 0,00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>{t("Discount Coupons")}</p>
                        <p>$ 0,00</p>
                    </div>
                    <div className="d-flex justify-content-between total">
                        <p className="fw-bold">{t("Total Price")}</p>
                        <p className="fw-bold">$ 0,00</p>
                    </div>
                </div>              
            </div>        
        </div>        
    )
}

export default MyOrderContainer ;