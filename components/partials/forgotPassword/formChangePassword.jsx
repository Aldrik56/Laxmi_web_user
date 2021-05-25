import useTranslation from 'next-translate/useTranslation';
import {RemovedRedEye} from '../../../components/elements/icon';

const FormForgotPassword = () => {
    const {t} = useTranslation("login")
    
    return (
        <form>
            <div className="form-group  ">
                <label htmlFor="email">{t("New Password")}</label>
                <div className="position-relative">
                    <input 
                        type="password" 
                        className="form-control mt-2" 
                        id="email" 
                        placeholder={t("New Password")} />
                    <span className="icon-toggle">
                        <RemovedRedEye />
                    </span>                    
                </div>
            </div>
            <div className="form-group  ">
                <label htmlFor="email">{t("Confirm Password")}</label>
                <div className="position-relative">
                    <input 
                        type="password" 
                        className="form-control mt-2" 
                        id="email" 
                        placeholder={t("Confirm Password")} />
                    <span className="icon-toggle">
                        <RemovedRedEye />
                    </span>                    
                </div>                    
            </div>
            <button 
                type="submit" 
                className="btn btn-primary py-3 w-100">{t("Change")}</button>                
        </form>  
    )
}

export default FormForgotPassword 