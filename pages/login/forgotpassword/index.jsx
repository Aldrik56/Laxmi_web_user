import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation';

// elements
import BreadCrumb from '../../../components/elements/breadcrumb'

// partials
import FormForgotPassword from '../../../components/partials/forgotPassword/formForgotPassword'


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
                <div className="col-12 col-md-6 col-lg-5 col-xxl-4">
                    <div className="text-center">
                        <h2 className="heading">{t("Forgot Your Password")} ?</h2>
                        <p className="desc">{t("Please enter your email to receive a link to create new password")}</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="col-9">
                            <FormForgotPassword />
                            <hr />
                            <p className="text-center link">{t("Don’t have an account")} ? <Link href="/login/register"><a>{t("Register")}</a></Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ForgotPassword