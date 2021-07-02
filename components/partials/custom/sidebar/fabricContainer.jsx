import Image from 'next/image'

import {FabricList} from './dataFabric'

const FabricContainer = ({t}) => {

    return (
        <div className="fabric-container">
            <p className="title mb-0">{t("Select")} {t("Fabrics")}</p>
            <p className="total mb-0">Total {t("Fabrics")} : 12</p>
            <div className="fabric-list mt-2">
                <div className="row ">
                    {
                        FabricList.map((data,index) => (
                            <div key={index} className="mx-0 col-xl-4 col-lg-6 col-12 fabric-item text-pointer">
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
                                <h6 className="title mb-0">{data.title}</h6>  
                                <p className="category mb-0">{data.category}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FabricContainer