import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation';
import React, { useState } from 'react';

// redux
import {registerAction} from '../../../stores';

// elements
import {Input} from '../../../components/elements/form';
import swal from 'sweetalert';

// helpers
import ValidatePassword from '../../../helpers/validationPassword'

const FormRegister = () => {
    const router = useRouter()

    const [form,setForm] = useState({})
    const [error,setError] = useState({})
    const [isLoading,setIsLoading] = useState(false)

    const {t} = useTranslation("login")

    const handleChange = e => {
        const {value,id} = e.target
        setForm({
            ...form,
            [id] : value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        setIsLoading(true)
        if(form.email){
            if(form.email.includes("@")){
                if(form.name){
                    if(form.password){
                        if(ValidatePassword(form.password)){
                            if(form.password === form.passwordConfirm){
                                registerAction(form).then(response => {
                                    if(response.status){
                                        swal(
                                            `${t("Registration Succeeded")}`, 
                                            `${t("Your account has been registered and please click the ok button to enter the home page")}`, "success").then(() => {
                                                router.push('/login')
                                            })
                                        setError({})
                                        setIsLoading(false)
                                    }else{
                                        setError({
                                            email : response.message
                                        })   
                                        setIsLoading(false)                                   
                                    }
                                })                  
                            }else{
                                setError({
                                    passwordConfirm : `${t("The confirmation password must match the password")}`
                                })
                                setIsLoading(false)                               
                            }
                        }else{
                            setError({
                                password : `${t("Wrong Password Format, at least 8 characters with a combination of numbers, letters and unique characters")}`
                            }) 
                            setIsLoading(false)                          
                        }
                    }else{
                        setError({
                            password : `${t("common:cannot be empty")}`
                        })  
                        setIsLoading(false)      
                    }    
                }else{
                    setError({
                        name : `${t("common:cannot be empty")}`
                    })  
                    setIsLoading(false)      
                }
            }else{
                setError({
                    email : `${t("common:wrong format")}`
                })
                setIsLoading(false)
            }
        }else{
            setError({
                email : `Email ${t("common:cannot be empty")}`
            })
            setIsLoading(false)
        }
    }    
    return (
        <form onSubmit={handleSubmit}>
            {
                error.alert ? 
                <div className="alert alert-danger" role="alert">
                    {error.alert}
                </div> : null     
            }           
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
