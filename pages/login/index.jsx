import useTranslation from 'next-translate/useTranslation';

// elements
import BreadCrumb from '../../components/elements/breadcrumb'

// partials
import FormLogin from '../../components/partials/login/formLogin'

// layout
import withAuth from '../../components/layouts/withAuth';

const Login = () => {
    const {t} = useTranslation("login")

    const pathBreadCumb = [{
        'path' : '/login',
        'name' : `${t("Title")}`
    }]

    return(
        <div className="container-fluid px-5">
            <BreadCrumb path={pathBreadCumb} />
            <section className="login d-flex justify-content-center">
                <div className="col-12 col-md-5 col-lg-4 col-xxl-3">
                    <div className="text-center">
                        <h2 className="heading">{t("Title")}</h2>
                        <p className="desc">{t("Please enter your registered email and password")}</p>
                    </div>  
                    <FormLogin />
                </div>
            </section>
        </div>
    )
}

export default withAuth(Login,'auth') ;