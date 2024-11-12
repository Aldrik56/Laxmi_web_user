import Image from 'next/image'

const Fabric = ({data}) => {
    return(
        <>
            <div className="fabric col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                <div className="mt-5 d-flex flex-column">
                    <div className="container-img">
                        <Image
                            width={332}
                            height={300} 
                            objectFit="fill"
                            src={data.image} 
                            alt="laxmi" />                             
                    </div>
                    <p className="title">{data.title}</p>
                </div>
            </div>
        </>
    )
}

export default Fabric;