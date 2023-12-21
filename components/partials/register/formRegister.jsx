import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation';
import React, { useEffect, useState } from 'react';

// redux
import { registerAction } from '../../../stores';

// elements
import { Input } from '../../../components/elements/form';
import swal from 'sweetalert';

// helpers
import ValidatePassword from '../../../helpers/validationPassword'

const FormRegister = () => {
    const router = useRouter()

    const [form, setForm] = useState({})
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const { t } = useTranslation("login")

    useEffect(() => {
        setError({
            email: "",
            name: "",
            password: "",
            passwordConfirm: "",
        })
    }, [])

    const handleChange = e => {
        const { value, id } = e.target
        setForm({
            ...form,
            [id]: value
        })
    }

    const validateForm = () => {
        let valid = true;
        var newErrors = { ...error }
        // email
        if (!form.email) {
            newErrors.email = `Email ${t("common:cannot be empty")}`;
            valid = false;
        } else if (!form.email.includes("@")) {
            newErrors.email = `Email ${t("common:is not valid")}`;
            valid = false;
        } else {
            newErrors.email = null
        }
        // name
        if (!form.name) {
            newErrors.name = `Name ${t("common:cannot be empty")}`;
            valid = false;
        } else {
            newErrors.name = null
        }
        // password
        if (!form.password) {
            newErrors.password = `Password ${t("common:cannot be empty")}`;
            valid = false;
        } else if (!ValidatePassword(form.password)) {
            newErrors.password = `Password ${t("common:is not valid")}`;
            valid = false;
        } else {
            newErrors.password = null
        }
        // confirm password
        if (!form.passwordConfirm) {
            newErrors.passwordConfirm = `Confirm Password ${t("common:cannot be empty")}`;
            valid = false;
        } else if (!ValidatePassword(form.passwordConfirm)) {
            newErrors.passwordConfirm = `Confirm Password ${t("common:is not valid")}`;
            valid = false;
        } else if (form.password !== form.passwordConfirm) {
            newErrors.passwordConfirm = `Confirm Password ${t("common:doesn't match with")} Password`;
            valid = false;
        } else {
            newErrors.passwordConfirm = null
        }
        setError(newErrors);
        return valid;
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (validateForm()) {
            setIsLoading(true)
            registerAction(form).then(response => {
                if (response.status) {
                    swal(
                        `${t("Registration Succeeded")}`,
                        `${t("Your account has been registered and please click the ok button to enter the home page")}`, "success").then(() => {
                            router.push('/login')
                        })
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
        <form onSubmit={handleSubmit}>
            {/* {
                error.alert ? 
                <div className="alert alert-danger" role="alert">
                    {error.alert}
                </div> : null     
            }            */}
            <Input
                id="email"
                type="text"
                error={error.email}
                label={t("Email")}
                onChange={handleChange}
            />
            <Input
                id="name"
                type="text"
                error={error.name}
                label={t("Name")}
                onChange={handleChange}
            />
            <Input
                id="password"
                type="password"
                error={error.password}
                label={t("Password")}
                onChange={handleChange}
            />
            <Input
                id="passwordConfirm"
                type="password"
                error={error.passwordConfirm}
                label={t("Confirm Password")}
                onChange={handleChange}
            />
            <button
                disabled={isLoading}
                type="submit"
                className="btn btn-primary py-3 w-100">{isLoading ? 'Loading' : t("Register")}</button>
        </form>
    )
}

export default FormRegister
