import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation';

import React, { useState,useEffect } from 'react';
import {Language,ShoppingBag} from '../../../elements/icon';

import Cookies from 'js-cookie';

// modules
import Account from './Account';

const MenuIcon = () => {
    const UseRouter =  useRouter()
    let {t} = useTranslation("navbar")

    const [isShowAccount, setIsShowAccount] = useState(false);
    const [form,setForm] = useState({})
    const [error,setError] = useState({})


    useEffect(() => {
        Cookies.set('next-i18next', UseRouter.locale);
    },[]);    

    // handle
    const handleChangeLanguage = locale=> {
        Cookies.set('next-i18next',locale);
        setTimeout(function(){ window.location.reload() }, 500);
    }

    return (
        <div className="d-flex flex-row">
            <div className="mx-2">
                <a data-bs-toggle="collapse" data-bs-target="#navbarMenu" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => setIsShowAccount(false)}>
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
                                <div key={index}>
                                    <Link href={UseRouter.asPath} locale={locale} key={index}>
                                        <div 
                                            key={index} 
                                            onClick={() => handleChangeLanguage(locale)}
                                            className={`language-menu-list px-5 d-flex flex-row align-items-center ${locale === UseRouter.locale ? 'active' : ''} py-2`}>
                                            <Image 
                                                height={26}
                                                width={34}
                                                src={`/img/icon/${locale === 'en' ? 'UK' : 'ID'}_flag.png`} 
                                                alt="laxmi tailer" 
                                                />
                                            <h6 className="my-0 ml-3">{locale === 'en' ? `${t("English")}` : `${t("Indonesian")}`}</h6>                                        
                                        </div>    
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>                        

            <Account
                setIsShowAccount={setIsShowAccount}
                isShowAccount={isShowAccount} 
                form={form}
                error={error}
                setForm={setForm}
                setError={setError}
                t={t} />

            <div className="mx-2" onClick={() => setIsShowAccount(false)}>
                <Link href='/products/cart'>
                    <a>
                        <ShoppingBag />
                    </a>
                </Link>
            </div>                        
        </div>
    )
}
export default MenuIcon ;