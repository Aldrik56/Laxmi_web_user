import Image from 'next/image'
import { useEffect } from 'react'

const FabricContainer = (props) => {

    useEffect(() => {
        console.log(props.listSelected);
        if (!props.listSelected) {
            props.onClick(props.list[0])
        }
    }, [props.listSelected])

    return (
        <div className="fabric-container">
            <p className="title mb-0">{props.t("Select")} {props.t("Fabrics")}</p>
            <p className="total mb-0">Total {props.t("Fabrics")} : {props.list.length}</p>
            <div className="fabric-list mt-2">
                <div className="row ">
                    {
                        props.list.map((data, index) => (
                            <div
                                key={index}
                                onClick={() => props.onClick(data)}
                                style={props.listSelected?._id === data._id ? {
                                    border: "2px solid grey",
                                    borderRadius: "8px",
                                    marginLeft: "4px"
                                } : {}}
                                className="mx-0 col-xl-4 col-lg-6 col-12 fabric-item text-pointer">
                                <div className="img-container">

                                    <Image
                                        layout="fill"
                                        objectFit="cover"
                                        src={data.image}
                                        alt="laxmi" />
                                    <div className="price d-flex align-items-center w-100">
                                        <h1> $ {data.price ?? 0}.0</h1>
                                    </div>
                                </div>
                                <h6 className="title mb-0">{data.fabric_name}</h6>
                                <p className="category mb-0">{data.material}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FabricContainer