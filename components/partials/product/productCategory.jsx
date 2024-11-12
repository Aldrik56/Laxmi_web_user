// elements
import ProductCategory from '../../elements/product/productCategory';

const ProductCategoryList = ({t}) => {
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
                        <ProductCategory data={data} key={index} />                           
                    ))
                }
            </div>
        </div>
    )
}

export default ProductCategoryList ;