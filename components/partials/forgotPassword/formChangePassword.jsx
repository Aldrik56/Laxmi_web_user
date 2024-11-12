import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation';

// redux
import { forgotAction2, forgotAction3 } from '../../../stores';

// elements
import { Input } from '../../../components/elements/form';
import swal from 'sweetalert';

// helpers
import ValidatePassword from '../../../helpers/validationPassword'

const FormForgotPassword = () => {
    const router = useRouter()
    const { id } = router.query
    const [form, setForm] = useState({})
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const { t } = useTranslation("login")

    useEffect(() => {
        setError({})
        const formValue = {
            "token": id
        }
        forgotAction2(formValue).then(response => {
            if (!response.status) {
                router.push('/')
            }
        })
    }, []);

    const validateForm = () => {
        let valid = true;
        var newErrors = { ...error }
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

    //handle 
    const handleChange = e => {
        const { value, id } = e.target
        setForm({
            ...form,
            [id]: value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (validateForm()) {
            setIsLoading(true)
            swal({
                title: `${t("Confirm Change Password")}`,
                text: `${t("Are you sure you want to change password")} ?`,
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    const formValues = {
                        "password": form.password,
                        "token": id,
                    };
                    forgotAction3(formValues).then((res) => {
                        console.log(res);
                        const { status } = res
                        if (status) {
                            swal(
                                `${t("Password Changed Successfully")}`,
                                `${t("Please log in again")}`, "success").then((v) => {
                                    router.push('/login')
                                })
                            setError({})
                            setIsLoading(false)
                        } else {
                            setError({
                                password: response.message
                            })
                            setIsLoading(false)
                        }
                    }).catch((_) => {
                        setError({
                            password: `${t("common:Something Wrong")}`
                        })
                    })
                } else {
                    setIsLoading(false)
                }
            })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                id="password"
                type="password"
                error={error.password}
                label={t("New Password")}
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
                className="btn btn-primary py-3 w-100">{isLoading ? 'Loading' : t("Change")}</button>
        </form>
    )
}

export default FormForgotPassword 