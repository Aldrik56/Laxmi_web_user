import useTranslation from 'next-translate/useTranslation';
import {RemovedRedEye} from '../../../components/elements/icon';

const FormRegister = () => {
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
            <div className="form-group  ">
                <label htmlFor="email">{t("Name")}</label>
                <input 
                    type="email" 
                    className="form-control mt-2" 
                    id="email" 
                    placeholder={t("Enter Name")} />
            </div>                        
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
                className="btn btn-primary    py-3 w-100">{t("Change")}</button>                
        </form>  
    )
}

export default FormRegister 