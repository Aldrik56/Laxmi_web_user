import Image from 'next/image'

const OrderItem = ({t,data,setPath}) => {
    return (
        <div className="card">
            <div className="row d-flex align-items-center">
                <div className="mt-2 col-12 col-sm-4 col-lg-4 col-xl-2">
                    <div className="img-container">
                        <Image
                            width={82}
                            height={121} 
                            src="/img/myorder/shirt.png" 
                            alt="laxmi" />                    
                    </div>
                </div>
                <div className="mt-2 col-12 col-sm-4 col-lg-4 col-xl-2">
                    <p className="title-product">Tailored Shirt</p>                    
                    <div className="desc-product">
                        <p>Cotton</p>                    
                        <p>ref : Mayfield</p>                    
                        <p>$ 0,00</p>                    
                    </div>
                </div>
                <div className="mt-2 col-12 col-sm-4 col-lg-4 col-xl-3">
                    <p className="text-additional">Additional Monogram <br /> (+ 0,00)</p>
                </div>
                <div className="mt-2 col-12 col-sm-4 col-lg-4 col-xl-1">
                    <p>1 pcs</p>
                </div>
                <div className="mt-2 col-12 col-sm-4 col-lg-4 col-xl-2">
                    <p className="fw-bold">$ 100.000.000</p>
                </div>
                <div className="mt-2 col-12 col-sm-4 col-lg-4 col-xl-2">
                    <p className="fw-bold">On Process</p>
                </div>

            </div>
            <div className="d-flex flex-row justify-content-between align-items-end mt-4">
                <p>{t("Order Number")} : 215080989999</p>
                <a 
                    onClick={() => setPath(2)}
                    className="btn btn-primary py-2 px-5">{t("Track")}</a>                                
            </div>
        </div>    
    )
}

export default OrderItem