import Link from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation';
import React, { useState,useEffect } from 'react';

// redux
import { connect } from 'react-redux'
import {logout,loginAction,enterPage} from '../../../stores';

// elements
import {Input} from '../../../components/elements/form';

const formLogin = ({authData,loginAction,enterPage}) => {
    const router = useRouter()

    const [form,setForm] = useState({})
    const [error,setError] = useState({})

    const {t} = useTranslation("login")

    useEffect(() => {
        enterPage()
        setError({})
    },[]);   
    
    useEffect(() => {
        setError({
            email : authData.error
        })
    },[authData.error]);  
    
    // handle
    const handleSubmit = e => {
        e.preventDefault()
        if(form.email){
            if(form.password){
                loginAction(form,router)
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
        <form onSubmit={handleSubmit}>
            {/* {
                authData.error ? 
                <div className="alert alert-danger" role="alert">
                    {authData.error}
                </div> : null     
            }             */}
            <Input 
                id="email"
                type="text"
                error={error.email}
                label={t("Email")}
                onChange={handleChange}
            />   
            <Input 
                id="password"
                type="password"
                error={error.password}
                label={t("Password")}
                onChange={handleChange}
            /> 
            <div className="form-check d-flex flex-row row justify-content-between">
                <div className="col-12 col-sm-6">
                    {/* <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="remember" />
                    <label 
                        className="form-check-label" 
                        htmlFor="remember">{t("Remember Me")}</label> */}
                </div>
                <div className="col-12 col-sm-6 d-flex justify-content-end">
                    <Link href='/login/forgotpassword'>
                        <a>{t("Forgot Password")} ?</a>
                    </Link>
                </div>
            </div>
            <button 
                disabled={authData.isLoading}
                type="submit" 
                className="btn btn-primary w-100 py-3">{authData.isLoading ? 'Loading' : t("common:Login")}</button>
        </form>  
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
        loginAction: (form,router) => dispatch(loginAction(form,router)),
        enterPage : () => dispatch(enterPage())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(formLogin)
