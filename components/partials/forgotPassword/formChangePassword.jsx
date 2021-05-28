import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation';

// redux
import {forgotAction2,forgotAction3} from '../../../stores';

// elements
import {Input} from '../../../components/elements/form';
import swal from 'sweetalert';

// helpers
import ValidatePassword from '../../../helpers/validationPassword'

const FormForgotPassword = () => {
    const router = useRouter()
    const { id } = router.query
    const [form,setForm] = useState({})
    const [error,setError] = useState({})
    const [isLoading,setIsLoading] = useState(false)

    const {t} = useTranslation("login")

    useEffect(() => {
        setError({})
        const formValue = {
            "token_forget" : id
        }
        forgotAction2(formValue).then(response => {
            if(!response.status){
                router.push('/')
            }
        })        
    },[]);    

    //handle 
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
        if(form.password){
            if(ValidatePassword(form.password)){
                if(form.password === form.passwordConfirm){
                    swal({
                        title: `${t("Confirm Change Password")}`,
                        text: `${t("Are you sure you want to change password")} ?`,
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      })
                      .then((willDelete) => {
                        if (willDelete) {
                            const formValue = {
                                "password": form.password,
                                "token_forget" : id
                            }
                            forgotAction3(formValue).then(response => {
                                if(response.status){
                                    swal(
                                        `${t("Password Changed Successfully")}`, 
                                        `${t("Please log in again")}`, "success").then(() => {
                                            router.push('/login')
                                        })
                                    setError({})
                                    setIsLoading(false)
                                }else{
                                    setError({
                                        password : response.message
                                    })   
                                    setIsLoading(false)                                   
                                }
                            })                  
                        } else{
                            setIsLoading(false)
                        }
                      });                    
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