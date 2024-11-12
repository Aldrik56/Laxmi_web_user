import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/router'

// elements
import {Input} from '../../elements/form';
import swal from 'sweetalert';


const ChangeEmail = ({t}) => {
    const router = useRouter()
    const [form,setForm] = useState({})
    const [error,setError] = useState({})
    const [isLoading,setIsLoading] = useState(false)

    // handle
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
        if(form.newEmail){
            if(form.newEmail.includes("@")){
                if(form.confirmEmail){
                    if(form.confirmEmail.includes("@")){
                        if(form.newEmail === form.confirmEmail){
                            if(form.password){
                                swal({
                                    title: `${t("Confirm Change Email")}`,
                                    text: `${t("Are you sure you want to change email")} ?`,
                                    icon: "warning",
                                    buttons: true,
                                    dangerMode: true,
                                })
                                    .then((willDelete) => {
                                    if (willDelete) {
                                        swal(
                                            `${t("Email Changed Successfully")}`, 
                                            `${t("A link to confirm your replacement email has been sent, Please check your email inbox")}`, "success").then(() => {
                                                router.push('/accountdetail')
                                            })
                                        setError({})
                                        setIsLoading(false)                                    
                                    } else{
                                        setIsLoading(false)
                                    }
                                });                                
                            }else{
                                setError({
                                    password : `${t("Password")} ${t("common:cannot be empty")}`
                                })
                                setIsLoading(false)                    
                            }
                        }else{
                            setError({
                                confirmEmail : `${t("The confirmation email must match the new email")}`
                            })
                            setIsLoading(false)            
                        }                     
                    }else{
                        setError({
                            confirmEmail : `${t("common:wrong format")}`
                        })
                        setIsLoading(false)        
                    }                    
                }else{
                    setError({
                        confirmEmail : `Email ${t("common:cannot be empty")}`
                    })
                    setIsLoading(false)        
                }
            }else{
                setError({
                    newEmail : `${t("common:wrong format")}`
                })
                setIsLoading(false)
            }
        }else{
            setError({
                newEmail : `Email ${t("common:cannot be empty")}`
            })
            setIsLoading(false)
        }
    }    

    return (
        <div className="d-flex justify-content-center">
            <div className="col-12 col-lg-4">
                <div className="text-center">
                    <p className="title-change-email">{t("Change Email")}</p>
                    <p className="desc-change-email">{t("Please fill in the following form to change the email")}</p>
                </div>
                <form onSubmit={e => handleSubmit(e)}>
                    <Input 
                        id="newEmail"
                        type="text"
                        error={error.newEmail}
                        label={t("New Email")}
                        onChange={handleChange}
                    />  
                    <Input 
                        id="confirmEmail"
                        type="email"
                        error={error.confirmEmail}
                        label={t("Confirm Email")}
                        onChange={handleChange}
                    />  
                    <Input 
                        id="password"
                        type="password"
                        error={error.password}
                        label={t("Password")}
                        onChange={handleChange}
                    /> 
                    <button 
                        disabled={isLoading}
                        type="submit" 
                        className="btn btn-primary py-3 w-100">{isLoading ? 'Loading' : t("Change")}</button>                
                </form>
            </div>
        </div>
    )
}

export default ChangeEmail