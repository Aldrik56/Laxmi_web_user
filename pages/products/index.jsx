import useTranslation from 'next-translate/useTranslation';

// elements
import BreadCrumb from '../../components/elements/breadcrumb'
import Heading from '../../components/elements/heading';

// partials
import ProductCategory from '../../components/partials/product/productCategory'


const Products = () => {
    const {t} = useTranslation("product")

    const pathBreadCumb = [{
        'path' : '/products',
        'name' : `${t("Products")}`
    }]

    return (
        <div className="product-category">
            <div className="container-fluid">
                <BreadCrumb path={pathBreadCumb} />
                <Heading title={t("Our Products")} />
                <p className="sub-heading text-center fw-bold">
                    {t('What we produce')}
                </p>
            </div>
            <section className="row px-0 mx-0">
                <ProductCategory t={t} />
            </section>
        </div>
    )
}

export default Products