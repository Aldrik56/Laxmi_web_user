
import useTranslation from 'next-translate/useTranslation';

// elements
import BreadCrumb from '../../../components/elements/breadcrumb'
import Heading from '../../../components/elements/heading';
import ProductCategory from '../../../components/elements/product/productCategory';
import ProducHome from '../../../components/elements/product/productHome';

// partials
import CartContainer from '../../../components/partials/cart/cartContainer'

// layout
import withAuth from '../../../components/layouts/withAuth';

const Products = () => {
    const {t} = useTranslation("cart")

    const pathBreadCumb = [{
        'path' : '/products',
        'name' : `${"Products"}`
    },{
        'path' : '/products/cart',
        'name' : `${t("Cart")}`
    }]

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
        }
    ]

    const ProductsList =  [
        {
            "_id": "1",
            "image": "https://via.placeholder.com/314",
            "title": "Suit - Navy | K0012",
            "category" : "suits",
            "sub_category" : "dasdasd",    
            "stocks": 123,
            "currency": "IDR",
            "price": 1000000,
            "is_new": false,
            "is_cart": true
        },
        {
            "_id": "2",
            "image": "https://via.placeholder.com/314",
            "title": "Suit - Navy | K0013",
            "category" : "suits",
            "sub_category" : "dasdasd", 
            "stocks": 3,
            "currency": "IDR",
            "price": 1500000,
            "is_new": false,
            "is_cart": false
        },
        {
            "_id": "3",
            "image": "https://via.placeholder.com/314",
            "title": "Suit - Navy | K0014",
            "category" : "suits",
            "sub_category" : "dasdasd",
            "stocks": 5,
            "currency": "IDR",
            "price": 3000000,
            "is_new": true,
            "is_cart": false
        }
    ]

    return (
        <>
            <div className="cart">
                <div className="container-fluid px-5">
                    <BreadCrumb path={pathBreadCumb} />
                </div>
                <section className="d-flex justify-content-center container-fluid ">
                    <CartContainer t={t} />
                </section>
            </div>        
            <Heading title={t("You Might Like")} />
            <div className="product-category">  
                <section>
                    <div className="row mx-0 px-0">
                        {
                            CategoryList.map((data,index) => (
                                <ProductCategory data={data} key={index} />
                            ))
                        }
                    </div>  
                </section>          
            </div>        
            <Heading title={t("Related Products")} />   
            <div className="row mx-0 px-0">
                {
                    ProductsList.map((data,index) => (
                        <ProducHome data={data} key={index} t={t} />
                    ))
                }
            </div>         
        </>
    )
}

export default withAuth(Products,'withAuth')