import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation';

// elements
import BreadCrumb from '../../../components/elements/breadcrumb'

// partials
import FormChangePassword from '../../../components/partials/forgotPassword/formChangePassword'

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
                <div className="col-12 col-md-6 col-lg-5 col-xxl-4">
                    <div className="text-center">
                        <h2 className="heading">{t("Change Password")} ?</h2>
                        <p className="desc">{t("Please enter your email to receive a link to create new password")}</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="col-9">
                            <FormChangePassword />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default withAuth(ForgotPassword,'auth')