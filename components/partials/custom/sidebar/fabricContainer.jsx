import Image from 'next/image'

import { FabricList } from './dataFabric'
import { useEffect, useState } from 'react'
import axios from 'axios'

const FabricContainer = ({ t, onClick }) => {
    const [fabricList, setFabricList] = useState([])
    const [selectFabric, setSelectFabric] = useState({})

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
        // onClick(selectFabric)
        console.log(selectFabric);
    }, [selectFabric])

    return (
        <div className="fabric-container">
            <p className="title mb-0">{t("Select")} {t("Fabrics")}</p>
            <p className="total mb-0">Total {t("Fabrics")} : {fabricList.length}</p>
            <div className="fabric-list mt-2">
                <div className="row ">
                    {
                        fabricList.map((data, index) => (
                            <div key={index} onClick={() => setSelectFabric(data)} className="mx-0 col-xl-4 col-lg-6 col-12 fabric-item text-pointer">
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
                                <h6 className="title mb-0">{data.name}</h6>
                                <p className="category mb-0">{data.material.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FabricContainer