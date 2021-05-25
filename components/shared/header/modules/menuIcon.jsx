import {Language,AccountCircle,ShoppingBag} from '../../../elements/icon';
import Link from 'next/link'

import { useRouter } from 'next/router'

import useTranslation from 'next-translate/useTranslation';

const MenuIcon = () => {
    const UseRouter =  useRouter()

    let {t} = useTranslation("navbar")

    return (
        <div className="d-flex flex-row">
            <div className="mx-2">
                <a data-bs-toggle="collapse" data-bs-target="#navbarMenu" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    <Language />
                </a>
                <div className="dropdown-menu dropdown-container dropdown-language mr-4 py-4">
                    <div className="text-center">
                        <h5>{t("Language")}</h5>
                        <p>{t("Choose your language")} :</p>
                    </div>
                    <div className="language-menu">
                        {
                            UseRouter.locales.map((locale,index) => (
                                <Link href={UseRouter.asPath} locale={locale} key={index}>
                                    <div 
                                        key={index} 
                                        className={`language-menu-list px-5 d-flex flex-row align-items-center ${locale === UseRouter.locale ? 'active' : ''} py-2`}>
                                        <img 
                                            src={`/img/icon/${locale === 'en' ? 'UK' : 'ID'}_flag.png`} 
                                            alt="laxmi tailer"
                                            className="flag-icon mr-3" />
                                        <h6 className="my-0 ml-3">{locale === 'en' ? `${t("English")}` : `${t("Indonesian")}`}</h6>                                        
                                    </div>    
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>                        
            <div className="mx-2">
                <a type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    <AccountCircle />
                </a>
                <ul className="dropdown-menu dropdown-container dropdown-account py-4">
                    <div className="text-center">
                        <h5>{t("hi")}, Jhon</h5>
                        <p>{t("Access to your personal area")} : </p>
                    </div>
                    <li><a className="dropdown-item" href="#">{t("Account Detail")}</a></li>
                    <li><a className="dropdown-item" href="#">{t("Notification")}</a></li>
                    <li><a className="dropdown-item" href="#">{t("My Orders")}</a></li>
                    <li><a className="dropdown-item" href="#">{t("My Addresses")}</a></li>
                    <li><a className="dropdown-item" href="#">{t("Log Out")}</a></li>
                </ul>
            </div>                        
            <div className="mx-2">
                <ShoppingBag />
            </div>                        
        </div>
    )
}

export default MenuIcon