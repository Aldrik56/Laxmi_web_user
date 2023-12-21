import Link from 'next/link'
import { withRouter, useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import { AccountCircle } from '../../../elements/icon';

// data
import linkArray from '../../data/linkArray';

// redux
import { connect } from 'react-redux'
import { logout, loginAction, enterPage } from '../../../../stores';

// elements
import { Input } from '../../../elements/form';

const Account = ({
    router,
    setIsShowAccount,
    isShowAccount,
    form,
    error,
    setForm,
    setError,
    t,
    authData,
    loginAction,
    logout,
    enterPage }) => {
    const pathName = router.pathname
    const UseRouter = useRouter()

    useEffect(() => {
        enterPage()
        setError({})
    }, [isShowAccount]);

    useEffect(() => {
        setError({
            email: authData.error
        })
    }, [authData.error]);

    const validateForm = () => {
        let valid = true;
        var newErrors = { ...error }

        if (!form.email) {
            newErrors.email = `Email ${t("common:cannot be empty")}`;
            valid = false;
        } else if (!form.email.includes("@")) {
            newErrors.email = `Email ${t("common:is not valid")}`;
            valid = false;
        } else {
            newErrors.email = null
        }
        if (!form.password) {
            newErrors.password = `Password ${t("common:cannot be empty")}`;
            valid = false;
        } else {
            newErrors.password = null
        }
        setError(newErrors);
        return valid;
    }

    // handle
    const handleSubmit = e => {
        e.preventDefault()
        if (validateForm()) {
            loginAction(form, router)
            // setIsShowAccount(!isShowAccount)
        }
        // if (form.email) {
        //     if (form.password) {
        //         loginAction(form, UseRouter)
        //         // setError({})
        //     } else {
        //         setError({
        //             password: `${t("common:Password")} ${t("common:cannot be empty")}`
        //         })
        //     }
        // } else {
        //     setError({
        //         email: `Email ${t("common:cannot be empty")}`
        //     })
        // }
    }
    const handleChange = e => {
        const { value, id } = e.target

        setForm({
            ...form,
            [id]: value
        })
    }

    return (
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
                            {
                                linkArray.map((dataLink, index) => (
                                    <li key={index}>
                                        <Link href={dataLink.url}>
                                            <a className={`d-flex justify-content-between dropdown-item ${dataLink.url === pathName ? 'active' : ''}`}>
                                                {t(dataLink.title)}
                                                {
                                                    index === 1 ?
                                                        <span className="notif pt-1">1</span> : null
                                                }
                                            </a>
                                        </Link>
                                    </li>
                                ))
                            }
                            <li>
                                <a className="dropdown-item" onClick={() => {
                                    logout()
                                    setIsShowAccount(!isShowAccount)
                                    setTimeout(function () { window.location.reload() }, 500)
                                }}>{t("Log Out")}</a></li>
                        </> :
                        <>
                            <h5 className="text-center">{t("common:Access your account")}</h5>
                            <form className="px-5 pt-3" onSubmit={handleSubmit}>
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
                            <div className="text-center pt-3" onClick={() => setIsShowAccount(!isShowAccount)}>
                                <Link href='/login/forgotpassword' >
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
    )
}
const mapStateToProps = state => {
    return {
        authData: state.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        loginAction: (form, router) => dispatch(loginAction(form, router)),
        enterPage: () => dispatch(enterPage())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Account))
