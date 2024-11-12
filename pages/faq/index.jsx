import useTranslation from 'next-translate/useTranslation';

// elements
import BreadCrumb from '../../components/elements/breadcrumb'
import Heading from '../../components/elements/heading';

// partials
import FaqContainer from '../../components/partials/webInformation/faq/faqContainer'

const Faq = () => {
    const {t} = useTranslation("common")

    const pathBreadCumb = [{
        'path' : '/faq',
        'name' : `FAQ`
    }]

    return(
        <div className="faq">
            <div className="container-fluid px-5">
                <BreadCrumb path={pathBreadCumb} />
                <Heading title={`FAQs`} />
                <p className="sub-heading text-center">
                    {t("Let us know Your question")}. <br />
                    {t("Click here to ask your question")}.
                </p>
            </div>
            <section className="d-flex justify-content-center container-fluid px-5">
                <FaqContainer t={t} />
            </section>
        </div>
    )
}

export default Faq ;