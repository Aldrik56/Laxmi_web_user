import Image from 'next/image'
import Link from 'next/link'

const ProductCategoryHome = ({data}) => {
    return (
        <Link href={`/productportal/${data.category}`}>
            <div 
                className="ourProduct-item d-flex justify-content-center mt-5">
                <div className="img-container d-flex justify-content-center align-items-center">
                    <div className="filter"></div>
                    <Image
                        layout="fill"
                        objectFit="cover"
                        src={data.image} 
                        alt="laxmi" />    
                <h1 className="title">{data.title}</h1>                                                            
                </div>
            </div> 
        </Link>  
    )
}

export default ProductCategoryHome ;