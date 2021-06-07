import useTranslation from 'next-translate/useTranslation';

// elements
import BreadCrumb from '../../components/elements/breadcrumb'
import Heading from '../../components/elements/heading';

// partials
import ContactUsContainer from '../../components/partials/webInformation/contactus/contactUsContainer'

const Faq = () => {
    const {t} = useTranslation("contactus")

    const pathBreadCumb = [{
        'path' : '/contactus',
        'name' : `${t("navbar:Contact Us")}`
    }]

    return(
        <div className="contactus">
            <div className="container-fluid px-5">
                <BreadCrumb path={pathBreadCumb} />
            </div>
            <ContactUsContainer t={t} />
        </div>
    )
}

export default Faq ;