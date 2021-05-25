import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation';

const FormForgotPassword = () => {
    const {t} = useTranslation("login")
    
    return (
        <form>
            <div className="form-group  ">
                <label htmlFor="email">{t("Email")}</label>
                <input 
                    type="email" 
                    className="form-control mt-2" 
                    id="email" 
                    placeholder={t("Enter Email")} />
            </div>
            <div className="row justify-content-between">
                <div className="col-12 col-lg-6">
                    <Link 
                        href={'/login'} >
                        <button className="btn btn-light py-3 w-100">{t("Go Back")}</button>
                    </Link>                
                </div>
                <div className="col-12 col-lg-6">
                    <button 
                        type="submit" 
                        className="btn btn-primary py-3 w-100">{t("Recover")}</button>                
                </div>
            </div>
        </form>  
    )
}

export default FormForgotPassword 