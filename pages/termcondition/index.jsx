import useTranslation from 'next-translate/useTranslation';

// elements
import BreadCrumb from '../../components/elements/breadcrumb'
import Heading from '../../components/elements/heading';

// partials
import TermConditionContainer from '../../components/partials/webInformation/termCondition/termConditionContainer'

const Faq = () => {
    const {t} = useTranslation("common")

    const pathBreadCumb = [{
        'path' : '/termcondition',
        'name' : `${t("navbar:Terms & Conditions")}`
    }]

    return(
        <div className="faq">
            <div className="container-fluid px-5">
                <BreadCrumb path={pathBreadCumb} />
                <Heading title={t("navbar:Terms & Conditions")} />
                <p className="sub-heading text-center">
                    {t('All customers need to read and agree to the terms and')} <br />
                    {t('conditions set out in this agreement before ordering')}
                </p>
            </div>
            <section className="d-flex justify-content-center container-fluid px-5">
                <TermConditionContainer t={t} />
            </section>
        </div>
    )
}

export default Faq ;