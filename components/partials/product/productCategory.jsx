import Image from 'next/image'
import Link from 'next/link'

const ProductCategory = ({t}) => {
    const CategoryList = [
        {
            title : t('suits'),
            image : '/img/product_gallery/suits.png',
            category : 'suits'
        },
        {
            title : t('vests'),
            image : '/img/product_gallery/vests.png',
            category : 'vests'
        },
        {
            title : t('batiks'),
            image : '/img/product_gallery/batik.png',
            category : 'batiks'
        },
        {
            title : t('shirts'),
            image : '/img/product_gallery/shirt.png',
            category : 'shirts'
        },
        {
            title : t('trousers'),
            image : '/img/product_gallery/trouser.png',
            category : 'trousers'
        },
        {
            title : 'custom',
            image : '/img/product_gallery/custom.png',
            category : 'custom'
        }
    ]

    return (
        <div className="container-fluid px-5">
            <div className="row">
                {
                    CategoryList.map((data,index) => (
                        <Link href={`/products/${data.category}`}>
                            <div 
                                key={index}
                                className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mt-5">
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
                    ))
                }
            </div>
        </div>
    )
}

export default ProductCategory ;