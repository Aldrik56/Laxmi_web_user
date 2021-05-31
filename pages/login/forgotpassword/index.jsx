import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation';

// elements
import BreadCrumb from '../../../components/elements/breadcrumb'

// partials
import FormForgotPassword from '../../../components/partials/forgotPassword/formForgotPassword'

// layout
import withAuth from '../../../components/layouts/withAuth';

const ForgotPassword = ()=> {
    const {t} = useTranslation("login")

    const pathBreadCumb = [
        {
            'path' : '/login',
            'name' : `${t("Title")}`
        },        
        {
            'path' : '/forgotpassword',
            'name' : `${t("Forgot Password")}`
        }
    ]

    return (
        <div className="container-fluid px-5">
            <BreadCrumb path={pathBreadCumb} />
            <section className="forgot-password d-flex justify-content-center">
                <FormForgotPassword />
            </section>
        </div>
    )
}

export default withAuth(ForgotPassword,'auth')