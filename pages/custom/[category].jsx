import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router'

// elements
import BreadCrumb from '../../components/elements/breadcrumb'
import Heading from '../../components/elements/heading';

// partials
import CustomContainer from '../../components/partials/custom/customContainer';

const CustomShirt = () => {
    const { t } = useTranslation("custom")
    const router = useRouter()
    const { category } = router.query

    const pathBreadCumb = [
        {
            'path': '/howitworks',
            'name': `${t("common:custom")} ${t(`common:${category}`)}`
        },
    ]

    return (
        <div className="custom">
            <div className="container-fluid px-5" style={{ marginTop: 100 }}>
                <BreadCrumb path={pathBreadCumb} />
                <Heading title={`${t("common:custom")} ${t(`common:${category}`)}`} />
            </div>
            <section className="mt-3 d-flex justify-content-center">
                <CustomContainer t={t} />
            </section>
        </div>
    )
}

export default CustomShirt;