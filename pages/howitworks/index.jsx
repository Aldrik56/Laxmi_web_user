import useTranslation from 'next-translate/useTranslation';

// elements
import BreadCrumb from '../../components/elements/breadcrumb'
import Heading from '../../components/elements/heading';

// partials
import WorkSteps from '../../components/partials/webInformation/howItWorks/workSteps'

const HowItWorks = () => {
    const {t} = useTranslation("common")

    const pathBreadCumb = [{
        'path' : '/howitworks',
        'name' : `${t("How It Works")}`
    }]

    return(
        <div className="">
            <div className="container-fluid px-5">
                <BreadCrumb path={pathBreadCumb} />
                <Heading title={t("How It Works")} />
            </div>
            <section className="howitworks d-flex justify-content-center">
                <WorkSteps t={t} />
            </section>
            <h1 className="text-center fw-bold">{t("Your satisfaction is guaranteed")}</h1>
        </div>
    )
}

export default HowItWorks ;