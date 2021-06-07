import useTranslation from 'next-translate/useTranslation';

// elements
import BreadCrumb from '../../components/elements/breadcrumb'
import Heading from '../../components/elements/heading';

// partials
import TestimoniesContainer from '../../components/partials/webInformation/testimonies/testimoniesContainer'

const Testimonies = () => {
    const {t} = useTranslation("common")

    const pathBreadCumb = [{
        'path' : '/testimonies',
        'name' : `${t('Customer Reviews')}`
    }]

    return(
        <div className="testimonies">
            <div className="container-fluid px-5">
                <BreadCrumb path={pathBreadCumb} />
                <Heading title={t('Customer Reviews')} />
                <p className="sub-heading text-center">
                    {t("What people think about us")}
                </p>
            </div>
            <section className="d-flex justify-content-center container-fluid px-5">
                <TestimoniesContainer t={t} />
            </section>
        </div>
    )
}

export default Testimonies ;