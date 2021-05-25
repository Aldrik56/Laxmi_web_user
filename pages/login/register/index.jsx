import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation';

// elements
import BreadCrumb from '../../../components/elements/breadcrumb'

// partials
import FormRegister from '../../../components/partials/register/formRegister'


const Register = ()=> {
    const {t} = useTranslation("login")

    const pathBreadCumb = [
        {
            'path' : '/login',
            'name' : `${t("Title")}`
        },        
        {
            'path' : '/register',
            'name' : `${t("Register")}`
        }
    ]

    return (
        <div className="container-fluid px-5">
            <BreadCrumb path={pathBreadCumb} />
            <section className="forgot-password d-flex justify-content-center">
                <div className="col-12 col-md-6 col-lg-5 col-xxl-4">
                    <div className="text-center">
                        <h2 className="heading">{t("Create a New Account")}</h2>
                        <p className="desc">{t("Please complete the form below")}</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="col-9">
                            <FormRegister />
                            <hr />
                            <p className="text-center link">{t("have an account")} ? <Link href="/login"><a>{t("Title")}</a></Link></p>                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register