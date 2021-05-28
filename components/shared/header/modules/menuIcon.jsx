import {Language,AccountCircle,ShoppingBag} from '../../../elements/icon';
import Link from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation';

import React, { useState,useEffect } from 'react';


// redux
import { connect } from 'react-redux'
import {logout,loginAction,enterPage} from '../../../../stores';

// elements
import {Input} from '../../../elements/form';


const MenuIcon = ({authData,loginAction,logout,enterPage}) => {
    const [isShowAccount, setIsShowAccount] = useState(false);
    const [form,setForm] = useState({})
    const [error,setError] = useState({})

    useEffect(() => {
        enterPage()
        setError({})
    },[isShowAccount]);    

    const UseRouter =  useRouter()
    let {t} = useTranslation("navbar")

    // handle
    const handleSubmit = e => {
        e.preventDefault()
        if(form.email){
            if(form.password){
                loginAction(form)
                setError({})
            }else{
                setError({
                    password : `${t("common:Password")} ${t("common:cannot be empty")}`
                })                
            }
        }else{
            setError({
                email : `Email ${t("common:cannot be empty")}`
            })
        }
    }
    const handleChange = e => {
        const {value,id} = e.target

        setForm({
            ...form,
            [id] : value
        })
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
                <a type="button" id="dropdownMenuButton" aria-expanded="false" onClick={() => setIsShowAccount(!isShowAccount)}>
                    <AccountCircle />
                </a>
                <ul className={`dropdown-menu dropdown-container dropdown-account py-4 ${isShowAccount ? 'show' : ''}`}>
                    {
                        authData.isLogin ? 
                        <>
                            <div className="text-center">
                                <h5>{t("hi")}, {authData.data.name}</h5>
                                <p>{t("Access to your personal area")} : </p>
                            </div>
                            <li><a className="dropdown-item" href="#">{t("Account Detail")}</a></li>
                            <li><a className="dropdown-item" href="#">{t("Notification")}</a></li>
                            <li><a className="dropdown-item" href="#">{t("My Orders")}</a></li>
                            <li><a className="dropdown-item" href="#">{t("My Addresses")}</a></li>
                            <li><a className="dropdown-item" onClick={() => logout()}>{t("Log Out")}</a></li>                        
                        </> : 
                        <>
                            <h5 className="text-center">{t("common:Access your account")}</h5>                          
                            <form className="px-5 pt-3" onSubmit={handleSubmit}>
                                {
                                    authData.error ? 
                                    <div className="alert alert-danger" role="alert">
                                    {authData.error}
                                    </div> : null     
                                }
                                <Input 
                                    id="email"
                                    type="text"
                                    error={error.email}
                                    label={t("common:Email")}
                                    onChange={handleChange}
                                />   
                                <Input 
                                    id="password"
                                    type="password"
                                    error={error.password}
                                    label={t("common:Password")}
                                    onChange={handleChange}
                                />   
                                <button 
                                    disabled={authData.isLoading}
                                    type="submit" 
                                    className="btn btn-primary w-100 py-3">{authData.isLoading ? 'Loading' : t("common:Login")}</button>
                            </form>
                            <div className="text-center pt-3">
                                <Link href='/login/forgotpassword'>
                                    <p className="link mb-0">{t("common:Forgot Password")} ?</p>
                                </Link>
                                <Link href='/login/register'>
                                    <p className="link mb-0">{t("common:Create Account")}</p>
                                </Link>                                                                
                            </div>
                        </>
                    }
                </ul>
            </div>                        
            <div className="mx-2" onClick={() => setIsShowAccount(false)}>
                <a type="button">
                    <ShoppingBag />
                </a>
            </div>                        
        </div>
    )
}
const mapStateToProps = state => {
    return {
      authData: state.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logout : () => dispatch(logout()),
        loginAction: form => dispatch(loginAction(form)),
        enterPage : () => dispatch(enterPage())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuIcon)