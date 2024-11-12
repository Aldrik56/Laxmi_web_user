import React, { useState,useEffect } from 'react';
import parse from 'html-react-parser';

// helper
import Axios from '../../../../helpers/axiosConfig'

const TermConditionContainer = () => {
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)

    useEffect(() => {
        Axios.get(`/web_info/term_and_condition`)
        .then(response => {
            const {data,status,message} = response.data
            if(status){
                setData(data)
            }else{
                setError(message)
            }
        })
        .catch(error => {
            setError(error.message)
        })      
    },[]);
    
    return (
        <div className="html-parse container-fluid px-5">
            {
                data ?
                parse(data.description)
                :
                error ?
                <p className="text-center">{error}</p> : 
                <div className="loader"></div>
            }
        </div>
    )
}

export default TermConditionContainer ;