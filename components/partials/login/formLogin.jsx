import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation';
import {RemovedRedEye} from '../../elements/icon';

const formLogin = () => {
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
            <div className="form-group">
                <label htmlFor="password">{t("Password")}</label>
                <div className="position-relative">
                    <input 
                        type="password" 
                        className="form-control mt-2" 
                        id="password" 
                        placeholder={t("Password")} />                    
                    <span className="icon-toggle">
                        <RemovedRedEye />
                    </span>                    
                </div>
            </div>
            <div className="form-check d-flex flex-row row justify-content-between">
                <div className="col-12 col-sm-6">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="remember" />
                    <label 
                        className="form-check-label" 
                        htmlFor="remember">{t("Remember Me")}</label>
                </div>
                <div className="col-12 col-sm-6 d-flex justify-content-end">
                    <Link href='/login/forgotpassword'>
                        <a>{t("Forgot Password")} ?</a>
                    </Link>
                </div>
            </div>
            <button 
                type="submit" 
                className="btn btn-primary w-100 py-3">{t("Title")}</button>
        </form>  
    )
}

export default formLogin 