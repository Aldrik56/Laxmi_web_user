import Image from 'next/image'

const EvenItem = ({data,index}) => {
    return (
        <div className="row evenItem mx-0">
            <div className="col-12 col-lg-8 content container-fluid px-5 order-1 order-lg-0">
                <span className="index">{index+1}</span>
                <h1 className="title">{data.title}</h1>
                <p className="desc">{data.description}</p>
            </div>
            <div className="col-12 col-lg-3 d-flex justify-content-center order-0 order-lg-1">
                <Image
                    width={238}
                    height={181} 
                    src={data.image} 
                    alt="laxmi" />
            </div>
        </div>
    )
}

export default EvenItem