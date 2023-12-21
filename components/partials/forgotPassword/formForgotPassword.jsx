import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation';

import React, { useEffect, useState } from 'react';

// redux
import { forgotAction1 } from '../../../stores';

// elements
import { Input } from '../../elements/form';
import swal from 'sweetalert';

const FormForgotPassword = () => {
    const [form, setForm] = useState({})
    const [error, setError] = useState({})
    const [isSentLink, setIsSentLink] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const { t } = useTranslation("login")

    useEffect(() => {
        setError({ email: "" })
    }, [])

    // handle
    const handleChange = e => {
        const { value, id } = e.target
        setForm({
            ...form,
            [id]: value
        })
    }

    const validationForm = () => {
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
        setError(newErrors)
        return valid
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (validationForm()) {
            setIsLoading(true)
            forgotAction1(form).then((response) => {
                if (response.status) {
                    swal(
                        `${t("Link Sent Successfully")}`,
                        `${t("Please check your email to change password")}`, "success").then(() => {
                            setIsSentLink(true)
                        })
                    setError({})
                    setIsLoading(false)
                } else {
                    setError({
                        email: response.message
                    })
                    setIsLoading(false)
                }
            }).catch((e) => {
                setError({
                    email: `${t("common: Something Wrong")}`
                })
            })
        }
    }


    return (
        <>
            {
                isSentLink ?
                    <>
                        <div className="text-center">
                            <h2 className="heading">{t("Change Your Password")}</h2>
                            <p className="desc">{t("The link to change the password has been sent via email")}</p>
                            <p className="value mt-4">{form.email}</p>
                            <button
                                onClick={e => handleSubmit(e)}
                                type="button"
                                className="btn btn-primary btn-lg mt-4">{t("Resend Link")}</button>
                        </div>
                    </>
                    :
                    <div className="col-12 col-md-6 col-lg-5 col-xxl-4">
                        <div className="text-center">
                            <h2 className="heading">{t("Forgot Your Password")} ?</h2>
                            <p className="desc">{t("Please enter your email to receive a link to create new password")}</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="col-9">
                                <form onSubmit={handleSubmit}>
                                    <Input
                                        id="email"
                                        type="text"
                                        error={error.email}
                                        label={t("Email")}
                                        onChange={handleChange}
                                    />
                                    <div className="row justify-content-between">
                                        <div className="col-12 col-lg-6">
                                            <Link
                                                href={'/login'} >
                                                <button className="btn btn-light py-3 w-100">{t("Go Back")}</button>
                                            </Link>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <button
                                                disabled={isLoading}
                                                type="submit"
                                                className="btn btn-primary py-3 w-100">{isLoading ? 'Loading' : t("Recover")}</button>
                                        </div>
                                    </div>
                                </form>
                                <hr />
                                <p className="text-center link">{t("Don’t have an account")} ? <Link href="/login/register"><a>{t("Register")}</a></Link></p>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default FormForgotPassword 